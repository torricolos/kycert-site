'use client';

import type { DrawFn } from './drawing';

export async function downloadPng(draw: DrawFn, w: number, h: number, filename: string) {
  if (document.fonts?.ready) await document.fonts.ready;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  draw(ctx, w, h);
  const blob: Blob = await new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/png'),
  );
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 500);
}

import type { Platform } from './platforms';

export async function downloadAllZip(platforms: Platform[]) {
  const { default: JSZip } = await import('jszip');
  if (document.fonts?.ready) await document.fonts.ready;
  const zip = new JSZip();

  for (const p of platforms) {
    for (const item of p.items) {
      for (const dl of item.downloads) {
        const [size, name] = dl;
        const [w, h] = Array.isArray(size) ? size : [size, size];
        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) continue;
        item.draw(ctx, w, h);
        const blob: Blob = await new Promise((resolve, reject) =>
          canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('toBlob failed'))), 'image/png'),
        );
        const slug = p.name.toLowerCase().replace(/[^a-z0-9]/g, '-');
        zip.file(`${slug}/${name}`, blob);
      }
    }
  }

  zip.file(
    'README.txt',
    `KYCERT — Social media kit
v1.0 · ${new Date().toISOString().slice(0, 10)}

Pacotes por plataforma. Cada subpasta contém avatar, capa e templates de post
no tamanho exato da plataforma. Cor padrão do ponto: verde Signal #1F8A5B.
`,
  );

  const blob = await zip.generateAsync({ type: 'blob' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'kycert-social-kit-v1.zip';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 500);
}
