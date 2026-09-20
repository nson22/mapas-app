# Mapas Mentais (Next.js)

Aplicação Next.js (App Router, TypeScript) que reúne os mapas mentais de estudo para os concursos do TJAM e da ManausPrev, divididos por matéria.

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # versão de produção
```

Requer Node 20 ou superior e internet no build (a fonte Montserrat vem do Google Fonts via `next/font`).

## Como funciona

- `data/maps.ts`: lista de matérias e mapas (título, descrição, etiquetas, origem e link online).
- `public/mapas/*.html`: os mapas, cada um em um HTML autônomo.
- `app/page.tsx`: página inicial com grade por matéria, busca e filtro (curso x complementar).
- `app/mapas/[slug]/page.tsx`: exibe o mapa em um iframe, com cabeçalho, tela cheia e troca de tema.
- `components/MapFrame.tsx`: mantém o tema e o tamanho da fonte do mapa sincronizados com o aplicativo.
- `components/FontSizeControl.tsx`: seletor de tamanho de fonte (85%, 100%, 115%, 130%, 150%), salvo no navegador e aplicado a todos os mapas. Funciona pela variável CSS `--fs`; o diagrama SVG do mapa não muda de tamanho.

## Adicionar um mapa

1. Copie o HTML para `public/mapas/<slug>.html` e rode `node scripts/prepare-map.mjs public/mapas/<slug>.html`. O script liga o botão de voltar ao app e faz o texto respeitar o seletor de fonte (pode ser rodado mais de uma vez).
2. Adicione um item em `data/maps.ts` com o mesmo `slug`.
