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
    <div className="map-page">
      <header className="site-header">
        <div className="wrap bar">
          <Link href="/" className="btn btn-sm btn-outline rounded-full gap-1.5">
            <ArrowLeft size={16} aria-hidden /> Todos os mapas
          </Link>
          <span className="crumb">
            {subject.name} <span aria-hidden>/</span> <b>{map.title}</b>
          </span>
          <div className="actions">
            <FontSizeControl />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <MapFrame slug={map.slug} title={map.title} />
    </div>
  );
}
