import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "Travel Rule no Brasil: prazos e regras da Res. BCB 520",
  description:
    "A Travel Rule obriga PSAVs a enviar dados do remetente e do beneficiário em cada transferência de cripto. Veja os campos, as etapas de 2027 e 2028 e como se preparar.",
  alternates: { canonical: "/blog/travel-rule-brasil" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/travel-rule-brasil",
    siteName: 'kycert',
    title: "Travel Rule no Brasil: prazos e regras da Res. BCB 520 | kycert",
    description:
      "A Travel Rule obriga PSAVs a enviar dados do remetente e do beneficiário em cada transferência de cripto. Veja os campos, as etapas de 2027 e 2028 e como se preparar.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Travel Rule no Brasil: prazos e regras da Res. BCB 520 | kycert",
    description:
      "A Travel Rule obriga PSAVs a enviar dados do remetente e do beneficiário em cada transferência de cripto. Veja os campos, as etapas de 2027 e 2028 e como se preparar.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Travel Rule no Brasil: o que a Resolução BCB 520 exige e quais são os prazos","description":"A Travel Rule obriga PSAVs a enviar dados do remetente e do beneficiário em cada transferência de cripto. Veja os campos, as etapas de 2027 e 2028 e como se preparar.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/travel-rule-brasil","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é Travel Rule?","acceptedAnswer":{"@type":"Answer","text":"É a regra que exige que os dados do remetente e do beneficiário acompanhem as transferências de ativos virtuais entre prestadoras. A origem é a Recomendação 16 do Gafi."}},{"@type":"Question","name":"A Travel Rule já vale no Brasil?","acceptedAnswer":{"@type":"Answer","text":"A Res. BCB 520 está em vigor desde 2 de fevereiro de 2026. A implantação é escalonada: até 2/02/2027 entre PSAVs no país, mais um ano para as operações internacionais, com obrigatoriedade plena a partir de 2/02/2028."}},{"@type":"Question","name":"Quais dados são exigidos?","acceptedAnswer":{"@type":"Answer","text":"Do originador: nome, conta, endereço, CPF/CNPJ e carteira. Do beneficiário: nome, conta e carteira (art. 44 da Res. 520)."}},{"@type":"Question","name":"Existe valor mínimo para aplicar a Travel Rule?","acceptedAnswer":{"@type":"Answer","text":"O art. 44 da Res. 520 não estabelece valor mínimo. Ele se refere às \\"operações envolvendo ativos virtuais\\"."}},{"@type":"Question","name":"Como fica a transferência para carteira autocustodiada?","acceptedAnswer":{"@type":"Answer","text":"Não há contraparte para receber a mensagem. A Res. 521 exige identificar o proprietário da carteira e verificar origem e destino dos ativos. A Res. 584 prevê retenção de 24h acima de US$ 10 mil a partir de 2027."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Travel Rule"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Travel Rule</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">PSAV / regulação</div>
<h1>Travel Rule no Brasil: o que a Resolução BCB 520 exige e quais são os prazos</h1>
<div class="art-meta"><span>Travel Rule</span><span>01/10/2026</span><span>8 min de leitura</span></div>
<p class="lead-p"><strong>Travel Rule é a regra que obriga a prestadora de serviços de ativos virtuais a enviar, junto com cada transferência, os dados de quem envia (originador) e de quem recebe (beneficiário).</strong> O nome vem da ideia de que a informação "viaja" com o dinheiro, como já acontece nas transferências bancárias.</p>
<p>No Brasil, a regra está no <strong>art. 44 da <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&amp;numero=520" target="_blank" rel="noopener">Resolução BCB nº 520/2025</a></strong>. A implantação tem duas etapas:</p>
<ul><li><strong>até 2 de fevereiro de 2027</strong>, para transferências entre PSAVs no país;</li><li><strong>mais 365 dias</strong>, para as operações internacionais.</li></ul>
<p>O cumprimento é obrigatório para todas as PSAVs autorizadas a partir de <strong>2 de fevereiro de 2028</strong>.</p>
<h2>De onde vem a Travel Rule</h2>
<p>A origem é a <strong>Recomendação 16 do Gafi (FATF)</strong>, sobre transparência de pagamentos, aplicada aos ativos virtuais pela Recomendação 15. Em junho de 2025, o Gafi aprovou uma <a href="https://www.fatf-gafi.org/en/publications/Fatfrecommendations/update-Recommendation-16-payment-transparency-june-2025.html" target="_blank" rel="noopener">revisão da Recomendação 16</a> para padronizar as informações que acompanham os pagamentos, com implementação prevista até o fim de 2030.</p>
<p>O padrão internacional é a referência. Para quem opera no Brasil, porém, o que vale são os campos e prazos da Res. 520.</p>
<h2>Quais dados precisam acompanhar a transferência</h2>
<p>Pelo parágrafo único do art. 44, a PSAV deve fornecer à instituição que recebe os recursos:</p>
<div class="art-table"><table><thead><tr><th>Originador (quem envia)</th><th>Beneficiário (quem recebe)</th></tr></thead><tbody><tr><td>Nome ou denominação comercial</td><td>Nome ou denominação comercial</td></tr><tr><td>Identificação completa da conta de pagamento ou de depósito (ou equivalente internacional)</td><td>Identificação completa da conta de pagamento ou de depósito (ou equivalente internacional)</td></tr><tr><td>Endereço de residência ou domicílio</td><td>Não exigido</td></tr><tr><td>CPF ou CNPJ (ou identificação internacional equivalente)</td><td>Não exigido</td></tr><tr><td>Identificação da carteira de ativos virtuais da transação</td><td>Identificação da carteira de ativos virtuais da transação</td></tr></tbody></table></div>
<p>Os dados do originador vêm do <a href="/blog/o-que-e-kyc">KYC</a>. Se o cadastro está incompleto ou desatualizado, a mensagem da Travel Rule sai incompleta.</p>
<h2>As duas etapas de implantação (art. 89)</h2>
<div class="art-table"><table><thead><tr><th>Etapa</th><th>Escopo</th><th>Prazo</th></tr></thead><tbody><tr><td>I: mercado nacional</td><td>Transferência de informações entre PSAVs estabelecidas no país</td><td>Até 365 dias da vigência da Res. 520 (2/02/2026), ou seja, <strong>2/02/2027</strong></td></tr><tr><td>II: mercado internacional</td><td>Operações no exterior, incluindo entidades estrangeiras com quem a PSAV mantém relação comercial</td><td>Até 365 dias após o fim da etapa I</td></tr><tr><td>Obrigatoriedade plena</td><td>Todas as PSAVs autorizadas</td><td><strong>2/02/2028</strong> (art. 89, § 3º)</td></tr></tbody></table></div>
<h3>O que vale enquanto as etapas não terminam</h3>
<p>Até a conclusão das etapas, o § 1º do art. 89 permite que a PSAV:</p>
<ul><li>use <strong>autodeclarações</strong> dos clientes para identificar cliente, beneficiário, ativo, montante e finalidade da transação;</li><li>faça <strong>análise das operações com base em risco</strong>.</li></ul>
<p>As autodeclarações precisam ser documentadas e ficar à disposição do Banco Central (§ 2º).</p>
<blockquote><p><strong>Ponto de atenção:</strong> autodeclaração é uma faculdade de transição, não uma dispensa. A informação declarada pelo cliente precisa ser confrontada com o que a PSAV sabe sobre ele e sobre a transação. É aqui que entram o <a href="/blog/o-que-e-kyt">KYT</a> e a <a href="/blog/analise-de-carteiras-cripto">análise de carteiras</a>.</p></blockquote>
<h2>Obrigações que andam junto com a Travel Rule</h2>
<ul><li><strong>Adequar controles internos</strong> à regra (art. 45, I).</li><li><strong>Guardar registros das transações por no mínimo cinco anos</strong>, à disposição do Banco Central (art. 45, II).</li><li><strong>Identificar e registrar operações suspeitas</strong> conforme a regulamentação de PLD/FT (art. 45, III).</li><li><strong>Avisar o Banco Central</strong> sobre dificuldades de controle causadas por práticas de outras instituições (art. 46). Isso vale, por exemplo, quando uma contraparte nacional não envia os dados.</li><li><strong>Conhecer clientes, parceiros e prestadores</strong> nos procedimentos de monitoramento (art. 47).</li></ul>
<h2>Travel Rule e carteiras autocustodiadas</h2>
<p>A Travel Rule pressupõe uma instituição do outro lado para receber os dados. Na transferência para uma <strong>carteira autocustodiada</strong>, não há contraparte para receber a mensagem.</p>
<p>Para esses casos, a Res. BCB 521/2025 incluiu no mercado de câmbio as transferências de e para carteiras autocustodiadas. Ela também passou a exigir que a PSAV <strong>identifique o proprietário da carteira autocustodiada</strong> e tenha processos documentados para verificar a origem e o destino dos ativos (art. 76-A, § 5º, da Res. BCB 277).</p>
<p>A partir de 1º/01/2027, as transferências para autocustódia e para o exterior acima de US$ 10 mil também passam pela <a href="/blog/resolucao-bcb-584-retencao-24h-cripto">retenção cautelar de 24h da Res. BCB 584</a>.</p>
<h2>Como se preparar para a etapa I</h2>
<ol><li><strong>Mapeie as contrapartes nacionais.</strong> Quais PSAVs recebem e enviam ativos para os seus clientes com mais frequência.</li><li><strong>Escolha o protocolo ou fornecedor de mensagens.</strong> O mercado usa soluções de interoperabilidade entre VASPs. Verifique quais as suas contrapartes adotam.</li><li><strong>Garanta a qualidade do cadastro.</strong> Nome, CPF/CNPJ, endereço e conta do originador precisam estar completos e validados.</li><li><strong>Defina o que fazer quando os dados não chegam.</strong> Reter, devolver, pedir complemento ou aceitar com análise reforçada. A decisão precisa estar na política, baseada em risco.</li><li><strong>Defina o que fazer quando os dados não batem.</strong> Nome do beneficiário diferente do titular da conta de destino é um sinal clássico de <a href="/blog/contas-laranja-contas-de-passagem">conta laranja</a>.</li><li><strong>Organize os registros.</strong> Mensagens enviadas e recebidas, autodeclarações e decisões, guardadas por cinco anos.</li></ol>
<h2>Perguntas frequentes</h2>
<h3>O que é Travel Rule?</h3>
<p>É a regra que exige que os dados do remetente e do beneficiário acompanhem as transferências de ativos virtuais entre prestadoras. A origem é a Recomendação 16 do Gafi.</p>
<h3>A Travel Rule já vale no Brasil?</h3>
<p>A Res. BCB 520 está em vigor desde 2 de fevereiro de 2026. A implantação é escalonada: até 2/02/2027 entre PSAVs no país, mais um ano para as operações internacionais, com obrigatoriedade plena a partir de 2/02/2028.</p>
<h3>Quais dados são exigidos?</h3>
<p>Do originador: nome, conta, endereço, CPF/CNPJ e carteira. Do beneficiário: nome, conta e carteira (art. 44 da Res. 520).</p>
<h3>Existe valor mínimo para aplicar a Travel Rule?</h3>
<p>O art. 44 da Res. 520 não estabelece valor mínimo. Ele se refere às "operações envolvendo ativos virtuais".</p>
<h3>Como fica a transferência para carteira autocustodiada?</h3>
<p>Não há contraparte para receber a mensagem. A Res. 521 exige identificar o proprietário da carteira e verificar origem e destino dos ativos. A Res. 584 prevê retenção de 24h acima de US$ 10 mil a partir de 2027.</p>
<h2>Conclusão</h2>
<p>A Travel Rule muda a transferência de cripto de "endereço para endereço" para "pessoa para pessoa". A etapa nacional termina em fevereiro de 2027. Na prática, o trabalho é menos tecnológico do que parece: a mensagem só é tão boa quanto o cadastro que a alimenta, e a política para quando os dados faltam precisa estar escrita antes de o primeiro caso aparecer.</p>
<div class="art-cta"><p><strong>A Travel Rule começa no cadastro.</strong> A kycert valida identidade, PEP, sanções e mídia adversa e registra a decisão sobre cada cliente: a base que alimenta os dados do originador.</p><div class="cta"><a href="/solucoes/psav" class="btn btn-primary btn-lg">Conhecer a solução para PSAV</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/resolucao-bcb-520-psav">Resolução BCB 520/2025 para PSAV →</a><a href="/blog/o-que-e-kyt">O que é KYT →</a><a href="/blog/resolucao-bcb-584-retencao-24h-cripto">Resolução BCB 584 →</a></div>
</article></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="recursos" />
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
