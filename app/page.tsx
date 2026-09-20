import MapGrid from '@/components/MapGrid';
import ThemeToggle from '@/components/ThemeToggle';
import { maps } from '@/data/maps';

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="wrap bar">
          <span className="brand">Mapas Mentais</span>
          <ThemeToggle />
        </div>
      </header>

      <main className="wrap">
        <section className="hero">
          <div className="eyebrow">Concursos · TJAM &amp; ManausPrev</div>
          <h1>Meus Mapas Mentais</h1>
          <p className="dek">
            {maps.length} mapas divididos por matéria, com acesso rápido. Use a busca ou o filtro para
            separar o que veio das apostilas do curso do que é conteúdo complementar.
          </p>
        </section>
        <MapGrid />
      </main>

      <footer className="site-footer">
        <div className="wrap">
          <p>
            Os mapas marcados como <b>Complemento</b> são conteúdo autoral, feito a partir do edital, e não vêm das
            apostilas do curso. Os links &ldquo;versão online&rdquo; exigem login no Claude.
          </p>
        </div>
      </footer>
    </>
  );
}
