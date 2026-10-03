import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "Análise de carteiras cripto: como avaliar o risco de um endereço",
  description:
    "Como funciona a análise de carteiras cripto (wallet screening): exposição direta e indireta, carteiras sancionadas, autocustódia e o que a Res. BCB 520 e 521 exigem.",
  alternates: { canonical: "/blog/analise-de-carteiras-cripto" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/analise-de-carteiras-cripto",
    siteName: 'kycert',
    title: "Análise de carteiras cripto: como avaliar o risco de um endereço | kycert",
    description:
      "Como funciona a análise de carteiras cripto (wallet screening): exposição direta e indireta, carteiras sancionadas, autocustódia e o que a Res. BCB 520 e 521 exigem.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Análise de carteiras cripto: como avaliar o risco de um endereço | kycert",
    description:
      "Como funciona a análise de carteiras cripto (wallet screening): exposição direta e indireta, carteiras sancionadas, autocustódia e o que a Res. BCB 520 e 521 exigem.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Análise de carteiras cripto: como avaliar o risco de um endereço antes de transacionar","description":"Como funciona a análise de carteiras cripto (wallet screening): exposição direta e indireta, carteiras sancionadas, autocustódia e o que a Res. BCB 520 e 521 exigem.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/analise-de-carteiras-cripto","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é wallet screening?","acceptedAnswer":{"@type":"Answer","text":"É a triagem de um endereço de criptoativo para identificar seu risco: exposição a sanções, misturadores, golpes ou mercados ilícitos, e o tipo de entidade que o controla."}},{"@type":"Question","name":"Como saber se uma carteira é sancionada?","acceptedAnswer":{"@type":"Answer","text":"Consultando listas oficiais que incluem endereços, como a lista SDN do OFAC, e ferramentas de análise on-chain que agregam essas listas e as atribuições conhecidas."}},{"@type":"Question","name":"A PSAV é obrigada a verificar carteiras?","acceptedAnswer":{"@type":"Answer","text":"A Res. BCB 520 exige controles para identificar endereços de carteiras sancionadas (art. 34, III) e veda o uso de misturadores (art. 90). A Res. 521 exige identificar o dono de carteiras autocustodiadas nas operações que incluiu no mercado de câmbio."}},{"@type":"Question","name":"Como provar que a carteira é do cliente?","acceptedAnswer":{"@type":"Answer","text":"As práticas mais comuns são a assinatura de mensagem com a chave privada e a microtransação de teste. A norma não define o método. A PSAV deve escolher com base em risco e documentar."}},{"@type":"Question","name":"O que é exposição indireta?","acceptedAnswer":{"@type":"Answer","text":"É quando os recursos chegaram ao endereço analisado depois de passar por intermediários a partir de um endereço de risco."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Análise de carteiras"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Análise de carteiras</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">KYT / cripto</div>
<h1>Análise de carteiras cripto: como avaliar o risco de um endereço antes de transacionar</h1>
<div class="art-meta"><span>Análise de carteiras</span><span>01/10/2026</span><span>8 min de leitura</span></div>
<p class="lead-p"><strong>Análise de carteiras (*wallet screening*) é a verificação do risco de um endereço de criptoativo antes ou durante uma transação.</strong> Ela olha com quem aquele endereço já transacionou, se está ligado a entidades sancionadas, misturadores, golpes ou mercados ilícitos, e se pertence a uma exchange, a um serviço ou a uma pessoa em autocustódia.</p>
<p>É a peça mais concreta do <a href="/blog/o-que-e-kyt">KYT</a>. Para as PSAVs brasileiras, ela também responde a exigências específicas:</p>
<ul><li>identificar <strong>carteiras sancionadas</strong> (Res. BCB 520, art. 34, III);</li><li>não operar com <strong>misturadores</strong> (art. 90);</li><li>identificar o <strong>dono de carteiras autocustodiadas</strong> (Res. BCB 277, art. 76-A, § 5º, incluído pela Res. 521);</li><li>a partir de 2027, avaliar a contraparte na <a href="/blog/resolucao-bcb-584-retencao-24h-cripto">retenção de 24h da Res. 584</a>.</li></ul>
<h2>Quando analisar uma carteira</h2>
<div class="art-table"><table><thead><tr><th>Momento</th><th>O que se verifica</th><th>Por quê</th></tr></thead><tbody><tr><td>Depósito recebido</td><td>Origem dos fundos: o endereço que enviou tem exposição de risco?</td><td>Evitar receber recursos ilícitos ou de entidade sancionada</td></tr><tr><td>Pedido de saque</td><td>Destino: para quem os ativos vão?</td><td>Evitar enviar para endereço sancionado, mixer ou golpe; classificar o destino (exterior, autocustódia, PSAV nacional)</td></tr><tr><td>Cadastro de carteira na lista de saque</td><td>Titularidade e histórico do endereço</td><td>Saber, antes da primeira transação, se o endereço é do cliente e qual o seu risco</td></tr><tr><td>Revisão periódica</td><td>Mudança no risco de endereços já usados</td><td>Atribuições mudam: um endereço limpo hoje pode ser sinalizado amanhã</td></tr></tbody></table></div>
<p>O ponto mais importante é analisar <strong>antes do saque</strong>. Depois que o ativo sai, a transação em blockchain não tem estorno.</p>
<h2>Exposição direta e indireta</h2>
<ul><li><strong>Exposição direta:</strong> o endereço analisado transacionou diretamente com um endereço de risco. Exemplo: o depósito veio direto de uma carteira listada como sancionada.</li><li><strong>Exposição indireta:</strong> os recursos passaram por um ou mais intermediários entre o endereço de risco e o endereço analisado. Cada passo intermediário é chamado de *hop*.</li></ul>
<p>A política de risco deve dizer quanto de exposição indireta é aceitável, por categoria e por número de *hops*. Exposição indireta a um mercado da darknet a cinco intermediários de distância não pesa o mesmo que exposição direta a um endereço sancionado.</p>
<h2>Categorias de risco mais usadas</h2>
<p>As ferramentas de análise on-chain classificam endereços em categorias. As mais relevantes para compliance:</p>
<ul><li><strong>Sanções.</strong> Endereços de pessoas ou entidades sancionadas. O OFAC (EUA) inclui endereços de criptoativos em registros da sua lista SDN. Veja <a href="/blog/listas-de-sancoes-lei-13810">como funcionam as listas de sanções</a>.</li><li><strong>Misturadores e embaralhadores.</strong> Serviços feitos para ocultar origem e destino. A Res. 520 proíbe a PSAV de usar mecanismos que dificultem a detecção de crimes, citando-os como exemplo (art. 90, III).</li><li><strong>Mercados ilícitos e darknet.</strong></li><li><strong>Golpes, fraudes e ransomware.</strong></li><li><strong>Exchanges sem supervisão</strong> ou de jurisdições de alto risco.</li><li><strong>Entidades reguladas.</strong> Exchanges e custodiantes identificados, o que ajuda a classificar o destino.</li></ul>
<h2>Autocustódia: como identificar o dono da carteira</h2>
<p>A Res. BCB 521/2025 definiu <strong>carteira autocustodiada</strong> como aquela cujo proprietário detém a chave privada e consegue movimentá-la sem uma prestadora de serviços. Ela também exigiu que a PSAV <strong>identifique o proprietário</strong> dessas carteiras e tenha processos documentados para verificar a origem e o destino dos ativos nas operações que a norma incluiu no mercado de câmbio.</p>
<p>A norma não diz *como* comprovar a titularidade. As práticas de mercado mais comuns são:</p>
<ul><li><strong>Assinatura de mensagem:</strong> o cliente assina, com a chave privada, uma mensagem gerada pela plataforma. É a forma mais robusta, porque só quem controla a chave consegue assinar.</li><li><strong>Microtransação de teste:</strong> o cliente envia um valor pequeno e específico da carteira declarada para a plataforma.</li><li><strong>Declaração do cliente com evidências:</strong> captura de tela da carteira, histórico de uso. É a mais fraca, e deve ser combinada com a análise do endereço.</li></ul>
<blockquote><p><strong>Interpretação:</strong> a escolha do método é decisão da PSAV, baseada em risco. Para valores altos ou clientes de maior risco, faz sentido exigir o método mais forte. Registre o método usado e o resultado em cada caso.</p></blockquote>
<h2>O que fazer com o resultado da análise</h2>
<p>A análise só tem valor se virar decisão. A política precisa definir, para cada faixa de risco:</p>
<ul><li><strong>aprovar automaticamente</strong> (risco baixo, dentro do perfil do cliente);</li><li><strong>reter para análise humana</strong> (risco médio, valor alto, destino em autocustódia ou no exterior);</li><li><strong>rejeitar ou devolver</strong> (exposição direta a sanções ou categorias proibidas);</li><li><strong>avaliar comunicação ao Coaf</strong>, com registro em dossiê;</li><li><strong>revisar o cliente</strong>, quando o padrão de carteiras usadas destoa do perfil cadastrado.</li></ul>
<p>Exposição a endereço de pessoa ou entidade sancionada pelo Conselho de Segurança da ONU tem regra própria. A Lei 13.810/2019 e a Res. BCB 44/2020 exigem <strong>indisponibilidade imediata</strong> dos ativos e comunicação ao Banco Central, ao Ministério da Justiça e ao Coaf.</p>
<h2>Limites da análise de carteiras</h2>
<ul><li><strong>Atribuição não é certeza.</strong> A ligação entre endereço e entidade vem da inteligência do fornecedor e pode estar incompleta ou desatualizada.</li><li><strong>Cobertura varia por rede.</strong> Nem todas as blockchains e tokens têm a mesma profundidade de dados.</li><li><strong>Dentro da exchange, a blockchain não vê.</strong> Transferências internas e operações em livro de ofertas não aparecem on-chain.</li><li><strong>O endereço não diz quem é a pessoa.</strong> É por isso que a análise de carteiras precisa do <a href="/blog/o-que-e-kyc">KYC</a> e da <a href="/blog/travel-rule-brasil">Travel Rule</a> ao lado.</li></ul>
<h2>Perguntas frequentes</h2>
<h3>O que é wallet screening?</h3>
<p>É a triagem de um endereço de criptoativo para identificar seu risco: exposição a sanções, misturadores, golpes ou mercados ilícitos, e o tipo de entidade que o controla.</p>
<h3>Como saber se uma carteira é sancionada?</h3>
<p>Consultando listas oficiais que incluem endereços, como a lista SDN do OFAC, e ferramentas de análise on-chain que agregam essas listas e as atribuições conhecidas.</p>
<h3>A PSAV é obrigada a verificar carteiras?</h3>
<p>A Res. BCB 520 exige controles para identificar endereços de carteiras sancionadas (art. 34, III) e veda o uso de misturadores (art. 90). A Res. 521 exige identificar o dono de carteiras autocustodiadas nas operações que incluiu no mercado de câmbio.</p>
<h3>Como provar que a carteira é do cliente?</h3>
<p>As práticas mais comuns são a assinatura de mensagem com a chave privada e a microtransação de teste. A norma não define o método. A PSAV deve escolher com base em risco e documentar.</p>
<h3>O que é exposição indireta?</h3>
<p>É quando os recursos chegaram ao endereço analisado depois de passar por intermediários a partir de um endereço de risco.</p>
<h2>Conclusão</h2>
<p>Analisar carteiras é a forma mais direta de ver o risco em cripto, porque o histórico está público. Para virar compliance, a análise precisa de política (o que aceitar, o que reter, o que rejeitar), de prova (método de titularidade e registro da decisão) e de contexto: quem é o cliente por trás do endereço.</p>
<div class="art-cta"><p><strong>O endereço mostra a transação. O dossiê mostra o cliente.</strong> A kycert entrega KYC, PEP, sanções e mídia adversa com a decisão registrada, o contexto que a análise de carteiras precisa para virar decisão defensável.</p><div class="cta"><a href="/solucoes/psav" class="btn btn-primary btn-lg">Conhecer a solução para PSAV</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/o-que-e-kyt">O que é KYT →</a><a href="/blog/travel-rule-brasil">Travel Rule no Brasil →</a><a href="/blog/usdt-stablecoins-risco-compliance">USDT e stablecoins: risco e compliance →</a></div>
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
