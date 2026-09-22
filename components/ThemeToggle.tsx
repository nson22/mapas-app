'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute('data-theme');
    setTheme(current === 'dark' ? 'dark' : 'light');
  }, []);

  function toggle() {
    const next: Theme = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem('mapas-theme', next);
    } catch {
      /* armazenamento indisponível: o tema vale só nesta visita */
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      className="btn btn-sm btn-outline rounded-full gap-1.5"
      onClick={toggle}
      aria-label="Alternar tema claro/escuro"
      aria-pressed={theme === 'dark'}
    >
      {theme === 'dark' ? <Sun size={15} aria-hidden /> : <Moon size={15} aria-hidden />}
      <span className="max-[720px]:hidden">{theme === 'dark' ? 'Claro' : 'Escuro'}</span>
    </button>
  );
}
