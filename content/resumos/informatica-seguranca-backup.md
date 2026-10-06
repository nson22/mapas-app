---
title: "Conectividade, Segurança e *Backup*"
kicker: "Complementar"
description: "Comandos de rede, contas e acessos, ameaças, MFA, Active Directory e tipos de backup."
tags: ["3 ramos", "conteúdo autoral"]
subject: "informatica"
order: 27
origin: "complemento"
manausOrder: 4
lede: "Da configuração de rede à proteção dos dados: comandos de teste, contas, defesas, ameaças e recuperação."
diagramNote: "Três tópicos do edital sobre rede, proteção e recuperação."
center: ["Rede, Segurança", "e Backup"]
---

::::branch{id="conectividade" num="01" title="Suporte e Conectividade de Redes" kicker="IP, gateway, DNS e comandos de teste" short="Suporte|de Conectividade" tag="IP · DNS · PING"}

Resumo de apoio ao **Redes e Nuvem**\: aqui entra a parte prática de suporte, com configuração e testes.

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

:::::branch{id="seguranca" num="02" title="Contas, Acessos e Segurança" kicker="AD, MFA, antivírus, firewall e ameaças" short="Contas|e Segurança" tag="MFA · AD · MALWARE" tone="sintaxe"}

### Princípios

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

### Proteções

| Item | Função |
| --- | --- |
| :hl[Antivírus] | Detecta e remove malware por assinaturas e comportamento; isola em quarentena |
| :hl[Firewall] | Filtra o tráfego de rede por regras |
| :hl[Atualizações] | Corrigem vulnerabilidades\: aplicar sistema, navegador e aplicativos |
| :hl[Criptografia] | Protege dados em disco e em trânsito |
| :hl[Política de senhas] | Tamanho, complexidade, troca e proibição de reuso |

### Ameaças

| Ameaça | Característica |
| --- | --- |
| :hl[Vírus] | Infecta arquivos e precisa de um hospedeiro para se espalhar |
| :hl[Worm] | Se propaga sozinho pela rede |
| :hl[Trojan (cavalo de troia)] | Parece legítimo, mas traz função maliciosa |
| :hl[Ransomware] | **Sequestra** dados (criptografa) e exige resgate |
| :hl[Spyware / keylogger] | Espiona; o keylogger registra o que é digitado |
| :hl[Backdoor] | Abre acesso remoto escondido |
| :hl[Botnet] | Rede de máquinas infectadas controladas à distância |
| :hl[Phishing] | Mensagem falsa que induz o usuário a entregar dados ou clicar |
| :hl[Engenharia social] | Manipula a pessoa (telefonema, falso suporte) em vez de atacar a máquina |

:::callout{variant="warn" tag="Como se proteger de ransomware"}

Não abrir anexos e links suspeitos, manter tudo atualizado, usar o menor privilégio e, principalmente, ter **backup fora da rede** (offline) e testado. O resgate não garante a devolução dos dados.

:::

:::callout{tag="Dado pessoal"}

Proteger informações inclui respeitar a LGPD (Lei nº 13.709/2018)\: coletar e compartilhar dados pessoais só com finalidade e permissão adequadas.

:::

:::::

:::::branch{id="backup" num="03" title="Backup e Recuperação de Dados" kicker="tipos, regra 3-2-1 e testes" short="Backup|e Recuperação" tag="FULL · INCR. · DIF." tone="semantica"}

Backup é a **cópia dos dados** em outro local para permitir a recuperação. Backup sem **teste de restauração** é apenas esperança.

| Tipo | O que copia | Para restaurar |
| --- | --- | --- |
| :hl[Completo (full)] | Tudo | Só o backup completo |
| :hl[Incremental] | O que mudou desde o **último backup** (de qualquer tipo) | Completo + **todos** os incrementais, em ordem |
| :hl[Diferencial] | O que mudou desde o **último completo** | Completo + o **último** diferencial |

- **Incremental**\: backup mais rápido e leve, restauração mais trabalhosa.
- **Diferencial**\: cresce a cada dia, mas a restauração usa só dois conjuntos.
- Completo e incremental costumam **marcar** os arquivos como copiados; o diferencial não.

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

:::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Princípios da segurança"}

**DICA**\: **D**isponibilidade, **I**ntegridade, **C**onfidencialidade, **A**utenticidade. (A versão curta é a tríade **CID**.)

:::

:::example{tag="Fatores de autenticação"}

**Algo que você SABE, TEM ou É** (senha; celular ou token; digital). MFA combina fatores de *tipos diferentes*.

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

::::

:::::
