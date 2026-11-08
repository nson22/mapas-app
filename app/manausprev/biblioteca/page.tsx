import Link from 'next/link';
import { getAllResumos } from '@/lib/resumos';
import { plan } from '@/lib/study';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default async function StudyLibrary({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = '' } = await searchParams;
  const slugs = new Set(plan.flatMap(d => d.tasks.flatMap(t => t.materials.map(m => m.id))));
  const docs = getAllResumos().filter(d => slugs.has(d.slug)).filter(d => `${d.title} ${d.description}`.toLocaleLowerCase('pt-BR').includes(q.toLocaleLowerCase('pt-BR')));
  return <div className="space-y-7"><div><Badge variant="secondary">Conteúdo do seu repositório</Badge><h1 className="mt-3 text-4xl font-bold">Biblioteca ManausPrev</h1><p className="mt-3 max-w-2xl text-muted-foreground">Resumos vinculados ao calendário. Cada conteúdo abre em uma página própria, com mapa e navegação por seções.</p></div>
    <Card className="border-amber-500/30"><CardHeader><CardTitle>Complete estas lacunas</CardTitle></CardHeader><CardContent className="text-sm leading-relaxed">Não há resumo específico da Resolução 04/2026 nem do Código de Ética. O resumo da Lei 3.237/2023 cobre a alteração dos prazos, não toda a Lei 1.997/2015. Os resumos auxiliam a revisão; complete a leitura dos textos previstos no edital.</CardContent></Card>
    <form className="flex gap-2" role="search"><input className="h-10 flex-1 rounded-md border border-input bg-background px-3" name="q" defaultValue={q} placeholder="Buscar um resumo…" aria-label="Buscar na biblioteca" /><Button type="submit">Buscar</Button></form>
    <p className="text-sm text-muted-foreground">{docs.length} materiais encontrados.</p><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{docs.map(doc => <Card key={doc.slug}><CardHeader><Badge variant="secondary" className="w-fit">{doc.kicker}</Badge><CardTitle className="leading-snug"><Link href={`/resumos/${doc.slug}?guia=manausprev`}>{doc.title}</Link></CardTitle><CardDescription>{doc.description}</CardDescription></CardHeader><CardContent className="mt-auto"><Button asChild variant="outline"><Link href={`/resumos/${doc.slug}?guia=manausprev`}>Estudar conteúdo →</Link></Button></CardContent></Card>)}</div>
  </div>;
}
