---
title: "Hardware, Sistemas Operacionais e *Instalação*"
kicker: "Complementar"
description: "Componentes e periféricos, Windows, Linux (comandos e permissões) e preparação de estações."
tags: ["4 ramos", "conteúdo autoral"]
subject: "informatica"
order: 25
origin: "complemento"
manausOrder: 1
lede: "Da peça ao sistema pronto: componentes, Windows, Linux e a preparação de estações de trabalho."
diagramNote: "Quatro tópicos do edital ligados à máquina e ao sistema."
center: ["Hardware", "e Sistemas"]
---

:::::branch{id="hardware" num="01" title="Hardware e Periféricos" kicker="componentes, armazenamento, conexões e falhas" short="Hardware|e Periféricos" tag="CPU · RAM · SSD"}

Nível de suporte\: reconhecer os componentes, saber onde cada um se encaixa, identificar falhas e substituir peças.

| Componente | Função | Pontos que caem |
| --- | --- | --- |
| :hl[Processador (CPU)] | Executa as instruções | Núcleos, threads, clock (GHz), cache L1/L2/L3, soquete compatível com a placa-mãe |
| :hl[Memória RAM] | Memória de trabalho, **volátil** (perde o conteúdo sem energia) | DDR4 e DDR5 não são compatíveis entre si; mais RAM = mais programas abertos |
| :hl[Memória ROM / BIOS / UEFI] | Firmware de inicialização, não volátil | Bateria CMOS guarda data e hora; UEFI substitui a BIOS clássica |
| :hl[Placa-mãe] | Interliga todos os componentes | Chipset, slots DIMM, PCIe, SATA, M.2 |
| :hl[Placa de vídeo (GPU)] | Processa imagem | Onboard (integrada) x offboard (dedicada) |
| :hl[Fonte de alimentação] | Converte CA em CC para os componentes | Potência em watts; fonte fraca causa reinícios e travamentos |
| :hl[Gabinete e refrigeração] | Abriga e resfria | Cooler, pasta térmica, poeira; superaquecimento reduz o desempenho |

### Armazenamento

| Tipo | Característica | Observação |
| --- | --- | --- |
| :hl[HDD] | Disco mecânico com pratos giratórios | Barato e grande; mais lento; sensível a impacto |
| :hl[SSD SATA] | Memória flash, sem partes móveis | Muito mais rápido que o HDD |
| :hl[SSD NVMe (M.2)] | Flash conectado ao barramento PCIe | Mais rápido que o SSD SATA |
| :hl[Pen drive, cartão] | Flash removível | Uso portátil; risco de perda |

### Portas e conexões

| Conector | Uso |
| --- | --- |
| :hl[USB-A, USB-C] | Periféricos em geral; USB-C também carrega e transmite vídeo |
| :hl[HDMI] | Áudio e vídeo digital (TV, monitor) |
| :hl[DisplayPort] | Vídeo digital de alta resolução |
| :hl[VGA] | Vídeo analógico antigo; sem áudio |
| :hl[RJ-45] | Rede cabeada (Ethernet) |
| :hl[SATA] | Ligação interna de HDD e SSD |
| :hl[P2] | Áudio analógico (fone, microfone) |

### Periféricos

::::grid{cols="2"}

:::example{tag="Impressoras"}

**Jato de tinta**\: barata na compra, cara na manutenção. **Laser**\: rápida, toner, bom volume. **Matricial**\: impacto, vias com carbono. **Térmica**\: recibos e etiquetas. Multifuncional imprime, copia e digitaliza.

:::

:::example{variant="alt" tag="Scanners"}

De mesa (vidro) e com alimentador automático (ADF). Resolução em DPI; formatos PDF e imagem.

:::

:::example{variant="gold" tag="Monitores"}

Resolução, taxa de atualização (Hz), painel IPS (cores), VA (contraste), TN (rápido, ângulo ruim).

:::

:::example{tag="Teclado e mouse"}

Com fio (USB) ou sem fio (receptor USB ou Bluetooth). Problema comum\: pilha ou receptor.

:::

::::

### Sintomas e causas prováveis

| Sintoma | Verificar primeiro |
| --- | --- |
| :hl[Computador não liga] | Tomada, cabo, fonte, botão do gabinete, filtro de linha |
| :hl[Liga, mas sem imagem] | Cabo de vídeo, entrada do monitor, memória RAM mal encaixada |
| :hl[Reinicia ou desliga sozinho] | Superaquecimento, fonte, poeira no cooler |
| :hl[Lentidão] | Disco cheio, pouca RAM, malware, muitos programas na inicialização |
| :hl[Travamentos e tela azul] | Memória, disco com defeito, driver incompatível |
| :hl[Ruído no gabinete] | Cooler sujo ou HDD com falha |

:::callout{variant="warn" tag="Manutenção"}

**Preventiva**\: limpeza, pasta térmica, atualização de firmware e drivers, uso de nobreak. **Corretiva**\: troca de peça ou reinstalação depois da falha. Códigos sonoros (bipes) variam por fabricante da BIOS\: consulte o manual.

:::

:::::

:::branch{id="windows" num="02" title="Windows: Uso, Contas e Recuperação" kicker="ferramentas, permissões, arquivos e reparo" short="Windows" tag="FERRAMENTAS · NTFS" tone="sintaxe"}

### Ferramentas e onde encontrar

| Ferramenta | Para quê | Atalho / comando |
| --- | --- | --- |
| :hl[Gerenciador de Tarefas] | Ver e encerrar processos, desempenho, inicialização | Ctrl+Shift+Esc |
| :hl[Gerenciador de Dispositivos] | Drivers e dispositivos (ícone de alerta = problema) | devmgmt.msc |
| :hl[Gerenciamento de Disco] | Partições, formatação, letra de unidade | diskmgmt.msc |
| :hl[Serviços] | Iniciar, parar e configurar serviços | services.msc |
| :hl[Visualizador de Eventos] | Logs do sistema e dos aplicativos | eventvwr.msc |
| :hl[Configurações / Painel de Controle] | Rede, contas, atualização, impressoras | Win+I |
| :hl[Windows Update] | Atualizações e correções de segurança | Configurações |

### Usuários, grupos e permissões

- Contas **locais** ou de **domínio**; tipos\: administrador e padrão. O **UAC** pede confirmação para ações administrativas.
- Grupos (Administradores, Usuários) facilitam dar permissão a vários usuários.
- Permissões **NTFS**\: Controle total, Modificar, Leitura e execução, Listar conteúdo, Leitura, Gravação.
- Pasta compartilhada em rede\: vale a permissão **mais restritiva** entre compartilhamento e NTFS.

### Sistemas de arquivos e discos

| Sistema | Características |
| --- | --- |
| :hl[NTFS] | Padrão do Windows; permissões, criptografia, arquivos grandes |
| :hl[FAT32] | Compatível com muitos aparelhos; arquivo de no máximo 4 GB |
| :hl[exFAT] | Para pen drives e cartões; sem o limite de 4 GB por arquivo |
| :hl[MBR] | Esquema antigo, com BIOS; discos de até 2 TB e 4 partições primárias |
| :hl[GPT] | Esquema atual, com UEFI; discos grandes e muitas partições |

### Diagnóstico e recuperação

| Recurso | Uso |
| --- | --- |
| :hl[Modo Seguro] | Inicia com o mínimo de drivers, para remover programa ou driver problemático |
| :hl[Restauração do Sistema] | Volta o sistema a um ponto anterior, sem apagar documentos |
| :hl[Redefinir este PC] | Reinstala o Windows, com opção de manter ou remover arquivos |
| :hl[Ambiente de Recuperação (WinRE)] | Reparo de inicialização e prompt de comando, quando o Windows não inicia |
| :hl[sfc /scannow] | Verifica e repara arquivos de sistema |
| :hl[chkdsk] | Verifica erros no disco |
| :hl[DISM] | Repara a imagem do Windows |

:::

::::branch{id="linux" num="03" title="Linux: Estrutura e Comandos" kicker="diretórios, comandos e permissões" short="Linux" tag="COMANDOS · CHMOD" tone="semantica"}

Linux é o núcleo (kernel); as **distribuições** (Ubuntu, Debian, Fedora, Red Hat) o empacotam com ferramentas. Tudo é arquivo, e a raiz da hierarquia é **/**.

| Diretório | Conteúdo |
| --- | --- |
| :hl[/] | Raiz de todo o sistema |
| :hl[/home] | Pastas dos usuários |
| :hl[/root] | Pasta do administrador (root) |
| :hl[/etc] | Arquivos de configuração |
| :hl[/var] | Dados variáveis\: logs (/var/log), filas |
| :hl[/bin, /usr] | Programas e comandos |
| :hl[/tmp] | Arquivos temporários |
| :hl[/dev] | Dispositivos representados como arquivos |

### Comandos básicos

| Comando | Função |
| --- | --- |
| :hl[pwd / ls / cd] | Mostra a pasta atual / lista arquivos / muda de pasta |
| :hl[mkdir / rmdir / rm] | Cria pasta / remove pasta vazia / remove arquivos (rm -r remove pasta) |
| :hl[cp / mv] | Copia / move ou renomeia |
| :hl[cat / less / head / tail] | Exibe arquivos ou trechos (tail -f acompanha um log) |
| :hl[grep] | Procura texto em arquivos |
| :hl[man] | Manual de um comando |
| :hl[sudo] | Executa com privilégios de administrador |
| :hl[chmod / chown] | Altera permissões / dono |
| :hl[ps / top / kill] | Lista processos / monitora / encerra |
| :hl[df -h / du -sh / free -h] | Espaço nos discos / tamanho de pasta / memória |
| :hl[ip a, ping] | Endereços de rede / teste de conectividade |
| :hl[apt (Debian, Ubuntu) / dnf (Fedora, Red Hat)] | Instala, atualiza e remove pacotes |
| :hl[systemctl] | Gerencia serviços (status, start, stop, enable) |

### Permissões (rwx)

Cada arquivo tem três conjuntos\: **dono**, **grupo** e **outros**, cada um com leitura (**r = 4**), escrita (**w = 2**) e execução (**x = 1**). Some os valores\: `chmod 755 arquivo` = dono 7 (rwx), grupo 5 (r-x), outros 5 (r-x). `chmod 644` = rw-r--r--.

:::callout{variant="warn" tag="Pegadinhas"}

Linux diferencia maiúsculas de minúsculas (*Arquivo* e *arquivo* são diferentes). O administrador é o usuário **root**. Extensões não definem se um arquivo é executável\: quem define é a permissão **x**.

:::

::::

:::branch{id="instalacao" num="04" title="Instalação e Configuração de Estações" kicker="do boot ao teste final" short="Instalação|de Estações" tag="BOOT · DRIVERS · IMAGEM"}

Preparar uma estação de trabalho é seguir uma **sequência repetível**, de preferência com checklist.

| Etapa | O que fazer |
| --- | --- |
| :hl[1. Preparar] | Conferir hardware, garantia e identificação patrimonial; ter mídia ou imagem do sistema e licenças |
| :hl[2. Boot] | Acessar BIOS/UEFI, definir a ordem de boot e iniciar pela mídia (pen drive ou rede) |
| :hl[3. Instalar o SO] | Particionar e formatar (GPT em UEFI), instalar e aplicar atualizações |
| :hl[4. Drivers] | Instalar drivers de vídeo, rede, chipset e periféricos (site do fabricante ou Windows Update) |
| :hl[5. Contas e rede] | Nome do computador, entrada no domínio, conta do usuário, IP (automático via DHCP ou fixo), internet, intranet |
| :hl[6. Aplicativos] | Ferramentas de escritório, navegadores, aplicativos institucionais, antivírus, impressoras |
| :hl[7. Correio e sistemas] | Configurar e-mail (IMAP e SMTP) e acesso aos sistemas corporativos |
| :hl[8. Ativação] | Ativar o sistema e os aplicativos, conferir licenciamento |
| :hl[9. Testes] | Ligar, logar, imprimir, acessar rede e sistemas; registrar tudo |

- **Imagem padrão** (clonagem)\: instala e configura uma máquina modelo e replica para as demais, o que economiza tempo e uniformiza a configuração.
- **Impressora**\: instalar o driver, adicionar por porta TCP/IP ou pela rede e imprimir uma página de teste.
- **Licenciamento**\: OEM (vinculada à máquina), por volume (empresas) e por assinatura (Microsoft 365).

:::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Memórias"}

**RAM = volátil** (some ao desligar); **ROM = não volátil** (firmware/BIOS).

:::

:::example{tag="Armazenamento"}

**SSD = sem partes móveis, rápido; HDD = disco mecânico, lento e sensível a impacto.**

:::

:::example{tag="Partições"}

**GPT = Grande** (discos grandes, UEFI); **MBR = antigo** (até 2 TB e 4 partições primárias).

:::

:::example{tag="Permissões no Linux"}

**r = 4, w = 2, x = 1**. Some\: **7** = rwx, **5** = r-x, **6** = rw-, **4** = r--. Ex.\: **755** e **644**.

:::

:::example{tag="Linux"}

**Linux diferencia maiúsculas de minúsculas; o administrador é o root.**

:::

::::

:::::
