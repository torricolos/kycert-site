import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: { absolute: 'kycert · Onboarding e trilha auditável para instituições reguladas' },
  description:
    'Plataforma de onboarding, KYC/KYB e trilha auditável para instituições reguladas no Brasil. Comprove cada decisão de risco numa fiscalização do BACEN.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'kycert',
    locale: 'pt_BR',
    title: 'kycert · Onboarding e trilha auditável para instituições reguladas',
    description:
      'Plataforma de onboarding, KYC/KYB e trilha auditável para instituições reguladas no Brasil. Comprove cada decisão de risco numa fiscalização do BACEN.',
    url: '/',
    images: [
      {
        url: 'https://kycert.com.br/opengraph-image',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kycert · Onboarding e trilha auditável para instituições reguladas',
    description:
      'Plataforma de onboarding, KYC/KYB e trilha auditável para instituições reguladas no Brasil. Comprove cada decisão de risco numa fiscalização do BACEN.',
    images: ['https://kycert.com.br/opengraph-image'],
  },
};

const HOME_STYLE = `
  :root{
    --ink:#0E1116;--ink-2:#15191f;--paper:#FFFFFF;--paper-2:#FAFAFB;--green:#1F8A5B;--green-l:#27A870;--green-d:#166644;
    --ink-muted:#3A3D45;--ink-subtle:#6B6E78;--paper-dim:#E7E7EB;--paper-muted:#9A9DA8;
    --bd:rgba(14,17,22,.13);--bd-2:rgba(14,17,22,.19);--bd-dark:rgba(255,255,255,.14);
    --sans:'Inter Tight',system-ui,sans-serif;--serif:'Instrument Serif',Georgia,serif;--mono:'JetBrains Mono',ui-monospace,monospace;
    --sh-sm:0 1px 2px rgba(14,17,22,.05);
    --sh-md:0 8px 20px -8px rgba(14,17,22,.10),0 2px 6px rgba(14,17,22,.04);
    --sh-lg:0 24px 50px -18px rgba(14,17,22,.16),0 6px 14px rgba(14,17,22,.05);
    --sh-xl:0 40px 80px -24px rgba(14,17,22,.22);
  }
  *{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:var(--sans);background:var(--paper);color:var(--ink);line-height:1.45;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
  svg{display:block}
  a{color:inherit;text-decoration:none}
  ::selection{background:var(--ink);color:#fff}
  .serif{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--green);letter-spacing:-.01em}
  .mono{font-family:var(--mono)}
  .wrap{max-width:1180px;margin:0 auto;padding:0 40px}

  /* ---- review bar ---- */
  .rev{position:sticky;top:0;z-index:300;background:var(--ink);color:#fff;display:flex;gap:8px;align-items:center;padding:9px 18px;font-size:13px;border-bottom:1px solid var(--bd-dark)}
  .rev .tag{color:var(--paper-muted);font-size:11px;letter-spacing:.08em;text-transform:uppercase;margin-right:4px}
  .rev button{font-family:var(--sans);font-size:13px;cursor:pointer;background:var(--ink-2);color:#fff;border:1px solid #2c3138;padding:6px 14px;border-radius:9999px}
  .rev button.on{background:#fff;color:var(--ink);border-color:#fff;font-weight:600}
  .rev .sp{margin-left:auto;color:var(--paper-muted);font-family:var(--mono);font-size:11px}

  /* ---- eyebrow ---- */
  .eyebrow{font-family:var(--mono);font-size:12px;letter-spacing:.13em;text-transform:uppercase;color:var(--green);display:inline-flex;align-items:center;gap:10px}
  .eyebrow::before{content:"";width:22px;height:1px;background:var(--green)}
  .eyebrow.dark{color:var(--green-l)}.eyebrow.dark::before{background:var(--green-l)}

  /* ---- buttons ---- */
  .btn{font-family:var(--sans);font-weight:600;font-size:15px;border:none;cursor:pointer;padding:13px 24px;border-radius:9999px;display:inline-flex;align-items:center;gap:9px;transition:.16s}
  .btn svg{width:15px;height:15px}
  .btn-ink{background:var(--ink);color:#fff}.btn-ink:hover{background:var(--ink-2)}
  .btn-ghost{background:#fff;color:var(--ink);border:1px solid var(--bd-2)}.btn-ghost:hover{background:var(--paper-2)}
  .btn-white{background:#fff;color:var(--ink)}.btn-white:hover{background:#eceef0}
  .btn-dghost{background:transparent;color:#fff;border:1px solid var(--bd-dark)}.btn-dghost:hover{background:rgba(255,255,255,.06)}
  .pill-btn{font-size:14px;font-weight:600;padding:10px 18px;border-radius:9999px;cursor:pointer}

  /* ---- nav ---- */
  nav.site{position:sticky;top:0;z-index:200;background:rgba(255,255,255,.82);backdrop-filter:blur(14px) saturate(1.4);-webkit-backdrop-filter:blur(14px) saturate(1.4);border-bottom:1px solid transparent;transition:border-color .2s,box-shadow .2s}
  nav.site.scrolled{border-color:var(--bd);box-shadow:var(--sh-sm)}
  nav.site .inner{display:flex;align-items:center;justify-content:space-between;padding-top:16px;padding-bottom:16px;gap:24px}
  .brand{font-weight:800;font-size:21px;letter-spacing:-.03em;display:inline-flex;align-items:center}
  .brand .sig{color:var(--green)}
  .nav-cta{display:flex;align-items:center;gap:14px}
  .nav-cta a.login{font-size:15px;color:var(--ink-muted)}
  .nav-cta a.login:hover{color:var(--ink)}
  .menu-btn{display:none;background:none;border:none;cursor:pointer;color:var(--ink)}
  .nav-links{display:flex;gap:2px;align-items:center}
  .nav-item{position:relative}
  .nav-item>a,.nav-item>button{display:inline-flex;align-items:center;gap:6px;padding:9px 13px;border-radius:9px;font-size:15px;color:var(--ink-muted);background:none;border:none;cursor:pointer;font-family:inherit;font-weight:500;transition:.15s;white-space:nowrap}
  .nav-item>a:hover,.nav-item>button:hover,.nav-item:hover>button,.nav-item:hover>a{color:var(--ink);background:var(--paper-3,#F4F5F7)}
  .nav-item .caret{transition:transform .2s;opacity:.6}
  .nav-item:hover .caret{transform:rotate(180deg)}
  .megamenu{position:absolute;top:calc(100% + 8px);left:0;min-width:320px;background:#fff;border:1px solid var(--bd);border-radius:14px;box-shadow:var(--sh-xl);padding:8px;opacity:0;visibility:hidden;transform:translateY(-8px);transition:opacity .18s,transform .18s,visibility .18s;z-index:120}
  .megamenu::before{content:"";position:absolute;top:-8px;left:0;right:0;height:8px}
  .nav-item:hover .megamenu{opacity:1;visibility:visible;transform:none}
  .mega-link{display:flex;gap:13px;align-items:flex-start;padding:11px 12px;border-radius:9px;text-decoration:none}
  .mega-link:hover{background:#F4F5F7}
  .mega-link .mi{width:36px;height:36px;border-radius:9px;background:var(--paper-2);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;flex:none}
  .mega-link .mt{font-size:14px;font-weight:600;color:var(--ink);display:flex;align-items:center;gap:8px;line-height:1.2}
  .mega-link .md{font-size:12.5px;color:var(--ink-subtle);margin-top:3px;line-height:1.4}
  .mega-badge{font-size:9px;font-family:var(--mono);font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:var(--green);background:var(--signal-bg);border:1px solid var(--signal-bd);border-radius:9999px;padding:2px 7px}
  .btn-primary{background:var(--ink);color:#fff;border-radius:9px;padding:11px 18px;font-size:14.5px}
  .btn-primary:hover{background:var(--ink-2)}
  .btn-lg{padding:15px 28px;font-size:16px}
  .nav-drawer{display:none}
  @media(max-width:1040px){
    .nav-links,.nav-cta .login{display:none}
    .menu-btn{display:block}
    .nav-drawer.open{display:block;position:fixed;inset:60px 0 0;background:#fff;z-index:195;overflow-y:auto;padding:18px 40px 60px;border-top:1px solid var(--bd)}
    .nav-drawer details{border-bottom:1px solid var(--bd)}
    .nav-drawer summary{list-style:none;cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:16px 2px;font-size:17px;font-weight:700}
    .nav-drawer summary::-webkit-details-marker{display:none}
    .nav-drawer summary .c{color:var(--ink-subtle);font-size:22px;font-weight:300;transition:transform .2s}
    .nav-drawer details[open] summary .c{transform:rotate(45deg)}
    .nav-drawer .dl{display:block;padding:11px 2px;font-size:15px;color:var(--ink-muted)}
    .nav-drawer .dsingle{display:block;padding:16px 2px;font-size:17px;font-weight:700;border-bottom:1px solid var(--bd)}
    .nav-drawer .ddemo{margin-top:22px;width:100%;justify-content:center;display:flex}
  }

  /* ================= HERO A (light) ================= */
  .heroA{position:relative;overflow:hidden;padding:64px 0 56px}
  .heroA::before{content:"";position:absolute;inset:0;background:
    radial-gradient(54% 44% at 50% 4%, rgba(31,138,91,.06), transparent 72%),
    radial-gradient(36% 40% at 90% 76%, rgba(31,138,91,.045), transparent 72%)}
  .heroA .grain{position:absolute;inset:0;opacity:.4;background-image:radial-gradient(circle,rgba(14,17,22,.10) .6px,transparent .6px);background-size:30px 30px;-webkit-mask-image:radial-gradient(72% 56% at 50% 40%,#000,transparent);mask-image:radial-gradient(72% 56% at 50% 40%,#000,transparent)}
  .heroA .in{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center}
  .seal-top{display:inline-flex;gap:9px;align-items:center;white-space:nowrap;font-family:var(--mono);font-size:11.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--ink-subtle);background:rgba(255,255,255,.8);border:1px solid var(--paper-dim);padding:7px 15px;border-radius:9999px;box-shadow:var(--sh-sm);margin-bottom:30px}
  .seal-top .gd{width:7px;height:7px;border-radius:50%;background:var(--green);animation:pulse 2.4s infinite}
  @keyframes pulse{0%{box-shadow:0 0 0 0 rgba(31,138,91,.45)}70%{box-shadow:0 0 0 7px rgba(31,138,91,0)}100%{box-shadow:0 0 0 0 rgba(31,138,91,0)}}
  .heroA h1{font-size:88px;line-height:.98;letter-spacing:-.045em;font-weight:900;max-width:15ch}
  .rot{font-family:var(--serif);font-weight:400;font-style:italic;color:var(--green);letter-spacing:-.02em;display:inline-block;position:relative}
  .heroA h1 .rot::after{content:"";position:absolute;left:0;right:5px;bottom:.12em;height:2px;background:var(--green);opacity:.2;border-radius:2px}
  .heroA .lead{font-size:19px;line-height:1.5;color:var(--ink-muted);max-width:50ch;margin:28px 0 34px}
  .glass-field{display:flex;align-items:center;gap:14px;padding:9px 9px 9px 22px;border-radius:9999px;background:rgba(255,255,255,.62);border:1px solid rgba(14,17,22,.08);box-shadow:0 1px 0 rgba(255,255,255,.9) inset,var(--sh-lg);backdrop-filter:blur(14px) saturate(1.4);-webkit-backdrop-filter:blur(14px) saturate(1.4);width:520px;max-width:90vw}
  .glass-field .ic{color:var(--paper-muted);flex:none}
  .glass-field .ph{flex:1;text-align:left;font-family:var(--mono);font-size:15px;letter-spacing:-.01em}
  .glass-field .cur{display:inline-block;width:1.5px;height:16px;background:var(--green);vertical-align:-3px;margin-left:1px;animation:blink 1.1s steps(1) infinite}
  @keyframes blink{50%{opacity:0}}
  .glass-field .go{background:var(--ink);color:#fff;font-family:var(--sans);font-weight:600;font-size:14.5px;border:none;cursor:pointer;padding:13px 22px;border-radius:9999px;display:flex;gap:8px;align-items:center}
  .seals{display:flex;gap:22px;align-items:center;margin-top:36px;font-size:12.5px;color:var(--ink-subtle);font-family:var(--mono)}
  .seals .s{display:flex;align-items:center;gap:8px}.seals .s svg{color:var(--green);width:14px;height:14px}
  .seals .sep{width:1px;height:13px;background:var(--paper-dim)}

  /* product panel (shared) */
  .panel{border-radius:20px;overflow:hidden}
  .panel.glass{background:rgba(255,255,255,.05);border:1px solid var(--bd-dark);box-shadow:0 40px 80px -24px rgba(0,0,0,.6),0 1px 0 rgba(255,255,255,.08) inset;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);justify-self:end;width:560px;max-width:100%}
  .panel .ph{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.08)}
  .panel .ph .ttl{font-weight:600;font-size:14px;display:flex;align-items:center;gap:10px}
  .panel .ph .ttl .k{font-weight:800;font-size:15px}.panel .ph .ttl .k .d{color:var(--green-l)}
  .panel .ph .live{font-family:var(--mono);font-size:11px;color:var(--green-l);display:flex;align-items:center;gap:7px}
  .panel .ph .live .d{width:6px;height:6px;border-radius:50%;background:var(--green-l);animation:pulse 2.4s infinite}
  .filterbar{display:flex;gap:8px;padding:13px 20px;border-bottom:1px solid rgba(255,255,255,.07);align-items:center}
  .gpill{font-family:var(--mono);font-size:11.5px;padding:7px 13px;border-radius:9999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);color:#C7CAD1;display:flex;gap:7px}
  .gpill.on{background:rgba(39,168,112,.14);border-color:rgba(39,168,112,.4);color:#7FE3B5}
  .gpill .x{opacity:.5}
  .panel .row{display:grid;grid-template-columns:60px 1fr auto;gap:14px;align-items:center;padding:14px 20px;border-bottom:1px solid rgba(255,255,255,.055);font-size:13px}
  .panel .row:last-child{border-bottom:none}
  .panel .row .t{font-family:var(--mono);font-size:11px;color:var(--ink-subtle)}
  .panel .row .who b{font-weight:600;font-size:13.5px;display:block;color:#fff}
  .panel .row .who .id{font-family:var(--mono);font-size:11px;color:var(--paper-muted);margin-top:2px}
  .st{font-family:var(--mono);font-size:11px;font-weight:500;padding:4px 11px;border-radius:9999px;display:inline-flex;align-items:center;gap:7px;white-space:nowrap}
  .st::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor}
  .st.ok{color:#5FD39B;background:rgba(39,168,112,.12)}
  .st.rev2{color:#E6B45C;background:rgba(230,180,92,.12)}
  .st.blk{color:#E88A7D;background:rgba(232,138,125,.12)}
  .panel .pf{padding:13px 20px;display:flex;justify-content:space-between;align-items:center;font-family:var(--mono);font-size:11px;color:var(--ink-subtle)}
  .panel .pf .audit{color:var(--green-l);display:flex;gap:6px;align-items:center}

  /* ================= sections ================= */
  section{position:relative}
  .sec{padding:74px 0}
  .sec-head{max-width:60ch}
  .sec-head h2{font-size:46px;line-height:1.04;letter-spacing:-.035em;font-weight:900;margin:18px 0 0}
  .sec-head .sub{font-size:18px;color:var(--ink-muted);margin-top:18px;max-width:54ch}

  /* produto — dark band */
  .band{background:var(--ink);color:#fff;overflow:hidden;position:relative}
  .band::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 80% at 100% 0%,rgba(31,138,91,.16),transparent 55%)}
  .band .in{position:relative;display:grid;grid-template-columns:.9fr 1.1fr;gap:56px;align-items:center;padding:96px 0}
  .band h2{font-size:44px;line-height:1.05;letter-spacing:-.035em;font-weight:900}
  .band h2 .serif{color:var(--green-l)}
  .band .sub{font-size:18px;color:#A9ADB6;margin-top:20px;max-width:42ch}
  .band ul{list-style:none;margin-top:28px;display:flex;flex-direction:column;gap:14px}
  .band ul li{display:flex;gap:12px;align-items:flex-start;font-size:15px;color:#D5D8DD}
  .band ul li svg{color:var(--green-l);flex:none;margin-top:2px;width:18px;height:18px}

  /* API */
  .code{background:var(--ink);border:1px solid var(--bd-dark);border-radius:16px;overflow:hidden;box-shadow:var(--sh-lg);font-family:var(--mono);font-size:13.5px;line-height:1.7}
  .code .bar{display:flex;align-items:center;gap:7px;padding:13px 16px;border-bottom:1px solid var(--bd-dark)}
  .code .bar .d{width:11px;height:11px;border-radius:50%}.code .bar .tab{margin-left:14px;font-size:12px;color:var(--paper-muted)}
  .code pre{padding:22px 20px;color:#C7CAD1;overflow:auto}
  .code .gr{color:var(--green-l)}.code .mu{color:#6B6E78}.code .wh{color:#fff}.code .am{color:#E6B45C}
  .apigrid{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}

  /* diferencial / cards */
  .cards{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;margin-top:52px}
  .card{background:#fff;border:1px solid var(--bd);border-radius:16px;padding:28px;box-shadow:var(--sh-sm)}
  .card .ic{width:38px;height:38px;border-radius:10px;border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;color:var(--ink);margin-bottom:18px}
  .card h3{font-size:19px;font-weight:800;letter-spacing:-.02em;margin-bottom:9px}
  .card p{font-size:14.5px;color:var(--ink-muted);line-height:1.55}

  /* normas */
  .norms{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:52px}
  .norm{background:#fff;border:1px solid var(--bd);border-radius:18px;padding:32px;box-shadow:var(--sh-sm)}
  .norm .tag{font-family:var(--mono);font-size:11px;letter-spacing:.06em;text-transform:uppercase;color:var(--green);display:flex;align-items:center;gap:8px}
  .norm h3{font-size:26px;font-weight:800;letter-spacing:-.025em;margin:14px 0 6px}
  .norm p{font-size:15px;color:var(--ink-muted);margin-bottom:20px}
  .norm .refs{display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--bd);padding-top:18px}
  .norm .ref{display:flex;gap:12px;align-items:flex-start;font-size:13.5px}
  .norm .ref .r{font-family:var(--mono);font-size:12px;color:var(--green-d);font-weight:600;background:rgba(31,138,91,.07);padding:2px 8px;border-radius:6px;white-space:nowrap;flex:none}
  .norm .ref span{color:var(--ink-muted)}

  /* CTA band */
  .cta{background:var(--ink);color:#fff;text-align:center;padding:82px 0;position:relative;overflow:hidden}
  .cta::before{content:"";position:absolute;inset:0;background:radial-gradient(50% 120% at 50% 0%,rgba(31,138,91,.18),transparent 60%)}
  .cta .in{position:relative}
  .cta h2{font-size:60px;line-height:1.02;letter-spacing:-.04em;font-weight:900;max-width:18ch;margin:0 auto}
  .cta h2 .serif{color:var(--green-l)}
  .cta p{font-size:18px;color:#A9ADB6;margin:24px auto 36px;max-width:46ch}
  .cta .ctarow{display:flex;gap:12px;justify-content:center}

  /* footer (5 colunas, unificado com as internas) */
  footer{padding:72px 0 48px;border-top:1px solid var(--bd);font-size:14px;color:var(--ink-muted);background:var(--paper-2)}
  footer .foot-grid{display:grid;grid-template-columns:1.4fr repeat(5,1fr);gap:30px}
  footer .brand{font-size:20px;font-weight:800}
  footer .tagline{max-width:32ch;margin-top:12px;line-height:1.5;color:var(--ink-subtle)}
  footer .social{display:flex;gap:10px;margin-top:18px}
  footer .social a{width:36px;height:36px;border:1px solid var(--bd-2);border-radius:9px;display:flex;align-items:center;justify-content:center;color:var(--ink-muted);transition:.15s}
  footer .social a:hover{color:var(--ink);border-color:var(--ink-subtle)}
  footer .col h5{color:var(--ink);font-size:12px;text-transform:uppercase;letter-spacing:.08em;margin-bottom:14px;font-family:var(--mono)}
  footer a.fl{color:var(--ink-muted);display:block;margin:9px 0;transition:color .15s}
  footer a.fl:hover{color:var(--ink)}
  footer .foot-legal{margin-top:36px;font-size:12px;color:var(--ink-subtle);font-family:var(--mono);letter-spacing:.02em;line-height:1.7;max-width:760px}
  footer .bottom{border-top:1px solid var(--bd);margin-top:24px;padding-top:26px;display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;color:var(--ink-subtle);font-size:13px}
  footer .bottom .mono{font-family:var(--mono);display:inline-flex;align-items:center;gap:7px}
  @media(max-width:900px){footer .foot-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:560px){footer .foot-grid{grid-template-columns:1fr}}

  /* o que validamos */
  .validate{padding:60px 0;border-top:1px solid var(--bd);border-bottom:1px solid var(--bd);background:var(--paper-2)}
  .validate .vhead{display:flex;justify-content:space-between;align-items:flex-end;gap:40px;flex-wrap:wrap}
  .validate h2{font-size:40px;line-height:1.06;letter-spacing:-.035em;font-weight:900;max-width:17ch;margin-top:16px}
  .validate h2 .vrot{font-family:var(--serif);font-style:italic;font-weight:400;color:var(--green);display:inline-block}
  .validate .vlead{font-size:16px;color:var(--ink-muted);max-width:32ch;line-height:1.5}
  .vgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:46px}
  .vitem{background:#fff;border:1px solid var(--bd);border-radius:12px;padding:18px;display:flex;flex-direction:column;gap:11px}
  .vitem .vic{width:32px;height:32px;border-radius:8px;background:rgba(31,138,91,.08);color:var(--green);display:flex;align-items:center;justify-content:center}
  .vitem .vic svg{width:17px;height:17px}
  .vitem b{font-size:14.5px;font-weight:700;letter-spacing:-.01em}
  .vitem em{font-family:var(--mono);font-size:11.5px;color:var(--ink-subtle);font-style:normal}
  .validate .vhead2{text-align:center;display:flex;flex-direction:column;align-items:center}
  .validate .vhead2 h2{font-size:38px;line-height:1.08;letter-spacing:-.035em;font-weight:900;margin-top:16px;max-width:20ch}
  .validate .vhead2 .vlead{margin-top:16px;max-width:52ch;text-align:center}
  .marquee{margin-top:44px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent);mask-image:linear-gradient(90deg,transparent,#000 7%,#000 93%,transparent)}
  .mtrack{display:flex;gap:14px;width:max-content;animation:marq 42s linear infinite}
  .marquee:hover .mtrack{animation-play-state:paused}
  @keyframes marq{to{transform:translateX(-50%)}}
  .mchip{display:flex;align-items:center;gap:12px;background:#fff;border:1px solid var(--bd);border-radius:9999px;padding:12px 20px;white-space:nowrap;box-shadow:var(--sh-sm)}
  .mchip .ic{width:28px;height:28px;border-radius:8px;background:rgba(31,138,91,.08);color:var(--green);display:flex;align-items:center;justify-content:center;flex:none}
  .mchip .ic svg{width:15px;height:15px}
  .mchip b{font-size:15px;font-weight:600;letter-spacing:-.01em}
  .mchip em{font-family:var(--mono);font-size:11.5px;color:var(--ink-subtle);font-style:normal}

  /* bento expand */
  .bexp{display:flex;gap:12px;margin-top:52px;height:264px}
  .bpanel{position:relative;flex:1;background:#fff;border:1px solid var(--bd);border-radius:16px;overflow:hidden;cursor:pointer;transition:flex .45s cubic-bezier(.4,0,.2,1);box-shadow:var(--sh-sm);display:flex;flex-direction:column;justify-content:flex-end;padding:24px;min-width:0}
  .bexp:hover .bpanel{flex:.62}
  .bexp .bpanel:hover{flex:2.6}
  .bpanel .bic{position:absolute;top:22px;left:22px;width:42px;height:42px;border-radius:11px;background:rgba(31,138,91,.08);color:var(--green);display:flex;align-items:center;justify-content:center}
  .bpanel h3{font-size:18px;font-weight:800;letter-spacing:-.02em;line-height:1.18;text-wrap:balance}
  .bpanel .bdesc{max-height:0;opacity:0;overflow:hidden;transition:max-height .45s ease,opacity .35s ease .05s,margin .45s ease}
  .bpanel:hover .bdesc{max-height:170px;opacity:1;margin-top:10px}
  .bpanel .bdesc p{font-size:14px;color:var(--ink-muted);line-height:1.5;max-width:34ch}
  .bpanel .bsnip{font-family:var(--mono);font-size:11.5px;color:var(--ink-subtle);background:var(--paper-2);border:1px solid var(--bd);border-radius:8px;padding:8px 11px;margin-top:14px;white-space:nowrap;width:max-content;max-width:100%}
  .bpanel .bsnip b{color:var(--green-d)}

  /* darkflow */
  .darkflow{background:var(--ink);color:#fff;position:relative;overflow:hidden;padding:76px 0}
  .darkflow::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 80% at 100% 0%,rgba(31,138,91,.14),transparent 55%)}
  .darkflow .grain{position:absolute;inset:0;opacity:.35;background-image:radial-gradient(circle,rgba(255,255,255,.09) .6px,transparent .6px);background-size:34px 34px}
  .darkflow .in2{position:relative}
  .darkflow h2{font-size:44px;line-height:1.05;letter-spacing:-.035em;font-weight:900;max-width:20ch}
  .darkflow h2 .serif{color:var(--green-l)}
  .darkflow .sub{font-size:18px;color:#A9ADB6;margin-top:18px;max-width:60ch}
  .tline{position:relative;margin-top:56px}
  .tline .ln{position:absolute;top:18px;left:19px;right:19px;height:1px;background:rgba(39,168,112,.4)}
  .tnodes{display:grid;grid-template-columns:repeat(5,1fr);gap:18px;position:relative}
  .tnode .pin{width:38px;height:38px;border-radius:50%;border:1px solid rgba(39,168,112,.5);background:var(--ink);color:var(--green-l);font-family:var(--mono);font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;position:relative;z-index:2}
  .tnode h4{font-size:18px;font-weight:800;letter-spacing:-.02em;margin:18px 0 6px;color:#fff}
  .tnode p{font-size:13.5px;color:#9A9DA8;line-height:1.45}
  .tnode .ev{margin-top:12px;font-family:var(--mono);font-size:11px;color:var(--green-l);display:inline-flex;align-items:center;gap:7px}
  .tnode .ev::before{content:"";width:6px;height:6px;border-radius:50%;background:var(--green-l)}
  .dproof{display:grid;grid-template-columns:1fr 1.1fr;gap:48px;align-items:center;margin-top:78px;padding-top:58px;border-top:1px solid rgba(255,255,255,.08)}
  .dproof h3{font-size:28px;font-weight:800;letter-spacing:-.03em}
  .dproof h3 .serif{color:var(--green-l)}
  .dproof .sub{font-size:16px;color:#A9ADB6;margin-top:14px;max-width:38ch}
  .dproof ul{list-style:none;margin-top:22px;display:flex;flex-direction:column;gap:12px}
  .dproof ul li{display:flex;gap:11px;align-items:flex-start;font-size:14.5px;color:#D5D8DD}
  .dproof ul li svg{color:var(--green-l);flex:none;margin-top:2px;width:17px;height:17px}

  /* segs */
  .segs{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:52px}
  .seg{background:#fff;border:1px solid var(--bd);border-radius:18px;padding:30px;box-shadow:var(--sh-sm);display:flex;flex-direction:column}
  .seg .tag{font-family:var(--mono);font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--green);display:flex;align-items:center;gap:8px}
  .seg .tag .dm{width:7px;height:7px;border-radius:50%;background:var(--green);display:inline-block}
  .seg h3{font-size:22px;font-weight:800;letter-spacing:-.025em;margin:14px 0 8px}
  .seg p{font-size:14.5px;color:var(--ink-muted);line-height:1.5;flex:1}
  .seg .refs{display:flex;flex-direction:column;gap:9px;border-top:1px solid var(--bd);margin-top:20px;padding-top:18px}
  .seg .ref{display:flex;gap:10px;font-size:13px;align-items:flex-start}
  .seg .ref .r{font-family:var(--mono);font-size:11px;color:var(--green-d);font-weight:600;background:rgba(31,138,91,.07);padding:2px 8px;border-radius:6px;white-space:nowrap;flex:none}
  .seg .ref span{color:var(--ink-muted)}

  /* faq */
  .faq{margin-top:46px;border-top:1px solid var(--bd)}
  .faq details{border-bottom:1px solid var(--bd)}
  .faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:24px 4px;font-size:19px;font-weight:700;letter-spacing:-.02em}
  .faq summary::-webkit-details-marker{display:none}
  .faq summary .pl{color:var(--green);font-size:24px;font-weight:300;transition:transform .25s;flex:none}
  .faq details[open] summary .pl{transform:rotate(45deg)}
  .faq details p{font-size:15px;color:var(--ink-muted);line-height:1.6;max-width:74ch;padding:0 4px 26px}

  /* ===================== PORTADO DO SITE (seções extras) ===================== */
  :root{
    --surface-app:var(--paper-2);--surface-canvas:var(--paper);--surface-subtle:#F4F5F7;--surface-sunken:#F0F2F4;
    --text-primary:var(--ink);--text-secondary:var(--ink-muted);--text-tertiary:var(--ink-subtle);
    --border-default:var(--bd);--border-strong:var(--bd-2);--border-on-dark:var(--bd-dark);
    --brand:var(--ink);--brand-hover:var(--ink-2);--on-brand:#fff;
    --signal:var(--green);--signal-bg:rgba(31,138,91,.08);--signal-bd:rgba(31,138,91,.25);--signal-on-dark:var(--green-l);
    --warning:#C2772E;--warning-bg:#FBF2E6;--warning-bd:#EEDBBE;--info:#2A5F7F;--info-bg:#EAF1F5;
    --r-sm:6px;--r:9px;--r-lg:14px;--r-xl:20px;--r-full:999px;
    --font-sans:var(--sans);--font-serif:var(--serif);--font-mono:var(--mono);
    --module-cadastro:#2A5F7F;--module-compliance:#1F8A5B;--module-marketing:#D97757;--module-ai:#3D4047;
    --ease:cubic-bezier(.22,.61,.36,1);--ease-out:cubic-bezier(.16,1,.3,1);
  }
  /* fontes um pouco menores */
  .heroA h1{font-size:66px}
  .heroA .lead{font-size:17px;margin:24px 0 30px}
  .sec-head h2{font-size:38px}
  .sec-head .sub{font-size:16px}
  .darkflow h2{font-size:34px}
  .cta h2{font-size:46px}
  .seals{flex-wrap:wrap;justify-content:center;gap:13px 20px;max-width:780px}
  .eyebrow.on-dark{color:var(--green-l)}.eyebrow.on-dark::before{background:var(--green-l)}
  .sec-lead{font-size:16px;color:var(--text-secondary);max-width:60ch;margin-top:16px;line-height:1.55}
  .sec-dark .sec-lead{color:#aab1b9}
  .sec-top{display:flex;justify-content:space-between;align-items:flex-end;gap:28px;flex-wrap:wrap}
  @keyframes ping{0%{transform:scale(.7);opacity:.7}80%,100%{transform:scale(1.7);opacity:0}}

  /* ---- produtos (cards) ---- */
  .prods{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:48px}
  .prod{position:relative;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-app);padding:24px;min-height:300px;display:flex;flex-direction:column;color:inherit;transition:.2s var(--ease);overflow:hidden}
  .prod:hover{background:var(--surface-canvas);box-shadow:var(--sh-lg);transform:translateY(-4px);border-color:var(--border-strong)}
  .prod .picon{width:46px;height:46px;border-radius:var(--r-lg);background:var(--surface-canvas);border:1px solid var(--border-default);display:flex;align-items:center;justify-content:center;color:var(--text-primary);box-shadow:var(--sh-sm)}
  .prod h3{font-size:19px;font-weight:800;letter-spacing:-.02em;margin-top:20px;line-height:1.15}
  .prod .tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:13px}
  .prod .ptag{font-size:11px;font-family:var(--font-mono);color:var(--text-tertiary);border:1px solid var(--border-default);border-radius:var(--r-full);padding:3px 9px;background:var(--surface-canvas)}
  .prod p{font-size:13.5px;color:var(--text-secondary);line-height:1.55;margin-top:auto;padding-top:22px}
  .prod .parr{position:absolute;top:24px;right:24px;width:34px;height:34px;border-radius:50%;background:var(--surface-canvas);border:1px solid var(--border-default);display:flex;align-items:center;justify-content:center;color:var(--text-primary);opacity:0;transform:translateX(-6px);transition:.22s var(--ease)}
  .prod:hover .parr{opacity:1;transform:none}
  .prod.feat{background:var(--brand);border-color:var(--brand);color:#fff}
  .prod.feat:hover{background:var(--brand-hover)}
  .prod.feat .picon{background:rgba(255,255,255,.10);border-color:var(--border-on-dark);color:#fff;box-shadow:none}
  .prod.feat h3{color:#fff}.prod.feat p{color:#aab1b9}
  .prod.feat .ptag{color:#aab1b9;border-color:var(--border-on-dark);background:transparent}
  .prod.feat .parr{background:rgba(255,255,255,.12);border-color:var(--border-on-dark);color:#fff}
  .prod.dark{background:var(--ink);border-color:var(--ink);color:#fff}
  .prod.dark:hover{background:#15181a;border-color:var(--ink)}
  .prod.dark .picon{background:rgba(255,255,255,.08);border-color:var(--border-on-dark);color:#fff;box-shadow:none}
  .prod.dark h3{color:#fff}.prod.dark p{color:#99a1aa}
  .prod.dark .ptag{color:#aab1b9;border-color:var(--border-on-dark);background:transparent}
  .prod.dark .parr{background:rgba(255,255,255,.10);border-color:var(--border-on-dark);color:#fff}

  /* ---- flow animado (como funciona) ---- */
  .flow{margin-top:54px;position:relative;display:block;background:transparent;border:none;border-radius:0;overflow:visible;grid-template-columns:none}
  .flow-line{position:absolute;top:15px;left:16px;right:calc(20% - 26px);height:2px;background:rgba(39,168,112,.16)}
  .flow-line::after{content:"";position:absolute;left:0;top:0;bottom:0;width:var(--flow,0%);background:linear-gradient(90deg,rgba(39,168,112,.45),var(--green-l));transition:width .1s linear}
  .flow-line::before{content:"";position:absolute;top:50%;left:var(--flow,0%);width:10px;height:10px;border-radius:50%;background:var(--green-l);box-shadow:0 0 12px 3px rgba(39,168,112,.6);transform:translate(-50%,-50%);opacity:0;transition:opacity .3s}
  .flow.run .flow-line::before{opacity:1}
  .flow-nodes{position:relative;display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
  .fnode .pin{width:32px;height:32px;border-radius:50%;background:var(--ink);border:2px solid var(--border-on-dark);display:flex;align-items:center;justify-content:center;color:#5b636b;font-family:var(--font-mono);font-size:12px;margin-bottom:18px;transition:border-color .4s,box-shadow .4s,color .4s}
  .fnode.lit .pin{border-color:var(--green-l);color:var(--green-l);box-shadow:0 0 0 5px rgba(39,168,112,.12);animation:nodePop .5s var(--ease-out)}
  @keyframes nodePop{0%{transform:scale(1)}38%{transform:scale(1.2)}100%{transform:scale(1)}}
  .fnode h4{font-size:16px;font-weight:800;color:#fff;margin-bottom:6px}
  .fnode p{font-size:13px;color:#99a1aa;line-height:1.5;max-width:20ch;min-height:58px}
  .fnode .ev{margin-top:11px;font-family:var(--font-mono);font-size:10.5px;color:var(--green-l);display:inline-flex;align-items:center;gap:6px;opacity:.25;transition:opacity .4s}
  .fnode.lit .ev{opacity:1;animation:evIn .5s var(--ease-out)}
  @keyframes evIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}
  .fnode .ev .rdot{width:6px;height:6px;border-radius:50%;background:currentColor;display:inline-block}
  .fnode.lit .ev .rdot{animation:ping 1.8s var(--ease-out) infinite}

  /* ---- split (PJ / integração) ---- */
  .split{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;margin-top:8px}
  .split-copy h3{font-size:27px;font-weight:800;letter-spacing:-.025em;margin:14px 0 14px;line-height:1.12}
  .split-copy p{font-size:15.5px;color:var(--text-secondary);line-height:1.6;margin-bottom:16px}
  .flist{display:flex;flex-direction:column;gap:13px;margin-top:22px}
  .flist .fi{display:flex;gap:12px;align-items:flex-start}
  .flist .fi .c{width:24px;height:24px;border-radius:50%;background:var(--signal-bg);color:var(--signal);display:flex;align-items:center;justify-content:center;flex:none;margin-top:1px}
  .flist .fi b{font-weight:700;font-size:15px}
  .flist .fi p{font-size:14px;color:var(--text-secondary);margin:3px 0 0;line-height:1.5}
  /* ui-card (PJ media) */
  .ui-card{background:var(--surface-canvas);border:1px solid var(--border-default);border-radius:var(--r-lg);box-shadow:var(--sh-lg);overflow:hidden}
  .ui-head{display:flex;align-items:center;justify-content:space-between;padding:15px 18px;border-bottom:1px solid var(--border-default)}
  .ui-head .t{font-weight:700;font-size:14px;display:flex;align-items:center;gap:9px}
  .ui-head .badge{font-family:var(--font-mono);font-size:11px;font-weight:700;color:var(--warning);background:var(--warning-bg);border:1px solid var(--warning-bd);padding:3px 9px;border-radius:var(--r-full)}
  .live-dot{width:8px;height:8px;border-radius:50%;background:var(--signal);flex:none;position:relative}
  .live-dot::after{content:"";position:absolute;inset:-4px;border-radius:50%;border:1.5px solid var(--signal);opacity:0;animation:ping 2s var(--ease-out) infinite}
  .ui-card .ui-row{display:flex;align-items:center;gap:12px;padding:13px 18px;border-bottom:1px solid var(--border-default);font-size:13px}
  .ui-card .ui-row:last-child{border-bottom:none}
  .ui-card .ui-row .lbl{flex:1;color:var(--text-primary)}.ui-card .ui-row .lbl b{font-weight:600}
  .ui-card .ui-row .st{font-family:var(--font-sans);font-size:11px;font-weight:600;color:var(--signal);background:var(--signal-bg);padding:4px 11px;border-radius:var(--r-full);white-space:nowrap;display:inline-flex;align-items:center;gap:6px;border:none}
  .ui-card .ui-row .st::before{content:"";width:6px;height:6px;border-radius:50%;background:currentColor;flex:none}
  .ui-card .ui-row .st.warn{color:var(--warning);background:var(--warning-bg)}
  .ui-foot{padding:14px 18px;background:var(--surface-app);font-size:12px;color:var(--text-secondary);display:flex;justify-content:space-between;align-items:center}
  .ui-foot .mono{font-family:var(--font-mono);font-size:11px;color:var(--text-tertiary)}

  /* ---- sec-dark wrapper (como funciona já usa .darkflow; integração usa .sec-dark) ---- */
  .sec-dark{background:var(--ink);color:#fff;overflow:hidden;position:relative;padding:72px 0}
  .sec-dark::before{content:"";position:absolute;inset:0;background:radial-gradient(60% 80% at 100% 0%,rgba(31,138,91,.14),transparent 55%)}
  .sec-dark .wrap{position:relative;z-index:1}

  /* ---- code card (integração) ---- */
  .code-card{border-radius:var(--r-lg);overflow:hidden;border:1px solid var(--border-on-dark);background:#0A0D11;box-shadow:var(--sh-lg)}
  .code-bar{display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border-on-dark)}
  .code-bar i{width:11px;height:11px;border-radius:50%;background:#2a3038;display:block}
  .code-bar .fn{margin-left:8px;font-family:var(--font-mono);font-size:12px;color:#6b7480}
  .code-card .code{padding:22px;font-family:var(--font-mono);font-size:13px;line-height:1.75;color:#c9d1d9;overflow-x:auto;background:transparent;border:none;border-radius:0}
  .code-card .code .k{color:#79b8ff}.code-card .code .s{color:#9ecb8a}.code-card .code .c{color:#6b7480}.code-card .code .p{color:#d2a8ff}

  /* verticais: 4 colunas */
  .segs{grid-template-columns:repeat(4,1fr)}
  .segs .seg{padding:24px}
  .segs .seg h3{font-size:20px}
  a.seg{cursor:pointer;transition:.16s}
  a.seg:hover{box-shadow:var(--sh-md);transform:translateY(-2px);border-color:var(--bd-2)}

  /* ---- problema (pain cards, dark) ---- */
  .pcards{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:46px}
  .pcard{border:1px solid var(--bd);border-radius:var(--r-lg);padding:26px;background:#fff;box-shadow:var(--sh-sm);transition:.2s var(--ease)}
  .pcard:hover{box-shadow:var(--sh-md);transform:translateY(-3px);border-color:var(--bd-2)}
  .pcard .ic{width:40px;height:40px;border-radius:var(--r);border:1px solid var(--bd);display:flex;align-items:center;justify-content:center;color:var(--green);margin-bottom:16px}
  .pcard .q{font-size:20px;font-weight:800;letter-spacing:-.015em;color:var(--ink)}
  .pcard .a{font-size:14px;color:var(--ink-muted);margin-top:9px;line-height:1.55}

  /* ---- conformidade (reg cards) ---- */
  .fineprint{font-size:13px;color:var(--text-tertiary);margin-top:18px;max-width:80ch;line-height:1.6}
  .reg{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:44px}
  .regcard{border:1px solid var(--border-default);border-radius:var(--r-lg);padding:24px;background:var(--surface-canvas);display:flex;gap:16px;box-shadow:var(--sh-sm)}
  .regcard .ic{width:42px;height:42px;border-radius:var(--r);background:var(--signal-bg);border:1px solid var(--signal-bd);display:flex;align-items:center;justify-content:center;color:var(--signal);flex:none}
  .regcard h3{font-size:16px;font-weight:800;margin-bottom:7px;letter-spacing:-.01em}
  .regcard p{font-size:13.5px;color:var(--text-secondary);line-height:1.5}
  @media(max-width:760px){.pcards{grid-template-columns:1fr}.reg{grid-template-columns:1fr}}

  @media(max-width:980px){
    .prods{grid-template-columns:1fr 1fr}
    .segs{grid-template-columns:1fr 1fr}
    .split{grid-template-columns:1fr;gap:40px}
    .flow-line{display:none}
    .flow-nodes{grid-template-columns:1fr;gap:0}
    .fnode{display:flex;gap:16px;align-items:flex-start;padding:8px 0}.fnode .pin{margin-bottom:0}
    .screen{grid-template-columns:1fr}.screen-side{display:none}
    .heroA h1{font-size:48px}
  }
  @media(max-width:560px){.prods,.segs{grid-template-columns:1fr}.prod{min-height:0}}

  /* ---- showcase (browser + tabs) restaurado ---- */
  .showcase{margin-top:46px}
  .sc-tabs{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:22px}
  .sc-tab{font-family:inherit;font-size:14px;font-weight:600;padding:9px 16px;border-radius:var(--r-full);border:1px solid var(--border-default);background:var(--surface-canvas);color:var(--text-secondary);cursor:pointer;transition:.15s;display:inline-flex;align-items:center;gap:8px}
  .sc-tab svg{width:15px;height:15px;opacity:.7}
  .sc-tab:hover{border-color:var(--border-strong);color:var(--text-primary)}
  .sc-tab.active{background:var(--ink);color:#fff;border-color:var(--ink)}
  .sc-tab.active svg{opacity:1}
  .browser{border:1px solid var(--border-strong);border-radius:var(--r-lg);overflow:hidden;box-shadow:var(--sh-lg);background:var(--surface-canvas)}
  .browser-bar{display:flex;align-items:center;gap:8px;padding:12px 16px;background:var(--surface-subtle);border-bottom:1px solid var(--border-default)}
  .browser-bar .dots{display:flex;gap:6px}
  .browser-bar .dots i{width:11px;height:11px;border-radius:50%;background:var(--border-strong);display:block}
  .browser-bar .url{flex:1;background:var(--surface-canvas);border:1px solid var(--border-default);border-radius:var(--r-full);padding:5px 14px;font-family:var(--font-mono);font-size:12px;color:var(--text-tertiary);text-align:center;max-width:420px;margin:0 auto}
  .sc-panel{display:none;animation:fade .4s var(--ease)}
  .sc-panel.active{display:block}
  @keyframes fade{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
  .screen{display:grid;grid-template-columns:200px 1fr;min-height:430px;background:var(--surface-app)}
  .screen-side{background:var(--surface-canvas);border-right:1px solid var(--border-default);padding:18px 14px}
  .screen-side .s-brand{font-weight:800;font-size:15px;letter-spacing:-.02em;padding:0 8px 16px;border-bottom:1px solid var(--border-default);margin-bottom:14px}
  .screen-side .s-brand .sig{color:var(--signal)}
  .s-nav{display:flex;flex-direction:column;gap:2px}
  .s-nav a{font-size:13px;color:var(--text-secondary);padding:8px 10px;border-radius:var(--r-sm);display:flex;align-items:center;gap:9px}
  .s-nav a.on{background:var(--surface-subtle);color:var(--text-primary);font-weight:600}
  .s-nav a svg{opacity:.6}
  .screen-main{padding:24px 26px;overflow:hidden}
  .sm-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;gap:16px;flex-wrap:wrap}
  .sm-head .h{font-size:19px;font-weight:800;letter-spacing:-.02em}
  .sm-head .sub{font-size:12.5px;color:var(--text-tertiary);font-family:var(--font-mono);margin-top:3px}
  .score-ring{display:flex;align-items:center;gap:14px}
  .ring{width:54px;height:54px;flex:none}
  .kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px}
  .kpi{border:1px solid var(--border-default);border-radius:var(--r);background:var(--surface-canvas);padding:13px 15px}
  .kpi .k{font-family:var(--font-mono);font-size:10.5px;letter-spacing:.08em;text-transform:uppercase;color:var(--text-tertiary)}
  .kpi .v{font-size:21px;font-weight:800;letter-spacing:-.02em;margin-top:5px}
  .kpi .v.ok{color:var(--signal)}.kpi .v.warn{color:var(--warning)}
  .rows{border:1px solid var(--border-default);border-radius:var(--r);overflow:hidden;background:var(--surface-canvas)}
  .rows .r{display:flex;align-items:center;gap:12px;padding:12px 16px;border-bottom:1px solid var(--border-default);font-size:13px}
  .rows .r:last-child{border-bottom:none}
  .rows .r .av{width:28px;height:28px;border-radius:50%;background:var(--surface-sunken);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--text-secondary);flex:none}
  .rows .r .rl{flex:1}.rows .r .rl b{font-weight:600}.rows .r .rl small{color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px}
  .tagst{font-size:11px;font-weight:600;padding:3px 10px;border-radius:var(--r-full);white-space:nowrap}
  .tagst.ok{color:var(--signal);background:var(--signal-bg)}
  .tagst.warn{color:var(--warning);background:var(--warning-bg)}
  .tagst.err{color:#C0392B;background:#FBECEA}
  .phone{width:248px;border:9px solid #15191f;border-radius:36px;overflow:hidden;box-shadow:var(--sh-xl);background:#fff;margin:0 auto;position:relative}
  .phone::before{content:"";position:absolute;top:0;left:50%;transform:translateX(-50%);width:96px;height:20px;background:#15191f;border-radius:0 0 12px 12px;z-index:5}
  .ph-top{height:42px}
  .ph-body{padding:14px 16px 22px}
  .ph-brand{font-size:13px;font-weight:800;letter-spacing:-.02em;text-align:center;padding:6px 0 14px}
  .ph-brand .sig{color:var(--signal)}
  .ph-step{font-family:var(--font-mono);font-size:10px;color:var(--text-tertiary);text-transform:uppercase;letter-spacing:.1em;margin-bottom:8px}
  .ph-doc{border:1.5px dashed var(--border-strong);border-radius:var(--r);height:108px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;color:var(--text-tertiary);font-size:12px;background:var(--surface-app)}
  .ph-prog{display:flex;gap:5px;margin:14px 0}
  .ph-prog i{height:4px;border-radius:2px;flex:1;background:var(--surface-sunken)}
  .ph-prog i.on{background:var(--signal)}
  .ph-btn{background:var(--ink);color:#fff;text-align:center;font-size:13px;font-weight:600;padding:11px;border-radius:var(--r)}
  .ph-list{margin-top:14px;display:flex;flex-direction:column;gap:9px}
  .ph-li{display:flex;align-items:center;gap:9px;font-size:12px}
  .ph-li .c{width:18px;height:18px;border-radius:50%;background:var(--signal-bg);color:var(--signal);display:flex;align-items:center;justify-content:center;flex:none}
  @media(max-width:980px){.screen{grid-template-columns:1fr}.screen-side{display:none}}

  /* ---- casos de uso (uc cards) ---- */
  .uc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:46px}
  .uc{border:1px solid var(--bd);border-radius:14px;background:#fff;padding:26px;display:flex;flex-direction:column;gap:14px;box-shadow:var(--sh-sm);transition:.2s cubic-bezier(.22,.61,.36,1);color:inherit}
  .uc:hover{box-shadow:var(--sh-lg);transform:translateY(-3px);border-color:var(--bd-2)}
  .uc .tag{font-family:var(--mono);font-size:11px;font-weight:700;color:var(--green);background:var(--signal-bg);border:1px solid var(--signal-bd);padding:4px 11px;border-radius:9999px;align-self:flex-start}
  .uc .ic{width:46px;height:46px;border-radius:14px;background:var(--ink);display:flex;align-items:center;justify-content:center;color:#fff}
  .uc h3{font-size:19px;font-weight:800;letter-spacing:-.015em;line-height:1.2}
  .uc p{font-size:14px;color:var(--ink-muted);line-height:1.5}
  .uc .regs{display:flex;flex-direction:column;gap:8px;margin-top:2px}
  .uc .regs span{font-size:13px;color:var(--ink);display:flex;gap:9px;align-items:center}
  .uc .regs span .k{font-family:var(--mono);font-size:12px;color:var(--green);flex:none}
  .uc .go{margin-top:auto;font-size:14px;font-weight:600;color:var(--ink);display:inline-flex;align-items:center;gap:7px;padding-top:6px}
  .uc .go svg{width:15px;height:15px;transition:transform .2s}
  .uc:hover .go svg{transform:translateX(4px)}
  @media(max-width:980px){.uc-grid{grid-template-columns:1fr 1fr}}
  @media(max-width:560px){.uc-grid{grid-template-columns:1fr}}

  .h2-italic{font-size:42px}
  .ph-split{padding:34px 20px;display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center}
  .glass-field .ph{overflow:hidden;white-space:nowrap}
  .kpis{grid-template-columns:repeat(3,minmax(0,1fr))}
  .kpi{min-width:0}

  /* ---- responsivo: seções que colapsavam espremidas ---- */
  @media(max-width:980px){
    .dproof{grid-template-columns:1fr;gap:36px;margin-top:56px;padding-top:44px}
    .bexp{flex-direction:column;height:auto}
    .bexp .bpanel,.bexp:hover .bpanel,.bexp .bpanel:hover{flex:none}
    .bpanel{padding:22px;justify-content:flex-start}
    .bpanel .bic{position:static;margin-bottom:14px;width:38px;height:38px}
    .bpanel .bdesc,.bpanel:hover .bdesc{max-height:none;opacity:1;margin-top:10px}
    .bpanel .bsnip{white-space:normal;width:auto}
  }
  @media(max-width:760px){
    .ph-split{grid-template-columns:1fr;gap:26px;padding:26px 16px}
  }
  @media(max-width:560px){
    .wrap{padding:0 20px}
    .brand{font-size:20px}
    .nav-drawer.open{padding:18px 20px 60px}
    .heroA{padding:48px 0 44px}
    .heroA h1{font-size:40px}
    .heroA .lead{font-size:16px}
    .sec{padding:56px 0}
    .sec-head h2{font-size:30px}
    .h2-italic{font-size:31px}
    .darkflow{padding:58px 0}
    .darkflow h2{font-size:29px}
    .cta h2{font-size:34px}
    .faq summary{font-size:17px}
    .filterbar{flex-wrap:wrap}
    .panel .row{grid-template-columns:46px 1fr auto;padding:12px 14px}
    .screen-main{padding:18px 16px}
    .rows .r{flex-wrap:wrap}
    .sc-tab{font-size:13px;padding:8px 13px}
  }
  @media(max-width:400px){.kpi{padding:11px 10px}.kpi .v{font-size:17px}}

  .hidden{display:none!important}
  /* reveal ao rolar — com rede de segurança no JS (nunca trava em branco) */
  .rv{opacity:0;transform:translateY(18px);transition:opacity .6s cubic-bezier(.2,.6,.2,1),transform .6s cubic-bezier(.2,.6,.2,1)}
  .rv.in{opacity:1;transform:none}
  @media(prefers-reduced-motion:reduce){.rv{opacity:1;transform:none;transition:none}}
`;

const HOME_BODY = `
<section class="heroA" id="heroA">
  <div class="grain"></div>
  <div class="wrap in">
    <div class="seal-top"><span class="gd"></span>Camada de validação · conformidade com a LGPD</div>
    <h1><span class="rot" id="rotA">Comprove</span> cada cliente,<br>cada decisão.</h1>
    <p class="lead">Onboarding, verificação e trilha de prova em um só lugar — cada decisão registrada como evidência, pronta para a auditoria e para o que o regulador pedir.</p>
    <div class="glass-field">
      <span class="ic"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg></span>
      <span class="ph"><span id="typeA">12.345.678/0001-90</span><span class="cur"></span></span>
      <a class="go" href="/produto/dossie-de-risco" style="text-decoration:none">Ver Dossiê<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
    </div>
    <div class="seals">
      <div class="s"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Trilha auditável por padrão</div>
      <div class="s"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>PF + PJ · KYC + KYB + KYT</div>
      <div class="s"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Decisão registrada com autor e data</div>
      <div class="s"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>White-label · no seu domínio</div>
      <div class="s"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Renovação a cada 12 meses</div>
    </div>
  </div>
</section>

<!-- ===== PROBLEMA ===== -->
<section class="sec" style="background:var(--paper-2);border-top:1px solid var(--bd);border-bottom:1px solid var(--bd)">
  <div class="wrap">
    <span class="eyebrow">O problema</span>
    <h2 class="h2-italic" style="font-family:var(--serif);font-style:italic;font-weight:400;color:var(--ink);letter-spacing:-.02em;line-height:1.08;margin-top:14px;max-width:18ch">Aprovar o cliente é a parte fácil.</h2>
    <p class="sec-lead">O difícil chega meses depois: provar quem aprovou, quando e com qual evidência. Quando isso mora em e-mail, planilha e na memória de quem analisou, a operação trava para reconstruir o que já tinha sido decidido — e o risco regulatório some de vista.</p>
    <div class="pcards">
      <div class="pcard"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></div><div class="q">A evidência sumiu</div><div class="a">O documento que sustentava a aprovação ficou em outro sistema, fora da decisão que ele justificava.</div></div>
      <div class="pcard"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></div><div class="q">Falta o autor</div><div class="a">Sem quem aprovou, em que data e por qual critério, a decisão não se sustenta numa fiscalização.</div></div>
      <div class="pcard"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v4H4z"/><path d="M6 8v12h12V8"/><path d="M10 12h4"/></svg></div><div class="q">A trilha é reconstruída na mão</div><div class="a">Cada pedido do regulador vira um mutirão para juntar de novo o que já tinha sido feito.</div></div>
    </div>
  </div>
</section>

<!-- ===== DARKFLOW: timeline + produto ===== -->
<section class="darkflow">
  <div class="grain"></div>
  <div class="wrap in2">
    <span class="eyebrow dark">A diferença</span>
    <h2 style="margin-top:18px">O processo de onboarding <span class="serif">nasce registrado</span> como evidência.</h2>
    <p class="sub">Cada etapa fica gravada no instante em que acontece. Quando a fiscalização pede a trilha de um cliente, o histórico já está montado.</p>
    <div class="flow" id="comoFlow">
      <div class="flow-line"></div>
      <div class="flow-nodes">
        <div class="fnode"><div class="pin">01</div><div><h4>Convite</h4><p>link enviado com a sua marca</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
        <div class="fnode"><div class="pin">02</div><div><h4>Captura</h4><p>documento · leitura (OCR)</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
        <div class="fnode"><div class="pin">03</div><div><h4>Verificações</h4><p>bases cruzadas em bloco</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
        <div class="fnode"><div class="pin">04</div><div><h4>Risco</h4><p>enquadrado pela sua regra</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
        <div class="fnode"><div class="pin">05</div><div><h4>Decisão</h4><p>aprovação com autor e data</p><span class="ev"><span class="rdot"></span> Registrado</span></div></div>
      </div>
    </div>
    <div class="dproof">
      <div>
        <h3>A operação inteira <span class="serif">em uma tela</span>.</h3>
        <p class="sub">Histórico vivo de consultas, status de risco e a trilha por trás de cada decisão, prontos para auditoria.</p>
        <ul>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Risco classificado por cliente, em tempo real</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Cada linha abre a trilha completa que a originou</li>
          <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6 9 17l-5-5"/></svg>Filtros por status, período e responsável</li>
        </ul>
      </div>
      <div class="panel glass" style="width:100%;max-width:560px;justify-self:end">
        <div class="ph"><div class="ttl"><span class="k">k<span class="d">.</span></span>Histórico de consultas</div><div class="live"><span class="d"></span>tempo real</div></div>
        <div class="filterbar"><span class="gpill on">Todos <span class="x">·</span> 248</span><span class="gpill">Aprovados</span><span class="gpill">Em revisão</span><span class="gpill">Bloqueados</span></div>
        <div class="row"><span class="t">14:02</span><span class="who"><b>João Silva</b><span class="id">CPF ···.···.123-45</span></span><span class="st ok">Aprovado</span></div>
        <div class="row"><span class="t">13:58</span><span class="who"><b>Compliance Ltda</b><span class="id">CNPJ ··.···.···/0001-99</span></span><span class="st rev2">Em revisão</span></div>
        <div class="row"><span class="t">13:51</span><span class="who"><b>Maria Santos</b><span class="id">CPF ···.···.456-78</span></span><span class="st blk">PEP · bloqueio</span></div>
        <div class="row"><span class="t">13:47</span><span class="who"><b>Atlas Pagamentos Ltda</b><span class="id">CNPJ ··.···.···/0001-22</span></span><span class="st ok">Aprovado</span></div>
        <div class="pf"><span>atualizado há 8s</span><span class="audit"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>cada linha gera trilha de auditoria</span></div>
      </div>
    </div>
  </div>
</section>



<!-- ===== PRODUTOS ===== -->
<section class="sec wrap">
  <div class="sec-head" style="max-width:none">
    <span class="eyebrow">Produtos</span>
    <h2>Quatro frentes de verificação,<br>uma plataforma.</h2>
    <p class="sub">Do cadastro do cliente à decisão de risco — cada produto resolve uma etapa e alimenta a mesma trilha auditável.</p>
  </div>
  <div class="prods"><a class="prod" href="/produto/kyc">
      <span class="parr"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      <span class="picon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/></svg></span>
      <h3>Verificação de pessoa física</h3>
      <div class="tags"><span class="ptag">KYC</span><span class="ptag">Sanções</span><span class="ptag">PEP</span></div>
      <p>Identidade, situação na Receita, sanções, PEP e antecedentes — verificados no onboarding, em uma consulta.</p>
    </a><a class="prod" href="/produto/kyb">
      <span class="parr"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      <span class="picon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg></span>
      <h3>Verificação de pessoa jurídica</h3>
      <div class="tags"><span class="ptag">KYB</span><span class="ptag">Quadro societário</span><span class="ptag">UBO</span></div>
      <p>Situação cadastral do CNPJ, quadro societário e a cadeia de controle até o beneficiário final, com cada entidade verificada.</p>
    </a><a class="prod dark" href="/produto/dossie-de-risco">
      <span class="parr"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      <span class="picon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></span>
      <h3>Dossiê de Risco</h3>
      <div class="tags"><span class="ptag">Dossiê</span><span class="ptag">Score</span><span class="ptag">Decisão</span></div>
      <p>O dossiê estruturado de risco: score, apontamentos com evidência, estrutura societária e fontes consultadas em uma tela.</p>
    </a><a class="prod" href="/produto/ocr">
      <span class="parr"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      <span class="picon"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg></span>
      <h3>Cadastro &amp; análise de documentos</h3>
      <div class="tags"><span class="ptag">OCR</span><span class="ptag">White-label</span></div>
      <p>Convite com a sua marca, captura de documento pela câmera e leitura por OCR — o cadastro chega completo e padronizado.</p>
    </a></div>
  <div id="plataforma" style="margin-top:54px;padding-top:46px;border-top:1px solid var(--bd)">
    <span class="eyebrow">O onboarding, ponta a ponta</span>
    <h3 style="font-size:24px;font-weight:800;letter-spacing:-.02em;margin-top:12px;max-width:26ch">Tudo numa trilha só, do convite à renovação.</h3>
  </div>
  <div class="bexp">
    <div class="bpanel">
      <div class="bic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4z"/></svg></div>
      <h3>Convite white-label</h3>
      <div class="bdesc"><p>Link único com a sua marca e o seu domínio, enviado por e-mail ou WhatsApp.</p><div class="bsnip">canal: <b>e-mail · whatsapp</b> · marca própria</div></div>
    </div>
    <div class="bpanel">
      <div class="bic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="3.5"/><path d="M8 6l1.5-2h5L16 6"/></svg></div>
      <h3>Captura de documento (OCR)</h3>
      <div class="bdesc"><p>Documentos pela câmera, com leitura automática (OCR) dos dados.</p><div class="bsnip">CNH · RG · comprovante</div></div>
    </div>
    <div class="bpanel">
      <div class="bic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div>
      <h3>Verificações e risco</h3>
      <div class="bdesc"><p>Receita, sanções, PEP e antecedentes no mesmo passo. O risco é enquadrado pelas regras que você define.</p><div class="bsnip">só a exceção <b>vai ao time</b></div></div>
    </div>
    <div class="bpanel">
      <div class="bic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20s2-6 8-6 8 6 8 6"/><path d="M3 16l5-5 3 3 7-7"/></svg></div>
      <h3>Decisão registrada</h3>
      <div class="bdesc"><p>Aprovação com autor, data e justificativa, guardada como evidência da trilha.</p><div class="bsnip">aprovado por <b>ana.compliance</b> · 14:20</div></div>
    </div>
    <div class="bpanel">
      <div class="bic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 4v5h-5"/></svg></div>
      <h3>Renovação acompanhada</h3>
      <div class="bdesc"><p>A plataforma controla o vencimento do cadastro e dispara a reverificação.</p><div class="bsnip">próxima revisão · <b>periódica</b></div></div>
    </div>
  </div>
</section>

<!-- ===== POR DENTRO DO PRODUTO (showcase) ===== -->
<section class="sec wrap">
  <div class="sec-head" style="max-width:none">
    <span class="eyebrow">Por dentro do produto</span>
    <h2>A mesma trilha, vista de<br>onde você trabalha.</h2>
    <p class="sub">Do onboarding no celular do cliente ao dossiê que o seu compliance abre na auditoria.</p>
  </div>
  <div class="showcase">
    <div class="sc-tabs">
      <button class="sc-tab active" data-sc="dossie"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg> Dossiê do cliente</button>
      <button class="sc-tab" data-sc="bureau"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg> Consulta de fontes</button>
      <button class="sc-tab" data-sc="mobile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg> Onboarding mobile</button>
    </div>

    <div class="sc-panel active" data-panel="dossie">
      <div class="browser">
        <div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="url">admin.kycert.com.br/dossie/41.882.300</span></div>
        <div class="screen">
          <div class="screen-side">
            <div class="s-brand">kycert<span class="sig">.</span></div>
            <div class="s-nav">
              <a class="on"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> Dossiê</a>
              <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h10"/></svg> Fila de análise</a>
              <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg> Consultas</a>
              <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg> Compliance</a>
            </div>
          </div>
          <div class="screen-main">
            <div class="sm-head">
              <div><div class="h">Brick Lane Hospitalidade LTDA</div><div class="sub">CNPJ 41.882.300/0001-55 · livemode</div></div>
              <div class="score-ring">
                <svg class="ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(14,17,22,.08)" stroke-width="3.4"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="#C2772E" stroke-width="3.4" stroke-dasharray="62 100" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg>
                <div><div style="font-size:11px;color:var(--text-tertiary);font-family:var(--font-mono)">RISCO</div><div style="font-size:17px;font-weight:700;color:var(--warning)">Atenção</div></div>
              </div>
            </div>
            <div class="kpis">
              <div class="kpi"><div class="k">Sócios</div><div class="v">3</div></div>
              <div class="kpi"><div class="k">Apontamentos</div><div class="v warn">2</div></div>
              <div class="kpi"><div class="k">Fontes</div><div class="v ok">72</div></div>
            </div>
            <div class="rows">
              <div class="r"><span class="av">HB</span><span class="rl"><b>Heitor A. Brandão</b><br><small>sócio-administrador · 50%</small></span><span class="tagst err">Sanção ativa</span></div>
              <div class="r"><span class="av">LM</span><span class="rl"><b>Lucas Pereira Matos</b><br><small>sócio · 30%</small></span><span class="tagst warn">Mandado de prisão</span></div>
              <div class="r"><span class="av">AS</span><span class="rl"><b>Ana Beatriz Silva</b><br><small>sócia · 20%</small></span><span class="tagst ok">Nada consta</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sc-panel" data-panel="bureau">
      <div class="browser">
        <div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="url">admin.kycert.com.br/consulta</span></div>
        <div class="screen">
          <div class="screen-side">
            <div class="s-brand">kycert<span class="sig">.</span></div>
            <div class="s-nav">
              <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> Dossiê</a>
              <a class="on"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg> Consultas</a>
              <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg> Compliance</a>
            </div>
          </div>
          <div class="screen-main">
            <div class="sm-head"><div><div class="h">Consulta · PF</div><div class="sub">CPF •••.•••.•••-12 · 72 fontes</div></div><span class="tagst ok" style="font-size:12px">Concluída</span></div>
            <div class="rows">
              <div class="r"><span class="rl"><b>Receita Federal</b> <small>· situação cadastral</small></span><span class="tagst ok">Regular</span></div>
              <div class="r"><span class="rl"><b>OFAC &amp; listas ONU</b> <small>· sanções</small></span><span class="tagst ok">Sem ocorrência</span></div>
              <div class="r"><span class="rl"><b>PEP</b> <small>· pessoa exposta</small></span><span class="tagst ok">Não exposto</span></div>
              <div class="r"><span class="rl"><b>Antecedentes</b> <small>· CNJ</small></span><span class="tagst ok">Nada consta</span></div>
              <div class="r"><span class="rl"><b>Mídia adversa</b> <small>· imprensa</small></span><span class="tagst warn">1 menção</span></div>
            </div>
            <div style="margin-top:16px;font-family:var(--font-mono);font-size:11.5px;color:var(--text-tertiary);display:flex;gap:16px;flex-wrap:wrap"><span>● livemode</span><span>tempo 1,8s</span><span>créditos 3,33</span></div>
          </div>
        </div>
      </div>
    </div>

    <div class="sc-panel" data-panel="mobile">
      <div class="browser" style="background:var(--surface-app)">
        <div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="url">onboarding.suaempresa.com.br</span></div>
        <div class="ph-split">
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
          <div style="max-width:34ch">
            <div class="eyebrow">Onboarding white-label</div>
            <h3 style="font-size:22px;font-weight:800;letter-spacing:-.02em;margin:14px 0 10px">A sua marca na frente, a kycert por trás.</h3>
            <p style="font-size:14.5px;color:var(--ink-muted);line-height:1.6">O cliente recebe um link no seu domínio, fotografa o documento e a leitura por OCR preenche o cadastro. Cada etapa já entra na trilha como evidência.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== ONDE A KYCERT ENTRA (casos de uso) ===== -->
<section class="sec wrap">
  <div class="sec-head">
    <span class="eyebrow">Casos de uso</span>
    <h2>Uma trilha, moldada<br>ao seu segmento.</h2>
    <p class="sub">Cada operação regulada tem o seu enquadramento. A kycert ajusta o fluxo de onboarding e as fontes ao contexto da sua instituição.</p>
  </div>
  <div class="uc-grid">
    <a class="uc" href="/solucoes/cambio">
      <span class="tag">Câmbio</span>
      <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8h14l-3-3M21 16H7l3 3"/></svg></div>
      <h3>Corretoras e DTVMs de câmbio</h3>
      <p>Identifique e qualifique o cliente de câmbio com a evidência registrada junto da decisão.</p>
      <div class="regs"><span><span class="k">&rarr;</span>Lei 14.286/2021</span><span><span class="k">&rarr;</span>Circular BCB 3.978/2020</span></div>
      <span class="go">Ver página <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>
    <a class="uc" href="/solucoes/psav">
      <span class="tag">PSAV / cripto</span>
      <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M9 9h4.5a2.5 2.5 0 0 1 0 5H9zM9 9v9"/></svg></div>
      <h3>Exchanges e prestadoras de ativos virtuais</h3>
      <p>Onboarding que sobrevive à supervisão do BCB, com sanções e PEP no mesmo fluxo.</p>
      <div class="regs"><span><span class="k">&rarr;</span>Lei 14.478/2022</span><span><span class="k">&rarr;</span>Resoluções BCB 519, 520 e 521/2025</span></div>
      <span class="go">Ver página <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>
    <a class="uc" href="/solucoes/bancos">
      <span class="tag">Bancos &amp; fintechs</span>
      <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6"/></svg></div>
      <h3>Instituições de pagamento e crédito</h3>
      <p>KYC e KYB na entrada e o risco que alimenta o seu monitoramento (KYT) no contínuo.</p>
      <div class="regs"><span><span class="k">&rarr;</span>Circular BCB 3.978/2020</span><span><span class="k">&rarr;</span>Lei 9.613/98 + COAF</span></div>
      <span class="go">Ver página <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>
    <a class="uc" href="/solucoes/cooperativas">
      <span class="tag">Cooperativas</span>
      <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
      <h3>Cooperativas de crédito</h3>
      <p>Verifique o associado na adesão e monitore o cadastro ao longo do relacionamento.</p>
      <div class="regs"><span><span class="k">&rarr;</span>Circular BCB 3.978/2020</span><span><span class="k">&rarr;</span>Lei 9.613/98 + COAF</span></div>
      <span class="go">Ver página <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>
    <a class="uc" href="/solucoes/mercado-capitais">
      <span class="tag">Consórcios &amp; capitais</span>
      <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg></div>
      <h3>Consórcios e mercado de capitais</h3>
      <p>Cadastro do consorciado e do investidor com trilha, sob o BCB e a CVM.</p>
      <div class="regs"><span><span class="k">&rarr;</span>Circular BCB 3.978/2020</span><span><span class="k">&rarr;</span>CVM 50/2021</span></div>
      <span class="go">Ver página <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>
    <a class="uc" href="/solucoes/seguradoras">
      <span class="tag">Seguradoras</span>
      <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9zM12 11v9a2 2 0 0 0 4 0"/></svg></div>
      <h3>Seguradoras e corretoras</h3>
      <p>Cadastro do segurado e do contratante PJ com a avaliação de risco registrada.</p>
      <div class="regs"><span><span class="k">&rarr;</span>Circular SUSEP 612/2020</span><span><span class="k">&rarr;</span>Lei 9.613/98 + COAF</span></div>
      <span class="go">Ver página <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>
    <a class="uc" href="/solucoes/bets">
      <span class="tag">Apostas / Bets</span>
      <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/></svg></div>
      <h3>Casas de apostas (Bets)</h3>
      <p>Identifique o apostador, confirme a idade e registre a decisão como evidência.</p>
      <div class="regs"><span><span class="k">&rarr;</span>Lei 14.790/2023</span><span><span class="k">&rarr;</span>Portarias SPA/MF 722 e 827/2024</span></div>
      <span class="go">Ver página <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>
    <a class="uc" href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+falar+com+um+especialista+da+kycert+sobre+o+meu+segmento.&amp;type=phone_number&amp;app_absent=0" target="_blank" rel="noopener">
      <span class="tag">Outros segmentos</span>
      <div class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
      <h3>Atendemos outros segmentos</h3>
      <p>Sua operação é obrigada a PLD/FT por outra via? A trilha se adapta ao seu fluxo de cadastro e decisão.</p>
      <div class="regs"><span><span class="k">&rarr;</span>Lei 9.613/98 + COAF</span><span><span class="k">&rarr;</span>Conforme o enquadramento</span></div>
      <span class="go">Falar com um especialista <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
    </a>
  </div>
  <p style="font-size:12.5px;color:var(--paper-muted);font-family:var(--mono);margin-top:22px;max-width:80ch;line-height:1.6">A kycert estrutura e registra controles de onboarding, cadastro e PLD/FT conforme o enquadramento de cada empresa. Não substitui assessoria jurídica nem dispensa os demais deveres do obrigado.</p>
</section>

<!-- ===== O QUE VALIDAMOS (fontes) ===== -->
<section class="validate">
  <div class="wrap vhead2">
    <span class="eyebrow">O que validamos</span>
    <h2>As fontes que entram na trilha.</h2>
    <p class="vlead">Bases oficiais nacionais e internacionais cruzadas no mesmo passo. Cada consulta entra na trilha como evidência.</p>
  </div>
  <div class="marquee">
    <div class="mtrack" id="mtrack"></div>
  </div>
</section>

<!-- ===== INTEGRAÇÃO ===== -->
<section class="sec-dark">
  <div class="wrap">
    <div class="split">
      <div class="split-copy">
        <span class="eyebrow on-dark">Integração</span>
        <h3 style="color:#fff">Conecta ao seu core, <span class="serif" style="color:var(--green-l)">de ponta a ponta.</span></h3>
        <p style="color:#aab1b9">A trilha foi pensada para se ligar ao seu sistema de cadastro e ao seu motor de risco. Dispare uma verificação, receba o resultado estruturado e mantenha a evidência do seu lado. O escopo é definido na demo técnica.</p>
        <div class="flist">
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b style="color:#fff">API REST</b><p style="color:#99a1aa">Dispare consultas e receba o dossiê em JSON.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b style="color:#fff">Webhooks</b><p style="color:#99a1aa">Seja avisado quando uma etapa muda de status.</p></div></div>
        </div>
        <div style="display:flex;gap:12px;margin-top:30px">
          <a class="btn btn-white" href="/produto/api">Ler a documentação<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
        </div>
      </div>
      <div class="split-media">
        <div class="code-card">
          <div class="code-bar"><i></i><i></i><i></i><span class="fn">verificar_cliente.sh</span></div>
<pre class="code"><span class="c"># dispara a verificação de um cliente</span>
<span class="k">curl</span> -X POST https://api.kycert.com.br/v1/<span class="p">consultas</span> \\
  -H <span class="s">"Authorization: Bearer sk_live_..."</span> \\
  -d <span class="s">'{ "tipo": "pj",
        "documento": "41882300000155",
        "fontes": ["receita","sancoes","pep","ubo"] }'</span>

<span class="c"># resposta</span>
{ <span class="s">"status"</span>: <span class="s">"concluida"</span>,
  <span class="s">"risco"</span>: <span class="s">"atencao"</span>,
  <span class="s">"apontamentos"</span>: <span class="p">2</span>,
  <span class="s">"dossie_url"</span>: <span class="s">"https://admin.kycert..."</span> }</pre>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== CONFORMIDADE ===== -->
<section class="sec wrap">
  <div class="sec-head" style="max-width:none">
    <span class="eyebrow">Conformidade &amp; segurança</span>
    <h2>Construído para a auditoria.</h2>
    <p class="sub">A kycert estrutura e registra os controles de onboarding, cadastro e PLD/FT conforme o enquadramento da sua instituição.</p>
  </div>
  <div class="reg">
    <div class="regcard"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></div><div><h3>Mercado de câmbio</h3><p>Lei 14.286/2021 e Resolução BCB 277/2022.</p></div></div>
    <div class="regcard"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></div><div><h3>Ativos virtuais (PSAV)</h3><p>Lei 14.478/2022 e Resoluções BCB 519 e 520/2025.</p></div></div>
    <div class="regcard"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></div><div><h3>PLD/FT · Circular BCB 3.978/2020</h3><p>Prevenção à lavagem (Lei 9.613/98 e deveres junto ao COAF).</p></div></div>
    <div class="regcard"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg></div><div><h3>LGPD · Lei 13.709/18</h3><p>Tratamento com finalidade, controle de acesso e registro.</p></div></div>
  </div>
  <div style="margin-top:24px"><a class="btn btn-ghost" href="/conformidade">Ver o mapa de normas<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a></div>
</section>

<!-- ===== FAQ ===== -->
<section class="sec wrap">
  <div class="sec-head">
    <span class="eyebrow">Dúvidas frequentes</span>
    <h2>O que o compliance pergunta<br>antes de marcar a demo.</h2>
  </div>
  <div class="faq">
    <details open><summary>A kycert substitui o meu bureau?<span class="pl">+</span></summary><p>Não. O bureau resolve uma consulta; a kycert registra o cliente inteiro e organiza a trilha — convite, captura, verificações, risco e decisão — como evidência auditável. As consultas a fontes acontecem dentro desse fluxo.</p></details>
    <details><summary>Quem decide a aprovação?<span class="pl">+</span></summary><p>O seu time. A plataforma cruza as fontes e enquadra o risco pelas regras que você define, e leva à análise humana só o que precisa de decisão. Quem aprova é o seu compliance, e isso fica registrado com autor, data e justificativa.</p></details>
    <details><summary>Vocês integram com o meu sistema?<span class="pl">+</span></summary><p>A trilha conecta ao seu core e ao seu motor de risco por API e webhooks. O escopo de integração é definido conforme a sua operação — tratamos disso na demo técnica.</p></details>
    <details><summary>Como isso ajuda numa fiscalização?<span class="pl">+</span></summary><p>Cada etapa nasce registrada. Quando o regulador pede a trilha de um cliente, a resposta já está montada: você apresenta o histórico com autor, data e evidência, em vez de reconstruir a partir de e-mails e planilhas.</p></details>
    <details><summary>Atende PF e PJ?<span class="pl">+</span></summary><p>Os dois. PF com identidade, sanções, PEP e antecedentes; PJ com situação cadastral, quadro societário e beneficiário final, verificando cada entidade da estrutura.</p></details>
  </div>
</section>

<!-- ===== CTA ===== -->
<section class="cta" id="demo">
  <div class="wrap in">
    <span class="eyebrow dark" style="display:inline-flex;justify-content:center">kycert</span>
    <h2 style="margin-top:24px">A próxima auditoria começa<br>no <span class="serif">cadastro de hoje</span>.</h2>
    <p>Mostramos a plataforma com o seu caso — PSAV, câmbio ou o segmento que precisa provar PLD.</p>
    <div class="ctarow">
      <a class="btn btn-white" href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0">Agendar demo · 30 min<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 5l7 7-7 7"/></svg></a>
    </div>
  </div>
</section>
`;

const HOME_SCRIPT = `
  // nav: sombra ao rolar + drawer mobile
  (function(){
    const nav=document.querySelector('nav.site');
    if(nav){const onScroll=()=>nav.classList.toggle('scrolled',window.scrollY>8);onScroll();window.addEventListener('scroll',onScroll,{passive:true});}
    const mb=document.querySelector('.menu-btn'),dr=document.getElementById('navDrawer');
    if(mb&&dr){mb.addEventListener('click',()=>{const o=dr.classList.toggle('open');document.body.style.overflow=o?'hidden':'';});
      dr.querySelectorAll('a[href]').forEach(a=>a.addEventListener('click',()=>{dr.classList.remove('open');document.body.style.overflow='';}));}
  })();

  // rotating word
  function rotate(el,words){
    let i=0;setInterval(()=>{i=(i+1)%words.length;
      el.style.transition='opacity .28s ease,transform .28s ease';
      el.style.opacity='0';el.style.transform='translateY(-8px)';
      setTimeout(()=>{el.textContent=words[i];el.style.transform='translateY(8px)';
        requestAnimationFrame(()=>{el.style.opacity='1';el.style.transform='translateY(0)'});},300);
    },2300);
  }
  rotate(document.getElementById('rotA'),['Comprove','Verifique','Monitore','Audite']);

  // typing field
  (function(){
    const docs=['12.345.678/0001-90','045.821.677-08','98.471.220/0001-55','311.908.554-72'];
    const t=document.getElementById('typeA');let d=0,c=docs[0].length,dir=-1;
    setInterval(()=>{if(dir<0){c--;if(c<=0)dir=1;}else{c++;if(c>=docs[d].length){dir=-1;d=(d+1)%docs.length;}}
      t.textContent=docs[d].slice(0,Math.max(0,c));},90);
  })();

  // marquee — fontes que validamos (nacionais)
  (function(){
    const src=[
      ['Situação cadastral','CPF e CNPJ · Receita Federal','<path d="M3 21h18M5 21V10m14 11V10M3 10l9-6 9 6M9 21v-6h6v6"/>'],
      ['Indicação de óbito','','<path d="M14 3H6v18h12V8z"/><path d="M14 3v5h5"/>'],
      ['Correspondência de nome','','<circle cx="12" cy="8" r="4"/><path d="M5 21c0-4 3-6 7-6s7 2 7 6"/>'],
      ['Quadro societário (QSA)','','<circle cx="12" cy="5" r="2.5"/><circle cx="5" cy="19" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M12 7.5v3.5M11 13l-4.5 4M13 13l4.5 4"/>'],
      ['Tempo de operação','','<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'],
      ['PEP','pessoa politicamente exposta','<circle cx="12" cy="8" r="4"/><path d="M5 21c0-4 3-6 7-6s7 2 7 6"/>'],
      ['Sanções','OFAC · ONU · UE · Interpol','<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18"/>'],
      ['Terrorismo','','<path d="M10.3 4l-7 12a2 2 0 0 0 1.7 3h14a2 2 0 0 0 1.7-3l-7-12a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>'],
      ['Crime financeiro','','<rect x="2" y="7" width="20" height="10" rx="2"/><circle cx="12" cy="12" r="2.5"/>'],
      ['Corrupção','','<path d="M10.3 4l-7 12a2 2 0 0 0 1.7 3h14a2 2 0 0 0 1.7-3l-7-12a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>'],
      ['Trabalho escravo','','<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'],
      ['Mandados de prisão','','<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'],
      ['Histórico judicial','processos como réu','<path d="M12 3v18M5 7h14M5 7l-2.5 6h5zM19 7l-2.5 6h5z"/>'],
      ['Mídia adversa','','<path d="M4 4h16v16H4z"/><path d="M8 8h8M8 12h8M8 16h5"/>']
    ];
    const t=document.getElementById('mtrack');
    if(t){
      const html=src.map(s=>\`<span class="mchip"><span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\${s[2]}</svg></span><b>\${s[0]}</b>\${s[1]?\`<em>\${s[1]}</em>\`:''}</span>\`).join('');
      t.innerHTML=html+html;
    }
  })();

  // reveal on scroll (robusto: nunca deixa conteúdo preso invisível)
  const revEls=[...document.querySelectorAll('.sec,.band,.stmt,.validate,.darkflow,.cta')];
  revEls.forEach(el=>el.classList.add('rv'));
  const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:0,rootMargin:'0px 0px -8% 0px'});
  revEls.forEach(el=>io.observe(el));
  function revealSafety(){const h=window.innerHeight||document.documentElement.clientHeight;for(const el of revEls){const r=el.getBoundingClientRect();if(r.top<h*0.92&&r.bottom>0){el.classList.add('in');io.unobserve(el);}}}
  window.addEventListener('scroll',revealSafety,{passive:true});
  window.addEventListener('resize',revealSafety);
  window.addEventListener('load',revealSafety);
  revealSafety();
  setTimeout(revealSafety,400);setTimeout(()=>revEls.forEach(el=>el.classList.add('in')),2500);

  // showcase tabs
  document.querySelectorAll('.sc-tab').forEach(tab=>{
    tab.addEventListener('click',()=>{
      const g=tab.closest('.showcase');
      g.querySelectorAll('.sc-tab').forEach(t=>t.classList.toggle('active',t===tab));
      const id=tab.getAttribute('data-sc');
      g.querySelectorAll('.sc-panel').forEach(p=>p.classList.toggle('active',p.getAttribute('data-panel')===id));
    });
  });

  // flow animation (como funciona)
  (function(){
    const reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
    const flow=document.getElementById('comoFlow');
    if(!flow) return;
    const line=flow.querySelector('.flow-line');
    const nodes=flow.querySelectorAll('.fnode');
    const N=nodes.length||1;
    function run(){
      if(reduce){ if(line) line.style.setProperty('--flow','100%'); nodes.forEach(n=>n.classList.add('lit')); return; }
      flow.classList.add('run');
      const dur=2600,t0=performance.now();
      (function frame(now){
        const p=Math.min(((now||t0)-t0)/dur,1);
        if(line) line.style.setProperty('--flow',(p*100)+'%');
        for(let k=0;k<N;k++){ if(p>=(k+0.5)/N) nodes[k].classList.add('lit'); }
        if(p<1) requestAnimationFrame(frame);
        else setTimeout(()=>flow.classList.remove('run'),500);
      })(t0);
    }
    const fo=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){run();fo.disconnect();}})},{threshold:.3});
    fo.observe(flow);
  })();
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: HOME_STYLE }} />
      <Nav active="plataforma" />
      <div dangerouslySetInnerHTML={{ __html: HOME_BODY }} />
      <Footer />
      <script dangerouslySetInnerHTML={{ __html: HOME_SCRIPT }} />
    </>
  );
}
