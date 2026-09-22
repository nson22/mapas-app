'use client';

import { useEffect, useState } from 'react';
import { Minus, Plus, Type } from 'lucide-react';

export const FONT_STEPS = [0.85, 1, 1.15, 1.3, 1.5] as const;
export const FONT_KEY = 'mapas-font-scale';
export const FONT_EVENT = 'mapas-font-scale';

const DEFAULT_INDEX = 1;

function readStored(): number {
  try {
    const v = parseFloat(localStorage.getItem(FONT_KEY) ?? '');
    const i = FONT_STEPS.findIndex((s) => s === v);
    return i === -1 ? DEFAULT_INDEX : i;
  } catch {
    return DEFAULT_INDEX;
  }
}

export default function FontSizeControl() {
  const [index, setIndex] = useState(DEFAULT_INDEX);

  useEffect(() => {
    const i = readStored();
    setIndex(i);
    document.documentElement.style.setProperty('--fs', String(FONT_STEPS[i]));
  }, []);

  function apply(next: number) {
    const i = Math.min(FONT_STEPS.length - 1, Math.max(0, next));
    setIndex(i);
    document.documentElement.style.setProperty('--fs', String(FONT_STEPS[i]));
    try {
      localStorage.setItem(FONT_KEY, String(FONT_STEPS[i]));
    } catch {
      /* sem armazenamento: vale só nesta visita */
    }
    window.dispatchEvent(new CustomEvent(FONT_EVENT, { detail: FONT_STEPS[i] }));
  }

  const percent = Math.round(FONT_STEPS[index] * 100);

  return (
    <div
      className="join items-center rounded-full border border-base-300 pl-2"
      role="group"
      aria-label="Tamanho da fonte"
    >
      <Type size={14} className="mx-1.5 shrink-0" aria-hidden />
      <button
        type="button"
        className="join-item btn btn-sm btn-ghost btn-square"
        onClick={() => apply(index - 1)}
        disabled={index === 0}
        aria-label="Diminuir a fonte"
        title="Diminuir a fonte"
      >
        <Minus size={14} aria-hidden />
      </button>
      <button
        type="button"
        className="join-item btn btn-sm btn-ghost min-w-12"
        onClick={() => apply(DEFAULT_INDEX)}
        aria-label={`Fonte a ${percent}%. Clique para voltar a 100%`}
        title="Voltar a 100%"
      >
        {percent}%
      </button>
      <button
        type="button"
        className="join-item btn btn-sm btn-ghost btn-square"
        onClick={() => apply(index + 1)}
        disabled={index === FONT_STEPS.length - 1}
        aria-label="Aumentar a fonte"
        title="Aumentar a fonte"
      >
        <Plus size={14} aria-hidden />
      </button>
    </div>
  );
}
