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

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((route) => ({
    url: `${BASE}${route}`,
    lastModified: new Date('2026-06-27'),
  }));
}
