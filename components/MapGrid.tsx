'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calculator, ExternalLink, Landmark, Languages, Map as MapIcon, Network, Scale, Search, FileText } from 'lucide-react';
import { maps, subjects, type MapItem, type Subject } from '@/data/maps';

const icons: Record<Subject['icon'], typeof Languages> = {
  languages: Languages,
  calculator: Calculator,
  landmark: Landmark,
  scale: Scale,
  network: Network,
};

type Filter = 'todos' | 'curso' | 'complemento';

const normalize = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

function groupBySource(list: MapItem[]) {
  const out: { source?: string; items: MapItem[] }[] = [];
  for (const m of list) {
    let g = out.find((x) => x.source === m.source);
    if (!g) out.push((g = { source: m.source, items: [] }));
    g.items.push(m);
  }
  return out;
}

export default function MapGrid() {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('todos');

  const visible = useMemo(() => {
    const q = normalize(query.trim());
    return maps.filter((m) => {
      if (filter !== 'todos' && m.origin !== filter) return false;
      if (!q) return true;
      return normalize([m.title, m.description, m.kicker, ...m.tags].join(' ')).includes(q);
    });
  }, [query, filter]);

  return (
    <>
      <div className="toolbar">
        <label className="search">
          <Search size={16} aria-hidden />
          <input
            type="search"
            placeholder="Buscar mapa ou assunto"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Buscar mapa ou assunto"
          />
        </label>
        <div className="filters" role="group" aria-label="Filtrar por origem">
          {([
            ['todos', 'Todos'],
            ['curso', 'Do curso'],
            ['complemento', 'Complementares'],
          ] as [Filter, string][]).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={filter === id ? 'chip-btn active' : 'chip-btn'}
              onClick={() => setFilter(id)}
              aria-pressed={filter === id}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <nav className="quick" aria-label="Matérias">
        {subjects.map((s) => {
          const Icon = icons[s.icon];
          const n = visible.filter((m) => m.subject === s.id).length;
          if (n === 0) return null;
          return (
            <a key={s.id} href={`#${s.id}`}>
              <Icon size={13} aria-hidden /> {s.name} · {n}
            </a>
          );
        })}
      </nav>

      {visible.length === 0 && <p className="empty">Nenhum mapa encontrado para essa busca.</p>}

      {subjects.map((s) => {
        const list = visible.filter((m) => m.subject === s.id);
        if (list.length === 0) return null;
        const Icon = icons[s.icon];
        return (
          <section key={s.id} id={s.id} className={`subject ${s.id}`}>
            <div className="subject-head">
              <h2>
                <Icon size={24} aria-hidden />
                {s.name}
              </h2>
              <span className="n">{list.length} {list.length === 1 ? 'mapa' : 'mapas'}</span>
            </div>
            {groupBySource(list).map((g) => (
              <div key={g.source ?? 'all'}>
                {g.source && (
                  <h3 className="source-head">
                    <FileText size={16} aria-hidden />
                    {g.source}
                  </h3>
                )}
                <div className="grid">
                  {g.items.map((m) => (
                    <article key={m.slug} className="card">
                      <div className="kicker">
                        <MapIcon size={14} aria-hidden />
                        {m.kicker}
                      </div>
                      <h3>
                        <Link href={`/mapas/${m.slug}`}>{m.title}</Link>
                      </h3>
                      <p>{m.description}</p>
                      <div className="tags">
                        {m.tags.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                      <div className="foot">
                        <span className="open">
                          Abrir mapa <ArrowRight size={15} aria-hidden />
                        </span>
                        {m.online ? (
                          <a className="online" href={m.online} target="_blank" rel="noopener noreferrer">
                            versão online <ExternalLink size={13} aria-hidden />
                          </a>
                        ) : (
                          <span />
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </section>
        );
      })}
    </>
  );
}
