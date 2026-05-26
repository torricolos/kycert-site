'use client';

import { useEffect, useRef } from 'react';
import type { DrawFn } from './drawing';

type PreviewProps = {
  draw: DrawFn;
  w: number;
  h: number;
  isCircle?: boolean;
};

export default function Preview({ draw, w, h, isCircle = false }: PreviewProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  const maxDisplay = 280;
  const ratio = w / h;
  let dW: number;
  let dH: number;
  if (ratio >= 1) {
    dW = Math.min(w, maxDisplay);
    dH = dW / ratio;
  } else {
    dH = Math.min(h, maxDisplay);
    dW = dH * ratio;
  }
  dW = Math.round(dW);
  dH = Math.round(dH);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = dW * dpr;
    canvas.height = dH * dpr;
    canvas.style.width = `${dW}px`;
    canvas.style.height = `${dH}px`;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);
    const render = () => draw(ctx, dW, dH);
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(render);
    } else {
      render();
    }
  }, [draw, dW, dH]);

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid var(--border-default)',
        lineHeight: 0,
      }}
    >
      <canvas ref={ref} style={isCircle ? { borderRadius: '50%' } : undefined} />
    </div>
  );
}
