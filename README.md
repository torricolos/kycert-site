# KYCERT · Site (Next.js 14)

Export do site institucional KYCERT em Next.js 14 (App Router) com TypeScript, pronto pra deploy no Vercel.

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run start
```

## Deploy no Vercel

1. Faça push do código pro GitHub
2. Em [vercel.com/new](https://vercel.com/new), importe o repo
3. Vercel detecta Next.js automaticamente — sem configuração extra
4. Deploy

## Estrutura

```
nextjs-export/
├── app/
│   ├── layout.tsx              ← layout raiz com metadata SEO + JSON-LD
│   ├── page.tsx                ← página principal /
│   └── globals.css             ← tokens CSS (light + dark) + reset
├── components/
│   ├── useTheme.ts             ← hook de light/dark com persistência
│   ├── Icon.tsx                ← set de 23 ícones line (lucide-style)
│   ├── Mark.tsx                ← wordmark "kycert" + ponto verde
│   ├── Nav.tsx                 ← top nav sticky com dropdown
│   ├── Section.tsx             ← wrapper de seção + Eyebrow
│   ├── PreviewFrame.tsx        ← frame de browser para mocks
│   ├── PreviewCards.tsx        ← 4 cards: convite, form, compliance, aprovado
│   ├── Hero.tsx                ← seção hero
│   ├── Problem.tsx             ← seção problema
│   ├── HowItWorks.tsx          ← seção 4 etapas (zigzag)
│   ├── Security.tsx            ← seção conformidade fundo preto
│   ├── FinalCta.tsx            ← bloco CTA final
│   └── Footer.tsx              ← rodapé 5 colunas
├── public/
│   └── images/                 ← assets externos (ver abaixo)
├── package.json
├── tsconfig.json
└── next.config.js
```

## Assets que você precisa fornecer

Coloque em `public/images/`:

| Arquivo | Dimensão | Descrição |
|---|---|---|
| `og-image.png` | 1200×630 | Open Graph image — aparece quando o link é compartilhado em LinkedIn, WhatsApp, Slack etc |
| `favicon.svg` | vetor | Favicon (você pode gerar a partir do logo-pack do projeto KYCERT) |
| `apple-touch-icon.png` | 180×180 | Ícone iOS para "adicionar à tela inicial" |

## Dependências externas

- **Next.js 14.2** (framework)
- **React 18.3** (runtime)
- **TypeScript 5.5** (tipagem)
- **Inter Tight**, **Instrument Serif**, **JetBrains Mono** — via `@import` em `globals.css` (Google Fonts, sem npm)

Sem outras libs. Sem framer-motion, sem lucide-react, sem nada. Tudo é CSS variables + SVG inline.

## SEO

Metadata configurada em `app/layout.tsx`:

- `<title>` template + default
- `<meta description>` em pt-BR otimizado
- Keywords array (KYC, PF/PJ, BCB, LGPD, COAF, etc)
- Open Graph completo (og:title, og:description, og:image, og:locale=pt_BR)
- Twitter Card summary_large_image
- **JSON-LD structured data** (`SoftwareApplication` schema)
- Canonical URL
- robots: index, follow
- Favicon + apple-touch-icon

Pra customizar, edite o objeto `metadata` no `layout.tsx`.

## Notas técnicas

- Componentes server-side por padrão; só `Nav.tsx` e `useTheme.ts` são `'use client'` (precisam de interatividade pra dropdown + theme toggle).
- Theme `data-theme` é aplicado no `<html>` via `useEffect` no primeiro mount — a página inicial sempre renderiza em light, e a preferência salva entra logo após hidratação. Isso é compatível com SSR/SSG do Next.
- Todas as cores via CSS variables → mudança de tema é instantânea sem re-render.
- Fonts carregadas via `@import` no globals.css (não via `next/font`) para compatibilidade com `@font-face` warm-up no Vercel Edge.
- Smooth scroll global via `html { scroll-behavior: smooth }` para links âncora (#produto, #seguranca).
