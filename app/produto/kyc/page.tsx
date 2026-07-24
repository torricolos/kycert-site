import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Verificação de pessoa física (KYC) com trilha auditável',
  description:
    'KYC de PF com documento, biometria, screening de Sanções e PEP e enquadramento de risco — cada checagem registrada como evidência para a fiscalização.',
  alternates: { canonical: '/produto/kyc' },
  openGraph: {
    title: 'Verificação de pessoa física (KYC) com trilha auditável | kycert',
    description:
      'KYC de PF com documento, biometria, screening de Sanções e PEP e enquadramento de risco — cada checagem registrada como evidência para a fiscalização.',
    url: '/produto/kyc',
  },
  twitter: {
    title: 'Verificação de pessoa física (KYC) com trilha auditável | kycert',
    description:
      'KYC de PF com documento, biometria, screening de Sanções e PEP e enquadramento de risco — cada checagem registrada como evidência para a fiscalização.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"SoftwareApplication","name":"kycert — Verificação PF · KYC","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"KYC de PF com documento, biometria, screening de Sanções e PEP e enquadramento de risco — cada checagem registrada como evidência para a fiscalização.","offers":{"@type":"Offer","priceCurrency":"BRL"}}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Verificação PF · KYC"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Produtos</span><span class="sep">/</span><span style="color:var(--text-secondary)">Verificação PF · KYC</span></div></nav>
<section style="padding:44px 0 16px"><div class="wrap-narrow">
<div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">Verificação de pessoa física</div>
<h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.06;letter-spacing:-.02em">Verifique a pessoa. Registre cada checagem.</h1>
<p style="font-size:19px;color:var(--text-secondary);line-height:1.55;margin:22px 0 28px;max-width:60ch">Documento com OCR, Sanções e PEP, enquadramento de risco. A kycert conduz o onboarding da pessoa física e guarda o caminho inteiro — quem foi verificado, contra quais fontes e qual foi a decisão — pronto para apresentar quando o regulador pedir.</p>
<div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div>
</div></section>
<section style="padding:8px 0 8px"><div class="wrap">
  <div class="browser reveal">
    <div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="url">admin.kycert.com.br/dossie/pf</span></div>
    <div class="screen">
      <div class="screen-side">
        <div class="s-brand">kycert<span class="sig">.</span></div>
        <div class="s-nav">
          <a class="on"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg> Dossiê</a>
          <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg> Consultas</a>
          <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h10"/></svg> Fila de análise</a>
        </div>
      </div>
      <div class="screen-main">
        <div class="sm-head">
          <div><div class="h">Helena Castro Almeida</div><div class="sub">CPF •••.•••.412-77 · livemode</div></div>
          <div class="score-ring">
            <svg class="ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(14,17,22,.08)" stroke-width="3.4"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="#1F8A5B" stroke-width="3.4" stroke-dasharray="90 100" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg>
            <div><div style="font-size:11px;color:var(--text-tertiary);font-family:var(--font-mono)">RISCO</div><div style="font-size:17px;font-weight:600;color:var(--signal)">Baixo</div></div>
          </div>
        </div>
        <div class="kpis">
          <div class="kpi"><div class="k">Fontes</div><div class="v ok">72</div></div>
          <div class="kpi"><div class="k">Apontamentos</div><div class="v">0</div></div>
          <div class="kpi"><div class="k">Tempo</div><div class="v">1,8s</div></div>
        </div>
        <div class="rows">
          <div class="r"><span class="rl"><b>Receita Federal</b> <small>· situação cadastral</small></span><span class="tagst ok">Regular</span></div>
          <div class="r"><span class="rl"><b>OFAC &amp; listas ONU</b> <small>· sanções</small></span><span class="tagst ok">Sem ocorrência</span></div>
          <div class="r"><span class="rl"><b>PEP</b> <small>· pessoa exposta</small></span><span class="tagst ok">Não exposto</span></div>
          <div class="r"><span class="rl"><b>Antecedentes</b> <small>· CNJ</small></span><span class="tagst ok">Nada consta</span></div>
          <div class="r"><span class="rl"><b>Mídia adversa</b> <small>· imprensa</small></span><span class="tagst warn">1 menção</span></div>
        </div>
        <div style="margin-top:16px;font-family:var(--font-mono);font-size:11.5px;color:var(--text-tertiary);display:flex;gap:16px;flex-wrap:wrap"><span>● livemode</span><span>decisão registrada · ana.compliance · 14h20</span></div>
      </div>
    </div>
  </div>
</div></section>
<section style="padding:8px 0 56px"><div class="wrap-narrow"><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">O que a verificação PF resolve</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">O bureau devolve uma consulta isolada e você reconstrói o resto na mão. A kycert organiza a verificação da pessoa física em uma trilha única: o convite sai com a sua marca, o cliente envia o documento, as checagens rodam em bloco e o resultado vira um dossiê com a decisão registrada. Quando a fiscalização perguntar como você aprovou aquele cliente, a resposta já está montada.</p><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Capacidades</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0"><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Documento e biometria <span style="display:inline-block;font-family:var(--font-mono);font-size:10px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--text-tertiary);background:var(--surface-app);border:1px solid var(--border-default);border-radius:9999px;padding:2px 9px;margin-left:6px;vertical-align:middle">Facial: em breve</span></div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Captura de documento brasileiro com OCR — o cliente conclui pelo celular, sem digitar dados que o documento já traz. A prova de vida e a correspondência facial entram em breve, no roadmap.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Sanções e PEP</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Screening contra listas de sanções (OFAC, ONU, COAF) e exposição política, com percentual de correspondência e período da ocorrência registrados no dossiê.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Enquadramento de risco</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Cada cliente recebe um veredito de risco com a base que o sustenta. Casos limpos ficam recolhidos; o que exige atenção aparece em primeiro plano.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Dossiê PF auditável</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Convite, documento, fontes consultadas e decisão — com autor, data e justificativa — reunidos em um único registro exportável em PDF.</p></div></div><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Onde se aplica</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">A verificação PF é a base do onboarding em qualquer segmento regulado. Veja onde ela se aplica:</p><a href="/solucoes/cambio" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Corretoras de câmbio →</a><a href="/solucoes/psav" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">PSAV / cripto →</a><a href="/solucoes/bancos" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Bancos &amp; fintechs →</a><a href="/solucoes/cooperativas" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Cooperativas de crédito →</a><a href="/solucoes/mercado-capitais" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Consórcios &amp; capitais →</a><a href="/solucoes/seguradoras" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Seguradoras →</a><a href="/solucoes/bets" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Apostas / Bets →</a><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Perguntas frequentes</h2><div style="display:grid;grid-template-columns:1fr;gap:14px;margin:24px 0"><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">A verificação roda em quanto tempo?</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">As checagens são executadas em bloco assim que o cliente envia o documento, e o dossiê fica disponível para revisão em seguida.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Quais fontes são consultadas?</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Dezenas de fontes oficiais, incluindo Receita, listas de sanções (OFAC, ONU), COAF e bases de PEP. A lista consultada fica registrada em cada Run.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Consigo apresentar isso numa fiscalização?</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Sim. O dossiê reúne a decisão e a evidência que a sustenta, exportável em PDF.</p></div></div></div></section>
<section style="padding:0 0 88px"><div class="wrap"><div class="band reveal"><span class="eyebrow on-dark" style="justify-content:center">kycert</span><h2 class="serif">Veja a verificação PF aplicada ao seu segmento.</h2><div class="cta" style="margin-top:8px"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost-dark btn-lg">Ver dossiê de exemplo</a></div></div></div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="produtos" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />

      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
