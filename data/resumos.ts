export type SubjectId = 'portugues' | 'raciocinio' | 'constitucional' | 'administrativo' | 'informatica';

export type ExamId = 'tjam' | 'manausprev';

/** Metadados de um resumo, lidos do frontmatter de content/resumos/<slug>.md. */
export type ResumoItem = {
  slug: string;
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  subject: SubjectId;
  /** 'curso' = feito a partir das suas apostilas; 'complemento' = conteúdo autoral para cobrir o edital */
  origin: 'curso' | 'complemento';
  /** Posição na lista do concurso TJAM (ordem de exibição padrão). */
  order: number;
  /** Ordem de estudo recomendada para o edital da ManausPrev (Técnico em Informática). */
  manausOrder?: number;
};

export type Subject = {
  id: SubjectId;
  name: string;
  icon: 'languages' | 'calculator' | 'landmark' | 'scale' | 'network';
  /** Em quais concursos essa matéria é cobrada. */
  exams: ExamId[];
};

export const subjects: Subject[] = [
  { id: 'portugues', name: 'Língua Portuguesa', icon: 'languages', exams: ['tjam', 'manausprev'] },
  { id: 'informatica', name: 'Informática', icon: 'network', exams: ['tjam', 'manausprev'] },
  { id: 'raciocinio', name: 'Raciocínio Lógico-Matemático', icon: 'calculator', exams: ['tjam', 'manausprev'] },
  { id: 'constitucional', name: 'Direito Constitucional', icon: 'landmark', exams: ['tjam'] },
  { id: 'administrativo', name: 'Direito Administrativo', icon: 'scale', exams: ['tjam'] },
];

export const getSubject = (id: SubjectId) => subjects.find((s) => s.id === id)!;
