// SPDX-License-Identifier: GPL-3.0-or-later
// Copyright (c) 2026 unicbm.
// pe-image-v1 port; GPL text: LICENSES/GPL-3.0-or-later.txt.
// Source: https://github.com/unicbm/demotracer/blob/be9c22e0554e347eabe3e5eae2ffad82e1b28e77/server/plugins/DemoTracer/src/DemoTracer/Native/PeImageFingerprint.cs
import { createHash } from 'node:crypto';

export const sha256 = bytes => createHash('sha256').update(bytes).digest('hex');
export function readPe(bytes) {
  function range(offset, size) {
    if (!Number.isSafeInteger(offset) || !Number.isSafeInteger(size) || offset < 0 || size < 0 || offset + size > bytes.length)
      throw new Error('Invalid PE bounds');
    return bytes.subarray(offset, offset + size);
  }
  if (range(0, 2).toString() !== 'MZ') throw new Error('Not a PE file');
  const pe = range(60, 4).readUInt32LE();
  if (pe < 64 || range(pe, 4).readUInt32LE() !== 0x4550) throw new Error('Invalid PE signature');
  const coff = range(pe + 4, 20), optional = pe + 24;
  const optionalSize = coff.readUInt16LE(16), count = coff.readUInt16LE(2);
  if (coff.readUInt16LE() !== 0x8664 || optionalSize < 168 || range(optional, optionalSize).readUInt16LE() !== 0x20b)
    throw new Error('Requires Windows x64 PE32+');
  const headerEnd = optional + optionalSize + count * 40;
  range(pe, headerEnd - pe);
  const sections = Array.from({ length: count }, (_, i) => {
    const s = range(optional + optionalSize + i * 40, 40);
    const result = { rva: s.readUInt32LE(12), size: s.readUInt32LE(16), raw: s.readUInt32LE(20), flags: s.readUInt32LE(36) };
    range(result.raw, result.size);
    return result;
  });
  let end = headerEnd;
  for (const s of [...sections].filter(s => s.size).sort((a, b) => a.raw - b.raw)) {
    if (s.raw < end) throw new Error('Overlapping PE sections');
    end = s.raw + s.size;
  }
  function offset(rva, length) {
    const s = sections.find(s => rva >= s.rva && rva + length <= s.rva + s.size);
    if (!s) throw new Error('RVA outside file-backed section');
    return s.raw + rva - s.rva;
  }
  return { bytes, pe, optional, headerEnd, sections, offset, imageBase: range(optional + 24, 8).readBigUInt64LE() };
}

export function fingerprint(image) {
  const { bytes, pe, optional, headerEnd, sections, offset } = image;
  const data = Buffer.from(bytes);
  function clearDebug(at, length) {
    if (!sections.some(s => at >= s.raw && at + length <= s.raw + s.size && !(s.flags & 0xa0000000)))
      throw new Error('Debug metadata outside read-only data');
    data.fill(0, at, at + length);
  }
  data.fill(0, pe + 8, pe + 12);
  data.fill(0, optional + 64, optional + 68);
  data.fill(0, optional + 144, optional + 152);
  if (bytes.readUInt32LE(optional + 108) > 6) {
    if (optional + 168 > headerEnd - sections.length * 40) throw new Error('Invalid debug directory header');
    const rva = bytes.readUInt32LE(optional + 160), size = bytes.readUInt32LE(optional + 164);
    if (size) {
      if (size % 28) throw new Error('Invalid debug directory');
      const start = offset(rva, size);
      for (let at = start; at < start + size; at += 28) {
        clearDebug(at + 4, 4);
        if (bytes.readUInt32LE(at + 12) === 2) {
          const ptr = bytes.readUInt32LE(at + 24), length = bytes.readUInt32LE(at + 16);
          if (length < 25 || ptr + length > bytes.length || bytes.toString('ascii', ptr, ptr + 4) !== 'RSDS' || !bytes.subarray(ptr + 24, ptr + length).includes(0))
            throw new Error('Invalid CodeView record');
          clearDebug(ptr + 20, 4);
        }
      }
    }
  }
  const hash = createHash('sha256').update(data.subarray(pe, headerEnd));
  for (const s of sections) if (s.size) hash.update(data.subarray(s.raw, s.raw + s.size));
  return hash.digest('hex');
}

export function matches(image, signature) {
  const tokens = signature.trim().split(/\s+/);
  if (!tokens.length || tokens.some(t => !/^(?:[0-9a-f]{2}|\?\??)$/i.test(t))) throw new Error('Invalid signature');
  const pattern = tokens.map(t => t.startsWith('?') ? null : parseInt(t, 16));
  const anchor = pattern.findIndex(b => b !== null);
  if (anchor < 0) throw new Error('Signature cannot be all wildcards');
  const found = [];
  for (const s of image.sections.filter(s => s.flags & 0x20000000)) {
    const section = image.bytes.subarray(s.raw, s.raw + s.size);
    let search = anchor;
    while (search < section.length) {
      const hit = section.indexOf(pattern[anchor], search);
      if (hit < 0) break;
      const start = hit - anchor;
      if (start + pattern.length > section.length) break;
      if (pattern.every((b, i) => b === null || section[start + i] === b)) found.push(s.rva + start);
      search = hit + 1;
    }
  }
  return found;
}
