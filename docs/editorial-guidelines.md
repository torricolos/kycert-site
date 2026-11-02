# Guia editorial do blog e do glossário kycert

Vale para qualquer pessoa (ou agente) que escreva ou reescreva conteúdo em `content/blog/*.ts` e `content/glossario/*.ts`.

## Como publicar um post

1. Crie `content/blog/<slug>.ts` exportando `default` um objeto `Post` (tipo em `lib/posts.ts`).
2. Importe e inclua o post em `ALL_POSTS` em `lib/blog.ts`.
3. `datePublished` no futuro agenda o post: ele só aparece (índice, sitemap, rota) quando a data chegar e o site for revalidado.
4. Rode `node scripts/check-content.mjs` (palavras, links internos, travessão, dados obrigatórios).
5. Gere a imagem OG do post: `node scripts/make-og.mjs` (ver README do script).
6. Ao atualizar um post, mude `dateModified`. O sitemap usa essa data.

Cadência-alvo: 2 posts por mês. O calendário vive nas datas de `datePublished`.

## Estrutura obrigatória de um post (1.500+ palavras, alvo 1.600 a 2.000)

Lead + body + FAQ somados com no mínimo 1.500 palavras. Ordem dos `<h2>`:

1. **Contexto regulatório**: o que a norma é, a quem se aplica, o que mudou, em linguagem direta.
2. **O que a norma exige**: cite a norma com número e ano (ex.: Circular BCB 3.978/2020) e, quando tiver certeza, o artigo. Explique o dever com as palavras do dia a dia da operação.
3. **Checklist prático**: `<ul class="checklist">` com itens verificáveis (cada item é uma ação ou evidência).
4. **Como evidenciar na fiscalização**: o que guardar, com autor, data e fonte; como isso aparece num dossiê.
5. **Erros comuns** (opcional, vale ouro para E-E-A-T).
6. O FAQ vai no campo `faq` (3 a 5 perguntas reais que alguém digitaria no Google), nunca dentro do `body`.

Use `<h3>` dentro das seções quando ajudar. Cada `<h2>` precisa ser único e descritivo (vira sumário e âncora).

## Regras de acurácia (inegociáveis)

- Hoje é **02/11/2026**. Nada de datas passadas apresentadas como futuras. Exemplo: o prazo de 30/10/2026 para pedido de autorização das PSAVs (Res. BCB 519/520/521) **já passou**; trate como "prazo encerrado em 30/10/2026" e oriente a conferir a situação atual no BCB.
- Cite artigo, inciso ou percentual **somente se tiver certeza**. Na dúvida, cite a norma pelo número/ano e pelo tema ("a Circular 3.978 trata da avaliação interna de risco") sem inventar numeração. Liste no seu relatório final cada citação de artigo ou número que você incluiu, para validação humana.
- Normas seguras de citar pelo nome: Lei 9.613/1998; Lei 14.286/2021; Resolução BCB 277/2022; Lei 14.478/2022; Resoluções BCB 519, 520 e 521/2025; Circular BCB 3.978/2020; Carta Circular BCB 4.001/2020; Resolução CVM 50/2021; Circular SUSEP 612/2020; Lei 14.790/2023; Resolução COAF 40/2021; IN RFB 2.119/2022; Resolução BCB 1/2020 (Pix).
- Não prometa o que a kycert não faz. Antes de descrever a plataforma, leia `app/produto/*/page.tsx`, `app/solucoes/*/page.tsx`, `app/page.tsx` e `public/llms.txt`. A kycert faz: convite white-label, captura e OCR de documentos, KYC PF, KYB PJ com cadeia societária até o beneficiário final, screening de sanções e PEP, enquadramento de risco pela regra do cliente, Dossiê de Risco exportável em PDF, decisão registrada com autor e data, reverificação periódica (monitoramento contínuo) e API/webhooks. Ela **não** é um motor de monitoramento transacional (KYT) em tempo real: no tema KYT, explique o conceito e diga que a kycert fornece o perfil de risco do KYC que alimenta o monitoramento. Sem números de clientes, sem certificações que não existem (ISO 27001 e SOC 2 estão "em processo"), sem estatísticas inventadas, sem depoimentos.
- Norma não é aconselhamento jurídico. O template já exibe o aviso; não repita.
- Não cite concorrentes pelo nome.

## Tom e estilo

- Português do Brasil, direto, sem rodeio, frases curtas. Fala com quem é do compliance. Sem jargão desnecessário e sem marketing vazio.
- **Proibido travessão** (— e –) em qualquer texto. Use vírgula, dois-pontos, ponto ou parênteses. Hífen só em palavras compostas e intervalos já escritos (ex.: 2025-2026 evite; escreva "de 2025 a 2026").
- Sem emojis. Sem "neste artigo vamos ver". Vá ao ponto no lead.
- Abra termos técnicos com link para o glossário na primeira ocorrência: `<a href="/glossario/kyc">KYC</a>`.

## Links internos (mínimo 6 por post, todos no corpo, com âncora descritiva)

- Pelo menos **3 para páginas de produto/solução** relevantes ao tema, mais **1 para `/precos` ou `/dossie-exemplo`** quando natural.
- Pelo menos **2 para outros posts** (`/blog/<slug>`) e **2 para termos do glossário**.
- Âncoras descritivas ("avaliação de risco de PSAV", não "clique aqui").
- Links sempre relativos (começam com `/`).

URLs válidas:

- Produto: `/produto/kyc`, `/produto/kyb`, `/produto/dossie-de-risco`, `/produto/ocr`, `/produto/monitoramento`, `/produto/api`
- Soluções: `/solucoes/cambio`, `/solucoes/psav`, `/solucoes/bancos`, `/solucoes/cooperativas`, `/solucoes/mercado-capitais`, `/solucoes/seguradoras`, `/solucoes/bets`
- Outras: `/precos`, `/dossie-exemplo`, `/conformidade`, `/guias`, `/faq`, `/seguranca`, `/sobre`, `/glossario`
- Glossário: `/glossario/kyc`, `/glossario/kyb`, `/glossario/kyt`, `/glossario/pep`, `/glossario/ubo`, `/glossario/abr`, `/glossario/pld-ft`, `/glossario/cdd-edd`
- Posts: ver slugs em `lib/blog.ts` (linke só slugs existentes).

## HTML permitido no `body`

`h2`, `h3`, `p`, `ul`, `ol`, `li`, `strong`, `em`, `a`, `table.art-table` (com `thead`/`tbody`), `div.callout` (com `<strong>` de título e um `<p>`), `ul.checklist`. Nada de estilos inline, scripts ou imagens soltas (a figura vai no campo `figure`).

Figuras disponíveis (campo `figure`, escolha a que combina com o tema; o `alt` deve descrever o diagrama, não repetir o título):

| Arquivo | Tema | width x height |
|---|---|---|
| `/images/blog/fluxo-onboarding-pld-ft.svg` | onboarding de PLD/FT em 6 etapas | 1200x500 |
| `/images/blog/matriz-risco-abr.svg` | da avaliação de risco à diligência | 1200x480 |
| `/images/blog/cadeia-societaria-ubo.svg` | PJ até o beneficiário final | 1200x480 |
| `/images/blog/trilha-evidencia-fiscalizacao.svg` | pergunta do fiscal e dossiê | 1200x500 |
| `/images/blog/ciclo-kyt-monitoramento.svg` | ciclo de monitoramento transacional | 1200x500 |
| `/images/blog/cdd-edd-decisao.svg` | árvore CDD x EDD | 1200x490 |

## Meta

- `metaTitle`: até 60 caracteres, termo principal no início, sem a marca (o template acrescenta " · kycert").
- `description`: 140 a 155 caracteres, com o termo principal e um benefício concreto.
- `excerpt`: 1 a 2 frases para o card.
- `solutions`: 2 a 4 links `{href,label}` para produto/solução que aparecem no bloco "Na plataforma".
- `related`: 3 a 4 slugs de posts existentes.

## Glossário (400 a 600 palavras por termo, contando definição, corpo e FAQ)

`shortDef` é a definição direta (1 a 2 frases, 25 a 45 palavras) que buscadores e IAs citam. Depois, `body` com `<h2>`: o que é, base normativa e como se aplica no Brasil, como funciona na prática, erro comum, como a kycert trata (curto e honesto). FAQ com 2 a 3 perguntas. Linke termos relacionados (`relatedTerms`), posts (`relatedPosts`) e produtos (`solutions`).
