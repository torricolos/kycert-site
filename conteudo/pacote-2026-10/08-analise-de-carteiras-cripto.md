---
titulo_seo: "Análise de carteiras cripto: como avaliar o risco de um endereço"
meta_description: "Como funciona a análise de carteiras cripto (wallet screening): exposição direta e indireta, carteiras sancionadas, autocustódia e o que a Res. BCB 520 e 521 exigem."
slug: /blog/analise-de-carteiras-cripto
h1: "Análise de carteiras cripto: como avaliar o risco de um endereço antes de transacionar"
eyebrow: "KYT / cripto"
data_publicacao: 2026-10-01
atualizado_em: 2026-10-01
tempo_leitura: "8 min"
breadcrumb: "Análise de carteiras"
tipo: cluster
cluster: KYT / cripto
palavra_chave_principal: "análise de carteiras cripto"
palavras_chave_secundarias: ["wallet screening", "verificar carteira cripto", "carteira sancionada", "carteira autocustodiada", "prova de titularidade de carteira", "risco de endereço cripto", "exposição indireta"]
intencao: "Informacional / comercial"
publico: "Compliance e operações de PSAVs, exchanges e OTCs"
objetivo: "Capturar buscas operacionais de cripto e alimentar o cluster KYT"
oportunidade_serp: "Resultados são páginas de produto de ferramentas de análise on-chain. Falta conteúdo neutro que explique o método (exposição direta/indireta, momentos de triagem, prova de titularidade) ligado às exigências brasileiras (Res. 520 art. 34 e 90; Res. 277 art. 76-A § 5º; Res. 584)."
links_internos_saida: ["/blog/o-que-e-kyt", "/blog/travel-rule-brasil", "/blog/resolucao-bcb-584-retencao-24h-cripto", "/blog/listas-de-sancoes-lei-13810", "/blog/usdt-stablecoins-risco-compliance", "/solucoes/psav"]
receber_links_de: ["/blog/o-que-e-kyt", "/blog/resolucao-bcb-584-retencao-24h-cripto", "/blog/travel-rule-brasil", "/blog/usdt-stablecoins-risco-compliance", "/blog/listas-de-sancoes-lei-13810"]
cta_primario: { texto: "Conhecer a solução para PSAV", href: "/solucoes/psav" }
cta_secundario: { texto: "Ver dossiê de exemplo", href: "/dossie-exemplo" }
imagem: "Lupa sobre um endereço de carteira cripto abreviado (0x…); ao redor, setas para outros endereços com etiquetas de risco (baixo, médio, alto). Estilo editorial plano."
imagem_alt: "Lupa sobre um endereço de carteira de criptoativos com conexões classificadas por nível de risco, representando a análise de carteiras"
schema: ["Article", "FAQPage", "BreadcrumbList"]
fontes:
  - "Resolução BCB nº 520/2025, arts. 34, 44 e 90: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=520"
  - "Resolução BCB nº 521/2025 (art. 76-A da Res. BCB 277): https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=521"
  - "Resolução BCB nº 584/2026: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=584"
  - "OFAC: Sanctions List Search / SDN List: https://sanctionssearch.ofac.treas.gov/"
---

# Análise de carteiras cripto: como avaliar o risco de um endereço antes de transacionar

**Análise de carteiras (*wallet screening*) é a verificação do risco de um endereço de criptoativo antes ou durante uma transação.** Ela olha com quem aquele endereço já transacionou, se está ligado a entidades sancionadas, misturadores, golpes ou mercados ilícitos, e se pertence a uma exchange, a um serviço ou a uma pessoa em autocustódia.

É a peça mais concreta do [KYT](/blog/o-que-e-kyt). Para as PSAVs brasileiras, ela também responde a exigências específicas:

- identificar **carteiras sancionadas** (Res. BCB 520, art. 34, III);
- não operar com **misturadores** (art. 90);
- identificar o **dono de carteiras autocustodiadas** (Res. BCB 277, art. 76-A, § 5º, incluído pela Res. 521);
- a partir de 2027, avaliar a contraparte na [retenção de 24h da Res. 584](/blog/resolucao-bcb-584-retencao-24h-cripto).

## Quando analisar uma carteira

| Momento | O que se verifica | Por quê |
|---|---|---|
| Depósito recebido | Origem dos fundos: o endereço que enviou tem exposição de risco? | Evitar receber recursos ilícitos ou de entidade sancionada |
| Pedido de saque | Destino: para quem os ativos vão? | Evitar enviar para endereço sancionado, mixer ou golpe; classificar o destino (exterior, autocustódia, PSAV nacional) |
| Cadastro de carteira na lista de saque | Titularidade e histórico do endereço | Saber, antes da primeira transação, se o endereço é do cliente e qual o seu risco |
| Revisão periódica | Mudança no risco de endereços já usados | Atribuições mudam: um endereço limpo hoje pode ser sinalizado amanhã |

O ponto mais importante é analisar **antes do saque**. Depois que o ativo sai, a transação em blockchain não tem estorno.

## Exposição direta e indireta

- **Exposição direta:** o endereço analisado transacionou diretamente com um endereço de risco. Exemplo: o depósito veio direto de uma carteira listada como sancionada.
- **Exposição indireta:** os recursos passaram por um ou mais intermediários entre o endereço de risco e o endereço analisado. Cada passo intermediário é chamado de *hop*.

A política de risco deve dizer quanto de exposição indireta é aceitável, por categoria e por número de *hops*. Exposição indireta a um mercado da darknet a cinco intermediários de distância não pesa o mesmo que exposição direta a um endereço sancionado.

## Categorias de risco mais usadas

As ferramentas de análise on-chain classificam endereços em categorias. As mais relevantes para compliance:

- **Sanções.** Endereços de pessoas ou entidades sancionadas. O OFAC (EUA) inclui endereços de criptoativos em registros da sua lista SDN. Veja [como funcionam as listas de sanções](/blog/listas-de-sancoes-lei-13810).
- **Misturadores e embaralhadores.** Serviços feitos para ocultar origem e destino. A Res. 520 proíbe a PSAV de usar mecanismos que dificultem a detecção de crimes, citando-os como exemplo (art. 90, III).
- **Mercados ilícitos e darknet.**
- **Golpes, fraudes e ransomware.**
- **Exchanges sem supervisão** ou de jurisdições de alto risco.
- **Entidades reguladas.** Exchanges e custodiantes identificados, o que ajuda a classificar o destino.

## Autocustódia: como identificar o dono da carteira

A Res. BCB 521/2025 definiu **carteira autocustodiada** como aquela cujo proprietário detém a chave privada e consegue movimentá-la sem uma prestadora de serviços. Ela também exigiu que a PSAV **identifique o proprietário** dessas carteiras e tenha processos documentados para verificar a origem e o destino dos ativos nas operações que a norma incluiu no mercado de câmbio.

A norma não diz *como* comprovar a titularidade. As práticas de mercado mais comuns são:

- **Assinatura de mensagem:** o cliente assina, com a chave privada, uma mensagem gerada pela plataforma. É a forma mais robusta, porque só quem controla a chave consegue assinar.
- **Microtransação de teste:** o cliente envia um valor pequeno e específico da carteira declarada para a plataforma.
- **Declaração do cliente com evidências:** captura de tela da carteira, histórico de uso. É a mais fraca, e deve ser combinada com a análise do endereço.

> **Interpretação:** a escolha do método é decisão da PSAV, baseada em risco. Para valores altos ou clientes de maior risco, faz sentido exigir o método mais forte. Registre o método usado e o resultado em cada caso.

## O que fazer com o resultado da análise

A análise só tem valor se virar decisão. A política precisa definir, para cada faixa de risco:

- **aprovar automaticamente** (risco baixo, dentro do perfil do cliente);
- **reter para análise humana** (risco médio, valor alto, destino em autocustódia ou no exterior);
- **rejeitar ou devolver** (exposição direta a sanções ou categorias proibidas);
- **avaliar comunicação ao Coaf**, com registro em dossiê;
- **revisar o cliente**, quando o padrão de carteiras usadas destoa do perfil cadastrado.

Exposição a endereço de pessoa ou entidade sancionada pelo Conselho de Segurança da ONU tem regra própria. A Lei 13.810/2019 e a Res. BCB 44/2020 exigem **indisponibilidade imediata** dos ativos e comunicação ao Banco Central, ao Ministério da Justiça e ao Coaf.

## Limites da análise de carteiras

- **Atribuição não é certeza.** A ligação entre endereço e entidade vem da inteligência do fornecedor e pode estar incompleta ou desatualizada.
- **Cobertura varia por rede.** Nem todas as blockchains e tokens têm a mesma profundidade de dados.
- **Dentro da exchange, a blockchain não vê.** Transferências internas e operações em livro de ofertas não aparecem on-chain.
- **O endereço não diz quem é a pessoa.** É por isso que a análise de carteiras precisa do [KYC](/blog/o-que-e-kyc) e da [Travel Rule](/blog/travel-rule-brasil) ao lado.

## Perguntas frequentes

### O que é wallet screening?
É a triagem de um endereço de criptoativo para identificar seu risco: exposição a sanções, misturadores, golpes ou mercados ilícitos, e o tipo de entidade que o controla.

### Como saber se uma carteira é sancionada?
Consultando listas oficiais que incluem endereços, como a lista SDN do OFAC, e ferramentas de análise on-chain que agregam essas listas e as atribuições conhecidas.

### A PSAV é obrigada a verificar carteiras?
A Res. BCB 520 exige controles para identificar endereços de carteiras sancionadas (art. 34, III) e veda o uso de misturadores (art. 90). A Res. 521 exige identificar o dono de carteiras autocustodiadas nas operações que incluiu no mercado de câmbio.

### Como provar que a carteira é do cliente?
As práticas mais comuns são a assinatura de mensagem com a chave privada e a microtransação de teste. A norma não define o método. A PSAV deve escolher com base em risco e documentar.

### O que é exposição indireta?
É quando os recursos chegaram ao endereço analisado depois de passar por intermediários a partir de um endereço de risco.

## Conclusão

Analisar carteiras é a forma mais direta de ver o risco em cripto, porque o histórico está público. Para virar compliance, a análise precisa de política (o que aceitar, o que reter, o que rejeitar), de prova (método de titularidade e registro da decisão) e de contexto: quem é o cliente por trás do endereço.

> **O endereço mostra a transação. O dossiê mostra o cliente.** A kycert entrega KYC, PEP, sanções e mídia adversa com a decisão registrada, o contexto que a análise de carteiras precisa para virar decisão defensável.
> [Conhecer a solução para PSAV](/solucoes/psav) · [Ver dossiê de exemplo](/dossie-exemplo)

**Leia também:** [O que é KYT](/blog/o-que-e-kyt) · [Travel Rule no Brasil](/blog/travel-rule-brasil) · [USDT e stablecoins: risco e compliance](/blog/usdt-stablecoins-risco-compliance)
