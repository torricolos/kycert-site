import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Dossiê de risco de exemplo | kycert',
  description:
    'Veja um dossiê de risco completo e anonimizado: score, apontamentos com evidência, estrutura societária, fontes consultadas e decisão registrada.',
  alternates: { canonical: '/dossie-exemplo' },
  openGraph: {
    title: 'Dossiê de risco de exemplo | kycert',
    description:
      'Veja um dossiê de risco completo e anonimizado: score, apontamentos com evidência, estrutura societária, fontes consultadas e decisão registrada.',
    url: '/dossie-exemplo',
  },
  twitter: {
    title: 'Dossiê de risco de exemplo | kycert',
    description:
      'Veja um dossiê de risco completo e anonimizado: score, apontamentos com evidência, estrutura societária, fontes consultadas e decisão registrada.',
  },
};

const EXTRA_STYLE = `
  @media (max-width:640px){.dossie-grid-2{grid-template-columns:1fr !important}}
`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span style="color:var(--text-secondary)">Dossiê de exemplo</span></div></nav>

<section style="padding:44px 0 24px"><div class="wrap">
  <div style="max-width:720px">
    <div class="art-eyebrow" style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">Dossiê de exemplo</div>
    <h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.06;letter-spacing:-.02em">Veja a prova antes da demo.</h1>
    <p style="font-size:18px;color:var(--text-secondary);line-height:1.55;margin:20px 0 0;max-width:60ch">Um dossiê de risco completo, como o seu compliance abre na auditoria: score, apontamentos com evidência, estrutura societária, fontes consultadas e a decisão registrada.</p>
    <div style="display:inline-flex;align-items:center;gap:9px;margin-top:22px;padding:8px 14px;border-radius:var(--r-full);background:var(--surface-app);border:1px solid var(--border-default);font-size:13px;color:var(--text-secondary)"><span style="width:7px;height:7px;border-radius:50%;background:var(--text-tertiary);flex:none"></span> Dados 100% fictícios e anonimizados</div>
  </div>
</div></section>

<!-- BIG SCREEN -->
<section style="padding:8px 0 24px"><div class="wrap">
  <div class="browser">
    <div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="url">admin.kycert.com.br/dossie/exemplo</span></div>
    <div class="screen">
      <div class="screen-side">
        <div class="s-brand">kycert<span class="sig">.</span></div>
        <div class="s-nav">
          <a class="on"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> Dossiê</a>
          <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg> Consultas</a>
          <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg> Compliance</a>
        </div>
      </div>
      <div class="screen-main">
        <div class="sm-head">
          <div><div class="h">Brick Lane Hospitalidade LTDA</div><div class="sub">CNPJ 41.882.300/0001-55 · livemode · 09/06/2026</div></div>
          <div class="score-ring">
            <svg class="ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(14,17,22,.08)" stroke-width="3.4"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="#C2772E" stroke-width="3.4" stroke-dasharray="62 100" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg>
            <div><div style="font-size:11px;color:var(--text-tertiary);font-family:var(--font-mono)">RISCO</div><div style="font-size:17px;font-weight:600;color:var(--warning)">Atenção</div></div>
          </div>
        </div>
        <div class="kpis">
          <div class="kpi"><div class="k">Seções</div><div class="v">4</div></div>
          <div class="kpi"><div class="k">Apontamentos</div><div class="v warn">2</div></div>
          <div class="kpi"><div class="k">Sócios</div><div class="v">3</div></div>
        </div>
        <div class="rows">
          <div class="r"><span class="rl"><b>Cadastral &amp; empresa</b> <small>· CNPJ ativo · 3 anos</small></span><span class="tagst ok">Sem alertas</span></div>
          <div class="r"><span class="rl"><b>Compliance / KYC</b> <small>· empresa + sócios</small></span><span class="tagst err">2 apontamentos</span></div>
          <div class="r"><span class="rl"><b>Estrutura societária</b> <small>· até o beneficiário final</small></span><span class="tagst ok">Mapeada</span></div>
          <div class="r"><span class="rl"><b>Fontes consultadas</b> <small>· 72 fontes · livemode</small></span><span class="tagst ok">Concluída</span></div>
        </div>
      </div>
    </div>
  </div>
</div></section>

<!-- APONTAMENTOS + ESTRUTURA + FONTES + DECISÃO -->
<section style="padding:48px 0 40px"><div class="wrap">
  <span class="eyebrow reveal">Apontamentos</span>
  <h2 class="reveal reveal-d1" style="margin:14px 0 0">A evidência vem junto do alerta.</h2>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:32px" class="reveal dossie-grid-2">
    <div style="border:1px solid #E7C9C4;border-left:3px solid #C0392B;border-radius:var(--r-lg);background:#FCF1EF;padding:20px 22px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px"><span style="font-size:11px;font-weight:600;color:#C0392B;background:#FBE6E3;padding:3px 9px;border-radius:var(--r-full)">Ativo</span><b style="font-size:16px">Crime Financeiro</b><span style="margin-left:auto;font-family:var(--font-mono);font-size:12px;font-weight:700;color:#C0392B">91% match</span></div>
      <dl style="display:grid;grid-template-columns:1fr auto;gap:9px 16px;margin:0;font-size:13px"><dt style="color:var(--text-tertiary)">Fonte / Lista</dt><dd style="margin:0;font-weight:600;text-align:right">OFAC · SDN</dd><dt style="color:var(--text-tertiary)">Sócio</dt><dd style="margin:0;font-weight:600;text-align:right">Heitor A. Brandão</dd><dt style="color:var(--text-tertiary)">Desde</dt><dd style="margin:0;font-weight:600;text-align:right">12/03/2021</dd></dl>
    </div>
    <div style="border:1px solid var(--warning-bd);border-left:3px solid var(--warning);border-radius:var(--r-lg);background:var(--warning-bg);padding:20px 22px">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:14px"><span style="font-size:11px;font-weight:600;color:var(--warning);background:#F6E4C9;padding:3px 9px;border-radius:var(--r-full)">Ativo</span><b style="font-size:16px">Mandado de Prisão</b><span style="margin-left:auto;font-family:var(--font-mono);font-size:12px;font-weight:700;color:var(--warning)">96% match</span></div>
      <dl style="display:grid;grid-template-columns:1fr auto;gap:9px 16px;margin:0;font-size:13px"><dt style="color:var(--text-tertiary)">Fonte / Lista</dt><dd style="margin:0;font-weight:600;text-align:right">CNJ</dd><dt style="color:var(--text-tertiary)">Sócio</dt><dd style="margin:0;font-weight:600;text-align:right">Lucas P. Matos</dd><dt style="color:var(--text-tertiary)">Desde</dt><dd style="margin:0;font-weight:600;text-align:right">18/06/2024</dd></dl>
    </div>
  </div>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:16px;align-items:start" class="reveal dossie-grid-2">
    <div class="ui-card">
      <div class="ui-head"><span class="t"><span class="live-dot"></span> Estrutura societária</span><span class="badge" style="color:var(--warning);background:var(--warning-bg);border-color:var(--warning-bd)">2 apontamentos</span></div>
      <div class="ui-row"><span class="lbl"><b>Brick Lane Hospitalidade LTDA</b><br><small style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">empresa analisada</small></span><span class="st">Nada consta</span></div>
      <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>Heitor A. Brandão</b> · 50%</span><span class="st warn">Sanção</span></div>
      <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>Lucas P. Matos</b> · 30%</span><span class="st warn">Mandado</span></div>
      <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>RV Participações</b> · 20%</span><span class="st">Nada consta</span></div>
      <div class="ui-row"><span class="lbl" style="padding-left:32px">↳ <b>Diego M. Sosa</b> · UBO</span><span class="st">Nada consta</span></div>
      <div class="ui-foot"><span>Beneficiário final identificado</span><span class="mono">cadeia · 3 níveis</span></div>
    </div>
    <div class="ui-card">
      <div class="ui-head"><span class="t"><span class="live-dot"></span> Fontes consultadas</span><span class="badge">72 fontes</span></div>
      <div class="ui-row"><span class="lbl"><b>Receita Federal</b></span><span class="st">success · 388ms</span></div>
      <div class="ui-row"><span class="lbl"><b>OFAC &amp; listas ONU</b></span><span class="st">success · 512ms</span></div>
      <div class="ui-row"><span class="lbl"><b>PEP · TSE</b></span><span class="st">success · 466ms</span></div>
      <div class="ui-row"><span class="lbl"><b>CNJ · mandados</b></span><span class="st">success · 669ms</span></div>
      <div class="ui-foot"><span style="font-family:var(--font-mono);font-size:11px;color:var(--text-tertiary)">● livemode · run_5b21c9af</span><span class="mono">créditos 4,12</span></div>
    </div>
  </div>

  <div style="margin-top:16px" class="reveal">
    <div class="ui-card">
      <div class="ui-head"><span class="t"><span class="live-dot"></span> Decisão registrada</span><span class="badge" style="color:var(--warning);background:var(--warning-bg);border-color:var(--warning-bd)">Em revisão</span></div>
      <div style="padding:20px 18px;display:flex;gap:16px;flex-wrap:wrap;align-items:flex-start">
        <div style="display:flex;align-items:center;gap:12px"><span style="width:36px;height:36px;border-radius:50%;background:var(--surface-sunken);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:var(--text-secondary)">AC</span><div><div style="font-size:14px;font-weight:600">ana.compliance</div><div style="font-size:12px;color:var(--text-tertiary);font-family:var(--font-mono)">analista sênior · 09/06 · 14h20</div></div></div>
        <div style="flex:1;min-width:240px;font-size:13.5px;color:var(--text-secondary);line-height:1.55;background:var(--surface-app);border:1px solid var(--border-default);border-radius:var(--r);padding:12px 14px">"Sanção ativa confirmada no sócio-administrador. Cliente encaminhado para diligência reforçada antes de qualquer operação."</div>
      </div>
      <div class="ui-foot"><span>Registrado na trilha do cliente</span><span class="mono">PDF disponível</span></div>
    </div>
  </div>
</div></section>

<!-- CTA -->
<section style="padding:24px 0 88px"><div class="wrap"><div class="band reveal">
  <span class="eyebrow on-dark" style="justify-content:center">kycert</span>
  <h2 class="serif">Quer ver com os seus dados?</h2>
  <p>Rode uma consulta real na demo e veja o dossiê montado de ponta a ponta.</p>
  <div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/produto/dossie-de-risco" class="btn btn-ghost-dark btn-lg">Conhecer o Dossiê de Risco</a></div>
</div></div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="recursos" />
      <style dangerouslySetInnerHTML={{ __html: EXTRA_STYLE }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
