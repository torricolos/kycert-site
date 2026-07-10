'use client';

import { useEffect, useState } from 'react';

const WA_HREF =
  'https://api.whatsapp.com/send/?phone=5511977656630&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&type=phone_number&app_absent=0';

export type NavActive = 'plataforma' | 'produtos' | 'solucoes' | 'recursos' | 'conformidade' | 'precos' | '';

const PRODUTOS = [
  { href: '/produto/kyc', mt: 'Verificação PF · KYC', md: 'Identidade, sanções, PEP e antecedentes', color: 'var(--module-cadastro)', icon: (
    <><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></>
  ) },
  { href: '/produto/kyb', mt: 'Verificação PJ · KYB / UBO', md: 'Quadro societário até o beneficiário final', color: 'var(--module-compliance)', icon: (
    <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
  ) },
  { href: '/produto/dossie-de-risco', mt: 'Dossiê de Risco', md: 'Score, apontamentos e decisão auditável', color: 'var(--signal)', icon: (
    <><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></>
  ) },
  { href: '/produto/ocr', mt: 'Cadastro & documentos · OCR', md: 'Convite white-label e captura por câmera', color: 'var(--module-marketing)', icon: (
    <><rect x="3" y="6" width="18" height="14" rx="2" /><circle cx="12" cy="13" r="3.5" /></>
  ) },
  { href: '/produto/monitoramento', mt: 'Reverificação & monitoramento', md: 'Vencimento de cadastro e revisão no prazo', color: 'var(--module-cadastro)', icon: (
    <><path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /></>
  ) },
  { href: '/produto/api', mt: 'API & webhooks', md: 'Conecta ao seu core e motor de risco', color: 'var(--module-ai)', icon: (
    <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13 6l-2 12" />
  ) },
];

const SOLUCOES = [
  { href: '/solucoes/cambio', mt: 'Corretoras de câmbio', md: 'Lei 14.286 · Circular BCB 3.978', color: 'var(--module-cadastro)', icon: <path d="M3 8h14l-3-3M21 16H7l3 3" /> },
  { href: '/solucoes/psav', mt: 'PSAV / cripto', badge: 'Novo', md: 'Resoluções BCB 519 e 520/2025', color: 'var(--signal)', icon: (
    <><circle cx="12" cy="12" r="9" /><path d="M9 9h4.5a2.5 2.5 0 0 1 0 5H9zM9 9v9" /></>
  ) },
  { href: '/solucoes/bancos', mt: 'Bancos & fintechs', md: 'KYC, KYB e KYT em escala', color: 'var(--module-marketing)', icon: <path d="M3 21h18M5 21V9l7-5 7 5v12M9 21v-6h6v6" /> },
  { href: '/solucoes/cooperativas', mt: 'Cooperativas de crédito', md: 'Circular BCB 3.978/2020', color: 'var(--module-compliance)', icon: (
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  ) },
  { href: '/solucoes/mercado-capitais', mt: 'Consórcios & mercado de capitais', md: 'Regulação do BCB e da CVM', color: 'var(--module-ai)', icon: (
    <><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></>
  ) },
  { href: '/solucoes/seguradoras', mt: 'Seguradoras', md: 'PLD/FT sob a SUSEP', color: 'var(--module-marketing)', icon: <path d="M12 2a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9zM12 11v9a2 2 0 0 0 4 0" /> },
  { href: '/solucoes/bets', mt: 'Apostas / Bets', badge: 'Novo', md: 'Lei 14.790/2023 · SPA/MF', color: 'var(--signal)', icon: (
    <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" /></>
  ) },
];

const RECURSOS = [
  { href: '/blog', mt: 'Blog', md: 'Conteúdo regulatório e de compliance', icon: <path d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" /> },
  { href: '/faq', mt: 'Perguntas frequentes', md: 'Dúvidas de compliance e glossário', icon: (
    <><circle cx="12" cy="12" r="9" /><path d="M9.2 9.3a2.8 2.8 0 0 1 5.4 1c0 1.9-2.8 2.5-2.8 2.5" /><path d="M12 17h.01" /></>
  ) },
  { href: '/faq#glossario', mt: 'Glossário', md: 'KYC, PLD/FT, UBO, PEP e mais', icon: <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z" /> },
  { href: '/guias', mt: 'Guias e materiais', md: 'Checklists e materiais práticos', icon: <path d="M14 3v5h5M7 3h8l5 5v13H7z" /> },
  { href: '/dossie-exemplo', mt: 'Dossiê de exemplo', md: 'Veja um dossiê de risco completo', icon: <path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z" /> },
];

function MegaIcon({ color, children }: { color?: string; children: React.ReactNode }) {
  return (
    <span className="mi">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color || 'var(--text-primary)'} strokeWidth="1.8">
        {children}
      </svg>
    </span>
  );
}

export default function Nav({ active = '' }: { active?: NavActive }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('js');
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const on = (k: NavActive) => (active === k ? { color: 'var(--text-primary)', background: 'var(--surface-subtle)' } : undefined);

  return (
    <>
      <nav className={`site${scrolled ? ' scrolled' : ''}`}>
        <div className="wrap inner">
          <a className="brand" href="/">kycert<span className="sig">.</span></a>
          <div className="nav-links">
            <div className="nav-item"><a href="/#plataforma" style={on('plataforma')}>Plataforma</a></div>

            <div className="nav-item">
              <button type="button" style={on('produtos')}>
                Produtos
                <svg className="caret" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="megamenu">
                {PRODUTOS.map((p) => (
                  <a key={p.href} className="mega-link" href={p.href}>
                    <MegaIcon color={p.color}>{p.icon}</MegaIcon>
                    <span><span className="mt">{p.mt}</span><span className="md">{p.md}</span></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <button type="button" style={on('solucoes')}>
                Soluções
                <svg className="caret" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="megamenu">
                {SOLUCOES.map((s) => (
                  <a key={s.href} className="mega-link" href={s.href}>
                    <MegaIcon color={s.color}>{s.icon}</MegaIcon>
                    <span><span className="mt">{s.mt}{s.badge && <span className="mega-badge">{s.badge}</span>}</span><span className="md">{s.md}</span></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <button type="button" style={on('recursos')}>
                Recursos
                <svg className="caret" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M6 9l6 6 6-6" /></svg>
              </button>
              <div className="megamenu">
                {RECURSOS.map((r) => (
                  <a key={r.href} className="mega-link" href={r.href}>
                    <MegaIcon>{r.icon}</MegaIcon>
                    <span><span className="mt">{r.mt}</span><span className="md">{r.md}</span></span>
                  </a>
                ))}
              </div>
            </div>

            <div className="nav-item"><a href="/conformidade" style={on('conformidade')}>Conformidade</a></div>
            <div className="nav-item"><a href="/precos" style={on('precos')}>Preços</a></div>
          </div>

          <div className="nav-cta">
            <a className="login" href="https://admin.kycert.com.br">Entrar</a>
            <a className="btn btn-primary" href={WA_HREF} target="_blank" rel="noopener">Agendar demo</a>
          </div>

          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
          </button>
        </div>
      </nav>

      <div className={`nav-drawer${open ? ' open' : ''}`}>
        <details>
          <summary>Produtos <span className="c">+</span></summary>
          <div>
            {PRODUTOS.map((p) => (
              <a key={p.href} className="dl" href={p.href} onClick={() => setOpen(false)}>{p.mt}</a>
            ))}
          </div>
        </details>
        <details>
          <summary>Soluções <span className="c">+</span></summary>
          <div>
            {SOLUCOES.map((s) => (
              <a key={s.href} className="dl" href={s.href} onClick={() => setOpen(false)}>{s.mt}</a>
            ))}
          </div>
        </details>
        <details>
          <summary>Recursos <span className="c">+</span></summary>
          <div>
            {RECURSOS.map((r) => (
              <a key={r.href} className="dl" href={r.href} onClick={() => setOpen(false)}>{r.mt}</a>
            ))}
          </div>
        </details>
        <a className="dsingle" href="/conformidade" onClick={() => setOpen(false)}>Conformidade</a>
        <a className="dsingle" href="/precos" onClick={() => setOpen(false)}>Preços</a>
        <a className="dsingle" href="https://admin.kycert.com.br">Entrar</a>
        <a className="btn btn-primary btn-lg ddemo" href={WA_HREF} target="_blank" rel="noopener" onClick={() => setOpen(false)}>Agendar demo</a>
      </div>
    </>
  );
}
