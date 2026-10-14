---
titulo_seo: "O que é KYT (Know Your Transaction) e como funciona em cripto"
meta_description: "KYT é o monitoramento do risco de cada transação, inclusive on-chain. Veja como funciona, o que a Res. BCB 520 exige das PSAVs e como KYT e KYC se completam."
slug: /blog/o-que-e-kyt
h1: "O que é KYT (Know Your Transaction) e como funciona no mercado de cripto"
eyebrow: "KYT / fundamentos"
data_publicacao: 2026-10-01
atualizado_em: 2026-10-01
tempo_leitura: "9 min"
breadcrumb: "KYT"
tipo: pilar
cluster: KYT / cripto
palavra_chave_principal: "o que é kyt"
palavras_chave_secundarias: ["know your transaction", "kyt cripto", "monitoramento de transações cripto", "análise on-chain", "kyt exchange", "kyt compliance", "risco de transação"]
intencao: "Informacional"
publico: "Compliance e operações de PSAVs, exchanges, OTCs e IPs que operam cripto"
objetivo: "Página pilar do cluster KYT/cripto; ancorar Travel Rule, análise de carteiras, USDT e Res. 584"
oportunidade_serp: "SERP dominada por páginas de fornecedores estrangeiros (Chainalysis, TRM, AMLBot) e conteúdo traduzido. Nenhum resultado conecta KYT às normas brasileiras (Circular 3.978 arts. 38-43, Res. 520 arts. 34, 44, 90; Res. 521; Res. 584)."
links_internos_saida: ["/blog/o-que-e-kyc", "/blog/kyc-kyb-kyt-diferencas", "/blog/monitoramento-de-transacoes-pld", "/blog/analise-de-carteiras-cripto", "/blog/travel-rule-brasil", "/blog/usdt-stablecoins-risco-compliance", "/blog/resolucao-bcb-584-retencao-24h-cripto", "/blog/resolucao-bcb-520-psav", "/solucoes/psav"]
receber_links_de: ["/blog/o-que-e-kyc", "/blog/o-que-e-pld-ft", "/blog/kyc-kyb-kyt-diferencas", "/blog/resolucao-bcb-584-retencao-24h-cripto", "/blog/travel-rule-brasil", "/blog/analise-de-carteiras-cripto", "/blog/usdt-stablecoins-risco-compliance", "/blog/resolucao-bcb-520-psav"]
cta_primario: { texto: "Conhecer a solução para PSAV", href: "/solucoes/psav" }
cta_secundario: { texto: "Ver dossiê de exemplo", href: "/dossie-exemplo" }
imagem: "Ilustração de um grafo de transações on-chain: uma carteira central ligada a outras por arestas, algumas destacadas em cor de alerta (rótulos 'mixer', 'sancionada'), outras neutras. Ao lado, um cartão de cliente representando o KYC."
imagem_alt: "Grafo de transações em blockchain com carteiras de risco destacadas, ilustrando como o KYT avalia a exposição de uma transação cripto"
schema: ["Article", "FAQPage", "BreadcrumbList"]
fontes:
  - "Circular BCB nº 3.978/2020, arts. 38 a 43: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&numero=3978"
  - "Resolução BCB nº 520/2025, arts. 34, 44, 45, 47, 89, 90: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=520"
  - "Resolução BCB nº 521/2025 (art. 76-A da Res. BCB 277): https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=521"
  - "Resolução BCB nº 584/2026: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=584"
---

# O que é KYT (Know Your Transaction) e como funciona no mercado de cripto

**KYT (Know Your Transaction, ou "conheça sua transação") é o processo de avaliar o risco de cada transação**: de onde vêm os recursos, para onde vão e com quem a operação se conecta. O [KYC](/blog/o-que-e-kyc) responde "quem é o cliente". O KYT responde "o que esse cliente está fazendo, e com quem".

O termo ganhou força no mercado de criptoativos. Como as transações em blockchain são públicas, é possível analisar o histórico de uma carteira e medir sua exposição a endereços ligados a atividades ilícitas, muitas vezes antes de aceitar um depósito ou executar um saque.

KYT não é um termo jurídico. Nenhuma norma brasileira usa essa sigla. O que existe é um conjunto de obrigações de **monitoramento, registro e rastreabilidade de operações**, e o KYT é a forma como o mercado operacionaliza essas obrigações.

## KYT, monitoramento de transações e análise on-chain

Os três termos aparecem misturados:

- **Monitoramento de transações** é a obrigação geral de PLD/FT de acompanhar as operações dos clientes para identificar suspeitas. Vale para qualquer instituição regulada. Veja [como funciona o monitoramento de transações](/blog/monitoramento-de-transacoes-pld).
- **Análise on-chain** é a técnica de ler a blockchain para entender o caminho dos ativos.
- **KYT** é o monitoramento de transações que usa, entre outras fontes, a análise on-chain. Em cripto, costuma ser feito transação a transação e em tempo real.

## Como o KYT funciona na prática

Um fluxo típico em uma exchange ou PSAV:

1. **Entrada do evento.** O cliente deposita um ativo ou pede um saque para um endereço externo.
2. **Triagem do endereço.** A ferramenta verifica se o endereço de origem ou destino está ligado a categorias de risco: entidades sancionadas, mercados da darknet, misturadores, golpes, ransomware, exchanges sem supervisão.
3. **Exposição direta e indireta.** A análise considera tanto a interação direta com um endereço de risco quanto a exposição indireta, quando os recursos passaram por intermediários antes de chegar.
4. **Pontuação e regras.** O resultado passa por regras definidas pela instituição, como limites de exposição, categorias proibidas e valores.
5. **Alerta e análise humana.** Casos acima do limite viram alerta para um analista.
6. **Decisão e registro.** Aprovar, reter, devolver, rejeitar e, quando for o caso, comunicar ao Coaf, sempre com registro da fundamentação.

O passo 6 é onde o KYT encontra o KYC. A mesma exposição pede respostas diferentes para clientes diferentes. Um cliente institucional com histórico conhecido não é igual a uma conta aberta ontem com renda declarada incompatível.

## O que a regulação brasileira exige que o KYT atende

| Exigência | Norma | Como o KYT ajuda |
|---|---|---|
| Monitorar, selecionar e analisar operações suspeitas | Circular 3.978, arts. 38 a 43 | Gera e prioriza alertas de transações |
| Controles para identificar listas de sanções e **endereços de carteiras sancionadas** | Res. BCB 520, art. 34, III | Triagem de endereços contra listas |
| Vedação a misturadores e embaralhadores | Res. BCB 520, art. 90 | Detecta exposição a mixers |
| Envio de dados de originador e beneficiário (Travel Rule) | Res. BCB 520, arts. 44 e 89 | Complementa a análise quando os dados ainda não chegam da contraparte |
| Identificar o dono de carteira autocustodiada e verificar a origem e o destino dos ativos | Res. BCB 277, art. 76-A, § 5º (incluído pela Res. 521) | Análise da carteira e do fluxo |
| Retenção cautelar de 24h com análise de risco da contraparte e da jurisdição | Res. BCB 584/2026 (vigência em 1º/01/2027) | Fornece o risco da contraparte para a decisão |
| Guardar registros das transações por 5 anos | Res. BCB 520, art. 45 | Histórico das análises e alertas |

Em resumo: **monitorar transações é obrigação, e o KYT é o método**. Se o monitoramento de cripto não olha a blockchain, ele deixa de fora a parte mais informativa do dado.

## KYT e KYC se completam

Nenhum dos dois é suficiente sozinho:

- **KYC sem KYT** conhece o cliente, mas não vê que os recursos que ele deposita vieram de um endereço sancionado.
- **KYT sem KYC** sabe que a transação tem exposição de risco, mas não consegue avaliar se ela é compatível com quem é o cliente.

A [Res. BCB 584](/blog/resolucao-bcb-584-retencao-24h-cripto) torna isso explícito. Para reter uma transferência ou liberá-la antes das 24 horas, a instituição precisa considerar o perfil de risco **do cliente**, **da operação**, **da contraparte** e **da jurisdição**. O KYT fornece os três últimos. O KYC, o primeiro.

Veja a comparação completa em [KYC, KYB e KYT: diferenças e como se conectam](/blog/kyc-kyb-kyt-diferencas).

## Limites do KYT que o compliance precisa conhecer

- **Atribuição é probabilística.** A ligação entre um endereço e uma entidade vem de inteligência do fornecedor. Pode haver erro, atraso ou cobertura desigual entre redes.
- **Nem todo risco é visível on-chain.** Transferências entre clientes dentro da mesma exchange, operações em livro de ofertas e trocas fora da blockchain não aparecem no grafo público.
- **Falsos positivos custam caro.** Regras mal calibradas geram fila de alertas que ninguém analisa no prazo. O prazo da Circular 3.978 é de 45 dias para selecionar e 45 para analisar.
- **A ferramenta não decide.** A Circular 3.978 proíbe terceirizar a análise que caracteriza ou não a suspeita (art. 44). O fornecedor pode prestar serviço auxiliar, mas a decisão é da instituição.

## O que avaliar ao escolher uma solução de KYT

- cobertura das redes e dos ativos que você opera, incluindo as stablecoins;
- categorias de risco e transparência sobre a origem das atribuições;
- triagem antes da transação (pré-saque) e não só depois;
- API e latência compatíveis com o seu fluxo de saque;
- exportação de evidências para o dossiê de análise;
- suporte às mensagens de [Travel Rule](/blog/travel-rule-brasil), ou integração com quem as forneça.

## Perguntas frequentes

### O que significa KYT?
*Know Your Transaction*, "conheça sua transação". É a avaliação do risco de cada transação, especialmente em cripto, com base em origem, destino e exposição a endereços de risco.

### KYT é obrigatório no Brasil?
A sigla não aparece em norma. O monitoramento de transações é obrigatório pela Lei 9.613 e pela Circular 3.978. As PSAVs têm deveres específicos na Res. BCB 520, como identificar carteiras sancionadas e não operar com misturadores. Na prática, o mercado cumpre essas obrigações com ferramentas de KYT.

### Qual a diferença entre KYC e KYT?
KYC avalia o cliente. KYT avalia as transações. Um programa de PLD/FT eficiente usa os dois juntos.

### O que é exposição indireta?
É quando os recursos chegam a uma carteira depois de passar por intermediários a partir de um endereço de risco. Pesa menos que a exposição direta, mas não deve ser ignorada.

### Posso terceirizar o KYT?
Pode contratar a ferramenta e serviços auxiliares. A análise que caracteriza uma operação como suspeita deve ser feita pela própria instituição, no Brasil (Circular 3.978, arts. 44 e 45).

## Conclusão

KYT é como o mercado de cripto transforma a obrigação de monitorar transações em algo executável na velocidade da blockchain. Com a Res. BCB 520 em vigor, a Res. 584 chegando em janeiro de 2027 e a Travel Rule com prazos definidos, as PSAVs precisam de duas coisas:

- **ver a transação**, com KYT;
- **conhecer o cliente**, com KYC, para decidir com fundamento.

> **A outra metade do KYT é o cliente.** A kycert entrega KYC, PEP, sanções e mídia adversa num Dossiê de Risco com decisão registrada: o perfil do cliente que a análise de cada transação precisa considerar.
> [Conhecer a solução para PSAV](/solucoes/psav) · [Ver dossiê de exemplo](/dossie-exemplo)

**Leia também:** [Análise de carteiras cripto](/blog/analise-de-carteiras-cripto) · [Travel Rule no Brasil](/blog/travel-rule-brasil) · [Resolução BCB 584](/blog/resolucao-bcb-584-retencao-24h-cripto)
