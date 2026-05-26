import type { ReactNode } from 'react';

export function PreviewFrame({ children, dotColor = 'var(--brand-accent-signal)' }: { children: ReactNode; dotColor?: string }) {
  return (
    <div style={{
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--surface-canvas)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden', position: 'relative',
    }}>
      <div style={{
        padding: '10px 14px', borderBottom: '1px solid var(--border-subtle)',
        display: 'flex', alignItems: 'center', gap: 6,
      }}>
        {['#FF5F57', '#FEBC2E', '#28C840'].map((c) => (
          <span key={c} style={{ width: 9, height: 9, borderRadius: 9, background: c, opacity: 0.85 }} />
        ))}
        <div style={{ flex: 1 }} />
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: dotColor }} />
      </div>
      <div style={{ padding: 24, minHeight: 320 }}>{children}</div>
    </div>
  );
}
