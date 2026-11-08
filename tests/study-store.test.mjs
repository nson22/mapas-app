import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createStudyStore } from '../lib/study-store.ts';

test('SQLite persists progress and preserves the first completion date', () => {
  const dir = mkdtempSync(join(tmpdir(), 'manausprev-test-'));
  const file = join(dir, 'study.sqlite');
  let store = createStudyStore(file);
  try {
    store.complete('2026-11-07-1', '2026-11-07');
    store.complete('2026-11-07-1', '2026-11-08');
    store.note('2026-11-07', "DNS: não confundir 'nome' com IP.");
    store.review('2026-11-07-1-r1', '2026-11-08');
    store.close();
    store = createStudyStore(file);
    assert.equal(store.read().done['2026-11-07-1'], '2026-11-07');
    assert.equal(store.read().notes['2026-11-07'], "DNS: não confundir 'nome' com IP.");
    assert.equal(store.read().reviews['2026-11-07-1-r1'], '2026-11-08');
    store.complete('2026-11-07-1', null);
    assert.deepEqual(store.read().done, {});
    assert.deepEqual(store.read().reviews, {});
  } finally { store.close(); rmSync(dir, { recursive: true, force: true }); }
});

test('replacing a backup is atomic and rolls back a failed import', () => {
  const store = createStudyStore(':memory:');
  try {
    const progress = { done: { task: '2026-11-07' }, reviews: {}, notes: { '2026-11-07': 'Revisar DNS' } };
    store.replace(progress);
    assert.deepEqual(store.read(), progress);
    assert.throws(() => store.replace({ done: { broken: null }, reviews: {}, notes: {} }));
    assert.deepEqual(store.read(), progress);
  } finally { store.close(); }
});
