---
title: "Segurança da Informação e *Backup*"
kicker: "Complementar"
description: "Princípios, malwares, ataques, engenharia social, mecanismos de defesa, backup e criptografia."
tags: ["11 ramos", "conteúdo autoral"]
subject: "informatica"
order: 28
origin: "complemento"
manausOrder: 5
lede: "Dos princípios CIDA aos ataques mais cobrados, passando pelas defesas, pelo backup e pela criptografia — um resumo completo de segurança da informação."
diagramNote: "Onze ramos sobre princípios, ameaças, mecanismos de defesa, backup e criptografia."
center: ["Segurança da", "Informação"]
---

:::::branch{id="principios" num="01" title="Princípios da Segurança da Informação" kicker="CIDA, ativos, risco e controles" short="Princípios|da Segurança" tag="CIDA · RISCO"}

A segurança da informação (SI) protege um conjunto de informações para preservar o valor que elas têm para um indivíduo ou uma organização. Seus princípios básicos são confidencialidade, integridade, disponibilidade, autenticidade, não repúdio e legalidade, resumidos no mnemônico **CIDA**.

::::grid{cols="3"}

:::example{tag="Confidencialidade"}

Só acessa quem está autorizado.

:::

:::example{variant="alt" tag="Integridade"}

A informação não é alterada indevidamente.

:::

:::example{variant="gold" tag="Disponibilidade"}

A informação está acessível quando necessária.

:::

::::

### Autenticidade e não repúdio

| Princípio | O que garante |
| --- | --- |
| :hl[Autenticidade] | A informação ou o usuário é de fato quem diz ser; fatores\: o que você **sabe** (senha), **tem** (token, cartão) ou **é** (biometria) |
| :hl[Não repúdio / irretratabilidade] | O autor não pode negar uma ação já realizada; garantido por assinatura digital, logs de auditoria, protocolos seguros (SSL/TLS) e autenticação forte (MFA) |

:::callout{variant="warn" tag="Pegadinha clássica"}

O erro mais cobrado troca integridade por confidencialidade\: alterar um dado é **integridade**; acessar sem autorização é **confidencialidade**.

:::

### Ameaça, vulnerabilidade, risco e impacto

| Conceito | Definição |
| --- | --- |
| :hl[Ameaça] | Fator ou evento que explora uma vulnerabilidade e causa dano; pode ser intencional (ataque) ou acidental (falha humana, desastre) |
| :hl[Vulnerabilidade] | Fraqueza ou falha em sistema, processo ou política, que pode ser explorada por uma ameaça; técnica (software) ou humana (senha fraca) |
| :hl[Risco] | Probabilidade de uma ameaça explorar uma vulnerabilidade e causar impacto |
| :hl[Impacto] | Consequência da concretização de um risco\: prejuízo financeiro, operacional ou reputacional |

:::callout{tag="Fórmula do risco"}

Risco = Ameaça × Vulnerabilidade × Impacto.

:::

### Segurança como ativo

A informação é um ativo da organização e deve ser protegida como qualquer outro, por meio de controles físicos, lógicos e administrativos.

::::grid{cols="3"}

:::example{tag="Controle físico"}

Barreiras físicas de acesso\: catracas, portas com autenticação, sala-cofre. **Não é sinônimo de hardware**.

:::

:::example{variant="alt" tag="Controle lógico"}

Barreiras de software na camada computacional\: firewall, antivírus, criptografia.

:::

:::example{variant="gold" tag="Controle administrativo"}

Regras, políticas e procedimentos que definem o comportamento esperado dos usuários.

:::

::::

:::callout{variant="warn" tag="Pegadinha"}

Controle físico não se limita a hardware (uma parede é controle físico, mas não é hardware), e controle lógico não se limita a software.

:::

:::::

::::branch{id="contas" num="02" title="Contas, Acessos e Autenticação" kicker="contas, MFA, AD, senhas e política" short="Contas e|Autenticação" tag="MFA · AD · SENHA" tone="sintaxe"}

### Contas e acessos

- **Criar, alterar, bloquear e desbloquear contas** conforme solicitação autorizada.
- **Redefinir senha**\: confirme a identidade do usuário antes; a senha temporária deve ser trocada no primeiro acesso.
- **Desligamento de servidor**\: prefira **desativar** a conta (e remover acessos) a excluir, para preservar histórico.
- **Princípio do menor privilégio**\: dar só o acesso necessário para a função.
- **Grupos**\: dê permissão ao grupo e coloque usuários nele, em vez de conceder usuário a usuário.

### Autenticação

| Fator | Exemplo |
| --- | --- |
| :hl[Algo que você **sabe**] | Senha, PIN |
| :hl[Algo que você **tem**] | Celular com aplicativo autenticador, token, cartão |
| :hl[Algo que você **é**] | Digital, rosto |

:::callout{variant="warn" tag="MFA"}

Autenticação multifator combina **dois ou mais fatores de tipos diferentes**. Senha + PIN são dois fatores do mesmo tipo (algo que se sabe), então não é MFA.

:::

### Active Directory (AD), em nível básico

- Serviço de diretório da Microsoft\: guarda **usuários, grupos, computadores** e políticas.
- **Domínio** e **controlador de domínio** autenticam os usuários.
- **Unidades organizacionais (OU)** organizam objetos; **GPO** (política de grupo) aplica configurações às máquinas e usuários.
- Usa protocolos como **Kerberos** e **LDAP**.

### Boas práticas de senha

- Não forneça sua senha a ninguém e não a digite sendo observado.
- Use senhas diferentes para cada serviço e troque-as quando julgar necessário.
- Faça **logout** ao sair de sites que exigem senha, em vez de só fechar a aba.
- Evite perguntas de segurança com resposta fácil de adivinhar.
- Prefira sites com conexão criptografada (HTTPS) ao informar senha.

### Política de segurança

Define direitos, responsabilidades e penalidades de cada usuário quanto ao uso dos recursos computacionais. São consideradas **uso abusivo**\: compartilhar senhas, divulgar informação confidencial, enviar spam ou código malicioso, difamar ou ameaçar alguém, copiar material protegido sem autorização e atacar outros computadores ou redes.

::::

:::::branch{id="malware-virus" num="03" title="Malwares: Vírus, Worm e Trojan" kicker="payload, propagação e tipos" short="Vírus, Worm|e Trojan" tag="VÍRUS · TROJAN" tone="semantica"}

Malwares são softwares maliciosos que causam danos a computadores e aplicações. Infectam por exploração de vulnerabilidades, mídias removíveis, páginas maliciosas ou anexos de e-mail; uma vez instalados, agem com as permissões do usuário.

### Vírus

Depende de um **hospedeiro** e de **execução**\: só infecta se um arquivo ou programa já infectado for executado.

| Parte do vírus | Pergunta que responde | Função |
| --- | --- | --- |
| :hl[Carga útil (payload)] | O quê faz | Ação maliciosa\: roubo de dados, exclusão de arquivos, criptografia (ransomware) |
| :hl[Mecanismo de propagação] | Como se espalha | Vetor de infecção\: e-mail, download, vulnerabilidade explorada |
| :hl[Mecanismo de ativação (trigger)] | Quando ativa | Evento, data específica ou condição do sistema |

| Tipo de vírus | Característica |
| --- | --- |
| :hl[De arquivo/programa] | Contamina executáveis (.exe, .sys, .docx...) |
| :hl[De script] | Escrito em VBScript/JavaScript; pode executar ao abrir página ou e-mail em HTML |
| :hl[De macro] | Infecta documentos do Office (Word, Excel, PowerPoint) via linguagem de macro |
| :hl[De boot] | Ataca a inicialização, impedindo o sistema operacional de carregar |
| :hl[De celular] | Propaga por Bluetooth ou MMS entre aparelhos |
| :hl[Propagado por e-mail] | Vem como anexo e reenvia cópias para os contatos do computador infectado |
| :hl[Bomba-relógio (Time Bomb)] | Fica inativo até uma data ou número de execuções definido |
| :hl[Furtivo (Stealth)] | Usa técnicas para se esconder de antivírus e ferramentas de segurança |

::::grid{cols="2"}

:::example{tag="Vírus polimórfico"}

Muda a aparência do código a cada infecção (criptografia/embaralhamento), mas o **núcleo** continua o mesmo.

:::

:::example{variant="alt" tag="Vírus metamórfico"}

Reescreve **todo** o código a cada infecção; sem padrão fixo, é ainda mais difícil de detectar.

:::

::::

:::callout{tag="CAIU NA PROVA"}

(CEBRASPE PRF) No acesso a uma página web com vírus de script, pode ocorrer execução automática, conforme as configurações do navegador. Gabarito\: Certo.

:::

### Worm

Programa autorreplicante que se propaga **sozinho** pela rede, sem precisar de hospedeiro nem de execução de um arquivo infectado; costuma consumir muitos recursos e afetar o desempenho da rede.

:::callout{tag="CAIU NA PROVA"}

(CEBRASPE Câmara dos Deputados) Worms infectam computadores mas, diferentemente dos vírus, não precisam de um programa hospedeiro para se propagar. Gabarito\: Certo.

:::

### Cavalo de Troia (Trojan)

Programa que parece legítimo (cartão virtual, jogo, protetor de tela) mas também executa funções maliciosas escondidas do usuário.

| Tipo de trojan | O que faz |
| --- | --- |
| :hl[Downloader] | Baixa outros códigos maliciosos da internet |
| :hl[Dropper] | Instala outros códigos maliciosos já embutidos nele |
| :hl[Backdoor] | Inclui porta de acesso remoto para o atacante |
| :hl[DoS] | Instala ferramentas de negação de serviço |
| :hl[Destrutivo] | Altera/apaga arquivos e pode formatar o disco |
| :hl[Clicker] | Redireciona a navegação para sites específicos |
| :hl[Proxy] | Transforma o computador em servidor proxy para navegação anônima e spam |
| :hl[Spy] | Instala spyware para coletar senhas e dados sensíveis |
| :hl[Banker] | Coleta dados bancários ao detectar acesso a Internet Banking |

:::::

:::::branch{id="malware-outros" num="04" title="Malwares: Bot, Spyware, Backdoor e Ransomware" kicker="zumbis, espiões, rootkits e resgates" short="Bot, Spyware|e Ransomware" tag="BOTNET · RANSOMWARE"}

### Bot e botnet

**Bot**\: programa controlado remotamente pelo invasor, com infecção e propagação parecidas às do worm. O computador infectado é chamado de **zumbi**. **Botnet**\: rede de milhares de zumbis, usada para potencializar ataques (o invasor pode até alugá-la a terceiros).

:::callout{tag="CAIU NA PROVA"}

(CEBRASPE) Computadores infectados por botnets podem ser controlados remotamente e atacar outros computadores sem que os usuários percebam. Gabarito\: Certo.

:::

### Spyware

Monitora atividades do sistema e envia as informações coletadas a terceiros; pode ser **legítimo** (consentido pelo dono do equipamento) ou **malicioso** (compromete privacidade sem consentimento).

::::grid{cols="3"}

:::example{tag="Keylogger"}

Captura e armazena as teclas digitadas pelo usuário.

:::

:::example{variant="alt" tag="Screenlogger"}

Captura a tela e a posição do cursor nos cliques; usado contra teclados virtuais de bancos.

:::

:::example{variant="gold" tag="Adware"}

Exibe propagandas; legítimo quando é patrocínio declarado, malicioso quando monitora a navegação sem avisar.

:::

::::

### Backdoor e rootkit

**Backdoor**\: programa que permite o retorno do invasor a um computador já comprometido, por meio de um serviço criado ou alterado para esse fim, sem repetir a invasão original.

**Rootkit**\: conjunto de programas e técnicas que **esconde e mantém** a presença de um invasor ou de outro código malicioso.

:::callout{variant="warn" tag="Pegadinha"}

Rootkit não serve para **obter** acesso privilegiado, e sim para **mantê-lo** escondido.

:::

### Ransomware e scareware

| Tipo | Característica |
| --- | --- |
| :hl[Ransomware Locker] | Impede o acesso ao **equipamento** infectado |
| :hl[Ransomware Crypto] | Impede o acesso aos **dados**, geralmente criptografando-os |

**Scareware**\: usa alertas falsos de infecção (pop-ups) para induzir o usuário a baixar um software fraudulento, que na verdade é outro malware.

:::callout{variant="warn" tag="Como lidar com ransomware"}

O pagamento do resgate **não garante** a devolução dos dados. A melhor defesa é restaurar por meio de **backup** atualizado e testado, mantido fora da rede.

:::

:::::

:::::branch{id="engenharia-social" num="05" title="Engenharia Social e Golpes na Internet" kicker="phishing, pharming, hoax e spam" short="Engenharia|Social" tag="PHISHING · PHARMING" tone="sintaxe"}

A engenharia social explora a **falha humana** (pressa, medo, curiosidade, confiança), e não falhas técnicas, para induzir a vítima a entregar informações ou realizar ações prejudiciais.

### Phishing

Fraude que combina meios técnicos e engenharia social para obter dados pessoais e financeiros\: mensagens que se passam por uma instituição conhecida, criam urgência e induzem o clique em links ou páginas falsas.

- Nunca clique em links suspeitos.
- Verifique o remetente do e-mail.
- Use autenticação de dois fatores (2FA).

::::grid{cols="2"}

:::example{tag="Vishing (voice phishing)"}

Ataque por telefone; o criminoso finge ser suporte técnico, banco ou polícia para obter dados.

:::

:::example{variant="alt" tag="Baiting (isca)"}

Usa a curiosidade da vítima\: um pen-drive "infectado" deixado em local público, por exemplo.

:::

:::example{variant="gold" tag="Pretexting (falsa identidade)"}

O golpista finge ser alguém confiável (TI, colega) para obter informações sigilosas.

:::

:::example{tag="Tailgating (acesso físico)"}

Aproveita a educação das pessoas para entrar em locais restritos sem crachá.

:::

::::

### Pharming

Redireciona o usuário de um site legítimo para um site falso **sem que ele precise clicar em nada**, manipulando o servidor DNS (DNS poisoning) ou o arquivo hosts do computador.

:::callout{tag="Pharming × Phishing"}

Phishing exige que a vítima **clique** em um link malicioso. Pharming manipula o DNS ou o próprio computador; a vítima pode ser enganada mesmo digitando o endereço correto.

:::

### Hoax e spam

**Hoax**\: boato, mensagem falsa e alarmista criada para assustar e gerar uma corrente de e-mails.

**Spam**\: envio massivo e não solicitado de mensagens, com fins publicitários, fraudulentos ou maliciosos; combatido com filtros de e-mail e autenticação de remetente (SPF, DKIM, DMARC).

:::::

:::::branch{id="ataques-rede" num="06" title="Ataques à Rede" kicker="MitM, sniffing, spoofing, DoS e DDoS" short="Ataques|à Rede" tag="MitM · DDoS" tone="semantica"}

### Man-in-the-Middle e packet sniffing

**MitM**\: o invasor intercepta, altera ou espiona a comunicação entre duas partes sem que elas percebam, para roubar senhas, cartões ou dados pessoais.

::::grid{cols="2"}

:::example{tag="Sniffing passivo"}

O atacante só escuta o tráfego, sem interferir; difícil de detectar. Comum em Wi-Fi aberto.

:::

:::example{variant="alt" tag="Sniffing ativo"}

O atacante interfere, redireciona ou injeta pacotes; pode usar ARP Spoofing ou MitM.

:::

::::

### Spoofing

| Tipo | Como age | Uso comum |
| --- | --- | --- |
| :hl[IP Spoofing] | Falsifica o endereço IP de origem | DDoS, evitar rastreamento |
| :hl[ARP Spoofing] | Falsifica mensagens ARP na rede local | MitM |
| :hl[DNS Spoofing] | Altera registros DNS | Pharming, roubo de credenciais |
| :hl[Email Spoofing] | Falsifica o remetente do e-mail | Phishing |
| :hl[Caller ID Spoofing] | Falsifica o número exibido na chamada | Golpes telefônicos |

### Negação de serviço (DoS e DDoS)

Sobrecarregam um sistema, servidor ou rede, tornando-o indisponível para usuários legítimos.

| | DoS | DDoS |
| --- | --- | --- |
| :hl[Origem] | Um único computador/IP | Vários dispositivos (botnet) |
| :hl[Dificuldade de bloqueio] | Menor | Maior, pois os ataques vêm de múltiplos IPs |

| Categoria | Objetivo | Exemplo |
| --- | --- | --- |
| :hl[Volume (flooding)] | Saturar a banda da rede | UDP Flood, ICMP Flood (Ping of Death) |
| :hl[Protocolo] | Explorar falhas de comunicação | SYN Flood, Fragmentation Attack |
| :hl[Aplicação (Layer 7)] | Sobrecarregar o aplicativo web | HTTP Flood |

### Força bruta (brute force)

Testa combinações de usuário/senha ou chave de criptografia até encontrar a correta.

- **Força bruta pura**\: testa todas as combinações possíveis.
- **Dicionário**\: usa listas de senhas comuns ou vazadas.
- **Híbrido**\: combina palavras comuns com variações (ex\: "senha123").

:::callout{tag="CAIU NA PROVA"}

(AOCP) Ataque de força bruta é adivinhar, por tentativa e erro, usuário e senha para acessar sites, computadores e serviços com os mesmos privilégios desse usuário. Gabarito\: Certo.

:::

:::::

::::branch{id="ataques-web" num="07" title="Ataques a Aplicações Web" kicker="defacement, SQL injection, XSS e CSRF" short="Ataques a|Apps Web" tag="SQLi · XSS · CSRF"}

| Ataque | Como funciona | Como se proteger |
| --- | --- | --- |
| :hl[Defacement] | Explora falha no servidor ou CMS e altera o conteúdo visível do site | Manter CMS e plugins atualizados; controlar o acesso ao painel |
| :hl[SQL Injection] | Insere comandos SQL em campos de entrada para manipular a consulta ao banco de dados | Validar e sanitizar entradas; usar consultas parametrizadas; privilégio mínimo no banco |
| :hl[XSS (Cross-Site Scripting)] | Injeta script malicioso em página vista por outros usuários, roubando cookies e credenciais | Escapar caracteres especiais; Content Security Policy; validar entradas |
| :hl[CSRF (Cross-Site Request Forgery)] | Usa a sessão já autenticada da vítima para enviar, sem ela saber, uma requisição em seu nome | Token CSRF; verificar o cabeçalho Referer; usar métodos HTTP seguros |

:::callout{tag="Tipos de XSS"}

**Refletido**\: executa na hora, embutido na própria URL. **Armazenado**\: fica salvo no servidor (ex\: um comentário) e afeta todos que acessarem a página. **Baseado em DOM**\: manipula o DOM no navegador, sem passar pelo servidor.

:::

:::callout{tag="CAIU NA PROVA"}

(CESPE Polícia Federal) Uma proteção nos navegadores de Internet é direcionada para combater vulnerabilidades do tipo XSS e evitar ataques maliciosos. Gabarito\: Certo.

:::

::::

::::branch{id="vpn-antivirus-firewall" num="08" title="VPN, Antivírus e Firewall" kicker="túnel seguro, detecção e barreiras de rede" short="VPN, Antivírus|e Firewall" tag="VPN · FIREWALL" tone="sintaxe"}

### VPN

Rede Privada Virtual\: conecta-se a uma rede privada usando uma rede pública (a Internet), como um **túnel criptografado** entre dois pontos, protegendo os dados trocados e podendo permitir acesso remoto a uma intranet.

:::callout{tag="CAIU NA PROVA"}

(CEBRASPE) VPN é uma tecnologia de segurança de redes que pode ser usada para permitir o acesso remoto de um usuário à intranet de uma empresa. Gabarito\: Certo.

:::

### Antivírus

Detecta programas maliciosos e os remove ou coloca em quarentena; roda continuamente, atento a downloads e dispositivos removíveis.

| Método de detecção | Como funciona |
| --- | --- |
| :hl[Assinatura] | Compara o arquivo com uma lista de padrões (strings) de vírus já conhecidos |
| :hl[Heurística] | Analisa estrutura e instruções suspeitas no código |
| :hl[Comportamento] | Observa as ações do programa durante a execução |

| Geração | Característica |
| --- | --- |
| :hl[1ª, anos 80] | Detecção só por assinatura; não identifica vírus desconhecidos |
| :hl[2ª, anos 90] | Heurística simples; identifica algumas variações |
| :hl[3ª, meados dos anos 90] | Monitoramento de comportamento em tempo real |
| :hl[4ª, anos 2000] | Combina assinatura, heurística e comportamento; firewall integrado |
| :hl[5ª, atual] | IA e nuvem; cobre ransomware e ataques de dia zero |

:::callout{tag="CAIU NA PROVA"}

(CEBRASPE) Softwares antivírus trabalham com assinaturas de vírus; para detectar um vírus novo, o software precisa conhecer sua assinatura. Gabarito\: Certo (antivírus de 1ª geração).

:::

### Firewall

Analisa o tráfego de rede segundo um conjunto de regras e decide o que pode ser transmitido ou recebido.

| Tipo | Como atua |
| --- | --- |
| :hl[Filtro de pacotes] | Examina cada pacote isoladamente, na camada de rede (L3) |
| :hl[Inspeção com estado (stateful)] | Mantém o contexto da conexão para decidir se um pacote é legítimo; mais eficiente |
| :hl[Proxy (ALG)] | Intermedia o acesso e esconde o IP real; filtra em nível de aplicação |
| :hl[Bastion host] | Servidor reforçado e exposto, ponto de controle entre redes internas e externas |
| :hl[NAT] | Compartilha um IP público entre vários dispositivos, ocultando os IPs internos |
| :hl[DMZ] | Área isolada para servidores acessíveis de fora (web, e-mail), separada da rede interna |

:::callout{variant="warn" tag="Firewall pessoal"}

Protege contra acessos não autorizados vindos da internet, mas **não substitui** o antimalware\: não impede, por si só, a exploração de vulnerabilidades nem um backdoor já instalado.

:::

::::

:::::branch{id="ids-ips-honeypot" num="09" title="IDS, IPS e Honeypot" kicker="detecção, prevenção e armadilhas para invasores" short="IDS, IPS|e Honeypot" tag="IDS · IPS" tone="semantica"}

::::grid{cols="2"}

:::example{tag="IDS"}

**Detecta** e alerta sobre atividades suspeitas; só monitora e registra, não bloqueia nada.

:::

:::example{variant="alt" tag="IPS"}

**Previne**\: detecta e **bloqueia automaticamente** o tráfego malicioso antes que ele cause dano.

:::

::::

| Onde atua | Vantagem | Desvantagem |
| --- | --- | --- |
| :hl[NIDS / NIPS, baseado em rede] | Protege vários dispositivos ao mesmo tempo (roteadores, switches) | Pode não detectar ataques internos nem tráfego criptografado |
| :hl[HIDS / HIPS, baseado em host] | Detecta ameaças internas e atividades mesmo criptografadas | Só protege o próprio dispositivo; consome recursos da máquina |

Ambos podem ser baseados em **assinaturas** (padrões conhecidos, exigem atualização) ou em **anomalias/comportamento** (detectam ameaças desconhecidas, mas geram mais falsos positivos).

### Honeypot

Isca de segurança que simula um sistema vulnerável para atrair, enganar e monitorar invasores, coletando suas táticas sem comprometer a rede real.

| Tipo | Característica |
| --- | --- |
| :hl[Baixa interação] | Simula serviços básicos; só registra tentativas de acesso |
| :hl[Alta interação] | Simula um sistema completo; permite estudar ataques avançados |
| :hl[Honeynet] | Conjunto de honeypots conectados, simulando uma rede inteira falsa |

:::callout{variant="warn" tag="CAIU NA PROVA"}

(CEBRASPE) Honeypot é uma técnica pela qual um atacante tira de operação um serviço, computador ou rede. Gabarito\: **Errado**, honeypot é mecanismo de defesa, não de ataque.

:::

:::::

:::::branch{id="backup" num="10" title="Backup e Recuperação de Dados" kicker="tipos, regra 3-2-1 e testes" short="Backup|e Recuperação" tag="FULL · INCR. · DIF." tone="semantica"}

Backup é a **cópia dos dados** em outro local para permitir a recuperação. Backup sem **teste de restauração** é apenas esperança.

| Tipo | O que copia | Para restaurar |
| --- | --- | --- |
| :hl[Completo (full)] | Tudo | Só o backup completo |
| :hl[Incremental] | O que mudou desde o **último backup** (de qualquer tipo) | Completo + **todos** os incrementais, em ordem |
| :hl[Diferencial] | O que mudou desde o **último completo** | Completo + o **último** diferencial |
| :hl[Espelhado (mirror)] | Cópia exata, sem versões antigas | Só o backup espelhado |
| :hl[Imagem] | Sistema inteiro (SO, aplicativos, configurações) | O backup de imagem completo |
| :hl[Nuvem] | Arquivos em servidores remotos, via internet | Depende da conexão e do provedor |

- **Incremental**\: backup mais rápido e leve, restauração mais trabalhosa.
- **Diferencial**\: cresce a cada dia, mas a restauração usa só dois conjuntos.
- Completo e incremental costumam **marcar** os arquivos como copiados; o diferencial não.
- **Espelhado**\: sempre atualizado, mas **não permite recuperar** arquivos excluídos, pois eles somem do backup também.
- **Imagem**\: restauração muito rápida e completa, mas ocupa muito espaço e exige software especializado.

### Boas práticas

| Prática | Detalhe |
| --- | --- |
| :hl[Regra 3-2-1] | 3 cópias, em 2 tipos de mídia diferentes, com 1 delas fora do local (ou na nuvem) |
| :hl[Armazenamento] | Local (rápido), externo (fita, disco removível) e em nuvem (fora do local) |
| :hl[Rotina e monitoramento] | Agendar, verificar os **logs** e tratar falhas de execução |
| :hl[Catalogação e retenção] | Identificar mídias, definir quanto tempo guardar e quando descartar |
| :hl[Testes de recuperação] | Restaurar periodicamente arquivos e sistemas para provar que funciona |
| :hl[Proteção e descarte] | Criptografar, controlar acesso; destruir ou apagar com segurança as mídias fora de uso |

::::grid{cols="2"}

:::example{tag="RPO"}

Quanto de dado, em tempo, a organização aceita perder (define a frequência do backup).

:::

:::example{variant="alt" tag="RTO"}

Quanto tempo a organização aceita levar para restaurar o serviço.

:::

::::

:::callout{variant="warn" tag="Pegadinhas"}

Cópia em outra pasta do mesmo disco **não é** backup seguro. **Sincronização** (como pasta em nuvem) não substitui backup\: apagar um arquivo pode apagá-lo das duas pontas.

:::

:::callout{tag="CAIU NA PROVA"}

(CEBRASPE Procurador) No backup incremental são copiados somente os dados modificados desde o último backup, enquanto no diferencial são copiados somente os dados alterados desde o último backup completo. Gabarito\: Certo.

:::

:::::

::::branch{id="criptografia" num="11" title="Criptografia, Hash e Certificação Digital" kicker="simétrica, assimétrica, hash, assinatura e certificado" short="Criptografia e|Certificação" tag="AES · RSA · HASH" tone="sintaxe"}

### Criptografia simétrica x assimétrica

| | Simétrica | Assimétrica |
| --- | --- | --- |
| :hl[Chaves] | Uma única chave para cifrar e decifrar | Duas chaves\: pública (cifra) e privada (decifra) |
| :hl[Velocidade] | Mais rápida; boa para grandes volumes | Mais lenta |
| :hl[Desafio] | Distribuir a chave com segurança, pois ela viaja em texto puro | Nenhum\: a chave pública pode circular livremente |
| :hl[Algoritmos] | AES, DES, 3DES, RC4 | RSA, ECC, ElGamal |

:::callout{tag="Como funciona a assimétrica"}

O que é cifrado com a chave **pública** só pode ser decifrado com a chave **privada** correspondente, por isso a chave privada nunca deve ser compartilhada.

:::

:::callout{tag="CAIU NA PROVA"}

(CEBRASPE SEFAZ-AL) A criptografia assimétrica utiliza duas chaves, uma pública e outra privada, para cifrar e decifrar mensagens. Gabarito\: Certo.

:::

### Funções de hash

Transformam qualquer quantidade de dados em um valor de tamanho fixo (o **resumo** ou *digest*). São **unidirecionais**\: não é possível recuperar os dados originais a partir do hash, e qualquer alteração mínima nos dados muda todo o valor, por isso servem para checar **integridade**.

Algoritmos\: MD5 e SHA-1 (hoje considerados inseguros); SHA-256 e SHA-3 (atuais e seguros).

### Assinatura digital

Combina criptografia assimétrica com função de hash para garantir autoria, integridade e não repúdio. Funciona em duas etapas\: o conteúdo é transformado em hash, e esse hash é cifrado com a **chave privada** do remetente. O destinatário decifra a assinatura com a chave **pública** do remetente e compara os hashes; se coincidirem, confirma integridade, autenticidade e não repúdio.

### Certificação digital

O certificado digital é um documento eletrônico que **vincula uma chave pública a uma identidade**, emitido por uma Autoridade Certificadora (AC), no Brasil a ICP-Brasil. Contém nome do titular, chave pública, dados da AC e validade.

:::callout{tag="CAIU NA PROVA"}

(CEBRASPE Perito Criminal RO) Mecanismo que garante a identidade do emissor e é certificado por uma autoridade\: certificado digital. Não confundir com a assinatura digital, que prova a autoria, mas não é emitida por uma AC.

:::

::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Princípios da segurança"}

**DICA**\: **D**isponibilidade, **I**ntegridade, **C**onfidencialidade, **A**utenticidade. (A versão curta é a tríade **CID**; a completa acrescenta o **Não repúdio**.)

:::

:::example{tag="Fatores de autenticação"}

**Algo que você SABE, TEM ou É** (senha; celular ou token; digital). MFA combina fatores de *tipos diferentes*.

:::

:::example{tag="Vírus x Worm x Trojan"}

**Vírus** precisa de hospedeiro e execução; **Worm = verme**, se replica sozinho pela rede; **Trojan** parece legítimo mas esconde função maliciosa.

:::

:::example{tag="Phishing x Pharming"}

**Phishing**\: a vítima **clica** no link ("pesca o bisonho"). **Pharming**\: ataca o DNS/hosts, a vítima **nem precisa clicar**.

:::

:::example{tag="DoS x DDoS"}

**DoS = Um** computador atacando. **DDoS = Distribuído**, vários computadores (botnet) atacando juntos.

:::

:::example{tag="IDS x IPS"}

**IDS = Detecta** e alerta (passivo). **IPS = Previne**, detecta e **bloqueia** automaticamente (ativo).

:::

:::example{tag="Regra de backup"}

**3-2-1**\: **3** cópias, em **2** mídias diferentes, **1** fora do local.

:::

:::example{tag="Incremental × diferencial"}

**Incremental = só o que mudou desde o último backup** (restaura\: completo + todos os incrementais). **Diferencial = tudo desde o último completo** (restaura\: completo + o último diferencial).

:::

:::example{tag="Ameaças"}

**Phishing = pescaria** (isca para roubar dados); **Worm = verme** (se espalha sozinho); **Trojan = cavalo de Troia** (parece legítimo); **Ransomware = ransom, resgate** (sequestra e exige pagamento).

:::

:::example{tag="Criptografia"}

**Simétrica = uma chave só** (rápida, mas precisa compartilhar a chave). **Assimétrica = duas chaves**, pública e privada (mais segura para trocar com desconhecidos).

:::

::::

:::::
