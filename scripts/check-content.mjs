// Valida posts e termos de glossário. Uso:
//   node scripts/check-content.mjs                      (todos)
//   node scripts/check-content.mjs content/blog/x.ts    (arquivos específicos)
import { readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const root = new URL('../', import.meta.url);
const strip = (h) => h.replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ');
const words = (h) => strip(h).split(/\s+/).filter(Boolean).length;

const args = process.argv.slice(2);
const list = (dir) => readdirSync(new URL(dir, root)).filter((f) => f.endsWith('.ts')).map((f) => `${dir}${f}`);
const files = args.length ? args : [...list('content/blog/'), ...list('content/glossario/')];

let errors = 0;
const err = (f, m) => {
  errors++;
  console.log(`  ERRO  ${m}`);
};

for (const f of files) {
  const rel = f.replace(/\\/g, '/');
  const isPost = rel.includes('content/blog/');
  const mod = await import(rel.startsWith('content/') ? new URL(rel, root).href : pathToFileURL(resolve(rel)).href);
  const d = mod.default;
  const slug = rel.split('/').pop().replace(/\.ts$/, '');
  const faq = d.faq ?? [];
  const body = d.body ?? '';
  const total = words(isPost ? d.lead : d.shortDef) + words(body) + faq.reduce((n, x) => n + words(x.q) + words(x.a), 0);
  const all = JSON.stringify(d);
  const links = [...body.matchAll(/href="(\/[^"#]*)/g)].map((m) => m[1]);
  const uniq = new Set(links);
  const prodSol = links.filter((l) => l.startsWith('/produto') || l.startsWith('/solucoes')).length;
  const posts = links.filter((l) => l.startsWith('/blog/')).length;
  const gloss = links.filter((l) => l.startsWith('/glossario/')).length;
  const h2 = (body.match(/<h2>/g) ?? []).length;
  console.log(`${rel}: ${total} palavras, ${links.length} links (${prodSol} prod/sol, ${posts} posts, ${gloss} glossário), ${h2} h2, ${faq.length} faq`);

  if (d.slug !== slug) err(f, `slug "${d.slug}" difere do nome do arquivo "${slug}"`);
  if (/[—–]/.test(all)) err(f, 'contém travessão (— ou –)');
  if (/style=|<script|<img/i.test(body)) err(f, 'body tem style inline, script ou img');
  if (!d.metaTitle || d.metaTitle.length > 62) err(f, `metaTitle ausente ou longo (${d.metaTitle?.length})`);
  if (!d.description || d.description.length < 120 || d.description.length > 160) err(f, `description fora de 120-160 (${d.description?.length})`);
  if (isPost) {
    if (total < 1500) err(f, `menos de 1.500 palavras (${total})`);
    if (prodSol < 3) err(f, 'menos de 3 links para produto/solução no body');
    if (links.length < 6) err(f, 'menos de 6 links internos no body');
    if (posts < 2) err(f, 'menos de 2 links para outros posts');
    if (gloss < 2) err(f, 'menos de 2 links para o glossário');
    if (h2 < 4) err(f, 'menos de 4 seções h2');
    if (faq.length < 3) err(f, 'menos de 3 perguntas no FAQ');
    if (!(d.related?.length >= 3)) err(f, 'related precisa de 3+ slugs');
    if (!(d.solutions?.length >= 2)) err(f, 'solutions precisa de 2+ links');
    if (!d.figure?.alt) err(f, 'figure.alt ausente');
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d.datePublished) || !/^\d{4}-\d{2}-\d{2}$/.test(d.dateModified)) err(f, 'datas inválidas');
    if (d.dateModified < d.datePublished) err(f, 'dateModified anterior a datePublished');
  } else {
    if (total < 400 || total > 650) err(f, `fora de 400-650 palavras (${total})`);
    const sd = words(d.shortDef);
    if (sd < 20 || sd > 55) err(f, `shortDef com ${sd} palavras (ideal 25-45)`);
    if (faq.length < 2) err(f, 'menos de 2 perguntas no FAQ');
    if (!(d.relatedTerms?.length >= 2)) err(f, 'relatedTerms precisa de 2+');
  }
}
console.log(errors ? `\n${errors} erro(s)` : '\nOK');
process.exit(errors ? 1 : 0);
