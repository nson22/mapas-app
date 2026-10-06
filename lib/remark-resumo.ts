type DirectiveNode = {
  type: string;
  name?: string;
  attributes?: Record<string, string | null | undefined>;
  children?: DirectiveNode[];
  data?: Record<string, unknown>;
};

const CONTAINERS: Record<string, string> = {
  branch: 'resumo-branch',
  category: 'resumo-category',
  quadro: 'resumo-quadro',
  card: 'resumo-card',
  callout: 'resumo-callout',
  grid: 'resumo-grid',
  example: 'resumo-example',
  chips: 'resumo-chips',
  group: 'resumo-group',
  case: 'resumo-case',
};

const TEXT_TAGS: Record<string, string> = { hl: 'span', wine: 'span', sub: 'sub', sup: 'sup', u: 'u', s: 's' };

function visit(node: DirectiveNode) {
  if (node.type === 'containerDirective' && node.name && CONTAINERS[node.name]) {
    node.data = { ...node.data, hName: CONTAINERS[node.name], hProperties: { ...node.attributes } };
  } else if (node.type === 'textDirective' && node.name && TEXT_TAGS[node.name]) {
    const isStyled = node.name === 'hl' || node.name === 'wine';
    node.data = { ...node.data, hName: TEXT_TAGS[node.name], hProperties: isStyled ? { className: [node.name] } : {} };
  }
  node.children?.forEach(visit);
}

/** Converte as diretivas do resumo (:::branch, :::callout, :hl[...] etc.) em elementos React. */
export function remarkResumo() {
  return (tree: DirectiveNode) => {
    visit(tree);
  };
}
