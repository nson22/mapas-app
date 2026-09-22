import FontSizeControl from '@/components/FontSizeControl';
import MapGrid from '@/components/MapGrid';
import ThemeToggle from '@/components/ThemeToggle';
import { maps } from '@/data/maps';

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="wrap bar">
          <span className="brand">Mapas Mentais - Para Concursos</span>
          <div className="actions">
            <FontSizeControl />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="wrap">
        <section className="page-hero">
          <h1 className='eyebrow'>Meus Mapas Mentais</h1>
          <p className="dek">
            {maps.length} mapas divididos por matéria, com acesso rápido. Use a busca ou o filtro para
            separar o conteúdo principal do complementar.
          </p>
        </section>
        <MapGrid />
      </main>
    </>
  );
}
