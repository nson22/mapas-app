import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ExternalLink, Maximize2 } from 'lucide-react';
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
          <Link href="/" className="back-link">
            <ArrowLeft size={16} aria-hidden /> Todos os mapas
          </Link>
          <span className="crumb">
            {subject.name} <span aria-hidden>/</span> <b>{map.title}</b>
          </span>
          <div className="actions">
            <a href={`/mapas/${map.slug}.html`} target="_blank" rel="noopener noreferrer" title="Abrir o mapa em tela cheia, em uma nova aba">
              <Maximize2 size={14} aria-hidden /> <span>Tela cheia</span>
            </a>
            {map.online && (
              <a href={map.online} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={14} aria-hidden /> <span>Online</span>
              </a>
            )}
            <FontSizeControl />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <MapFrame slug={map.slug} title={map.title} />
    </div>
  );
}
