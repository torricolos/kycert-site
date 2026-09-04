import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Checklist de prontidão para fiscalização de PLD/FT',
  description:
    'Os pontos que precisam estar registrados antes de uma fiscalização de PLD/FT. Checklist prático para times de compliance de instituições reguladas.',
  alternates: { canonical: '/blog/checklist-prontidao-fiscalizacao' },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: '/blog/checklist-prontidao-fiscalizacao',
    siteName: 'kycert',
    title: 'Checklist de prontidão para fiscalização de PLD/FT | kycert',
    description:
      'Os pontos que precisam estar registrados antes de uma fiscalização de PLD/FT. Checklist prático para times de compliance de instituições reguladas.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Checklist de prontidão para fiscalização de PLD/FT | kycert',
    description:
      'Os pontos que precisam estar registrados antes de uma fiscalização de PLD/FT. Checklist prático para times de compliance de instituições reguladas.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Checklist de prontidão para fiscalização de PLD/FT","description":"Os pontos que precisam estar registrados antes de uma fiscalização de PLD/FT. Checklist prático para times de compliance de instituições reguladas.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"PLD/FT"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">PLD/FT</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">PLD/FT / prontidão</div>
<h1>Checklist de prontidão para fiscalização de PLD/FT</h1>
<div class="art-meta"><span>PLD/FT</span><span>05/06/2026</span><span>2 min de leitura</span></div>
<p class="lead-p">Uma fiscalização não avisa com semanas de antecedência. O que define o resultado é o que já estava registrado quando ela chegou. Use esta lista para conferir onde a sua operação está pronta, e onde reconstrói na mão.</p>
<h2>Identidade e cadastro</h2><p>Você consegue mostrar, para qualquer cliente, o documento capturado e validado no onboarding. O cadastro de pessoa jurídica registra a estrutura societária até o beneficiário final. Os dados extraídos estão vinculados ao documento original.</p><h2>Verificação e fontes</h2><p>Para cada cliente, há registro de quais fontes foram consultadas e quando. A consulta consta como real, não como rótulo genérico. As listas de sanções e de PEP foram aplicadas, e o resultado está gravado com a fonte de origem.</p><h2>Risco e decisão</h2><p>Cada cliente tem um enquadramento de risco com a base que o sustenta. A decisão de aprovar ou recusar está registrada com autor, data e justificativa. Apontamentos trazem a fonte, o período e o percentual de correspondência.</p><h2>Continuidade</h2><p>Há periodicidade definida de reverificação. As reverificações ocorridas estão registradas. Mudanças no perfil de risco do cliente geram alerta e ficam no histórico.</p><h2>Apresentação</h2><p>Tudo isso pode ser exportado em um documento único por cliente. O registro foi feito no momento da decisão, não montado depois do pedido da fiscalização. Você consegue responder "como você decidiu sobre este cliente" sem reconstruir nada.</p>
<div class="art-cta"><p>Baixe o checklist completo em PDF e veja onde a sua operação está pronta.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="#" class="btn btn-ghost btn-lg">Baixar checklist</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">Como comprovar PLD/FT numa fiscalização do BACEN →</a></div>
</article></section>
`;

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
