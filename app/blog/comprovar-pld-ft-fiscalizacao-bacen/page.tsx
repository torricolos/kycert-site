import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Fiscalização do BACEN: como comprovar PLD/FT na prática',
  description:
    'Numa fiscalização de PLD/FT, o BACEN não pergunta só se o cliente é limpo; pergunta como você decidiu. Veja o que precisa estar registrado.',
  alternates: { canonical: '/blog/comprovar-pld-ft-fiscalizacao-bacen' },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: '/blog/comprovar-pld-ft-fiscalizacao-bacen',
    siteName: 'kycert',
    title: 'Fiscalização do BACEN: como comprovar PLD/FT na prática | kycert',
    description:
      'Numa fiscalização de PLD/FT, o BACEN não pergunta só se o cliente é limpo; pergunta como você decidiu. Veja o que precisa estar registrado.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fiscalização do BACEN: como comprovar PLD/FT na prática | kycert',
    description:
      'Numa fiscalização de PLD/FT, o BACEN não pergunta só se o cliente é limpo; pergunta como você decidiu. Veja o que precisa estar registrado.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Como comprovar PLD/FT numa fiscalização do BACEN: o que o regulador pede","description":"Numa fiscalização de PLD/FT, o BACEN não pergunta só se o cliente é limpo; pergunta como você decidiu. Veja o que precisa estar registrado.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"PLD/FT"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">PLD/FT</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">PLD/FT / fiscalização</div>
<h1>Como comprovar PLD/FT numa fiscalização do BACEN: o que o regulador pede</h1>
<div class="art-meta"><span>PLD/FT</span><span>28/05/2026</span><span>2 min de leitura</span></div>
<p class="lead-p">Na fiscalização, o regulador quer ver como a instituição concluiu que o cliente era limpo, e com qual evidência. Quem registrou tem a resposta pronta. Quem não registrou, reconstrói sob pressão.</p>
<h2>A pergunta que a fiscalização faz</h2><p>Existe uma diferença que define o resultado de uma fiscalização de PLD/FT: ter o dado não é o mesmo que comprovar o que você fez com ele. O regulador parte do princípio de que a instituição tem acesso a fontes e relatórios. O que ele quer ver é o processo de decisão: a evidência de que houve avaliação, de que ela seguiu um critério e de que alguém respondeu por ela.</p><p>Na prática, a fiscalização tende a pedir três coisas sobre um cliente específico: como você o verificou, com base em quê o classificou, e quem decidiu aprová-lo ou recusá-lo.</p><h2>O que falta no relatório do bureau</h2><p>Um relatório de bureau é uma fotografia de um momento. Ele diz que, na data da consulta, o cliente constava ou não em determinadas listas. Mas não diz o que a instituição fez com aquilo: se considerou o apontamento, como o ponderou, qual decisão tomou e por quê.</p><p>Quando a única evidência é o relatório, a instituição tem o dado mas não tem a trilha. E é a trilha que comprova o cumprimento do dever de PLD/FT, não a existência da consulta.</p><h2>O que precisa estar registrado</h2><p>Para que a resposta esteja pronta quando o regulador perguntar, cada cliente precisa carregar consigo:</p><p>A identidade verificada, com o documento capturado e validado. As fontes consultadas, com indicação de que a consulta foi real e quando ocorreu. O enquadramento de risco atribuído, com a base que o sustenta. E a decisão final, com autor, data e justificativa.</p><p>Esses quatro elementos, reunidos e registrados, são o que transforma um conjunto de consultas em evidência de processo.</p><h2>Onde a kycert entra</h2><p>A kycert registra o cliente inteiro como trilha auditável: do convite à decisão, cada passo fica gravado. O Dossiê de Risco apresenta o veredito no topo, os apontamentos com a fonte de origem, e a decisão registrada com quem a tomou, tudo exportável em PDF. Quando a fiscalização pede "mostre como você decidiu sobre este cliente", o documento já existe.</p>
<div class="art-cta"><p>Veja um dossiê real, anonimizado, do jeito que você apresentaria numa fiscalização.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/checklist-prontidao-fiscalizacao">Checklist de prontidão para fiscalização →</a><a href="/blog/resolucao-bcb-520-psav">Resolução BCB 520/2025 para PSAV →</a></div>
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
