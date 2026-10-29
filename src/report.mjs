// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 unicbm.
import { matches, fingerprint, sha256 } from './pe.mjs';

export function signatureCheck(image, name, signature, source) {
  if (!signature) return { name, source, status: 'not_checked', reason: 'No Windows signature supplied' };
  const count = matches(image, signature).length;
  return { name, source, status: count === 1 ? 'pass' : 'fail', matches: count,
    reason: count === 1 ? 'One executable-section match; semantics not verified' : count === 0 ? 'No executable-section match' : 'Ambiguous signature' };
}

export function checkGamedata(data, images, source) {
  return Object.entries(data).flatMap(([name, entry]) => {
    const rows = [];
    if (entry.signatures) {
      const image = images[entry.signatures.library];
      if (!image) throw new Error('Unknown gamedata module: ' + entry.signatures.library);
      rows.push(signatureCheck(image, name, entry.signatures.windows, source));
    }
    if (entry.offsets) rows.push({ name: name + ' (layout)', source, status: 'not_checked', reason: 'Field offset or virtual slot requires runtime / semantic validation' });
    if (!entry.signatures && !entry.offsets) throw new Error('Unrecognized gamedata entry: ' + name);
    return rows;
  });
}

export function checkProfile(profile, image, source) {
  if (profile.formatVersion !== 1 || profile.algorithm !== 'pe-image-v1') throw new Error('Unsupported native profile format');
  const p = profile.projectilePhysics;
  const rows = [signatureCheck(image, 'Projectile physics signature', p.signature, source)];
  const check = (name, ok, reason) => rows.push({ name, source, status: ok ? 'pass' : 'fail', reason });
  check('Server image fingerprint', fingerprint(image) === profile.imageSha256.toLowerCase(), 'pe-image-v1 comparison with the pinned product profile');
  try {
    const found = matches(image, p.signature);
    check('Projectile entry', found.length === 1 && found[0] === p.entryRva, 'Signature must resolve to the configured entry');
    const at = image.offset(p.entryRva, p.bodyLength);
    check('Projectile function body', sha256(image.bytes.subarray(at, at + p.bodyLength)) === p.bodySha256.toLowerCase(), 'On-disk function body hash; loaded memory not inspected');
    if (!Array.isArray(p.vtableSlotRvas) || p.vtableSlotRvas.length !== 6) throw new Error('Expected six projectile slots');
    check('Projectile virtual references', p.vtableSlotRvas.every(rva => image.bytes.readBigUInt64LE(image.offset(rva, 8)) === image.imageBase + BigInt(p.entryRva)), 'All six on-disk references must point to the configured entry');
  } catch {
    check('Projectile profile layout', false, 'Configured ranges or references are invalid for this image');
  }
  return rows;
}

export function inlineSignatures(text) {
  const definitions = [['writer', 2], ['itemViewDestructor', 1], ['itemViewConstructor', 2]];
  const all = [...text.matchAll(/"((?:[0-9A-F]{2}|\?\??)(?: (?:[0-9A-F]{2}|\?\??)){4,})"/g)];
  if (all.length !== 5) throw new Error('BotRandomizer signature inventory changed; update the extractor');
  return definitions.map(([name, expected]) => {
    const block = text.match(new RegExp('\\b' + name + ' = new MemoryFunctionWithReturn[\\s\\S]*?\\);'))?.[0];
    const patterns = [...(block ?? '').matchAll(/"((?:[0-9A-F]{2}|\?\??)(?: (?:[0-9A-F]{2}|\?\??)){4,})"/g)];
    if (patterns.length !== expected) throw new Error('Unsupported inline binding layout: ' + name);
    if (expected === 2 && !/IsOSPlatform\(OSPlatform\.Linux\)\s*\?\s*"[^"]+"\s*:\s*"[^"]+"/.test(block))
      throw new Error('Unsupported inline platform selection: ' + name);
    return { name, signature: patterns.at(-1)[1] };
  });
}

export function parseVdf(text) {
  const tokens = text.match(/"(?:\\.|[^"\\])*"|[{}]/g) ?? [];
  let i = 0;
  function object(nested = false) {
    const result = {};
    while (i < tokens.length && tokens[i] !== '}') {
      const key = tokens[i++];
      if (!key?.startsWith('"')) throw new Error('Invalid VDF key');
      const value = tokens[i++];
      const name = JSON.parse(key);
      if (Object.hasOwn(result, name)) throw new Error('Duplicate VDF key');
      if (value === '{') result[name] = object(true);
      else if (value?.startsWith('"')) result[name] = JSON.parse(value);
      else throw new Error('Invalid VDF value');
    }
    if (nested && tokens[i++] !== '}') throw new Error('Unclosed VDF object');
    return result;
  }
  const result = object();
  if (i !== tokens.length) throw new Error('Trailing VDF tokens');
  return result;
}

export function gameMetadata(inf, manifest) {
  const fields = Object.fromEntries(inf.split(/\r?\n/).filter(l => l.includes('=')).map(l => l.split('=')));
  const app = parseVdf(manifest).AppState;
  const numeric = value => { if (!/^\d+(?:\.\d+)*$/.test(value ?? '')) throw new Error('Missing or invalid game version metadata'); return value; };
  return { patchVersion: numeric(fields.PatchVersion), serverVersion: numeric(fields.ServerVersion),
    appId: numeric(app.appid), buildId: numeric(app.buildid),
    depots: Object.fromEntries(Object.entries(app.InstalledDepots ?? {}).map(([id, depot]) => [numeric(id), numeric(depot.manifest)])) };
}

export function summarize(checks) {
  return Object.fromEntries(['pass', 'fail', 'not_checked'].map(status => [status, checks.filter(c => c.status === status).length]));
}
export function markdown(report) {
  const esc = s => String(s).replaceAll('|', '\\|').replaceAll('\n', ' ');
  const badge = s => ({ pass: '✅ 匹配', fail: '❌ 失败', not_checked: '⚪ 待验证' })[s];
  const lines = ['# Windows x64 适配快照', '', `检测时间：${report.checkedAt}`, '',
    `CS2 **${report.game.patchVersion}** · server ${report.game.serverVersion} · Steam build **${report.game.buildId}**`, '',
    '**这是指定本地游戏版本的静态检查，不代表当前 Steam 最新版本，也不代表游戏内回放已通过。**', '',
    '| 产品源码 | 静态匹配 | 失败 | 待验证项 | 组件加载 | 实际回放 |', '| --- | ---: | ---: | ---: | --- | --- |'];
  for (const s of report.sources) lines.push(`| [${esc(s.ref)}](https://github.com/unicbm/demotracer/tree/${s.commit}) | ${s.summary.pass} | ${s.summary.fail} | ${s.summary.not_checked} | 待验证 | 待验证 |`);
  lines.push('', '偏移、虚表语义、调用约定和动态 Schema 不会因字节匹配而自动通过。', '', '## 游戏模块', '', '| 模块 | 文件 SHA-256 | pe-image-v1 |', '| --- | --- | --- |');
  for (const [name, m] of Object.entries(report.modules)) lines.push(`| ${name} | \`${m.sha256}\` | \`${m.fingerprint}\` |`);
  lines.push('', '## Steam manifests', '', ...Object.entries(report.game.depots).map(([id, hash]) => `- ${id}: ${hash}`));
  for (const s of report.sources) {
    lines.push('', `## ${esc(s.ref)}`, '', `源码：\`${s.commit}\`；声明的 Playback 版本：${esc(s.version)}`, '',
      `依赖要求：CSS ≥ ${esc(s.requirements.css)}；Metamod build ≥ ${s.requirements.metamod}。这是产品要求，不是已安装版本的检测结果。`, '',
      '| 检查项 | 结果 | 说明 |', '| --- | --- | --- |');
    for (const c of s.checks) lines.push(`| [${esc(c.name)}](https://github.com/unicbm/demotracer/blob/${s.commit}/${c.source}) | ${badge(c.status)} | ${esc(c.reason)} |`);
  }
  return lines.join('\n') + '\n';
}
