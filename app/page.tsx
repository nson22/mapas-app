import FontSizeControl from '@/components/FontSizeControl';
import MapGrid from '@/components/MapGrid';
import ThemeToggle from '@/components/ThemeToggle';
import { maps } from '@/data/maps';

export default function HomePage() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-[color:var(--line-soft)] bg-[color-mix(in_srgb,var(--paper)_92%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex min-h-[52px] max-w-[1040px] items-center gap-4 px-5">
          <span className="font-bold tracking-[0.01em]">Mapas Mentais - Para Concursos</span>
          <div className="ml-auto flex items-center gap-2">
            <FontSizeControl />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1040px] px-5">
        <section className="pt-11 pb-[22px]">
          <h1 className="mb-3.5 text-[clamp(2rem,4.6vw,3rem)] font-extrabold uppercase leading-[1.08] tracking-[0.1em] text-[color:var(--brass)]">
            Conteúdo programático
          </h1>
          <p className="max-w-[62ch] text-[1.06rem] text-[color:var(--ink-soft)]">
            {maps.length} mapas divididos por matéria, com acesso rápido. Use a busca ou o filtro para
            separar o conteúdo principal do complementar.
          </p>
        </section>
        <MapGrid />
      </main>
    </>
  );
}
