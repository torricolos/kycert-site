'use client';

type Props = { name: string; color: string; icon: string };

export default function PlatformBadge({ name, color, icon }: Props) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: color,
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
        }}
      >
        {icon}
      </div>
      <span
        style={{
          fontSize: 22,
          fontWeight: 600,
          letterSpacing: '-0.025em',
          color: 'var(--text-primary)',
        }}
      >
        {name}
      </span>
    </div>
  );
}
