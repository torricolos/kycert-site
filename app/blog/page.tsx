import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { publishedPosts } from '@/lib/blog';
import { readingMinutes } from '@/lib/posts';
import { BASE, DEFAULT_OG, formatDateBR, jsonLd } from '@/lib/site';

export const revalidate = 3600;

const TITLE = 'Blog de compliance, KYC e PLD/FT';
const DESC =
  'Artigos práticos sobre KYC, KYB, PLD/FT, Circular BCB 3.978 e regulação do BACEN e da CVM, com checklist e como evidenciar na fiscalização.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: '/blog' },
  openGraph: {
    images: [{ url: DEFAULT_OG, width: 1200, height: 630, alt: 'kycert: comprove cada cliente, cada decisão.' }],
    locale: 'pt_BR',
    siteName: 'kycert',
    type: 'website',
    title: `${TITLE} | kycert`,
    description: DESC,
    url: '/blog',
  },
  twitter: { images: [DEFAULT_OG], card: 'summary_large_image', title: `${TITLE} | kycert`, description: DESC },
};

const FILTERS = ['PSAV', 'PLD/FT', 'KYB', 'Câmbio', 'Segmentos'];

const FILTER_SCRIPT = `document.querySelectorAll('.bf').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.bf').forEach(function(x){x.classList.remove('active')});b.classList.add('active');var f=b.getAttribute('data-f');document.querySelectorAll('.blog-card').forEach(function(c){c.style.display=(f==='todos'||c.getAttribute('data-cat')===f)?'':'none'});});});`;

export default function Page() {
  const posts = publishedPosts();
  const blogLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${BASE}/blog#blog`,
    name: 'Blog kycert',
    url: `${BASE}/blog`,
    inLanguage: 'pt-BR',
    publisher: { '@id': `${BASE}/#organization` },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      headline: p.title,
      url: `${BASE}/blog/${p.slug}`,
      datePublished: p.datePublished,
      dateModified: p.dateModified,
    })),
  };

  return (
    <>
      <Nav active="recursos" />
      <BreadcrumbJsonLd items={[{ name: 'Início', path: '/' }, { name: 'Blog' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(blogLd) }} />

      <nav className="crumbs">
        <div className="wrap">
          <a href="/">Início</a>
          <span className="sep">/</span>
          <span style={{ color: 'var(--text-secondary)' }}>Blog</span>
        </div>
      </nav>

      <section style={{ padding: '48px 0 80px' }}>
        <div className="wrap sec-head">
          <span className="eyebrow">Blog</span>
          <h1 className="as-h2" style={{ marginTop: 14 }}>
            Regulação, compliance e onboarding, sem rodeio.
          </h1>
          <p className="sec-lead">
            Guias com a norma citada, checklist e o que guardar para a fiscalização. Procurando uma sigla? Veja o{' '}
            <a href="/glossario" style={{ color: 'var(--text-link)' }}>
              glossário de KYC, KYB e PLD/FT
            </a>
            .
          </p>
          <div className="blog-filters">
            <button className="bf active" data-f="todos">
              Todos
            </button>
            {FILTERS.map((f) => (
              <button key={f} className="bf" data-f={f}>
                {f}
              </button>
            ))}
          </div>
          <div className="blog-hub">
            {posts.map((p) => (
              <a key={p.slug} className="blog-card" data-cat={p.category} href={`/blog/${p.slug}`}>
                <span className="cat">{p.eyebrow}</span>
                <h2>{p.title}</h2>
                <p>{p.excerpt}</p>
                <div className="meta">
                  <span>{formatDateBR(p.datePublished)}</span>
                  <span>{readingMinutes(p)} min de leitura</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <script dangerouslySetInnerHTML={{ __html: FILTER_SCRIPT }} />
    </>
  );
}
