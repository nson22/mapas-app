# Resumos para Concursos e Guia ManausPrev

Next.js App Router, React e TypeScript. Os resumos existentes continuam disponíveis; o guia de Técnico em Informática acrescenta calendário, biblioteca, conclusões, anotações e revisões.

## Rodar localmente

Requer Node.js 24 ou superior (SQLite nativo via `node:sqlite`).

```bash
npm ci
npm run dev
```

Abra http://127.0.0.1:3000/manausprev. O servidor fica restrito ao computador local. Para produção local: `npm run build` e `npm start`. A fonte Montserrat é obtida pelo `next/font/google` durante o build; esse passo requer internet. Se o Turbopack apresentar falha de subprocessos no Windows, compile com `npm run build -- --webpack`.

## Guia de estudo

- `/manausprev`: painel, calendário de 29 dias e busca de tópicos.
- `/manausprev/dias/2026-11-07`: página de um dia, com blocos, materiais e anotações.
- `/manausprev/biblioteca`: materiais vinculados ao edital.
- `/resumos/[slug]?dia=2026-11-07#secao`: leitura na página original do material, com retorno ao dia do plano. Não usa modal.
- `/manausprev/revisoes`: fila por data e situação. As revisões de 1, 7 e 14 dias partem da data real da conclusão, no fuso de Manaus. Revisões posteriores ao plano são antecipadas para 05/12/2026; agrupe assuntos para caber no tempo disponível.
- `/manausprev/dados`: exportar/importar progresso, incluindo JSON da página HTML anterior. A importação exige confirmação e substitui os dados atuais de forma atômica.

O plano considera 4h/dia entre 07/11 e 05/12/2026, totalizando 116h. Horas concluídas somam a duração planejada dos blocos marcados, não tempo cronometrado. A data prevista da prova é 06/12/2026; conferir a convocação. O calendário e as referências estão em `data/manausprev-plan.json`, com IDs estáveis para preservar o progresso.

Diagnóstico de origem: planilha verticalizada fornecida pelo usuário, com 79 tópicos não iniciados, 33 em estudo e 6 concluídos. Não há resumos específicos da Resolução 04/2026 e do Código de Ética; o material da Lei 3.237/2023 cobre somente a alteração dos prazos da Lei 1.997/2015. Essas lacunas aparecem nas páginas do guia.

## Persistência e backup

O SQLite é criado automaticamente em `.data/manausprev.sqlite`. A pasta e os arquivos auxiliares WAL não são versionados. Não remova a pasta para atualizar o código. Exporte o progresso na aplicação antes de trocar de computador. Se copiar o banco manualmente, pare o servidor antes.

Opcionalmente configure `STUDY_DB_PATH` com um caminho absoluto para usar outro arquivo. Conclusões, revisões e anotações pertencem a um único perfil local; não existe login ou separação entre usuários. A aplicação deve permanecer local. Uma hospedagem compartilhada exigiria autenticação, isolamento dos usuários e disco persistente; SQLite local não é persistência de produção em plataformas com filesystem efêmero.

As gravações usam Server Actions com validação de entrada, SQL parametrizado e revalidação de páginas. Importações substituem os dados em uma transação. Desfazer um bloco remove suas revisões anteriores para que um novo estudo inicie um ciclo novo.

## Interface e conteúdo

O guia usa componentes oficiais do shadcn/ui adicionados pelo CLI (Button, Card, Badge, Checkbox, Progress, Textarea e Input), com Radix e Tailwind v4. `components.json` configura o shadcn; os tokens acompanham o tema claro/escuro existente. O restante do projeto conserva o daisyUI.

Os materiais estão em `content/resumos/*.md`, com frontmatter e diretivas de seções. `lib/resumos.ts` lê os arquivos e `components/resumo/ResumoContent.tsx` renderiza as páginas, tabelas, exemplos e questões. Para adicionar um resumo, crie um Markdown no mesmo formato e informe metadados como título, matéria e ordem. O guia relaciona slugs e IDs de seções sem duplicar o texto dos resumos.

## Verificação

```bash
npm run typecheck
npm test
npm run build
```

Os testes verificam persistência após reabrir o banco, preservação da data original da conclusão, reinício do ciclo de revisões e rollback de importações com falha. Não acessam o banco pessoal.
