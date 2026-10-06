import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import remarkDirective from 'remark-directive';
import remarkParse from 'remark-parse';
import { unified } from 'unified';
import type { ResumoItem, SubjectId } from '@/data/resumos';

const DIR = path.join(process.cwd(), 'content', 'resumos');

type Front = {
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  subject: SubjectId;
  origin: ResumoItem['origin'];
  order: number;
  manausOrder?: number;
  lede?: string;
  diagramNote?: string;
  center?: string[];
};

export type Branch = { id: string; title: string; label: string; short: string; tag: string; tone: string };
export type DiagramNode = { id: string; lines: string[]; tag: string; tone: string };
export type ResumoDoc = {
  item: ResumoItem;
  title: string;
  lede?: string;
  diagramNote?: string;
  center: string[];
  body: string;
  branches: Branch[];
  nodes: DiagramNode[];
};

type AstNode = {
  type: string;
  name?: string;
  attributes?: Record<string, string | null | undefined>;
  children?: AstNode[];
};

const plain = (title: string) => title.replace(/\*/g, '');

function readMap(slug: string) {
  const file = path.join(DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, 'utf8'));
  return { data: data as Front, content };
}

function toItem(slug: string, d: Front): ResumoItem {
  return {
    slug,
    title: plain(d.title),
    kicker: d.kicker,
    description: d.description,
    tags: d.tags,
    subject: d.subject,
    origin: d.origin,
    order: d.order,
    manausOrder: d.manausOrder,
  };
}

type Section = { kind: 'branch' | 'category' } & Branch;

function collectSections(node: AstNode, out: Section[]) {
  if (node.type === 'containerDirective' && (node.name === 'branch' || node.name === 'category')) {
    const a = node.attributes ?? {};
    const short = a.short ?? '';
    out.push({
      kind: node.name,
      id: a.id ?? '',
      title: a.title ?? '',
      short,
      label: short ? short.replace(/\|/g, ' ') : a.title ?? '',
      tag: a.tag ?? '',
      tone: a.tone ?? '',
    });
  }
  for (const child of node.children ?? []) collectSections(child, out);
}

export function getAllResumos(): ResumoItem[] {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith('.md'))
    .map((f) => {
      const slug = f.slice(0, -3);
      return toItem(slug, readMap(slug)!.data);
    })
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getResumoDoc(slug: string): ResumoDoc | null {
  const r = readMap(slug);
  if (!r) return null;
  const tree = unified().use(remarkParse).use(remarkDirective).parse(r.content) as AstNode;
  const sections: Section[] = [];
  collectSections(tree, sections);
  const branches: Branch[] = sections
    .filter((s) => s.kind === 'branch')
    .map(({ id, title, label, short, tag, tone }) => ({ id, title, label, short, tag, tone }));
  const nodes = sections
    .filter((s) => s.short)
    .map((s) => ({ id: s.id, lines: s.short.split('|'), tag: s.tag, tone: s.tone }));
  return {
    item: toItem(slug, r.data),
    title: r.data.title,
    lede: r.data.lede,
    diagramNote: r.data.diagramNote,
    center: r.data.center ?? [plain(r.data.title)],
    body: r.content,
    branches,
    nodes,
  };
}
