---
title: "Lógica e *Argumentação*"
kicker: "Complementar"
description: "Proposições, tabela-verdade, negações, equivalências, quantificadores e validade de argumentos."
tags: ["4 ramos", "conteúdo autoral"]
subject: "raciocinio"
order: 8
origin: "complemento"
manausOrder: 1
lede: "Do valor de uma frase à validade de um argumento: conectivos, negações, equivalências, quantificadores e formas de inferência."
diagramNote: "Quatro tópicos de lógica proposicional e argumentação."
center: ["Lógica", "e Argumentação"]
---

::::branch{id="conectivos" num="01" title="Proposições e Conectivos" kicker="tabela-verdade e valores lógicos" short="Proposições|e Conectivos" tag="TABELA-VERDADE"}

**Proposição** é uma sentença declarativa que pode ser julgada **verdadeira (V)** ou **falsa (F)**. Não são proposições\: perguntas, ordens, exclamações e sentenças abertas (com variável, como "x + 1 = 5").

| Símbolo | Conectivo | Leitura | Só é falso quando... |
| --- | --- | --- | --- |
| :hl[~p] | Negação | não p | p é verdadeiro |
| :hl[p ∧ q] | Conjunção | p e q | pelo menos um é falso |
| :hl[p ∨ q] | Disjunção | p ou q | **os dois** são falsos |
| :hl[p ⊻ q] | Disjunção exclusiva | ou p ou q | os dois têm o **mesmo** valor |
| :hl[p → q] | Condicional | se p, então q | p é V e q é F |
| :hl[p ↔ q] | Bicondicional | p se e somente se q | p e q têm valores **diferentes** |

### Tabela-verdade

| p | q | p ∧ q | p ∨ q | p ⊻ q | p → q | p ↔ q |
| --- | --- | --- | --- | --- | --- | --- |
| V | V | V | V | F | V | V |
| V | F | F | V | V | F | F |
| F | V | F | V | V | V | F |
| F | F | F | F | F | V | V |

- Com **n** proposições simples, a tabela tem **2:sup[n]** linhas (2 proposições\: 4; 3 proposições\: 8).
- **Tautologia**\: sempre V. **Contradição**\: sempre F. **Contingência**\: depende dos valores.

:::callout{variant="warn" tag="Condicional: a linha que mais cai"}

Falso condicional só ocorre com **antecedente verdadeiro e consequente falso**. Se o antecedente é falso, o condicional é verdadeiro, seja qual for o consequente.

:::

::::

:::::branch{id="equivalencias" num="02" title="Negações e Equivalências" kicker="De Morgan, contrapositiva e condições" short="Negações|e Equivalências" tag="DE MORGAN · CONTRAPOSITIVA" tone="sintaxe"}

### Negações

| Proposição | Negação |
| --- | --- |
| :hl[p ∧ q] | ~p ∨ ~q (De Morgan) |
| :hl[p ∨ q] | ~p ∧ ~q (De Morgan) |
| :hl[p → q] | **p ∧ ~q** |
| :hl[p ↔ q] | p ⊻ q (ou exclusivo) |
| :hl[~p] | p |

### Equivalências do condicional

| Forma | É equivalente a p → q? |
| --- | --- |
| :hl[~q → ~p (contrapositiva)] | **Sim** |
| :hl[~p ∨ q] | **Sim** |
| :hl[q → p (recíproca)] | Não |
| :hl[~p → ~q (inversa)] | Não |

::::grid{cols="2"}

:::example{tag="Exemplo: condicional"}

"Se chove, então a rua molha."\
**Contrapositiva**\: se a rua não molha, então não chove.\
**Também equivale**\: não chove ou a rua molha.

:::

:::example{variant="alt" tag="Exemplo: negação"}

Negar "Se chove, então a rua molha" é **"Chove e a rua não molha"**.

:::

::::

:::callout{tag="Suficiente e necessária"}

Em p → q, **p é condição suficiente** para q e **q é condição necessária** para p. "p somente se q" e "q se p" também significam p → q.

:::

:::callout{variant="warn" tag="Erros clássicos"}

Negar "p ou q" trocando por "não p ou não q" (o certo é "não p **e** não q"). Negar o condicional escrevendo "se p, então não q". Confundir contrapositiva com recíproca.

:::

:::::

:::::branch{id="quantificadores" num="03" title="Quantificadores e Diagramas" kicker="todo, algum, nenhum e suas negações" short="Quantificadores" tag="TODO · ALGUM · NENHUM" tone="semantica"}

| Quantificador | Significado | Negação |
| --- | --- | --- |
| :hl[Todo A é B] | Todos os A estão em B | **Algum A não é B** |
| :hl[Algum A é B] | Pelo menos um A é B (pode ser todos) | **Nenhum A é B** |
| :hl[Nenhum A é B] | A e B não têm elemento comum | **Algum A é B** |
| :hl[Algum A não é B] | Pelo menos um A está fora de B | **Todo A é B** |

### Diagramas

::::grid{cols="3"}

:::example{tag="Todo A é B"}

O conjunto A fica **dentro** de B.

:::

:::example{variant="alt" tag="Algum A é B"}

A e B têm **interseção não vazia**.

:::

:::example{variant="gold" tag="Nenhum A é B"}

A e B são **disjuntos**.

:::

::::

:::callout{variant="warn" tag="Pegadinhas"}

"Algum" significa **pelo menos um**, então "algum A é B" não exclui "todo A é B". "Nem todo A é B" equivale a "algum A não é B". A negação de "todo" nunca é "nenhum".

:::

:::::

:::branch{id="argumentos" num="04" title="Argumentos e Validade" kicker="premissas, conclusão e falácias" short="Argumentos|e Validade" tag="MODUS PONENS · FALÁCIAS"}

**Argumento** é um conjunto de premissas e uma conclusão. Ele é **válido** quando, sendo as premissas verdadeiras, a conclusão é **necessariamente** verdadeira. Validade não é verdade\: um argumento pode ser válido com premissas falsas.

| Forma | Estrutura | Válida? |
| --- | --- | --- |
| :hl[Modus ponens] | p → q; p; logo q | **Sim** |
| :hl[Modus tollens] | p → q; ~q; logo ~p | **Sim** |
| :hl[Silogismo hipotético] | p → q; q → r; logo p → r | **Sim** |
| :hl[Silogismo disjuntivo] | p ∨ q; ~p; logo q | **Sim** |
| :hl[Afirmação do consequente] | p → q; q; logo p | Não (falácia) |
| :hl[Negação do antecedente] | p → q; ~p; logo ~q | Não (falácia) |

### Como testar validade

- **Atribuição de valores**\: suponha todas as premissas verdadeiras e deduza o valor de cada proposição simples; veja se a conclusão sai verdadeira.
- **Por absurdo**\: tente deixar a conclusão falsa com todas as premissas verdadeiras; se conseguir, o argumento é inválido.
- **Diagramas**, para premissas com todo, algum e nenhum.

| Premissas | Conclusão | Válido? |
| --- | --- | --- |
| Todo A é B; todo B é C | Todo A é C | Sim |
| Todo A é B; algum B é C | Algum A é C | Não (o B que é C pode estar fora de A) |
| Nenhum A é B; algum C é A | Algum C não é B | Sim |

:::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Condicional: quando é falso"}

**“Vera Fischer é Falsa”**\: **V** → **F** = **F**. O condicional só é falso com antecedente verdadeiro e consequente falso.

:::

:::example{tag="Negação do condicional"}

**MANE**\: **Ma**ntém a primeira **e** **Ne**ga a segunda. ~(p → q) = p ∧ ~q.

:::

:::example{tag="Contrapositiva"}

**NI**\: **N**ega e **I**nverte. p → q ≡ ~q → ~p.

:::

:::example{tag="Outra equivalência"}

**NEY MA**\: **Ne**ga a primeira **ou** (Y) **Ma**ntém a segunda. p → q ≡ ~p ∨ q.

:::

:::example{tag="Suficiente e necessária"}

**Em p → q, p é suficiente e q é necessária.**

:::

:::example{tag="E, OU e bicondicional"}

**E só é verdadeiro se todos forem V; OU só é falso se todos forem F; bicondicional é V quando os valores são iguais.**

:::

:::example{tag="Quantificadores"}

**Nega TODO = ALGUM NÃO; nega ALGUM = NENHUM; nega NENHUM = ALGUM.** “Nem todo” = algum não.

:::

::::

:::::
