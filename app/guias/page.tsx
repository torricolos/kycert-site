import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Guias e materiais de compliance',
  description:
    'Checklist de prontidão para fiscalização e modelo de dossiê anonimizado para times de compliance de instituições reguladas.',
  alternates: { canonical: '/guias' },
  openGraph: {
    title: 'Guias e materiais de compliance | kycert',
    description:
      'Checklist de prontidão para fiscalização e modelo de dossiê anonimizado para times de compliance de instituições reguladas.',
    url: '/guias',
  },
  twitter: {
    title: 'Guias e materiais de compliance | kycert',
    description:
      'Checklist de prontidão para fiscalização e modelo de dossiê anonimizado para times de compliance de instituições reguladas.',
  },
};

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Guias e materiais"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span style="color:var(--text-secondary)">Guias e materiais</span></div></nav>

<section style="padding:48px 0 64px"><div class="wrap">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start">
    <div>
      <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">Guias e materiais</div>
      <h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.4vw,48px);line-height:1.08;letter-spacing:-.02em">Materiais práticos para o seu compliance.</h1>
      <p style="font-size:18px;color:var(--text-secondary);line-height:1.55;margin:20px 0 32px;max-width:48ch">Conteúdo direto, construído para quem responde ao regulador. Baixe mediante e-mail corporativo.</p>
      <div style="display:flex;flex-direction:column;gap:14px">
        <div style="display:flex;gap:14px;align-items:flex-start;padding:20px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)">
          <span style="width:42px;height:42px;border-radius:var(--r);background:var(--signal-bg);border:1px solid var(--signal-bd);color:var(--signal);display:flex;align-items:center;justify-content:center;flex:none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg></span>
          <div><div style="font-size:16px;font-weight:600">Checklist de prontidão para fiscalização</div><div style="font-size:14px;color:var(--text-secondary);margin-top:4px;line-height:1.5">O que o BACEN espera ver na trilha de um cliente, em uma lista prática. <span style="font-family:var(--font-mono);font-size:12px;color:var(--text-tertiary)">PDF</span></div></div>
        </div>
        <div style="display:flex;gap:14px;align-items:flex-start;padding:20px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)">
          <span style="width:42px;height:42px;border-radius:var(--r);background:var(--signal-bg);border:1px solid var(--signal-bd);color:var(--signal);display:flex;align-items:center;justify-content:center;flex:none"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></span>
          <div><div style="font-size:16px;font-weight:600">Modelo de dossiê (anonimizado)</div><div style="font-size:14px;color:var(--text-secondary);margin-top:4px;line-height:1.5">Um dossiê de risco completo e fictício, para ver a estrutura. <span style="font-family:var(--font-mono);font-size:12px;color:var(--text-tertiary)">PDF</span></div></div>
        </div>
      </div>
    </div>
    <div style="padding:32px;border:1px solid var(--border-default);border-radius:var(--r-xl);background:var(--surface-app);box-shadow:var(--sh-sm)">
      <h2 style="font-size:20px;font-weight:600;letter-spacing:-.02em;margin-bottom:6px">Receber os materiais</h2>
      <p style="font-size:14px;color:var(--text-secondary);margin-bottom:22px">Enviamos os PDFs para o seu e-mail corporativo.</p>
      <form onsubmit="event.preventDefault();this.querySelector('.gok').style.display='flex';this.querySelector('.gfields').style.display='none';" style="display:flex;flex-direction:column;gap:14px">
        <div class="gfields" style="display:flex;flex-direction:column;gap:14px">
          <label style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--text-secondary)">Nome<input required style="height:46px;padding:0 14px;border-radius:var(--r);border:1px solid var(--border-strong);background:var(--surface-canvas);font-family:inherit;font-size:15px"></label>
          <label style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--text-secondary)">E-mail corporativo<input type="email" required style="height:46px;padding:0 14px;border-radius:var(--r);border:1px solid var(--border-strong);background:var(--surface-canvas);font-family:inherit;font-size:15px"></label>
          <label style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--text-secondary)">Instituição<input required style="height:46px;padding:0 14px;border-radius:var(--r);border:1px solid var(--border-strong);background:var(--surface-canvas);font-family:inherit;font-size:15px"></label>
          <label style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:var(--text-secondary)">Segmento<select required style="height:46px;padding:0 14px;border-radius:var(--r);border:1px solid var(--border-strong);background:var(--surface-canvas);font-family:inherit;font-size:15px"><option value="">Selecione</option><option>Câmbio</option><option>PSAV / cripto</option><option>Banco</option><option>Fintech</option><option>Outros</option></select></label>
          <label style="display:flex;gap:10px;align-items:flex-start;font-size:13px;color:var(--text-secondary);line-height:1.5;margin-top:4px"><input type="checkbox" required style="margin-top:3px;flex:none"> Autorizo a kycert a tratar meus dados para envio dos materiais e contato comercial, conforme a Política de Privacidade e a LGPD.</label>
          <button type="submit" class="btn btn-primary btn-lg" style="margin-top:6px;justify-content:center">Receber materiais</button>
        </div>
        <div class="gok" style="display:none;align-items:center;gap:12px;padding:16px;border-radius:var(--r);background:var(--signal-bg);border:1px solid var(--signal-bd);color:var(--signal);font-size:14px"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12l5 5L20 7"/></svg> Pronto. Enviamos os materiais para o seu e-mail.</div>
      </form>
    </div>
  </div>
</div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="recursos" />

      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
