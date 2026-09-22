import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import FontSizeControl from '@/components/FontSizeControl';
import MapFrame from '@/components/MapFrame';
import ThemeToggle from '@/components/ThemeToggle';
import { getMap, getSubject, maps } from '@/data/maps';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return maps.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const map = getMap(slug);
  return map ? { title: map.title, description: map.description } : {};
}

export default async function MapPage({ params }: Props) {
  const { slug } = await params;
  const map = getMap(slug);
  if (!map) notFound();
  const subject = getSubject(map.subject);

  return (
    <div className="flex h-dvh flex-col">
      <header className="sticky top-0 z-20 border-b border-[color:var(--line-soft)] bg-[color-mix(in_srgb,var(--paper)_92%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex min-h-[52px] max-w-[1040px] items-center gap-3 px-5">
          <Link href="/" className="btn btn-sm btn-outline gap-1.5 rounded-full">
            <ArrowLeft size={16} aria-hidden /> Todos os mapas
          </Link>
          <span className="min-w-0 max-[720px]:hidden overflow-hidden text-ellipsis whitespace-nowrap text-[calc(12.5px*var(--fs,1))] text-[color:var(--ink-faint)]">
            {subject.name} <span aria-hidden>/</span> <b className="font-semibold text-[color:var(--ink)]">{map.title}</b>
          </span>
          <div className="ml-auto flex items-center gap-2">
            <FontSizeControl />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <MapFrame slug={map.slug} title={map.title} />
    </div>
  );
}
