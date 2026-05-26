# KYCERT · Social media kit (Next.js 14)

Export do `social-kit.html` em formato Next.js 14 (App Router) pronto pra deploy no Vercel.

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
│   ├── layout.tsx        ← layout raiz com metadata SEO (title, description, og)
│   ├── page.tsx          ← página principal /
│   └── globals.css       ← tokens CSS + reset
├── components/
│   ├── drawing.ts        ← painters de canvas (mark, wordmark, covers)
│   ├── platforms.ts      ← config das 7 plataformas
│   ├── download.ts       ← downloadPng + downloadAllZip
│   ├── Hero.tsx          ← header com CTA de download zip
│   ├── PlatformList.tsx  ← grid de plataformas
│   ├── PlatformBadge.tsx ← badge com cor/icon da plataforma
│   ├── ItemCard.tsx      ← card de cada asset
│   ├── Preview.tsx       ← canvas preview
│   └── UploadTips.tsx    ← rodapé com dicas
├── public/
│   └── images/           ← assets externos (ver abaixo)
├── package.json
├── tsconfig.json
└── next.config.js
```

## Assets que você precisa fornecer

Coloque em `public/images/`:

| Arquivo | Dimensão | Descrição |
|---|---|---|
| `og-image.png` | 1200×630 | Imagem usada no Open Graph (LinkedIn, WhatsApp, Slack quando alguém compartilha o link) |
| `favicon.svg` | vetor (qualquer tamanho) | Favicon do site (já existe em `logo-pack.html` do projeto KYCERT) |
| `apple-touch-icon.png` | 180×180 | Ícone iOS pra quando alguém salva o site na tela inicial |

Você pode gerar todos esses a partir do próprio kit — rode `npm run dev`, baixe os PNGs que precisar e mova pra `public/images/`.

## Dependências externas

- **Next.js 14.2** (framework)
- **React 18.3** (runtime)
- **JSZip 3.10** (geração do zip de download em runtime no client)
- **Inter Tight, Instrument Serif, JetBrains Mono** — carregadas via `@import` em `globals.css` (Google Fonts, sem npm package)

Sem ícones externos, sem libs de animação. Tudo é canvas + CSS variables.

## SEO

Metadata configurada em `app/layout.tsx`:

- `<title>` e `<meta description>`
- Open Graph completo (og:title, og:description, og:image, og:locale=pt_BR)
- Twitter Card summary_large_image
- Favicon e apple-touch-icon
- `robots: index, follow`

Pra customizar, edite o objeto `metadata` no `layout.tsx`.

## Notas técnicas

- Toda renderização do canvas é client-side (`'use client'` nos componentes que usam `useState/useEffect/canvas`). Isso é OK porque o conteúdo gerado depende do browser (fonts, canvas API).
- O HTML inicial é estático e renderizado no servidor — o SEO continua intacto, só os canvas previews aparecem após hidratação.
- O JSZip é importado dinamicamente (`import('jszip')`) pra não bloquear o bundle inicial. Só carrega quando o usuário clica em "Baixar kit completo".
