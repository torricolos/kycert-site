import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Verificação de pessoa jurídica e beneficiário final (KYB/UBO)',
  description:
    'KYB com cadastro PJ automatizado, árvore societária até o beneficiário final e screening dos sócios — a cadeia inteira registrada como evidência.',
  alternates: { canonical: '/produto/kyb' },
  openGraph: {
    title: 'Verificação de pessoa jurídica e beneficiário final (KYB/UBO) | kycert',
    description:
      'KYB com cadastro PJ automatizado, árvore societária até o beneficiário final e screening dos sócios — a cadeia inteira registrada como evidência.',
    url: '/produto/kyb',
  },
  twitter: {
    title: 'Verificação de pessoa jurídica e beneficiário final (KYB/UBO) | kycert',
    description:
      'KYB com cadastro PJ automatizado, árvore societária até o beneficiário final e screening dos sócios — a cadeia inteira registrada como evidência.',
  },
};

const JSONLD = `[{"@context":"https://schema.org","@type":"SoftwareApplication","name":"kycert — Verificação PJ · KYB","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"KYB com cadastro PJ automatizado, árvore societária até o beneficiário final e screening dos sócios — a cadeia inteira registrada como evidência.","offers":{"@type":"Offer","priceCurrency":"BRL"}},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"https://kycert.com.br/"},{"@type":"ListItem","position":2,"name":"Produtos"},{"@type":"ListItem","position":3,"name":"Verificação PJ · KYB"}]}]`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Produtos</span><span class="sep">/</span><span style="color:var(--text-secondary)">Verificação PJ · KYB</span></div></nav>
<section style="padding:44px 0 16px"><div class="wrap-narrow">
<div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">Verificação de pessoa jurídica</div>
<h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.06;letter-spacing:-.02em">Da empresa ao beneficiário final, com a cadeia inteira registrada.</h1>
<p style="font-size:19px;color:var(--text-secondary);line-height:1.55;margin:22px 0 28px;max-width:60ch">Cadastro PJ sem digitação manual, estrutura societária mapeada até o UBO e screening de cada sócio. A kycert monta a cadeia de controle e guarda o status de cada nó, para você comprovar que conhece quem está por trás da empresa.</p>
<div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div>
</div></section>
<section style="padding:8px 0 8px"><div class="wrap">
  <div class="split reveal">
    <div class="split-copy">
      <span class="eyebrow">Estrutura societária</span>
      <h3 style="margin-top:14px">A cadeia inteira, <span class="serif">até quem controla.</span></h3>
      <p>A kycert percorre o quadro societário, segue a participação por holdings intermediárias e verifica cada nó contra as listas restritivas — até chegar à pessoa física que comanda o grupo.</p>
      <div class="flist">
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Cadeia desenhada automaticamente</b><p>Da empresa aos sócios PF e PJ, com participação e função.</p></div></div>
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Beneficiário final identificado</b><p>A participação é seguida até o UBO, mesmo em estruturas com holding.</p></div></div>
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Status por nó</b><p>Sanções, PEP e mandados marcados em cada participante da estrutura.</p></div></div>
      </div>
    </div>
    <div class="split-media">
      <div class="ui-card">
        <div class="ui-head"><span class="t"><span class="live-dot"></span> Estrutura societária</span><span class="badge" style="color:var(--warning);background:var(--warning-bg);border-color:var(--warning-bd)">2 apontamentos</span></div>
        <div class="ui-row"><span class="lbl"><b>Brick Lane Hospitalidade LTDA</b><br><small style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">empresa analisada · CNPJ 41.882.300/0001-55</small></span><span class="st">Nada consta</span></div>
        <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>Heitor A. Brandão</b> · sócio 50%</span><span class="st warn">Sanção</span></div>
        <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>RV Participações Ltda</b> · sócia 50%</span><span class="st">Nada consta</span></div>
        <div class="ui-row"><span class="lbl" style="padding-left:32px">↳ <b>Diego M. Sosa</b> · beneficiário final</span><span class="st">Nada consta</span></div>
        <div class="ui-foot"><span>Beneficiário final identificado</span><span class="mono">cadeia · 3 níveis</span></div>
      </div>
    </div>
  </div>
</div></section>
<section style="padding:8px 0 56px"><div class="wrap-narrow"><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">O que a verificação PJ resolve</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">Mapear a estrutura societária na mão é onde o KYB trava: cadeias longas, holdings intermediárias, sócios que também são empresas. Um nó esquecido é uma falha de controle que aparece na auditoria. A kycert percorre a cadeia automaticamente, identifica o beneficiário final e roda screening em cada participante — tudo registrado em um dossiê PJ.</p><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Capacidades</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0"><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Cadastro PJ automatizado</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Os dados cadastrais da empresa são puxados de fontes oficiais e organizados sem digitação, reduzindo o tempo de abertura de cliente PJ.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Árvore societária até o UBO</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">A estrutura de controle é desenhada da empresa aos sócios até o beneficiário final, com cada nó visível e rastreável.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Status por nó</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Cada participante da cadeia recebe seu próprio status de verificação. Você vê de relance onde está limpo e onde há apontamento.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Screening dos sócios</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Sanções, PEP e demais checagens aplicadas a cada pessoa da estrutura, da empresa ao beneficiário final.</p></div></div><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Onde se aplica</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">O KYB é crítico para bancos e fintechs que abrem contas PJ e para corretoras que precisam comprovar o controle societário dos clientes regulados.</p><a href="/solucoes/bancos" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Bancos &amp; fintechs →</a><a href="/solucoes/cambio" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Corretoras de câmbio →</a><a href="/blog/beneficiario-final-ubo-kyb" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Entenda a obrigação de UBO →</a><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Perguntas frequentes</h2><div style="display:grid;grid-template-columns:1fr;gap:14px;margin:24px 0"><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">A kycert chega até o beneficiário final mesmo em cadeias longas?</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Sim. A árvore percorre holdings e sócios intermediários até identificar a pessoa física que controla a estrutura.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">E quando o sócio é outra empresa?</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">A cadeia continua sendo desenhada até chegar à pessoa natural que é o beneficiário final.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">O screening cobre todos os sócios?</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Cada participante da estrutura passa pelas mesmas checagens de Sanções e PEP, com status individual no dossiê.</p></div></div><div class="ui-card" style="margin:30px 0"><div class="ui-head"><span class="t"><span class="live-dot"></span> Estrutura societária</span><span class="badge">até o UBO</span></div><div class="ui-row"><span class="lbl"><b>Empresa cliente LTDA</b><br><small style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">pessoa jurídica analisada</small></span><span class="st">Nada consta</span></div><div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>Sócia-administradora</b> · 60%</span><span class="st">Nada consta</span></div><div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>Holding controladora</b> · 40%</span><span class="st">Nada consta</span></div><div class="ui-row"><span class="lbl" style="padding-left:32px">↳ <b>Beneficiário final</b> · UBO</span><span class="st">Nada consta</span></div><div class="ui-foot"><span>Cada entidade verificada na cadeia</span><span class="mono">3 níveis</span></div></div></div></section>
<section style="padding:0 0 88px"><div class="wrap"><div class="band reveal"><span class="eyebrow on-dark" style="justify-content:center">kycert</span><h2 class="serif">Mapeie a cadeia societária dos seus clientes PJ.</h2><div class="cta" style="margin-top:8px"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost-dark btn-lg">Ver dossiê de exemplo</a></div></div></div></section>
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
