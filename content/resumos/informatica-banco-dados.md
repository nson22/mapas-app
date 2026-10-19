---
title: "Banco de Dados e *SGBD*"
kicker: "Banco de Dados"
description: "Conceito de banco de dados e SGBD, características da abordagem, usuários, modelos de dados, arquitetura três-esquemas, linguagens (DDL/DML/SQL) e arquiteturas cliente-servidor."
tags: ["5 ramos", "SGBD · esquemas · SQL"]
subject: "informatica"
order: 30
origin: "curso"
lede: "Do conceito de banco de dados ao SGBD, da arquitetura três-esquemas às linguagens e às arquiteturas cliente-servidor — a base teórica de bancos de dados para a prova."
diagramNote: "Cinco ramos sobre conceitos, arquitetura e linguagens do SGBD."
center: ["Banco de", "Dados"]
---

::::branch{id="conceitos" num="01" title="Banco de Dados e SGBD: Conceitos" kicker="dados, BD, SGBD e suas funções" short="Banco de|Dados e SGBD" tag="BD · SGBD"}

Um banco de dados (ou base de dados) é uma coleção de dados relacionados, organizados e armazenados visando facilitar a manipulação desses dados, permitindo realizar alterações, inserções, remoções e consultas. É uma coleção de dados operacionais usados pelas aplicações de uma determinada organização.

Dados são fatos que podem ser gravados e que possuem um significado implícito (por exemplo\: nomes, números de telefone, endereços de uma agenda telefônica).

### Propriedades implícitas de um banco de dados

- Representa alguns aspectos do mundo real — o :hl[minimundo] ou :hl[universo de discurso].
- É uma coleção lógica e coerente de dados com algum significado inerente.
- É projetado, construído e povoado por dados (:hl[instanciado]) para uma finalidade específica.

Um sistema gerenciador de banco de dados (:hl[SGBD]) é uma coleção de programas que permite criar e manter (manipular) um banco de dados.

:::callout{tag="BD × SGBD"}

BD é o conjunto de dados; SGBD é o software que o cria e manipula. **BD + SGBD = Sistema de Banco de Dados.**

:::

### Processos que o SGBD facilita

| Processo | Descrição |
| --- | --- |
| :hl[Definição] | Especificação dos tipos, estruturas e restrições para os dados a serem armazenados. |
| :hl[Construção] | Processo de armazenar os dados em alguma mídia controlada pelo SGBD. |
| :hl[Manipulação] | Inclui funções como pesquisas em banco de dados, atualização do banco e geração de relatórios. |
| :hl[Compartilhamento] | Permite aos múltiplos usuários e programas acessar, de forma concorrente, o banco de dados. |

Outras duas funções importantes\: :hl[proteção] (contra o mau funcionamento de hardware ou software e segurança contra acessos não autorizados) e :hl[manutenção] (manter um sistema de banco de dados que permita a evolução dos requisitos ao longo do tempo).

### Vantagens de usar um banco de dados

- Controle de redundância.
- Controle de acesso (segurança).
- Armazenamento persistente dos dados.
- Existência de múltiplas interfaces para os usuários.
- Representação de relacionamentos complexos entre os dados.
- Manutenção de restrições de integridade.
- Estrutura de armazenamento e técnicas de pesquisa para o processamento de consultas.
- Recursos para recuperação de falhas.

### Quando não usar um SGBD

- O BD e suas aplicações são simples, bem definidas e sem previsão de mudanças.
- Há requisitos de tempo real para alguns programas, difíceis de atender por causa da sobrecarga do SGBD.
- O acesso de múltiplos usuários aos dados não é necessário.

::::

::::branch{id="caracteristicas" num="02" title="Características da Abordagem, Usuários e Utilitários do DBA" kicker="4 características, usuários e utilitários do DBA" short="Características|e Usuários" tag="CATÁLOGO · DBA" tone="sintaxe"}

### Características da abordagem com uso de banco de dados

| Característica | Descrição |
| --- | --- |
| :hl[Natureza autodescritiva] | O catálogo do SGBD guarda os metadados, possibilitando acessar diversos bancos de dados. No processamento de arquivos tradicional, a definição dos dados fica embutida nos próprios programas da aplicação. |
| :hl[Isolamento entre programas e dados / abstração] | Alterações na estrutura dos arquivos não exigem alterações nos programas de acesso (independência programa-dados); o sistema garante uma visão totalmente abstrata do banco de dados para o usuário. |
| :hl[Suporte a múltiplas visões] | Um banco de dados pode ter vários usuários, e cada um pode solicitar uma visão diferente\: um subconjunto do banco de dados ou uma visão virtual (derivada dos arquivos do banco de dados). |
| :hl[Compartilhamento de dados e processamento multiusuário] | O SGBD multiusuário permite que diversos usuários acessem o banco de dados ao mesmo tempo (software de controle de concorrência) e garante que as transações concorrentes operem corretamente. |

:::callout{tag="Banco de dados × processamento de arquivos"}

A diferença central\: no processamento de arquivos, a definição dos dados está dentro dos programas. No banco de dados, ela fica separada, no catálogo do SGBD — por isso o sistema é chamado de autodescritivo.

:::

### Usuários de banco de dados

| Usuário | Papel |
| --- | --- |
| :hl[Administrador (DBA)] | Administra o BD e o SGBD; responsável pela autorização de acesso ao BD, pela coordenação e monitoração de seu uso e por adquirir recursos de software e hardware. Resolve problemas como violação de segurança e tempos de resposta ruins. |
| :hl[Projetista] | Responsável por identificar os dados e escolher estruturas apropriadas para representá-los e armazená-los, antes de o BD ser implementado e instanciado (alimentado com os dados). |
| :hl[Analista de Sistemas] | Identifica as necessidades dos usuários finais e desenvolve as especificações das transações customizadas que atendam a essas solicitações. |
| :hl[Programador de Aplicações] | Implementa essas especificações como programas, realizando testes, manutenção e documentação. |
| :hl[Usuário Final] | Acessa o BD\: consultas, atualizações, relatórios... |

### Utilitários que auxiliam o DBA

| Utilitário | Função |
| --- | --- |
| :hl[Carga (loading)] | Carrega arquivos de dados no banco de dados; também serve para transferir dados de um SGBD para outro. |
| :hl[Backup] | Descarrega todo o BD em uma mídia; a cópia pode ser usada para restaurar o BD em casos de falha. |
| :hl[Reorganização de arquivos] | Reorganiza um arquivo do BD buscando melhorar seu desempenho. |
| :hl[Monitoramento de desempenho] | Monitora o uso do BD e fornece estatísticas para o DBA. |

::::

::::branch{id="arquitetura" num="03" title="Modelos de Dados e Arquitetura Três-Esquemas" kicker="modelos de dados, esquema, instância e independência" short="Arquitetura|Três-Esquemas" tag="ANSI/SPARC" tone="semantica"}

Um :hl[modelo de dados] é um conjunto de conceitos que podem ser usados para descrever a estrutura de um banco de dados, permitindo a abstração dos dados. A estrutura de um banco de dados reúne os tipos de dados, relacionamentos e restrições pertinentes, além do conjunto de operações para recuperar e modificar a base.

### Categorias de modelos de dados

| Categoria | Descrição |
| --- | --- |
| :hl[Conceituais (alto nível)] | Utilizam conceitos que descrevem os dados como os usuários os percebem — entidades, atributos e relacionamentos — e são independentes de aspectos de implementação em um SGBD. Exemplos\: modelo entidade-relacionamento (ER), modelo orientado a objetos (OO). |
| :hl[Representativos (lógicos)] | Oferecem conceitos para descrever a estrutura do banco de dados da forma como será manipulado pelo SGBD, ocultando alguns detalhes de armazenamento. Exemplos\: modelo relacional, modelo hierárquico, modelo de rede. |
| :hl[Físicos (baixo nível)] | Utilizam conceitos que descrevem os detalhes de como os dados estão fisicamente armazenados\: formato dos registros, ordem dos registros e caminhos de acesso. |

### Esquema × instância

| Conceito | Descrição |
| --- | --- |
| :hl[Esquema] | Descrição (textual ou gráfica) da estrutura de um banco de dados de acordo com um modelo de dados. É definido durante o projeto do BD, fica armazenado no catálogo do banco de dados, e espera-se que **não** seja alterado com frequência. |
| :hl[Instância (estado do BD)] | Conjunto de dados armazenados no banco de dados em um determinado instante de tempo. O estado inicial é vazio (sem nenhum dado); a cada atualização de dados, o estado do banco de dados muda. O SGBD é parcialmente responsável por assegurar que cada estado do banco de dados seja válido. |

### Arquitetura três-esquemas (ANSI/SPARC)

Objetivo\: separar as aplicações do usuário do banco de dados físico.

| Nível | Esquema | Descrição |
| --- | --- | --- |
| :hl[Externo] | Esquema externo / visão de usuário | Descreve a parte do BD que um grupo de usuários tem interesse, ocultando o restante do banco desse grupo. |
| :hl[Conceitual] | Esquema conceitual | Descreve a estrutura de todo o BD — entidades, tipos de dados, relacionamentos — ocultando detalhes de armazenamento físico. |
| :hl[Interno] | Esquema interno | Descreve a estrutura de armazenamento físico do banco de dados, com um modelo de dados físico e os caminhos de acesso completos. |

A maioria dos SGBDs não separa os três níveis completamente\: alguns incluem detalhes do nível físico no esquema conceitual, e na maioria dos SGBDs os esquemas externos são especificados com o mesmo modelo de dados que descreve a informação no nível conceitual.

### Independência de dados

:hl[Independência de dados] é a capacidade de mudar o esquema em um nível do sistema de banco de dados sem que ocorram alterações do esquema no próximo nível mais alto. O SGBD usa software para realizar os mapeamentos entre os níveis.

| Tipo | Descrição | Exemplo |
| --- | --- | --- |
| :hl[Independência lógica] | Capacidade de alterar o esquema conceitual sem mudar o esquema externo ou os programas. | Modificar o esquema conceitual para expandir o BD, adicionando um item de dados. |
| :hl[Independência física] | Capacidade de mudar o esquema interno sem ter que alterar o esquema conceitual. | Criação de estruturas de acesso adicionais para melhorar o desempenho da recuperação ou atualização de dados. |

:::callout{tag="Lógica × física"}

A independência **lógica** protege o esquema externo e os programas de mudanças no esquema conceitual. A independência **física** protege o esquema conceitual de mudanças no esquema interno (armazenamento).

:::

::::

::::branch{id="linguagens" num="04" title="Linguagens e Interfaces do SGBD" kicker="DDL, DML, VDL, SQL, módulos e interfaces" short="Linguagens|e Interfaces" tag="DDL · DML · SQL"}

### Linguagens de banco de dados

| Linguagem | Descrição |
| --- | --- |
| :hl[DDL — Data Definition Language] | Linguagem de Definição de Dados, usada pelo DBA e pelos projetistas para definir os esquemas. |
| :hl[SDL — Storage Definition Language] | Linguagem de Definição de Armazenamento, usada para especificar o esquema interno em SGBDs onde se mantém uma separação clara entre os níveis conceitual e interno. |
| :hl[VDL — View Definition Language] | Linguagem de Definição de Visões; em uma verdadeira arquitetura três-esquemas é a terceira linguagem, usada para especificar as visões de usuário e seus mapeamentos para o esquema conceitual. Na maioria dos SGBDs, porém, a própria DDL é usada para definir os esquemas conceitual e externo. |
| :hl[DML — Data Manipulation Language] | Linguagem de Manipulação de Dados, usada para recuperação, inserção, remoção e modificação dos dados. |

Tipos de DML\:

| Tipo | Descrição |
| --- | --- |
| :hl[Alto nível (não procedural / declarativa)] | Os usuários especificam quais dados recuperar, sem especificar como obtê-los. |
| :hl[Nível baixo (procedural)] | Requer que o usuário especifique quais dados são necessários **e** como obtê-los. |

Se comandos DML são embutidos em um programa de linguagem de propósito geral, essa linguagem é chamada de :hl[linguagem hospedeira] (host language), e a DML, de :hl[sublinguagem de dados]. Se comandos DML de alto nível são usados de maneira isolada e interativa, a DML funciona como :hl[linguagem de consulta] (query language).

:::callout{tag="A fórmula do SQL"}

**SQL = DDL + VDL + DML + comandos para especificação de restrições.**

:::

### Módulos internos do SGBD

| Módulo | Função |
| --- | --- |
| :hl[Compilador de DDL] | Processa as definições do esquema e armazena suas descrições no catálogo do banco de dados. |
| :hl[Catálogo do sistema / dicionário de dados] | Guarda os metadados usados pelos demais módulos do SGBD. |
| :hl[Compilador / processador de consultas (DML)] | Processa comandos DML digitados interativamente ou embutidos em programas de aplicação, após pré-compilação. |
| :hl[Processador de banco de dados em tempo de execução (runtime)] | Executa as transações compiladas, controlando o acesso à informação armazenada em disco por meio do gerenciamento dos dados armazenados. |

### Tipos de interface do SGBD

| Interface | Descrição |
| --- | --- |
| :hl[Baseada em menus] | Menus (por exemplo, suspensos/pull-down) que guiam o usuário durante a formulação da pesquisa. |
| :hl[Baseada em formulários] | Um formulário para cada grupo de usuário; o usuário pode preencher todos os campos para inserir um novo dado, ou preencher só alguns e deixar que o SGBD recupere os dados faltantes para os campos vazios. |
| :hl[Gráfica (GUI)] | Formulário + menus; o usuário especifica uma consulta manipulando um formulário diagramático. |
| :hl[Linguagem natural] | Aceita solicitações escritas em diferentes idiomas e tenta entendê-las; se a interpretação for bem-sucedida, a interface gera uma consulta de alto nível correspondente à solicitação. |
| :hl[Para usuários parametrizáveis] | Usuários parametrizáveis são, por exemplo, caixas de banco; os comandos são adaptados para minimizar o número de teclas utilizadas em cada solicitação. |
| :hl[Para DBAs] | Interfaces utilizadas pelos DBAs para criação de contas, autorizações de acesso, ajuste de parâmetros etc. |

::::

::::branch{id="cliente-servidor" num="05" title="Arquiteturas Cliente-Servidor" kicker="histórico, duas camadas, ODBC e três camadas" short="Cliente-|Servidor" tag="ODBC · CAMADAS" tone="sintaxe"}

Antigamente, grandes computadores centrais (mainframes) processavam todas as funções do sistema de banco de dados — programas de aplicação, interface com usuários e funcionalidades do SGBD. Os usuários acessavam o sistema via terminais sem poder de processamento. Com o tempo, os SGBDs passaram a explorar o poder de processamento disponível do lado do usuário (PCs e estações de trabalho), gerando as arquiteturas cliente-servidor.

### Arquiteturas cliente/servidor de duas camadas

| Lado | Função |
| --- | --- |
| :hl[Cliente] | Interface com os usuários e os programas de aplicação (inclui o driver do SGBD e o software de comunicação de rede). |
| :hl[Servidor] | O SGBD propriamente dito, que acessa o banco de dados armazenado. |

O :hl[ODBC] (Open Database Connectivity) oferece uma API (interface para o programa de aplicação) pela qual os programas de aplicação podem acessar o SGBD. A maioria dos fornecedores de SGBD fornece drivers ODBC para seus sistemas; um driver processa as solicitações ODBC e envia instruções SQL para o SGBD.

### Arquiteturas cliente/servidor de três camadas

Possuem uma camada intermediária entre o cliente e o servidor de banco de dados.

| Camada | Função |
| --- | --- |
| :hl[Cliente] | GUI ou interface web. |
| :hl[Servidor de Aplicações (ou servidor Web)] | Executa os programas da aplicação / páginas web; armazena as regras de negócio (restrições e procedimentos de verificação e validação dos dados) e pode incrementar a segurança do BD checando as credenciais do cliente antes de enviar uma solicitação ao servidor de banco de dados. |
| :hl[Servidor de Banco de Dados] | O sistema gerenciador de banco de dados (SGBD). |

::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="BD × SGBD"}

**BD = os dados; SGBD = o programa que os gerencia.** BD + SGBD = Sistema de Banco de Dados.

:::

:::example{variant="alt" tag="Três esquemas"}

**Externo = visão do usuário; Conceitual = visão de toda a empresa; Interno = visão do armazenamento físico.**

:::

:::example{variant="gold" tag="DDL × DML"}

**DDL Define** (cria e estrutura o esquema); **DML Manipula** (insere, remove, atualiza e consulta os dados).

:::

::::

:::::
