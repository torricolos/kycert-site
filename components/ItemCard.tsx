'use client';

import Preview from './Preview';
import { downloadPng } from './download';
import type { PlatformItem } from './platforms';

type Props = { item: PlatformItem };

export default function ItemCard({ item }: Props) {
  const [w, h] = item.size;
  const isCircle = item.kind === 'avatar';

  return (
    <div
      style={{
        padding: 20,
        borderRadius: 12,
        background: 'var(--surface-canvas)',
        border: '1px solid var(--border-default)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-primary)' }}>
            {item.label}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-tertiary)',
              marginTop: 2,
            }}
          >
            {w}×{h}px
          </div>
        </div>
        <span
          style={{
            padding: '3px 8px',
            borderRadius: 999,
            background: 'var(--surface-sunken)',
            fontSize: 10,
            fontWeight: 600,
            color: 'var(--text-secondary)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          {item.kind}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: 120,
        }}
      >
        <Preview draw={item.draw} w={w} h={h} isCircle={isCircle} />
      </div>

      <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.45 }}>
        {item.rec}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {item.downloads.map((dl, i) => {
          const [size, name] = dl;
          const [dw, dh] = Array.isArray(size) ? size : [size, size];
          return (
            <button
              key={i}
              onClick={() => downloadPng(item.draw, dw, dh, name)}
              style={{
                padding: '8px 12px',
                borderRadius: 6,
                background: 'var(--text-primary)',
                color: 'var(--surface-canvas)',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: '-0.005em',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span>↓ Baixar PNG</span>
              <span
                style={{ opacity: 0.6, fontFamily: 'var(--font-mono)', fontSize: 11 }}
              >
                {dw}×{dh}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
