'use client';

import { useCallback, useEffect, useRef } from 'react';
import { FONT_EVENT, FONT_KEY } from './FontSizeControl';

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

  const setScale = useCallback((scale: number) => {
    ref.current?.contentDocument?.documentElement.style.setProperty('--fs', String(scale));
  }, []);

  const onLoad = useCallback(() => {
    const doc = ref.current?.contentDocument;
    if (!doc) return;
    // O tema é controlado pelo cabeçalho do app: esconde o botão flutuante do mapa.
    const style = doc.createElement('style');
    style.textContent = '.theme-fab{display:none !important;}';
    doc.head.appendChild(style);
    sync();
    try {
      const v = parseFloat(localStorage.getItem(FONT_KEY) ?? '');
      if (v > 0.5 && v < 3) setScale(v);
    } catch {
      /* mantém o tamanho padrão */
    }
  }, [sync, setScale]);

  useEffect(() => {
    const onScale = (e: Event) => setScale((e as CustomEvent<number>).detail);
    window.addEventListener(FONT_EVENT, onScale);
    return () => window.removeEventListener(FONT_EVENT, onScale);
  }, [setScale]);

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
