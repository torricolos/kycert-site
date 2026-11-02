import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { TERMS, getTerm } from '@/lib/glossary-data';
import { ALL_POSTS } from '@/lib/blog';
import { isPublished, withToc } from '@/lib/posts';
import { AUTHORS, DEFAULT_AUTHOR, authorSchema } from '@/lib/authors';
import { ogImage } from '@/lib/og';
import { BASE, ORG_ID, WHATSAPP_DEMO, formatDateBR, jsonLd } from '@/lib/site';

export function generateStaticParams() {
  return TERMS.map((t) => ({ termo: t.slug }));
}

export function generateMetadata({ params }: { params: { termo: string } }): Metadata {
  const t = getTerm(params.termo);
  if (!t) return {};
  const url = `/glossario/${t.slug}`;
  const img = ogImage(`glossario-${t.slug}`);
  return {
    title: t.metaTitle,
    description: t.description,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      siteName: 'kycert',
      url,
      title: `${t.metaTitle} | kycert`,
      description: t.description,
      publishedTime: t.datePublished,
      modifiedTime: t.dateModified,
      images: [{ url: img, width: 1200, height: 630, alt: `${t.term}: ${t.fullName}` }],
    },
    twitter: { card: 'summary_large_image', title: `${t.metaTitle} | kycert`, description: t.description, images: [img] },
  };
}

export default function Page({ params }: { params: { termo: string } }) {
  const t = getTerm(params.termo);
  if (!t) notFound();

  const url = `${BASE}/glossario/${t.slug}`;
  const { html, toc } = withToc(t.body);
  const author = AUTHORS[DEFAULT_AUTHOR];
  const relatedTerms = t.relatedTerms.map((s) => getTerm(s)).filter((x): x is NonNullable<typeof x> => !!x);
  const relatedPosts = t.relatedPosts
    .map((s) => ALL_POSTS.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => !!p && isPublished(p));

  const termLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `${url}#term`,
    name: t.term,
    alternateName: t.fullName,
    description: t.shortDef,
    url,
    inLanguage: 'pt-BR',
    inDefinedTermSet: `${BASE}/glossario#set`,
  };
  const pageLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    name: t.metaTitle,
    description: t.description,
    inLanguage: 'pt-BR',
    datePublished: t.datePublished,
    dateModified: t.dateModified,
    author: authorSchema(author),
    publisher: { '@id': ORG_ID },
    mainEntity: { '@id': `${url}#term` },
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'pt-BR',
    mainEntity: t.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
  };

  return (
    <>
      <Nav active="recursos" />
      <BreadcrumbJsonLd items={[{ name: 'Início', path: '/' }, { name: 'Glossário', path: '/glossario' }, { name: t.term }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(termLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqLd) }} />

      <nav className="crumbs">
        <div className="wrap">
          <a href="/">Início</a>
          <span className="sep">/</span>
          <a href="/glossario">Glossário</a>
          <span className="sep">/</span>
          <span style={{ color: 'var(--text-secondary)' }}>{t.term}</span>
        </div>
      </nav>

      <section style={{ padding: '36px 24px 80px' }}>
        <article className="article">
          <div className="art-eyebrow">Glossário</div>
          <h1>
            {t.term}: {t.fullName}
          </h1>
          <div className="art-meta">
            <span>
              Por <a href={author.url}>{author.name}</a>
            </span>
            <span>
              Atualizado em <time dateTime={t.dateModified}>{formatDateBR(t.dateModified)}</time>
            </span>
          </div>

          <div className="def-box">
            <p>{t.shortDef}</p>
          </div>

          {toc.length > 3 && (
            <nav className="toc" aria-label="Nesta página">
              <p className="toc-h">Nesta página</p>
              <ol>
                {toc.map((x) => (
                  <li key={x.id}>
                    <a href={`#${x.id}`}>{x.text}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <section className="art-faq" aria-labelledby="duvidas">
            <h2 id="duvidas">Dúvidas comuns sobre {t.term}</h2>
            <div className="faq">
              {t.faq.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    {f.q}
                    <span className="plus">+</span>
                  </summary>
                  <div className="ans" dangerouslySetInnerHTML={{ __html: f.a }} />
                </details>
              ))}
            </div>
          </section>

          {t.solutions.length > 0 && (
            <div className="sol-links">
              <p className="ra-h">Na plataforma</p>
              {t.solutions.map((s) => (
                <a key={s.href} href={s.href}>
                  {s.label} →
                </a>
              ))}
            </div>
          )}

          {relatedTerms.length > 0 && (
            <div className="readalso">
              <p className="ra-h">Termos relacionados</p>
              <div className="chips">
                {relatedTerms.map((r) => (
                  <a key={r.slug} href={`/glossario/${r.slug}`}>
                    {r.term}
                  </a>
                ))}
                <a href="/glossario">Todos os termos</a>
              </div>
            </div>
          )}

          {relatedPosts.length > 0 && (
            <div className="readalso">
              <p className="ra-h">Leia também</p>
              <div className="rgrid">
                {relatedPosts.map((r) => (
                  <a key={r.slug} className="rcard" href={`/blog/${r.slug}`}>
                    {r.title}
                    <small>{r.category}</small>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="art-cta">
            <p>Veja como a kycert aplica {t.term} numa trilha auditável, do convite à decisão registrada.</p>
            <div className="cta">
              <a href={WHATSAPP_DEMO} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Agendar demo
              </a>
              <a href="/dossie-exemplo" className="btn btn-ghost btn-lg">
                Ver dossiê de exemplo
              </a>
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </>
  );
}
