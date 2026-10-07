'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, Landmark, Languages, Network, Scale, ScrollText, Search } from 'lucide-react';
import { subjects, type ExamId, type ResumoItem, type Subject } from '@/data/resumos';
import { EXAM_EVENT, readStoredExam } from '@/components/ExamSelector';

const icons: Record<Subject['icon'], typeof Languages> = {
  languages: Languages,
  calculator: Calculator,
  landmark: Landmark,
  scale: Scale,
  network: Network,
  scroll: ScrollText,
};

// Cor de destaque de cada matéria, aplicada via variável CSS no <section> —
// os cards e badges dentro dela leem --accent/--tint pelo estilo inline.
const accentVars: Record<Subject['id'], { accent: string; tint: string }> = {
  portugues: { accent: 'var(--c-por)', tint: 'var(--c-por-t)' },
  raciocinio: { accent: 'var(--c-raciocinio)', tint: 'var(--c-raciocinio-t)' },
  legislacao: { accent: 'var(--c-legislacao)', tint: 'var(--c-legislacao-t)' },
  constitucional: { accent: 'var(--c-constitucional)', tint: 'var(--c-constitucional-t)' },
  administrativo: { accent: 'var(--c-administrativo)', tint: 'var(--c-administrativo-t)' },
  informatica: { accent: 'var(--c-informatica)', tint: 'var(--c-informatica-t)' },
};

const normalize = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

export default function ResumoGrid({ resumos }: { resumos: ResumoItem[] }) {
  const [query, setQuery] = useState('');
  const [exam, setExam] = useState<ExamId>('tjam');

  useEffect(() => {
    setExam(readStoredExam());
    const handler = (e: Event) => setExam((e as CustomEvent<ExamId>).detail);
    window.addEventListener(EXAM_EVENT, handler);
    return () => window.removeEventListener(EXAM_EVENT, handler);
  }, []);

  const visibleSubjects = useMemo(() => subjects.filter((s) => s.exams.includes(exam)), [exam]);

  const visible = useMemo(() => {
    const q = normalize(query.trim());
    const bySubject = resumos.filter((m) => visibleSubjects.some((s) => s.id === m.subject));
    const filtered = q
      ? bySubject.filter((m) => normalize([m.title, m.description, m.kicker, ...m.tags].join(' ')).includes(q))
      : bySubject;
    if (exam !== 'manausprev') return filtered;
    return [...filtered].sort((a, b) => (a.manausOrder ?? 99) - (b.manausOrder ?? 99));
  }, [resumos, query, exam, visibleSubjects]);

  return (
    <>
      <div className="my-2 mb-[18px] flex flex-wrap items-center gap-3">
        <label className="input input-bordered flex min-w-[260px] flex-1 items-center gap-2 rounded-full">
          <Search size={16} className="shrink-0 opacity-60" aria-hidden />
          <input
            type="search"
            placeholder="Buscar resumo ou assunto"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar resumo ou assunto"
            className="grow"
          />
        </label>
      </div>

      {visible.length === 0 && (
        <p className="py-8 text-[color:var(--ink-faint)]">Nenhum resumo encontrado para essa busca.</p>
      )}

      {visibleSubjects.map((s) => {
        const list = visible.filter((m) => m.subject === s.id);
        if (list.length === 0) return null;
        const Icon = icons[s.icon];
        const { accent, tint } = accentVars[s.id];
        return (
          <section
            key={s.id}
            id={s.id}
            className="scroll-mt-16 pt-9 pb-1"
            style={{ '--accent': accent, '--tint': tint } as React.CSSProperties}
          >
            <div
              className="mb-[18px] flex flex-wrap items-baseline gap-3.5 border-b-2 pb-3"
              style={{ borderColor: 'var(--accent)' }}
            >
              <h2 className="flex items-center gap-2.5 text-[clamp(1.4rem,3vw,1.85rem)] font-bold" style={{ color: 'var(--accent)' }}>
                <Icon size={24} aria-hidden />
                {s.name}
              </h2>
              <span className="text-[calc(12px*var(--fs,1))] uppercase tracking-[0.06em] text-[color:var(--ink-faint)]">
                {list.length} {list.length === 1 ? 'resumo' : 'resumos'}
              </span>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4">
              {list.map((m) => (
                <article
                  key={m.slug}
                  className="card relative border border-base-300 bg-base-200 shadow-sm transition-transform hover:-translate-y-[3px] hover:shadow-md motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <div className="card-body gap-0 p-[18px] pb-3.5">
                    <h3 className="card-title mb-2 text-[1.15rem] font-bold leading-tight">
                      <Link href={`/resumos/${m.slug}`} className="after:absolute after:inset-0">
                        {m.title}
                      </Link>
                    </h3>
                    <p className="mb-3.5 grow text-sm text-base-content/70">{m.description}</p>
                    <div className="card-actions mb-3.5">
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          className="badge badge-sm badge-outline"
                          style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center border-t border-base-300 pt-2.5 text-[0.82rem]">
                      <span
                        className="pointer-events-none inline-flex items-center gap-1.5 font-bold"
                        style={{ color: 'var(--accent)' }}
                      >
                        Abrir resumo <ArrowRight size={15} aria-hidden />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
