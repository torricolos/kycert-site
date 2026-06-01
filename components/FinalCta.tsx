import Section from './Section';
import Mark from './Mark';
import Icon from './Icon';

const WA = 'https://wa.me/5511977656630?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.';

export default function FinalCta() {
  return (
    <Section pad="var(--pad-section)">
      <div style={{
        padding: 'clamp(48px, 8vw, 96px)',
        borderRadius: 'var(--radius-2xl)',
        background: 'var(--text-primary)',
        color: 'var(--text-inverse)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <Mark size={20} dotColor="var(--brand-accent-signal)" color="var(--text-inverse)" />
        <h2 style={{
          margin: '32px auto 0', maxWidth: 760,
          fontFamily: 'var(--font-sans)', fontSize: 'clamp(36px, 5vw, 60px)',
          fontWeight: 700, letterSpacing: '-0.04em',
          lineHeight: 1.05, color: 'var(--text-inverse)',
          textWrap: 'balance' as const, whiteSpace: 'pre-line',
        }}>
          {'Sua próxima conversa\ncom compliance '}
          <span style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400,
            color: 'var(--brand-accent-signal)', whiteSpace: 'normal',
          }}>
            vai durar dois minutos.
          </span>
        </h2>
        <p style={{ margin: '24px auto 0', maxWidth: 540, fontSize: 'var(--text-lg)', color: 'rgba(247,248,250,0.7)', lineHeight: 1.5 }}>
          Vamos mostrar como sua empresa opera com a kycert. 30 minutos, sem compromisso.
        </p>
        <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{
            padding: '14px 28px', borderRadius: 'var(--radius-md)',
            background: 'var(--surface-app)', color: 'var(--text-primary)',
            fontSize: 'var(--text-md)', fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Agendar demo<Icon name="arrow" size={15} strokeWidth={2} />
          </a>
        </div>
      </div>
    </Section>
  );
}
