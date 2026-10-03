---
titulo_seo: "O que é KYC: como funciona o Know Your Customer no Brasil"
meta_description: "KYC é o processo de identificar, qualificar e classificar o risco de cada cliente. Veja o que a Circular 3.978 exige, as etapas e como estruturar o KYC na prática."
slug: /blog/o-que-e-kyc
h1: "O que é KYC (Know Your Customer) e o que a regulação brasileira exige"
eyebrow: "KYC / fundamentos"
data_publicacao: 2026-10-01
atualizado_em: 2026-10-01
tempo_leitura: "9 min"
breadcrumb: "KYC"
tipo: pilar
cluster: KYC
palavra_chave_principal: "o que é kyc"
palavras_chave_secundarias: ["know your customer", "kyc significado", "processo de kyc", "kyc circular 3978", "conheça seu cliente", "kyc exchange", "identificação e qualificação de clientes"]
intencao: "Informacional"
publico: "Compliance, operações e founders de fintechs, PSAVs, câmbio e instituições de pagamento; profissionais entrando na área"
objetivo: "Página pilar do cluster KYC; distribuir autoridade para KYB, PEP, sanções, fraude documental e páginas comerciais"
oportunidade_serp: "SERP dominada por definições genéricas e conteúdo traduzido de fornecedores estrangeiros. Faltam: base normativa brasileira com artigos, as três etapas (identificar, qualificar, classificar) como a Circular 3.978 define, prazos (30 dias, 10 anos) e como estruturar o KYC por nível de risco."
links_internos_saida: ["/blog/o-que-e-pld-ft", "/blog/kyc-kyb-kyt-diferencas", "/blog/beneficiario-final-ubo-kyb", "/blog/pessoa-exposta-politicamente-pep", "/blog/listas-de-sancoes-lei-13810", "/blog/fraude-documental-onboarding", "/blog/o-que-e-kyt", "/produto/kyc", "/produto/dossie-de-risco", "/dossie-exemplo"]
receber_links_de: ["todos os artigos do pacote", "/blog/abertura-conta-fintech-kyb-escala", "/blog/cooperativas-credito-3978-associados", "/blog/bets-lei-14790-pld-onboarding"]
cta_primario: { texto: "Ver dossiê de exemplo", href: "/dossie-exemplo" }
cta_secundario: { texto: "Verificação de pessoa física (KYC)", href: "/produto/kyc" }
imagem: "Diagrama horizontal com três blocos ligados por setas ('Identificar', 'Qualificar', 'Classificar') e uma seta de retorno 'Atualizar' do último para o primeiro. Estilo limpo, paleta da marca."
imagem_alt: "Fluxo do processo de KYC em três etapas (identificação, qualificação e classificação de risco do cliente) com atualização contínua"
schema: ["Article", "FAQPage", "BreadcrumbList"]
fontes:
  - "Circular BCB nº 3.978/2020: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&numero=3978"
  - "Lei nº 9.613/1998, arts. 9º a 11: https://www.planalto.gov.br/ccivil_03/leis/l9613.htm"
  - "Resolução CMN nº 4.753/2019: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o&numero=4753"
  - "Resolução BCB nº 520/2025: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=520"
---

# O que é KYC (Know Your Customer) e o que a regulação brasileira exige

**KYC (Know Your Customer, ou "conheça seu cliente") é o conjunto de procedimentos que uma instituição usa para saber com quem está fazendo negócio.** Na prática, isso significa:

- verificar se o cliente é quem diz ser;
- entender sua atividade e sua capacidade financeira;
- classificar o risco que ele representa de uso da instituição para lavagem de dinheiro, financiamento do terrorismo ou fraude.

No Brasil, o KYC é uma obrigação legal. A [Lei 9.613/1998](https://www.planalto.gov.br/ccivil_03/leis/l9613.htm) determina, no art. 10, que as pessoas sujeitas a ela "identificarão seus clientes e manterão cadastro atualizado". Para as instituições autorizadas pelo Banco Central, o detalhamento está na [Circular BCB nº 3.978/2020](https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&numero=3978). Desde a Lei 14.478/2022, a lista de obrigados inclui também as **prestadoras de serviços de ativos virtuais** (art. 9º, XIX, da Lei 9.613).

## As três etapas do KYC segundo a Circular 3.978

A Circular 3.978 organiza o KYC em três verbos: **identificar, qualificar e classificar** (art. 13). Uma quarta obrigação atravessa as três: **manter atualizado**.

| Etapa | O que é | Base na Circular 3.978 |
|---|---|---|
| Identificação | Coletar, verificar e validar a identidade do cliente | Art. 16 |
| Qualificação | Entender quem é o cliente: atividade, renda ou faturamento, patrimônio, condição de PEP | Arts. 18 e 19 |
| Classificação | Enquadrar o cliente numa categoria de risco definida pela avaliação interna | Art. 20 |
| Atualização | Manter as informações atualizadas ao longo do relacionamento | Art. 17 |

### 1. Identificação: o cliente é quem diz ser?

O mínimo a coletar está no art. 16, § 2º:

- **pessoa natural:** nome completo, endereço residencial e CPF;
- **pessoa jurídica:** razão social, endereço da sede e CNPJ.

Coletar não basta. A norma exige **obter, verificar e validar a autenticidade** dessas informações. Quando necessário, isso inclui confrontá-las com bancos de dados públicos e privados (art. 16, § 1º).

É aqui que entram a validação do documento, a checagem do CPF e a prova de vida. Também é aqui que acontece a maior parte das [fraudes documentais no onboarding](/blog/fraude-documental-onboarding).

### 2. Qualificação: quem é esse cliente?

Qualificar é coletar, verificar e validar informações **compatíveis com o perfil de risco e com a natureza da relação de negócio** (art. 18). Na prática, isso significa:

- ocupação ou atividade econômica;
- renda (pessoa física) ou faturamento (pessoa jurídica);
- patrimônio;
- verificação da condição de [pessoa exposta politicamente (PEP)](/blog/pessoa-exposta-politicamente-pep) e de familiares e estreitos colaboradores de PEP (art. 19).

Para clientes pessoa jurídica, a qualificação inclui analisar a cadeia societária até chegar à pessoa natural que é o [beneficiário final](/blog/beneficiario-final-ubo-kyb) (art. 24). Isso já é **KYB**, o "Know Your Business", tratado em detalhe em [KYC, KYB e KYT: diferenças](/blog/kyc-kyb-kyt-diferencas).

### 3. Classificação: qual o risco desse cliente?

Com as informações de qualificação, a instituição enquadra o cliente numa **categoria de risco** (art. 20). Essas categorias não são livres. Elas vêm da **avaliação interna de risco** que a instituição é obrigada a fazer (art. 10).

A classificação define a intensidade de tudo o que vem depois:

- com que frequência o cadastro é atualizado;
- quais documentos adicionais se pedem;
- quão sensível é o [monitoramento de transações](/blog/monitoramento-de-transacoes-pld) daquele cliente.

### 4. Atualização: o KYC não termina no onboarding

As informações devem ser **mantidas atualizadas** (art. 17). Um cliente classificado como baixo risco há três anos pode ter mudado de atividade, virado PEP ou passado a movimentar valores incompatíveis com sua renda.

Os critérios de atualização para cada categoria de risco precisam estar no manual de procedimentos (art. 22).

## Regras que costumam surpreender

- **Não se inicia relação sem KYC concluído.** É vedado iniciar relação de negócio sem identificação e qualificação concluídas. Há uma exceção de até **30 dias** quando faltam informações de qualificação, desde que o monitoramento não seja prejudicado (art. 23).
- **Administradores e representantes também passam por KYC.** Os procedimentos se aplicam aos administradores de clientes pessoa jurídica e aos representantes de clientes (art. 21).
- **Guarda por 10 anos.** As informações coletadas no KYC devem ficar à disposição do Banco Central por no mínimo dez anos (art. 67).
- **Tudo em sistema.** As informações do KYC precisam estar em sistemas informatizados e ser usadas no monitoramento de operações (art. 14).

## KYC em exchanges, PSAVs e fintechs: o que muda na prática

A obrigação é a mesma. O que muda é o contexto operacional:

- **Volume e velocidade.** Exchanges e fintechs abrem contas em escala, com o cliente esperando aprovação em minutos. O KYC precisa ser automatizado na coleta e na verificação e reservar o olhar humano para os casos de risco.
- **KYC proporcional ao risco.** A norma pede procedimentos "compatíveis com o perfil de risco". Isso abre espaço para trilhas diferentes: um fluxo simples para o cliente de baixo risco e diligência reforçada para PEP, alto volume ou atividade sensível.
- **Regulação setorial em cima da Circular.** As PSAVs autorizadas passaram a seguir a regulamentação aplicável às instituições do Banco Central, por força da [Res. BCB 520/2025](/blog/resolucao-bcb-520-psav) (arts. 44, 47 e 87). Fintechs que abrem conta de depósito também seguem a Res. CMN 4.753/2019, que exige verificar a autenticidade das informações do cliente.

### Exemplo: estruturando o KYC de uma exchange

1. **Cadastro básico** com CPF, nome e endereço, validados contra bases de dados.
2. **Documento com foto** e verificação de que pertence à pessoa (biometria ou prova de vida).
3. **Qualificação:** ocupação, renda e patrimônio declarados, cruzados com a capacidade de movimentação pretendida.
4. **Checagens de PEP, [sanções](/blog/listas-de-sancoes-lei-13810) e mídia adversa.**
5. **Classificação de risco** com base na matriz da avaliação interna.
6. **Decisão registrada:** aprovado, aprovado com restrição de limites ou recusado, com quem decidiu e por quê.
7. **Gatilhos de revisão:** prazo por categoria de risco, mudança de comportamento transacional ou alerta de lista.

O passo 6 é o que mais falta nas operações. A avaliação até acontece, mas não fica registrada de forma que um auditor ou o supervisor consiga reconstruir a decisão. Falamos disso em [como comprovar PLD/FT numa fiscalização do BACEN](/blog/comprovar-pld-ft-fiscalizacao-bacen).

## O que acontece quando o KYC falha

- **Risco regulatório.** A Lei 9.613 prevê sanções para quem descumpre as obrigações de identificação e registro: advertência, multa que pode chegar a R$ 20 milhões, inabilitação de administradores e cassação da autorização (art. 12).
- **Risco de fraude.** Contas abertas com documentos falsos ou de terceiros viram [contas laranja](/blog/contas-laranja-contas-de-passagem) e canais para golpes.
- **Risco de contraparte.** Bancos e parceiros fazem diligência sobre a qualidade do KYC de quem atendem. Um KYC fraco fecha portas comerciais.

## Perguntas frequentes

### O que significa KYC?
KYC é a sigla de *Know Your Customer*, "conheça seu cliente". É o processo de identificar, qualificar e classificar o risco de cada cliente antes e durante o relacionamento.

### KYC é obrigatório no Brasil?
Sim, para as pessoas sujeitas à Lei 9.613/1998 (art. 9º). Entre elas estão as instituições financeiras, as instituições de pagamento, as corretoras de câmbio e, desde a Lei 14.478/2022, as prestadoras de serviços de ativos virtuais.

### Qual norma do Banco Central regula o KYC?
A Circular BCB nº 3.978/2020, em vigor desde 1º de julho de 2020. O KYC está nos arts. 13 a 27.

### Quanto tempo devo guardar os dados do KYC?
No mínimo dez anos, à disposição do Banco Central (art. 67 da Circular 3.978).

### Qual a diferença entre KYC e KYB?
KYC trata do cliente em geral. KYB (*Know Your Business*) é o KYC aplicado a pessoas jurídicas, com foco na estrutura societária e no beneficiário final.

### Posso abrir a conta antes de concluir o KYC?
Não. A exceção é a falta de informações de qualificação, que admite início da relação por até 30 dias, desde que o monitoramento não seja prejudicado.

## Conclusão

KYC não é um formulário de cadastro. É um processo de quatro movimentos que precisa deixar rastro:

- identificar e validar quem é o cliente;
- qualificar quem ele é;
- classificar o risco;
- manter tudo atualizado.

A Circular 3.978 diz o que fazer. O desafio operacional é fazer isso em escala e conseguir provar depois como cada decisão foi tomada.

> **Cada cliente como uma evidência, não como uma consulta avulsa.** A kycert reúne identificação, PEP, sanções e mídia adversa num Dossiê de Risco com a decisão e o critério registrados.
> [Ver dossiê de exemplo](/dossie-exemplo) · [Verificação de pessoa física (KYC)](/produto/kyc)

**Leia também:** [O que é PLD/FT](/blog/o-que-e-pld-ft) · [KYC, KYB e KYT: diferenças](/blog/kyc-kyb-kyt-diferencas) · [Beneficiário final (UBO)](/blog/beneficiario-final-ubo-kyb)
