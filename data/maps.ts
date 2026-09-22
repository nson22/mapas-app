export type SubjectId = 'portugues' | 'raciocinio' | 'constitucional' | 'administrativo' | 'informatica';

export type MapItem = {
  slug: string; // nome do arquivo em /public/mapas, sem .html
  title: string;
  kicker: string;
  description: string;
  tags: string[];
  subject: SubjectId;
  /** 'curso' = feito a partir das suas apostilas; 'complemento' = conteúdo autoral para cobrir o edital */
  origin: 'curso' | 'complemento';
  /** link do artefato publicado no Claude (exige login), quando existir */
  online?: string;
  /** PDF de origem: agrupa os mapas em um gridview por PDF */
  source?: string;
};

export type Subject = {
  id: SubjectId;
  name: string;
  icon: 'languages' | 'calculator' | 'landmark' | 'scale' | 'network';
};

export const subjects: Subject[] = [
  { id: 'portugues', name: 'Língua Portuguesa', icon: 'languages' },
  { id: 'informatica', name: 'Informática', icon: 'network' },
  { id: 'raciocinio', name: 'Raciocínio Lógico-Matemático', icon: 'calculator' },
  { id: 'constitucional', name: 'Direito Constitucional', icon: 'landmark' },
  { id: 'administrativo', name: 'Direito Administrativo', icon: 'scale' },
];

const claude = (id: string) => `https://claude.ai/artifact/${id}`;

export const maps: MapItem[] = [
  // Língua Portuguesa
  {
    slug: 'portugues-formacao',
    title: 'Classes de Palavras',
    kicker: 'Conteúdo principal',
    description: 'As dez classes gramaticais, de substantivo a verbos, mais acentuação gráfica, em variáveis e invariáveis.',
    tags: ['10 ramos', 'morfologia'],
    subject: 'portugues',
    origin: 'curso',
    online: claude('6BzcTCjgZJr6n3CSNMK18M'),
  },
  {
    slug: 'portugues-expansao',
    title: 'Morfologia, Sintaxe & Semântica',
    kicker: 'Conteúdo principal',
    description: 'Estrutura das palavras, acentuação, transitividade, regência verbal e nominal, sinônimos, antônimos, parônimos e homônimos.',
    tags: ['3 níveis', 'regência', 'semântica'],
    subject: 'portugues',
    origin: 'curso',
    online: claude('H7reyMCZse6h3miQzTt1D2'),
  },
  {
    slug: 'portugues-pronomes-crase',
    title: 'Colocação Pronominal, Coordenação & Crase',
    kicker: 'Conteúdo principal',
    description: 'Próclise, mesóclise e ênclise; orações coordenadas sindéticas; quando a crase ocorre, não ocorre ou é facultativa.',
    tags: ['3 ramos', 'crase', 'coordenação'],
    subject: 'portugues',
    origin: 'curso',
    online: claude('Pa9YxHeJ6eTRYf72P6Hf6W'),
  },
  {
    slug: 'portugues-texto-sentido',
    title: 'Texto e Sentido',
    kicker: 'Complementar · ManausPrev',
    description: 'Interpretação de textos e gêneros, denotação e conotação, intertextualidade e figuras de linguagem.',
    tags: ['4 ramos', 'conteúdo autoral'],
    subject: 'portugues',
    origin: 'complemento',
  },
  {
    slug: 'portugues-concordancia-vozes',
    title: 'Concordância e Vozes do Verbo',
    kicker: 'Complementar · ManausPrev',
    description: 'Concordância verbal e nominal, casos do "se" e vozes do verbo, com treinos resolvidos.',
    tags: ['3 ramos', 'conteúdo autoral'],
    subject: 'portugues',
    origin: 'complemento',
  },
  {
    slug: 'portugues-frase-periodo',
    title: 'Frase e Período',
    kicker: 'Complementar · ManausPrev',
    description: 'Termos da oração, subordinação, pontuação, discurso direto e indireto e correlação de tempos e modos.',
    tags: ['5 ramos', 'conteúdo autoral'],
    subject: 'portugues',
    origin: 'complemento',
  },
  {
    slug: 'portugues-escrita',
    title: 'Ortografia, Formação e Redação',
    kicker: 'Complementar · ManausPrev',
    description: 'Letras, hífen e palavras que confundem, processos de formação de palavras e reescrita.',
    tags: ['3 ramos', 'conteúdo autoral'],
    subject: 'portugues',
    origin: 'complemento',
  },

  // Raciocínio Lógico-Matemático
  {
    slug: 'rlm-logica',
    title: 'Lógica e Argumentação',
    kicker: 'Complementar · ManausPrev',
    description: 'Proposições, tabela-verdade, negações, equivalências, quantificadores e validade de argumentos.',
    tags: ['4 ramos', 'conteúdo autoral'],
    subject: 'raciocinio',
    origin: 'complemento',
  },
  {
    slug: 'rlm-analitico',
    title: 'Raciocínio Analítico',
    kicker: 'Complementar · ManausPrev',
    description: 'Relações arbitrárias, verdades e mentiras, sequências, orientação espacial e temporal, analogias.',
    tags: ['5 ramos', 'conteúdo autoral'],
    subject: 'raciocinio',
    origin: 'complemento',
  },
  {
    slug: 'rlm-matematica',
    title: 'Matemática e Estatística',
    kicker: 'Complementar · ManausPrev',
    description: 'Regra de três, porcentagem, média, mediana, moda, desvio padrão, gráficos e tabelas.',
    tags: ['4 ramos', 'conteúdo autoral'],
    subject: 'raciocinio',
    origin: 'complemento',
  },

  // Direito Constitucional
  {
    slug: 'direito-constitucional-principios',
    title: 'Princípios Fundamentais',
    kicker: 'Conteúdo principal',
    description: 'Título I da CF/88 &mdash; arts. 1º a 4º.',
    tags: ['1 questões'],
    subject: 'constitucional',
    origin: 'curso',
  },
  {
    slug: 'direito-constitucional-teoria-geral',
    title: 'Teoria Geral dos Direitos Fundamentais',
    kicker: 'Conteúdo principal',
    description: 'Evolução, conceito, dimensões, características, eficácia e limites.',
    tags: ['conceitos e quadros'],
    subject: 'constitucional',
    origin: 'curso',
  },
  {
    slug: 'direito-constitucional-aplicabilidade',
    title: 'Aplicabilidade das Normas Constitucionais',
    kicker: 'Conteúdo principal',
    description: 'Eficácia plena, contida e limitada; classificação da CF/88.',
    tags: ['conceitos e quadros'],
    subject: 'constitucional',
    origin: 'curso',
  },
  {
    slug: 'direito-constitucional-direitos-fundamentais',
    title: 'Direitos Fundamentais',
    kicker: 'Conteúdo principal',
    description: 'Art. 5º da CF/88 &mdash; o tema nº1 do Direito Constitucional.',
    tags: ['1 questões'],
    subject: 'constitucional',
    origin: 'curso',
  },
  {
    slug: 'direito-constitucional-remedios',
    title: 'Remédios Constitucionais',
    kicker: 'Conteúdo principal',
    description: 'Instrumentos processuais de proteção aos direitos fundamentais.',
    tags: ['1 questões'],
    subject: 'constitucional',
    origin: 'curso',
  },
  {
    slug: 'direito-constitucional-seguranca-publica',
    title: 'Segurança Pública',
    kicker: 'Conteúdo principal',
    description: 'Art. 144 da CF/88.',
    tags: ['1 questões'],
    subject: 'constitucional',
    origin: 'curso',
  },
  {
    slug: 'direito-constitucional-poder-constituinte',
    title: 'Poder Constituinte',
    kicker: 'Conteúdo principal',
    description: 'Poder originário e derivado, titularidade, recepção e direito intertemporal.',
    tags: ['6 questões'],
    subject: 'constitucional',
    origin: 'curso',
  },
  {
    slug: 'direito-constitucional-hermeneutica',
    title: 'Hermenêutica Constitucional',
    kicker: 'Conteúdo principal',
    description: 'Métodos, correntes, critérios, escolas e questões resolvidas.',
    tags: ['49 questões'],
    subject: 'constitucional',
    origin: 'curso',
  },

  // Direito Administrativo
  {
    slug: 'direito-administrativo',
    title: 'Responsabilidade Civil do Estado',
    kicker: 'Responsabilidade do Estado',
    description: 'Das teorias ao risco administrativo do art. 37, § 6º: excludentes, exceções e jurisprudência do STF e do STJ.',
    tags: ['9 ramos', 'art. 37, § 6º'],
    subject: 'administrativo',
    origin: 'curso',
    online: claude('NjULfstmhEK46C2zAf92e7'),
  },

  {
    slug: 'direito-administrativo-regime',
    title: 'Regime Jurídico e Princípios',
    kicker: 'Conteúdo principal',
    description: 'Origem, sistemas de controle, fontes, prerrogativas e sujeições, princípios expressos (LIMPE) e implícitos, com as súmulas e artigos que a prova cobra.',
    tags: ['3 ramos', '12 questões'],
    subject: 'administrativo',
    origin: 'curso',
  },
  {
    slug: 'direito-administrativo-organizacao',
    title: 'Organização Administrativa',
    kicker: 'Conteúdo principal',
    description: 'Órgãos, descentralização e desconcentração, autarquias, agências, fundações, empresas estatais, terceiro setor e consórcios públicos.',
    tags: ['4 ramos', '7 questões'],
    subject: 'administrativo',
    origin: 'curso',
  },
  {
    slug: 'direito-administrativo-poderes',
    title: 'Poderes Administrativos',
    kicker: 'Conteúdo principal',
    description: 'Poderes hierárquico e disciplinar, poder-dever e abuso de poder, poder normativo e regulamentar, reserva de administração e poder de polícia.',
    tags: ['3 ramos', '6 questões'],
    subject: 'administrativo',
    origin: 'curso',
  },

  // Informática
  {
    slug: 'informatica-internet',
    title: 'Internet, Intranet & VPN',
    kicker: 'Redes',
    description: 'Da ARPANET ao túnel criptografado: protocolos, intranet e extranet, navegadores, busca avançada e e-mail.',
    tags: ['8 ramos', 'protocolos'],
    subject: 'informatica',
    origin: 'curso',
    online: claude('DnRfob3QQFXgKBkwuhNCNq'),
  },
  {
    slug: 'informatica-redes-nuvem',
    title: 'Redes de Computadores & Computação em Nuvem',
    kicker: 'Redes e Nuvem',
    description: 'Topologias, camadas OSI e TCP/IP, equipamentos, protocolos e portas, IP, SaaS, PaaS e IaaS.',
    tags: ['8 ramos', 'protocolos e portas'],
    subject: 'informatica',
    origin: 'curso',
  },
  {
    slug: 'informatica-hardware-so',
    title: 'Hardware, Sistemas Operacionais e Instalação',
    kicker: 'Complementar · ManausPrev',
    description: 'Componentes e periféricos, Windows, Linux (comandos e permissões) e preparação de estações.',
    tags: ['4 ramos', 'conteúdo autoral'],
    subject: 'informatica',
    origin: 'complemento',
  },
  {
    slug: 'informatica-suporte-servicos',
    title: 'Suporte, Central de Serviços e Ativos',
    kicker: 'Complementar · ManausPrev',
    description: 'Chamados, Help Desk, SLA, diagnóstico, gestão de ativos e contratação de manutenção.',
    tags: ['5 ramos', 'conteúdo autoral'],
    subject: 'informatica',
    origin: 'complemento',
  },
  {
    slug: 'informatica-seguranca-backup',
    title: 'Conectividade, Segurança e Backup',
    kicker: 'Complementar · ManausPrev',
    description: 'Comandos de rede, contas e acessos, ameaças, MFA, Active Directory e tipos de backup.',
    tags: ['3 ramos', 'conteúdo autoral'],
    subject: 'informatica',
    origin: 'complemento',
  },
  {
    slug: 'informatica-escritorio-docs',
    title: 'Escritório, Sistemas e Documentação',
    kicker: 'Complementar · ManausPrev',
    description: 'Word, Excel, Outlook, Microsoft 365, sistemas corporativos, documentação, treinamento e inglês técnico.',
    tags: ['4 ramos', 'conteúdo autoral'],
    subject: 'informatica',
    origin: 'complemento',
  },
];

export const getMap = (slug: string) => maps.find((m) => m.slug === slug);
export const getSubject = (id: SubjectId) => subjects.find((s) => s.id === id)!;
