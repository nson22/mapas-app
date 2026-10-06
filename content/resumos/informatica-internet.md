---
title: "Internet, Intranet & *VPN*"
kicker: "Redes"
description: "Da ARPANET ao túnel criptografado: protocolos, intranet e extranet, navegadores, busca avançada e e-mail."
tags: ["8 ramos", "protocolos"]
subject: "informatica"
order: 23
origin: "curso"
manausOrder: 2
lede: "Da ARPANET ao túnel criptografado — redes, protocolos, intranet e extranet, navegadores, busca avançada e e-mail, organizados para revisão."
diagramNote: "Toque em qualquer ramo para ir direto ao conteúdo daquele bloco."
center: ["Internet,", "Intranet & VPN"]
---

:::::branch{id="redes" num="01" title="Internet & Redes" kicker="conceito, origem e classificação por alcance" short="Internet &|Redes" tag="PAN · LAN · MAN · WAN"}

A internet é uma rede de comunicação de milhões de computadores conectados, oferecendo serviços e bilhões de páginas organizadas em websites. Etimologicamente, **INTER** (entre) + **NET** (rede)\: ela conecta redes menores entre si — por isso pode ser vista como um conglomerado de redes.

### Origem

Surgiu em contexto militar, nos EUA da Guerra Fria (anos 1960). O Departamento de Defesa queria descentralizar informações estratégicas para que não fossem destruídas se um único servidor fosse bombardeado. A **ARPA** (Advanced Research Projects Agency) criou a **ARPANET**, ligada por um backbone subterrâneo. O acesso era restrito a militares e pesquisadores — temia-se o mau uso por civis e países não aliados.

### Classificação das redes por alcance

::::grid{cols="2"}

:::example{tag="PAN · Personal"}

Dispositivos pessoais próximos, sem acesso externo. Ex.\: celular conectado a uma caixa de som ou a um smartwatch.

:::

:::example{tag="LAN · Local"}

Residência, escritório ou empresa — dispositivos conectados dentro de um mesmo ambiente físico.

:::

:::example{tag="MAN · Metropolitan"}

Interconecta cidades próximas ou uma região metropolitana — alcance maior que a LAN, custo-benefício melhor que a WAN.

:::

:::example{variant="alt" tag="WAN · Wide Area"}

País ou continente — a própria internet é uma WAN que conecta diversas redes menores.

:::

::::

Outras classificações que podem cair na prova\:

| Sigla | Uso |
| --- | --- |
| :hl[CAN] | campus universitário |
| :hl[SAN] | armazenamento entre servidores |
| :hl[HAN] | casa inteligente/IoT |
| :hl[BAN] | dispositivos vestíveis (smartwatch) |

:::::

::::branch{id="protocolos" num="02" title="Protocolos & Endereçamento IP" kicker="as regras de comunicação e identificação na rede" short="Protocolos|& IP" tag="TCP/IP · IPV4 · IPV6"}

### Protocolos de comunicação

| Protocolo | Função |
| --- | --- |
| `TCP/IP` | Base da comunicação na internet; divide as informações em pacotes. |
| `HTTP / HTTPS` | Navegação web. HTTPS inclui criptografia (SSL/TLS). |
| `FTP` | Transferência de arquivos. |
| `SMTP / POP3 / IMAP` | Envio e recebimento de e-mail (detalhado na seção Correio Eletrônico). |

:::callout{tag="Bizu"}

A diferença entre HTTP e HTTPS, e o uso correto de cada protocolo de e-mail, são cobranças recorrentes.

:::

### Endereçamento IP

| Item | Detalhe |
| --- | --- |
| :hl[IPv4] | 32 bits, formato decimal. Ex.\: `192.168.0.1` |
| :hl[IPv6] | 128 bits, formato hexadecimal. Ex.\: `2001:0db8:85a3:0000:0000:8a2e:0370:7334` |
| Máscara de sub-rede | Define o alcance de uma rede. |
| NAT | Converte endereços IP privados em públicos (Network Address Translation). |

:::callout{tag="Bizu"}

Questões costumam comparar IPv4 x IPv6, e pedir a identificação de classes de IP.

:::

::::

::::branch{id="intranet" num="03" title="Intranet & Extranet" kicker="um dos temas mais cobrados pelas bancas" short="Intranet &|Extranet" tag="REDE PRIVADA"}

**Intranet** é uma rede **privada** (exige autenticação), restrita a um grupo predefinido de usuários — tipicamente o ambiente de uma empresa.

### Características da Intranet

1. **Acesso restrito** — login e senha; é preciso autorização para entrar.
2. **Ambiente corporativo** — não é público; pode ser tanto a infraestrutura de rede local quanto um sistema de colaboração entre funcionários.
3. **Usa os mesmos protocolos da internet** — http, https etc., só que em ambiente controlado e interno.

:::callout{tag="Pegadinha clássica"}

Achar que Internet e Intranet usam protocolos diferentes. **Errado**\: a Intranet tem a mesma estrutura da Internet, apenas em ambiente fechado.

:::

### Extranet

É uma extensão da Intranet\: mesmo funcionamento restrito e autenticado, mas voltado para um público **externo** que tem alguma relação com a empresa — clientes, fornecedores, parceiros.

:::chips

- Extensão da intranet
- Público: fornecedores e clientes
- Exige autenticação
- É restrita
- Usa os mesmos protocolos

:::

### Quadro comparativo

| Parâmetro | Internet | Intranet | Extranet |
| --- | --- | --- | --- |
| Tipo de rede | :hl[Público] | Privado | :wine[Privado / VPN] |
| Tamanho | Ilimitado | Nº limitado de dispositivos | Nº limitado de dispositivos |
| Segurança | Depende | Protegido por firewall | Firewall separa a internet da extranet |
| Acesso | Todos | Pessoas autorizadas | Pessoas autorizadas |
| Compartilhamento | Total | Dentro da organização | Entre colaboradores e pessoas externas |
| Proprietário | Não possui | Organização particular | 1 ou mais organizações |
| Escala típica | WAN (em geral) | LAN | MAN/WAN |

::::

:::::branch{id="vpn" num="04" title="VPN — Virtual Private Network" kicker="o túnel criptografado sobre a internet" short="VPN|Túnel Seguro" tag="CRIPTOGRAFIA" variant="security"}

Uma VPN interliga computadores usando a internet como caminho, com a comunicação **criptografada**. Funciona como um "túnel" protegido entre o usuário e uma rede, restrito a quem possui as credenciais necessárias.

::::grid{cols="2"}

:::example{tag="Finalidade"}

Garantir confidencialidade e segurança dos dados.

:::

:::example{variant="alt" tag="Finalidade"}

Mascarar o IP do usuário, permitindo acesso a conteúdo restrito.

:::

::::

### Como funciona — 3 etapas

1. **Estabelecimento de conexão** — o dispositivo do usuário se conecta a um servidor VPN.
2. **Encapsulamento dos dados** — os dados são "empacotados" dentro do túnel protegido.
3. **Criptografia** — os dados são criptografados para evitar acesso não autorizado.

### Protocolos de VPN

| Protocolo | Característica |
| --- | --- |
| :hl[PPTP] | antigo, menos seguro |
| :hl[L2TP/IPSec] | mais seguro que PPTP |
| :hl[OpenVPN] | seguro e configurável |
| :hl[IKEv2/IPSec] | rápido, ideal para mobile |
| :hl[WireGuard] | moderno e leve |

### Tipos de VPN

::::grid{cols="3"}

:::example{tag="Acesso Remoto"}

Usuário individual se conecta a uma rede corporativa.

:::

:::example{tag="Site-to-Site"}

Conecta redes de locais diferentes — ideal para filiais.

:::

:::example{variant="alt" tag="Móvel"}

Para dispositivos móveis, segura mesmo em redes públicas.

:::

::::

::::grid{cols="2"}

:::example{tag="Vantagens"}

Segurança em redes públicas · privacidade (oculta o IP) · acesso a conteúdo geobloqueado · viabiliza trabalho remoto.

:::

:::example{variant="alt" tag="Desvantagens"}

Reduz a velocidade (custo da criptografia) · pode ter custo · algumas plataformas identificam e bloqueiam VPN.

:::

::::

### Segurança e criptografia

| Conceito | Função |
| --- | --- |
| :hl[AES] | padrão de criptografia mais usado |
| :hl[Autenticação de dados] | impede alteração de pacotes |
| :hl[Confidencialidade] | só o destinatário acessa os dados |

:::::

:::::branch{id="servicos" num="05" title="Serviços, Segurança & Tendências" kicker="o que roda por trás da conexão" short="Serviços &|Segurança" tag="FIREWALL · PHISHING" variant="security"}

### Serviços e tecnologias

::::grid{cols="2"}

:::example{tag="Web"}

Serviço mais popular da internet, baseado em hipertextos.

:::

:::example{tag="Cloud Computing"}

Armazenamento e processamento em servidores remotos — SaaS, PaaS, IaaS.

:::

:::example{tag="DNS"}

Traduz nomes de domínio em endereços IP.

:::

:::example{variant="alt" tag="Servidor Proxy"}

Intermedia as requisições entre o usuário e a internet.

:::

::::

### Segurança na Internet

| Termo | Descrição |
| --- | --- |
| :hl[Firewall] | filtra pacotes de dados |
| :hl[Certificado Digital] | garante autenticação |
| :hl[Phishing] | ataque de roubo de informações |
| :hl[Malware] | vírus, worms, ransomware |
| :hl[Autenticação de dois fatores (2FA)] | — |

Procedimentos de segurança recomendados\: firewall, criptografia, autenticação multifator, backup e políticas de acesso definidas.

### Conectividade

| Tecnologia | Característica |
| --- | --- |
| :hl[Banda Larga] | acesso rápido |
| :hl[Wi-Fi] | conexão sem fio |
| :hl[Bluetooth] | sem fio, curto alcance |
| :hl[4G/5G] | tecnologias móveis |

### Tendências tecnológicas associadas

| Tendência | Descrição |
| --- | --- |
| :hl[IoT] | internet das coisas |
| :hl[Big Data] | análise de grandes volumes |
| :hl[Inteligência Artificial] | — |
| :hl[Edge Computing] | processamento na borda da rede |

:::::

:::::branch{id="navegadores" num="06" title="Navegadores de Internet" kicker="o cliente que acessa a web" short="Navegadores|de Internet" tag="CHROME · FIREFOX · EDGE"}

Um navegador (browser) é o programa que envia a requisição do usuário (o endereço digitado) e recebe a resposta do servidor — uma página em HTML.

### Principais navegadores

| Navegador | Destaque |
| --- | --- |
| :hl[Chrome] | mais popular, extensões |
| :hl[Firefox] | privacidade e personalização |
| :hl[Edge] | sucessor do IE, baseado em Chromium |
| :hl[Safari] | padrão da Apple |
| :hl[Opera] | VPN integrada e bloqueador de anúncios |

### Funcionalidades comuns

| Recurso | O que faz |
| --- | --- |
| Navegação privativa | Não guarda histórico, cookies, buscas ou dados de formulário. |
| Histórico | Lista páginas visitadas — exceto as vistas em aba privada. |
| Cache | Guarda temporariamente dados de páginas para carregar mais rápido. |
| Cookies de sessão | Temporários; excluídos ao fechar o navegador. |
| Cookies persistentes | Mantidos por mais tempo; usados em logins automáticos. |
| Plugins | Componentes externos para recursos não nativos (ex.\: multimídia). |
| Extensões | Pequenos programas que adicionam recursos ao navegador. |
| Complementos | Termo do Firefox para o conjunto de extensões, temas e plugins. |
| Bloqueador de pop-ups | Impede janelas indesejadas de abrirem. |
| Do Not Track | Mecanismo passivo que só solicita ao site que não rastreie — o site decide se atende. |

### Diferenciais por navegador

::::grid{cols="3"}

:::example{tag="Internet Explorer"}

Filtro SmartScreen (antiphishing, antimalware) e Filtragem ActiveX.

:::

:::example{tag="Firefox"}

Firefox Sync — sincroniza favoritos, histórico, senhas e abas entre dispositivos.

:::

:::example{variant="alt" tag="Chrome"}

Sandbox (cada aba roda isolada — pioneiro do recurso) e Smart Lock (senhas na Conta Google).

:::

::::

### Atalhos mais cobrados

| Atalho | Ação |
| --- | --- |
| `Ctrl+T` | Nova aba |
| `Ctrl+W` / `Ctrl+F4` | Fecha a aba atual |
| `Ctrl+Shift+W` | Fecha todas as abas |
| `Ctrl+Tab` | Percorre as abas |
| `Ctrl+R` / `F5` | Atualiza a aba |
| `Ctrl+L` / `F6` | Seleciona o endereço |
| `Ctrl+F` | Busca na página |
| `Ctrl+D` | Adiciona aos favoritos |
| `Ctrl+H` | Histórico |
| `Ctrl+J` | Downloads |
| :hl[`Ctrl+Shift+Del`] | Limpa dados de navegação |
| `Ctrl+Shift+P` | Navegação privativa (Firefox/IE) |
| `Ctrl+Shift+N` | Navegação anônima (Chrome) |
| `F11` | Tela cheia |

:::::

:::branch{id="pesquisa" num="07" title="Ferramentas de Pesquisa" kicker="operadores de busca avançada" short="Ferramentas|de Pesquisa" tag="OPERADORES DE BUSCA"}

Um mecanismo de busca localiza e lista páginas a partir de palavras-chave. Os principais são Google e Bing — e os operadores de pesquisa são um dos assuntos mais cobrados.

### Os 10 operadores mais cobrados

| Operador | Uso | Exemplo |
| --- | --- | --- |
| `site:` | Rede social ou site específico | `site:instagram concursos` |
| `R$` | Faixa de preço | `smartphone R$1000..R$2000` |
| `#` | Hashtag | `#educação` |
| `-` | Exclui palavra | `curso online -pago` |
| `"..."` | Correspondência exata | `"como passar em concurso"` |
| `*` | Coringa (palavra desconhecida) | `melhor * para concurso` |
| `..` | Intervalo numérico | `concurso 2020..2025` |
| `OR` / `AND` | Combina termos | `concurso PRF OR PF` |
| `info:` | Detalhes de um site | `info:seraprovado.com.br` |

### Operadores adicionais

| Operador | Uso | Exemplo |
| --- | --- | --- |
| `define:` | Definição de palavra | `define:resiliência` |
| `filetype:` | Tipo de arquivo | `edital PRF filetype:pdf` |
| `inurl:` | Palavra na URL | `inurl:concurso` |
| `intitle:` | Palavra no título | `intitle:curso concurso` |
| `intext:` | Palavra no texto | `intext:planejamento` |
| `related:` | Sites semelhantes | `related:youtube.com` |
| `link:` | Páginas que linkam para o site | `link:exemplo.com.br` |
| `before:` / `after:` | Intervalo de datas | `concurso PF before:2022 after:2020` |
| `+` | Força termo obrigatório | `+curso +concurso público` |

:::

:::::branch{id="email" num="08" title="Correio Eletrônico" kicker="mensagens assíncronas por armazenamento e encaminhamento" short="Correio|Eletrônico" tag="SMTP · POP3 · IMAP"}

O e-mail funciona em modelo de armazenamento e encaminhamento\: servidores de e-mail aceitam, encaminham, entregam e armazenam as mensagens.

### Protocolos de e-mail

| Protocolo | Porta | Comportamento |
| --- | --- | --- |
| :hl[SMTP] | `25` (BR\: `587`, anti-spam) | Só **envia** — não permite baixar mensagens do servidor. |
| POP3 | `110` | Baixa os e-mails para o computador local e marca para deleção no servidor. |
| :wine[IMAP] | `143` ou `993` (SSL/TLS) | **Não** apaga do servidor — mensagens ficam armazenadas lá; padrão em webmail, acessível de qualquer dispositivo. |

### Pastas de e-mail

| Pasta | Conteúdo |
| --- | --- |
| :hl[Caixa de Entrada] | recebidos |
| :hl[Itens Enviados] | — |
| :hl[Lixo Eletrônico] | spam |
| :hl[Itens Excluídos] | lixeira |
| :hl[Rascunho] | redigido, não enviado |

### Campos de envio

::::grid{cols="2"}

:::example{tag="De / Para / Assunto"}

Remetente, destinatário e assunto da mensagem.

:::

:::example{variant="alt" tag="CC / CCO"}

Com Cópia (CC)\: todos veem quem recebeu. Com Cópia Oculta (CCO)\: recebe a cópia, mas não é visto pelos demais destinatários.

:::

::::

### Ações ao receber uma mensagem

| Ação | Para quem vai |
| --- | --- |
| :hl[Responder] | Apenas ao remetente original. |
| Responder a Todos | Ao remetente e a todos em "Para" e "CC". |
| Encaminhar | A alguém que não estava em "Para" nem em "CC". |

:::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Internet × intranet × extranet"}

**Internet = pública; Intranet = privada; Extranet = intranet aberta a parceiros.** Os três usam os *mesmos protocolos*; muda o público e o controle de acesso.

:::

:::example{tag="DNS"}

**DNS = a agenda telefônica da internet**\: traduz nome (site) em número (IP).

:::

:::example{tag="HTTP × HTTPS"}

**HTTPS = HTTP + S de Seguro (Secure)**\: usa criptografia (SSL/TLS).

:::

:::example{tag="E-mail"}

**SMTP = Send** (envia); **POP3 e IMAP** recebem. POP3 baixa (em geral tira do servidor); IMAP mantém no servidor e sincroniza vários dispositivos.

:::

:::example{tag="VPN"}

**VPN = túnel criptografado** dentro da internet pública\: cria uma rede privada “virtual”.

:::

::::

:::::
