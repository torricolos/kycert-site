import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Preços',
  description:
    'A kycert cobra por créditos de verificação, com plataforma white-label inclusa. Fale com o time para um plano dimensionado ao seu volume.',
  alternates: { canonical: '/precos' },
  openGraph: {
    title: 'Preços | kycert',
    description:
      'A kycert cobra por créditos de verificação, com plataforma white-label inclusa. Fale com o time para um plano dimensionado ao seu volume.',
    url: '/precos',
  },
  twitter: {
    title: 'Preços | kycert',
    description:
      'A kycert cobra por créditos de verificação, com plataforma white-label inclusa. Fale com o time para um plano dimensionado ao seu volume.',
  },
};

const EXTRA_STYLE = `
.pricing-wrap{overflow-x:auto;margin:8px 0}
.pricing{width:100%;border-collapse:collapse;min-width:680px}
.pricing th,.pricing td{padding:13px 18px;text-align:left;border-bottom:1px solid var(--border-default);font-size:14px;vertical-align:top}
.pricing thead th{border-bottom:1px solid var(--border-strong);vertical-align:bottom}
.pricing thead th .pn{font-size:18px;font-weight:700;letter-spacing:-.01em;color:var(--text-primary)}
.pricing thead th .pt{font-size:12px;color:var(--text-tertiary);font-weight:400;margin-top:5px;line-height:1.4}
.pricing tbody td:first-child{color:var(--text-secondary);font-weight:500}
.pricing td.c{text-align:center}
.pricing .chk{color:var(--signal);font-weight:700}
.pricing .dash{color:var(--text-tertiary)}
.pricing td.val{text-align:center;font-size:13px;color:var(--text-primary)}
.pricing .featured{background:var(--surface-app)}
.pricing thead th.featured .pn{color:var(--signal)}
.pp-badge{display:inline-block;font-family:var(--font-mono);font-size:9.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--signal);background:var(--signal-bg);border:1px solid var(--signal-bd);border-radius:999px;padding:2px 8px;margin-bottom:9px}
`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Preços"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span style="color:var(--text-secondary)">Preços</span></div></nav>
<section style="padding:44px 0 16px"><div class="wrap-narrow">
<div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">Preços</div>
<h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.06;letter-spacing:-.02em">Você paga pela verificação. A plataforma vem junto.</h1>
<p style="font-size:19px;color:var(--text-secondary);line-height:1.55;margin:22px 0 28px;max-width:60ch">O modelo é por créditos: cada verificação consome créditos conforme as fontes consultadas. A plataforma white-label, o dossiê auditável e a trilha de decisão estão inclusos — sem cobrança por assento ou por módulo.</p>
<div class="cta"><a href="/#demo" class="btn btn-primary btn-lg">Falar com o time</a></div>
</div></section><section style="padding:16px 0 8px"><div class="wrap">
<h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:0 0 6px">Planos</h2>
<p style="font-size:15px;color:var(--text-secondary);margin:0 0 22px;max-width:60ch">Mesma plataforma em todos os planos. O que muda é o volume, o acompanhamento e o nível de suporte.</p>
<div class="pricing-wrap"><table class="pricing">
<colgroup><col style="width:34%"><col><col><col></colgroup>
<thead><tr>
  <th></th>
  <th><div class="pn">Essencial</div><div class="pt">Para começar a verificar com trilha</div></th>
  <th class="featured"><span class="pp-badge">Mais escolhido</span><div class="pn">Completo</div><div class="pt">Para operação em volume crescente</div></th>
  <th><div class="pn">Avançado</div><div class="pt">Para alto volume e SLA</div></th>
</tr></thead>
<tbody>
  <tr><td>Verificação PF · KYC</td><td class="c"><span class="chk">✓</span></td><td class="c featured"><span class="chk">✓</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>Verificação PJ · KYB / UBO</td><td class="c"><span class="chk">✓</span></td><td class="c featured"><span class="chk">✓</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>Dossiê de Risco</td><td class="c"><span class="chk">✓</span></td><td class="c featured"><span class="chk">✓</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>Decisão registrada</td><td class="c"><span class="chk">✓</span></td><td class="c featured"><span class="chk">✓</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>Cadastro &amp; documentos · OCR</td><td class="c"><span class="dash">—</span></td><td class="c featured"><span class="chk">✓</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>API &amp; webhooks</td><td class="c"><span class="dash">—</span></td><td class="c featured"><span class="chk">✓</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>White-label no seu domínio</td><td class="c"><span class="dash">—</span></td><td class="c featured"><span class="chk">✓</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>Monitoramento &amp; reverificação</td><td class="c"><span class="dash">—</span></td><td class="c featured"><span class="chk">✓</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>Análise &amp; enquadramento de operação com IA</td><td class="c"><span class="dash">—</span></td><td class="c featured"><span class="dash">—</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>Suporte</td><td class="val">E-mail até 24h</td><td class="val featured">Prioritário</td><td class="val">Dedicado</td></tr>
  <tr><td>SLA contratual</td><td class="c"><span class="dash">—</span></td><td class="c featured"><span class="dash">—</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>Gestão de conta dedicada</td><td class="c"><span class="dash">—</span></td><td class="c featured"><span class="dash">—</span></td><td class="c"><span class="chk">✓</span></td></tr>
  <tr><td>Preço</td><td class="val">Créditos por Run</td><td class="val featured">Por volume</td><td class="val">Sob medida</td></tr>
  <tr><td></td><td class="c"><a class="btn btn-ghost" href="/#demo">Falar com o time</a></td><td class="c featured"><a class="btn btn-primary" href="/#demo">Falar com o time</a></td><td class="c"><a class="btn btn-ghost" href="/#demo">Falar com o time</a></td></tr>
</tbody>
</table></div>
<p style="font-family:var(--font-mono);font-size:12px;color:var(--text-tertiary);margin-top:14px">Cobrança por créditos de verificação; o custo de cada Run varia com as fontes consultadas. Sem cobrança por assento.</p>
</div></section>
<section style="padding:8px 0 56px"><div class="wrap-narrow"><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Como funciona</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0"><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Créditos por verificação</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Você adquire créditos e os consome por Run. O custo de cada Run depende das fontes que aquela verificação exige — uma KYC simples consome menos que uma KYB com cadeia societária completa.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Plataforma inclusa</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Convite white-label, captura com OCR, Dossiê de Risco, decisão registrada e API fazem parte da plataforma. Você não paga separado por funcionalidade.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Sem surpresa no consumo</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Cada Run mostra os créditos consumidos e as fontes consultadas. O gasto é rastreável por cliente verificado.</p></div></div><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Para o seu volume</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">O plano é dimensionado pelo volume de verificações e pelo mix de fontes que a sua operação precisa. Fale com o time para um orçamento alinhado ao seu caso — câmbio, PSAV, banco ou fintech.</p></div></section><section style="padding:0 0 88px"><div class="wrap"><div class="band reveal"><span class="eyebrow on-dark" style="justify-content:center">kycert</span><h2 class="serif">Receba um orçamento para o seu volume.</h2><div class="cta" style="margin-top:8px"><a href="/#demo" class="btn btn-on-dark btn-lg">Falar com o time</a></div></div></div></section>
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: EXTRA_STYLE }} />
      <Nav active="precos" />

      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
