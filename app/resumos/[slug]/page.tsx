import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import FontSizeControl from '@/components/FontSizeControl';
import ThemeToggle from '@/components/ThemeToggle';
import ResumoContent from '@/components/resumo/ResumoContent';
import MindMap from '@/components/resumo/MindMap';
import SubnavSpy from '@/components/resumo/SubnavSpy';
import { getSubject } from '@/data/resumos';
import { getAllResumos, getResumoDoc } from '@/lib/resumos';
import '@/app/resumo.css';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllResumos().map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const doc = getResumoDoc(slug);
  return doc ? { title: doc.item.title, description: doc.item.description } : {};
}

function renderTitle(title: string) {
  return title.split('*').map((part, i) => (i % 2 ? <em key={i}>{part}</em> : part));
}

export default async function ResumoPage({ params }: Props) {
  const { slug } = await params;
  const doc = getResumoDoc(slug);
  if (!doc) notFound();
  const subject = getSubject(doc.item.subject);

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[color:var(--line-soft)] bg-[color-mix(in_srgb,var(--paper)_92%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex min-h-[52px] max-w-[1040px] items-center gap-3 px-5">
          <Link href="/" aria-label="Todos os resumos" className="btn btn-sm btn-outline gap-1.5 rounded-full">
            <ArrowLeft size={16} aria-hidden />
            <span className="max-[480px]:hidden">Todos os resumos</span>
          </Link>
          <span className="min-w-0 overflow-hidden text-ellipsis whitespace-nowrap text-[calc(12.5px*var(--fs,1))] text-[color:var(--ink-faint)] max-[720px]:hidden">
            {subject.name} <span aria-hidden>/</span>{' '}
            <b className="font-semibold text-[color:var(--ink)]">{doc.item.title}</b>
          </span>
          <div className="ml-auto flex items-center gap-2">
            <FontSizeControl />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="resumo" data-subject={doc.item.subject}>
        <section className="hero">
          <div className="wrap">
            <h1 className="title">{renderTitle(doc.title)}</h1>
            {doc.lede && <p className="dek">{doc.lede}</p>}
          </div>
        </section>

        <MindMap center={doc.center} note={doc.diagramNote} nodes={doc.nodes} />
        <SubnavSpy items={doc.branches.map((b) => ({ id: b.id, label: b.label }))} />
        <ResumoContent source={doc.body} />
      </div>
    </>
  );
}
