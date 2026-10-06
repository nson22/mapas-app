---
title: "Matemática e *Estatística*"
kicker: "Complementar"
description: "Regra de três, porcentagem, média, mediana, moda, desvio padrão, gráficos e tabelas."
tags: ["4 ramos", "conteúdo autoral"]
subject: "raciocinio"
order: 10
origin: "complemento"
manausOrder: 3
lede: "Regra de três, porcentagem, medidas de posição e de dispersão, e leitura de gráficos e tabelas, com contas resolvidas."
diagramNote: "Quatro tópicos numéricos do edital."
center: ["Matemática", "e Estatística"]
---

:::::branch{id="proporcao" num="01" title="Proporcionalidade e Regra de Três" kicker="razão, direta, inversa e partes" short="Regra|de Três" tag="DIRETA · INVERSA"}

Razão é a divisão de duas grandezas (a/b). **Proporção** é a igualdade entre duas razões (a/b = c/d), em que o **produto dos extremos é igual ao produto dos meios** (a·d = b·c).

| Relação | Como reconhecer | Como montar |
| --- | --- | --- |
| :hl[Diretamente proporcional] | Se uma aumenta, a outra também | Razões na **mesma** ordem |
| :hl[Inversamente proporcional] | Se uma aumenta, a outra diminui | Inverta uma das razões (ou multiplique em linha) |

### Regra de três simples

::::grid{cols="2"}

:::example{tag="Direta"}

3 técnicos instalam 18 computadores em um dia. Quantos instalam 5 técnicos no mesmo ritmo?\
3/5 = 18/x → x = 5 · 18 / 3 = **30**.

:::

:::example{variant="alt" tag="Inversa"}

6 técnicos terminam uma tarefa em 10 dias. Em quantos dias 15 técnicos?\
6 · 10 = 15 · x → x = 60 / 15 = **4 dias**.

:::

::::

### Divisão em partes proporcionais

Dividir R$ 1.200 entre A e B na razão 3 \: 5. Total de partes = 3 + 5 = 8; cada parte vale 1.200 / 8 = 150. A recebe 3 · 150 = **R$ 450** e B recebe 5 · 150 = **R$ 750**.

:::callout{variant="warn" tag="Pergunte sempre"}

Se dobra uma grandeza, o que acontece com a outra? Se **também dobra**, é direta. Se **cai pela metade**, é inversa. Mais gente na mesma tarefa\: menos tempo (inversa). Mais gente no mesmo tempo\: mais produção (direta).

:::

:::::

:::::branch{id="porcentagem" num="02" title="Porcentagem, Acréscimos e Descontos" kicker="fatores, variação e pegadinhas" short="Porcentagem" tag="ACRÉSCIMOS · DESCONTOS" tone="sintaxe"}

Porcentagem é uma fração de denominador 100\: **p% = p/100**. Para calcular x% de N, faça N · x / 100.

| Variação | Fator de multiplicação | Exemplo |
| --- | --- | --- |
| :hl[Aumento de 20%] | 1,20 | R$ 2.500 com 8% de aumento\: 2.500 · 1,08 = R$ 2.700 |
| :hl[Desconto de 15%] | 0,85 | R$ 200 com 15% de desconto\: 200 · 0,85 = R$ 170 |
| :hl[Aumentos sucessivos] | Multiplicam-se os fatores | 20% e depois 20%\: 1,2 · 1,2 = 1,44, ou seja, **44%** |
| :hl[Aumento e desconto] | Multiplicam-se os fatores | 10% de aumento e 10% de desconto\: 1,1 · 0,9 = 0,99, ou seja, **queda de 1%** |

### Variação percentual

Variação = (valor novo − valor antigo) / valor antigo. De 80 para 100\: 20/80 = **+25%**. De 100 para 80\: −20/100 = **−20%**. A variação de ida e a de volta **não são iguais**, porque a base muda.

::::grid{cols="2"}

:::example{tag="Achar o valor original"}

Depois de 20% de desconto, o preço ficou R$ 240. Original x\: 0,8 · x = 240 → x = **R$ 300**.

:::

:::example{variant="alt" tag="Pontos percentuais"}

Uma taxa que passa de 10% para 12% subiu **2 pontos percentuais**, o que é um aumento de **20%** na taxa (2/10).

:::

::::

:::callout{variant="warn" tag="Pegadinhas"}

Descontos sucessivos **não somam**\: 10% e 10% de desconto dão 19%, não 20% (0,9 · 0,9 = 0,81). Para achar o original, **divida** pelo fator, não aplique o percentual sobre o preço final.

:::

:::::

:::::branch{id="estatistica" num="03" title="Estatística: Tendência Central e Dispersão" kicker="média, mediana, moda e desvio padrão" short="Estatística|Descritiva" tag="MÉDIA · MEDIANA · DP" tone="semantica"}

### Medidas de tendência central

| Medida | Como calcular | Observação |
| --- | --- | --- |
| :hl[Média aritmética simples] | Soma dos valores dividida pela quantidade | Sensível a valores extremos |
| :hl[Média ponderada] | Soma de (valor · peso) dividida pela soma dos pesos | Cada valor tem importância diferente |
| :hl[Mediana] | Valor central com os dados **ordenados**; se a quantidade for par, média dos dois centrais | Pouco afetada por extremos |
| :hl[Moda] | Valor que **mais se repete** | Pode não existir ou haver mais de uma |

### Medidas de dispersão

| Medida | Como calcular |
| --- | --- |
| :hl[Amplitude] | Maior valor − menor valor |
| :hl[Desvio médio] | Média dos **módulos** das distâncias até a média |
| :hl[Variância] | Média dos **quadrados** das distâncias até a média (populacional\: divide por n; amostral\: divide por n − 1) |
| :hl[Desvio padrão] | Raiz quadrada da variância; tem a mesma unidade dos dados |

### Exemplo completo\: notas 4, 6, 6, 7, 9

| Medida | Cálculo | Resultado |
| --- | --- | --- |
| :hl[Média] | (4 + 6 + 6 + 7 + 9) / 5 = 32 / 5 | **6,4** |
| :hl[Mediana] | Ordenados\: 4, 6, **6**, 7, 9 | **6** |
| :hl[Moda] | O 6 aparece duas vezes | **6** |
| :hl[Amplitude] | 9 − 4 | **5** |
| :hl[Desvio médio] | (2,4 + 0,4 + 0,4 + 0,6 + 2,6) / 5 = 6,4 / 5 | **1,28** |
| :hl[Variância (populacional)] | (5,76 + 0,16 + 0,16 + 0,36 + 6,76) / 5 = 13,2 / 5 | **2,64** |
| :hl[Desvio padrão (populacional)] | Raiz de 2,64 | **≈ 1,62** |

::::grid{cols="2"}

:::example{tag="Média ponderada"}

Notas 8 (peso 2), 6 (peso 3) e 10 (peso 5)\: (8·2 + 6·3 + 10·5) / (2 + 3 + 5) = 84 / 10 = **8,4**.

:::

:::example{variant="alt" tag="Mediana com quantidade par"}

Dados 3, 5, 8, 10\: mediana = (5 + 8) / 2 = **6,5**.

:::

::::

### O que acontece se os dados mudarem

| Operação em todos os valores | Média e mediana | Desvio padrão | Variância |
| --- | --- | --- | --- |
| :hl[Somar uma constante k] | Somam k | **Não muda** | **Não muda** |
| :hl[Multiplicar por k] | Multiplicam por k | Multiplica por \|k\| | Multiplica por k² |

:::callout{variant="warn" tag="Quando usar cada uma"}

Com valores extremos (salários muito altos, por exemplo), a **mediana** representa melhor o "típico" que a média. Dados mais concentrados em torno da média têm **desvio padrão menor**.

:::

:::::

::::branch{id="graficos" num="04" title="Gráficos, Tabelas e Infográficos" kicker="frequências e leitura de dados" short="Gráficos|e Tabelas" tag="HISTOGRAMA · SETORES"}

### Tabelas de frequência

Frequência absoluta (f) é a contagem. Frequência relativa (fr) = f / n, em porcentagem. Frequência acumulada soma as frequências até a classe.

| Categoria | f | fr | Ângulo no gráfico de setores |
| --- | --- | --- | --- |
| :hl[A] | 8 | 20% | 72° |
| :hl[B] | 12 | 30% | 108° |
| :hl[C] | 20 | 50% | 180° |
| :hl[**Total**] | **40** | **100%** | **360°** |

### Tipos de gráfico

| Gráfico | Melhor uso | Atenção |
| --- | --- | --- |
| :hl[Barras / colunas] | Comparar **categorias** | Barras separadas; a altura mostra o valor |
| :hl[Histograma] | Distribuição de dados **contínuos** em classes | Barras **contíguas**; a altura (ou área) indica a frequência da classe |
| :hl[Setores (pizza)] | Partes de um **todo** (100% = 360°) | Cada 1% vale 3,6°; muitas fatias dificultam a leitura |
| :hl[Linhas] | **Evolução no tempo** | Observe a inclinação e a escala do eixo |
| :hl[Dispersão] | Relação entre duas variáveis | Mostra tendência, não causa |
| :hl[Infográfico] | Combina texto, imagens e dados | Leia legenda, unidade e fonte |

:::callout{variant="warn" tag="Cuidados na leitura"}

Verifique o **título, a unidade, a legenda e o eixo** (eixo que não começa do zero exagera diferenças). Distinga **valor absoluto** de **variação percentual** e leia a pergunta\: "quanto" ou "quantos por cento"?

:::

::::

:::::branch{id="mnemonicos" title="Mnemônicos de concurso" kicker="macetes para fixar"}

Mnemônicos e macetes de memorização. Alguns variam de uma fonte para outra; use os que funcionarem para você e confira sempre com o conteúdo do resumo.

::::grid{cols="2"}

:::example{tag="Medidas de posição"}

**MOda = a que MAIS aparece**; **MEDIAna = a do MEIO** (com os dados em ordem); **MÉDIA = soma ÷ quantidade**.

:::

:::example{tag="Porcentagem"}

**“de” vira vezes**\: 20% de 300 = 0,20 × 300. **Aumento\: multiplica por (1 + i); desconto\: por (1 − i).**

:::

:::example{tag="Regra de três"}

**Direta\: as setas apontam no mesmo sentido; inversa\: em sentidos opostos** (na inversa, multiplica-se em linha).

:::

:::example{tag="Descontos sucessivos"}

**Sucessivos NÃO somam\: multiplicam-se os fatores.** 10% e 10% de desconto = 0,9 × 0,9 = 0,81, ou seja, 19%.

:::

:::example{tag="Desvio padrão"}

**Somar constante\: a dispersão não muda. Multiplicar por k\: o desvio padrão multiplica por |k|.**

:::

::::

:::::
