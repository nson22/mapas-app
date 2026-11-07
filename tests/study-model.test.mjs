import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { plan, tasks, reviewsFor, parseBackup, validDate } from '../lib/study-model.ts';

test('plan covers 29 days at four hours and all material targets exist', () => {
  assert.equal(plan.length, 29);
  assert.equal(new Set(tasks.map(t => t.id)).size, 110);
  for (const day of plan) {
    assert.equal(day.tasks.reduce((n, t) => n + t.minutes, 0), 240);
    for (const task of day.tasks) for (const ref of task.materials) {
      const source = readFileSync(new URL(`../content/resumos/${ref.id}.md`, import.meta.url), 'utf8');
      if (ref.section) assert.ok(source.includes(`id="${ref.section}"`), `${ref.id}#${ref.section}`);
    }
  }
});

test('reviews use actual completion dates and cap dates at the end of the plan', () => {
  const id = '2026-11-07-1';
  let reviews = reviewsFor({ done: { [id]: '2026-11-09' }, reviews: {}, notes: {} });
  assert.deepEqual(reviews.map(r => r.due), ['2026-11-10', '2026-11-16', '2026-11-23']);
  reviews = reviewsFor({ done: { [id]: '2026-12-01' }, reviews: {}, notes: {} });
  assert.deepEqual(reviews.map(r => r.due), ['2026-12-02', '2026-12-05', '2026-12-05']);
  assert.equal(reviewsFor({ done: { '2026-11-07-0': '2026-11-07' }, reviews: {}, notes: {} }).length, 0);
});

test('backup imports legacy progress and rejects invalid dates, IDs and oversized notes', () => {
  const backup = { app: 'manausprev-study-v1', version: 1, state: { done: { '2026-11-07-1': '2026-11-01' }, reviews: {}, notes: { '2026-11-07': 'DNS' } } };
  assert.deepEqual(parseBackup(backup), backup.state);
  assert.equal(validDate('2026-02-30'), false);
  assert.throws(() => parseBackup({ ...backup, state: { ...backup.state, done: { invalid: '2026-11-01' } } }));
  assert.throws(() => parseBackup({ ...backup, state: { ...backup.state, done: { '2026-11-07-1': '2026-02-30' } } }));
  assert.throws(() => parseBackup({ ...backup, state: { ...backup.state, notes: { '2026-11-07': 'x'.repeat(20001) } } }));
});
