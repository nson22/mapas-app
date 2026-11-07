import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, Clock3 } from 'lucide-react';
import { plan, store, formatDate } from '@/lib/study';
import { getResumoDoc } from '@/lib/resumos';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CompletionForm, NotesForm } from '@/components/study/forms';

export default async function StudyDay({ params }: { params: Promise<{ date: string }> }) {
  const { date } = await params, index = plan.findIndex(d => d.date === date);
  if (index < 0) notFound();
  const day = plan[index], progress = store().read();
  return <div className="mx-auto max-w-4xl space-y-7"><Button variant="ghost" asChild><Link href="/manausprev"><ArrowLeft /> Calendário</Link></Button>
    <div><Badge variant="secondary">Dia {index + 1} de 29 · {day.kind}</Badge><h1 className="mt-3 text-3xl font-bold capitalize sm:text-4xl">{formatDate(date)}</h1><p className="mt-3 flex items-center gap-2 text-muted-foreground"><Clock3 size={18} /> 4 horas líquidas · faça pausas entre os blocos.</p></div>
    {day.tasks.map(task => <Card key={task.id} className={progress.done[task.id] ? 'border-emerald-600/50' : ''}><CardHeader><div className="flex flex-wrap items-center justify-between gap-2"><CardTitle>{task.name}</CardTitle><Badge variant="outline">{task.minutes} min</Badge></div></CardHeader><CardContent className="space-y-5"><p className="leading-relaxed">{task.text}</p>
      {task.materials.length > 0 && <div><p className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Material para este bloco</p><div className="flex flex-wrap gap-2">{task.materials.map(ref => {
        const doc = getResumoDoc(ref.id); const section = doc?.branches.find(s => s.id === ref.section);
        return <Button key={ref.id + ref.section} asChild variant="outline" size="sm" className="h-auto max-w-full whitespace-normal py-2 text-left"><Link href={`/resumos/${ref.id}?dia=${date}${ref.section ? '#' + ref.section : ''}`}><BookOpen className="shrink-0" />{section?.title || doc?.item.title || ref.id}</Link></Button>;
      })}</div></div>}
      {task.gap && <p className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3 text-sm">{task.gap}</p>}
      {task.name === 'Revisão diária' && <Button asChild variant="outline"><Link href={`/manausprev/revisoes?ate=${date}`}>Ver revisões até esta data</Link></Button>}
      {task.review && <p className="text-xs text-muted-foreground">Ao concluir, serão agendadas revisões para +1, +7 e +14 dias a partir da data real do estudo. As posteriores ao plano ficam para 05/12.</p>}
      <CompletionForm id={task.id} done={!!progress.done[task.id]} />
    </CardContent></Card>)}
    <Card><CardContent><NotesForm date={date} body={progress.notes[date] || ''} /></CardContent></Card>
    <nav aria-label="Dias do plano" className="flex justify-between gap-3">{index > 0 ? <Button asChild variant="outline"><Link href={`/manausprev/dias/${plan[index - 1].date}`}><ArrowLeft /> Dia anterior</Link></Button> : <span />}{index < plan.length - 1 && <Button asChild><Link href={`/manausprev/dias/${plan[index + 1].date}`}>Próximo dia <ArrowRight /></Link></Button>}</nav>
  </div>;
}
