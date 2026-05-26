import Section, { Eyebrow } from './Section';
import Icon from './Icon';

const WA = 'https://wa.me/5511977656630?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.';

export default function Hero() {
  const stats = [
    { v: '70+',               l: 'bureaus de dados integrados' },
    { v: '2 min',             l: 'tempo médio de validação' },
    { v: '100%',              l: 'white-label, sua marca no portal' },
    { v: 'BCB · LGPD · COAF', l: 'conformidade dia 1', mono: true },
  ];
  return (
    <Section pad="var(--pad-hero)">
      <div style={{ maxWidth: 1000 }}>
        <Eyebrow>Plataforma de validação · v1</Eyebrow>
        <h1 style={{
          margin: '24px 0 0', fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(40px, 6vw, 76px)',
          fontWeight: 700, letterSpacing: '-0.045em',
          lineHeight: 1.02, color: 'var(--text-primary)',
          textWrap: 'balance' as const,
        }}>
          Compliance completo{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--brand-accent-signal)' }}>
            em minutos, não em dias.
          </span>
        </h1>
        <p style={{
          marginTop: 28, fontSize: 'clamp(17px, 1.4vw, 20px)',
          color: 'var(--text-secondary)', lineHeight: 1.5,
          maxWidth: 720, textWrap: 'pretty' as const,
        }}>
          Mais que bureau. A kycert é a plataforma completa de onboarding, KYC e
          validação de clientes para mercados regulados. Convite, captura de documentos,
          análise de risco, aprovação e auditoria — do começo ao fim, em uma única interface.
        </p>
        <div style={{ marginTop: 36, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            padding: '14px 22px', borderRadius: 'var(--radius-md)',
            background: 'var(--text-primary)', color: 'var(--surface-canvas)',
            fontSize: 'var(--text-md)', fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Agendar demo<Icon name="arrow" size={15} strokeWidth={2} />
          </a>
          <a href="#produto" style={{
            padding: '14px 22px', borderRadius: 'var(--radius-md)',
            background: 'transparent', color: 'var(--text-primary)',
            fontSize: 'var(--text-md)', fontWeight: 600,
            border: '1px solid var(--border-strong)',
          }}>
            Ver como funciona
          </a>
        </div>
      </div>
      <div role="list" style={{
        marginTop: 96, display: 'grid',
        gridTemplateColumns: 'var(--cols-4)', gap: 0,
        borderTop: '1px solid var(--border-default)',
      }}>
        {stats.map((s, i) => (
          <div key={i} role="listitem" style={{
            padding: '40px 24px 24px',
            borderRight: i < 3 ? '1px solid var(--border-default)' : 'none',
          }}>
            <div style={{
              fontFamily: s.mono ? 'var(--font-mono)' : 'var(--font-sans)',
              fontSize: s.mono ? 'clamp(14px, 1.8vw, 20px)' : 'clamp(32px, 4.5vw, 56px)',
              fontWeight: s.mono ? 600 : 700,
              letterSpacing: s.mono ? '0.02em' : '-0.04em',
              lineHeight: 1, color: 'var(--text-primary)',
            }}>
              {s.v}
            </div>
            <div style={{ marginTop: 16, fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 1.5, maxWidth: 220 }}>
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
