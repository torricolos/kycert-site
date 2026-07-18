import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'API de KYC/KYB e webhooks',
  description:
    'Integre a trilha de verificação ao seu fluxo com a API da kycert e receba atualizações de status por webhook em tempo real.',
  alternates: { canonical: '/produto/api' },
  openGraph: {
    title: 'API de KYC/KYB e webhooks | kycert',
    description:
      'Integre a trilha de verificação ao seu fluxo com a API da kycert e receba atualizações de status por webhook em tempo real.',
    url: '/produto/api',
  },
  twitter: {
    title: 'API de KYC/KYB e webhooks | kycert',
    description:
      'Integre a trilha de verificação ao seu fluxo com a API da kycert e receba atualizações de status por webhook em tempo real.',
  },
};

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Produtos</span><span class="sep">/</span><span style="color:var(--text-secondary)">API & webhooks</span></div></nav>
<section style="padding:44px 0 16px"><div class="wrap-narrow">
<div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">Integração</div>
<h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.06;letter-spacing:-.02em">Integre a trilha ao seu fluxo.</h1>
<p style="font-size:19px;color:var(--text-secondary);line-height:1.55;margin:22px 0 28px;max-width:60ch">Dispare verificações, consulte dossiês e receba o status de cada Run direto no seu sistema. A API da kycert leva a trilha auditável para dentro do seu fluxo de onboarding, sem tela intermediária.</p>
<div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="https://docs.kycert.com.br" target="_blank" rel="noopener" class="btn btn-ghost btn-lg">Ver documentação</a></div>
</div></section>
<section style="padding:20px 0 8px"><div class="wrap">
  <div class="split" style="align-items:start">
    <div class="split-copy">
      <span class="eyebrow">Quick start</span>
      <h3 style="margin-top:12px">Da chave de teste ao primeiro resultado.</h3>
      <p>Gere uma chave <code style="font-family:var(--font-mono);font-size:13px">sk_test_</code> no dashboard, escolha um template e dispare um run com o documento do cliente. O resultado chega no seu webhook.</p>
      <div class="flist">
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Autenticação por API key</b><p>Header <code style="font-family:var(--font-mono);font-size:12.5px">x-api-key</code>, com escopos por chave e ambiente sandbox.</p></div></div>
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Templates</b><p>O template define quais fontes e regras a verificação usa.</p></div></div>
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Resultado por webhook</b><p>O evento chega com a decisão e o risk band, assinado por HMAC.</p></div></div>
      </div>
      <div style="margin-top:24px"><a class="btn btn-primary" href="https://docs.kycert.com.br" target="_blank" rel="noopener">Ver documentação completa →</a></div>
    </div>
    <div class="split-media">
      <div class="code-card">
        <div class="code-bar"><i></i><i></i><i></i><span class="fn">Criar um run</span></div>
<pre class="code"><span class="k">curl</span> -X POST https://admin.kycert.com.br/api/v1/<span class="p">bureau/runs</span> \\
  -H <span class="s">"x-api-key: sk_test_SUA_CHAVE"</span> \\
  -H <span class="s">"Content-Type: application/json"</span> \\
  -d <span class="s">'{ "template_id": "SEU_TEMPLATE_ID",
        "subject": { "type": "pf", "doc": "00000000191" },
        "webhook_url": "https://seu-app.com/wh" }'</span>

<span class="c">// 202 Accepted</span>
{ <span class="s">"run_id"</span>: <span class="s">"550e8400-…440000"</span>,
  <span class="s">"status"</span>: <span class="s">"queued"</span>,
  <span class="s">"livemode"</span>: <span class="p">false</span> }</pre>
      </div>
    </div>
  </div>
</div></section>

<section style="padding:8px 0 56px"><div class="wrap-narrow"><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">O que a API resolve</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">Quando o onboarding acontece dentro do seu produto, a verificação precisa acontecer ali também. A API da kycert permite iniciar uma Run, acompanhar o resultado e puxar o dossiê programaticamente, enquanto os webhooks avisam o seu sistema a cada mudança de status.</p><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Capacidades</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0"><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Verificações via API</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Inicie KYC e KYB pelo seu backend e receba o dossiê estruturado de volta.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Webhooks de status</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Seja notificado em tempo real quando uma Run muda de estado, sem polling.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Livemode e créditos</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Ambiente de teste e produção separados, com consumo de créditos rastreável por Run.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Dossiê programático</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Acesse a evidência e a decisão registrada via API para anexar ao seu próprio fluxo de auditoria.</p></div></div><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Exemplo</h2><div class="code-card" style="margin:26px 0"><div class="code-bar"><i></i><i></i><i></i><span class="fn">exemplo</span></div><pre class="code">curl -X POST https://api.kycert.com.br/v1/runs \\
  -H "x-api-key: sk_test_SUA_CHAVE" \\
  -H "Content-Type: application/json" \\
  -d '{"template_id":"...","subject":{"type":"pf","doc":"00000000191"}}'
</pre></div><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Onde se aplica</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">A API é o caminho para bancos e fintechs que embarcam a verificação em fluxos próprios por produto.</p><a href="/solucoes/bancos" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Bancos &amp; fintechs →</a></div></section>
<section style="padding:0 0 88px"><div class="wrap"><div class="band reveal"><span class="eyebrow on-dark" style="justify-content:center">kycert</span><h2 class="serif">Leve a trilha para dentro do seu fluxo.</h2><div class="cta" style="margin-top:8px"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="https://docs.kycert.com.br" target="_blank" rel="noopener" class="btn btn-ghost-dark btn-lg">Ver documentação</a></div></div></div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="produtos" />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
