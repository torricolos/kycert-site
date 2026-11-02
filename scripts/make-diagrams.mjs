// Gera os diagramas SVG dos posts em public/images/blog. Rode: node scripts/make-diagrams.mjs
import { writeFileSync, mkdirSync } from 'node:fs';

const OUT = new URL('../public/images/blog/', import.meta.url);
mkdirSync(OUT, { recursive: true });

const INK = '#0E1116';
const GREEN = '#1F8A5B';
const PAPER = '#FFFFFF';
const SOFT = '#F3F5F4';
const LINE = '#D5DAD8';
const MUTED = '#5B616B';
const FONT = "Inter, 'Inter Tight', system-ui, -apple-system, 'Segoe UI', Arial, sans-serif";
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

function svg(w, h, title, desc, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-labelledby="t d" font-family="${FONT}">
<title id="t">${esc(title)}</title><desc id="d">${esc(desc)}</desc>
<defs><marker id="a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M1 1l8 4-8 4z" fill="${MUTED}"/></marker></defs>
<rect width="${w}" height="${h}" rx="16" fill="${PAPER}"/><rect x=".5" y=".5" width="${w - 1}" height="${h - 1}" rx="16" fill="none" stroke="${LINE}"/>
${inner}
<text x="${w - 28}" y="${h - 20}" text-anchor="end" font-size="14" fill="${MUTED}">kycert.com.br</text>
</svg>
`;
}
const t = (x, y, s, o = {}) =>
  `<text x="${x}" y="${y}" font-size="${o.size ?? 18}" font-weight="${o.w ?? 400}" fill="${o.fill ?? INK}" text-anchor="${o.anchor ?? 'start'}">${esc(s)}</text>`;
const box = (x, y, w, h, o = {}) =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 12}" fill="${o.fill ?? SOFT}" stroke="${o.stroke ?? LINE}" stroke-width="${o.sw ?? 1.5}"/>`;
const arrow = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${MUTED}" stroke-width="2" marker-end="url(#a)"/>`;
const heading = (s) => t(40, 56, s, { size: 26, w: 700 });
const save = (file, content) => writeFileSync(new URL(file, OUT), content);

function steps(file, title, desc, head, items, foot) {
  const n = items.length;
  const gap = 18;
  const w = 1200;
  const bw = (w - 80 - gap * (n - 1)) / n;
  let g = heading(head);
  items.forEach((it, i) => {
    const x = 40 + i * (bw + gap);
    const last = i === n - 1;
    g += box(x, 110, bw, 250, { fill: last ? '#E8F4EE' : SOFT, stroke: last ? GREEN : LINE });
    g += `<circle cx="${x + 34}" cy="150" r="18" fill="${INK}"/>` + t(x + 34, 156, String(i + 1), { size: 16, w: 700, fill: PAPER, anchor: 'middle' });
    g += t(x + 18, 205, it[0], { size: 21, w: 700 });
    it[1].forEach((ln, k) => {
      g += t(x + 18, 236 + k * 24, ln, { size: 15.5, fill: MUTED });
    });
    g += `<rect x="${x + 18}" y="318" width="${bw - 36}" height="28" rx="14" fill="#DDF0E6"/>` + t(x + bw / 2, 337, 'evidência registrada', { size: 13.5, w: 600, fill: GREEN, anchor: 'middle' });
    if (!last) g += arrow(x + bw + 2, 235, x + bw + gap - 2, 235);
  });
  g += t(40, 420, foot[0], { size: 17, fill: INK, w: 600 }) + t(40, 448, foot[1], { size: 15.5, fill: MUTED });
  save(file, svg(1200, 500, title, desc, g));
}

steps(
  'fluxo-onboarding-pld-ft.svg',
  'Fluxo de onboarding com registro de evidência para PLD/FT',
  'Seis etapas: convite, documento, verificações, risco, decisão e monitoramento, cada uma gerando evidência registrada.',
  'Onboarding de PLD/FT: cada etapa deixa evidência',
  [
    ['Convite', ['link enviado', 'com a sua marca']],
    ['Documento', ['captura e', 'leitura (OCR)']],
    ['Verificações', ['bases, sanções', 'e PEP cruzadas']],
    ['Risco', ['enquadrado pela', 'sua regra (ABR)']],
    ['Decisão', ['aprovar, recusar', 'ou escalar']],
    ['Monitoramento', ['reverificação', 'periódica']],
  ],
  ['Na fiscalização, a pergunta é "como você decidiu".', 'Cada etapa registrada com autor, data e fonte responde sem reconstrução manual.'],
);

// 2. Matriz ABR
{
  let g = heading('Da avaliação de risco à diligência aplicada');
  [['Fatores avaliados', 40], ['Enquadramento', 420], ['Diligência', 820]].forEach(([c, x]) => {
    g += t(x, 108, c, { size: 14, w: 700, fill: MUTED });
  });
  g += box(40, 124, 340, 270) + box(420, 124, 360, 270) + box(820, 124, 340, 270);
  ['Perfil do cliente', 'Produto ou serviço', 'Canal de contratação', 'Geografia e atividade'].forEach((s, i) => {
    g += `<circle cx="66" cy="${166 + i * 56}" r="6" fill="${GREEN}"/>` + t(84, 172 + i * 56, s, { size: 18 });
  });
  [['Baixo', '#DDF0E6', GREEN], ['Médio', '#FFF1D6', '#9A6A00'], ['Alto', '#FBE0DC', '#B3261E']].forEach(([lab, bg, fg], i) => {
    g += `<rect x="446" y="${148 + i * 78}" width="308" height="56" rx="10" fill="${bg}"/>` + t(470, 184 + i * 78, lab, { size: 20, w: 700, fill: fg });
  });
  [
    ['Diligência simplificada', 'dentro do que a norma admite'],
    ['Diligência padrão (CDD)', 'verificações regulares'],
    ['Diligência reforçada (EDD)', 'aprovação e monitoramento maiores'],
  ].forEach(([a, b], i) => {
    g += t(844, 176 + i * 78, a, { size: 17.5, w: 700 }) + t(844, 200 + i * 78, b, { size: 14.5, fill: MUTED });
  });
  g += arrow(384, 260, 416, 260) + arrow(784, 260, 816, 260);
  g += t(40, 436, 'Exemplo ilustrativo. Os critérios e pesos são os da avaliação interna de risco de cada instituição.', { size: 15.5, fill: MUTED });
  save('matriz-risco-abr.svg', svg(1200, 480, 'Matriz de abordagem baseada em risco', 'Fatores de risco levam a um enquadramento baixo, médio ou alto e a um nível de diligência: simplificada, padrão ou reforçada.', g));
}

// 3. Cadeia societária / UBO
{
  let g = heading('Da empresa cliente ao beneficiário final');
  const node = (x, y, w, lab, sub, o = {}) =>
    box(x, y, w, 70, o) + t(x + w / 2, y + 31, lab, { size: 17, w: 700, anchor: 'middle' }) + t(x + w / 2, y + 54, sub, { size: 13.5, fill: MUTED, anchor: 'middle' });
  const pf = { fill: '#E8F4EE', stroke: GREEN, sw: 2 };
  g += node(470, 84, 260, 'Empresa cliente (PJ)', 'quem pediu para abrir conta');
  g += node(150, 214, 260, 'Holding A (PJ)', '60% da empresa cliente') + node(790, 214, 260, 'Pessoa X (PF)', '40% direto', pf);
  g += node(20, 344, 240, 'Pessoa Y (PF)', '50% da Holding A', pf) + node(300, 344, 240, 'Pessoa Z (PF)', '50% da Holding A', pf);
  g += arrow(540, 154, 330, 212) + arrow(660, 154, 920, 212) + arrow(280, 284, 150, 342) + arrow(330, 284, 400, 342);
  g += t(620, 372, 'Participação indireta = percentuais multiplicados ao longo da cadeia', { size: 15.5, w: 600 });
  g += t(620, 398, 'Y: 60% x 50% = 30%   |   Z: 60% x 50% = 30%   |   X: 40%', { size: 15.5, fill: MUTED });
  g += t(620, 424, 'Verde: pessoas naturais acima de 25% (exemplo ilustrativo)', { size: 15.5, fill: GREEN, w: 600 });
  save('cadeia-societaria-ubo.svg', svg(1200, 480, 'Cadeia societária até o beneficiário final', 'Empresa cliente controlada pela Holding A (60%) e pela Pessoa X (40%); a Holding A pertence às Pessoas Y e Z (50% cada), que detêm 30% indireto cada.', g));
}

steps(
  'trilha-evidencia-fiscalizacao.svg',
  'Trilha de evidência apresentada numa fiscalização de PLD/FT',
  'Da pergunta do fiscalizador ao dossiê: identidade, fontes consultadas, risco enquadrado e decisão com autor e data.',
  'O que a fiscalização pede, e onde está a resposta',
  [
    ['Pergunta', ['"Como você', 'decidiu sobre', 'este cliente?"']],
    ['Identidade', ['documento e', 'dados verificados']],
    ['Fontes', ['o que foi consultado,', 'quando e com que', 'resultado']],
    ['Risco', ['enquadramento e', 'regra aplicada']],
    ['Decisão', ['quem decidiu,', 'quando e por quê']],
  ],
  ['Um dossiê por cliente, exportável em PDF.', 'O que foi registrado na hora tem mais valor do que o que se reconstrói depois.'],
);

// 5. Ciclo KYT
{
  let g = heading('Ciclo de monitoramento transacional (KYT)');
  const pts = [
    ['Transação', 'Pix, TED, câmbio, cripto'],
    ['Regras e cenários', 'limites, padrões, listas'],
    ['Alerta', 'transação fora do padrão'],
    ['Análise', 'contexto do cliente (KYC)'],
    ['Decisão', 'arquivar ou comunicar ao COAF'],
    ['Ajuste', 'calibrar regras com o resultado'],
  ];
  const cx = 600;
  const cy = 270;
  pts.forEach((p, i) => {
    const a = ((-90 + i * 60) * Math.PI) / 180;
    const x = cx + Math.cos(a) * 170 * 1.55;
    const y = cy + Math.sin(a) * 170 * 0.95;
    const hl = i === 3;
    g += box(x - 125, y - 34, 250, 68, { fill: hl ? '#E8F4EE' : SOFT, stroke: hl ? GREEN : LINE }) + t(x, y - 4, p[0], { size: 18, w: 700, anchor: 'middle' }) + t(x, y + 20, p[1], { size: 13.5, fill: MUTED, anchor: 'middle' });
  });
  g += arrow(735, 104, 820, 164) + arrow(865, 224, 865, 300) + arrow(820, 380, 735, 430) + arrow(465, 430, 380, 380) + arrow(335, 300, 335, 224) + arrow(380, 164, 465, 104);
  g += t(600, 270, 'KYC alimenta', { size: 15, fill: MUTED, anchor: 'middle' }) + t(600, 292, 'o perfil esperado', { size: 15, fill: MUTED, anchor: 'middle' });
  save('ciclo-kyt-monitoramento.svg', svg(1200, 500, 'Ciclo de monitoramento transacional', 'Transação, regras e cenários, alerta, análise com o contexto do KYC, decisão e ajuste das regras, em ciclo.', g));
}

// 6. CDD x EDD
{
  let g = heading('CDD ou EDD: o risco define a diligência');
  const red = { fill: '#FBEFEC', stroke: '#E4B5AD' };
  g += box(470, 84, 260, 60, { fill: INK, stroke: INK }) + t(600, 120, 'Novo cliente avaliado', { size: 18, w: 700, fill: PAPER, anchor: 'middle' });
  g += arrow(560, 146, 300, 214) + arrow(640, 146, 900, 214);
  g += box(100, 216, 400, 60) + t(300, 241, 'Risco baixo ou médio', { size: 18, w: 700, anchor: 'middle' }) + t(300, 263, 'sem PEP, sem apontamento relevante', { size: 14, fill: MUTED, anchor: 'middle' });
  g += box(700, 216, 400, 60, red) + t(900, 241, 'Risco alto, PEP ou apontamento', { size: 18, w: 700, anchor: 'middle' }) + t(900, 263, 'mídia adversa, jurisdição de risco', { size: 14, fill: MUTED, anchor: 'middle' });
  g += arrow(300, 278, 300, 322) + arrow(900, 278, 900, 322);
  g += box(100, 324, 400, 120, { fill: '#E8F4EE', stroke: GREEN }) + t(300, 356, 'CDD: diligência padrão', { size: 19, w: 700, anchor: 'middle' });
  ['identificação e qualificação', 'screening de sanções e PEP', 'decisão registrada'].forEach((s, i) => {
    g += t(300, 384 + i * 22, s, { size: 14.5, fill: MUTED, anchor: 'middle' });
  });
  g += box(700, 324, 400, 120, red) + t(900, 356, 'EDD: diligência reforçada', { size: 19, w: 700, anchor: 'middle' });
  ['origem de recursos e patrimônio', 'aprovação da alta gestão (PEP)', 'monitoramento mais frequente'].forEach((s, i) => {
    g += t(900, 384 + i * 22, s, { size: 14.5, fill: MUTED, anchor: 'middle' });
  });
  save('cdd-edd-decisao.svg', svg(1200, 490, 'Árvore de decisão CDD e EDD', 'Clientes de risco baixo ou médio seguem a diligência padrão (CDD); risco alto, PEP ou apontamento relevante exigem diligência reforçada (EDD).', g));
}
console.log('ok');
