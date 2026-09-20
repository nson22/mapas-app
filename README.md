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
- `components/MapFrame.tsx`: mantém o tema do mapa sincronizado com o do aplicativo.

## Adicionar um mapa

1. Copie o HTML para `public/mapas/<slug>.html` (troque `href="index.html"` do botão de voltar por `href="/" target="_top"`).
2. Adicione um item em `data/maps.ts` com o mesmo `slug`.
