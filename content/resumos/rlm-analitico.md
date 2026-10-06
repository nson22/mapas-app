---
title: "Raciocínio *Analítico*"
kicker: "Complementar"
description: "Relações arbitrárias, verdades e mentiras, sequências, orientação espacial e temporal, analogias."
tags: ["5 ramos", "conteúdo autoral"]
subject: "raciocinio"
order: 9
origin: "complemento"
manausOrder: 2
lede: "Resolver o que não tem fórmula pronta: deduções, verdades e mentiras, sequências, orientação e analogias."
diagramNote: "Cinco tópicos do edital ligados ao raciocínio analítico."
center: ["Raciocínio", "Analítico"]
---

::::branch{id="relacoes" num="01" title="Relações Arbitrárias e Deduções" kicker="grade lógica e eliminação" short="Relações|e Deduções" tag="GRADE LÓGICA"}

São problemas em que pessoas, lugares, objetos ou eventos (muitas vezes fictícios) se relacionam por pistas. O objetivo é **deduzir novas informações** a partir do que foi dado. O método é organizar tudo em uma **grade** e eliminar possibilidades.

| Passo | O que fazer |
| --- | --- |
| :hl[1. Listar] | Identificar os grupos (pessoas, cidades, profissões) e quantos elementos tem cada um |
| :hl[2. Montar a grade] | Uma linha por pessoa, uma coluna por característica |
| :hl[3. Pistas diretas] | Marcar o que é afirmado (✓) e o que é negado (✗) |
| :hl[4. Eliminar] | Cada elemento pertence a **uma só** pessoa\: ao marcar ✓, risque o resto da linha e da coluna |
| :hl[5. Reler] | Com as novas marcações, use as pistas indiretas |
| :hl[6. Conferir] | Verificar se a resposta satisfaz todas as pistas |

### Exemplo resolvido

Ana, Bruno e Carla moram, cada um, em uma cidade diferente\: Manaus, Belém ou Recife. Pistas\: (1) Ana não mora em Belém. (2) Bruno não mora em Manaus nem em Recife. (3) Carla não mora em Manaus.

|  | Manaus | Belém | Recife |
| --- | --- | --- | --- |
| :hl[Ana] | **✓** | ✗ (pista 1) | ✗ |
| :hl[Bruno] | ✗ (pista 2) | **✓** | ✗ (pista 2) |
| :hl[Carla] | ✗ (pista 3) | ✗ | **✓** |

- Pela pista 2, Bruno só pode morar em Belém.
- Como Belém é de Bruno, Ana (que não mora em Belém) fica com Manaus ou Recife; Carla não mora em Manaus, então Carla mora em Recife e Ana em Manaus.

:::callout{tag="Dica"}

Comece pela pista que **mais restringe** (a que deixa uma única possibilidade). Em geral ela destrava as outras.

:::

::::

::::branch{id="verdades" num="02" title="Verdades e Mentiras" kicker="suposição e contradição" short="Verdades|e Mentiras" tag="SUPOSIÇÃO" tone="sintaxe"}

Nesses problemas cada personagem afirma algo, e sabe-se que **alguns dizem a verdade e outros mentem**. A técnica é **supor** e testar a consistência.

- Suponha que um personagem diz a verdade; siga as consequências.
- Se aparecer uma **contradição**, a suposição era falsa; teste a oposta.
- Quem **mente** tem toda a frase falsa (a negação da frase).
- Confirme que a solução encontrada é **única**.

### Exemplo resolvido

Ana diz\: "Bia mente." Bia diz\: "Caio mente." Caio diz\: "Ana e Bia mentem." Quem diz a verdade?

- **Supondo Ana verdadeira**\: Bia mente, então a fala de Bia é falsa e Caio diz a verdade. Mas Caio afirma que Ana mente, o que contradiz a suposição.
- **Supondo Ana mentirosa**\: então "Bia mente" é falso, e Bia diz a verdade. Como Bia diz a verdade, Caio mente. Conferindo\: a fala de Caio ("Ana e Bia mentem") é falsa, já que Bia diz a verdade. Sem contradição.
- Resposta\: **só Bia** diz a verdade.

:::callout{variant="warn" tag="Cuidado com a negação"}

Se alguém que mente diz "Ana e Bia mentem", o fato real é a negação\: **pelo menos uma das duas diz a verdade**, e não que as duas dizem a verdade.

:::

::::

:::branch{id="sequencias" num="03" title="Sequências Numéricas e de Figuras" kicker="PA, PG e padrões" short="Sequências" tag="PA · PG · FIGURAS" tone="semantica"}

Para achar o próximo termo, procure a **regra**\: diferença constante, razão constante, diferenças que crescem, intercalação de duas sequências ou padrão de figuras.

| Tipo | Como reconhecer | Exemplo | Próximo |
| --- | --- | --- | --- |
| :hl[PA (progressão aritmética)] | Soma-se um valor constante r | 3, 7, 11, 15 | 19 |
| :hl[PG (progressão geométrica)] | Multiplica-se por uma razão q | 2, 6, 18, 54 | 162 |
| :hl[Quadrados] | Diferenças ímpares\: 3, 5, 7... | 1, 4, 9, 16 | 25 |
| :hl[Diferenças crescentes] | Diferenças 1, 2, 3, 4... | 1, 2, 4, 7, 11 | 16 |
| :hl[Fibonacci] | Cada termo é a soma dos dois anteriores | 1, 1, 2, 3, 5, 8 | 13 |
| :hl[Números primos] | Divisíveis só por 1 e por si | 2, 3, 5, 7, 11 | 13 |
| :hl[Duas sequências intercaladas] | Termos pares e ímpares seguem regras distintas | 2, 5, 4, 10, 6, 15 | 8 |
| :hl[Potências] | Multiplicação sucessiva | 1, 2, 4, 8, 16 | 32 |

### Fórmulas de PA e PG

|  | Termo geral | Soma dos n primeiros termos |
| --- | --- | --- |
| :hl[PA] | a:sub[n] = a:sub[1] + (n − 1) · r | S:sub[n] = (a:sub[1] + a:sub[n]) · n / 2 |
| :hl[PG] | a:sub[n] = a:sub[1] · q:sup[(n − 1)] | S:sub[n] = a:sub[1] · (q:sup[n] − 1) / (q − 1), com q ≠ 1 |

- **Sequências de letras**\: use a posição no alfabeto (A = 1, B = 2...). Ex.\: A, C, E, G → I (saltos de 2).
- **Sequências de figuras**\: observe rotação, reflexão, acréscimo ou retirada de elementos e contagem de lados ou pontos.

:::

:::::branch{id="orientacao" num="04" title="Orientação Espacial e Temporal" kicker="direções, calendário e relógio" short="Orientação|Espacial e Temporal" tag="CALENDÁRIO · RELÓGIO"}

### Orientação espacial

- Giro de **90°** à direita ou à esquerda; **180°** é meia-volta.
- Anote as direções em um desenho (N, S, L, O) e acompanhe cada movimento.
- Movimentos perpendiculares formam triângulo retângulo\: use **Pitágoras** (c² = a² + b²).
- **Lateralidade**\: a direita de quem está de frente para você é a sua esquerda.

::::grid{cols="2"}

:::example{tag="Exemplo 1"}

Uma pessoa olha para o norte, vira 90° à direita e depois 180°. Para onde olha? Norte → direita = leste → meia-volta = **oeste**.

:::

:::example{variant="alt" tag="Exemplo 2"}

Anda 3 km para leste e 4 km para norte. Distância até o ponto de partida\: 3² + 4² = 25, logo **5 km**.

:::

::::

### Orientação temporal

- **Dias da semana** repetem a cada 7 dias\: use o **resto da divisão por 7**. Se hoje é terça-feira, daqui a 100 dias\: 100 ÷ 7 deixa resto 2, então **quinta-feira**.
- Ano comum\: 365 dias (52 semanas + 1 dia). Ano bissexto\: 366 (52 semanas + 2 dias).
- **Bissexto**\: divisível por 4, exceto os anos de século que não sejam divisíveis por 400 (2000 foi; 2100 não será).
- **Relógio**\: o ponteiro dos minutos anda 6° por minuto; o das horas, 0,5° por minuto. Ângulo = |30·h − 5,5·m|. Às 3h00\: |90 − 0| = 90°. Às 2h30\: |60 − 165| = 105°.
- Ordem de eventos\: monte uma **linha do tempo** com "antes" e "depois".

:::::

:::::branch{id="conceitos" num="05" title="Conceitos, Analogias e Raciocínio Verbal" kicker="intrusos, analogias e códigos" short="Conceitos|e Verbal" tag="ANALOGIAS · CÓDIGOS" tone="sintaxe"}

### Formação de conceitos e discriminação de elementos

- **Conceito** é o que agrupa elementos com **propriedades em comum**; descreva por gênero (categoria maior) e diferença (o que distingue).
- **Discriminação**\: perceber semelhanças e diferenças. Em questões de "intruso", descubra o critério que une a maioria e indique quem foge dele.
- Teste mais de um critério\: cor, forma, função, quantidade, categoria.

::::grid{cols="2"}

:::example{tag="Intruso"}

Cão, gato, leão, mesa. O critério é "ser animal"\: **mesa** é o intruso.

:::

:::example{variant="alt" tag="Intruso com dois critérios"}

2, 4, 7, 8\: o critério "par" exclui o **7**.

:::

::::

### Raciocínio verbal\: analogias

| Relação | Exemplo |
| --- | --- |
| :hl[Instrumento e função] | caneta \: escrever \:\: faca \: cortar |
| :hl[Parte e todo] | página \: livro \:\: dedo \: mão |
| :hl[Causa e efeito] | chuva \: enchente \:\: fogo \: queimadura |
| :hl[Gênero e espécie] | animal \: gato \:\: flor \: rosa |
| :hl[Antônimos] | alto \: baixo \:\: rápido \: lento |
| :hl[Profissional e produto] | padeiro \: pão \:\: pintor \: quadro |

:::callout{tag="Método"}

Descubra a relação do **primeiro par** e aplique a **mesma relação, no mesmo sentido**, ao segundo par.

:::

### Códigos e letras

- **Cifra de deslocamento**\: cada letra é trocada pela que está a k posições à frente. Com k = 1, CASA → DBTB.
- Palavras e posições no alfabeto (A = 1, B = 2...)\: "MAR" = 13 + 1 + 18 = 32.
- Ordem alfabética, anagramas e letras em posições específicas também aparecem.

:::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Sequências"}

**PA soma; PG multiplica.** PA\: a:sub[n] = a:sub[1] + (n − 1)·r. PG\: a:sub[n] = a:sub[1]·q:sup[n−1].

:::

:::example{tag="Dias da semana"}

**Divida por 7 e olhe o resto.** Se hoje é terça, daqui a 100 dias\: resto 2, então quinta.

:::

:::example{tag="Ângulo do relógio"}

**|30·h − 5,5·m|**. Às 3h00 são 90°.

:::

:::example{tag="Verdades e mentiras"}

**Suponha e teste\: se der contradição, a suposição era falsa.**

:::

::::

:::::
