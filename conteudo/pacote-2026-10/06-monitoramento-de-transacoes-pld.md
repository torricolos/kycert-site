---
titulo_seo: "Monitoramento de transações em PLD/FT: o que exige a 3.978"
meta_description: "Como funciona o monitoramento de transações exigido pela Circular 3.978: monitorar, selecionar, analisar e comunicar ao Coaf, com prazos, cenários e erros comuns."
slug: /blog/monitoramento-de-transacoes-pld
h1: "Monitoramento de transações: como cumprir a Circular 3.978 na prática"
eyebrow: "PLD/FT / monitoramento"
data_publicacao: 2026-10-01
atualizado_em: 2026-10-01
tempo_leitura: "9 min"
breadcrumb: "Monitoramento de transações"
tipo: cluster
cluster: AML / PLD-FT
palavra_chave_principal: "monitoramento de transações"
palavras_chave_secundarias: ["monitoramento de transações pld", "monitoramento de operações suspeitas", "circular 3978 monitoramento", "transaction monitoring", "cenários de lavagem de dinheiro", "comunicação ao coaf prazo"]
intencao: "Informacional / comercial"
publico: "Compliance officers, analistas de PLD, gestores de risco de IPs, fintechs, câmbio e PSAVs"
objetivo: "Ranquear para o termo genérico de monitoramento com profundidade normativa; ligar PLD/FT ao KYT"
oportunidade_serp: "SERP dominada por páginas de produto. Poucos resultados detalham o ciclo da Circular 3.978 (arts. 38 a 47), os prazos de 45+45 dias, o manual obrigatório (art. 41) e a vedação de terceirizar a análise (art. 44)."
links_internos_saida: ["/blog/o-que-e-pld-ft", "/blog/o-que-e-kyt", "/blog/o-que-e-kyc", "/blog/contas-laranja-contas-de-passagem", "/blog/pessoa-exposta-politicamente-pep", "/blog/comprovar-pld-ft-fiscalizacao-bacen", "/lp-pld-ft"]
receber_links_de: ["/blog/o-que-e-pld-ft", "/blog/o-que-e-kyt", "/blog/kyc-kyb-kyt-diferencas", "/blog/contas-laranja-contas-de-passagem", "/blog/comprovar-pld-ft-fiscalizacao-bacen"]
cta_primario: { texto: "Ver dossiê de exemplo", href: "/dossie-exemplo" }
cta_secundario: { texto: "Ver como a kycert estrutura a trilha de PLD/FT", href: "/lp-pld-ft" }
imagem: "Fluxo em quatro etapas com ícones: Monitorar → Selecionar → Analisar (dossiê) → Comunicar (Coaf), com marcadores de prazo '45 dias', '45 dias', 'D+1'."
imagem_alt: "Ciclo de monitoramento de transações da Circular 3.978: monitorar, selecionar, analisar em dossiê e comunicar ao Coaf, com os prazos de cada etapa"
schema: ["Article", "FAQPage", "BreadcrumbList"]
fontes:
  - "Circular BCB nº 3.978/2020, arts. 38 a 55 e 62: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&numero=3978"
  - "Lei nº 9.613/1998, art. 11: https://www.planalto.gov.br/ccivil_03/leis/l9613.htm"
---

# Monitoramento de transações: como cumprir a Circular 3.978 na prática

**Monitoramento de transações é o processo contínuo de acompanhar as operações dos clientes para identificar as que podem indicar lavagem de dinheiro ou financiamento do terrorismo.** Para as instituições autorizadas pelo Banco Central, a [Circular 3.978/2020](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&numero=3978) divide o processo em três etapas obrigatórias, cada uma com prazo:

- **monitorar e selecionar**;
- **analisar**;
- **comunicar ao Coaf**.

Ter uma ferramenta que gera alertas não basta. A norma exige que cada etapa tenha critérios escritos, prazo cumprido e decisão registrada.

## O ciclo da Circular 3.978

| Etapa | O que é | Prazo | Base |
|---|---|---|---|
| Monitoramento e seleção | Identificar operações e situações que possam indicar suspeita | Até 45 dias da ocorrência | Art. 39 |
| Análise | Caracterizar ou não a operação selecionada como suspeita, em dossiê | Até 45 dias da seleção | Art. 43 |
| Decisão de comunicar | Fundamentada e registrada no dossiê | Dentro do prazo de análise | Art. 48, § 1º |
| Comunicação ao Coaf | Envio pelo Siscoaf, sem dar ciência ao cliente | Até o dia útil seguinte à decisão | Arts. 48, § 2º, e 50 |

Os procedimentos valem também para **propostas de operação**, não só para as operações concluídas (art. 38, § 2º). Uma tentativa recusada também pode ser comunicável.

## O que precisa ser monitorado

O art. 39 lista situações que devem receber atenção especial. Elas são a base mínima de qualquer conjunto de regras:

- **Burla dos controles:** operações que, pela habitualidade, valor ou forma, tentam escapar da identificação, do registro ou do monitoramento. O exemplo clássico é o fracionamento.
- **Espécie com indício de ocultação:** depósitos, saques ou provisionamentos em dinheiro com sinais de dissimulação.
- **Incompatibilidade com a capacidade financeira:** movimentação acima do que a renda, o faturamento ou o patrimônio explicam.
- **PEP:** operações com [pessoas expostas politicamente](/blog/pessoa-exposta-politicamente-pep) brasileiras ou estrangeiras e com seus familiares e colaboradores.
- **Beneficiário final não identificável.**
- **Países com deficiências estratégicas** apontadas pelo Gafi.
- **Cadastro que não se consegue atualizar.**
- **Indícios de financiamento do terrorismo.**

Repare que quase todos os itens dependem de informação do [KYC](/blog/o-que-e-kyc). Sem renda, faturamento, condição de PEP e beneficiário final no cadastro, a regra de "incompatibilidade" não tem com o que comparar.

## Regras, cenários e parâmetros

A norma exige um **manual específico, aprovado pela diretoria** (art. 38, § 3º, IV), com:

- a periodicidade de execução do monitoramento para cada tipo de operação;
- os **parâmetros, variáveis, regras e cenários** usados (art. 41).

Exemplos de cenários comuns:

| Cenário | O que detecta | Dado necessário |
|---|---|---|
| Fracionamento | Várias operações logo abaixo de um limite em curto período | Histórico transacional |
| Passagem rápida | Recurso entra e sai em pouco tempo, sem permanecer na conta | Entradas e saídas por janela de tempo |
| Incompatibilidade de renda | Volume mensal muito acima da renda ou faturamento declarado | KYC atualizado |
| Concentração de contrapartes | Muitas origens diferentes para um único destino, ou o inverso | Dados de contraparte |
| Mudança brusca de perfil | Conta dormente que passa a movimentar alto volume | Histórico e cadastro |
| Jurisdição de risco | Origem ou destino em país das listas do Gafi | Dados de contraparte e país |
| Exposição on-chain | Depósito ou saque ligado a endereço de risco | Análise de carteiras ([KYT](/blog/o-que-e-kyt)) |

Os cenários de passagem rápida e concentração de contrapartes são os que mais revelam [contas laranja e contas de passagem](/blog/contas-laranja-contas-de-passagem).

## A análise: onde a maioria dos processos falha

A etapa de análise tem três exigências que pegam muitas operações:

1. **Dossiê obrigatório.** Toda análise é formalizada em dossiê, **haja ou não comunicação ao Coaf** (art. 43, § 2º). Alertas encerrados como "falso positivo" sem justificativa registrada são um achado recorrente de fiscalização.
2. **A análise não pode ser terceirizada.** É vedado contratar terceiros para a análise que caracteriza a suspeita, e também é vedado fazê-la no exterior (art. 44). Fornecedores podem prestar **serviços auxiliares**, como sistema, dados e triagem, mas a decisão é da instituição.
3. **Recursos no país.** A instituição precisa ter, no Brasil, pessoas e competências para a análise (art. 45).

## Comunicação ao Coaf

- **Suspeitas:** comunicadas até o dia útil seguinte à decisão. A decisão precisa estar fundamentada no dossiê (art. 48).
- **Comunicações automáticas:** operações em espécie iguais ou superiores a R$ 50 mil e provisionamentos de saque nesse valor, até o dia útil seguinte (art. 49).
- **Sigilo:** nada pode ser informado ao cliente ou a terceiros (art. 50; Lei 9.613, art. 11).
- **Marcadores obrigatórios:** a comunicação indica se a pessoa é PEP ou ligada a PEP, entre outras condições (art. 53).
- **Declaração negativa:** quem não comunicou nada no ano declara isso em até 10 dias úteis após o encerramento do ano (art. 54).

## Calibração e efetividade

Um monitoramento com milhares de alertas por mês e dois analistas não cumpre a norma. Os prazos de 45 dias vão estourar. O ajuste de regras é parte da obrigação:

- medir a taxa de alertas que viram dossiê com comunicação;
- revisar cenários que só geram ruído e documentar o motivo da mudança;
- testar se cenários relevantes estão faltando.

A **avaliação de efetividade anual** (art. 62) precisa avaliar o monitoramento, com metodologia, testes e deficiências encontradas. Um plano de ação acompanha as correções (art. 65).

## Monitoramento em cripto

Para as PSAVs, o monitoramento segue a mesma lógica e ganha dados específicos:

- exposição on-chain de carteiras;
- dados de originador e beneficiário da [Travel Rule](/blog/travel-rule-brasil);
- a partir de 2027, a [retenção de 24h da Res. BCB 584](/blog/resolucao-bcb-584-retencao-24h-cripto) para envios ao exterior e a carteiras autocustodiadas.

A Res. BCB 520 manda as PSAVs adequarem controles internos a esse monitoramento e manterem os registros por cinco anos (art. 45).

## Perguntas frequentes

### O que é monitoramento de transações?
É o acompanhamento contínuo das operações dos clientes para identificar sinais de lavagem de dinheiro ou financiamento do terrorismo, com seleção, análise e, quando for o caso, comunicação ao Coaf.

### Qual o prazo para analisar um alerta?
Pela Circular 3.978, até 45 dias da seleção da operação. A seleção também tem prazo de até 45 dias da ocorrência.

### Preciso documentar alertas que não foram comunicados?
Sim. A análise deve ser formalizada em dossiê independentemente da comunicação ao Coaf (art. 43, § 2º).

### Posso terceirizar o monitoramento?
Pode contratar sistemas e serviços auxiliares. A análise que caracteriza a suspeita não pode ser feita por terceiros nem no exterior (art. 44).

### Como saber se meu monitoramento é efetivo?
A Circular 3.978 exige uma avaliação de efetividade anual, documentada em relatório, com testes e plano de ação para as deficiências (arts. 62 a 65).

## Conclusão

Monitoramento de transações é um ciclo com prazo e prova: monitorar, selecionar, analisar em dossiê e comunicar. As regras só funcionam bem com um cadastro bom por trás. Sem renda, PEP e beneficiário final atualizados, os cenários mais importantes da Circular 3.978 não têm com o que comparar.

> **O monitoramento precisa de um cliente bem conhecido.** A kycert mantém o perfil de risco de cada cliente (identificação, PEP, sanções e mídia adversa) num dossiê pronto para ser usado na análise de alertas.
> [Ver dossiê de exemplo](/dossie-exemplo) · [Ver como funciona](/lp-pld-ft)

**Leia também:** [O que é PLD/FT](/blog/o-que-e-pld-ft) · [O que é KYT](/blog/o-que-e-kyt) · [Como comprovar PLD/FT na fiscalização](/blog/comprovar-pld-ft-fiscalizacao-bacen)
