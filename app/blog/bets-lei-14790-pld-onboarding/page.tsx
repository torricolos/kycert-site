import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Apostas: o que a Lei 14.790/2023 exige de KYC e PLD nas Bets | kycert',
  description:
    'A regulamentação das apostas de quota fixa trouxe deveres de identificação do apostador e de PLD/FT. Veja o que muda no onboarding das casas de apostas.',
  alternates: { canonical: '/blog/bets-lei-14790-pld-onboarding' },
  openGraph: {
    type: 'article',
    title: 'Apostas: o que a Lei 14.790/2023 exige de KYC e PLD nas Bets | kycert',
    description:
      'A regulamentação das apostas de quota fixa trouxe deveres de identificação do apostador e de PLD/FT. Veja o que muda no onboarding das casas de apostas.',
    url: '/blog/bets-lei-14790-pld-onboarding',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Apostas: o que a Lei 14.790/2023 exige de KYC e PLD nas Bets | kycert',
    description:
      'A regulamentação das apostas de quota fixa trouxe deveres de identificação do apostador e de PLD/FT. Veja o que muda no onboarding das casas de apostas.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Apostas de quota fixa: o KYC que a regulamentação passou a exigir","description":"A regulamentação das apostas de quota fixa trouxe deveres de identificação do apostador e de PLD/FT. Veja o que muda no onboarding das casas de apostas.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BODY_HTML = `<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Apostas / Bets</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Apostas · Bets</div>
<h1>Apostas de quota fixa: o KYC que a regulamentação passou a exigir</h1>
<div class="art-meta"><span>Apostas / Bets</span><span>18/06/2026</span><span>7 min de leitura</span></div>
<p class="lead-p">Com a Lei 14.790/2023 e a regulamentação da Secretaria de Prêmios e Apostas (Portarias SPA/MF 722/2024 e 827/2024), a operação de apostas no Brasil passou a ter deveres formais de identificação do apostador e de prevenção à lavagem de dinheiro. O cadastro deixou de ser cortesia e virou requisito de autorização.</p>
<h2>Quem aposta precisa ser identificado</h2>
<p>A regulamentação exige que cada apostador seja identificado no cadastro, com validação de CPF, verificação de idade e confirmação biométrica facial (Portaria SPA/MF 722/2024), antes da primeira aposta. A conta gráfica é nominal e intransferível, o que torna a verificação de identidade um passo obrigatório do onboarding, não um detalhe operacional.</p>
<h2>O PLD/FT passou a valer para apostas</h2>
<p>As casas de apostas passaram a integrar o rol de entidades obrigadas a manter políticas de prevenção à lavagem de dinheiro e ao financiamento do terrorismo. Isso inclui avaliação de risco do cliente, verificação contra listas restritivas e sanções, e comunicação de operações suspeitas ao COAF.</p>
<h2>O ponto sensível: volume e velocidade</h2>
<p>Casas de apostas operam com alto volume de cadastros e clientes que esperam acesso imediato. O desafio é verificar identidade, idade, sanções e PEP no mesmo passo, sem transformar o onboarding numa barreira que afasta o apostador legítimo.</p>
<h2>Onde a kycert entra</h2>
<p>A kycert verifica o apostador no cadastro — documento por OCR, idade, sanções e PEP — e registra cada etapa como evidência auditável; a confirmação biométrica facial está no roadmap. Quando a SPA/MF ou o COAF pedirem a trilha de um cliente, o histórico já está montado, com autor, data e critério da decisão.</p>
<div class="art-cta"><p>Veja o onboarding de apostadores com trilha auditável.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">Como comprovar PLD/FT numa fiscalização →</a><a href="/blog/checklist-prontidao-fiscalizacao">Checklist de prontidão para fiscalização →</a></div>
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
