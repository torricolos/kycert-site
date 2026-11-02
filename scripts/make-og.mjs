// Gera as imagens OG (1200x630) por página em public/images/og.
//   node scripts/make-og.mjs            (todas)
//   node scripts/make-og.mjs lista-pep  (só nomes que contêm o texto)
// Requer playwright-core + um Chromium. Defina PW_DIR (pasta que contém node_modules/playwright-core)
// e, se preciso, CHROME_PATH (executável do Chromium). PNG estático de propósito: OG dinâmico falhou em produção.
import { readdirSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';

const root = new URL('../', import.meta.url);
const outDir = new URL('public/images/og/', root);
mkdirSync(outDir, { recursive: true });

const req = createRequire((process.env.PW_DIR ?? new URL('.', root).pathname.replace(/^\/([A-Za-z]:)/, '$1')).replace(/\/?$/, '/'));
const { chromium } = req('playwright-core');

const filter = process.argv[2];
const items = [];
const list = (d) => readdirSync(new URL(d, root)).filter((f) => f.endsWith('.ts'));
for (const f of list('content/blog/')) {
  const p = (await import(new URL(`content/blog/${f}`, root).href)).default;
  items.push({ name: `blog-${p.slug}`, kicker: p.eyebrow, title: p.title });
}
for (const f of list('content/glossario/')) {
  const t = (await import(new URL(`content/glossario/${f}`, root).href)).default;
  items.push({ name: `glossario-${t.slug}`, kicker: 'Glossário', title: `${t.term}: ${t.fullName}` });
}
items.push({ name: 'glossario', kicker: 'Glossário', title: 'Glossário de KYC, KYB e PLD/FT' });
items.push({ name: 'sobre', kicker: 'Sobre', title: 'Sobre a kycert e como produzimos o conteúdo' });

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const page = (it) => {
  const size = it.title.length > 95 ? 46 : it.title.length > 70 ? 54 : 62;
  return `<!doctype html><meta charset="utf-8"><style>
*{box-sizing:border-box;margin:0}body{width:1200px;height:630px;background:#0E1116;color:#fff;font-family:Inter,'Segoe UI',Arial,sans-serif;position:relative;overflow:hidden}
.bar{position:absolute;left:0;top:0;bottom:0;width:14px;background:#1F8A5B}
.wrap{position:absolute;left:84px;right:84px;top:70px;bottom:64px;display:flex;flex-direction:column}
.brand{font-size:40px;font-weight:800;letter-spacing:-.03em}.brand i{color:#3FBE88;font-style:normal}
.k{margin-top:auto;font-size:22px;letter-spacing:.16em;text-transform:uppercase;color:#3FBE88;font-weight:600;margin-bottom:22px}
h1{font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:${size}px;line-height:1.1;letter-spacing:-.02em;max-width:1000px}
.f{margin-top:34px;font-size:24px;color:#9AA3AD}
</style><div class="bar"></div><div class="wrap"><div class="brand">kycert<i>.</i></div><div class="k">${esc(it.kicker)}</div><h1>${esc(it.title)}</h1><div class="f">kycert.com.br</div></div>`;
};

const browser = await chromium.launch(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {});
const pg = await browser.newPage({ viewport: { width: 1200, height: 630 } });
let n = 0;
for (const it of items) {
  if (filter && !it.name.includes(filter)) continue;
  await pg.setContent(page(it));
  await pg.screenshot({ path: new URL(`${it.name}.png`, outDir).pathname.replace(/^\/([A-Za-z]:)/, '$1'), type: 'png' });
  n++;
}
await browser.close();
console.log(`${n} imagens OG em public/images/og`);
