import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Abertura de conta em fintech: KYC, KYB e risco em escala',
  description:
    'Instituições de pagamento abrem conta em minutos e respondem por cada cliente em PLD/FT. Veja como verificar PF e PJ sem travar o onboarding.',
  alternates: { canonical: '/blog/abertura-conta-fintech-kyb-escala' },
  openGraph: {
    type: 'article',
    title: 'Abertura de conta em fintech: KYC, KYB e risco em escala | kycert',
    description:
      'Instituições de pagamento abrem conta em minutos e respondem por cada cliente em PLD/FT. Veja como verificar PF e PJ sem travar o onboarding.',
    url: '/blog/abertura-conta-fintech-kyb-escala',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abertura de conta em fintech: KYC, KYB e risco em escala | kycert',
    description:
      'Instituições de pagamento abrem conta em minutos e respondem por cada cliente em PLD/FT. Veja como verificar PF e PJ sem travar o onboarding.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Abertura de conta em escala, com o risco enquadrado","description":"Instituições de pagamento abrem conta em minutos e respondem por cada cliente em PLD/FT. Veja como verificar PF e PJ sem travar o onboarding.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Bancos & fintechs"}];

const BODY_HTML = `<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Bancos & fintechs</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Bancos & fintechs</div>
<h1>Abertura de conta em escala, com o risco enquadrado</h1>
<div class="art-meta"><span>Bancos & fintechs</span><span>24/06/2026</span><span>7 min de leitura</span></div>
<p class="lead-p">Instituições de pagamento e crédito abrem conta de forma 100% digital e em alto volume. O mesmo fluxo que dá velocidade precisa garantir que cada cliente foi identificado, verificado e registrado conforme a Circular BCB 3.978.</p>
<h2>Fraude entra junto com o cliente bom</h2>
<p>A abertura digital convive com documento adulterado e identidade de terceiro. Sem verificação de identidade forte no cadastro, a conta fraudada nasce dentro da base e só aparece depois, quando o prejuízo já aconteceu.</p>
<h2>Conta PJ exige KYB de verdade</h2>
<p>Cliente pessoa jurídica não se resume ao CNPJ. É preciso recuperar o quadro societário e chegar ao beneficiário final, verificando cada entidade da cadeia. Feito manualmente, isso vira gargalo ou atalho que deixa risco passar.</p>
<h2>A leitura de risco precisa acompanhar a velocidade</h2>
<p>Conceder conta e crédito rápido sem enquadrar o risco do cliente troca exposição regulatória e inadimplência por agilidade. O enquadramento pela política da instituição precisa acontecer dentro do fluxo, automaticamente.</p>
<h2>Onde a kycert entra</h2>
<p>A kycert junta KYC de PF, KYB de PJ com beneficiário final e enquadramento de risco num onboarding único, conectado ao seu core por API. Cada cliente entra verificado e cada decisão fica registrada numa trilha auditável.</p>
<div class="art-cta"><p>Veja o onboarding de conta com KYC, KYB e trilha.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/solucoes/bancos" class="btn btn-ghost btn-lg">Conhecer a solução</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/beneficiario-final-ubo-kyb">Beneficiário final: por que o KYB chega ao UBO →</a><a href="/blog/lei-14286-cambio-cadastro">Câmbio: o que a Lei 14.286 exige no cadastro →</a></div>
</article></section>`;

export default function Page() {
  return (
    <>
      <Nav active="recursos" />

      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
