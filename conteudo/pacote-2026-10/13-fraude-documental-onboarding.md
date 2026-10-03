---
titulo_seo: "Fraude documental no onboarding: tipos e como prevenir"
meta_description: "Documento adulterado, de terceiro, identidade sintética e deepfake: veja os tipos de fraude documental no onboarding, o que a regulação exige e os controles em camadas."
slug: /blog/fraude-documental-onboarding
h1: "Fraude documental no onboarding: tipos, sinais e controles em camadas"
eyebrow: "Fraude / onboarding"
data_publicacao: 2026-10-01
atualizado_em: 2026-10-01
tempo_leitura: "8 min"
breadcrumb: "Fraude documental"
tipo: cluster
cluster: Fraude e risco
palavra_chave_principal: "fraude documental"
palavras_chave_secundarias: ["documento falso onboarding", "identidade sintética", "deepfake kyc", "prova de vida", "validação de documentos", "fraude de identidade abertura de conta"]
intencao: "Informacional / comercial"
publico: "Prevenção a fraude, operações e compliance de fintechs, IPs, PSAVs e câmbio"
objetivo: "Completar o cluster de fraude; conectar ao KYC e às páginas /produto/ocr e /produto/kyc"
oportunidade_serp: "Resultados são majoritariamente páginas de fornecedores de biometria. Falta um guia neutro com taxonomia dos tipos de fraude, a base normativa brasileira (Circular 3.978 art. 16 § 1º; Res. CMN 4.753 arts. 2º e 6º; Res. Conjunta 6) e controles em camadas com registro de decisão."
links_internos_saida: ["/blog/o-que-e-kyc", "/blog/contas-laranja-contas-de-passagem", "/blog/kyc-kyb-kyt-diferencas", "/blog/abertura-conta-fintech-kyb-escala", "/produto/ocr", "/produto/kyc", "/dossie-exemplo"]
receber_links_de: ["/blog/o-que-e-kyc", "/blog/contas-laranja-contas-de-passagem", "/blog/abertura-conta-fintech-kyb-escala"]
cta_primario: { texto: "OCR de documentos e cadastro sem digitação", href: "/produto/ocr" }
cta_secundario: { texto: "Ver dossiê de exemplo", href: "/dossie-exemplo" }
imagem: "Documento de identidade estilizado (sem dados reais) sob uma lente que revela camadas: foto, texto e uma área destacada com sinal de alerta; ao lado, uma selfie com contorno de verificação."
imagem_alt: "Documento de identidade sob análise com camadas de verificação e uma área de alerta, representando a detecção de fraude documental no onboarding"
schema: ["Article", "FAQPage", "BreadcrumbList"]
fontes:
  - "Circular BCB nº 3.978/2020, arts. 16 e 23: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&numero=3978"
  - "Resolução CMN nº 4.753/2019, arts. 2º, 3º e 6º: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o&numero=4753"
  - "Resolução Conjunta nº 6/2023: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20Conjunta&numero=6"
  - "Resolução BCB nº 142/2021: https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&numero=142"
---

# Fraude documental no onboarding: tipos, sinais e controles em camadas

**Fraude documental no onboarding é a tentativa de abrir uma conta ou iniciar um relacionamento usando um documento falso, adulterado ou de outra pessoa**, ou uma identidade que não corresponde a ninguém real. É o ponto de entrada mais comum para [contas laranja](/blog/contas-laranja-contas-de-passagem), golpes e lavagem de dinheiro.

Com o onboarding 100% digital, o documento deixou de ser checado por alguém frente a frente. A defesa passou a ser um conjunto de verificações automáticas e humanas. A regulação exige que essas verificações existam e funcionem.

## O que a regulação exige

- **Circular BCB 3.978/2020, art. 16, § 1º:** a identificação do cliente deve incluir a **obtenção, verificação e validação da autenticidade** das informações de identificação, inclusive, se necessário, por confrontação com bancos de dados públicos e privados.
- **Res. CMN 4.753/2019, art. 2º:** na abertura de conta de depósitos, a instituição deve verificar e validar a identidade e a qualificação dos titulares e **a autenticidade das informações fornecidas**. A abertura pode ser feita por meios eletrônicos, mas não por canal de telefonia por voz (art. 3º).
- **Res. CMN 4.753/2019, art. 6º:** a conta deve ser **encerrada** quando forem constatadas irregularidades graves nas informações prestadas.
- **Circular 3.978, art. 23:** não se inicia relação de negócio sem identificação concluída.
- **Res. Conjunta nº 6/2023:** obriga o **compartilhamento de indícios de fraude** entre as instituições. Uma identidade fraudulenta detectada em uma instituição pode ser conhecida pelas outras.

Ou seja: **coletar o documento não cumpre a norma. Validar cumpre.**

## Os tipos de fraude documental

| Tipo | Como funciona | Onde aparece |
|---|---|---|
| Documento adulterado | Documento real com dados alterados (foto, nome, data de nascimento) | Edição da imagem ou do documento físico |
| Documento falsificado | Documento inteiramente fabricado, que imita o modelo oficial | Modelos vendidos em mercados ilícitos |
| Documento de terceiro | Documento verdadeiro de outra pessoa, perdido, roubado, vazado ou "alugado" | Vazamento de dados, aliciamento para contas laranja |
| Identidade sintética | Combinação de dados reais e fictícios (CPF válido com nome e foto inventados) que cria uma "pessoa" nova | Cadastros em série |
| Ataque à biometria | Foto de foto, vídeo reproduzido em tela, máscara ou *deepfake* para passar pela selfie ou prova de vida | Etapa de selfie e liveness |
| Comprovante falso | Comprovante de endereço ou de renda fabricado | Etapa de qualificação |

O documento de terceiro e a identidade sintética são os mais difíceis de pegar só olhando a imagem, porque o documento pode ser autêntico. O que os denuncia é a **inconsistência entre as fontes**.

## Sinais de alerta

- dados do documento que não batem com bases oficiais ou privadas (nome x CPF, data de nascimento, situação do CPF);
- fonte, espaçamento ou alinhamento inconsistentes no documento;
- foto do documento sem relação com a selfie;
- metadados ou sinais de edição na imagem;
- selfie com reflexo de tela, bordas de papel ou movimento artificial;
- mesmo documento, rosto, dispositivo ou contato usados em vários cadastros;
- renda e ocupação declaradas incompatíveis com idade, região ou perfil;
- comprovantes com layout diferente do padrão do emissor.

## Controles em camadas

Nenhuma checagem sozinha resolve. O desenho que funciona combina camadas, e cada uma pega o que a anterior deixa passar:

1. **Captura guiada e leitura automática.** OCR para extrair os dados do documento, reduzir erro de digitação e ter o dado estruturado para comparar.
2. **Validação de dados contra bases.** CPF e nome conferidos com fontes públicas e privadas, como pede a Circular 3.978.
3. **Análise do documento.** Checagens de integridade e de consistência visual do modelo.
4. **Biometria e prova de vida.** Comparação entre a selfie e a foto do documento, com detecção de ataque de apresentação.
5. **Sinais de vínculo e dispositivo.** Detectar reutilização de rosto, documento, aparelho, telefone e e-mail entre cadastros.
6. **Consulta a bases de fraude compartilhadas** (Res. Conjunta 6) e a listas de [sanções](/blog/listas-de-sancoes-lei-13810) e [PEP](/blog/pessoa-exposta-politicamente-pep).
7. **Coerência da qualificação.** Renda, ocupação e uso pretendido fazem sentido juntos?
8. **Revisão humana dos casos limítrofes,** com critério escrito.
9. **Registro da decisão.** O que foi checado, o resultado de cada camada e quem aprovou ou recusou.

A camada 9 costuma ser esquecida. Ela é o que permite:

- encerrar uma conta com base em irregularidade grave (Res. 4.753, art. 6º) e defender a decisão;
- alimentar a base compartilhada de fraude;
- mostrar à fiscalização que o KYC valida, e não só coleta.

## Proporcionalidade: nem todo cliente precisa de todas as camadas

A Circular 3.978 pede procedimentos compatíveis com o perfil de risco. Um cliente com limite baixo e perfil simples pode passar por um fluxo mais leve. Um cliente com expectativa de alto volume, [pessoa jurídica](/blog/kyc-kyb-kyt-diferencas) ou operação em cripto e câmbio pede camadas adicionais. A política deve dizer qual fluxo se aplica a qual perfil, e por quê.

## Perguntas frequentes

### O que é fraude documental?
É o uso de documento falso, adulterado ou de outra pessoa, ou de identidade fabricada, para abrir conta ou iniciar relacionamento com uma instituição.

### O que é identidade sintética?
É uma identidade criada combinando dados reais (como um CPF válido) com dados inventados (nome, foto, endereço), formando uma "pessoa" que não existe.

### A instituição é obrigada a validar documentos?
Sim. A Circular 3.978 exige verificar e validar a autenticidade das informações de identificação (art. 16, § 1º), e a Res. CMN 4.753 exige o mesmo na abertura de contas de depósito (art. 2º).

### O que fazer ao descobrir que uma conta foi aberta com documento falso?
Para contas de depósito, a Res. CMN 4.753 manda encerrar a conta em caso de irregularidade grave (art. 6º). Também é preciso registrar o indício na base compartilhada de fraude (Res. Conjunta 6) e avaliar a comunicação ao Coaf e às autoridades.

### Prova de vida resolve a fraude documental?
Não sozinha. Ela combate ataques à biometria, mas não identifica documento verdadeiro de terceiro aliciado nem inconsistências de qualificação. Por isso o controle precisa ser em camadas.

## Conclusão

Fraude documental se combate com **consistência entre fontes**: documento, bases de dados, biometria, sinais de vínculo e qualificação contando a mesma história. Quando algo não bate, a decisão precisa ficar registrada, com o que foi checado e por quê. É assim que a instituição encerra contas com segurança, alimenta a base compartilhada e responde à fiscalização.

> **Cadastro sem digitação, validação com fonte.** A kycert captura documentos por OCR, cruza os dados com as fontes de verificação e guarda o resultado e a decisão no Dossiê de Risco.
> [OCR de documentos](/produto/ocr) · [Ver dossiê de exemplo](/dossie-exemplo)

**Leia também:** [O que é KYC](/blog/o-que-e-kyc) · [Contas laranja e contas de passagem](/blog/contas-laranja-contas-de-passagem) · [Abertura de conta em fintech](/blog/abertura-conta-fintech-kyb-escala)
