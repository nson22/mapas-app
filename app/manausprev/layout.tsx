import Link from 'next/link';
import { BookOpen, CalendarDays, Library, RotateCcw, Download } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const metadata = { title: 'Guia ManausPrev', description: 'Seu plano de estudos, revisões e materiais para Técnico em Informática.' };

export default function StudyLayout({ children }: { children: React.ReactNode }) {
  return <div className="study-app min-h-screen">
    <header className="border-b border-[var(--line)] bg-[var(--paper)]">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-4 px-5 py-4">
        <Link href="/manausprev" className="flex items-center gap-3 font-bold"><span className="rounded-xl bg-emerald-900 p-2 text-white"><BookOpen size={22} /></span><span>ManausPrev<span className="block text-xs font-normal text-[var(--ink-soft)]">Técnico em Informática · 2026</span></span></Link>
        <nav aria-label="Navegação do guia" className="flex flex-wrap items-center gap-1 sm:ml-auto">
          <Button asChild variant="ghost" size="sm"><Link href="/manausprev"><CalendarDays /> Plano</Link></Button>
          <Button asChild variant="ghost" size="sm"><Link href="/manausprev/revisoes"><RotateCcw /> Revisões</Link></Button>
          <Button asChild variant="ghost" size="sm"><Link href="/manausprev/biblioteca"><Library /> Biblioteca</Link></Button>
          <Button asChild variant="ghost" size="sm"><Link href="/manausprev/dados"><Download /> Progresso</Link></Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
    <main className="mx-auto max-w-7xl px-5 py-8 sm:py-12">{children}</main>
    <footer className="mx-auto max-w-7xl border-t border-[var(--line)] px-5 py-7 text-sm text-[var(--ink-soft)]"><Link href="/" className="underline underline-offset-4">Todos os resumos do projeto</Link><span className="mx-3">·</span>4h por dia · 07/11 a 05/12/2026 · Prova prevista em 06/12.</footer>
  </div>;
}
