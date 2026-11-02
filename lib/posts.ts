import { todayISO } from './site';
import { DEFAULT_AUTHOR } from './authors';

export type Faq = { q: string; a: string };

export type PostFigure = { src: string; alt: string; caption: string; width: number; height: number };

export type PostCategory = 'PSAV' | 'PLD/FT' | 'KYB' | 'Câmbio' | 'Segmentos';

export type Post = {
  slug: string;
  /** H1 do artigo */
  title: string;
  /** <title> (sem o sufixo da marca, o template acrescenta) */
  metaTitle: string;
  /** meta description, até ~155 caracteres */
  description: string;
  category: PostCategory;
  /** Rótulo exibido no card e no eyebrow (ex.: "PSAV / regulação") */
  eyebrow: string;
  /** Resumo de 1 a 2 frases para o card do blog */
  excerpt: string;
  datePublished: string; // YYYY-MM-DD
  dateModified: string; // YYYY-MM-DD
  author?: string;
  /** Parágrafo de abertura (HTML inline permitido) */
  lead: string;
  figure?: PostFigure;
  /** Corpo em HTML: h2/h3/p/ul/ol/table/div.callout. Cada h2 recebe id e entra no sumário. */
  body: string;
  faq: Faq[];
  /** slugs de posts relacionados (3 a 4) */
  related: string[];
  /** Link contextual para solução e produto, usados no bloco "Na plataforma" */
  solutions: { href: string; label: string }[];
};

/** Número de palavras do texto visível (sem tags). */
export function countWords(html: string): number {
  const text = html.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
  return text.split(/\s+/).filter(Boolean).length;
}

export function postWords(p: Post): number {
  return countWords(p.lead) + countWords(p.body) + p.faq.reduce((n, f) => n + countWords(f.q) + countWords(f.a), 0);
}

export function readingMinutes(p: Post): number {
  return Math.max(1, Math.round(postWords(p) / 200));
}

export function isPublished(p: Post, today = todayISO()): boolean {
  return p.datePublished <= today;
}

export function authorId(p: Post): string {
  return p.author ?? DEFAULT_AUTHOR;
}

/** Adiciona id aos h2 e devolve o corpo + sumário. */
export function withToc(body: string): { html: string; toc: { id: string; text: string }[] } {
  const toc: { id: string; text: string }[] = [];
  const used = new Set<string>();
  const html = body.replace(/<h2>([\s\S]*?)<\/h2>/g, (_m, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, '').trim();
    let id = text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
      .slice(0, 60);
    while (used.has(id)) id += '-2';
    used.add(id);
    toc.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { html, toc };
}
