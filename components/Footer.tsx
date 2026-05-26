import Mark from './Mark';

type Item = string | { label: string; href: string };
type Col = { t: string; items: Item[] };

const COLS: Col[] = [
  { t: 'Produto',  items: ['Cadastro', 'Compliance', 'Marketing', 'IA', 'White-label'] },
  {
    t: 'Setores',
    items: [
      { label: 'Câmbio', href: '/cambio' },
      'Correspondentes',
      'Mesas OTC',
      'Exchanges',
      'Gestoras',
      'Crédito',
    ],
  },
  { t: 'Empresa',    items: ['Sobre', 'Carreiras', 'Blog', 'Imprensa', 'Contato'] },
  { t: 'Compliance', items: ['Privacidade', 'Termos', 'DPA', 'LGPD', 'Sub-processadores', 'Segurança'] },
];

export default function Footer() {
  return (
    <footer style={{
      padding: '80px 32px 40px',
      background: 'var(--surface-app)',
      borderTop: '1px solid var(--border-default)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', gap: 48 }}>
          <div>
            <Mark size={22} />
            <p style={{ marginTop: 16, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', lineHeight: 1.5, maxWidth: 280 }}>
              A camada de certificação para mercados financeiros regulados.
              Construído por gente que conhece o setor.
            </p>
            <div style={{ marginTop: 20, fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
              kycert tecnologia ltda.<br />cnpj 00.000.000/0001-00<br />são paulo · brasil
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.t}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.04em', color: 'var(--text-primary)', marginBottom: 14 }}>
                {col.t}
              </div>
              {col.items.map((it) => {
                const label = typeof it === 'string' ? it : it.label;
                const href = typeof it === 'string' ? '#' : it.href;
                return (
                  <a key={label} href={href} style={{
                    display: 'block', padding: '4px 0',
                    fontSize: 'var(--text-sm)', color: 'var(--text-secondary)',
                  }}>
                    {label}
                  </a>
                );
              })}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 64, paddingTop: 24,
          borderTop: '1px solid var(--border-default)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 16,
        }}>
          <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>
            © 2026 kycert. todos os direitos reservados.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 'var(--text-xs)', color: 'var(--text-tertiary)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--brand-accent-signal)' }} />
            Todos os sistemas operacionais
          </div>
        </div>
      </div>
    </footer>
  );
}
