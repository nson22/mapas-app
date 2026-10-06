import type { ReactNode } from 'react';
import ReactMarkdown, { type Components } from 'react-markdown';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import { remarkResumo } from '@/lib/remark-resumo';
import { Branch, Callout, Card, Case, Category, Chips, Example, Grid, Group, Quadro } from './blocks';

type ElementProps = { children?: ReactNode };

const components = {
  'resumo-category': Category,
  'resumo-branch': Branch,
  'resumo-quadro': Quadro,
  'resumo-card': Card,
  'resumo-callout': Callout,
  'resumo-grid': Grid,
  'resumo-example': Example,
  'resumo-chips': Chips,
  'resumo-group': Group,
  'resumo-case': Case,
  h3: ({ children }: ElementProps) => <h3 className="sub">{children}</h3>,
  table: ({ children }: ElementProps) => (
    <div className="table-scroll">
      <table className="data">{children}</table>
    </div>
  ),
} as unknown as Components;

export default function ResumoContent({ source }: { source: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm, remarkDirective, remarkResumo]} components={components}>
      {source}
    </ReactMarkdown>
  );
}
