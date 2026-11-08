## Fluxo obrigatório de implementação e aprovação

- Antes de iniciar qualquer implementação ou alteração de arquivos, criar uma nova branch com nome descritivo. Nunca implementar diretamente na `main` nem reutilizar a branch de uma tarefa anterior.
- Partir da branch de destino atualizada. Se a tarefa depender de trabalho ainda não integrado, criar a nova branch a partir dessa implementação e informar a dependência ao usuário.
- Implementar e executar as verificações apropriadas na nova branch. Apresentar o resultado, as verificações realizadas e eventuais limitações para aprovação do usuário.
- Somente após a aprovação explícita do usuário, criar o commit das alterações aprovadas e enviar a branch ao GitHub. A solicitação inicial de implementação não equivale à aprovação do resultado.
- Após essa aprovação, realizar o merge da branch na branch de destino (normalmente `main`), respeitando as proteções do repositório e verificações obrigatórias. Confirmar o resultado do merge e informar o commit e a branch de destino ao usuário.
- Se forem solicitadas correções durante a revisão, fazê-las na mesma branch da tarefa e aguardar a aprovação do resultado atualizado antes de criar o commit e realizar o merge.
- Não incluir alterações alheias à tarefa nos commits nem descartar trabalho existente do usuário.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
