import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'OCR de documentos e cadastro sem digitação | kycert',
  description:
    'Captura de documentos brasileiros com OCR, extração estruturada e validação automática, anexados ao dossiê do cliente como evidência.',
  alternates: { canonical: '/produto/ocr' },
  openGraph: {
    title: 'OCR de documentos e cadastro sem digitação | kycert',
    description:
      'Captura de documentos brasileiros com OCR, extração estruturada e validação automática, anexados ao dossiê do cliente como evidência.',
    url: '/produto/ocr',
  },
  twitter: {
    title: 'OCR de documentos e cadastro sem digitação | kycert',
    description:
      'Captura de documentos brasileiros com OCR, extração estruturada e validação automática, anexados ao dossiê do cliente como evidência.',
  },
};

const JSONLD = `[{"@context":"https://schema.org","@type":"SoftwareApplication","name":"kycert — Cadastro & documentos · OCR","applicationCategory":"BusinessApplication","operatingSystem":"Web","description":"Captura de documentos brasileiros com OCR, extração estruturada e validação automática, anexados ao dossiê do cliente como evidência.","offers":{"@type":"Offer","priceCurrency":"BRL"}},{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"https://kycert.com.br/"},{"@type":"ListItem","position":2,"name":"Produtos"},{"@type":"ListItem","position":3,"name":"Cadastro & documentos · OCR"}]}]`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Produtos</span><span class="sep">/</span><span style="color:var(--text-secondary)">Cadastro & documentos · OCR</span></div></nav>
<section style="padding:44px 0 16px"><div class="wrap-narrow">
<div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">Cadastro e documentos</div>
<h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.06;letter-spacing:-.02em">Capture o documento. Extraia o dado. Sem digitação.</h1>
<p style="font-size:19px;color:var(--text-secondary);line-height:1.55;margin:22px 0 28px;max-width:60ch">A kycert lê documentos brasileiros, extrai os campos estruturados e valida o que foi capturado, eliminando a digitação manual no cadastro. O documento original e os dados extraídos ficam anexados ao dossiê.</p>
<div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div>
</div></section>
<section style="padding:8px 0 8px"><div class="wrap">
  <div class="split reveal">
    <div class="split-media">
      <div class="phone">
        <div class="ph-top"></div>
        <div class="ph-body">
          <div class="ph-brand">sua corretora<span class="sig">.</span></div>
          <div class="ph-step">Etapa 2 de 4 · Documento</div>
          <div class="ph-doc">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" stroke-width="1.6"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg>
            <span>Enquadre a CNH</span>
          </div>
          <div class="ph-prog"><i class="on"></i><i class="on"></i><i></i><i></i></div>
          <div class="ph-btn">Continuar</div>
          <div class="ph-list">
            <div class="ph-li"><span class="c"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span> Nome e CPF lidos por OCR</div>
            <div class="ph-li"><span class="c"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span> Validade conferida</div>
          </div>
        </div>
      </div>
    </div>
    <div class="split-copy">
      <span class="eyebrow">Captura no celular</span>
      <h3 style="margin-top:14px">O cliente fotografa. <span class="serif">A kycert preenche.</span></h3>
      <p>O documento é capturado pela câmera, os campos são lidos por OCR e o cadastro chega preenchido — o cliente confirma em vez de transcrever. A imagem original e os dados extraídos ficam anexados ao dossiê.</p>
      <div class="flist">
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Leitura automática</b><p>RG, CNH e comprovantes, com extração dos campos relevantes.</p></div></div>
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Validação na hora</b><p>Consistência conferida antes de seguir para a verificação.</p></div></div>
        <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Anexado ao dossiê</b><p>Imagem e dados ficam registrados junto da decisão.</p></div></div>
      </div>
    </div>
  </div>
</div></section>
<section style="padding:8px 0 56px"><div class="wrap-narrow"><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">O que o OCR resolve</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">Cadastro digitado à mão é lento e erra. A kycert captura o documento, lê os campos e preenche o cadastro com o que o próprio documento informa — o cliente confirma em vez de transcrever. O dado extraído entra direto na verificação e fica registrado junto da imagem original.</p><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Capacidades</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0"><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">OCR de documentos brasileiros</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Leitura de RG, CNH e demais documentos, com extração dos campos relevantes para o cadastro.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Extração estruturada</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Os dados saem organizados e prontos para alimentar as checagens, sem etapa manual de digitação.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Validação automática</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Conferência da consistência dos dados capturados antes de seguir para a verificação.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Anexo ao dossiê</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Documento original e dados extraídos ficam vinculados ao dossiê do cliente como parte da evidência.</p></div></div><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Onde se aplica</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">O OCR acelera o onboarding em qualquer operação de alto volume — câmbio, PSAV e fintechs — reduzindo o tempo até a primeira verificação.</p><a href="/solucoes/cambio" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">Corretoras de câmbio →</a><a href="/solucoes/psav" style="display:inline-flex;align-items:center;gap:7px;margin:4px 8px 4px 0;padding:9px 15px;border:1px solid var(--border-default);border-radius:var(--r-full);font-size:14px;font-weight:500;color:var(--text-primary)">PSAV / cripto →</a></div></section>
<section style="padding:0 0 88px"><div class="wrap"><div class="band reveal"><span class="eyebrow on-dark" style="justify-content:center">kycert</span><h2 class="serif">Tire a digitação do seu cadastro.</h2><div class="cta" style="margin-top:8px"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost-dark btn-lg">Ver dossiê de exemplo</a></div></div></div></section>
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
