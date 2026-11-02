import { BASE, ORG_ID, jsonLd } from '@/lib/site';

/** SoftwareApplication de uma página de produto, com oferta apontando para /precos (cobrança por créditos, sem preço público). */
export function ProductJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${BASE}${path}#product`,
    name,
    url: `${BASE}${path}`,
    description,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: 'pt-BR',
    provider: { '@id': ORG_ID },
    offers: {
      '@type': 'Offer',
      url: `${BASE}/precos`,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
      description: 'Cobrança por créditos de verificação, com a plataforma inclusa. Plano dimensionado ao volume.',
      seller: { '@id': ORG_ID },
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(data) }} />;
}
