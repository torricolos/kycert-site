import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Seguradoras: onboarding e PLD/FT sob a regulação da SUSEP | kycert',
  description:
    'Seguradoras e corretoras respondem a deveres de PLD/FT supervisionados pela SUSEP. Veja como estruturar o cadastro e a trilha de decisão do segurado.',
  alternates: { canonical: '/blog/seguradoras-susep-onboarding-pld' },
  openGraph: {
    type: 'article',
    title: 'Seguradoras: onboarding e PLD/FT sob a regulação da SUSEP | kycert',
    description:
      'Seguradoras e corretoras respondem a deveres de PLD/FT supervisionados pela SUSEP. Veja como estruturar o cadastro e a trilha de decisão do segurado.',
    url: '/blog/seguradoras-susep-onboarding-pld',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seguradoras: onboarding e PLD/FT sob a regulação da SUSEP | kycert',
    description:
      'Seguradoras e corretoras respondem a deveres de PLD/FT supervisionados pela SUSEP. Veja como estruturar o cadastro e a trilha de decisão do segurado.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Seguros: identificação do segurado e PLD sob a SUSEP","description":"Seguradoras e corretoras respondem a deveres de PLD/FT supervisionados pela SUSEP. Veja como estruturar o cadastro e a trilha de decisão do segurado.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BODY_HTML = `<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Seguradoras</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Seguradoras</div>
<h1>Seguros: identificação do segurado e PLD sob a SUSEP</h1>
<div class="art-meta"><span>Seguradoras</span><span>19/06/2026</span><span>6 min de leitura</span></div>
<p class="lead-p">O setor de seguros é entidade obrigada em prevenção à lavagem de dinheiro, sob supervisão da SUSEP (Circular SUSEP 612/2020). A identificação do segurado, a avaliação de risco e o registro das decisões compõem o controle que o regulador espera ver documentado.</p>
<h2>O dever de conhecer o segurado</h2>
<p>A contratação de seguros, sobretudo nos ramos de vida e capitalização, exige identificação e qualificação do cliente. A seguradora precisa saber quem contrata, avaliar o risco de PLD/FT e manter o registro dessa avaliação acessível à fiscalização.</p>
<h2>Beneficiários e PJ ampliam o escopo</h2>
<p>Apólices com beneficiários e contratantes pessoa jurídica trazem a necessidade de verificar quadro societário e beneficiário final. O controle não para no contratante: alcança quem de fato se beneficia da relação.</p>
<h2>Onde a kycert entra</h2>
<p>A kycert estrutura o cadastro do segurado e do contratante PJ, verifica sanções, PEP e situação cadastral, e registra a avaliação de risco com autor e data. A trilha fica pronta para apresentar à SUSEP e ao COAF quando solicitada.</p>
<div class="art-cta"><p>Estruture o onboarding de segurados com evidência registrada.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/beneficiario-final-ubo-kyb">Beneficiário final: por que o KYB chega ao UBO →</a><a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">Como comprovar PLD/FT numa fiscalização →</a></div>
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
