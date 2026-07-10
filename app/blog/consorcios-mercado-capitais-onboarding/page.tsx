import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Consórcios e gestoras: onboarding sob BCB e CVM | kycert',
  description:
    'Administradoras de consórcio (BCB) e gestoras de recursos (CVM) respondem a deveres de identificação e PLD/FT. Veja como estruturar o cadastro do investidor e do consorciado.',
  alternates: { canonical: '/blog/consorcios-mercado-capitais-onboarding' },
  openGraph: {
    type: 'article',
    title: 'Consórcios e gestoras: onboarding sob BCB e CVM | kycert',
    description:
      'Administradoras de consórcio (BCB) e gestoras de recursos (CVM) respondem a deveres de identificação e PLD/FT. Veja como estruturar o cadastro do investidor e do consorciado.',
    url: '/blog/consorcios-mercado-capitais-onboarding',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consórcios e gestoras: onboarding sob BCB e CVM | kycert',
    description:
      'Administradoras de consórcio (BCB) e gestoras de recursos (CVM) respondem a deveres de identificação e PLD/FT. Veja como estruturar o cadastro do investidor e do consorciado.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Consórcios e gestoras: o onboarding que BCB e CVM cobram","description":"Administradoras de consórcio (BCB) e gestoras de recursos (CVM) respondem a deveres de identificação e PLD/FT. Veja como estruturar o cadastro do investidor e do consorciado.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BODY_HTML = `<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Mercado de capitais</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Consórcios & mercado de capitais</div>
<h1>Consórcios e gestoras: o onboarding que BCB e CVM cobram</h1>
<div class="art-meta"><span>Mercado de capitais</span><span>26/06/2026</span><span>6 min de leitura</span></div>
<p class="lead-p">Administradoras de consórcio, sob o Banco Central, e gestoras e distribuidoras, sob a CVM, têm deveres de identificar o cliente e prevenir a lavagem de dinheiro. O cadastro do consorciado e do investidor precisa nascer com trilha.</p>
<h2>Dois reguladores, o mesmo princípio</h2>
<p>Seja sob a regulação do BCB para consórcios ou da CVM para o mercado de capitais, o princípio é o mesmo: conhecer o cliente, avaliar o risco e registrar a decisão. A forma muda; o dever de documentar, não.</p>
<h2>Investidor qualificado e suitability</h2>
<p>No mercado de capitais, a identificação se soma à verificação de perfil e enquadramento do investidor. Cadastro estruturado e verificado é a base sobre a qual a adequação ao perfil se sustenta.</p>
<h2>Onde a kycert entra</h2>
<p>A kycert verifica o consorciado e o investidor — PF e PJ — contra sanções, PEP e situação cadastral, e registra a avaliação de risco. A trilha fica disponível para o BCB ou a CVM, conforme o enquadramento da instituição.</p>
<div class="art-cta"><p>Estruture o cadastro do investidor e do consorciado.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/beneficiario-final-ubo-kyb">Beneficiário final: por que o KYB chega ao UBO →</a><a href="/blog/resolucao-bcb-520-psav">Resolução BCB 520: o que muda para PSAVs →</a></div>
</article></section>`;

export default function Page() {
  return (
    <>
      <Nav active="recursos" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
