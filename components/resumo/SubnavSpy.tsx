'use client';

import { useEffect, useState } from 'react';
import { List, X } from 'lucide-react';

export type SectionLink = { id: string; label: string };

/** Lista de seções do resumo, com destaque da seção visível (também nos nós do diagrama). */
export default function SubnavSpy({ items }: { items: SectionLink[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('#subnav a'));
    const nodes = Array.from(document.querySelectorAll<HTMLAnchorElement>('.mm-link'));
    const sections = items.map((i) => document.getElementById(i.id)).filter((s): s is HTMLElement => s !== null);

    const mark = (id: string) => {
      const href = `#${id}`;
      links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === href));
      nodes.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === href));
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && mark(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <button
        type="button"
        className="subnav-toggle"
        aria-expanded={open}
        aria-controls="subnav-panel"
        onClick={() => setOpen((o) => !o)}
      >
        <List size={17} aria-hidden /> Seções
      </button>
      <div className={`subnav-backdrop${open ? ' show' : ''}`} onClick={() => setOpen(false)} aria-hidden />
      <nav id="subnav-panel" aria-label="Seções do resumo" className={`subnav-panel${open ? ' open' : ''}`}>
        <div className="subnav-panel-head">
          <span>Seções</span>
          <button type="button" className="subnav-close" aria-label="Fechar seções" onClick={() => setOpen(false)}>
            <X size={15} aria-hidden />
          </button>
        </div>
        <div className="subnav" id="subnav">
          {items.map((i) => (
            <a key={i.id} href={`#${i.id}`} onClick={() => setOpen(false)}>
              {i.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
