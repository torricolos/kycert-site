import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { TERMS } from '@/lib/glossary-data';
import { BASE, DEFAULT_OG, jsonLd } from '@/lib/site';
import { ogImage } from '@/lib/og';

const TITLE = 'Glossário de KYC, KYB e PLD/FT';
const DESC =
  'Definições diretas de KYC, KYB, KYT, PEP, UBO, ABR, PLD/FT, CDD e EDD, com a base normativa brasileira e como aplicar na prática.';

export function generateMetadata(): Metadata {
  const img = ogImage('glossario');
  return {
    title: TITLE,
    description: DESC,
    alternates: { canonical: '/glossario' },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: 'kycert',
      url: '/glossario',
      title: `${TITLE} | kycert`,
      description: DESC,
      images: [{ url: img || DEFAULT_OG, width: 1200, height: 630, alt: TITLE }],
    },
    twitter: { card: 'summary_large_image', title: `${TITLE} | kycert`, description: DESC, images: [img] },
  };
}

export default function Page() {
  const setLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': `${BASE}/glossario#set`,
    name: 'Glossário de KYC, KYB e PLD/FT',
    url: `${BASE}/glossario`,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${BASE}/#organization` },
    hasDefinedTerm: TERMS.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      alternateName: t.fullName,
      description: t.shortDef,
      url: `${BASE}/glossario/${t.slug}`,
      inDefinedTermSet: `${BASE}/glossario#set`,
    })),
  };

  return (
    <>
      <Nav active="recursos" />
      <BreadcrumbJsonLd items={[{ name: 'Início', path: '/' }, { name: 'Glossário' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(setLd) }} />

      <nav className="crumbs">
        <div className="wrap">
          <a href="/">Início</a>
          <span className="sep">/</span>
          <span style={{ color: 'var(--text-secondary)' }}>Glossário</span>
        </div>
      </nav>

      <section style={{ padding: '48px 0 80px' }}>
        <div className="wrap">
          <span className="eyebrow">Glossário</span>
          <h1 className="as-h2" style={{ marginTop: 14, maxWidth: '20ch' }}>
            Os termos de KYC e PLD/FT, definidos sem rodeio.
          </h1>
          <p className="sec-lead" style={{ maxWidth: '62ch' }}>
            Cada termo tem a definição direta, a base normativa no Brasil e como aplicar na operação. Para dúvidas sobre a plataforma, veja as{' '}
            <a href="/faq" style={{ color: 'var(--text-link)' }}>
              perguntas frequentes
            </a>
            .
          </p>
          <div className="gl-hub">
            {TERMS.map((t) => (
              <a key={t.slug} className="gl-card" href={`/glossario/${t.slug}`}>
                <div className="gt">{t.term}</div>
                <div className="gf">{t.fullName}</div>
                <p>{t.shortDef}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
