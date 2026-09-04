import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Solução de KYC e onboarding para corretoras de câmbio',
  description:
    'As dores do onboarding de câmbio e como a kycert resolve: cadastro de PJ, quadro societário, PLD/FT e trilha auditável para corretoras e DTVMs.',
  alternates: { canonical: '/solucoes/cambio' },
  openGraph: {
    title: 'Solução de KYC e onboarding para corretoras de câmbio | kycert',
    description:
      'As dores do onboarding de câmbio e como a kycert resolve: cadastro de PJ, quadro societário, PLD/FT e trilha auditável para corretoras e DTVMs.',
  },
  twitter: {
    title: 'Solução de KYC e onboarding para corretoras de câmbio | kycert',
    description:
      'As dores do onboarding de câmbio e como a kycert resolve: cadastro de PJ, quadro societário, PLD/FT e trilha auditável para corretoras e DTVMs.',
  },
};


const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Câmbio"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Soluções</span><span class="sep">/</span><span style="color:var(--text-secondary)">Câmbio</span></div></nav>

<!-- HERO -->
<div class="wrap hero">
  <div class="hero-grid">
    <div>
      <span class="seg-pill reveal"><span class="dot"></span>Para corretoras de câmbio</span>
      <h1 class="reveal reveal-d1">O cliente de câmbio entra para operar. <span class="em">A evidência fica registrada.</span></h1>
      <p class="lead reveal reveal-d2">Corretoras e DTVMs precisam identificar, qualificar e monitorar cada cliente conforme a regulação do BCB, e comprovar como fizeram. A kycert reúne cadastro, verificações e decisão num fluxo único, do convite à trilha auditável.</p>
      <div class="cta reveal reveal-d3"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo <svg class="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div>
      <div class="micro reveal reveal-d4"><span><span class="dot"></span>PF e PJ</span><span><span class="dot"></span>Quadro societário</span><span><span class="dot"></span>Renovação</span></div>
    </div>
    <div class="hero-visual reveal reveal-d2">
      <div class="ui-card">
        <div class="ui-head"><span class="t"><span class="live-dot"></span> Cliente de câmbio · PJ</span><span class="badge">Câmbio</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Identidade</b> · documento por OCR</span><span class="st">Verificado</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Quadro societário</b> · sócios e UBO</span><span class="st">Mapeado</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Sanções &amp; PEP</b> · OFAC e listas</span><span class="st">Sem ocorrência</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Decisão</b> · aprovada e registrada</span><span class="st">Registrado</span></div>
        <div class="ui-foot"><span>Histórico pronto para o regulador</span><span class="mono">Trilha câmbio</span></div>
      </div>
    </div>
  </div>
</div>

<div class="marquee-wrap"><div class="wrap" style="display:flex;align-items:center;gap:18px;justify-content:center;flex-wrap:wrap">
  <span class="marquee-lab" style="margin:0">Base regulatória</span>
  <span class="stag"><span class="gd"></span>Lei 14.286/2021</span><span class="stag"><span class="gd"></span>Res. BCB 277/2022</span><span class="stag"><span class="gd"></span>Circular BCB 3.978/2020</span><span class="stag"><span class="gd"></span>Lei 9.613/98</span><span class="stag"><span class="gd"></span>LGPD</span>
</div></div>

<!-- AS DORES -->
<section>
  <div class="wrap sec-head">
    <span class="eyebrow reveal">O dia a dia hoje</span>
    <h2 class="reveal reveal-d1">Onde o onboarding de câmbio trava.</h2>
    <p class="sec-lead reveal reveal-d2">Quatro pontos que consomem o tempo do seu time de compliance e abrem risco na fiscalização.</p>
    <div class="pain-grid">
      <div class="pain reveal reveal-d1">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></svg></span><h3>Cadastro de PJ feito na mão</h3></div>
        <p>Recuperar quadro societário e chegar ao beneficiário final consultando uma fonte de cada vez transforma cada cliente PJ em um cadastro de dias.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></svg> dias por cadastro PJ</div>
      </div>
      <div class="pain reveal reveal-d2">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4l4 4-4 4"/><path d="M20 8H8a4 4 0 0 0-4 4v8"/></svg></span><h3>O cliente desiste no meio</h3></div>
        <p>Documento que vai e volta por e-mail e WhatsApp, foto recusada, pedido repetido. Cada ida e volta é uma chance de o cliente abandonar o cadastro.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/></svg> abandono no onboarding</div>
      </div>
      <div class="pain reveal reveal-d3">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h18M3 12h18M3 17h10"/></svg></span><h3>A trilha de PLD/FT vive espalhada</h3></div>
        <p>O cadastro está num sistema, a aprovação num e-mail, a evidência numa pasta. Quando o BCB pede a trilha de um cliente, o time reconstrói tudo do zero.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></svg> semanas reconstruindo histórico</div>
      </div>
      <div class="pain reveal reveal-d4">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg></span><h3>A reverificação passa batido</h3></div>
        <p>O cadastro vence e ninguém renova, porque o controle do prazo depende de planilha e memória. O cliente segue operando com cadastro vencido.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg> cadastro vencido é risco aberto</div>
      </div>
    </div>
  </div>
</section>

<!-- COMO RESOLVEMOS -->
<section class="sec-soft">
  <div class="wrap sec-head">
    <span class="eyebrow reveal">Como a kycert resolve</span>
    <h2 class="reveal reveal-d1">Cada dor vira um passo do fluxo.</h2>
    <div class="solmap">
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Quadro societário e beneficiário final montados manualmente, fonte por fonte.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Estrutura societária em uma consulta.</b> A cadeia de participação é recuperada e cada sócio e a controladora são verificados até o beneficiário final.</p></div>
      </div>
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Documento indo e voltando por e-mail e WhatsApp, com o cliente desistindo no caminho.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Convite white-label guiado no celular.</b> O cliente captura o documento pela câmera, com leitura por OCR e validação na hora, sem troca de arquivos solta.</p></div>
      </div>
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Trilha de PLD/FT espalhada entre sistema, e-mail e pasta, reconstruída a cada fiscalização.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Decisão registrada como evidência.</b> Autor, data, critério e consulta ficam juntos na ficha do cliente. Quando o BCB pede, a trilha já está montada.</p></div>
      </div>
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Cadastro que vence sem ninguém renovar, controlado por planilha e memória.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Renovação acompanhada.</b> A plataforma controla o vencimento de cada cadastro e dispara a reverificação no prazo.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- NORMAS -->
<section>
  <div class="wrap sec-head">
    <span class="eyebrow reveal">Da regra à operação</span>
    <h2 class="reveal reveal-d1">O que a regulação pede, e onde a kycert entra.</h2>
    <div class="norms">
      <div class="norm reveal reveal-d1"><div class="nlaw">Lei nº 14.286/2021</div><p>Marco legal do mercado de câmbio. As operações são realizadas por instituições autorizadas pelo Banco Central.</p><div class="entra"><b>Onde a kycert entra</b>Identificação, cadastro e trilha da decisão do cliente de câmbio.</div></div>
      <div class="norm reveal reveal-d2"><div class="nlaw">Resolução BCB nº 277/2022</div><p>Regulamenta o mercado de câmbio e o relacionamento com o cliente nas operações.</p><div class="entra"><b>Onde a kycert entra</b>Cadastro estruturado do cliente, documentos e registro do que sustentou cada decisão.</div></div>
      <div class="norm reveal reveal-d3"><div class="nlaw">Circular BCB nº 3.978/2020</div><p>PLD/FT para instituições autorizadas pelo BCB: identificação, qualificação e monitoramento do cliente.</p><div class="entra"><b>Onde a kycert entra</b>Centraliza informações, evidências e pendências numa ficha auditável.</div></div>
    </div>
    <p class="fineprint reveal">A kycert estrutura e registra o onboarding; não substitui assessoria jurídica, a autorização do BCB, o registro das operações de câmbio nem as comunicações ao COAF.</p>
  </div>
</section>

<!-- PROVA -->
<section class="sec-dark">
  <div class="wrap sec-head">
    <span class="eyebrow on-dark reveal">O resultado</span>
    <h2 class="serif reveal reveal-d1" style="color:#fff">Seu time analisa risco em vez de procurar documento.</h2>
    <p class="sec-lead reveal reveal-d2">O cadastro chega completo e padronizado, o risco já vem enquadrado pela sua política e só a exceção sobe para decisão humana, que fica registrada.</p>
    <div class="pcards">
      <div class="pcard reveal reveal-d1"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M3 6h18M3 18h12"/></svg></div><div class="q">Menos retrabalho</div><div class="a">O cadastro chega completo, sem ida e volta de documento.</div></div>
      <div class="pcard reveal reveal-d2"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4l4 4-4 4"/><path d="M20 8H8a4 4 0 0 0-4 4v8"/></svg></div><div class="q">Menos desistência</div><div class="a">Fluxo guiado no celular reduz o abandono no onboarding.</div></div>
      <div class="pcard reveal reveal-d3"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v9l6 3"/><circle cx="12" cy="12" r="9"/></svg></div><div class="q">Trilha pronta</div><div class="a">A evidência de cada decisão fica montada para o regulador.</div></div>
    </div>
  </div>
</section>

<!-- CTA -->
<section style="padding:64px 0 88px" id="demo"><div class="wrap"><div class="band reveal">
  <span class="eyebrow on-dark" style="justify-content:center">kycert para câmbio</span>
  <h2 class="serif">Sua conversa com o BCB começa com uma trilha pronta.</h2>
  <p>Veja a trilha auditável aplicada ao onboarding da sua corretora, em 30 minutos.</p>
  <div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost-dark btn-lg">Ver dossiê de exemplo</a></div>
</div></div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="solucoes" />
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
