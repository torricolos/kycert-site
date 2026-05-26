'use client';

import { useState } from 'react';
import { PLATFORMS } from './platforms';
import { downloadAllZip } from './download';

export default function Hero() {
  const [busy, setBusy] = useState(false);

  return (
    <header style={{ padding: '80px 32px 40px', maxWidth: 1200, margin: '0 auto' }}>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--text-tertiary)',
        }}
      >
        Brand assets · v1
      </div>
      <h1
        style={{
          margin: '16px 0 0',
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-0.045em',
          lineHeight: 1.05,
        }}
      >
        Social media kit.
      </h1>
      <p
        style={{
          marginTop: 14,
          fontSize: 18,
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          maxWidth: 640,
        }}
      >
        Avatares, capas e templates de post pra todas as redes. Nos tamanhos exatos
        que cada plataforma pede, sem aproximação.
      </p>
      <div style={{ marginTop: 28, display: 'flex', gap: 10 }}>
        <button
          onClick={async () => {
            setBusy(true);
            try {
              await downloadAllZip(PLATFORMS);
            } catch (e) {
              alert('Erro: ' + (e as Error).message);
            }
            setBusy(false);
          }}
          disabled={busy}
          style={{
            padding: '14px 22px',
            borderRadius: 10,
            background: busy ? 'var(--text-tertiary)' : 'var(--text-primary)',
            color: 'var(--surface-canvas)',
            border: 'none',
            cursor: busy ? 'wait' : 'pointer',
            fontFamily: 'inherit',
            fontSize: 15,
            fontWeight: 600,
          }}
        >
          {busy ? 'Gerando zip…' : 'Baixar kit completo (.zip)'}
        </button>
      </div>
    </header>
  );
}
