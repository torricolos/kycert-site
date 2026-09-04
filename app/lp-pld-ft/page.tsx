import type { Metadata } from 'next';
import Script from 'next/script';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'PLD-FT com trilha auditável',
  description:
    'Onboarding com KYC, KYB e trilha auditável para PLD/FT: cada decisão registrada com autor, data e evidência, pronta para a fiscalização.',
  alternates: { canonical: '/lp-pld-ft' },
  openGraph: {
    title: 'PLD-FT com trilha auditável | kycert',
    description:
      'Onboarding com KYC, KYB e trilha auditável para PLD/FT: cada decisão registrada com autor, data e evidência, pronta para a fiscalização.',
  },
  twitter: {
    title: 'PLD-FT com trilha auditável | kycert',
    description:
      'Onboarding com KYC, KYB e trilha auditável para PLD/FT: cada decisão registrada com autor, data e evidência, pronta para a fiscalização.',
  },
};

const BODY_HTML = `
<!-- HERO -->
<section class="hero">
  <div class="wrap">
    <span class="eyebrow reveal">PLD-FT &amp; KYC</span>
    <h1 class="reveal reveal-d1">Prova pronta quando a <span class="em">fiscalização pedir.</span></h1>
    <p class="lead reveal reveal-d2">A kycert registra quem analisou, quando e com qual evidência, em cada etapa do onboarding.</p>
    <div class="cta reveal reveal-d3"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo <svg class="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div>
  </div>
</section>

<!-- AUDIT LOG -->
<section class="sec-soft">
  <div class="wrap-narrow" style="text-align:center">
    <span class="eyebrow reveal" style="justify-content:center">Trilha em tempo real</span>
    <h2 class="reveal reveal-d1" style="margin-left:auto;margin-right:auto">Cada decisão, com autor e data.</h2>
    <p class="sec-lead reveal reveal-d2" style="margin-left:auto;margin-right:auto">Histórico vivo de consultas, status de risco e a trilha por trás de cada decisão, pronto para apresentar na fiscalização.</p>
  </div>
  <div class="wrap-narrow" style="margin-top:44px">
    <div class="panel reveal">
      <div class="ph"><div class="ttl">Histórico de consultas</div><div class="live"><span class="d"></span>tempo real</div></div>
      <div class="filterbar"><span class="gpill on">Todos <span class="x">·</span> 248</span><span class="gpill">Aprovados</span><span class="gpill">Em revisão</span><span class="gpill">Bloqueados</span></div>
      <div class="row"><span class="t">14:02</span><span class="who"><b>João Silva</b><span class="id">CPF ···.···.123-45</span></span><span class="st ok">Aprovado</span></div>
      <div class="row"><span class="t">13:58</span><span class="who"><b>Compliance Ltda</b><span class="id">CNPJ ··.···.···/0001-99</span></span><span class="st rev2">Em revisão</span></div>
      <div class="row"><span class="t">13:51</span><span class="who"><b>Maria Santos</b><span class="id">CPF ···.···.456-78</span></span><span class="st blk">PEP · bloqueio</span></div>
      <div class="row"><span class="t">13:47</span><span class="who"><b>Atlas Pagamentos Ltda</b><span class="id">CNPJ ··.···.···/0001-22</span></span><span class="st ok">Aprovado</span></div>
      <div class="pf"><span>atualizado há 8s</span><span class="audit"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>cada linha gera trilha de auditoria</span></div>
    </div>
  </div>
</section>

<!-- TRILHA: convite → decisão -->
<section class="sec-dark">
  <div class="wrap">
    <span class="eyebrow on-dark reveal">Do convite à decisão</span>
    <h2 class="reveal reveal-d1">Cada etapa <span class="serif">nasce registrada</span> como evidência.</h2>
    <p class="sec-lead reveal reveal-d2">Quando a fiscalização pede a trilha de um cliente, o histórico já está montado.</p>
    <div class="flow">
      <div class="flow-line"></div>
      <div class="flow-nodes">
        <div class="fnode"><div class="pin">01</div><div><h4>Convite</h4><p>link enviado com a sua marca</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
        <div class="fnode"><div class="pin">02</div><div><h4>Captura</h4><p>documento · leitura (OCR)</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
        <div class="fnode"><div class="pin">03</div><div><h4>Verificações</h4><p>bases cruzadas em bloco</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
        <div class="fnode"><div class="pin">04</div><div><h4>Risco</h4><p>enquadrado pela sua regra</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
        <div class="fnode"><div class="pin">05</div><div><h4>Decisão</h4><p>aprovação com autor e data</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
      </div>
    </div>
  </div>
</section>

<!-- ÁRVORE UBO -->
<section>
  <div class="wrap">
    <div class="split reveal">
      <div class="split-copy">
        <span class="eyebrow">Pessoa jurídica · KYB</span>
        <h3 style="margin-top:14px">Até o beneficiário final, <span class="serif">com a cadeia inteira registrada.</span></h3>
        <p>Cadastro PJ, quadro societário e cada participante da estrutura verificado, do sócio direto ao UBO.</p>
        <div class="flist">
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Cadeia desenhada automaticamente</b><p>Da empresa aos sócios PF e PJ, com participação e função.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Beneficiário final identificado</b><p>A participação é seguida até o UBO, mesmo em estruturas com holding.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Status por nó</b><p>Sanções, PEP e mandados marcados em cada participante da estrutura.</p></div></div>
        </div>
      </div>
      <div class="split-media">
        <div class="ui-card">
          <div class="ui-head"><span class="t"><span class="live-dot"></span> Estrutura societária</span><span class="badge">até o UBO</span></div>
          <div class="ui-row"><span class="lbl"><b>Empresa cliente LTDA</b><br><small style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">pessoa jurídica analisada</small></span><span class="st">Nada consta</span></div>
          <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>Sócia-administradora</b> · 60%</span><span class="st">Nada consta</span></div>
          <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>Holding controladora</b> · 40%</span><span class="st">Nada consta</span></div>
          <div class="ui-row"><span class="lbl" style="padding-left:32px">↳ <b>Beneficiário final</b> · UBO</span><span class="st">Nada consta</span></div>
          <div class="ui-foot"><span>Cada entidade verificada na cadeia</span><span class="mono">3 níveis</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CONVERSÃO -->
<section class="sec-soft" id="fale-conosco">
  <div class="wrap sec-head">
    <span class="eyebrow reveal">Fale com a gente</span>
    <h2 class="reveal reveal-d1">Fale com quem entende a exigência.</h2>
    <p class="sec-lead reveal reveal-d2">Conte onde a sua operação está com o PLD/FT e a gente volta com um plano objetivo para o seu onboarding.</p>
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
            <a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+vim+pela+p%C3%A1gina+de+PLD-FT+e+queria+a+conversa+de+diagn%C3%B3stico+de+15+minutos.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary" target="_blank" rel="noopener" style="margin-top:14px">Conversa de diagnóstico · 15 min</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export default function Page() {
  return (
    <>
      <Nav active="" />
      <Script id="hs-form-embed" src="https://js.hsforms.net/forms/embed/51689422.js" strategy="afterInteractive" />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
