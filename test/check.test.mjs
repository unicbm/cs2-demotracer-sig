// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 unicbm.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readPe, fingerprint, matches, sha256 } from '../src/pe.mjs';
import { checkProfile, checkGamedata, inlineSignatures, gameMetadata, markdown } from '../src/report.mjs';

// Synthetic PE only; no game binaries or extracted game bytes in test fixtures.
function fixture() {
  const b = Buffer.alloc(0x800);
  b.write('MZ'); b.writeUInt32LE(0x80, 60); b.writeUInt32LE(0x4550, 0x80);
  b.writeUInt16LE(0x8664, 0x84); b.writeUInt16LE(2, 0x86); b.writeUInt16LE(240, 0x94);
  b.writeUInt16LE(0x20b, 0x98); b.writeBigUInt64LE(0x180000000n, 0xb0); b.writeUInt32LE(16, 0x104);
  for (const [i, raw, size, rva, flags] of [[0, 0x200, 0x200, 0x1000, 0x60000020], [1, 0x400, 0x400, 0x2000, 0x40000040]]) {
    const at = 0x188 + i * 40;
    b.writeUInt32LE(rva, at + 12); b.writeUInt32LE(size, at + 16);
    b.writeUInt32LE(raw, at + 20); b.writeUInt32LE(flags, at + 36);
  }
  b.writeUInt32LE(0x2000, 0x138); b.writeUInt32LE(28, 0x13c);
  b.writeUInt32LE(2, 0x40c); b.writeUInt32LE(40, 0x410); b.writeUInt32LE(0x2040, 0x414); b.writeUInt32LE(0x440, 0x418);
  b.write('RSDS', 0x440); b.writeUInt32LE(1, 0x454); b.write('fixture.pdb\0', 0x458);
  b.set([0xaa, 0xbb, 0xcc, 0xdd], 0x210);
  for (let i = 0; i < 6; i++) b.writeBigUInt64LE(0x180001010n, 0x480 + i * 8);
  return b;
}
function profile(bytes) {
  return { formatVersion: 1, algorithm: 'pe-image-v1', imageSha256: fingerprint(readPe(bytes)), projectilePhysics: {
    entryRva: 0x1010, bodyLength: 4, bodySha256: sha256(bytes.subarray(0x210, 0x214)),
    signature: 'AA BB ? DD', vtableSlotRvas: Array.from({ length: 6 }, (_, i) => 0x2080 + i * 8)
  } };
}

test('fingerprint ignores declared non-semantic metadata and overlay', () => {
  const original = fixture(), changed = Buffer.concat([original, Buffer.from('overlay')]);
  changed.writeUInt32LE(123, 0x88); // COFF timestamp
  changed.writeUInt32LE(456, 0xd8); // checksum
  changed.writeUInt32LE(0x800, 0x128); changed.writeUInt32LE(7, 0x12c); // certificate entry
  changed.writeUInt32LE(789, 0x404); changed.writeUInt32LE(20, 0x454); // debug timestamp and age
  changed[0x40] = 77; // DOS stub
  assert.equal(fingerprint(readPe(original)), fingerprint(readPe(changed)));
});
test('fingerprint retains code, data, PDB GUID and section layout', () => {
  const original = fixture(), hash = fingerprint(readPe(original));
  for (const at of [0x210, 0x500, 0x444, 0x194]) {
    const changed = Buffer.from(original); changed[at] ^= 1;
    assert.notEqual(fingerprint(readPe(changed)), hash);
  }
});
test('malformed headers, overlapping sections and unsafe debug records fail', () => {
  assert.throws(() => readPe(Buffer.alloc(10)));
  const overlap = fixture(); overlap.writeUInt32LE(0x200, 0x1c4);
  assert.throws(() => readPe(overlap), /Overlapping/);
  const unsafe = fixture(); unsafe.writeUInt32LE(0xe0000040, 0x1d4);
  assert.throws(() => fingerprint(readPe(unsafe)), /read-only/);
  const bad = fixture(); bad.write('BAD!', 0x440);
  assert.throws(() => fingerprint(readPe(bad)), /CodeView/);
});
test('signature matching handles wildcards, ambiguity and section boundaries', () => {
  const b = fixture();
  assert.deepEqual(matches(readPe(b), 'AA BB ?? DD'), [0x1010]);
  b.set([0xaa, 0xbb, 0xcc, 0xdd], 0x500); // non-executable match excluded
  assert.equal(matches(readPe(b), 'AA BB ? DD').length, 1);
  b.set([0xaa, 0xbb, 0xcc, 0xdd], 0x3fc); // last valid start
  assert.deepEqual(matches(readPe(b), 'AA BB ? DD'), [0x1010, 0x11fc]);
  assert.equal(matches(readPe(b), 'DD 00').length, 1); // must not cross .text boundary
  assert.throws(() => matches(readPe(b), '? ??'), /wildcards/);
  assert.throws(() => matches(readPe(b), 'GG 00'), /Invalid/);
});
test('profile checks detect image/body/entry/reference changes independently', () => {
  const b = fixture(), p = profile(b);
  assert.ok(checkProfile(p, readPe(b), 'profile').every(c => c.status === 'pass'));
  const old = structuredClone(p); old.imageSha256 = '0'.repeat(64);
  assert.equal(checkProfile(old, readPe(b), 'profile').filter(c => c.status === 'fail').length, 1);
  const changed = Buffer.from(b); changed[0x212] ^= 1; changed.writeBigUInt64LE(0n, 0x480);
  const rows = checkProfile(p, readPe(changed), 'profile');
  assert.equal(rows.find(c => c.name === 'Projectile function body').status, 'fail');
  assert.equal(rows.find(c => c.name === 'Projectile virtual references').status, 'fail');
  p.projectilePhysics.entryRva = 0xffffffff;
  assert.equal(checkProfile(p, readPe(b), 'profile').at(-1).status, 'fail');
});
test('gamedata never claims unverified offsets pass', () => {
  const rows = checkGamedata({ a: { signatures: { library: 'server', windows: 'AA BB ? DD' } }, b: { offsets: { windows: 22 } } }, { server: readPe(fixture()) }, 'source');
  assert.deepEqual(rows.map(c => c.status), ['pass', 'not_checked']);
  assert.throws(() => checkGamedata({ a: { unknown: 1 } }, {}, 'source'), /Unrecognized/);
});
test('inline extractor selects Windows branches and rejects inventory drift', () => {
  const text = 'writer = new MemoryFunctionWithReturn<int>(RuntimeInformation.IsOSPlatform(OSPlatform.Linux) ? "01 02 03 04 05" : "06 07 08 09 0A");\nitemViewDestructor = new MemoryFunctionWithReturn<int>("11 12 13 14 15");\nitemViewConstructor = new MemoryFunctionWithReturn<int>(RuntimeInformation.IsOSPlatform(OSPlatform.Linux) ? "21 22 23 24 25" : "26 27 28 29 2A");';
  assert.deepEqual(inlineSignatures(text).map(s => s.signature), ['06 07 08 09 0A', '11 12 13 14 15', '26 27 28 29 2A']);
  assert.throws(() => inlineSignatures(text + '"31 32 33 34 35"'), /inventory changed/);
  assert.throws(() => inlineSignatures(text.replaceAll('OSPlatform.Linux', 'OSPlatform.Windows')), /platform selection/);
});
test('game metadata allowlist excludes local paths and Steam account data', () => {
  const data = gameMetadata('PatchVersion=1.2.3\nServerVersion=123\nLocalPath=PRIVATE', '"AppState" { "appid" "730" "buildid" "12" "LastOwner" "PRIVATE" "InstalledDepots" { "2347771" { "manifest" "1234" "size" "99" } } }');
  assert.deepEqual(data, { patchVersion: '1.2.3', serverVersion: '123', appId: '730', buildId: '12', depots: { 2347771: '1234' } });
  assert.throws(() => gameMetadata('PatchVersion=secret\nServerVersion=123', '"AppState" { "appid" "730" "buildid" "12" }'), /version metadata/);
});
test('report shows check counts without runtime columns', () => {
  const md = markdown({ checkedAt: '2026-01-01', game: { patchVersion: '1', serverVersion: '2', buildId: '3', depots: {} }, modules: {}, sources: [{ ref: 'main', commit: 'a'.repeat(40), version: '1', requirements: { css: '1', metamod: 1 }, summary: { pass: 1, fail: 0, not_checked: 0 }, checks: [] }] });
  assert.match(md, /匹配 \| 失配 \| 未核查/);
  assert.doesNotMatch(md, /组件加载|实际回放/);
});
