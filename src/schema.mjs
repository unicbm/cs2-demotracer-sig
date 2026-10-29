// SPDX-License-Identifier: AGPL-3.0-only
// Copyright (c) 2026 unicbm.
export function schemaRequests(text, source) {
  const pairs = [...text.matchAll(/\{\s*"(\w+)"\s*,\s*"(\w+)"\s*,\s*&\w+\s*\}/g),
    ...text.matchAll(/(?:GetFieldOffset|GetSchemaOffset)\(\s*"(\w+)"\s*,\s*"(\w+)"\s*\)/g)];
  return [...new Map(pairs.map(m => [m[1]+'::'+m[2], { className:m[1], fieldName:m[2], source }])).values()];
}
export function validateSchema(evidence, modules) {
  if(evidence.schemaVersion !== 1 || !Array.isArray(evidence.fields) || !evidence.fields.length) throw new Error('Invalid live Schema evidence');
  for(const name of ['server','engine2','schemasystem']) if(evidence.modules?.[name] !== modules[name].sha256) throw new Error('Schema belongs to a different game build');
  const keys = new Set();
  for(const f of evidence.fields) {
    const key=f.className+'::'+f.fieldName;
    if(keys.has(key) || ![1,-1,-3,-4].includes(f.status)) throw new Error('Invalid Schema query result');
    keys.add(key);
    if(f.status===1 && (!Number.isInteger(f.offset) || !Number.isInteger(f.classSize) || f.offset<0 || f.offset>=f.classSize)) throw new Error('Invalid Schema field bounds');
  }
}
export function schemaChecks(requests, evidence) {
  return requests.map(r => {
    const field=evidence.fields.find(f=>f.className===r.className && f.fieldName===r.fieldName);
    if(!field) throw new Error('Live query missing from evidence: '+r.className+'::'+r.fieldName);
    return { name:'Schema: '+r.className+'::'+r.fieldName, source:r.source, status:field.status===1?'pass':'fail',
      reason:({1:'Field exists; offset within class size', '-1':'Class missing', '-3':'Field missing', '-4':'Field offset outside class size'})[field.status],
      offset:field.status===1?field.offset:null, classSize:field.classSize };
  });
}
