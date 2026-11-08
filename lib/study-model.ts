import rawPlan from '../data/manausprev-plan.json' with { type: 'json' };
import type { StudyProgress } from './study-store';

export const plan = rawPlan;
export const tasks = plan.flatMap(day => day.tasks);
export type StudyTask = (typeof tasks)[number];
export function today() {
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Manaus' }).format(new Date());
}
export function formatDate(value: string) {
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', weekday: 'long', timeZone: 'America/Manaus' }).format(new Date(value + 'T12:00:00-04:00'));
}
export function reviewsFor(progress: StudyProgress) {
  return tasks.filter(task => task.review && progress.done[task.id]).flatMap(task => [1, 7, 14].map(offset => {
    const date = new Date(progress.done[task.id] + 'T12:00:00Z');
    date.setUTCDate(date.getUTCDate() + offset);
    // Keep the original offsets; the final day can group these by subject.
    const due = date.toISOString().slice(0, 10);
    return { id: `${task.id}-r${offset}`, task, offset, due: due > '2026-12-05' ? '2026-12-05' : due };
  })).sort((a, b) => a.due.localeCompare(b.due) || a.offset - b.offset);
}
export function validDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + 'T12:00:00Z');
  return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
}
export function parseBackup(input: unknown): StudyProgress {
  if (!input || typeof input !== 'object') throw new Error('Arquivo inválido.');
  const data = input as Record<string, unknown>;
  if (!['manausprev-study-v1', 'mapas-manausprev'].includes(String(data.app)) || data.version !== 1) throw new Error('Formato de backup incompatível.');
  const state = data.state as Record<string, unknown>;
  if (!state || typeof state !== 'object') throw new Error('Progresso ausente.');
  const result: StudyProgress = { done: {}, reviews: {}, notes: {} };
  const ids = new Set(tasks.map(t => t.id));
  const reviewIds = new Set(tasks.filter(t => t.review).flatMap(t => [1, 7, 14].map(n => `${t.id}-r${n}`)));
  for (const key of ['done', 'reviews', 'notes'] as const) {
    const values = state[key];
    if (!values || typeof values !== 'object' || Array.isArray(values)) throw new Error(`Campo ${key} inválido.`);
    for (const [id, value] of Object.entries(values)) {
      if (key === 'notes') {
        if (!plan.some(d => d.date === id) || typeof value !== 'string' || value.length > 20000) throw new Error('Anotação inválida.');
      } else if (!(key === 'done' ? ids : reviewIds).has(id) || !validDate(value) || value > today()) throw new Error('Conclusão inválida.');
      result[key][id] = value as string;
    }
  }
  for (const id of Object.keys(result.reviews)) if (!result.done[id.replace(/-r\d+$/, '')]) delete result.reviews[id];
  return result;
}
