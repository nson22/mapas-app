---
title: "Suporte, Central de Serviços e *Ativos*"
kicker: "Complementar"
description: "Chamados, Help Desk, SLA, diagnóstico, gestão de ativos e contratação de manutenção."
tags: ["5 ramos", "conteúdo autoral"]
subject: "informatica"
order: 26
origin: "complemento"
manausOrder: 5
lede: "Do chamado à garantia: atendimento ao usuário, Help Desk, diagnóstico, controle de patrimônio e contratação de manutenção."
diagramNote: "Cinco tópicos do edital sobre atendimento e gestão."
center: ["Suporte", "e Serviços"]
---

:::::branch{id="suporte" num="01" title="Suporte Técnico ao Usuário" kicker="ciclo do chamado e atendimento" short="Suporte|ao Usuário" tag="CHAMADO · ESCALONAMENTO"}

Suporte técnico ao usuário é o atendimento (presencial ou remoto) que **resolve ou encaminha** problemas com equipamentos, sistemas, aplicativos, impressoras, e-mail, internet, intranet, redes e sistemas corporativos.

### Ciclo de vida do chamado

| Etapa | O que acontece |
| --- | --- |
| :hl[Registro] | Abre-se o chamado com solicitante, contato, descrição, local e horário |
| :hl[Classificação] | Define se é incidente ou requisição, e a categoria (rede, impressora, sistema...) |
| :hl[Priorização] | Combina impacto e urgência |
| :hl[Diagnóstico] | Coleta sintomas, mensagens de erro e o que mudou; reproduz o problema |
| :hl[Solução] | Aplica a correção ou contorno e testa |
| :hl[Encaminhamento] | Se não resolve, escala para outro nível ou equipe |
| :hl[Encerramento] | Comunica a solução, obtém a **confirmação do usuário** e registra a causa e a solução |

::::grid{cols="2"}

:::example{tag="Atendimento presencial"}

Bom para hardware, cabos, impressoras e instalações; permite ver o ambiente.

:::

:::example{variant="alt" tag="Atendimento remoto"}

Acesso remoto com **autorização do usuário**; rápido para software e configuração.

:::

::::

:::callout{tag="Escalonamento"}

**Funcional**\: passa para um nível técnico superior ou especialista. **Hierárquico**\: envolve o gestor, quando há risco de prazo ou impacto grande. Ao escalar, leve o histórico completo do chamado, para o usuário não repetir tudo.

:::

:::callout{variant="warn" tag="Postura"}

Escute o problema, confirme o entendimento, comunique prazos e nunca peça a senha do usuário. Ao fim, confirme com o usuário que o problema foi resolvido.

:::

:::::

:::branch{id="central" num="02" title="Central de Serviços" kicker="Help Desk, incidentes, SLA e indicadores" short="Central|de Serviços" tag="SLA · INCIDENTE" tone="sintaxe"}

**Help Desk** tem foco em resolver problemas técnicos, de forma reativa. **Service Desk** (central de serviços) é mais amplo\: é o ponto único de contato do usuário e cuida de incidentes, requisições e informações sobre serviços.

| Conceito | Definição | Exemplo |
| --- | --- | --- |
| :hl[Incidente] | Interrupção não planejada, ou queda de qualidade, de um serviço | A impressora parou; o sistema está fora do ar |
| :hl[Requisição de serviço] | Pedido de algo previsto e padronizado | Criar acesso, instalar programa, trocar mouse |
| :hl[Problema] | Causa raiz de um ou mais incidentes | Uma falha de rede que derruba vários setores |
| :hl[Mudança] | Alteração planejada em um serviço ou ativo | Atualização de versão do sistema |

### Prioridade = impacto x urgência

|  | Urgência alta | Urgência média | Urgência baixa |
| --- | --- | --- | --- |
| :hl[**Impacto alto** (muitos usuários ou serviço crítico)] | Crítica | Alta | Média |
| :hl[**Impacto médio**] | Alta | Média | Baixa |
| :hl[**Impacto baixo** (um usuário)] | Média | Baixa | Baixa |

A matriz varia por organização; esta é uma referência comum.

- **Impacto**\: quantos usuários ou processos são afetados. **Urgência**\: quão rápido é preciso resolver.
- **SLA** (Service Level Agreement)\: acordo de nível de serviço, com prazos de resposta e solução por prioridade.
- **Filas de atendimento**\: chamados organizados por prioridade, categoria ou equipe.
- **Níveis de suporte**\: N1 (triagem e problemas comuns), N2 (especialistas), N3 (fornecedor ou engenharia).
- **Base de conhecimento**\: repositório de causas e soluções, que agiliza novos atendimentos e permite autosserviço.

### Indicadores de atendimento

| Indicador | O que mede |
| --- | --- |
| :hl[Prazo (SLA cumprido)] | Percentual de chamados resolvidos dentro do prazo |
| :hl[Tempo médio de atendimento] | Quanto demora, em média, resolver um chamado |
| :hl[Resolução no primeiro contato] | Chamados resolvidos sem escalar |
| :hl[Reincidência] | Chamados que voltam pelo mesmo problema (indica causa não resolvida) |
| :hl[Satisfação do usuário] | Pesquisa após o encerramento |
| :hl[Backlog] | Chamados abertos acumulados |

:::

:::::branch{id="diagnostico" num="03" title="Diagnóstico e Manutenção" kicker="sintomas, causas, logs e garantia" short="Diagnóstico|e Manutenção" tag="SINTOMA · LOGS" tone="semantica"}

Diagnóstico segue uma lógica\: **identificar o sintoma, formular a causa provável, testar, corrigir e confirmar**.

| O que verificar | Como |
| --- | --- |
| :hl[Energia, cabos e conexões] | Tomada, filtro, cabo de força, cabos de rede e vídeo |
| :hl[Mensagens de erro e logs] | Anotar o texto exato; consultar o Visualizador de Eventos (Windows) ou /var/log (Linux) |
| :hl[Espaço em disco] | Disco cheio causa lentidão e falhas de atualização |
| :hl[Memória e processos] | Gerenciador de Tarefas, top; procurar processo que consome tudo |
| :hl[Serviços e dispositivos] | services.msc, systemctl, Gerenciador de Dispositivos |
| :hl[O que mudou] | Atualização, instalação ou troca de peça antes do problema |

::::grid{cols="2"}

:::example{tag="Manutenção preventiva"}

Limpeza física, pasta térmica, atualização de sistemas e drivers, verificação de disco, revisão de backups.

:::

:::example{variant="alt" tag="Manutenção corretiva"}

Reparo, reinstalação ou substituição de componente após a falha.

:::

::::

- **Substituição de componentes**\: desligar e tirar da tomada, usar proteção contra estática e registrar a troca.
- **Garantia e assistência técnica**\: verificar prazo e condições **antes** de abrir o equipamento (abrir pode invalidar a garantia); abrir chamado com o fabricante e guardar o número do protocolo.
- **Reinstalação**\: só depois de esgotar reparos e **com backup** dos dados do usuário.

:::::

::::branch{id="ativos" num="04" title="Gestão de Ativos de Informática" kicker="inventário, licenças e ciclo de vida" short="Gestão|de Ativos" tag="INVENTÁRIO · DESCARTE"}

Gestão de ativos é saber **o que a organização tem, onde está, com quem está e em que estado**.

| Fase | O que registrar |
| --- | --- |
| :hl[Recebimento] | Nota fiscal, conferência, identificação patrimonial (plaqueta ou tombamento) |
| :hl[Distribuição] | Local, responsável e data de entrega, com termo de responsabilidade |
| :hl[Movimentação] | Transferências de setor ou de responsável |
| :hl[Manutenção] | Chamados, peças trocadas e histórico de intervenções |
| :hl[Substituição] | Equipamento novo, baixa do antigo |
| :hl[Descarte] | Baixa patrimonial, **apagamento seguro dos dados** e destinação ambientalmente adequada |

- **Inventário**\: equipamentos, periféricos, softwares e licenças, cada um com identificação, configuração, localização, responsável e situação.
- **Controle de licenças**\: quantidade comprada x instalada. Software instalado além da licença é irregular.
- **Garantias**\: prazo e fabricante registrados para agilizar o reparo.
- **Histórico de intervenções**\: base para decidir entre consertar e substituir.

:::callout{variant="warn" tag="Descarte seguro"}

Antes de descartar ou doar um equipamento, os dados devem ser **apagados de forma irrecuperável** ou o disco destruído; excluir arquivos ou formatar rapidamente não basta.

:::

::::

::::branch{id="contratacao" num="05" title="Contratação de Serviços de Manutenção" kicker="necessidade, termo de referência e fiscalização" short="Contratação|de Manutenção" tag="TR · LEI 14.133" tone="sintaxe"}

Contratar manutenção é um processo público, regido pela **Lei Federal nº 14.133/2021** (nova Lei de Licitações). O edital pede noções em nível conceitual.

| Etapa | O que se faz |
| --- | --- |
| :hl[Identificar a necessidade] | Justificar por que o serviço é preciso (equipamentos, prazos, volume) |
| :hl[Especificação básica] | Descrever objeto e serviços\: tipos de equipamento, níveis de atendimento, prazos de resposta |
| :hl[Estudo e termo de referência] | Documento com a definição do objeto, requisitos, critérios de aceite e obrigações das partes |
| :hl[Escolha da forma de contratar] | Licitação (pregão para bens e serviços comuns, concorrência e outras modalidades) ou contratação direta nos casos previstos |
| :hl[Execução] | Ordens de serviço, conferência de serviços e peças, prazos e garantia |
| :hl[Fiscalização] | Acompanhar, registrar ocorrências e não conformidades, atestar a execução |
| :hl[Recebimento] | Provisório e definitivo, conforme os critérios de aceite |

- **Termo de referência** traz o que será contratado e como será aceito; sem critério de aceite claro, não há como recusar serviço mal feito.
- **Ordem de serviço** formaliza cada demanda (data, equipamento, defeito, prazo).
- **Controle de prazos e garantias** vale para peças e serviços.

:::callout{variant="warn" tag="Atenção"}

Este ramo é **conceitual**, como pede o edital. Para questões literais da lei, consulte o texto da Lei nº 14.133/2021 (modalidades, contratação direta, fiscalização de contratos).

:::

::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Prioridade"}

**Prioridade = Impacto × Urgência.** Impacto\: quantos são afetados. Urgência\: quão rápido resolver.

:::

:::example{tag="Incidente, requisição, problema"}

**Incidente = quebrou** (interrupção); **Requisição = pediu** (algo previsto); **Problema = por quê** (causa raiz de vários incidentes).

:::

:::example{tag="Níveis de suporte"}

**N1 = triagem; N2 = especialista; N3 = fabricante/engenharia.**

:::

:::example{tag="Help Desk × Service Desk"}

**Help Desk = problemas técnicos; Service Desk = serviços em geral** (ponto único de contato).

:::

::::

:::::
