// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 unicbm.
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { parseArgs } from 'node:util';
import { schemaRequests, validateSchema, schemaChecks } from './schema.mjs';
import { readPe, sha256, fingerprint } from './pe.mjs';
import { checkGamedata, checkProfile, inlineSignatures, signatureCheck, gameMetadata, summarize, markdown } from './report.mjs';

const { values } = parseArgs({ options: {
  'game-dir': { type: 'string' }, 'app-manifest': { type: 'string' },
  'prepare-schema': { type: 'boolean' }, schema: { type: 'string', default: '.cache/schema.json' }, refs: { type: 'string' }, output: { type: 'string', default: 'reports/latest' }, help: { type: 'boolean' }
} });
if (values.help || !values['game-dir']) {
  console.log('node src/check.mjs --game-dir <CS2 installation root> [--app-manifest <acf>] [--refs v1.6.5,main] [--output reports/latest] [--prepare-schema] [--schema .cache/schema.json]');
  console.log('Defaults: latest public release + main. Reads local Windows binaries; fetches only public product source. Uses live Schema evidence from --schema; --prepare-schema writes the query list. No game launch or upload from this command. Exit 0: no static failures (runtime unverified); 1: static failures; 2: tool/input error.');
  console.log('Schema: --prepare-schema; then pwsh -File src/collect-schema.ps1 -GameDir <root>; then rerun without --prepare-schema. Probe requires dotnet build probe/SchemaProbe.csproj -c Release and cmake -S probe/native -B probe/native/build -A x64 -DHL2SDK=<SDK>, followed by cmake --build probe/native/build --config Release.');
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
  const [inf, acf, server, engine, schemaModule] = await Promise.all([
    readFile(resolve(gameRoot, 'game/csgo/steam.inf'), 'utf8'), readFile(manifestPath, 'utf8'),
    readFile(resolve(gameRoot, 'game/csgo/bin/win64/server.dll')), readFile(resolve(gameRoot, 'game/bin/win64/engine2.dll')), readFile(resolve(gameRoot, 'game/bin/win64/schemasystem.dll'))
  ]);
  const images = { server: readPe(server), engine2: readPe(engine), schemasystem: readPe(schemaModule) };
  const refs = values.refs ? values.refs.split(',') : [(await api('releases/latest')).tag_name, 'main'];
  if (refs.some(ref => !/^[\w./-]+$/.test(ref))) throw new Error('Invalid source ref');
  const report = { schemaVersion: 1, checkedAt: new Date().toISOString(), platform: 'windows-x64',
    checkerVersion: JSON.parse(await readFile(new URL('../package.json', import.meta.url))).version,
    game: gameMetadata(inf, acf), modules: Object.fromEntries(Object.entries(images).map(([name, image]) =>
      [name, { sha256: sha256(image.bytes), fingerprint: fingerprint(image) }])), sources: [] };
  const requested = new Map();
  const evidence = values['prepare-schema'] ? null : JSON.parse((await readFile(values.schema, 'utf8')).replace(/^\uFEFF/, ''));
  if(evidence) { validateSchema(evidence, report.modules); report.schema = { capturedAt:evidence.capturedAt, provider:evidence.provider, modules:evidence.modules }; }
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
      'server/runtime/dtr-controller/src/common/version_targets.cpp',
      'server/runtime/dtr-hider/src/plugin.cpp',
      'server/plugins/DemoTracer/src/DemoTracer/Playback/Inventory/DemoTracerReplayLoadout.cs'
    ];
    const text = await Promise.all(paths.map(path => source(commit, path)));
    const contract = JSON.parse(text[4]);
    const version = text[5].match(/ModuleVersion\s*=>\s*"([\d.]+)"/)?.[1];
    if (!version) throw new Error('Cannot read product version');
    const fields = [...new Map([5,6,7,8].flatMap(i=>schemaRequests(text[i],paths[i])).map(f=>[f.className+'::'+f.fieldName,f])).values()];
    if(!fields.length) throw new Error('No Schema dependencies extracted');
    for(const f of fields) requested.set(f.className+'::'+f.fieldName,[f.className,f.fieldName]);
    if(values['prepare-schema']) continue;
    const checks = [
      ...checkGamedata(JSON.parse(text[0]), images, paths[0]),
      ...checkGamedata(JSON.parse(text[1]), images, paths[1]),
      ...checkProfile(JSON.parse(text[2]), images.server, paths[2]),
      ...inlineSignatures(text[3]).map(s => signatureCheck(images.server, 'BotRandomizer: ' + s.name, s.signature, paths[3]))
    ];
    checks.push(...schemaChecks(fields,evidence));
    report.sources.push({ ref, commit, version, requirements: { css: contract.counterstrikesharp.minimum_version,
      metamod: contract.hook_runtime.metamod_minimum_build }, checks, summary: summarize(checks) });
  }
  if(values['prepare-schema']) {
    await mkdir('.cache',{recursive:true});
    await writeFile('.cache/schema-requests.json',JSON.stringify([...requested.values()]));
    console.log(`Prepared ${requested.size} Schema fields`);
    process.exit(0);
  }
  const output = resolve(values.output);
  await mkdir(dirname(output), { recursive: true });
  await writeFile(output + '.json', JSON.stringify(report, null, 2) + '\n');
  await writeFile(output + '.md', markdown(report));
  for (const s of report.sources) console.log(`${s.ref} (${s.commit.slice(0, 12)}): ${s.summary.pass} pass, ${s.summary.fail} fail, ${s.summary.not_checked} not checked`);
  process.exitCode = report.sources.some(s => s.summary.fail) ? 1 : 0;
} catch (error) {
  console.error(error.message);
  process.exitCode = 2;
}
