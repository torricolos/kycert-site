import type { MetadataRoute } from 'next';

const BASE = 'https://kycert.com.br';

const ROUTES = [
  '/',
  '/produto/kyc',
  '/produto/kyb',
  '/produto/dossie-de-risco',
  '/produto/ocr',
  '/produto/monitoramento',
  '/produto/api',
  '/solucoes/cambio',
  '/solucoes/psav',
  '/solucoes/bancos',
  '/solucoes/cooperativas',
  '/solucoes/mercado-capitais',
  '/solucoes/seguradoras',
  '/solucoes/bets',
  '/lp-pld-ft',
  '/blog',
  '/blog/consorcios-mercado-capitais-onboarding',
  '/blog/abertura-conta-fintech-kyb-escala',
  '/blog/cooperativas-credito-3978-associados',
  '/blog/seguradoras-susep-onboarding-pld',
  '/blog/bets-lei-14790-pld-onboarding',
  '/blog/resolucao-bcb-520-psav',
  '/blog/comprovar-pld-ft-fiscalizacao-bacen',
  '/blog/beneficiario-final-ubo-kyb',
  '/blog/checklist-prontidao-fiscalizacao',
  '/blog/lei-14286-cambio-cadastro',
  '/links',
  '/faq',
  '/guias',
  '/conformidade',
  '/precos',
  '/seguranca',
  '/dossie-exemplo',
  '/termos',
  '/privacidade',
  '/tratamento-de-dados',
];

// Última alteração real de conteúdo. Posts do blog usam a data do próprio artigo; as demais páginas, a última revisão do site.
const DEFAULT_LASTMOD = '2026-10-16';
const LASTMOD: Record<string, string> = {
  '/blog': '2026-06-26',
  '/blog/consorcios-mercado-capitais-onboarding': '2026-06-26',
  '/blog/abertura-conta-fintech-kyb-escala': '2026-06-24',
  '/blog/cooperativas-credito-3978-associados': '2026-06-22',
  '/blog/seguradoras-susep-onboarding-pld': '2026-06-19',
  '/blog/bets-lei-14790-pld-onboarding': '2026-06-18',
  '/blog/resolucao-bcb-520-psav': '2026-05-12',
  '/blog/comprovar-pld-ft-fiscalizacao-bacen': '2026-05-28',
  '/blog/beneficiario-final-ubo-kyb': '2026-06-02',
  '/blog/checklist-prontidao-fiscalizacao': '2026-06-05',
  '/blog/lei-14286-cambio-cadastro': '2026-06-09',
};

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date(LASTMOD[route] ?? DEFAULT_LASTMOD),
  }));
}
