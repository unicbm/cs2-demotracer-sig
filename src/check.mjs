// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 unicbm.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { parseArgs } from 'node:util';
import { readPe, sha256, fingerprint } from './pe.mjs';
import { checkGamedata, checkProfile, inlineSignatures, signatureCheck, gameMetadata, summarize, markdown } from './report.mjs';

const { values } = parseArgs({ options: {
  'game-dir': { type: 'string' }, 'app-manifest': { type: 'string' },
  refs: { type: 'string' }, output: { type: 'string', default: 'reports/latest' }, help: { type: 'boolean' }
} });
if (values.help || !values['game-dir']) {
  console.log('node src/check.mjs --game-dir <CS2 installation root> [--app-manifest <acf>] [--refs v1.6.5,main] [--output reports/latest]');
  console.log('Defaults: latest public release + main. Reads local Windows binaries; fetches only public product source. No game launch, patching or upload. Exit 0: no static failures (runtime unverified); 1: static failures; 2: tool/input error.');
  process.exit(values.help ? 0 : 2);
}

const repository = 'unicbm/demotracer';
async function fetchText(url) {
  const response = await fetch(url, { headers: { 'User-Agent': 'cs2-demotracer-sig',
    ...(process.env.GH_TOKEN && new URL(url).hostname === 'api.github.com' ? { Authorization: `Bearer ${process.env.GH_TOKEN}` } : {}) }, signal: AbortSignal.timeout(30000) });
  if (!response.ok) throw new Error(`Public source request failed: HTTP ${response.status} ${url}`);
  return response.text();
}
const api = async suffix => JSON.parse(await fetchText(`https://api.github.com/repos/${repository}/${suffix}`));
const cache = new Map();
function source(commit, path) {
  const url = `https://raw.githubusercontent.com/${repository}/${commit}/${path}`;
  if (!cache.has(url)) cache.set(url, fetchText(url));
  return cache.get(url);
}

try {
  const gameRoot = resolve(values['game-dir']);
  const manifestPath = values['app-manifest'] ?? resolve(gameRoot, '../../appmanifest_730.acf');
  const [inf, acf, server, engine] = await Promise.all([
    readFile(resolve(gameRoot, 'game/csgo/steam.inf'), 'utf8'), readFile(manifestPath, 'utf8'),
    readFile(resolve(gameRoot, 'game/csgo/bin/win64/server.dll')), readFile(resolve(gameRoot, 'game/bin/win64/engine2.dll'))
  ]);
  const images = { server: readPe(server), engine2: readPe(engine) };
  const refs = values.refs ? values.refs.split(',') : [(await api('releases/latest')).tag_name, 'main'];
  if (refs.some(ref => !/^[\w./-]+$/.test(ref))) throw new Error('Invalid source ref');
  const report = { schemaVersion: 1, checkedAt: new Date().toISOString(), platform: 'windows-x64',
    checkerVersion: JSON.parse(await readFile(new URL('../package.json', import.meta.url))).version,
    game: gameMetadata(inf, acf), modules: Object.fromEntries(Object.entries(images).map(([name, image]) =>
      [name, { sha256: sha256(image.bytes), fingerprint: fingerprint(image) }])), sources: [] };
  for (const ref of [...new Set(refs)]) {
    const commit = (await api(`commits/${encodeURIComponent(ref)}`)).sha;
    if (!/^[0-9a-f]{40}$/.test(commit)) throw new Error('Source ref did not resolve to a commit');
    const paths = [
      'server/runtime/dtr-controller/configs/addons/dtr-controller/gamedata.json',
      'server/runtime/dtr-hider/configs/addons/dtr-hider/gamedata.json',
      'server/plugins/DemoTracer/config/demotracer-native.json',
      'server/runtime/BotRandomizer/BotRandomizerItems.cs',
      'shared/contracts/playback-contract.v1.json',
      'server/plugins/DemoTracer/src/DemoTracer/Lifecycle/DemoTracerPlugin.cs',
      'server/runtime/dtr-controller/src/common/version_targets.cpp'
    ];
    const text = await Promise.all(paths.map(path => source(commit, path)));
    const contract = JSON.parse(text[4]);
    const version = text[5].match(/ModuleVersion\s*=>\s*"([\d.]+)"/)?.[1];
    if (!version) throw new Error('Cannot read product version');
    const checks = [
      ...checkGamedata(JSON.parse(text[0]), images, paths[0]),
      ...checkGamedata(JSON.parse(text[1]), images, paths[1]),
      ...checkProfile(JSON.parse(text[2]), images.server, paths[2]),
      ...inlineSignatures(text[3]).map(s => signatureCheck(images.server, 'BotRandomizer: ' + s.name, s.signature, paths[3]))
    ];
    const fields = [...text[6].matchAll(/\{\s*"(\w+)"\s*,\s*"(\w+)"\s*,\s*&\w+\s*\}/g)];
    if (!fields.length) throw new Error('Cannot enumerate required Schema fields');
    checks.push({ name: 'Dynamic Schema', source: paths[6], status: 'not_checked', reason: `${fields.length} required fields; live SchemaSystem resolution not checked` });
    report.sources.push({ ref, commit, version, requirements: { css: contract.counterstrikesharp.minimum_version,
      metamod: contract.hook_runtime.metamod_minimum_build }, checks, summary: summarize(checks),
      runtime: { status: 'not_checked', reason: 'No server startup or loaded-module inspection performed' },
      replay: { status: 'not_checked', reason: 'No replay scenario executed' } });
  }
  const output = resolve(values.output);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output + '.json', JSON.stringify(report, null, 2) + '\n');
  await writeFile(output + '.md', markdown(report));
  for (const s of report.sources) console.log(`${s.ref} (${s.commit.slice(0, 12)}): ${s.summary.pass} pass, ${s.summary.fail} fail, ${s.summary.not_checked} not checked; runtime/replay not checked`);
  process.exitCode = report.sources.some(s => s.summary.fail) ? 1 : 0;
} catch (error) {
  console.error(error.message);
  process.exitCode = 2;
}
