import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  bg?: string;
  id?: string;
  pad?: string;
};

export default function Section({ children, bg, id, pad = '120px 32px' }: Props) {
  return (
    <section
      id={id}
      style={{
        background: bg || 'transparent',
        padding: pad,
        borderBottom: '1px solid var(--border-default)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

export function Eyebrow({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-2xs)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: color || 'var(--text-tertiary)',
      }}
    >
      {children}
    </div>
  );
}
