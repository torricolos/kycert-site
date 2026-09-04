import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Lei 14.286/2021 e Res. BCB 277/2022: cadastro de cliente no câmbio',
  description:
    'O que o novo marco cambial e a Resolução BCB 277/2022 exigem no cadastro e na verificação de clientes de corretoras de câmbio.',
  alternates: { canonical: '/blog/lei-14286-cambio-cadastro' },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: '/blog/lei-14286-cambio-cadastro',
    siteName: 'kycert',
    title: 'Lei 14.286/2021 e Res. BCB 277/2022: cadastro de cliente no câmbio | kycert',
    description:
      'O que o novo marco cambial e a Resolução BCB 277/2022 exigem no cadastro e na verificação de clientes de corretoras de câmbio.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lei 14.286/2021 e Res. BCB 277/2022: cadastro de cliente no câmbio | kycert',
    description:
      'O que o novo marco cambial e a Resolução BCB 277/2022 exigem no cadastro e na verificação de clientes de corretoras de câmbio.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Câmbio: o que a Lei 14.286/2021 e a Res. BCB 277/2022 exigem no cadastro do cliente","description":"O que o novo marco cambial e a Resolução BCB 277/2022 exigem no cadastro e na verificação de clientes de corretoras de câmbio.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Câmbio"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Câmbio</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Câmbio / regulação</div>
<h1>Câmbio: o que a Lei 14.286/2021 e a Res. BCB 277/2022 exigem no cadastro do cliente</h1>
<div class="art-meta"><span>Câmbio</span><span>09/06/2026</span><span>2 min de leitura</span></div>
<p class="lead-p">O marco cambial reorganizou as regras do mercado de câmbio brasileiro. Para as corretoras, parte da mudança recai onde a operação mais sente: o cadastro e a verificação do cliente.</p>
<h2>O novo marco cambial</h2><p>A Lei 14.286/2021 modernizou o regime cambial brasileiro, e a Resolução BCB 277/2022 detalhou as regras de funcionamento aplicáveis às instituições autorizadas a operar no câmbio. Junto com a Circular BCB 3.978/2020, que trata da PLD/FT, esse conjunto define o que se espera no relacionamento com o cliente, incluindo o cadastro e o dever de conhecê-lo.</p><h2>O que muda no cadastro</h2><p>A exigência de fundo é conhecer o cliente de forma comprovável: identidade verificada, estrutura societária no caso de pessoa jurídica, enquadramento de risco e acompanhamento ao longo do relacionamento. Não é cadastro como formalidade de abertura; é cadastro como base de uma avaliação de risco que precisa estar registrada.</p><h2>Onde as corretoras travam</h2><p>O ponto de atrito mais comum é o cadastro de pessoa jurídica feito à mão. Reunir dados da empresa, mapear sócios, chegar ao beneficiário final e registrar tudo manualmente é lento, e a lentidão tem dois custos: o cliente desiste no meio do processo, e a trilha de PLD/FT fica espalhada em planilhas e e-mails em vez de consolidada.</p><p>O segundo ponto é a reverificação esquecida. A obrigação de manter o cadastro atualizado não some depois da aprovação, mas sem um processo definido ela é a primeira coisa que se perde no volume.</p><h2>Onde a kycert entra</h2><p>A kycert organiza o cadastro e a verificação do cliente de câmbio como uma trilha única. O convite sai com a marca da corretora, a captura do documento usa OCR para eliminar a digitação, a estrutura societária da PJ é mapeada até o beneficiário final, e a decisão fica registrada no dossiê. A reverificação é agendada para que a renovação não dependa de memória.</p><p>O resultado é o cadastro feito mais rápido e, ao mesmo tempo, comprovável: as duas coisas que o marco cambial e as regras de PLD/FT cobram.</p>
<div class="art-cta"><p>Veja como a kycert organiza o cadastro de clientes de câmbio.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/solucoes/cambio" class="btn btn-ghost btn-lg">Conhecer a solução para câmbio</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/beneficiario-final-ubo-kyb">Beneficiário final (UBO): obrigações de KYB →</a><a href="/blog/checklist-prontidao-fiscalizacao">Checklist de prontidão para fiscalização →</a></div>
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
