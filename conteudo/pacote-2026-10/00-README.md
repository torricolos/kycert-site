# Pacote de conteúdo: outubro/2026

13 artigos para preencher as lacunas do blog da kycert: os pilares de KYC, KYT e PLD/FT, o cluster KYT/cripto, PEP e sanções, e o cluster de fraude.

Pesquisa feita em 01/10/2026, com base nos textos oficiais das normas no portal do Banco Central e no Planalto. Os artigos e os incisos citados foram conferidos na fonte primária.

## Arquivos

| # | Arquivo | Slug | Tipo | Cluster | Categoria no blog (`data-cat`) |
|---|---|---|---|---|---|
| 01 | 01-resolucao-bcb-584-retencao-24h-cripto.md | /blog/resolucao-bcb-584-retencao-24h-cripto | Regulatório | KYT/cripto | PSAV |
| 02 | 02-o-que-e-kyc.md | /blog/o-que-e-kyc | **Pilar** | KYC | KYC |
| 03 | 03-o-que-e-pld-ft.md | /blog/o-que-e-pld-ft | **Pilar** | PLD/FT | PLD/FT |
| 04 | 04-o-que-e-kyt.md | /blog/o-que-e-kyt | **Pilar** | KYT/cripto | KYT/Cripto |
| 05 | 05-kyc-kyb-kyt-diferencas.md | /blog/kyc-kyb-kyt-diferencas | Cluster | KYC | KYC |
| 06 | 06-monitoramento-de-transacoes-pld.md | /blog/monitoramento-de-transacoes-pld | Cluster | PLD/FT | PLD/FT |
| 07 | 07-travel-rule-brasil.md | /blog/travel-rule-brasil | Regulatório | KYT/cripto | PSAV |
| 08 | 08-analise-de-carteiras-cripto.md | /blog/analise-de-carteiras-cripto | Cluster | KYT/cripto | KYT/Cripto |
| 09 | 09-usdt-stablecoins-risco-compliance.md | /blog/usdt-stablecoins-risco-compliance | Cluster | KYT/cripto | KYT/Cripto |
| 10 | 10-pessoa-exposta-politicamente-pep.md | /blog/pessoa-exposta-politicamente-pep | Cluster | KYC | KYC |
| 11 | 11-listas-de-sancoes-lei-13810.md | /blog/listas-de-sancoes-lei-13810 | Cluster | PLD/FT | PLD/FT |
| 12 | 12-contas-laranja-contas-de-passagem.md | /blog/contas-laranja-contas-de-passagem | Cluster | Fraude | Fraude |
| 13 | 13-fraude-documental-onboarding.md | /blog/fraude-documental-onboarding | Cluster | Fraude | Fraude |

Cada arquivo tem um **frontmatter YAML** com:

- SEO: title, meta, slug, H1;
- estratégia: palavra-chave, intenção, público, objetivo, oportunidade na SERP;
- links internos de saída e de entrada;
- CTAs;
- imagem e alt text;
- schema e fontes.

O corpo vem em Markdown: H1, artigo, FAQ, conclusão, CTA e "Leia também".

## Arquitetura de links (pilar → cluster → comercial)

```
O que é PLD/FT (pilar)
├── O que é KYC (pilar)
│   ├── KYC, KYB e KYT: diferenças ──► Beneficiário final (UBO) [existente]
│   ├── PEP ──────────────────────────► /produto/monitoramento
│   ├── Fraude documental ────────────► /produto/ocr
│   └── Contas laranja ───────────────► /produto/kyc
├── Monitoramento de transações
├── Listas de sanções ────────────────► /produto/monitoramento
└── O que é KYT (pilar)
    ├── Análise de carteiras
    ├── Travel Rule ──────────────────► Res. BCB 520 [existente]
    ├── USDT e stablecoins ───────────► Lei 14.286 câmbio [existente]
    └── Resolução BCB 584 ────────────► /solucoes/psav
```

Comerciais usados nos CTAs: `/solucoes/psav`, `/solucoes/cambio`, `/produto/kyc`, `/produto/kyb`, `/produto/monitoramento`, `/produto/ocr`, `/dossie-exemplo` e `/lp-pld-ft`. Todos existem hoje no site.

---

## Instruções de deploy (para o Claude Code)

### 1. Criar as páginas
Para cada arquivo `01` a `13`, crie `app/blog/<slug>/page.tsx` seguindo **exatamente o padrão de `app/blog/resolucao-bcb-520-psav/page.tsx`**:

- `metadata`: `title` = `titulo_seo`, `description` = `meta_description`, `alternates.canonical` = slug, `openGraph` e `twitter` com o sufixo ` | kycert` no título, igual aos posts atuais.
- `JSONLD`: `Article` com `headline` = `h1`, `description`, `inLanguage: pt-BR`, `datePublished` e `dateModified` = `data_publicacao` e `atualizado_em`, `author` e `publisher` como nos posts atuais.
- **Adicionar um segundo JSON-LD `FAQPage`** montado a partir da seção "Perguntas frequentes" (cada `###` é uma `Question`, o parágrafo seguinte é a `acceptedAnswer`).
- `BREADCRUMB_ITEMS`: Início → Blog → `breadcrumb`.
- `BODY_HTML` com as mesmas classes dos posts existentes:
  - `crumbs`;
  - `article`;
  - `art-eyebrow` (= `eyebrow`);
  - `art-meta` (categoria · data em dd/mm/aaaa · `tempo_leitura` de leitura);
  - o primeiro parágrafo do artigo como `lead-p`;
  - tabelas Markdown → `<table>`;
  - blockquotes de "Fato vs. interpretação" ou "Ponto de atenção" → `<blockquote>`;
  - o bloco CTA final → `<div class="art-cta">` com `btn btn-primary btn-lg` (cta_primario) e `btn btn-ghost btn-lg` (cta_secundario);
  - "Leia também" → `<div class="readalso"><h4>Leia também</h4>…</div>`.
- Se não houver estilo para `table` e `blockquote` dentro de `.article`, adicione em `globals.css` usando os tokens de cor existentes.
- Links externos com `target="_blank" rel="noopener"`.
- Não incluir o frontmatter no HTML. Ele é só metadado.

### 2. Índice do blog (`app/blog/page.tsx`)
- Adicione um `blog-card` por artigo, no topo e em ordem do mais recente. Use `data-cat` conforme a tabela acima, `<span class="cat">` = `breadcrumb`, `<h3>` = `h1`, `<p>` = `meta_description` e a data.
- Adicione os novos filtros: `<button class="bf" data-f="KYC">KYC</button>`, `<button class="bf" data-f="KYT/Cripto">KYT/Cripto</button>` e `<button class="bf" data-f="Fraude">Fraude</button>`.
- Atualize o JSON-LD `Blog.blogPost` com os 13 novos posts.

### 3. Sitemap (`app/sitemap.ts`)
Adicione os 13 slugs à lista.

### 4. Links nos posts existentes ("Leia também")
Atualize o bloco `readalso` destes posts existentes:

| Post existente | Adicionar links para |
|---|---|
| /blog/resolucao-bcb-520-psav | resolucao-bcb-584-retencao-24h-cripto, travel-rule-brasil, o-que-e-kyt |
| /blog/comprovar-pld-ft-fiscalizacao-bacen | o-que-e-pld-ft, monitoramento-de-transacoes-pld |
| /blog/checklist-prontidao-fiscalizacao | o-que-e-pld-ft, listas-de-sancoes-lei-13810 |
| /blog/beneficiario-final-ubo-kyb | kyc-kyb-kyt-diferencas, pessoa-exposta-politicamente-pep |
| /blog/lei-14286-cambio-cadastro | usdt-stablecoins-risco-compliance, resolucao-bcb-584-retencao-24h-cripto |
| /blog/abertura-conta-fintech-kyb-escala | o-que-e-kyc, contas-laranja-contas-de-passagem, fraude-documental-onboarding |
| /blog/cooperativas-credito-3978-associados | o-que-e-kyc, pessoa-exposta-politicamente-pep |
| /blog/bets-lei-14790-pld-onboarding | o-que-e-pld-ft, fraude-documental-onboarding |
| /blog/seguradoras-susep-onboarding-pld | o-que-e-pld-ft |
| /blog/consorcios-mercado-capitais-onboarding | o-que-e-kyc |

### 5. Imagens
Cada frontmatter traz `imagem` (briefing) e `imagem_alt`. Se não houver imagem pronta, publique sem imagem destacada. **Não** use imagem genérica de banco de imagens.

### 6. Checagem final
- `npm run build` sem erros.
- Cada página nova abre, tem um único `<h1>` e o JSON-LD é válido (FAQPage e Article).
- Nenhum link interno quebrado: todos os slugs do pacote mais `/solucoes/psav`, `/solucoes/cambio`, `/produto/kyc`, `/produto/kyb`, `/produto/monitoramento`, `/produto/ocr`, `/dossie-exemplo`, `/lp-pld-ft` e `/conformidade`.

---

## Cadência sugerida

Publicar tudo de uma vez não traz problema de SEO. Se preferir manter a cadência semanal (melhor para newsletter e LinkedIn), esta é a ordem por urgência e potencial:

1. Res. BCB 584 (vigência em 01/01/2027)
2. O que é KYT
3. Travel Rule (etapa I até 02/02/2027)
4. O que é KYC
5. PEP
6. O que é PLD/FT
7. Listas de sanções
8. KYC, KYB e KYT
9. Monitoramento de transações
10. USDT e stablecoins
11. Análise de carteiras
12. Contas laranja
13. Fraude documental

## Pontos para revisão humana antes de publicar

- **Leitura da contagem das 24h (Res. 584):** o artigo 01 marca a leitura literal como interpretação e recomenda confirmar com o jurídico.
- **Listas estrangeiras (OFAC/UE):** o artigo 11 trata como decisão de risco, não como obrigação legal, e deixa a distinção explícita.
- **Capacidades da kycert:** os CTAs citam só o que as páginas `/produto/*` e `/solucoes/psav` já descrevem (KYC, KYB, PEP, sanções, mídia adversa, OCR, reverificação e Dossiê de Risco). Nenhum CTA promete monitoramento transacional nem análise on-chain, que a página de PSAV diz não oferecer.
