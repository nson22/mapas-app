---
title: "Redes de Computadores"
kicker: "Redes"
description: "Topologias, camadas OSI e TCP/IP, equipamentos, protocolos e portas, IP, suporte e conectividade."
tags: ["7 ramos", "protocolos e portas"]
subject: "informatica"
order: 24
origin: "curso"
manausOrder: 3
lede: "Da topologia ao protocolo, do modelo OSI ao suporte e conectividade — os fundamentos de redes de computadores."
diagramNote: "Sete ramos sobre topologias, camadas, protocolos e conectividade."
center: ["Redes de", "Computadores"]
---

:::::branch{id="conceitos" num="01" title="Redes: Conceitos e Classificação" kicker="tamanho, arquitetura e topologia" short="Conceitos|e Topologias" tag="PAN · LAN · WAN"}

Rede de computadores é um conjunto de dois ou mais dispositivos (**nós**) que usam um conjunto de regras em comum (**protocolo**) para compartilhar recursos, por fio de cobre, fibra óptica, ondas de rádio ou satélite. Serve para compartilhar arquivos, hardware (impressoras, discos), aplicativos, e-mail, VoIP, e-commerce e jogos.

### Quanto ao tamanho (área geográfica)

| Sigla | Nome | Alcance | Exemplo |
| --- | --- | --- | --- |
| :hl[PAN] | Personal Area Network | Pessoal | Celular conectado a caixa de som ou relógio |
| :hl[LAN] | Local Area Network | Casa, escritório, empresa | Computadores e impressoras do escritório |
| :hl[MAN] | Metropolitan Area Network | Cidades próximas ou região metropolitana | Conecta bairros; alcance maior que a LAN |
| :hl[WAN] | Wide Area Network | País ou continente | A própria internet; liga redes menores |

- **Backbone\:** a espinha dorsal que conecta as redes menores e leva dados entre localidades, dentro ou fora do país.

::::grid{cols="3"}

:::example{tag="CAN"}

Campus Area Network\: liga várias LANs em campus universitário, complexo industrial ou base militar.

:::

:::example{variant="alt" tag="SAN"}

Storage Area Network\: rede de alta velocidade dedicada a armazenamento (datacenters).

:::

:::example{variant="gold" tag="HAN"}

Home Area Network\: rede doméstica com computadores, smart TVs, câmeras e IoT.

:::

:::example{tag="BAN"}

Body Area Network\: dispositivos junto ao corpo, como smartwatches e monitores cardíacos.

:::

:::example{variant="alt" tag="GAN"}

Global Area Network\: conjunto de WANs no globo terrestre.

:::

:::example{variant="gold" tag="IAN"}

Interplanetary Area Network\: nós de rede no espaço (Internet Interplanetária, NASA).

:::

::::

### Quanto à arquitetura

::::grid{cols="2"}

:::example{tag="Ponto a ponto (P2P)"}

Cada nó é **cliente e servidor** ao mesmo tempo, sem servidor central. Exemplo\: torrents. Indicada para ligar dois pontos diretos, como matriz e filial.

:::

:::example{variant="alt" tag="Cliente-servidor"}

O **servidor** mantém a informação e oferece serviços; o **cliente** solicita por mensagem e fica livre enquanto o servidor trabalha.

:::

::::

### Quanto à topologia

**Física** = disposição dos equipamentos e cabos (todos os caminhos existentes). **Lógica** = fluxo real de dados (só os caminhos efetivamente usados).

| Topologia | Como funciona | Ponto de atenção |
| --- | --- | --- |
| :hl[Barramento] | Todos ligados a um mesmo barramento; só um transmite por vez; comunicação por **broadcast**. | Transmissões simultâneas causam **colisão**. |
| :hl[Anel] | Circuito fechado; dados circulam em um só sentido, de nó em nó. | Se um nó falha, a rede toda fica indisponível. |
| :hl[Estrela] | Tudo passa por uma estação central que distribui o tráfego. | Com **hub** não é estrela (repete para todas as portas); com **switch**, sim. |
| :hl[Malha (mesh)] | Vários nós/roteadores como uma única rede; cada nó liga a um ou mais outros. | Mensagem pode seguir por caminhos diferentes. |
| :hl[Árvore] | Série de barras interconectadas, com uma barra central e ramos. | Hoje pouco usada; falha pode comprometer a rede. |
| :hl[Híbrida] | Usa mais de uma topologia ao mesmo tempo. | A mais usada em grandes redes. |

:::::

:::::branch{id="transmissao" num="02" title="Transmissão de Dados" kicker="modos, cast e meios físicos" short="Transmissão|de Dados" tag="MEIOS · MODOS · CAST" tone="sintaxe"}

### Modos de transmissão

| Modo | Sentido | Exemplo |
| --- | --- | --- |
| :hl[Simplex] | Um único sentido; quem transmite não recebe | TV e rádio |
| :hl[Half-duplex] | Os dois sentidos, mas **alternados** | Walkie-talkie |
| :hl[Full-duplex] | Os dois sentidos **ao mesmo tempo** | Chamada telefônica |

### Unicast, multicast, broadcast e anycast

::::grid{cols="2"}

:::example{tag="Unicast"}

Um remetente, um destinatário. Predominante em LANs e na internet (HTTP, SMTP, FTP, Telnet).

:::

:::example{variant="alt" tag="Multicast"}

Para um **grupo** específico de dispositivos (ex.\: videoconferência corporativa).

:::

:::example{variant="gold" tag="Broadcast"}

Para **todos** os endereços da rede local (ex.\: consulta ARP).

:::

:::example{tag="Anycast"}

Vários receptores com o mesmo IP; os dados vão ao nó **mais próximo** disponível.

:::

::::

### Meios guiados (cabos)

| Cabo | Características |
| --- | --- |
| :hl[Par trançado] | Fios de cobre trançados; reduz interferência e crosstalk; padrão em Ethernet; barato. |
| :hl[UTP] | Sem blindagem; LANs de baixa interferência. |
| :hl[STP] | Blindagem adicional; ambientes com mais ruído eletromagnético. |
| :hl[FTP] | Blindagem global sobre todos os pares, sem proteção individual. |
| :hl[S/FTP] | Blindagem individual em cada par **e** global; melhor proteção. |
| :hl[Coaxial] | Alma de cobre, isolante, malha metálica e capa; TV a cabo. Foi trocado pelo par trançado em LANs. |
| :hl[Fibra óptica] | Pulsos de luz, núcleo de vidro ou plástico; **imune** a interferência eletromagnética; longa distância. |

| Categoria | Frequência | Velocidade máxima | Aplicação |
| --- | --- | --- | --- |
| :hl[Cat 3] | 16 MHz | 10 Mbps | Telefonia e redes antigas |
| :hl[Cat 5] | 100 MHz | 100 Mbps | Fast Ethernet |
| :hl[Cat 5e] | 100 MHz | 1 Gbps | Gigabit Ethernet |
| :hl[Cat 6] | 250 MHz | 10 Gbps (até 55 m) | Alto desempenho |
| :hl[Cat 6a] | 500 MHz | 10 Gbps (até 100 m) | Datacenters |
| :hl[Cat 7] | 600 MHz | 10 Gbps | Blindagem melhorada |
| :hl[Cat 8] | 2000 MHz | 25-40 Gbps | Datacenters e servidores |

::::grid{cols="2"}

:::example{tag="Fibra multimodo"}

A luz percorre vários modos; redes curtas (menos de 2 km); custo menor.

:::

:::example{variant="alt" tag="Fibra monomodo"}

Um único modo de propagação, laser de alta intensidade; longas distâncias.

:::

::::

### Meios não guiados

- **Ondas de rádio\:** Wi-Fi, Bluetooth, celular.
- **Micro-ondas\:** enlaces direcionais de longa distância entre torres.
- **Infravermelho\:** curto alcance (controle remoto).
- Mais flexíveis, porém sujeitos a interferência, atenuação e **menor segurança**.

:::::

::::branch{id="camadas" num="03" title="Comutação e Modelos em Camadas" kicker="circuitos x pacotes, OSI e TCP/IP" short="Camadas|OSI e TCP/IP" tag="COMUTAÇÃO · PDU" tone="semantica"}

### Comutação de circuitos x comutação de pacotes

| Aspecto | Circuitos | Pacotes |
| --- | --- | --- |
| :hl[Conexão] | Dedicada, estabelecida **antes** da transmissão | Sem conexão dedicada; dados em pacotes independentes |
| :hl[Largura de banda] | Fixa, mesmo ociosa | Dinâmica e compartilhada |
| :hl[Latência] | Baixa | Variável (roteamento dinâmico) |
| :hl[Ordem de entrega] | Mesma ordem do envio | Pode chegar fora de ordem; reordenada no destino |
| :hl[Robustez] | Menor\: falha em um segmento interrompe tudo | Maior\: pacotes usam caminhos alternativos |
| :hl[Exemplo] | Telefonia convencional (PSTN) | Internet (TCP/IP) e VoIP |

### Modelo OSI (7 camadas, teórico, ISO)

| Camada | Função | Exemplos | PDU |
| --- | --- | --- | --- |
| :hl[7 Aplicação] | Interface entre usuário e rede | HTTP, FTP, SMTP, DNS, POP, IMAP | Dados |
| :hl[6 Apresentação] | Tradução, compressão, criptografia | SSL/TLS, JPEG | Dados |
| :hl[5 Sessão] | Abre, mantém e encerra diálogos; sincronização | NetBIOS, RPC | Dados |
| :hl[4 Transporte] | Entrega entre processos; segmentação, controle de fluxo | TCP, UDP | Segmento (TCP) / Datagrama (UDP) |
| :hl[3 Rede] | Roteamento e endereçamento lógico (IP) | IP, ICMP, IPsec, ARP | Pacote |
| :hl[2 Enlace] | Quadros, endereço MAC, detecção de erros (subcamadas MAC e LLC) | Ethernet, Wi-Fi, Token Ring | Quadro |
| :hl[1 Física] | Transmissão de bits no meio físico; placas de rede | Ethernet (cabos), Bluetooth, DSL | Bits |

### Modelo TCP/IP (4 camadas)

| TCP/IP | Equivale no OSI | Exemplos |
| --- | --- | --- |
| :hl[Aplicação] | Aplicação + Apresentação + Sessão | HTTP, SMTP, DNS |
| :hl[Transporte] | Transporte | TCP, UDP |
| :hl[Internet] | Rede | IP, ICMP |
| :hl[Acesso à rede] | Enlace + Física | Ethernet, Wi-Fi |

:::callout{tag="Modelo de 4 ou 5 camadas?"}

Não há regra fixa\: a mesma banca pode cobrar o modelo de quatro ou de cinco camadas. Leia o enunciado para saber qual está em uso.

:::

::::

:::::branch{id="equipamentos" num="04" title="Equipamentos de Rede" kicker="interconexão e acesso" short="Equipamentos|de Rede" tag="SWITCH · ROTEADOR"}

| Equipamento | O que faz |
| --- | --- |
| :hl[Placa de rede (NIC)] | Controla envio e recebimento de dados do computador, por Wi-Fi, cabo metálico ou fibra. |
| :hl[Repetidor] | Recebe e amplifica o sinal e o repete em outro segmento; não usar em excesso (problemas de sincronismo). |
| :hl[Bridge (ponte)] | Repetidor inteligente\: controla o fluxo, só repassa ao outro segmento o que é endereçado a ele; reduz colisões. |
| :hl[Roteador] | Gerencia a transferência entre máquinas em redes distintas e define o melhor caminho; liga LAN a WAN. |
| :hl[Hub] | Repetidor multiportas "burro", sem gerenciamento; envia para **todas** as portas (broadcast); em desuso. |
| :hl[Switch] | "Hub inteligente"\: segmenta e cria canal exclusivo origem-destino (unicast/multicast); é gerenciado. **L2** opera na camada 2; **L3** também roteia entre sub-redes. |
| :hl[Modem] | Modulador-demodulador\: faz a conexão física com a operadora (ADSL, cabo, fibra) e converte os sinais. |
| :hl[Gateway] | Ponto de acesso entre redes diferentes, traduzindo protocolos (ex.\: IPv4 e IPv6, LAN e internet); pode incluir firewall. |
| :hl[Access point] | Recebe o sinal do roteador por cabo UTP e o converte em wireless; alcance maior que roteador wi-fi ou repetidor. |

:::callout{variant="warn" tag="Hub x switch"}

Hub\: broadcast, sem gerenciamento. Switch\: só entrega ao destino, permite transmissões simultâneas e é gerenciado. Por isso uma LAN com hub não é considerada estrela.

:::

### Download x upload

::::grid{cols="2"}

:::example{tag="Download"}

Baixar dados de um servidor (assistir a vídeo, baixar arquivo).

:::

:::example{variant="alt" tag="Upload"}

Enviar dados para um servidor (live, enviar arquivos ao drive).

:::

::::

:::::

:::::branch{id="protocolos" num="05" title="Protocolos e Portas" kicker="aplicação, transporte e segurança" short="Protocolos|e Portas" tag="HTTP · DNS · TCP/UDP" tone="sintaxe"}

| Protocolo | Função | Porta(s) | Observações |
| --- | --- | --- | --- |
| :hl[HTTP / HTTPS] | Páginas web | 80 / 443 | Sem estado (stateless); HTTPS usa SSL/TLS |
| :hl[FTP] | Transferência de arquivos | 21 (controle), 20 (dados no modo ativo) | Sem criptografia; alternativas SFTP e FTPS |
| :hl[SMTP] | Envio de e-mail | 25, 465 (SMTPS), 587 | Store-and-forward; 587 recomendada com autenticação |
| :hl[POP3] | Recebimento\: baixa do servidor | 110 / 995 (seguro) | Costuma apagar do servidor; mal para vários dispositivos |
| :hl[IMAP] | Recebimento\: mantém no servidor | 143 / 993 (seguro) | Sincroniza vários dispositivos; pastas no servidor |
| :hl[DNS] | Nome de domínio para IP | 53 (UDP consultas, TCP zona) | Registros A, AAAA, MX, CNAME; DNSSEC |
| :hl[DHCP] | IP automático | 67 (servidor), 68 (cliente) | Distribui IP, máscara, gateway e DNS |
| :hl[SNMP] | Gerência de rede | 161 / 162 (traps) | v3 traz criptografia e autenticação |
| :hl[Telnet] | Acesso remoto | 23 | Sem criptografia; não recomendado |
| :hl[SSH] | Acesso remoto seguro | 22 | Criptografado; túnel; chave pública |
| :hl[SFTP] | Arquivos via SSH | 22 | Seguro |
| :hl[FTPS] | FTP seguro | 990 | Criptografado |
| :hl[TFTP] | Transferência simplificada | 69 | Sem autenticação |
| :hl[RDP] | Área de trabalho remota (Windows) | 3389 |  |
| :hl[LDAP / LDAPS] | Diretórios e autenticação | 389 / 636 |  |
| :hl[NTP] | Sincronização de horário | 123 |  |
| :hl[ICMP] | Diagnóstico (ping, traceroute) | não usa porta | Camada de rede |

### HTTP\: métodos e códigos de status

::::grid{cols="2"}

:::example{tag="Métodos"}

**GET** lê; **POST** envia para processar; **PUT** atualiza/substitui; **DELETE** remove; **HEAD** só cabeçalhos; **OPTIONS** métodos suportados.

:::

:::example{variant="alt" tag="Status"}

**1xx** informacional; **2xx** sucesso (200 OK, 201 Created); **3xx** redirecionamento (301, 302); **4xx** erro do cliente (400, 404); **5xx** erro do servidor (500, 503).

:::

::::

### TLS x SSL

TLS é o sucessor do SSL, que teve falhas (o SSL 3.0 foi descontinuado). Versões atuais\: TLS 1.2 e 1.3. Garante confidencialidade, integridade e autenticação. Portas seguras\: 443 (HTTPS), 465 (SMTPS), 993 (IMAPS), 995 (POP3S).

### TCP x UDP

| Característica | TCP | UDP |
| --- | --- | --- |
| :hl[Tipo] | Orientado à conexão, confiável | Sem conexão, não confiável |
| :hl[Velocidade] | Mais lento | Mais rápido |
| :hl[Ordem de entrega] | Sim | Não |
| :hl[Controle de erro] | Sim (ACK, retransmissão) | Não |
| :hl[Usos] | Web, e-mail, downloads, FTP | Streaming, VoIP, jogos, DNS |

:::callout{variant="warn" tag="Macete das portas"}

Segura tem porta própria\: HTTP 80 / HTTPS 443; POP3 110 / 995; IMAP 143 / 993; SMTP 25 / 465. Telnet (23) é o inseguro; SSH (22) é o seguro.

:::

:::::

:::::branch{id="ip" num="06" title="Protocolo IP e Camadas Baixas" kicker="IPv4, IPv6 e protocolos de apoio" short="Protocolo IP" tag="IPv4 · IPv6 · ICMP" tone="semantica"}

| Versão | Tamanho | Formato | Ponto-chave |
| --- | --- | --- | --- |
| :hl[IPv4] | 32 bits | Decimal (192.168.1.1) | Cerca de 4,3 bilhões de endereços; usa NAT para reaproveitar endereços privados |
| :hl[IPv6] | 128 bits | Hexadecimal (2001\:db8\:\:ff00\:42\:8329) | Endereços praticamente ilimitados; IPsec integrado; dispensa NAT |

- O IP faz endereçamento e roteamento, mas **não garante entrega confiável**\: depende de TCP ou UDP.
- O IP não usa portas; portas pertencem ao transporte (TCP/UDP).
- Protocolos de apoio\: **ICMP** (diagnóstico, comando ping), **ARP** (resolve IP em MAC) e **IPsec** (segurança dos pacotes).

::::grid{cols="2"}

:::example{tag="Camada de enlace"}

Ethernet (LAN), PPP (ponto a ponto), Wi-Fi (IEEE 802.11), Token Ring (anel).

:::

:::example{variant="alt" tag="Camada física"}

RS-232 (serial), DSL (banda larga), Bluetooth (curto alcance), Zigbee (IoT).

:::

::::

:::callout{tag="Outros protocolos citados"}

VoIP (voz pela internet), NTP (relógios) e LDAP (diretórios e autenticação).

:::

:::::

::::branch{id="conectividade" num="07" title="Suporte e Conectividade de Redes" kicker="IP, gateway, DNS e comandos de teste" short="Suporte|de Conectividade" tag="IP · DNS · PING"}

Aqui entra a parte prática de suporte, com configuração e testes.

### Configuração básica de interface

| Item | Para quê | Como chega |
| --- | --- | --- |
| :hl[Endereço IP] | Identifica a máquina na rede | Automático (DHCP) ou fixo |
| :hl[Máscara de sub-rede] | Define a parte de rede e a de máquina do endereço | Junto com o IP |
| :hl[Gateway padrão] | Roteador que leva o tráfego para fora da rede local | Junto com o IP |
| :hl[Servidor DNS] | Traduz nomes em endereços IP | DHCP ou manual |

:::callout{variant="warn" tag="Endereço 169.254.x.x"}

É um IP de configuração automática privada (APIPA)\: o computador **não conseguiu** um endereço do DHCP. Verifique cabo, Wi-Fi e servidor DHCP.

:::

### Comandos de teste

| Comando | O que revela |
| --- | --- |
| :hl[ipconfig (Windows) / ip a (Linux)] | IP, máscara e gateway da máquina |
| :hl[ipconfig /all] | Detalhes\: MAC, DHCP, DNS |
| :hl[ipconfig /release e /renew] | Devolve e pede novo endereço ao DHCP |
| :hl[ipconfig /flushdns] | Limpa o cache de DNS |
| :hl[ping] | Testa se um destino responde (ICMP) e o tempo de resposta |
| :hl[tracert (Windows) / traceroute (Linux)] | Mostra os roteadores no caminho até o destino |
| :hl[nslookup] | Consulta o DNS (nome para IP) |
| :hl[netstat] | Conexões e portas em uso |

### Roteiro de diagnóstico de conectividade

| Teste | Se falhar, o problema está em... |
| --- | --- |
| :hl[1. Ping 127.0.0.1] | Configuração de rede do próprio computador |
| :hl[2. Ping no IP da própria máquina] | Placa de rede ou driver |
| :hl[3. Ping no gateway] | Cabo, Wi-Fi, switch ou rede local |
| :hl[4. Ping em um IP externo (por exemplo 8.8.8.8)] | Saída para a internet (roteador ou operadora) |
| :hl[5. Ping em um nome (site)] | Resolução de nomes\: **DNS** |

- **Wi-Fi**\: conferir rede correta, senha, sinal, e se o roteador ou ponto de acesso está ligado.
- **Mapear unidade**\: associa uma letra a uma pasta de rede (caminho \\\\servidor\\pasta), exige permissão.
- **Impressora em rede**\: instalar por IP ou nome, com o driver correto, e testar a impressão.
- **Acesso a sistemas**\: se outros sites abrem, mas o sistema não, suspeite de proxy, VPN, permissão ou do próprio servidor.

::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Modelo OSI (de baixo para cima)"}

**Please Do Not Throw Sausage Pizza Away**\: **P**hysical, **D**ata link, **N**etwork, **T**ransport, **S**ession, **P**resentation, **A**pplication (Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação).

:::

:::example{tag="Modelo OSI (de cima para baixo)"}

**All People Seem To Need Data Processing**\: Application, Presentation, Session, Transport, Network, Data link, Physical.

:::

:::example{tag="Hub × switch"}

**Hub = burro** (repete para todos, broadcast); **Switch = inteligente** (entrega só ao destino).

:::

:::example{tag="Unicast, multicast, broadcast"}

**Uni = um; Multi = um grupo; Broad = todos.**

:::

:::example{tag="Modos de transmissão"}

**Simplex = rádio/TV (um sentido); Half-duplex = walkie-talkie (alternado); Full-duplex = telefone (simultâneo).**

:::

:::example{tag="TCP × UDP"}

**TCP = confiável** (web, e-mail, arquivos); **UDP = rápido** (vídeo, voz, jogos, DNS).

:::

:::example{tag="Códigos HTTP"}

**1xx informa, 2xx deu certo, 3xx redireciona, 4xx erro do cliente, 5xx erro do servidor.**

:::

:::example{tag="Portas em sequência"}

**21 FTP, 22 SSH, 23 Telnet, 25 SMTP**; depois **53 DNS**, **80 HTTP / 443 HTTPS**, **110 POP3 / 143 IMAP**. Versões seguras\: 443, 465, 993, 995.

:::

::::

:::::
