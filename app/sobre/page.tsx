import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import { AUTHORS } from '@/lib/authors';
import { ogImage } from '@/lib/og';
import { BASE, ORG_ID, WHATSAPP_DEMO, jsonLd } from '@/lib/site';

const TITLE = 'Sobre a kycert e como produzimos o conteúdo';
const DESC =
  'Quem é a kycert, o que a plataforma faz e a política editorial do blog e do glossário: normas citadas, datas de atualização e canal de correções.';

export function generateMetadata(): Metadata {
  const img = ogImage('sobre');
  return {
    title: TITLE,
    description: DESC,
    alternates: { canonical: '/sobre' },
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      siteName: 'kycert',
      url: '/sobre',
      title: `${TITLE} | kycert`,
      description: DESC,
      images: [{ url: img, width: 1200, height: 630, alt: 'Sobre a kycert' }],
    },
    twitter: { card: 'summary_large_image', title: `${TITLE} | kycert`, description: DESC, images: [img] },
  };
}

export default function Page() {
  const team = AUTHORS.equipe;
  const aboutLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${BASE}/sobre`,
    url: `${BASE}/sobre`,
    name: TITLE,
    description: DESC,
    inLanguage: 'pt-BR',
    mainEntity: {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'kycert',
      legalName: 'KYCERT DESENVOLVIMENTO LTDA',
      taxID: '68.453.721/0001-90',
      url: `${BASE}/`,
      email: 'contato@kycert.com.br',
      address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressCountry: 'BR' },
      sameAs: ['https://www.linkedin.com/company/kycert/', 'https://www.instagram.com/kycert.oficial/'],
      knowsAbout: ['KYC', 'KYB', 'PLD/FT', 'Beneficiário final', 'Circular BCB 3.978', 'Resolução BCB 520', 'Compliance regulatório'],
    },
  };

  return (
    <>
      <Nav active="" />
      <BreadcrumbJsonLd items={[{ name: 'Início', path: '/' }, { name: 'Sobre' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(aboutLd) }} />

      <nav className="crumbs">
        <div className="wrap">
          <a href="/">Início</a>
          <span className="sep">/</span>
          <span style={{ color: 'var(--text-secondary)' }}>Sobre</span>
        </div>
      </nav>

      <section style={{ padding: '36px 24px 80px' }}>
        <article className="article">
          <div className="art-eyebrow">Sobre</div>
          <h1>Sobre a kycert</h1>
          <p className="lead-p">
            A kycert é uma plataforma brasileira de onboarding, KYC/KYB e trilha auditável de PLD/FT para instituições reguladas. Cada etapa fica registrada
            como evidência, com autor e data, pronta para uma fiscalização do Banco Central.
          </p>

          <h2 id="o-que-fazemos">O que fazemos</h2>
          <p>
            Convite com a marca do cliente, captura e leitura de documentos, <a href="/produto/kyc">verificação de pessoa física (KYC)</a>,{' '}
            <a href="/produto/kyb">verificação de pessoa jurídica com beneficiário final (KYB)</a>, enquadramento de risco pela regra da própria instituição e{' '}
            <a href="/produto/dossie-de-risco">Dossiê de Risco</a> com a decisão registrada. Atendemos corretoras de câmbio, PSAVs, bancos e fintechs,
            cooperativas, consórcios, mercado de capitais, seguradoras e casas de apostas.
          </p>

          <h2 id="quem-escreve">Quem escreve</h2>
          <div className="team-card">
            <p style={{ marginBottom: 6 }}>
              <strong>{team.name}</strong>
            </p>
            <p style={{ marginBottom: 0 }}>{team.bio}</p>
          </div>

          <h2 id="politica-editorial">Política editorial</h2>
          <ul>
            <li>Todo artigo parte da norma de origem (lei, resolução, circular ou instrução) e a cita pelo número e ano.</li>
            <li>Cada página mostra a data de publicação e a de atualização. Quando uma norma muda, o texto é revisado e a data de atualização é alterada.</li>
            <li>Exemplos numéricos são identificados como ilustrativos. Não publicamos estatísticas sem fonte.</li>
            <li>Falamos do que a plataforma faz e do que não faz. Quando um tema vai além do escopo da kycert, dizemos isso no texto.</li>
            <li>O conteúdo é informativo e não substitui assessoria jurídica nem a leitura do texto vigente da norma.</li>
          </ul>
          <p>
            Encontrou uma imprecisão? Escreva para{' '}
            <a href="mailto:contato@kycert.com.br?subject=Corre%C3%A7%C3%A3o%20de%20conte%C3%BAdo">contato@kycert.com.br</a> com o link da página e o trecho. Corrigimos e
            registramos a data de atualização.
          </p>

          <h2 id="empresa">Dados da empresa</h2>
          <ul>
            <li>Razão social: KYCERT DESENVOLVIMENTO LTDA</li>
            <li>CNPJ: 68.453.721/0001-90</li>
            <li>Sede: São Paulo, Brasil</li>
            <li>
              Contato: <a href="mailto:contato@kycert.com.br">contato@kycert.com.br</a>
            </li>
            <li>
              Redes: <a href="https://www.linkedin.com/company/kycert/">LinkedIn</a> e <a href="https://www.instagram.com/kycert.oficial/">Instagram</a>
            </li>
          </ul>
          <p>
            Sobre proteção de dados, veja a página de <a href="/seguranca">segurança</a>, a <a href="/privacidade">política de privacidade</a> e o{' '}
            <a href="/conformidade">mapa de conformidade regulatória</a>.
          </p>

          <div className="art-cta">
            <p>Quer ver a trilha funcionando com o seu fluxo de onboarding?</p>
            <div className="cta">
              <a href={WHATSAPP_DEMO} className="btn btn-primary btn-lg" target="_blank" rel="noopener">
                Agendar demo
              </a>
              <a href="/blog" className="btn btn-ghost btn-lg">
                Ler o blog
              </a>
            </div>
          </div>
        </article>
      </section>

      <Footer />
    </>
  );
}
