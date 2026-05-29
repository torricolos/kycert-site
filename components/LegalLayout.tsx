import Mark from './Mark';
import Footer from './Footer';

type Section = { title: string; items: (string | { sub: string; items: string[] })[] };

type Props = {
  title: string;
  updated: string;
  intro?: string;
  sections: Section[];
};

export default function LegalLayout({ title, updated, intro, sections }: Props) {
  return (
    <>
      {/* Nav mínima */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'color-mix(in srgb, var(--surface-app) 88%, transparent)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-default)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="/" aria-label="kycert — página inicial" style={{ display: 'inline-flex' }}>
            <Mark size={20} />
          </a>
          <a href="/" style={{ fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', fontWeight: 500 }}>
            ← Voltar ao site
          </a>
        </div>
      </nav>

      <main style={{ background: 'var(--surface-canvas)' }}>
        {/* Cabeçalho do documento */}
        <div style={{
          maxWidth: 760, margin: '0 auto',
          padding: '64px 32px 48px',
          borderBottom: '1px solid var(--border-default)',
        }}>
          <div style={{
            display: 'inline-block',
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--text-tertiary)', marginBottom: 16,
          }}>
            kycert · documento legal
          </div>
          <h1 style={{
            margin: 0,
            fontFamily: 'var(--font-sans)', fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15,
            color: 'var(--text-primary)',
          }}>
            {title}
          </h1>
          <p style={{ margin: '16px 0 0', fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
            Última atualização: {updated}
          </p>
          {intro && (
            <p style={{ margin: '24px 0 0', fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              {intro}
            </p>
          )}
        </div>

        {/* Conteúdo */}
        <div style={{ maxWidth: 760, margin: '0 auto', padding: '48px 32px 80px' }}>
          {sections.map((sec, si) => (
            <section key={si} style={{ marginBottom: 48 }}>
              <h2 style={{
                margin: '0 0 20px',
                fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xl)',
                fontWeight: 600, letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}>
                {sec.title}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {sec.items.map((item, ii) =>
                  typeof item === 'string' ? (
                    <p key={ii} style={{
                      margin: 0, fontSize: 'var(--text-md)', color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}>
                      {item}
                    </p>
                  ) : (
                    <div key={ii} style={{ marginTop: 4 }}>
                      <p style={{ margin: '0 0 8px', fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 500 }}>
                        {item.sub}
                      </p>
                      <ul style={{ margin: 0, paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {item.items.map((li, lii) => (
                          <li key={lii} style={{ fontSize: 'var(--text-md)', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                            {li}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </section>
          ))}

          {/* Contato */}
          <div style={{
            marginTop: 32, padding: 24,
            background: 'var(--surface-sunken)',
            borderRadius: 'var(--radius-lg)',
          }}>
            <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Dúvidas sobre este documento? Entre em contato com nosso encarregado de dados:
              {' '}<a href="mailto:comercial@kycert.com.br" style={{ color: 'var(--text-primary)', fontWeight: 500 }}>comercial@kycert.com.br</a>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
