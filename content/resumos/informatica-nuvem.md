---
title: "Computação em Nuvem"
kicker: "Nuvem"
description: "Conceito, características essenciais, modelos de serviço (SaaS, PaaS, IaaS) e tipos de nuvem."
tags: ["2 ramos", "SaaS · PaaS · IaaS"]
subject: "informatica"
order: 25
origin: "curso"
manausOrder: 4
lede: "Do conceito às características essenciais, dos modelos de serviço aos tipos de nuvem — tudo sobre computação em nuvem para a prova."
diagramNote: "Dois ramos sobre computação em nuvem."
center: ["Computação", "em Nuvem"]
---

:::::branch{id="nuvem" num="01" title="Computação em Nuvem: Conceito" kicker="vantagens e características" short="Nuvem:|Conceito" tag="VANTAGENS · CARACTERÍSTICAS"}

Computação em nuvem é o fornecimento de serviços de computação (servidores, armazenamento, bancos de dados, rede, software, análise) pela internet, com acesso **onipresente, conveniente e sob demanda**. Em geral se paga apenas pelo que se usa.

### Vantagens

::::grid{cols="3"}

:::example{tag="Redução de custos"}

Amplia-se só o necessário, sem comprar infraestrutura física.

:::

:::example{variant="alt" tag="Espaço físico"}

Menos servidores, racks e equipamentos no local.

:::

:::example{variant="gold" tag="Infraestrutura"}

Dados em servidores robustos, com disponibilidade.

:::

:::example{tag="Segurança"}

Segurança física e lógica, com redundância de dados e backups do provedor.

:::

:::example{variant="alt" tag="Energia"}

O consumo de energia fica com o provedor.

:::

::::

### Características essenciais

| Característica | Significado |
| --- | --- |
| :hl[Serviço mensurável] | É possível medir o consumo (armazenamento, memória, processamento) por relatórios. |
| :hl[Elasticidade rápida] | Aumentar **ou diminuir** recursos rapidamente, conforme a demanda. |
| :hl[Amplo acesso à rede] | Acesso de qualquer lugar e de qualquer dispositivo/sistema operacional com internet. |
| :hl[Recursos sob demanda] | Contrata-se conforme a necessidade (autosserviço). |

:::callout{tag="Lista da banca"}

Uma questão de prova traz as cinco características essenciais como\: autosserviço sob demanda; acesso por banda larga; agrupamento de recursos; elasticidade rápida; serviço mensurado. Gabarito\: Certo.

:::

:::::

::::branch{id="modelos" num="02" title="Modelos de Serviço e Tipos de Nuvem" kicker="SaaS, PaaS, IaaS e tipos de nuvem" short="Modelos|e Tipos" tag="SaaS · PaaS · IaaS" tone="sintaxe"}

### Modelos de serviço

| Modelo | Descrição | Usuários | Exemplos |
| --- | --- | --- | --- |
| :hl[SaaS] | Software como serviço\: aplicativo pronto; o fornecedor cuida de toda a estrutura | Usuários comuns | Google Drive, OneDrive, Dropbox, Office 365 |
| :hl[PaaS] | Plataforma como serviço\: ambiente para desenvolver, testar e executar aplicações | Programadores | Microsoft Azure, Google App Engine |
| :hl[IaaS] | Infraestrutura como serviço\: servidores, armazenamento, redes; o contratante instala e configura | Administradores, engenheiros | Google Cloud Platform, Amazon Web Services |

:::callout{tag="Dica de prova"}

Falou em **infraestrutura, hardware ou virtualização**\: IaaS. Em **desenvolver e executar aplicações**\: PaaS. Em **aplicações prontas para o usuário**\: SaaS.

:::

### Tipos de nuvem

| Tipo | Característica |
| --- | --- |
| :hl[Pública] | Serviços oferecidos por rede aberta, recursos compartilhados; o provedor cobre hardware e banda; paga-se pela capacidade usada. **Não é sinônimo de gratuita nem de governamental.** |
| :hl[Privada] | Exclusiva de uma organização (pode atender várias filiais); mesmos benefícios da pública, sem dividir com outras empresas. |
| :hl[Híbrida] | Combina pública e privada; escalabilidade da pública e dados críticos na privada. |
| :hl[Comunitária] | Compartilhada por organizações com **interesses em comum** (missão, segurança, políticas); administrada por elas ou por terceiro. |

:::callout{variant="warn" tag="Pegadinhas clássicas"}

Nuvem pública gratuita e privada paga? Errado. Nuvem pública é a exclusiva do governo? Errado. Comunitária = disponível ao público em geral? Errado (esse é o conceito de pública).

:::

::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Nuvem: quem usa qual modelo"}

**SaaS = Sou usuário (software pronto); PaaS = Programador (plataforma); IaaS = Infraestrutura (administrador).**

:::

:::example{tag="Nuvem: tipos"}

**Pública = aberta; Privada = de um só; Híbrida = pública + privada; Comunitária = interesses em comum.** Pública não significa gratuita nem governamental.

:::

::::

:::::
