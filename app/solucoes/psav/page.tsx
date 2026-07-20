import type { Metadata } from 'next';
import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'KYC e avaliação de risco para PSAV sob a Resolução BCB 520',
  description:
    'As dores das prestadoras de ativos virtuais sob o novo regime do BCB e como a kycert resolve: KYC, sanções, PEP e trilha de PLD/FT auditável.',
  alternates: { canonical: '/solucoes/psav' },
  openGraph: {
    title: 'KYC e avaliação de risco para PSAV sob a Resolução BCB 520 | kycert',
    description:
      'As dores das prestadoras de ativos virtuais sob o novo regime do BCB e como a kycert resolve: KYC, sanções, PEP e trilha de PLD/FT auditável.',
  },
  twitter: {
    title: 'KYC e avaliação de risco para PSAV sob a Resolução BCB 520 | kycert',
    description:
      'As dores das prestadoras de ativos virtuais sob o novo regime do BCB e como a kycert resolve: KYC, sanções, PEP e trilha de PLD/FT auditável.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"https://kycert.com.br/"},{"@type":"ListItem","position":2,"name":"Soluções"},{"@type":"ListItem","position":3,"name":"PSAV / cripto"}]}`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Soluções</span><span class="sep">/</span><span style="color:var(--text-secondary)">PSAV / cripto</span></div></nav>

<!-- HERO -->
<div class="wrap hero">
  <div class="hero-grid">
    <div>
      <span class="seg-pill reveal"><span class="dot"></span>Para PSAV / cripto</span>
      <div class="deadline-chip reveal"><span class="d"></span>Pedido de autorização ao BCB: até 30/10/2026</div>
      <h1 class="reveal reveal-d1">Você virou instituição supervisionada. <span class="em">O onboarding precisa acompanhar.</span></h1>
      <p class="lead reveal reveal-d2">Com a entrada das prestadoras de ativos virtuais sob autorização e supervisão do Banco Central, o cadastro de cliente passou a ter deveres de PLD/FT. A kycert registra cadastro, risco e decisão de cada cliente numa trilha auditável.</p>
      <div class="cta reveal reveal-d3"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo <svg class="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div>
      <div class="micro reveal reveal-d4"><span><span class="dot"></span>PF e PJ</span><span><span class="dot"></span>Sanções &amp; PEP</span><span><span class="dot"></span>White-label</span></div>
    </div>
    <div class="hero-visual reveal reveal-d2">
      <div class="ui-card">
        <div class="ui-head"><span class="t"><span class="live-dot"></span> Cliente PSAV · pessoa física</span><span class="badge">PLD/FT</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Identidade</b> · documento por OCR</span><span class="st">Verificado</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Sanções</b> · OFAC e listas ONU</span><span class="st">Sem ocorrência</span></div>
        <div class="ui-row seq"><span class="lbl"><b>PEP</b> · pessoa exposta politicamente</span><span class="st">Não exposto</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Risco</b> · enquadrado pela sua política</span><span class="st warn">Médio · revisar</span></div>
        <div class="ui-foot"><span>Cada etapa registrada para o regulador</span><span class="mono">Trilha PSAV</span></div>
      </div>
    </div>
  </div>
</div>

<div class="marquee-wrap"><div class="wrap" style="display:flex;align-items:center;gap:18px;justify-content:center;flex-wrap:wrap">
  <span class="marquee-lab" style="margin:0">Base regulatória</span>
  <span class="stag"><span class="gd"></span>Lei 14.478/2022</span><span class="stag"><span class="gd"></span>Res. BCB 519/2025</span><span class="stag"><span class="gd"></span>Res. BCB 520/2025</span><span class="stag"><span class="gd"></span>Res. BCB 521/2025</span><span class="stag"><span class="gd"></span>Lei 9.613/98</span><span class="stag"><span class="gd"></span>LGPD</span>
</div></div>

<!-- CONVERSÃO -->
<section class="sec-soft" id="fale-conosco">
  <div class="wrap sec-head">
    <span class="eyebrow reveal">Fale com a gente</span>
    <h2 class="reveal reveal-d1">Fale com quem entende a exigência.</h2>
    <p class="sec-lead reveal reveal-d2">Conte onde a sua operação está com a autorização e a gente volta com um plano objetivo para o seu onboarding.</p>
    <div class="split reveal" style="margin-top:44px;align-items:start">
      <div class="split-media">
        <div class="hs-form-frame" data-region="na1" data-form-id="a7e73094-edbe-4163-9a44-4fb1b7b18f22" data-portal-id="51689422"></div>
      </div>
      <div class="split-copy">
        <div class="regcard" style="align-items:flex-start">
          <div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg></div>
          <div>
            <h3>Prefere falar agora?</h3>
            <p>Conversa de diagnóstico de 15 minutos direto pelo WhatsApp, sem formulário.</p>
            <a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+vim+pela+p%C3%A1gina+de+PSAV+e+queria+a+conversa+de+diagn%C3%B3stico+de+15+minutos.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary" target="_blank" rel="noopener" style="margin-top:14px">Conversa de diagnóstico · 15 min</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AS DORES -->
<section>
  <div class="wrap sec-head">
    <span class="eyebrow reveal">O dia a dia hoje</span>
    <h2 class="reveal reveal-d1">A pressão que veio com a supervisão.</h2>
    <p class="sec-lead reveal reveal-d2">Operações que cresceram rápido agora precisam de um processo formal de KYC e PLD/FT — sem perder a velocidade que o cliente cripto espera.</p>
    <div class="pain-grid">
      <div class="pain reveal reveal-d1">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></span><h3>KYC informal virou exigência</h3></div>
        <p>O onboarding que rodava no improviso precisa agora documentar identidade, sanções, PEP e avaliação de risco — com prova para o supervisor.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg> processo formal exigido pela Res. 520</div>
      </div>
      <div class="pain reveal reveal-d2">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg></span><h3>Volume alto, paciência baixa</h3></div>
        <p>O cliente cripto-nativo abandona um cadastro lento. Você precisa verificar milhares de PF rápido, no celular, sem abrir mão de sanções e PEP.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4l4 4-4 4"/><path d="M20 8H8a4 4 0 0 0-4 4v8"/></svg> velocidade vs. conformidade</div>
      </div>
      <div class="pain reveal reveal-d3">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg></span><h3>Exposição internacional maior</h3></div>
        <p>Cripto cruza fronteiras. Um cliente sancionado pela OFAC ou em lista internacional que passa no cadastro vira risco direto para a operação.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg> sanção que passa é sanção que opera</div>
      </div>
      <div class="pain reveal reveal-d4">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 3v5h5M7 3h8l5 5v13H7zM9 13h6M9 17h6"/></svg></span><h3>Avaliação de risco sem registro</h3></div>
        <p>A Resolução 520 pede documentação da avaliação de risco de clientes e usuários. Sem trilha, não há como demonstrar o que foi avaliado.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></svg> avaliação sem prova não conta</div>
      </div>
    </div>
  </div>
</section>

<!-- COMO RESOLVEMOS -->
<section class="sec-soft">
  <div class="wrap sec-head">
    <span class="eyebrow reveal">Como a kycert resolve</span>
    <h2 class="reveal reveal-d1">Conformidade sem travar a operação.</h2>
    <div class="solmap">
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>KYC informal que precisa virar processo documentado para o supervisor.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Onboarding cripto-nativo e auditável.</b> Identidade, sanções, PEP e risco no mesmo fluxo, cada etapa registrada como evidência.</p></div>
      </div>
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Volume alto de PF que abandona cadastro lento.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Verificação em bloco, no celular.</b> Mais de 70 fontes numa consulta, com captura por OCR e leitura na hora — rápido para o cliente, completo para você.</p></div>
      </div>
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Exposição internacional: sanção OFAC que pode passar no cadastro.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Sanções e PEP no fluxo.</b> OFAC, listas da ONU, PEP e mídia adversa verificados em cada cliente, com apontamento e o critério da decisão registrados.</p></div>
      </div>
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Avaliação de risco que a Res. 520 exige, mas sem registro.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Avaliação de risco documentada.</b> O enquadramento de cada cliente fica gravado com critério, autor e data — pronto para apresentar ao BCB.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- NORMAS -->
<section>
  <div class="wrap sec-head">
    <span class="eyebrow reveal">O que muda para PSAVs</span>
    <h2 class="reveal reveal-d1">Cada norma cria um dever. A kycert cobre o onboarding.</h2>
    <div class="norms">
      <div class="norm reveal reveal-d1"><div class="nlaw">Lei nº 14.478/2022</div><p>Define as diretrizes para prestadoras de serviços de ativos virtuais e incluiu as PSAVs no alcance da Lei nº 9.613 (PLD/FT).</p><div class="entra"><b>Onde a kycert entra</b>Identificação, cadastro, verificação, avaliação de risco e evidência da decisão.</div></div>
      <div class="norm reveal reveal-d2"><div class="nlaw">Resolução BCB nº 519/2025</div><p>Disciplina a autorização e a transição para o regime supervisionado.</p><div class="entra"><b>Onde a kycert entra</b>Estrutura e demonstra o processo de onboarding que continua existindo depois da autorização.</div></div>
      <div class="norm reveal reveal-d3"><div class="nlaw">Resolução BCB nº 520/2025</div><p>Estabelece regras de funcionamento das PSAVs, incluindo a documentação da avaliação de risco de clientes e usuários.</p><div class="entra"><b>Onde a kycert entra</b>Registra documentos, consultas, pendências, análise, autoria, data e decisão numa trilha única.</div></div>
      <div class="norm reveal reveal-d3"><div class="nlaw">Resolução BCB nº 521/2025</div><p>Complementa o regime das PSAVs e fixa o cronograma de adequação: vigência em 02/02/2026 e pedido de autorização até 30/10/2026.</p><div class="entra"><b>Onde a kycert entra</b>Deixa o onboarding e a trilha prontos para apresentar no pedido de autorização, dentro do prazo.</div></div>
    </div>
    <div class="norms-ctx">
      <div class="norm-ctx reveal"><div class="nlaw">Lei nº 9.613/98 + COAF</div><p>Deveres de PLD/FT e comunicação. A kycert documenta o onboarding que alimenta esses controles.</p></div>
      <div class="norm-ctx reveal reveal-d1"><div class="nlaw">LGPD · Lei nº 13.709/18</div><p>Tratamento de dados pessoais com papéis definidos, controles de acesso e registros de tratamento.</p></div>
    </div>
    <p class="fineprint reveal">A kycert não substitui assessoria jurídica, protocolo de autorização, governança, custódia, monitoramento transacional ou comunicações ao COAF. Ela estrutura e registra o onboarding que alimenta esses controles.</p>
  </div>
</section>

<!-- CTA -->
<section style="padding:64px 0 88px" id="demo"><div class="wrap"><div class="band reveal">
  <span class="eyebrow on-dark" style="justify-content:center">kycert para PSAV</span>
  <h2 class="serif">Mostre ao BCB como você decide.</h2>
  <p>Veja a trilha auditável aplicada ao onboarding da sua exchange, em 30 minutos.</p>
  <div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost-dark btn-lg">Ver dossiê de exemplo</a></div>
</div></div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="solucoes" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <Script id="hs-form-embed" src="https://js.hsforms.net/forms/embed/51689422.js" strategy="afterInteractive" />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
