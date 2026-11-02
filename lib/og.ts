import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { BASE, DEFAULT_OG } from './site';

/** OG específica da página (public/images/og/<nome>.png), com fallback para a imagem padrão da marca. */
export function ogImage(name: string): string {
  return existsSync(join(process.cwd(), 'public', 'images', 'og', `${name}.png`)) ? `${BASE}/images/og/${name}.png` : DEFAULT_OG;
}
