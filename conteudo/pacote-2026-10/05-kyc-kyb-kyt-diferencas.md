---
titulo_seo: "KYC, KYB e KYT: diferenças e como se conectam no compliance"
meta_description: "KYC avalia a pessoa, KYB a empresa e KYT a transação. Veja as diferenças, quando aplicar cada um e como os três se conectam no onboarding e no monitoramento."
slug: /blog/kyc-kyb-kyt-diferencas
h1: "KYC, KYB e KYT: qual a diferença e como os três se conectam"
eyebrow: "KYC / fundamentos"
data_publicacao: 2026-10-01
atualizado_em: 2026-10-01
tempo_leitura: "7 min"
breadcrumb: "KYC, KYB e KYT"
tipo: cluster
cluster: KYC
palavra_chave_principal: "diferença entre kyc kyb e kyt"
palavras_chave_secundarias: ["kyc e kyb", "kyc vs kyt", "o que é kyb", "know your business", "kyc kyb kyt"]
intencao: "Informacional (comparativa)"
publico: "Compliance, operações e produto de fintechs, PSAVs, câmbio e IPs"
objetivo: "Capturar buscas comparativas e distribuir links para os três pilares e para o post de UBO"
oportunidade_serp: "Resultados comparam só KYC x KYB ou só KYC x KYT, quase sempre traduzidos. Falta a comparação dos três, com base normativa brasileira e um exemplo de fluxo integrado (cliente PJ de uma exchange)."
links_internos_saida: ["/blog/o-que-e-kyc", "/blog/o-que-e-kyt", "/blog/beneficiario-final-ubo-kyb", "/blog/abertura-conta-fintech-kyb-escala", "/blog/monitoramento-de-transacoes-pld", "/blog/pessoa-exposta-politicamente-pep", "/produto"]
receber_links_de: ["/blog/o-que-e-kyc", "/blog/o-que-e-kyt", "/blog/beneficiario-final-ubo-kyb", "/blog/abertura-conta-fintech-kyb-escala"]
cta_primario: { texto: "Ver dossiê de exemplo", href: "/dossie-exemplo" }
cta_secundario: { texto: "Verificação de PJ e beneficiário final", href: "/produto/kyb" }
imagem: "Três círculos sobrepostos (diagrama de Venn) rotulados KYC (pessoa), KYB (empresa) e KYT (transação), com a interseção rotulada 'perfil de risco'."
imagem_alt: "Diagrama comparando KYC, KYB e KYT: pessoa, empresa e transação convergindo no perfil de risco do cliente"
schema: ["Article", "FAQPage", "BreadcrumbList"]
fontes:
  - "Circular BCB nº 3.978/2020: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&numero=3978"
  - "Resolução BCB nº 520/2025: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=520"
---

# KYC, KYB e KYT: qual a diferença e como os três se conectam

**KYC avalia a pessoa, KYB avalia a empresa e KYT avalia a transação.** As três siglas descrevem partes do mesmo dever: saber com quem a instituição faz negócio e o que passa por ela. Na regulação brasileira, nenhuma das três é um processo isolado. Todas alimentam o mesmo perfil de risco do cliente que a Circular 3.978 exige.

## A diferença em uma tabela

| | KYC | KYB | KYT |
|---|---|---|---|
| Significado | Know Your Customer | Know Your Business | Know Your Transaction |
| Objeto | Cliente pessoa natural (e o cliente em geral) | Cliente pessoa jurídica | Cada operação ou transação |
| Pergunta central | Essa pessoa é quem diz ser? Qual o seu risco? | Quem controla essa empresa? Ela existe e faz o que diz? | De onde vem e para onde vai esse recurso? |
| Momento principal | Onboarding e atualização | Onboarding e atualização | Contínuo, a cada transação |
| Dados típicos | CPF, documento, endereço, renda, patrimônio, PEP | CNPJ, contrato social, quadro societário, beneficiário final, administradores | Valor, contraparte, origem e destino, endereços de carteira, padrão de comportamento |
| Base no Brasil | Circular 3.978, arts. 13 a 23 e 27 | Circular 3.978, arts. 21, 24 e 25 | Circular 3.978, arts. 38 a 43; Res. BCB 520, arts. 34, 44 e 90 |

## KYC: conhecer o cliente

[KYC](/blog/o-que-e-kyc) é o processo de **identificar, qualificar e classificar** o cliente. Inclui:

- validar a identidade;
- entender ocupação, renda e patrimônio;
- verificar se é [pessoa exposta politicamente](/blog/pessoa-exposta-politicamente-pep);
- enquadrá-lo numa categoria de risco.

O termo é usado tanto no sentido amplo (todo o "conheça seu cliente") quanto no sentido estrito (cliente pessoa física).

## KYB: conhecer a empresa

KYB é o KYC aplicado a pessoas jurídicas. A diferença está na profundidade:

- **Existência e atividade:** CNPJ ativo, atividade compatível com o que a empresa diz fazer, endereço real.
- **Estrutura societária:** quem são os sócios, inclusive outras empresas.
- **Beneficiário final:** a Circular 3.978 exige analisar a cadeia societária **até a pessoa natural** que controla ou se beneficia da empresa (art. 24). A instituição deve fixar um percentual mínimo de participação para essa identificação, que **não pode passar de 25%** (art. 25). Detalhamos isso em [beneficiário final (UBO)](/blog/beneficiario-final-ubo-kyb).
- **Administradores e representantes:** passam pelos mesmos procedimentos de identificação e qualificação (art. 21).

Na prática, KYB é KYC em camadas: a empresa, depois as empresas que a controlam e, no fim, as pessoas.

## KYT: conhecer a transação

[KYT](/blog/o-que-e-kyt) acompanha o que o cliente faz depois de aprovado. No mercado tradicional, é o [monitoramento de transações](/blog/monitoramento-de-transacoes-pld): regras e cenários que detectam operações incompatíveis com o perfil, fracionamento, passagem rápida de recursos.

Em cripto, o KYT inclui a **análise on-chain**: verificar se o endereço de origem ou de destino está ligado a sanções, misturadores, golpes ou mercados ilícitos.

## Como os três se conectam

O ponto que costuma passar despercebido: **KYT sem KYC gera alertas que não se consegue analisar**. Para decidir se uma transação é suspeita, a Circular 3.978 manda considerar a compatibilidade com a capacidade financeira do cliente (art. 39, I, "c"), a condição de PEP (art. 39, I, "d" e "e") e a possibilidade de identificar o beneficiário final (art. 39, I, "f"). Todas essas informações vêm do KYC e do KYB.

O caminho também é o inverso. O KYT alimenta o KYC: um padrão transacional fora do perfil é gatilho para revisar o cadastro e reclassificar o risco.

### Exemplo: cliente pessoa jurídica numa exchange

Uma importadora quer abrir conta numa PSAV para comprar USDT e pagar fornecedores no exterior.

1. **KYB:** valida CNPJ e atividade, mapeia o quadro societário até as pessoas naturais, identifica administradores e procuradores.
2. **KYC dos envolvidos:** identifica e qualifica os beneficiários finais e representantes, com checagem de PEP, sanções e mídia adversa.
3. **Classificação:** o risco da empresa considera a atividade, o país dos fornecedores, o volume esperado e o resultado das checagens.
4. **KYT contínuo:** cada compra e envio de USDT é avaliado. Destino, exposição da carteira e compatibilidade com o faturamento entram na análise. Envios ao exterior ou a carteiras autocustodiadas acima dos limites ficam sujeitos à [retenção de 24h da Res. BCB 584](/blog/resolucao-bcb-584-retencao-24h-cripto) a partir de 2027.
5. **Retroalimentação:** se a empresa passa a enviar valores muito acima do faturamento declarado, o alerta de KYT dispara a revisão do KYB.

## Erros comuns

- **Tratar KYB como "KYC com CNPJ".** Parar no contrato social sem chegar ao beneficiário final.
- **Fazer KYT sem consultar o perfil do cliente.** As regras ficam genéricas e os alertas, impossíveis de priorizar.
- **Fazer KYC só no onboarding.** A Circular 3.978 exige atualização (art. 17), e o KYT é o principal gatilho para ela.
- **Manter as três checagens em ferramentas sem ligação entre si.** O supervisor quer ver a decisão completa, não três relatórios soltos.

## Perguntas frequentes

### KYB é obrigatório?
O termo não aparece na norma, mas o conteúdo sim. A Circular 3.978 exige qualificar o cliente pessoa jurídica até o beneficiário final (art. 24) e aplicar KYC a administradores e representantes (art. 21).

### KYT substitui o KYC?
Não. São complementares. O KYT avalia transações, e o KYC fornece o contexto para decidir se uma transação é compatível com o cliente.

### Qual vem primeiro?
KYC e KYB vêm no onboarding: a Circular 3.978 proíbe iniciar a relação sem identificação e qualificação concluídas (art. 23). O KYT começa na primeira transação e não para mais.

### Empresas de cripto precisam dos três?
Na prática, sim. As PSAVs seguem a regulamentação de PLD/FT aplicável às instituições autorizadas pelo Banco Central e têm deveres específicos de rastreabilidade e triagem de carteiras na Res. BCB 520/2025.

## Conclusão

KYC, KYB e KYT não são produtos diferentes que se compram separadamente. São três perguntas que juntas formam um perfil de risco:

- quem é a pessoa;
- quem está por trás da empresa;
- o que passa pela conta.

O programa de compliance funciona quando as três respostas ficam no mesmo lugar e a decisão sobre o cliente considera todas elas.

> **KYC e KYB no mesmo dossiê.** A kycert reúne identificação, quadro societário, beneficiário final, PEP, sanções e mídia adversa num Dossiê de Risco com a decisão registrada.
> [Ver dossiê de exemplo](/dossie-exemplo) · [Verificação de PJ e beneficiário final](/produto/kyb)

**Leia também:** [O que é KYC](/blog/o-que-e-kyc) · [O que é KYT](/blog/o-que-e-kyt) · [Abertura de conta em fintech: KYC, KYB e risco em escala](/blog/abertura-conta-fintech-kyb-escala)
