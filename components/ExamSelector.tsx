'use client';

import { useEffect, useState } from 'react';
import type { ExamId } from '@/data/maps';

export const EXAM_KEY = 'mapas-exam';
export const EXAM_EVENT = 'mapas-exam';
const DEFAULT_EXAM: ExamId = 'tjam';

export function readStoredExam(): ExamId {
  try {
    return localStorage.getItem(EXAM_KEY) === 'manausprev' ? 'manausprev' : DEFAULT_EXAM;
  } catch {
    return DEFAULT_EXAM;
  }
}

const options: { id: ExamId; label: string }[] = [
  { id: 'tjam', label: 'TJAM' },
  { id: 'manausprev', label: 'ManausPrev' },
];

export default function ExamSelector() {
  const [exam, setExam] = useState<ExamId>(DEFAULT_EXAM);

  useEffect(() => {
    setExam(readStoredExam());
  }, []);

  function apply(next: ExamId) {
    setExam(next);
    try {
      localStorage.setItem(EXAM_KEY, next);
    } catch {
      /* sem armazenamento: vale só nesta visita */
    }
    window.dispatchEvent(new CustomEvent<ExamId>(EXAM_EVENT, { detail: next }));
  }

  return (
    <select
      className="select select-sm select-bordered rounded-full"
      aria-label="Concurso"
      value={exam}
      onChange={(e) => apply(e.target.value as ExamId)}
    >
      {options.map((o) => (
        <option key={o.id} value={o.id}>
          {o.label}
        </option>
      ))}
    </select>
  );
}
