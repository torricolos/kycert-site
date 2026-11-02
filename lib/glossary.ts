import type { Faq } from './posts';

export type Term = {
  slug: string;
  /** Sigla exibida (ex.: "KYC") */
  term: string;
  /** Nome por extenso (ex.: "Know Your Customer") */
  fullName: string;
  /** <title> sem sufixo da marca */
  metaTitle: string;
  /** meta description, até ~155 caracteres */
  description: string;
  /** Definição direta em 1 a 2 frases: vira o DefinedTerm.description e o snippet para buscadores e IAs */
  shortDef: string;
  datePublished: string;
  dateModified: string;
  /** Corpo em HTML (h2/h3/p/ul), 400 a 600 palavras no total com a definição e o FAQ */
  body: string;
  faq: Faq[];
  /** slugs de outros termos */
  relatedTerms: string[];
  /** slugs de posts do blog */
  relatedPosts: string[];
  /** Links para produto/solução */
  solutions: { href: string; label: string }[];
};
