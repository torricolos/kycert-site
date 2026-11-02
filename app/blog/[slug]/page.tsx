import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { ALL_POSTS, getPost, publishedPosts } from '@/lib/blog';
import { authorId, isPublished, postWords, readingMinutes, withToc } from '@/lib/posts';
import { AUTHORS, authorSchema } from '@/lib/authors';
import { ogImage } from '@/lib/og';
import { BASE, ORG_ID, WHATSAPP_DEMO, formatDateBR, jsonLd } from '@/lib/site';

// Reavalia o calendário editorial: um post agendado aparece sozinho quando a data chega.
export const revalidate = 3600;

export function generateStaticParams() {
  return publishedPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post || !isPublished(post)) return {};
  const url = `/blog/${post.slug}`;
  const img = ogImage(`blog-${post.slug}`);
  const author = AUTHORS[authorId(post)];
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: url },
    authors: [{ name: author.name, url: author.url }],
    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      url,
      siteName: 'kycert',
      title: `${post.metaTitle} | kycert`,
      description: post.description,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [author.name],
      section: post.category,
      images: [{ url: img, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', title: `${post.metaTitle} | kycert`, description: post.description, images: [img] },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post || !isPublished(post)) notFound();

  const author = AUTHORS[authorId(post)];
  const { html, toc } = withToc(post.body);
  const minutes = readingMinutes(post);
  const url = `${BASE}/blog/${post.slug}`;
  const img = ogImage(`blog-${post.slug}`);

  const related = post.related
    .map((s) => ALL_POSTS.find((p) => p.slug === s))
    .filter((p): p is NonNullable<typeof p> => !!p && isPublished(p));

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}#article`,
    mainEntityOfPage: url,
    headline: post.title,
    description: post.description,
    image: [img],
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: 'pt-BR',
    articleSection: post.category,
    wordCount: postWords(post),
    author: authorSchema(author),
    publisher: { '@id': ORG_ID, '@type': 'Organization', name: 'kycert', logo: { '@type': 'ImageObject', url: `${BASE}/images/logo.png` } },
    ...(post.figure ? { associatedMedia: { '@type': 'ImageObject', contentUrl: `${BASE}${post.figure.src}`, description: post.figure.alt } } : {}),
  };
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'pt-BR',
    mainEntity: post.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') } })),
  };

  return (
    <>
      <Nav active="recursos" />
      <BreadcrumbJsonLd items={[{ name: 'Início', path: '/' }, { name: 'Blog', path: '/blog' }, { name: post.eyebrow }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(article) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faqLd) }} />

      <nav className="crumbs">
        <div className="wrap">
          <a href="/">Início</a>
          <span className="sep">/</span>
          <a href="/blog">Blog</a>
          <span className="sep">/</span>
          <span style={{ color: 'var(--text-secondary)' }}>{post.eyebrow}</span>
        </div>
      </nav>

      <section style={{ padding: '36px 24px 80px' }}>
        <article className="article">
          <div className="art-eyebrow">{post.eyebrow}</div>
          <h1>{post.title}</h1>
          <div className="art-meta">
            <span>
              Por <a href={author.url}>{author.name}</a>
            </span>
            <span>
              Publicado em <time dateTime={post.datePublished}>{formatDateBR(post.datePublished)}</time>
            </span>
            {post.dateModified !== post.datePublished && (
              <span>
                Atualizado em <time dateTime={post.dateModified}>{formatDateBR(post.dateModified)}</time>
              </span>
            )}
            <span>{minutes} min de leitura</span>
          </div>

          <p className="lead-p" dangerouslySetInnerHTML={{ __html: post.lead }} />

          {post.figure && (
            <figure className="art-figure">
              <img src={post.figure.src} alt={post.figure.alt} width={post.figure.width} height={post.figure.height} decoding="async" />
              <figcaption>{post.figure.caption}</figcaption>
            </figure>
          )}

          {toc.length > 2 && (
            <nav className="toc" aria-label="Neste artigo">
              <p className="toc-h">Neste artigo</p>
              <ol>
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`}>{t.text}</a>
                  </li>
                ))}
                <li>
                  <a href="#perguntas-frequentes">Perguntas frequentes</a>
                </li>
              </ol>
            </nav>
          )}

          <div dangerouslySetInnerHTML={{ __html: html }} />

          <section className="art-faq" aria-labelledby="perguntas-frequentes">
            <h2 id="perguntas-frequentes">Perguntas frequentes</h2>
            <div className="faq">
              {post.faq.map((f, i) => (
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

          <p className="art-disclaimer">
            Conteúdo informativo, elaborado a partir das normas citadas e sujeito a atualização regulatória. Não substitui assessoria jurídica nem dispensa a
            leitura do texto vigente da norma. Sobre como produzimos e revisamos o conteúdo, veja <a href="/sobre#politica-editorial">nossa política editorial</a>.
          </p>

          {post.solutions.length > 0 && (
            <div className="sol-links">
              <p className="ra-h">Na plataforma</p>
              {post.solutions.map((s) => (
                <a key={s.href} href={s.href}>
                  {s.label} →
                </a>
              ))}
            </div>
          )}

          <div className="art-cta">
            <p>Veja como a kycert registra cada etapa do onboarding como evidência pronta para a fiscalização.</p>
            <div className="cta">
              <a href={WHATSAPP_DEMO} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Agendar demo
              </a>
              <a href="/dossie-exemplo" className="btn btn-ghost btn-lg">
                Ver dossiê de exemplo
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className="readalso">
              <p className="ra-h">Leia também</p>
              <div className="rgrid">
                {related.map((r) => (
                  <a key={r.slug} className="rcard" href={`/blog/${r.slug}`}>
                    {r.title}
                    <small>
                      {r.category} · {readingMinutes(r)} min
                    </small>
                  </a>
                ))}
              </div>
            </div>
          )}
        </article>
      </section>

      <Footer />
    </>
  );
}
