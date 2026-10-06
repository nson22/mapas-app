# Resumos para Concursos (Next.js)

Aplicação Next.js (App Router, TypeScript) que reúne os resumos mentais de estudo para concursos, divididos por matéria.

UI: Tailwind CSS v4 + [daisyUI](https://daisyui.com/) (temas `light`/`dark` customizados em `app/globals.css` para reaproveitar a paleta do site). Layout, espaçamento, tipografia e componentes (botões, cards, badges, busca, grupo de filtros) usam classes utilitárias do Tailwind/daisyUI direto no JSX; `app/globals.css` guarda só os tokens de cor, os temas do daisyUI e um reset mínimo (`@layer base`).

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # versão de produção
```

Requer Node 20 ou superior e internet no build (a fonte Montserrat vem do Google Fonts via `next/font`).

## Como funciona

- `data/resumos.ts`: lista de matérias e resumos (título, descrição, etiquetas e origem).
- `public/resumos/*.html`: os resumos, cada um em um HTML autônomo.
- `app/page.tsx`: página inicial com grade por matéria, busca e filtro (curso x complementar).
- `app/resumos/[slug]/page.tsx`: exibe o resumo em um iframe, com cabeçalho e troca de tema.
- `components/MapFrame.tsx`: mantém o tema e o tamanho da fonte do resumo sincronizados com o aplicativo.
- `components/FontSizeControl.tsx`: seletor de tamanho de fonte (85%, 100%, 115%, 130%, 150%), salvo no navegador e aplicado a todos os resumos. Funciona pela variável CSS `--fs`; o diagrama SVG do resumo não muda de tamanho.

## Adicionar um resumo

1. Copie o HTML para `public/resumos/<slug>.html` e rode `node scripts/prepare-map.mjs public/resumos/<slug>.html`. O script liga o botão de voltar ao app e faz o texto respeitar o seletor de fonte (pode ser rodado mais de uma vez). Se o resumo tiver questões no formato antigo (`<details class="exam">`), rode também `python scripts/spoiler-exams.py public/resumos/<slug>.html`: a questão fica visível e só a resposta fica atrás de "+ Ver resposta".
2. Adicione um item em `data/resumos.ts` com o mesmo `slug`.
