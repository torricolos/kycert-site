import Mark from './Mark';

const legalLinks = [
  { label: 'Termos de Uso', href: '/termos' },
  { label: 'Privacidade & LGPD', href: '/privacidade' },
  { label: 'Tratamento de Dados', href: '/tratamento-de-dados' },
];

export default function Footer() {
  return (
    <footer style={{
      padding: '64px 32px 40px',
      background: 'var(--surface-app)',
      borderTop: '1px solid var(--border-default)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Brand block + legal links */}
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 360 }}>
            <Mark size={22} />
            <p style={{
              margin: 0,
              fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5,
            }}>
              A camada de certificação para mercados financeiros regulados.
            </p>
            <div style={{
              fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)',
              fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', lineHeight: 1.8,
            }}>
              kycert tecnologia ltda.<br />
              cnpj 59.959.589/0001-00<br />
              são paulo · brasil
            </div>
          </div>

          {/* Legal links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <div style={{
              fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--text-tertiary)', marginBottom: 4,
            }}>
              Legal
            </div>
            {legalLinks.map((l) => (
              <a key={l.href} href={l.href} style={{
                fontSize: 'var(--text-sm)', color: 'var(--text-secondary)',
                fontWeight: 500,
                transition: 'color 100ms',
              }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 48, paddingTop: 24,
          borderTop: '1px solid var(--border-default)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{
            fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)',
            fontFamily: 'var(--font-mono)', letterSpacing: '0.04em',
          }}>
            © 2026 kycert. todos os direitos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-accent-signal)', flexShrink: 0 }} />
            Todos os sistemas operacionais
          </div>
        </div>
      </div>
    </footer>
  );
}
