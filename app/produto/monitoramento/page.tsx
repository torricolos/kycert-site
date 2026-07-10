import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Reverificação periódica e monitoramento contínuo | kycert',
  description:
    'Reverificação agendada, re-screening de Sanções e PEP e alertas de mudança no perfil de risco do cliente, sem retrabalho manual.',
  alternates: { canonical: '/produto/monitoramento' },
  openGraph: {
    title: 'Reverificação periódica e monitoramento contínuo | kycert',
    description:
      'Reverificação agendada, re-screening de Sanções e PEP e alertas de mudança no perfil de risco do cliente, sem retrabalho manual.',
    url: '/produto/monitoramento',
  },
  twitter: {
    title: 'Reverificação periódica e monitoramento contínuo | kycert',
    description:
      'Reverificação agendada, re-screening de Sanções e PEP e alertas de mudança no perfil de risco do cliente, sem retrabalho manual.',
  },
};

const JSONLD = `[{"@context":"https://schema.org","@type":"SoftwareApplication","name":"kycert — Monitoramento","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Reverificação agendada, re-screening de Sanções e PEP e alertas de mudança no perfil de risco do cliente, sem retrabalho manual.","offers":{"@type":"Offer","priceCurrency":"BRL"}},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"https://kycert.com.br/"},{"@type":"ListItem","position":2,"name":"Produtos"},{"@type":"ListItem","position":3,"name":"Monitoramento"}]}]`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Produtos</span><span class="sep">/</span><span style="color:var(--text-secondary)">Monitoramento</span></div></nav>
<section style="padding:44px 0 16px"><div class="wrap-narrow">
<div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">Reverificação e monitoramento</div>
<h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.06;letter-spacing:-.02em">Reverificação periódica e renovação sem retrabalho.</h1>
<p style="font-size:19px;color:var(--text-secondary);line-height:1.55;margin:22px 0 28px;max-width:60ch">A obrigação não termina na aprovação. A kycert agenda a reverificação dos clientes, roda novo screening de Sanções e PEP e avisa quando algo muda — para que a sua base permaneça em conformidade ao longo do tempo.</p>
<div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div>
</div></section>
<section style="padding:8px 0 8px"><div class="wrap">
  <div class="split reveal">
    <div class="split-copy">
      <span class="eyebrow">Ciclo de renovação</span>
      <h3 style="margin-top:14px">A base inteira no prazo, <span class="serif">sem lembrete manual.</span></h3>
      <p>A kycert controla o vencimento de cada cadastro, refaz o screening no prazo e avisa quando o perfil de risco muda — cada reverificação registrada no dossiê, com data e resultado.</p>
      <div class="flist">
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Periodicidade por perfil</b><p>Cada tipo de cliente com o seu prazo de reverificação.</p></div></div>
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Re-screening automático</b><p>Sanções e PEP consultadas de novo a cada ciclo.</p></div></div>
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Alerta de mudança</b><p>A equipe é avisada antes que vire um apontamento.</p></div></div>
      </div>
    </div>
    <div class="split-media">
      <div class="ui-card">
        <div class="ui-head"><span class="t"><span class="live-dot"></span> Renovações agendadas</span><span class="badge">próximos 30 dias</span></div>
        <div class="ui-row"><span class="time" style="font-family:var(--font-mono);font-size:11px;color:var(--text-tertiary);width:74px;flex:none">vence 4d</span><span class="lbl"><b>Nordex Câmbio Ltda</b><br><small style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">reverificação PJ</small></span><span class="st warn">A vencer</span></div>
        <div class="ui-row"><span class="time" style="font-family:var(--font-mono);font-size:11px;color:var(--text-tertiary);width:74px;flex:none">hoje</span><span class="lbl"><b>Helena Castro Almeida</b><br><small style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">re-screening Sanções · PEP</small></span><span class="st">Em curso</span></div>
        <div class="ui-row"><span class="time" style="font-family:var(--font-mono);font-size:11px;color:var(--text-tertiary);width:74px;flex:none">21 dias</span><span class="lbl"><b>Atlas Pagamentos SA</b><br><small style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">reverificação periódica</small></span><span class="st">Agendada</span></div>
        <div class="ui-foot"><span>disparada no prazo, registrada no dossiê</span><span class="mono">ciclo · automático</span></div>
      </div>
    </div>
  </div>
</div></section>
<section style="padding:8px 0 56px"><div class="wrap-narrow"><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">O que o monitoramento resolve</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">Um cliente aprovado hoje pode entrar numa lista de sanções amanhã. A reverificação manual é esquecida ou feita tarde demais. A kycert mantém o ciclo: define a periodicidade, refaz as checagens no prazo e registra cada reverificação no dossiê, atualizando o enquadramento de risco quando o cenário muda.</p><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Capacidades</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0"><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Reverificação agendada</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Periodicidade configurável por perfil de cliente, com a reverificação disparada no prazo sem depender de lembrete manual.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Re-screening de Sanções e PEP</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Novas consultas às listas de sanções e exposição política a cada ciclo, capturando o que mudou desde o último onboarding.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Alertas de mudança</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Aviso quando o perfil de risco de um cliente muda, para que a equipe atue antes que vire um apontamento de auditoria.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Histórico registrado</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Cada reverificação fica no dossiê, mantendo a trilha contínua de quando e como o cliente foi reavaliado.</p></div></div><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Onde se aplica</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">A reverificação é exigência recorrente em câmbio e nas demais instituições reguladas, onde a renovação cadastral precisa ser comprovável.</p><a href="/solucoes/cambio" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Corretoras de câmbio →</a><a href="/solucoes/psav" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">PSAV / cripto →</a></div></section>
<section style="padding:0 0 88px"><div class="wrap"><div class="band reveal"><span class="eyebrow on-dark" style="justify-content:center">kycert</span><h2 class="serif">Mantenha a base em conformidade ao longo do tempo.</h2><div class="cta" style="margin-top:8px"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost-dark btn-lg">Ver dossiê de exemplo</a></div></div></div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="produtos" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
