'use server';

import { revalidatePath } from 'next/cache';
import { plan, tasks, store, today, reviewsFor, parseBackup } from '@/lib/study';

export type ActionResult = { error?: string; message?: string };
function refresh() { revalidatePath('/manausprev', 'layout'); }
export async function saveCompletion(_: ActionResult, data: FormData): Promise<ActionResult> {
  try {
    const id = String(data.get('id'));
    if (!tasks.some(t => t.id === id)) return { error: 'Bloco inválido.' };
    store().complete(id, data.get('done') === 'true' ? today() : null);
    refresh(); return { message: 'Progresso salvo.' };
  } catch { return { error: 'Não foi possível salvar. Tente novamente.' }; }
}
export async function saveNote(_: ActionResult, data: FormData): Promise<ActionResult> {
  try {
    const date = String(data.get('date')), body = String(data.get('body') || '');
    if (!plan.some(d => d.date === date) || body.length > 20000) return { error: 'Anotação inválida (limite de 20 mil caracteres).' };
    store().note(date, body); refresh(); return { message: 'Anotações salvas.' };
  } catch { return { error: 'Não foi possível salvar as anotações.' }; }
}
export async function saveReview(_: ActionResult, data: FormData): Promise<ActionResult> {
  try {
    const id = String(data.get('id'));
    if (!reviewsFor(store().read()).some(r => r.id === id)) return { error: 'Revisão inválida.' };
    store().review(id, data.get('done') === 'true' ? today() : null);
    refresh(); return { message: 'Revisão salva.' };
  } catch { return { error: 'Não foi possível salvar a revisão.' }; }
}
export async function importBackup(_: ActionResult, data: FormData): Promise<ActionResult> {
  try {
    if (data.get('confirm') !== 'yes') return { error: 'Confirme a substituição do progresso antes de importar.' };
    const file = data.get('file');
    if (!(file instanceof File) || file.size > 1024 * 1024 || !file.size) return { error: 'Selecione um JSON de até 1 MB.' };
    const progress = parseBackup(JSON.parse(await file.text()));
    store().replace(progress); refresh(); return { message: 'Progresso importado.' };
  } catch (error) { return { error: error instanceof Error ? error.message : 'Não foi possível importar.' }; }
}
