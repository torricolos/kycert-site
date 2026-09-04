import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Cooperativas de crédito: KYC do quadro de associados sob a Circular 3.978',
  description:
    'Cooperativas de crédito respondem aos mesmos deveres de PLD/FT das demais instituições do SFN. Veja como verificar e monitorar o quadro de associados.',
  alternates: { canonical: '/blog/cooperativas-credito-3978-associados' },
  openGraph: {
    type: 'article',
    title: 'Cooperativas de crédito: KYC do quadro de associados sob a Circular 3.978 | kycert',
    description:
      'Cooperativas de crédito respondem aos mesmos deveres de PLD/FT das demais instituições do SFN. Veja como verificar e monitorar o quadro de associados.',
    url: '/blog/cooperativas-credito-3978-associados',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cooperativas de crédito: KYC do quadro de associados sob a Circular 3.978 | kycert',
    description:
      'Cooperativas de crédito respondem aos mesmos deveres de PLD/FT das demais instituições do SFN. Veja como verificar e monitorar o quadro de associados.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Cooperativas de crédito: o PLD/FT do quadro de associados","description":"Cooperativas de crédito respondem aos mesmos deveres de PLD/FT das demais instituições do SFN. Veja como verificar e monitorar o quadro de associados.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Cooperativas"}];

const BODY_HTML = `<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Cooperativas</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Cooperativas de crédito</div>
<h1>Cooperativas de crédito: o PLD/FT do quadro de associados</h1>
<div class="art-meta"><span>Cooperativas</span><span>22/06/2026</span><span>6 min de leitura</span></div>
<p class="lead-p">Cooperativas de crédito integram o Sistema Financeiro Nacional e respondem à Circular BCB 3.978/2020 como qualquer instituição autorizada. Identificar, qualificar e monitorar o associado é dever contínuo, não evento de adesão.</p>
<h2>O associado é cliente para fins de PLD</h2>
<p>A entrada de um associado equivale, para fins de prevenção, à abertura de relacionamento financeiro. Exige identificação, verificação contra listas restritivas e avaliação de risco, com a mesma documentação cobrada de bancos.</p>
<h2>Monitorar não é só admitir</h2>
<p>A Circular 3.978 pede monitoramento ao longo do relacionamento. O cadastro do associado precisa ser revisto periodicamente e reverificado quando vence, sem depender de controle manual em planilha.</p>
<h2>Onde a kycert entra</h2>
<p>A kycert verifica o associado na adesão, enquadra o risco pela política da cooperativa e controla o vencimento de cada cadastro, disparando a reverificação no prazo. Toda decisão fica registrada como evidência para o BCB.</p>
<div class="art-cta"><p>Verifique e monitore o quadro de associados com trilha auditável.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/produto/monitoramento" class="btn btn-ghost btn-lg">Conhecer o monitoramento</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/checklist-prontidao-fiscalizacao">Checklist de prontidão para fiscalização →</a><a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">Como comprovar PLD/FT numa fiscalização →</a></div>
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
