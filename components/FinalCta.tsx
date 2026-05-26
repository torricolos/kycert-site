import Section from './Section';
import Mark from './Mark';
import Icon from './Icon';

type Props = {
  headline?: string;
  highlight?: string;
  sub?: string;
};

export default function FinalCta({
  headline = 'Sua próxima conversa\ncom compliance ',
  highlight = 'vai durar dois minutos.',
  sub = 'Vamos mostrar como sua empresa opera com a kycert. 30 minutos, sem compromisso.',
}: Props) {
  return (
    <Section pad="120px 32px">
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
          {headline}
          <span style={{
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400,
            color: 'var(--brand-accent-signal)', whiteSpace: 'normal',
          }}>
            {highlight}
          </span>
        </h2>
        <p style={{ margin: '24px auto 0', maxWidth: 540, fontSize: 'var(--text-lg)', color: 'rgba(247,248,250,0.7)', lineHeight: 1.5 }}>
          {sub}
        </p>
        <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#demo" style={{
            padding: '14px 28px', borderRadius: 'var(--radius-md)',
            background: 'var(--surface-app)', color: 'var(--text-primary)',
            fontSize: 'var(--text-md)', fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            Agendar demo<Icon name="arrow" size={15} strokeWidth={2} />
          </a>
          <a href="#contato" style={{
            padding: '14px 28px', borderRadius: 'var(--radius-md)',
            background: 'transparent', color: 'var(--text-inverse)',
            border: '1px solid rgba(247,248,250,0.2)',
            fontSize: 'var(--text-md)', fontWeight: 600,
          }}>
            Falar com vendas
          </a>
        </div>
      </div>
    </Section>
  );
}
