import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'KYC, KYB e onboarding para bancos e fintechs | kycert',
  description:
    'As dores de abertura de conta e crédito em escala e como a kycert resolve: KYC, KYB, enquadramento de risco e trilha auditável para instituições de pagamento e crédito.',
  alternates: { canonical: '/solucoes/bancos' },
  openGraph: {
    title: 'KYC, KYB e onboarding para bancos e fintechs | kycert',
    description:
      'As dores de abertura de conta e crédito em escala e como a kycert resolve: KYC, KYB, enquadramento de risco e trilha auditável para instituições de pagamento e crédito.',
  },
  twitter: {
    title: 'KYC, KYB e onboarding para bancos e fintechs | kycert',
    description:
      'As dores de abertura de conta e crédito em escala e como a kycert resolve: KYC, KYB, enquadramento de risco e trilha auditável para instituições de pagamento e crédito.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"https://kycert.com.br/"},{"@type":"ListItem","position":2,"name":"Soluções"},{"@type":"ListItem","position":3,"name":"Bancos & fintechs"}]}`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Soluções</span><span class="sep">/</span><span style="color:var(--text-secondary)">Bancos & fintechs</span></div></nav>

<!-- HERO -->
<div class="wrap hero">
  <div class="hero-grid">
    <div>
      <span class="seg-pill reveal"><span class="dot"></span>Para bancos &amp; fintechs</span>
      <h1 class="reveal reveal-d1">Conta aberta em escala, <span class="em">com o risco enquadrado.</span></h1>
      <p class="lead reveal reveal-d2">Instituições de pagamento e crédito abrem conta e concedem crédito em escala — e respondem por cada cliente em PLD/FT. A kycert junta KYC de PF, KYB de PJ e enquadramento de risco num onboarding único, com a evidência registrada.</p>
      <div class="cta reveal reveal-d3"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo <svg class="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div>
      <div class="micro reveal reveal-d4"><span><span class="dot"></span>KYC + KYB</span><span><span class="dot"></span>Enquadramento de risco</span><span><span class="dot"></span>API</span></div>
    </div>
    <div class="hero-visual reveal reveal-d2">
      <div class="ui-card">
        <div class="ui-head"><span class="t"><span class="live-dot"></span> Abertura de conta · PF</span><span class="badge">KYC</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Identidade</b> · documento por OCR</span><span class="st">Verificado</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Receita</b> · situação cadastral</span><span class="st">Regular</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Sanções &amp; PEP</b> · OFAC e listas</span><span class="st">Sem ocorrência</span></div>
        <div class="ui-row seq"><span class="lbl"><b>Risco</b> · enquadrado pela política</span><span class="st">Baixo · aprovado</span></div>
        <div class="ui-foot"><span>Conta aprovada e registrada</span><span class="mono">1,8s</span></div>
      </div>
    </div>
  </div>
</div>

<div class="marquee-wrap"><div class="wrap" style="display:flex;align-items:center;gap:18px;justify-content:center;flex-wrap:wrap">
  <span class="marquee-lab" style="margin:0">Base regulatória</span>
  <span class="stag"><span class="gd"></span>Circular BCB 3.978/2020</span><span class="stag"><span class="gd"></span>Lei 9.613/98</span><span class="stag"><span class="gd"></span>COAF</span><span class="stag"><span class="gd"></span>LGPD</span>
</div></div>

<!-- AS DORES -->
<section>
  <div class="wrap sec-head">
    <span class="eyebrow reveal">O dia a dia hoje</span>
    <h2 class="reveal reveal-d1">Escala e conformidade puxam para lados opostos.</h2>
    <p class="sec-lead reveal reveal-d2">Quanto mais rápido você abre conta e concede crédito, mais difícil fica garantir que cada cliente foi verificado e registrado direito.</p>
    <div class="pain-grid">
      <div class="pain reveal reveal-d1">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></span><h3>Fraude de identidade na entrada</h3></div>
        <p>Abertura de conta 100% digital convive com documento adulterado e identidade de terceiro. Sem verificação forte, a fraude entra junto com o cliente bom.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01"/><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"/></svg> conta fraudada nasce dentro da base</div>
      </div>
      <div class="pain reveal reveal-d2">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg></span><h3>KYB de PJ é trabalho manual</h3></div>
        <p>Cliente PJ exige quadro societário e beneficiário final. Feito a cada cliente na mão, vira gargalo — ou vira atalho que deixa o risco passar.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 8v4l3 2"/><circle cx="12" cy="12" r="9"/></svg> KYB lento trava a conta PJ</div>
      </div>
      <div class="pain reveal reveal-d3">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18M7 14l4-4 3 3 5-6"/></svg></span><h3>Crédito sem leitura de risco</h3></div>
        <p>Conceder crédito rápido sem enquadrar o risco do cliente troca inadimplência e exposição regulatória por velocidade.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 17l6-6 4 4 8-8"/></svg> risco aprovado às cegas</div>
      </div>
      <div class="pain reveal reveal-d4">
        <div class="ph"><span class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18M12 3v18"/></svg></span><h3>Cada produto, um onboarding</h3></div>
        <p>Conta, crédito, câmbio e cartão acabam com fluxos de verificação diferentes, sem uma trilha única por cliente que o compliance consiga seguir.</p>
        <div class="cost"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h18M3 12h18M3 17h10"/></svg> trilha fragmentada por produto</div>
      </div>
    </div>
  </div>
</section>

<!-- COMO RESOLVEMOS -->
<section class="sec-soft">
  <div class="wrap sec-head">
    <span class="eyebrow reveal">Como a kycert resolve</span>
    <h2 class="reveal reveal-d1">Um onboarding, todos os produtos.</h2>
    <div class="solmap">
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Fraude de identidade na abertura 100% digital.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Verificação de identidade no cadastro.</b> Documento por OCR, dados validados na Receita e cruzamento com sanções e PEP antes de a conta abrir.</p></div>
      </div>
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>KYB de PJ feito manualmente, cliente a cliente.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>KYB com beneficiário final automático.</b> Quadro societário recuperado e cada entidade verificada até o controlador, sem trabalho manual.</p></div>
      </div>
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Crédito concedido sem leitura de risco.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Enquadramento pela sua política.</b> O risco do cliente é classificado pelas regras que você define e conecta ao seu motor de crédito por API.</p></div>
      </div>
      <div class="solrow reveal">
        <div class="from"><div class="l"><span class="dot" style="width:6px;height:6px;border-radius:50%;background:#C0392B;display:inline-block"></span>A dor</div><p>Um fluxo de verificação diferente por produto.</p></div>
        <div class="arrow"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>
        <div class="to"><div class="l"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg> Na kycert</div><p><b>Uma trilha por cliente.</b> Conta, crédito e câmbio compartilham o mesmo histórico auditável, com a evidência de cada decisão num só lugar.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- INTEGRAÇÃO -->
<section class="sec-dark">
  <div class="wrap">
    <div class="split">
      <div class="split-copy reveal">
        <span class="eyebrow on-dark">Feita para escala</span>
        <h3 style="margin-top:14px;color:#fff">A verificação <span class="serif" style="color:var(--signal-on-dark)">dentro do seu fluxo.</span></h3>
        <p style="color:#aab1b9">Dispare uma verificação a partir do seu app de abertura de conta, receba o dossiê estruturado em segundos e siga com a decisão no seu motor. A trilha fica registrada na kycert e disponível para o compliance.</p>
        <div class="flist">
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b style="color:#fff">API REST e webhooks</b><p style="color:#99a1aa">Consultas disparadas pelo seu app, com aviso de mudança de status.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b style="color:#fff">PF e PJ no mesmo contrato</b><p style="color:#99a1aa">KYC, KYB e enquadramento de risco numa só integração.</p></div></div>
        </div>
      </div>
      <div class="split-media reveal reveal-d2">
        <div class="code-card">
          <div class="code-bar"><i></i><i></i><i></i><span class="fn">abrir_conta.sh</span></div>
          <pre class="code"><span class="c"># verifica o cliente na abertura de conta</span>
<span class="k">curl</span> -X POST https://api.kycert.com.br/v1/<span class="p">consultas</span> \\
  -H <span class="s">"Authorization: Bearer sk_live_..."</span> \\
  -d <span class="s">'{ "tipo": "pf",
        "documento": "***.***.***-12",
        "fontes": ["receita","sancoes","pep"] }'</span>

<span class="c"># resposta em segundos</span>
{ <span class="s">"status"</span>: <span class="s">"concluida"</span>,
  <span class="s">"risco"</span>: <span class="s">"baixo"</span>,
  <span class="s">"decisao"</span>: <span class="s">"aprovar"</span> }</pre>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CTA -->
<section style="padding:64px 0 88px" id="demo"><div class="wrap"><div class="band reveal">
  <span class="eyebrow on-dark" style="justify-content:center">kycert para bancos &amp; fintechs</span>
  <h2 class="serif">Abra conta rápido, sem abrir mão da trilha.</h2>
  <p>Veja o KYC, o KYB e o enquadramento de risco da kycert no seu onboarding, em 30 minutos.</p>
  <div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost-dark btn-lg">Ver dossiê de exemplo</a></div>
</div></div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="solucoes" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
