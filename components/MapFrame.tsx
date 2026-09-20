'use client';

import { useCallback, useEffect, useRef } from 'react';

/**
 * Exibe um mapa (HTML estático em /public/mapas) e mantém o tema do iframe
 * sincronizado com o tema do aplicativo. Como é a mesma origem, dá para acessar
 * o documento do iframe diretamente.
 */
export default function MapFrame({ slug, title }: { slug: string; title: string }) {
  const ref = useRef<HTMLIFrameElement>(null);

  const sync = useCallback(() => {
    const doc = ref.current?.contentDocument;
    if (!doc) return;
    const theme = document.documentElement.getAttribute('data-theme') ?? 'light';
    doc.documentElement.setAttribute('data-theme', theme);
  }, []);

  const onLoad = useCallback(() => {
    const doc = ref.current?.contentDocument;
    if (!doc) return;
    // O tema é controlado pelo cabeçalho do app: esconde o botão flutuante do mapa.
    const style = doc.createElement('style');
    style.textContent = '.theme-fab{display:none !important;}';
    doc.head.appendChild(style);
    sync();
  }, [sync]);

  useEffect(() => {
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, [sync]);

  return (
    <iframe
      ref={ref}
      className="map-frame"
      src={`/mapas/${slug}.html`}
      title={title}
      onLoad={onLoad}
    />
  );
}
