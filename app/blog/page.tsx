import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Blog — compliance, KYC e regulação | kycert',
  description:
    'Artigos sobre KYC, KYB, PLD/FT e regulação do BACEN para corretoras de câmbio, PSAVs e fintechs.',
  alternates: { canonical: '/blog' },
  openGraph: {
    type: 'website',
    title: 'Blog — compliance, KYC e regulação | kycert',
    description:
      'Artigos sobre KYC, KYB, PLD/FT e regulação do BACEN para corretoras de câmbio, PSAVs e fintechs.',
    url: '/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog — compliance, KYC e regulação | kycert',
    description:
      'Artigos sobre KYC, KYB, PLD/FT e regulação do BACEN para corretoras de câmbio, PSAVs e fintechs.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Blog","name":"Blog kycert","inLanguage":"pt-BR","blogPost":[{"@type":"BlogPosting","headline":"Consórcios e gestoras: o onboarding que BCB e CVM cobram","url":"https://kycert.com.br/blog/consorcios-mercado-capitais-onboarding"},{"@type":"BlogPosting","headline":"Abertura de conta em fintech: KYC, KYB e risco em escala","url":"https://kycert.com.br/blog/abertura-conta-fintech-kyb-escala"},{"@type":"BlogPosting","headline":"Cooperativas de crédito: o PLD/FT do quadro de associados","url":"https://kycert.com.br/blog/cooperativas-credito-3978-associados"},{"@type":"BlogPosting","headline":"Seguros: identificação do segurado e PLD sob a SUSEP","url":"https://kycert.com.br/blog/seguradoras-susep-onboarding-pld"},{"@type":"BlogPosting","headline":"Apostas de quota fixa: o KYC que a regulamentação passou a exigir","url":"https://kycert.com.br/blog/bets-lei-14790-pld-onboarding"},{"@type":"BlogPosting","headline":"Resolução BCB 520/2025: o que muda para PSAV e como comprovar a avaliação de risco","url":"https://kycert.com.br/blog/resolucao-bcb-520-psav"},{"@type":"BlogPosting","headline":"Como comprovar PLD/FT numa fiscalização do BACEN: o que o regulador pede","url":"https://kycert.com.br/blog/comprovar-pld-ft-fiscalizacao-bacen"},{"@type":"BlogPosting","headline":"Beneficiário final (UBO): obrigações de KYB e como mapear a cadeia societária","url":"https://kycert.com.br/blog/beneficiario-final-ubo-kyb"},{"@type":"BlogPosting","headline":"Checklist de prontidão para fiscalização de PLD/FT","url":"https://kycert.com.br/blog/checklist-prontidao-fiscalizacao"},{"@type":"BlogPosting","headline":"Câmbio: o que a Lei 14.286/2021 e a Res. BCB 277/2022 exigem no cadastro do cliente","url":"https://kycert.com.br/blog/lei-14286-cambio-cadastro"}]}`;

const BODY_HTML = `<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span style="color:var(--text-secondary)">Blog</span></div></nav>
<section style="padding:48px 0 80px"><div class="wrap sec-head">
<span class="eyebrow">Blog</span>
<h2 class="reveal" style="margin-top:14px">Regulação, compliance e onboarding, sem rodeio.</h2>
<p class="sec-lead reveal">Conteúdo prático sobre KYC, KYB, PLD/FT e as normas do BACEN que afetam a sua operação.</p>
<div class="blog-filters"><button class="bf active" data-f="todos">Todos</button><button class="bf" data-f="PSAV">PSAV</button><button class="bf" data-f="PLD/FT">PLD/FT</button><button class="bf" data-f="KYB">KYB</button><button class="bf" data-f="Câmbio">Câmbio</button><button class="bf" data-f="Segmentos">Segmentos</button></div>
<div class="blog-hub"><a class="blog-card" data-cat="Segmentos" href="/blog/consorcios-mercado-capitais-onboarding"><span class="cat">Mercado de capitais</span><h3>Consórcios e gestoras: o onboarding que BCB e CVM cobram</h3><p>Administradoras de consórcio (BCB) e gestoras de recursos (CVM) respondem a deveres de identificação e PLD/FT. Veja como estruturar o cadastro do investidor e do consorciado.</p><div class="meta"><span>26/06/2026</span></div></a>
<a class="blog-card" data-cat="Segmentos" href="/blog/abertura-conta-fintech-kyb-escala"><span class="cat">Bancos &amp; fintechs</span><h3>Abertura de conta em escala, com o risco enquadrado</h3><p>Instituições de pagamento abrem conta em minutos e respondem por cada cliente em PLD/FT. Veja como verificar PF e PJ sem travar o onboarding.</p><div class="meta"><span>24/06/2026</span></div></a>
<a class="blog-card" data-cat="Segmentos" href="/blog/cooperativas-credito-3978-associados"><span class="cat">Cooperativas</span><h3>Cooperativas de crédito: o PLD/FT do quadro de associados</h3><p>Cooperativas de crédito respondem aos mesmos deveres de PLD/FT das demais instituições do SFN. Veja como verificar e monitorar o quadro de associados.</p><div class="meta"><span>22/06/2026</span></div></a>
<a class="blog-card" data-cat="Segmentos" href="/blog/seguradoras-susep-onboarding-pld"><span class="cat">Seguradoras</span><h3>Seguros: identificação do segurado e PLD sob a SUSEP</h3><p>Seguradoras e corretoras respondem a deveres de PLD/FT supervisionados pela SUSEP. Veja como estruturar o cadastro e a trilha de decisão do segurado.</p><div class="meta"><span>19/06/2026</span></div></a>
<a class="blog-card" data-cat="Segmentos" href="/blog/bets-lei-14790-pld-onboarding"><span class="cat">Apostas / Bets</span><h3>Apostas de quota fixa: o KYC que a regulamentação passou a exigir</h3><p>A regulamentação das apostas de quota fixa trouxe deveres de identificação do apostador e de PLD/FT. Veja o que muda no onboarding das casas de apostas.</p><div class="meta"><span>18/06/2026</span></div></a>
<a class="blog-card" data-cat="PSAV" href="/blog/resolucao-bcb-520-psav"><span class="cat">PSAV</span><h3>Resolução BCB 520/2025: o que muda para PSAV e como comprovar a avaliação de risco</h3><p>O que a Resolução BCB 520/2025 exige das PSAVs em avaliação de risco e como registrar essa avaliação como evidência auditável antes do prazo de outubro de 2026.</p><div class="meta"><span>12/05/2026</span></div></a>
<a class="blog-card" data-cat="PLD/FT" href="/blog/comprovar-pld-ft-fiscalizacao-bacen"><span class="cat">PLD/FT</span><h3>Como comprovar PLD/FT numa fiscalização do BACEN: o que o regulador pede</h3><p>Numa fiscalização de PLD/FT, o BACEN não pergunta só se o cliente é limpo — pergunta como você decidiu. Veja o que precisa estar registrado.</p><div class="meta"><span>28/05/2026</span></div></a>
<a class="blog-card" data-cat="KYB" href="/blog/beneficiario-final-ubo-kyb"><span class="cat">KYB</span><h3>Beneficiário final (UBO): obrigações de KYB e como mapear a cadeia societária</h3><p>O que é o beneficiário final, por que identificá-lo é obrigação de KYB e como mapear a cadeia societária até a pessoa natural que controla a empresa.</p><div class="meta"><span>02/06/2026</span></div></a>
<a class="blog-card" data-cat="PLD/FT" href="/blog/checklist-prontidao-fiscalizacao"><span class="cat">PLD/FT</span><h3>Checklist de prontidão para fiscalização de PLD/FT</h3><p>Os pontos que precisam estar registrados antes de uma fiscalização de PLD/FT. Checklist prático para times de compliance de instituições reguladas.</p><div class="meta"><span>05/06/2026</span></div></a>
<a class="blog-card" data-cat="Câmbio" href="/blog/lei-14286-cambio-cadastro"><span class="cat">Câmbio</span><h3>Câmbio: o que a Lei 14.286/2021 e a Res. BCB 277/2022 exigem no cadastro do cliente</h3><p>O que o novo marco cambial e a Resolução BCB 277/2022 exigem no cadastro e na verificação de clientes de corretoras de câmbio.</p><div class="meta"><span>09/06/2026</span></div></a></div>
</div></section>`;

const EXTRA_SCRIPT = `document.querySelectorAll('.bf').forEach(function(b){b.addEventListener('click',function(){document.querySelectorAll('.bf').forEach(function(x){x.classList.remove('active')});b.classList.add('active');var f=b.getAttribute('data-f');document.querySelectorAll('.blog-card').forEach(function(c){c.style.display=(f==='todos'||c.getAttribute('data-cat')===f)?'':'none'});});});`;

export default function Page() {
  return (
    <>
      <Nav active="recursos" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
      <script dangerouslySetInnerHTML={{ __html: EXTRA_SCRIPT }} />
    </>
  );
}
