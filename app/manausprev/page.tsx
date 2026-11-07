import Link from 'next/link';
import { ArrowRight, Clock3, BookOpenCheck, Target } from 'lucide-react';
import { plan, store, today, reviewsFor } from '@/lib/study';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export default async function StudyHome({ searchParams }: { searchParams: Promise<{ q?: string; status?: string }> }) {
  const { q = '', status = 'all' } = await searchParams;
  const progress = store().read(), current = today(), tasks = plan.flatMap(d => d.tasks);
  const completed = tasks.filter(t => progress.done[t.id]);
  const minutes = completed.reduce((n, t) => n + t.minutes, 0);
  const due = reviewsFor(progress).filter(r => r.due <= current && !progress.reviews[r.id]).length;
  const first = plan.find(d => d.date === current && d.tasks.some(t => !progress.done[t.id])) || plan.find(d => d.tasks.some(t => !progress.done[t.id])) || plan.at(-1)!;
  const filtered = plan.filter(d => (d.date + ' ' + d.tasks.map(t => t.text).join(' ')).toLocaleLowerCase('pt-BR').includes(q.toLocaleLowerCase('pt-BR'))).filter(d => status === 'pending' ? d.tasks.some(t => !progress.done[t.id]) : status === 'done' ? d.tasks.every(t => progress.done[t.id]) : true);
  return <div className="space-y-8">
    <section className="relative overflow-hidden rounded-3xl bg-[#163f35] p-7 text-white sm:p-10">
      <p className="text-xs font-semibold uppercase tracking-[.22em] text-emerald-200">Seu próximo passo</p>
      <h1 className="mt-3 max-w-2xl text-3xl font-bold leading-tight sm:text-5xl">Um dia de cada vez.<br />Um edital inteiro pela frente.</h1>
      <p className="mt-5 max-w-xl text-emerald-100">Seu plano de 29 dias reúne o conteúdo pendente, questões e revisões. Comece pelo próximo bloco e registre o que aprendeu.</p>
      <Button asChild className="mt-6 bg-[#e4c078] text-[#173b32] hover:bg-[#f2d59d]"><Link href={`/manausprev/dias/${first.date}`}>Continuar estudo <ArrowRight /></Link></Button>
      <span aria-hidden className="absolute -right-12 -bottom-24 size-72 rounded-full border-[40px] border-white/5" />
    </section>
    <section className="grid gap-4 sm:grid-cols-3" aria-label="Seu progresso">
      <Card><CardHeader><CardDescription className="flex items-center gap-2"><BookOpenCheck size={16} /> Blocos concluídos</CardDescription><CardTitle className="text-3xl">{completed.length}<span className="text-base font-normal text-muted-foreground"> / {tasks.length}</span></CardTitle></CardHeader><CardContent><Progress value={completed.length / tasks.length * 100} aria-label="Percentual de blocos concluídos" /></CardContent></Card>
      <Card><CardHeader><CardDescription className="flex items-center gap-2"><Clock3 size={16} /> Horas planejadas concluídas</CardDescription><CardTitle className="text-3xl">{(minutes / 60).toLocaleString('pt-BR', { maximumFractionDigits: 1 })}h <span className="text-base font-normal text-muted-foreground">de 116h</span></CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Duração prevista dos blocos marcados.</CardContent></Card>
      <Card><CardHeader><CardDescription className="flex items-center gap-2"><Target size={16} /> Revisões para retomar</CardDescription><CardTitle className="text-3xl">{due}</CardTitle></CardHeader><CardContent><Link href="/manausprev/revisoes" className="text-sm underline underline-offset-4">Abrir fila de revisões →</Link></CardContent></Card>
    </section>
    <section className="grid gap-6 lg:grid-cols-[1fr_280px]">
      <div><div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-2xl font-bold">Seu calendário</h2><p className="text-sm text-muted-foreground">Cada dia tem sua própria página de estudo.</p></div><Badge variant="secondary">29 dias · 4h por dia</Badge></div>
        <form className="mb-5 flex flex-wrap gap-2" role="search"><input name="q" defaultValue={q} placeholder="Buscar assunto ou data…" aria-label="Buscar no plano" className="h-10 min-w-40 flex-1 rounded-md border border-input bg-background px-3 text-sm" /><select name="status" defaultValue={status} aria-label="Situação dos dias" className="rounded-md border border-input bg-background px-3 text-sm"><option value="all">Todos os dias</option><option value="pending">Com pendências</option><option value="done">Concluídos</option></select><Button type="submit">Filtrar</Button></form>
        <div className="grid gap-3 md:grid-cols-2">{filtered.map(day => {
          const done = day.tasks.filter(t => progress.done[t.id]).length;
          return <Link key={day.date} href={`/manausprev/dias/${day.date}`} className="group rounded-xl border border-[var(--line)] bg-card p-5 transition hover:border-emerald-700 hover:shadow-md"><div className="mb-3 flex items-center justify-between"><span className="text-lg font-bold">{day.date.slice(8)}/{day.date.slice(5, 7)}</span><Badge variant={done === day.tasks.length ? 'default' : 'secondary'}>{done === day.tasks.length ? 'Concluído' : day.date === current ? 'Hoje' : day.kind}</Badge></div><p className="line-clamp-2 min-h-12 text-sm text-[var(--ink-soft)]">{day.tasks.find(t => t.name !== 'Revisão diária')?.text}</p><div className="mt-4 flex items-center justify-between text-xs text-muted-foreground"><span>{done}/{day.tasks.length} blocos</span><ArrowRight size={16} className="transition group-hover:translate-x-1" /></div></Link>;
        })}</div>{!filtered.length && <p className="py-10 text-muted-foreground">Nenhum dia encontrado para esse filtro.</p>}
      </div>
      <aside className="space-y-4"><Card><CardHeader><CardTitle>Como usar suas 4h</CardTitle></CardHeader><CardContent className="space-y-3 text-sm"><p>40 min · revisões</p><p>100 min · específicos</p><p>50 min · gerais ou inglês</p><p>50 min · legislação</p><p className="border-t pt-3 text-muted-foreground">Pausas fora das 4h. Simulados e correções têm distribuição própria.</p></CardContent></Card>
        <Card><CardHeader><CardTitle>Prioridade do plano</CardTitle></CardHeader><CardContent className="space-y-3 text-sm text-muted-foreground"><p>79 tópicos não iniciados, 33 em estudo e 6 concluídos no controle inicial.</p><p>Específicos têm peso 3. Reforce Redes e as lacunas de Português.</p><p>Primeira cobertura até 28/11. Depois, simulados, correção e revisão final.</p><Link className="block underline" href="/manausprev/biblioteca">Ver materiais e lacunas →</Link></CardContent></Card>
      </aside>
    </section>
  </div>;
}
