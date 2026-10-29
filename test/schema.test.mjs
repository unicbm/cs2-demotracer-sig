// SPDX-License-Identifier: AGPL-3.0-only
import test from 'node:test';
import assert from 'node:assert/strict';
import {schemaRequests,validateSchema,schemaChecks} from '../src/schema.mjs';
const modules={server:{sha256:'a'},engine2:{sha256:'b'},schemasystem:{sha256:'c'}};
const evidence={schemaVersion:1,modules:{server:'a',engine2:'b',schemasystem:'c'},fields:[{className:'A',fieldName:'zero',status:1,offset:0,classSize:8},{className:'A',fieldName:'missing',status:-3,offset:0,classSize:8},{className:'MissingClass',fieldName:'x',status:-1,offset:0,classSize:0}]};
test('Schema zero offset is valid, missing fields and classes fail',()=>{
  validateSchema(evidence,modules);
  const rows=schemaChecks(evidence.fields.map(f=>({...f,source:'test'})),evidence);
  assert.deepEqual(rows.map(r=>r.status),['pass','fail','fail']);
  assert.equal(rows[1].reason,'Field missing');
  assert.equal(rows[2].reason,'Class missing');
});
test('Schema rejects stale build, missing query, duplicates and invalid bounds',()=>{
  const stale=structuredClone(evidence);stale.modules.schemasystem='other';assert.throws(()=>validateSchema(stale,modules),/different game build/);
  assert.throws(()=>schemaChecks([{className:'A',fieldName:'not_queried'}],evidence),/missing from evidence/);
  const duplicate=structuredClone(evidence);duplicate.fields.push(duplicate.fields[0]);assert.throws(()=>validateSchema(duplicate,modules),/Invalid/);
  const invalid=structuredClone(evidence);invalid.fields[0].offset=8;assert.throws(()=>validateSchema(invalid,modules),/bounds/);
});
test('Schema inventory includes table entries and standalone native/managed queries',()=>{
  const text='{ "A", "x", &target }; Schema::GetFieldOffset("B", "y"); Schema.GetSchemaOffset("C", "z"); Schema::GetFieldOffset("B", "y");';
  assert.deepEqual(schemaRequests(text,'source').map(f=>[f.className,f.fieldName]),[['A','x'],['B','y'],['C','z']]);
});
