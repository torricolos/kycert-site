import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "USDT e stablecoins: riscos e regras de compliance no Brasil",
  description:
    "Compra e venda de stablecoins como USDT passou a ser operação de câmbio, com limites e retenção de 24h a partir de 2027. Veja as regras e os riscos para PSAVs e OTCs.",
  alternates: { canonical: "/blog/usdt-stablecoins-risco-compliance" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/usdt-stablecoins-risco-compliance",
    siteName: 'kycert',
    title: "USDT e stablecoins: riscos e regras de compliance no Brasil | kycert",
    description:
      "Compra e venda de stablecoins como USDT passou a ser operação de câmbio, com limites e retenção de 24h a partir de 2027. Veja as regras e os riscos para PSAVs e OTCs.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "USDT e stablecoins: riscos e regras de compliance no Brasil | kycert",
    description:
      "Compra e venda de stablecoins como USDT passou a ser operação de câmbio, com limites e retenção de 24h a partir de 2027. Veja as regras e os riscos para PSAVs e OTCs.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"USDT e stablecoins: o que a regulação exige e onde estão os riscos de compliance","description":"Compra e venda de stablecoins como USDT passou a ser operação de câmbio, com limites e retenção de 24h a partir de 2027. Veja as regras e os riscos para PSAVs e OTCs.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/usdt-stablecoins-risco-compliance","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Comprar USDT é operação de câmbio?","acceptedAnswer":{"@type":"Answer","text":"Quando prestada por PSAV, a compra, venda ou troca de ativos virtuais referenciados em moeda fiduciária foi incluída no mercado de câmbio pela Res. BCB 521/2025 (art. 76-A, IV, da Res. BCB 277)."}},{"@type":"Question","name":"Posso comprar USDT pagando em dólar?","acceptedAnswer":{"@type":"Answer","text":"Não por meio de PSAV no Brasil. A norma veda a compra ou venda de ativos virtuais com pagamento ou recebimento em moeda estrangeira (art. 76-A, § 2º)."}},{"@type":"Question","name":"A retenção de 24 horas vale para USDT?","acceptedAnswer":{"@type":"Answer","text":"Sim. A Res. BCB 584/2026 inclui expressamente as stablecoins. A partir de 1º/01/2027, envios ao exterior ou para autocustódia acima de US$ 10 mil (por operação ou no dia) ficam retidos por 24h após o aporte, salvo liberação antecipada fundamentada."}},{"@type":"Question","name":"Qual o limite para transferir stablecoin ao exterior sem contraparte autorizada?","acceptedAnswer":{"@type":"Answer","text":"Para PSAVs, US$ 100 mil por pagamento ou transferência internacional quando a contraparte não é instituição autorizada a operar no mercado de câmbio."}},{"@type":"Question","name":"Stablecoins são mais arriscadas que outros criptoativos?","acceptedAnswer":{"@type":"Answer","text":"Não há resposta única. Elas concentram volume de pagamento e uso internacional, o que exige atenção. Ao mesmo tempo, emissores centralizados podem congelar endereços, o que não acontece em ativos sem emissor."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Stablecoins"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Stablecoins</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">KYT / cripto</div>
<h1>USDT e stablecoins: o que a regulação exige e onde estão os riscos de compliance</h1>
<div class="art-meta"><span>Stablecoins</span><span>01/10/2026</span><span>8 min de leitura</span></div>
<p class="lead-p"><strong>Stablecoins são ativos virtuais que buscam manter paridade com uma moeda fiduciária, quase sempre o dólar.</strong> O USDT (Tether) e o USDC são os exemplos mais conhecidos. Por combinarem a estabilidade do dólar com a velocidade e o alcance internacional da blockchain, viraram ferramenta de pagamento e reserva de valor, e também um ponto de atenção para PLD/FT.</p>
<p>A regulação brasileira reconheceu isso de forma explícita:</p>
<ul><li>Pela <strong><a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&amp;numero=521" target="_blank" rel="noopener">Res. BCB 521/2025</a></strong>, a <strong>compra, venda ou troca de stablecoins</strong> prestada por PSAV entra no <strong>mercado de câmbio</strong>.</li><li>Pela <strong><a href="/blog/resolucao-bcb-584-retencao-24h-cripto">Res. BCB 584/2026</a></strong>, as stablecoins estão expressamente incluídas na <strong>retenção cautelar de 24 horas</strong>, que começa em 1º/01/2027.</li></ul>
<h2>Stablecoin como operação de câmbio</h2>
<p>A Res. 521 incluiu na Res. BCB 277/2022 o art. 76-A. Segundo ele, estão no mercado de câmbio, quando prestados por PSAV:</p>
<ol><li>pagamento ou transferência internacional com ativos virtuais;</li><li>transferência de ativo virtual para cumprir obrigação do uso internacional de cartão ou outro meio de pagamento eletrônico;</li><li>transferência de ou para <strong>carteira autocustodiada</strong> que não envolva pagamento ou transferência internacional;</li><li><strong>compra, venda ou troca de ativos virtuais referenciados em moeda fiduciária</strong>, ou seja, stablecoins.</li></ol>
<p>Consequências práticas para quem opera USDT:</p>
<ul><li><strong>Regras de câmbio se somam às de cripto.</strong> Cadastro, registro e envio de informações ao Banco Central seguem também a lógica do câmbio. Veja <a href="/blog/lei-14286-cambio-cadastro">o que a Lei 14.286 e a Res. BCB 277 exigem no cadastro de câmbio</a>.</li><li><strong>Vedação de liquidação em moeda estrangeira.</strong> É vedada a compra ou venda de ativos virtuais com pagamento ou recebimento em moeda estrangeira (art. 76-A, § 2º).</li><li><strong>Recursos de terceiros.</strong> É vedado movimentar recursos de interesse de terceiro nessas operações, salvo quando a PSAV presta serviço a instituição autorizada a operar câmbio que atue para seus clientes (§ 3º).</li><li><strong>Autocustódia.</strong> A PSAV deve identificar o dono da carteira autocustodiada e ter processo documentado para verificar a origem e o destino dos ativos (§ 5º).</li><li><strong>Contraparte no exterior.</strong> Em operação com prestadora no exterior, é preciso verificar se ela está sob supervisão efetiva ou documentar a avaliação de risco quando a jurisdição não exige supervisão (art. 76-B, § 2º).</li><li><strong>Limite sem contraparte autorizada.</strong> Para as PSAVs, o pagamento ou transferência internacional com ativos virtuais é limitado a <strong>US$ 100 mil</strong> quando a contraparte não for instituição autorizada a operar câmbio.</li><li><strong>Finalidade da operação.</strong> Nos pagamentos e transferências internacionais, é preciso obter do cliente a finalidade, informações sobre o pagador ou recebedor no exterior e sua relação com o cliente (art. 76-C, em vigor desde 4/05/2026).</li></ul>
<h2>Por que stablecoins concentram risco de PLD/FT</h2>
<p>Estes são padrões de risco que o compliance precisa considerar. Não são estatísticas:</p>
<ul><li><strong>Velocidade e alcance.</strong> Uma transferência de USDT liquida em minutos para qualquer lugar, sem correspondente bancário.</li><li><strong>Saída do perímetro.</strong> Envio para carteira autocustodiada ou exchange estrangeira tira o recurso do alcance da instituição brasileira. Esse é o motivo declarado da retenção de 24h.</li><li><strong>Combinação com Pix.</strong> Um fluxo comum de risco: recursos entram via Pix vindos de muitas origens, são convertidos em USDT e saem rapidamente para fora. É o comportamento típico de <a href="/blog/contas-laranja-contas-de-passagem">contas de passagem</a> usadas para escoar golpes.</li><li><strong>OTC e mesas sem diligência.</strong> Operações de balcão de alto valor, para clientes pessoa jurídica com atividade pouco clara, sem <a href="/blog/kyc-kyb-kyt-diferencas">KYB</a> completo.</li><li><strong>Uso como "câmbio paralelo".</strong> Compra de stablecoin para remessa internacional sem a classificação da finalidade que a regra de câmbio exige.</li></ul>
<p>Um fato técnico ajuda o compliance: emissores de stablecoins centralizadas mantêm a capacidade de congelar endereços nos próprios contratos. Isso não substitui controle interno, mas faz da <a href="/blog/analise-de-carteiras-cripto">análise de carteiras</a> uma ferramenta mais útil para stablecoins do que para criptoativos sem emissor.</p>
<h2>Controles recomendados para quem opera USDT</h2>
<div class="art-table"><table><thead><tr><th>Risco</th><th>Controle</th></tr></thead><tbody><tr><td>Cliente sem capacidade financeira compatível</td><td>KYC com renda ou faturamento e patrimônio, e regra de incompatibilidade (Circular 3.978, art. 39, I, "c")</td></tr><tr><td>Empresa de fachada comprando USDT</td><td>KYB completo até o beneficiário final, com checagem de atividade real</td></tr><tr><td>Envio para endereço de risco</td><td>Análise da carteira de destino antes do saque</td></tr><tr><td>Envio para exterior ou autocustódia</td><td>Classificação do destino, identificação do titular da autocustódia, retenção de 24h acima de US$ 10 mil a partir de 2027</td></tr><tr><td>Fracionamento</td><td>Soma diária por cliente, que a Res. 584 também exige</td></tr><tr><td>Pix de muitas origens convertido e enviado rápido</td><td>Cenário de passagem rápida no monitoramento</td></tr><tr><td>Pagamento internacional sem finalidade</td><td>Coleta da finalidade e dos dados do recebedor no exterior (art. 76-C)</td></tr></tbody></table></div>
<h2>Perguntas frequentes</h2>
<h3>Comprar USDT é operação de câmbio?</h3>
<p>Quando prestada por PSAV, a compra, venda ou troca de ativos virtuais referenciados em moeda fiduciária foi incluída no mercado de câmbio pela Res. BCB 521/2025 (art. 76-A, IV, da Res. BCB 277).</p>
<h3>Posso comprar USDT pagando em dólar?</h3>
<p>Não por meio de PSAV no Brasil. A norma veda a compra ou venda de ativos virtuais com pagamento ou recebimento em moeda estrangeira (art. 76-A, § 2º).</p>
<h3>A retenção de 24 horas vale para USDT?</h3>
<p>Sim. A Res. BCB 584/2026 inclui expressamente as stablecoins. A partir de 1º/01/2027, envios ao exterior ou para autocustódia acima de US$ 10 mil (por operação ou no dia) ficam retidos por 24h após o aporte, salvo liberação antecipada fundamentada.</p>
<h3>Qual o limite para transferir stablecoin ao exterior sem contraparte autorizada?</h3>
<p>Para PSAVs, US$ 100 mil por pagamento ou transferência internacional quando a contraparte não é instituição autorizada a operar no mercado de câmbio.</p>
<h3>Stablecoins são mais arriscadas que outros criptoativos?</h3>
<p>Não há resposta única. Elas concentram volume de pagamento e uso internacional, o que exige atenção. Ao mesmo tempo, emissores centralizados podem congelar endereços, o que não acontece em ativos sem emissor.</p>
<h2>Conclusão</h2>
<p>Com a Res. 521 e a Res. 584, operar USDT no Brasil significa cumprir regras de cripto e de câmbio ao mesmo tempo:</p>
<ul><li>cadastro completo;</li><li>finalidade e contraparte conhecidas;</li><li>destino classificado;</li><li>retenção quando o risco ou o valor pedem.</li></ul>
<p>O compliance que funciona aqui começa no cliente. A transação só faz sentido se for compatível com quem a origina.</p>
<div class="art-cta"><p><strong>Antes do USDT, o cliente.</strong> A kycert reúne KYC, KYB, PEP, sanções e mídia adversa num Dossiê de Risco com decisão registrada, para PSAVs e operações de câmbio.</p><div class="cta"><a href="/solucoes/psav" class="btn btn-primary btn-lg">Conhecer a solução para PSAV</a><a href="/solucoes/cambio" class="btn btn-ghost btn-lg">Solução para câmbio</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/resolucao-bcb-584-retencao-24h-cripto">Resolução BCB 584 →</a><a href="/blog/lei-14286-cambio-cadastro">Lei 14.286 e Res. BCB 277: cadastro no câmbio →</a><a href="/blog/contas-laranja-contas-de-passagem">Contas laranja e contas de passagem →</a></div>
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
