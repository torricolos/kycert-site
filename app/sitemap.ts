import type { MetadataRoute } from 'next';
import { publishedPosts } from '@/lib/blog';
import { TERMS } from '@/lib/glossary-data';

export const revalidate = 3600;

const BASE = 'https://kycert.com.br';

/**
 * lastmod = data da última alteração REAL de conteúdo da página (não a do último deploy).
 * Ao editar o conteúdo de uma página, atualize a data dela aqui. Posts do blog e termos do
 * glossário usam o dateModified do próprio conteúdo. O Google ignora lastmod que muda sem
 * mudança de conteúdo, então não use a data de hoje como padrão.
 *
 * Fora do sitemap de propósito: /links e /lp-pld-ft (páginas de campanha, noindex), /obrigado.
 */
const PAGES: Record<string, string> = {
  '/': '2026-11-02',
  '/produto/kyc': '2026-11-02',
  '/produto/kyb': '2026-11-02',
  '/produto/dossie-de-risco': '2026-11-02',
  '/produto/ocr': '2026-11-02',
  '/produto/monitoramento': '2026-11-02',
  '/produto/api': '2026-11-02',
  '/solucoes/cambio': '2026-11-02',
  '/solucoes/psav': '2026-11-02',
  '/solucoes/bancos': '2026-11-02',
  '/solucoes/cooperativas': '2026-11-02',
  '/solucoes/mercado-capitais': '2026-11-02',
  '/solucoes/seguradoras': '2026-11-02',
  '/solucoes/bets': '2026-11-02',
  '/sobre': '2026-11-02',
  '/faq': '2026-11-02',
  '/guias': '2026-11-02',
  '/conformidade': '2026-11-02',
  '/precos': '2026-09-04',
  '/seguranca': '2026-09-04',
  '/dossie-exemplo': '2026-07-24',
  '/termos': '2026-08-07',
  '/privacidade': '2026-08-07',
  '/tratamento-de-dados': '2026-08-07',
};

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = publishedPosts();
  const newest = posts.reduce((m, p) => (p.dateModified > m ? p.dateModified : m), '2000-01-01');
  const glossaryNewest = TERMS.reduce((m, t) => (t.dateModified > m ? t.dateModified : m), '2000-01-01');

  return [
    ...Object.entries(PAGES).map(([route, date]) => ({ url: `${BASE}${route}`, lastModified: new Date(date) })),
    { url: `${BASE}/blog`, lastModified: new Date(newest) },
    ...posts.map((p) => ({ url: `${BASE}/blog/${p.slug}`, lastModified: new Date(p.dateModified) })),
    { url: `${BASE}/glossario`, lastModified: new Date(glossaryNewest) },
    ...TERMS.map((t) => ({ url: `${BASE}/glossario/${t.slug}`, lastModified: new Date(t.dateModified) })),
  ];
}
