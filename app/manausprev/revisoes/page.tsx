import Link from 'next/link';
import { store, reviewsFor, today, plan, formatDate } from '@/lib/study';
import { CompletionForm } from '@/components/study/forms';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default async function ReviewPage({ searchParams }: { searchParams: Promise<{ ate?: string; status?: string }> }) {
  const query = await searchParams, date = plan.some(d => d.date === query.ate) ? query.ate! : today();
  const progress = store().read(), all = reviewsFor(progress), status = query.status || 'pending';
  const list = all.filter(r => r.due <= date && (status === 'all' || (status === 'done' ? !!progress.reviews[r.id] : !progress.reviews[r.id])));
  return <div className="mx-auto max-w-4xl space-y-6"><div><Badge variant="secondary">Recordar antes de consultar</Badge><h1 className="mt-3 text-4xl font-bold">Suas revisões</h1><p className="mt-3 max-w-2xl text-muted-foreground">Use os 40 minutos diários: 10 min de R1, 20 min de R2/R3 e 10 min de erros antigos. Priorize Redes, legislação e erros persistentes.</p></div>
    <form className="flex flex-wrap items-end gap-3"><label className="text-sm">Revisões até<input className="mt-1 block rounded-md border border-input bg-background px-3 py-2" type="date" name="ate" defaultValue={date} /></label><label className="text-sm">Situação<select name="status" defaultValue={status} className="mt-1 block rounded-md border border-input bg-background px-3 py-2"><option value="pending">Pendentes</option><option value="done">Concluídas</option><option value="all">Todas</option></select></label><Button type="submit">Filtrar</Button></form>
    <p className="text-sm text-muted-foreground">{list.length} revisões nesta lista. Geradas a partir das conclusões dos conteúdos, em +1, +7 e +14 dias. As datas que passam de 05/12 são antecipadas para esse dia; agrupe assuntos para caber no tempo disponível.</p>
    {list.map(r => <Card key={r.id}><CardHeader><div className="flex flex-wrap gap-2"><Badge variant={progress.reviews[r.id] ? 'default' : 'secondary'}>{progress.reviews[r.id] ? 'Concluída' : `R+${r.offset}`}</Badge><span className="text-sm text-muted-foreground">{formatDate(r.due)}</span></div><CardTitle className="text-base leading-relaxed">{r.task.text}</CardTitle></CardHeader><CardContent className="space-y-4"><Link className="text-sm underline underline-offset-4" href={`/manausprev/dias/${r.task.id.slice(0, 10)}`}>Abrir bloco e material do dia →</Link><CompletionForm id={r.id} done={!!progress.reviews[r.id]} review /></CardContent></Card>)}
    {!list.length && <Card><CardContent className="py-5"><h2 className="font-semibold">Nenhuma revisão nesta seleção</h2><p className="mt-2 text-muted-foreground">Conclua um bloco de conteúdo para iniciar o ciclo. Enquanto isso, revise ortografia, crase, interpretação e fundamentos de redes já estudados.</p></CardContent></Card>}
  </div>;
}
