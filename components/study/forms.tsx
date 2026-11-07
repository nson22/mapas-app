'use client';

import { useActionState, useRef } from 'react';
import { saveCompletion, saveNote, saveReview, importBackup } from '@/app/manausprev/actions';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

function Status({ result }: { result: { error?: string; message?: string } }) {
  return <p role="status" aria-live="polite" className={`text-sm ${result.error ? 'text-red-700 dark:text-red-400' : 'text-[var(--ink-soft)]'}`}>{result.error || result.message}</p>;
}
export function CompletionForm({ id, done, review = false }: { id: string; done: boolean; review?: boolean }) {
  const [result, action, pending] = useActionState(review ? saveReview : saveCompletion, {});
  return <form action={action} className="space-y-2">
    <input type="hidden" name="id" value={id} /><input type="hidden" name="done" value={String(!done)} />
    <Button type="submit" variant={done ? 'outline' : 'default'} disabled={pending} aria-pressed={done} className="w-full sm:w-auto">
      {pending ? 'Salvando…' : done ? '✓ Concluído · desfazer' : review ? 'Concluir revisão' : 'Marcar como estudado'}
    </Button><Status result={result} />
  </form>;
}
export function NotesForm({ date, body }: { date: string; body: string }) {
  const [result, action, pending] = useActionState(saveNote, {});
  return <form action={action} className="space-y-3"><input type="hidden" name="date" value={date} />
    <label htmlFor="notes" className="font-semibold">Anotações e erros para retomar</label>
    <Textarea id="notes" name="body" defaultValue={body} maxLength={20000} rows={5} placeholder="O que faltou? O que errei? O que preciso praticar?" />
    <Button disabled={pending} type="submit">{pending ? 'Salvando…' : 'Salvar anotações'}</Button><Status result={result} />
  </form>;
}
export function ImportForm() {
  const [result, action, pending] = useActionState(importBackup, {});
  const form = useRef<HTMLFormElement>(null);
  return <form ref={form} action={action} className="space-y-4">
    <label htmlFor="backup-file" className="block text-sm font-medium">Arquivo JSON (até 1 MB)</label>
    <Input id="backup-file" name="file" type="file" accept=".json,application/json" required />
    <label className="flex items-start gap-3 text-sm"><Checkbox name="confirm" value="yes" required />Substituir o progresso atual pelo conteúdo deste arquivo.</label>
    <Button disabled={pending} type="submit">{pending ? 'Importando…' : 'Importar progresso'}</Button><Status result={result} />
  </form>;
}
