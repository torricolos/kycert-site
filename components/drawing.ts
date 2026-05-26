'use client';

// ============================================================
// Drawing primitives — canvas painters for marks and covers.
// Keep all colors/typography inline so each painter is portable.
// ============================================================

export const C = {
  ink: '#0E1116',
  paper: '#FFFFFF',
  app: '#F7F8FA',
  signal: '#1F8A5B',
  border: '#E5E7EB',
  muted: '#5C636A',
} as const;

type Ctx = CanvasRenderingContext2D;

export function paintWordmark(
  ctx: Ctx,
  cx: number,
  cy: number,
  fontSize: number,
  opts: { fg?: string; dot?: string; weight?: number } = {},
): number {
  const { fg = C.ink, dot = C.signal, weight = 700 } = opts;
  ctx.save();
  ctx.font = `${weight} ${fontSize}px "Inter Tight", system-ui, Helvetica, Arial, sans-serif`;
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  const tracking = -0.05;
  const chars = 'kycert'.split('');
  const widths = chars.map((c) => ctx.measureText(c).width);
  const wordW = widths.reduce((s, w) => s + w, 0) + (chars.length - 1) * tracking * fontSize;
  const dotSize = fontSize * 0.17;
  const dotGap = dotSize * 0.4;
  const total = wordW + dotGap + dotSize;
  const startX = cx - total / 2;
  const baselineY = cy + fontSize * 0.32;
  let x = startX;
  ctx.fillStyle = fg;
  for (let i = 0; i < chars.length; i++) {
    ctx.fillText(chars[i], x, baselineY);
    x += widths[i] + tracking * fontSize;
  }
  ctx.fillStyle = dot;
  ctx.beginPath();
  ctx.arc(x + dotGap + dotSize / 2, baselineY - dotSize * 0.4, dotSize / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  return total;
}

export function roundRect(ctx: Ctx, x: number, y: number, w: number, h: number, r: number) {
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

export function paintMark(
  ctx: Ctx,
  x: number,
  y: number,
  size: number,
  opts: { bg?: string; fg?: string; dot?: string; radius?: number } = {},
) {
  const { bg = C.ink, fg = C.paper, dot = C.signal, radius = 0.22 } = opts;
  ctx.save();
  const r = size * radius;
  ctx.fillStyle = bg;
  ctx.beginPath();
  roundRect(ctx, x, y, size, size, r);
  ctx.fill();
  const fs = size * 0.66;
  ctx.font = `800 ${fs}px "Inter Tight", system-ui, Helvetica, Arial, sans-serif`;
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'center';
  ctx.fillStyle = fg;
  ctx.fillText('k', x + size * 0.42, y + size * 0.72);
  const ds = size * 0.13;
  ctx.fillStyle = dot;
  ctx.beginPath();
  ctx.arc(x + size * 0.74, y + size * 0.72 - ds * 0.4, ds / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

// ── AVATAR DRAWERS  ─────────────────────────────────────────
export function drawAvatarSquare(ctx: Ctx, w: number, h: number) {
  ctx.fillStyle = C.app;
  ctx.fillRect(0, 0, w, h);
  paintMark(ctx, 0, 0, Math.min(w, h));
}

export function drawAvatarCircle(ctx: Ctx, w: number, h: number) {
  ctx.fillStyle = C.app;
  ctx.fillRect(0, 0, w, h);
  ctx.save();
  ctx.beginPath();
  ctx.arc(w / 2, h / 2, Math.min(w, h) / 2, 0, Math.PI * 2);
  ctx.clip();
  paintMark(ctx, 0, 0, Math.min(w, h), { radius: 0.5 });
  ctx.restore();
}

// ── COVER DRAWERS  ──────────────────────────────────────────
export function drawCoverEditorial(ctx: Ctx, w: number, h: number) {
  ctx.fillStyle = C.app;
  ctx.fillRect(0, 0, w, h);
  const pad = Math.min(w, h) * 0.1;
  const claim1 = 'A camada de certificação';
  const claim2 = 'de mercados regulados.';
  const maxLineW = w - pad * 2;
  let fs = h * 0.18;
  ctx.font = `italic 400 ${fs}px "Instrument Serif", Georgia, serif`;
  while (ctx.measureText(claim1).width > maxLineW && fs > 16) {
    fs -= 2;
    ctx.font = `italic 400 ${fs}px "Instrument Serif", Georgia, serif`;
  }
  ctx.fillStyle = C.ink;
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  const lineH = fs * 1.1;
  const startY = (h - lineH * 2) / 2 + fs * 0.85;
  ctx.fillText(claim1, pad, startY);
  ctx.fillStyle = C.muted;
  ctx.fillText(claim2, pad, startY + lineH);
  const markSize = Math.min(w, h) * 0.1;
  const corner = pad * 0.6;
  paintMark(ctx, w - corner - markSize, h - corner - markSize, markSize);
}

export function drawCoverDark(ctx: Ctx, w: number, h: number) {
  ctx.fillStyle = C.ink;
  ctx.fillRect(0, 0, w, h);
  const cx = w / 2;
  const cy = h / 2;
  let wordFs = h * 0.28;
  const target = w * 0.62;
  const tracking = -0.05;
  const measure = (size: number) => {
    ctx.font = `700 ${size}px "Inter Tight", system-ui, Helvetica, Arial, sans-serif`;
    let totalW = 0;
    'kycert'.split('').forEach((c, i) => {
      totalW += ctx.measureText(c).width;
      if (i < 5) totalW += tracking * size;
    });
    return totalW + size * 0.17 + size * 0.17 * 0.4;
  };
  while (measure(wordFs) > target && wordFs > 24) wordFs -= 4;
  paintWordmark(ctx, cx, cy - h * 0.08, wordFs, { fg: C.paper, dot: C.signal });
  const taglineFs = Math.min(wordFs * 0.2, h * 0.07);
  ctx.font = `italic 400 ${taglineFs}px "Instrument Serif", Georgia, serif`;
  ctx.fillStyle = 'rgba(255,255,255,0.55)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText('A camada de certificação de mercados regulados.', cx, cy + h * 0.18);
}

export function drawCoverSplit(ctx: Ctx, w: number, h: number) {
  const leftW = w * 0.42;
  ctx.fillStyle = C.ink;
  ctx.fillRect(0, 0, leftW, h);
  ctx.fillStyle = C.paper;
  ctx.fillRect(leftW, 0, w - leftW, h);
  const markSize = Math.min(leftW, h) * 0.45;
  paintMark(ctx, leftW / 2 - markSize / 2, (h - markSize) / 2, markSize, {
    bg: C.paper,
    fg: C.ink,
    dot: C.signal,
  });
  const padL = leftW + (w - leftW) * 0.1;
  const rightW = (w - leftW) * 0.8;
  ctx.fillStyle = C.ink;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  let fs = h * 0.18;
  ctx.font = `700 ${fs}px "Inter Tight", system-ui, Helvetica, Arial, sans-serif`;
  while (ctx.measureText('kycert').width * 1.05 > rightW && fs > 20) {
    fs -= 2;
    ctx.font = `700 ${fs}px "Inter Tight", system-ui, Helvetica, Arial, sans-serif`;
  }
  ctx.save();
  ctx.translate(padL, 0);
  const fontSize = fs;
  const tracking = -0.05;
  const chars = 'kycert'.split('');
  const widths = chars.map((c) => ctx.measureText(c).width);
  let x = 0;
  const baselineY = h / 2 - h * 0.02;
  ctx.fillStyle = C.ink;
  for (let i = 0; i < chars.length; i++) {
    ctx.fillText(chars[i], x, baselineY);
    x += widths[i] + tracking * fontSize;
  }
  const ds = fontSize * 0.17;
  const dotGap = ds * 0.4;
  ctx.fillStyle = C.signal;
  ctx.beginPath();
  ctx.arc(x + dotGap + ds / 2, baselineY - ds * 0.4, ds / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
  const tagFs = Math.min(fs * 0.35, h * 0.09);
  ctx.font = `italic 400 ${tagFs}px "Instrument Serif", Georgia, serif`;
  ctx.fillStyle = C.muted;
  ctx.fillText('A camada de certificação', padL, h / 2 + tagFs * 1.4);
  ctx.fillText('de mercados regulados.', padL, h / 2 + tagFs * 1.4 + tagFs * 1.2);
}

export function drawCoverStory(ctx: Ctx, w: number, h: number) {
  ctx.fillStyle = C.app;
  ctx.fillRect(0, 0, w, h);
  const markSize = w * 0.18;
  paintMark(ctx, (w - markSize) / 2, h * 0.18, markSize);
  const padX = w * 0.1;
  const lines = ['A camada', 'de certificação', 'de mercados', 'regulados.'];
  let fs = w * 0.13;
  ctx.font = `italic 400 ${fs}px "Instrument Serif", Georgia, serif`;
  const maxLine = w - padX * 2;
  while (Math.max(...lines.map((l) => ctx.measureText(l).width)) > maxLine && fs > 24) {
    fs -= 4;
    ctx.font = `italic 400 ${fs}px "Instrument Serif", Georgia, serif`;
  }
  const lineH = fs * 1.05;
  const blockH = lineH * lines.length;
  const startY = h * 0.5 - blockH / 2 + fs * 0.85;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  lines.forEach((l, i) => {
    ctx.fillStyle = i < 2 ? C.ink : C.muted;
    ctx.fillText(l, w / 2, startY + i * lineH);
  });
  const wmFs = w * 0.06;
  paintWordmark(ctx, w / 2, h * 0.9, wmFs);
}

export function drawPostQuote(ctx: Ctx, w: number, h: number) {
  ctx.fillStyle = C.ink;
  ctx.fillRect(0, 0, w, h);
  const padX = w * 0.1;
  const lines = ['Compliance', 'que não trava.', 'Crescimento', 'que não para.'];
  let fs = h * 0.12;
  ctx.font = `italic 400 ${fs}px "Instrument Serif", Georgia, serif`;
  const maxLine = w - padX * 2;
  while (Math.max(...lines.map((l) => ctx.measureText(l).width)) > maxLine && fs > 28) {
    fs -= 4;
    ctx.font = `italic 400 ${fs}px "Instrument Serif", Georgia, serif`;
  }
  const lineH = fs * 1.05;
  const blockH = lineH * lines.length;
  const startY = (h - blockH) / 2 + fs * 0.85;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  lines.forEach((l, i) => {
    ctx.fillStyle = i < 2 ? C.paper : 'rgba(255,255,255,0.55)';
    ctx.fillText(l, padX, startY + i * lineH);
  });
  const wmFs = w * 0.04;
  ctx.save();
  ctx.textAlign = 'left';
  const tracking = -0.05;
  const chars = 'kycert'.split('');
  ctx.font = `700 ${wmFs}px "Inter Tight", system-ui, Helvetica, Arial, sans-serif`;
  const widths = chars.map((c) => ctx.measureText(c).width);
  let x = padX;
  const by = h - padX * 0.6;
  ctx.fillStyle = C.paper;
  for (let i = 0; i < chars.length; i++) {
    ctx.fillText(chars[i], x, by);
    x += widths[i] + tracking * wmFs;
  }
  const ds = wmFs * 0.17;
  ctx.fillStyle = C.signal;
  ctx.beginPath();
  ctx.arc(x + ds * 0.4 + ds / 2, by - ds * 0.4, ds / 2, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

export type DrawFn = (ctx: Ctx, w: number, h: number) => void;
