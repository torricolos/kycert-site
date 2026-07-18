import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Resolução BCB 520/2025 para PSAV: avaliação de risco na prática',
  description:
    'O que a Resolução BCB 520/2025 exige das PSAVs em avaliação de risco e como registrar essa avaliação como evidência auditável antes do prazo de outubro de 2026.',
  alternates: { canonical: '/blog/resolucao-bcb-520-psav' },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: '/blog/resolucao-bcb-520-psav',
    siteName: 'kycert',
    title: 'Resolução BCB 520/2025 para PSAV: avaliação de risco na prática | kycert',
    description:
      'O que a Resolução BCB 520/2025 exige das PSAVs em avaliação de risco e como registrar essa avaliação como evidência auditável antes do prazo de outubro de 2026.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resolução BCB 520/2025 para PSAV: avaliação de risco na prática | kycert',
    description:
      'O que a Resolução BCB 520/2025 exige das PSAVs em avaliação de risco e como registrar essa avaliação como evidência auditável antes do prazo de outubro de 2026.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Resolução BCB 520/2025: o que muda para PSAV e como comprovar a avaliação de risco","description":"O que a Resolução BCB 520/2025 exige das PSAVs em avaliação de risco e como registrar essa avaliação como evidência auditável antes do prazo de outubro de 2026.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">PSAV</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">PSAV / regulação</div>
<h1>Resolução BCB 520/2025: o que muda para PSAV e como comprovar a avaliação de risco</h1>
<div class="art-meta"><span>PSAV</span><span>12/05/2026</span><span>2 min de leitura</span></div>
<p class="lead-p">A regulação das prestadoras de serviços de ativos virtuais saiu do campo informal. Com a Lei 14.478/2022 e as Resoluções BCB 519, 520 e 521/2025, a avaliação de risco do cliente passou a ser obrigação documentável — e o prazo está definido: vigência em 02/02/2026 e pedido de autorização até 30/10/2026.</p>
<h2>O que mudou</h2><p>Durante anos, o KYC em exchanges brasileiras foi conduzido de forma própria, sem padrão regulatório claro. Esse cenário acabou. A Lei 14.478/2022 estabeleceu o marco dos ativos virtuais, e as Resoluções BCB 519 e 520/2025 trouxeram as regras de funcionamento e os deveres de prevenção que se aplicam às PSAVs autorizadas.</p><p>A mudança de fundo é de natureza: o que antes era uma decisão interna passa a ser uma obrigação que precisa estar registrada. A avaliação de risco do cliente precisa ser comprovável.</p><h2>Onde os times informais falham</h2><p>O problema mais comum: na maioria dos casos a avaliação até acontece — o que falta é o registro dela. A operação avalia o cliente, decide aprovar ou recusar, mas não guarda como chegou ali: qual foi a fonte consultada, qual o critério de risco, quem decidiu. Quando o regulador pede, a equipe reconstrói tudo na mão — e o que se reconstrói tarde não tem o mesmo valor probatório do que se registrou na hora.</p><p>O segundo ponto de falha é o volume. Exchanges operam com alto fluxo de onboarding e baixa tolerância do cliente à fricção. Avaliar risco de cada um e ainda registrar a avaliação, manualmente, não escala.</p><h2>Como comprovar a avaliação de risco</h2><p>A resposta regulatória é tratar cada cliente como uma evidência montada, não como uma consulta avulsa. Isso significa registrar, para cada onboarding: a identidade verificada, as fontes consultadas, o enquadramento de risco atribuído e a decisão tomada, com autor e data.</p><p>É exatamente para isso que existe o Dossiê de Risco da kycert: o veredito de risco fica no topo, os apontamentos vêm com a fonte que os gerou, e a decisão é registrada com quem a tomou e a justificativa, exportável em PDF. Quando a fiscalização perguntar como a PSAV avaliou o risco daquele cliente, a resposta já está pronta.</p><h2>O prazo importa</h2><p>A adequação às novas regras de PSAV tem prazo definido: vigência em 02/02/2026, pedido de autorização até 30/10/2026 e corte de contraparte não autorizada em 30/10/2026. Quanto mais perto do limite, menor a margem para montar processo, integrar fontes e treinar a equipe. Estruturar a avaliação de risco como trilha auditável agora é o que evita a corrida de última hora.</p>
<div class="art-cta"><p>Veja como a kycert registra a avaliação de risco exigida das PSAVs.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/solucoes/psav" class="btn btn-ghost btn-lg">Conhecer a solução para PSAV</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">Como comprovar PLD/FT numa fiscalização do BACEN →</a><a href="/blog/beneficiario-final-ubo-kyb">O que é beneficiário final (UBO) →</a></div>
</article></section>
`;

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
