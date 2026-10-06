---
title: "Escritório, Sistemas e *Documentação*"
kicker: "Complementar"
description: "Word, Excel, Outlook, Microsoft 365, sistemas corporativos, documentação, treinamento e inglês técnico."
tags: ["4 ramos", "conteúdo autoral"]
subject: "informatica"
order: 28
origin: "complemento"
manausOrder: 6
lede: "As ferramentas do dia a dia do usuário e o registro do trabalho: Word, Excel, Outlook, sistemas corporativos, documentação, treinamento e inglês técnico."
diagramNote: "Quatro tópicos do edital ligados ao uso e ao registro."
center: ["Escritório", "e Documentação"]
---

::::branch{id="escritorio" num="01" title="Aplicativos de Escritório e Colaboração" kicker="Word, Excel, Outlook, Microsoft 365" short="Aplicativos|de Escritório" tag="WORD · EXCEL · TEAMS"}

O edital cita Word, Excel, Outlook e Microsoft 365 "ou equivalentes". Aqui está o essencial para prova e para o suporte.

### Word (edição de documentos)

- **Estilos** (Título 1, 2...) organizam o documento e permitem gerar **sumário** automático.
- **Cabeçalho, rodapé e numeração de página**; quebra de página e de seção.
- **Controle de alterações** e comentários para revisão.
- **Mala direta**\: mescla modelo com lista de dados.
- Salvar como **PDF** para compartilhar sem alterar.

### Excel (planilhas, fórmulas e funções básicas)

| Função | O que faz | Exemplo |
| --- | --- | --- |
| :hl[SOMA] | Soma valores | =SOMA(A1\:A10) |
| :hl[MÉDIA] | Média aritmética | =MÉDIA(A1\:A10) |
| :hl[MÁXIMO / MÍNIMO] | Maior / menor valor | =MÁXIMO(A1\:A10) |
| :hl[CONT.VALORES / CONT.NÚM] | Conta células preenchidas / com número | =CONT.NÚM(A1\:A10) |
| :hl[SE] | Teste lógico com dois resultados | =SE(B2\>=7;"Aprovado";"Reprovado") |
| :hl[SOMASE / CONT.SE] | Soma / conta se atender a um critério | =CONT.SE(A1\:A10;"Sim") |
| :hl[PROCV] | Busca um valor na primeira coluna e devolve outra coluna | =PROCV(A2;D1\:F20;2;FALSO) |

- Toda fórmula começa com **=**; no Excel em português, o separador de argumentos é o **ponto e vírgula**.
- **Referência relativa** (A1) muda ao copiar; **absoluta** ($A$1) não muda; **mista** ($A1 ou A$1) fixa só coluna ou linha.
- **Filtros** mostram só as linhas que atendem ao critério; **classificação** ordena; **gráficos** resumem dados; **tabela dinâmica** agrupa e resume grandes volumes.

### Outlook (correio, calendário e reuniões)

- **Para**\: destinatários principais; **Cc**\: cópia visível; **Cco**\: cópia oculta (os outros não veem).
- **Regras** movem mensagens automaticamente; **resposta automática** avisa ausência; **assinatura** padroniza o rodapé.
- **Calendário**\: marcar reuniões, convidar pessoas, ver disponibilidade e criar reunião online.
- Contas de e-mail usam **IMAP** e **SMTP** (veja o resumo Redes e Nuvem).

### Microsoft 365, OneDrive, Teams e SharePoint

| Ferramenta | Papel |
| --- | --- |
| :hl[Microsoft 365] | Assinatura que reúne os aplicativos de escritório (instalados ou no navegador) e serviços em nuvem |
| :hl[OneDrive] | Armazenamento pessoal em nuvem, com sincronização, compartilhamento por link e lixeira/versões |
| :hl[SharePoint] | Sites e bibliotecas de documentos da equipe, com permissões e controle de versão |
| :hl[Teams] | Chat, reuniões, videochamadas e colaboração por equipes e canais; arquivos ficam no SharePoint (equipes) e no OneDrive (chats) |

:::callout{variant="warn" tag="Compartilhar com segurança"}

Prefira **links com permissão** (somente leitura ou edição) a enviar cópias por e-mail. Assim há uma versão única e o acesso pode ser retirado depois.

:::

::::

:::branch{id="sistemas" num="02" title="Sistemas de Informação Corporativos" kicker="acesso, perfis, erros e evidências" short="Sistemas|Corporativos" tag="PERFIS · EVIDÊNCIAS" tone="sintaxe"}

Sistemas de informação corporativos são os sistemas do órgão (protocolo, folha, benefícios, atendimento). O técnico de informática garante o **acesso** e ajuda o usuário a usar e a reportar problemas.

| Função | O que envolve |
| --- | --- |
| :hl[Acesso e autenticação] | Login, senha, bloqueio por tentativas, autenticação única (SSO) quando existe |
| :hl[Perfis e permissões] | Cada perfil enxerga e faz apenas o que a função exige |
| :hl[Cadastros] | Inclusão e alteração de registros, com **validação** (campos obrigatórios, formatos) |
| :hl[Consultas e relatórios] | Busca por filtros e emissão de relatórios, conforme permissão |
| :hl[Transações] | Operações que gravam dados (lançar, aprovar, cancelar) e ficam registradas |

### Quando o sistema dá erro

- **Coletar evidências**\: mensagem exata, captura de tela, usuário, data e hora, e passos para repetir o problema.
- **Diferenciar causas**\: erro do usuário (dado inválido), permissão, falha de rede ou defeito do sistema.
- **Orientar o usuário** e testar novamente.
- **Registrar e encaminhar** a falha ao responsável pelo sistema, com as evidências.
- **Documentar** o procedimento na base de conhecimento.

:::

:::branch{id="documentacao" num="03" title="Documentação Técnica e Treinamento" kicker="registros, procedimentos e capacitação" short="Documentação|e Treinamento" tag="REGISTRO · MANUAL" tone="semantica"}

O que não está registrado **não existe** para o próximo atendimento. A documentação sustenta o suporte, a auditoria e a continuidade.

| Documento | Conteúdo |
| --- | --- |
| :hl[Registro de instalação e configuração] | O que foi instalado, versão, parâmetros e responsável |
| :hl[Registro de chamados e manutenções] | Sintoma, causa, solução, peças e datas |
| :hl[Registro de backup e restauração] | O que foi copiado, quando, resultado e testes |
| :hl[Procedimento (passo a passo)] | Instruções que qualquer técnico consiga seguir |
| :hl[Lista de verificação (checklist)] | Itens a conferir em instalações e rotinas |
| :hl[Inventário] | Equipamentos, softwares, licenças e responsáveis |
| :hl[Manual e base de conhecimento] | Orientações e soluções conhecidas |

- **Boas práticas**\: linguagem clara, data, autor, versão e atualização sempre que algo muda.

### Treinamento e orientação a usuários

| Etapa | Ação |
| --- | --- |
| :hl[Levantar necessidades] | Descobrir o que o usuário precisa aprender e onde erra |
| :hl[Preparar materiais] | Manuais, tutoriais e guias rápidos, com imagens e passos curtos |
| :hl[Demonstrar] | Mostrar o sistema, o aplicativo ou o equipamento na prática |
| :hl[Orientar] | Comandos, funcionalidades, procedimentos, segurança, armazenamento, impressão e compartilhamento |
| :hl[Capacitar] | Presencial ou remoto; avaliar se o usuário aprendeu |

:::

::::branch{id="ingles" num="04" title="Inglês Técnico" kicker="vocabulário de erros e menus" short="Inglês|Técnico" tag="ERROS · MENUS"}

Inglês técnico é a leitura de **mensagens de erro, menus e manuais**. Não é conversação\: é reconhecer o vocabulário de TI.

| Inglês | Português |
| --- | --- |
| :hl[update / upgrade] | atualização / migração para versão mais nova |
| :hl[install / uninstall] | instalar / desinstalar |
| :hl[restart / shut down] | reiniciar / desligar |
| :hl[log in (sign in) / log out] | entrar / sair da conta |
| :hl[username / password] | nome de usuário / senha |
| :hl[access denied / permission denied] | acesso negado / permissão negada |
| :hl[file not found] | arquivo não encontrado |
| :hl[connection timed out] | tempo de conexão esgotado |
| :hl[connection refused] | conexão recusada |
| :hl[disk full / out of memory] | disco cheio / memória esgotada |
| :hl[driver / firmware / patch] | controlador / software da placa / correção |
| :hl[backup / restore] | cópia de segurança / restaurar |
| :hl[warning / error] | aviso / erro |
| :hl[troubleshooting] | diagnóstico e solução de problemas |
| :hl[workaround] | solução alternativa (contorno) |
| :hl[downtime / uptime] | tempo fora do ar / tempo disponível |
| :hl[ticket] | chamado |
| :hl[settings / preferences] | configurações |
| :hl[wireless / wired] | sem fio / com fio |

:::callout{variant="warn" tag="Falsos amigos"}

*Actually* = na verdade (não "atualmente"); *Attend* = comparecer; *Pretend* = fingir; *Library* = biblioteca. Em TI, *application* é aplicativo (programa).

:::

::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Excel: PROCV"}

**PROCV = procura na Vertical** (primeira coluna, valor em outra coluna). PROCH procura na horizontal.

:::

:::example{tag="Excel: referências"}

**$ trava**\: $A$1 fixa coluna e linha. A tecla **F4** alterna relativa, absoluta e mista.

:::

:::example{tag="Outlook"}

**Cc = com cópia (todos veem); Cco = com cópia oculta (ninguém vê).**

:::

:::example{tag="Microsoft 365"}

**OneDrive = seus arquivos; SharePoint = biblioteca da equipe; Teams = conversa e reunião.**

:::

::::

:::::
