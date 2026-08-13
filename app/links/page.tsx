import type { Metadata } from 'next';
import { LinkCard } from '@/components/LinkCard';

export const metadata: Metadata = {
  title: { absolute: 'Links | kycert' },
  description:
    'Todos os links da kycert em um só lugar: fale com um especialista, conheça a plataforma e acompanhe o conteúdo sobre as Resoluções BCB 519/520/521.',
  robots: { index: true, follow: true },
  alternates: { canonical: '/links' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/links',
    siteName: 'kycert',
    title: 'kycert · Links',
    description: 'Fale com um especialista, conheça a plataforma e acompanhe o conteúdo regulatório da kycert.',
    images: [{ url: 'https://kycert.com.br/opengraph-image', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kycert · Links',
    description: 'Fale com um especialista, conheça a plataforma e acompanhe o conteúdo regulatório da kycert.',
    images: ['https://kycert.com.br/opengraph-image'],
  },
};

const WA_TEXT = encodeURIComponent('Olá, vim pelo link da bio da kycert no Instagram.').replace(/%20/g, '+');
const WA_HREF = `https://api.whatsapp.com/send/?phone=5511977656630&text=${WA_TEXT}&type=phone_number&app_absent=0`;
const UTM = 'utm_source=linkinbio&utm_medium=social';

const PAGE_STYLE = `
  .links-page{min-height:100vh;display:flex;flex-direction:column;align-items:center;padding:56px 20px 40px;background:var(--surface-app)}
  .links-word{font-weight:700;font-size:28px;letter-spacing:-.03em}
  .links-word .sig{color:var(--signal)}
  .links-sub{margin-top:10px;font-size:15px;color:var(--text-secondary);text-align:center;max-width:34ch;line-height:1.5}
  .links-list{width:100%;max-width:420px;margin-top:36px;display:flex;flex-direction:column;gap:12px}
  .link-card{display:flex;align-items:center;gap:14px;width:100%;min-height:56px;padding:12px 16px;border-radius:var(--r-lg);border:1px solid var(--border-default);background:var(--surface-canvas);box-shadow:var(--sh-sm);transition:border-color .15s var(--ease),box-shadow .15s var(--ease),transform .15s var(--ease)}
  .link-card:hover{border-color:var(--border-strong);box-shadow:var(--sh-md);transform:translateY(-1px)}
  .link-card:active{transform:translateY(0)}
  .link-card-ic{flex:none;width:38px;height:38px;border-radius:var(--r);background:var(--surface-app);border:1px solid var(--border-default);display:flex;align-items:center;justify-content:center}
  .link-card-body{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
  .link-card-label{font-size:15px;font-weight:600;color:var(--text-primary);letter-spacing:-.005em}
  .link-card-desc{font-size:12.5px;color:var(--text-tertiary)}
  .link-card-arr{flex:none;color:var(--text-tertiary)}
  .link-card.feat{background:var(--brand);border-color:var(--brand);box-shadow:var(--sh-md)}
  .link-card.feat:hover{background:var(--brand-hover);border-color:var(--brand-hover)}
  .link-card.feat .link-card-ic{background:rgba(255,255,255,.1);border-color:rgba(255,255,255,.16)}
  .link-card.feat .link-card-label{color:var(--on-brand)}
  .link-card.feat .link-card-desc{color:rgba(255,255,255,.55)}
  .link-card.feat .link-card-arr{color:rgba(255,255,255,.5)}
  .links-foot{margin-top:44px;text-align:center}
  .links-foot a{font-size:13px;color:var(--text-tertiary)}
  .links-foot a:hover{color:var(--text-secondary)}
  .links-legal{margin-top:8px;font-size:11.5px;color:var(--text-disabled);font-family:var(--font-mono)}
`;

const CLICK_TRACK_SCRIPT = `
(function(){
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[data-link-id]');
    if (!a) return;
    var payload = { link_id: a.getAttribute('data-link-id'), link_label: a.getAttribute('data-link-label'), link_external: a.getAttribute('data-link-external') === '1' };
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'link_click', payload);
    }
    if (typeof window.clarity === 'function') {
      window.clarity('event', 'links_page_click_' + payload.link_id);
    }
  });
})();
`;

const WHATSAPP_ICON = (
  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
);

const GLOBE_ICON = (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a13 13 0 0 1 3.4 9 13 13 0 0 1-3.4 9 13 13 0 0 1-3.4-9A13 13 0 0 1 12 3z" />
  </>
);

const BLOG_ICON = (
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h8M10 9H8" />
  </>
);

const LINKEDIN_ICON = (
  <path
    fill="currentColor"
    stroke="none"
    d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4z"
  />
);

const INSTAGRAM_ICON = (
  <>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" />
  </>
);

function LinkIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_STYLE }} />
      <div className="links-page">
        <div className="links-word">kycert<span className="sig">.</span></div>
        <p className="links-sub">Onboarding, KYC, KYB e KYT com trilha auditável para qualquer empresa.</p>

        <div className="links-list">
          <LinkCard
            linkId="plataforma"
            href={`/?${UTM}`}
            label="Conhecer a plataforma"
            description="kycert.com.br"
            icon={<LinkIcon>{GLOBE_ICON}</LinkIcon>}
            iconColor="var(--module-cadastro)"
          />
          <LinkCard
            linkId="whatsapp"
            href={WA_HREF}
            label="Falar com especialista"
            description="Resposta no WhatsApp"
            icon={<LinkIcon>{WHATSAPP_ICON}</LinkIcon>}
            iconColor="var(--signal-on-dark)"
            external
            featured
          />
          <LinkCard
            linkId="blog"
            href={`/blog?${UTM}`}
            label="Blog"
            description="Conteúdo sobre BCB 519/520/521"
            icon={<LinkIcon>{BLOG_ICON}</LinkIcon>}
            iconColor="var(--module-marketing)"
          />
          <LinkCard
            linkId="linkedin"
            href={`https://www.linkedin.com/company/kycert/?${UTM}`}
            label="LinkedIn"
            description="Acompanhe a kycert"
            icon={<LinkIcon>{LINKEDIN_ICON}</LinkIcon>}
            iconColor="var(--info)"
            external
          />
          <LinkCard
            linkId="instagram"
            href={`https://www.instagram.com/kycert.oficial/?${UTM}`}
            label="Instagram"
            description="Siga a kycert"
            icon={<LinkIcon>{INSTAGRAM_ICON}</LinkIcon>}
            iconColor="var(--module-ai)"
            external
          />
        </div>

        <div className="links-foot">
          <a href="/">← Ver o site completo</a>
          <div className="links-legal">© 2026 kycert. Todos os direitos reservados.</div>
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: CLICK_TRACK_SCRIPT }} />
    </>
  );
}
