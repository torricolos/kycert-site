import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "KYC, KYB e KYT: diferenças e como se conectam no compliance",
  description:
    "KYC avalia a pessoa, KYB a empresa e KYT a transação. Veja as diferenças, quando aplicar cada um e como os três se conectam no onboarding e no monitoramento.",
  alternates: { canonical: "/blog/kyc-kyb-kyt-diferencas" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/kyc-kyb-kyt-diferencas",
    siteName: 'kycert',
    title: "KYC, KYB e KYT: diferenças e como se conectam no compliance | kycert",
    description:
      "KYC avalia a pessoa, KYB a empresa e KYT a transação. Veja as diferenças, quando aplicar cada um e como os três se conectam no onboarding e no monitoramento.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "KYC, KYB e KYT: diferenças e como se conectam no compliance | kycert",
    description:
      "KYC avalia a pessoa, KYB a empresa e KYT a transação. Veja as diferenças, quando aplicar cada um e como os três se conectam no onboarding e no monitoramento.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"KYC, KYB e KYT: qual a diferença e como os três se conectam","description":"KYC avalia a pessoa, KYB a empresa e KYT a transação. Veja as diferenças, quando aplicar cada um e como os três se conectam no onboarding e no monitoramento.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/kyc-kyb-kyt-diferencas","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"KYB é obrigatório?","acceptedAnswer":{"@type":"Answer","text":"O termo não aparece na norma, mas o conteúdo sim. A Circular 3.978 exige qualificar o cliente pessoa jurídica até o beneficiário final (art. 24) e aplicar KYC a administradores e representantes (art. 21)."}},{"@type":"Question","name":"KYT substitui o KYC?","acceptedAnswer":{"@type":"Answer","text":"Não. São complementares. O KYT avalia transações, e o KYC fornece o contexto para decidir se uma transação é compatível com o cliente."}},{"@type":"Question","name":"Qual vem primeiro?","acceptedAnswer":{"@type":"Answer","text":"KYC e KYB vêm no onboarding: a Circular 3.978 proíbe iniciar a relação sem identificação e qualificação concluídas (art. 23). O KYT começa na primeira transação e não para mais."}},{"@type":"Question","name":"Empresas de cripto precisam dos três?","acceptedAnswer":{"@type":"Answer","text":"Na prática, sim. As PSAVs seguem a regulamentação de PLD/FT aplicável às instituições autorizadas pelo Banco Central e têm deveres específicos de rastreabilidade e triagem de carteiras na Res. BCB 520/2025."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"KYC, KYB e KYT"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">KYC, KYB e KYT</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">KYC / fundamentos</div>
<h1>KYC, KYB e KYT: qual a diferença e como os três se conectam</h1>
<div class="art-meta"><span>KYC, KYB e KYT</span><span>01/10/2026</span><span>7 min de leitura</span></div>
<p class="lead-p"><strong>KYC avalia a pessoa, KYB avalia a empresa e KYT avalia a transação.</strong> As três siglas descrevem partes do mesmo dever: saber com quem a instituição faz negócio e o que passa por ela. Na regulação brasileira, nenhuma das três é um processo isolado. Todas alimentam o mesmo perfil de risco do cliente que a Circular 3.978 exige.</p>
<h2>A diferença em uma tabela</h2>
<div class="art-table"><table><thead><tr><th></th><th>KYC</th><th>KYB</th><th>KYT</th></tr></thead><tbody><tr><td>Significado</td><td>Know Your Customer</td><td>Know Your Business</td><td>Know Your Transaction</td></tr><tr><td>Objeto</td><td>Cliente pessoa natural (e o cliente em geral)</td><td>Cliente pessoa jurídica</td><td>Cada operação ou transação</td></tr><tr><td>Pergunta central</td><td>Essa pessoa é quem diz ser? Qual o seu risco?</td><td>Quem controla essa empresa? Ela existe e faz o que diz?</td><td>De onde vem e para onde vai esse recurso?</td></tr><tr><td>Momento principal</td><td>Onboarding e atualização</td><td>Onboarding e atualização</td><td>Contínuo, a cada transação</td></tr><tr><td>Dados típicos</td><td>CPF, documento, endereço, renda, patrimônio, PEP</td><td>CNPJ, contrato social, quadro societário, beneficiário final, administradores</td><td>Valor, contraparte, origem e destino, endereços de carteira, padrão de comportamento</td></tr><tr><td>Base no Brasil</td><td>Circular 3.978, arts. 13 a 23 e 27</td><td>Circular 3.978, arts. 21, 24 e 25</td><td>Circular 3.978, arts. 38 a 43; Res. BCB 520, arts. 34, 44 e 90</td></tr></tbody></table></div>
<h2>KYC: conhecer o cliente</h2>
<p><a href="/blog/o-que-e-kyc">KYC</a> é o processo de <strong>identificar, qualificar e classificar</strong> o cliente. Inclui:</p>
<ul><li>validar a identidade;</li><li>entender ocupação, renda e patrimônio;</li><li>verificar se é <a href="/blog/pessoa-exposta-politicamente-pep">pessoa exposta politicamente</a>;</li><li>enquadrá-lo numa categoria de risco.</li></ul>
<p>O termo é usado tanto no sentido amplo (todo o "conheça seu cliente") quanto no sentido estrito (cliente pessoa física).</p>
<h2>KYB: conhecer a empresa</h2>
<p>KYB é o KYC aplicado a pessoas jurídicas. A diferença está na profundidade:</p>
<ul><li><strong>Existência e atividade:</strong> CNPJ ativo, atividade compatível com o que a empresa diz fazer, endereço real.</li><li><strong>Estrutura societária:</strong> quem são os sócios, inclusive outras empresas.</li><li><strong>Beneficiário final:</strong> a Circular 3.978 exige analisar a cadeia societária <strong>até a pessoa natural</strong> que controla ou se beneficia da empresa (art. 24). A instituição deve fixar um percentual mínimo de participação para essa identificação, que <strong>não pode passar de 25%</strong> (art. 25). Detalhamos isso em <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final (UBO)</a>.</li><li><strong>Administradores e representantes:</strong> passam pelos mesmos procedimentos de identificação e qualificação (art. 21).</li></ul>
<p>Na prática, KYB é KYC em camadas: a empresa, depois as empresas que a controlam e, no fim, as pessoas.</p>
<h2>KYT: conhecer a transação</h2>
<p><a href="/blog/o-que-e-kyt">KYT</a> acompanha o que o cliente faz depois de aprovado. No mercado tradicional, é o <a href="/blog/monitoramento-de-transacoes-pld">monitoramento de transações</a>: regras e cenários que detectam operações incompatíveis com o perfil, fracionamento, passagem rápida de recursos.</p>
<p>Em cripto, o KYT inclui a <strong>análise on-chain</strong>: verificar se o endereço de origem ou de destino está ligado a sanções, misturadores, golpes ou mercados ilícitos.</p>
<h2>Como os três se conectam</h2>
<p>O ponto que costuma passar despercebido: <strong>KYT sem KYC gera alertas que não se consegue analisar</strong>. Para decidir se uma transação é suspeita, a Circular 3.978 manda considerar a compatibilidade com a capacidade financeira do cliente (art. 39, I, "c"), a condição de PEP (art. 39, I, "d" e "e") e a possibilidade de identificar o beneficiário final (art. 39, I, "f"). Todas essas informações vêm do KYC e do KYB.</p>
<p>O caminho também é o inverso. O KYT alimenta o KYC: um padrão transacional fora do perfil é gatilho para revisar o cadastro e reclassificar o risco.</p>
<h3>Exemplo: cliente pessoa jurídica numa exchange</h3>
<p>Uma importadora quer abrir conta numa PSAV para comprar USDT e pagar fornecedores no exterior.</p>
<ol><li><strong>KYB:</strong> valida CNPJ e atividade, mapeia o quadro societário até as pessoas naturais, identifica administradores e procuradores.</li><li><strong>KYC dos envolvidos:</strong> identifica e qualifica os beneficiários finais e representantes, com checagem de PEP, sanções e mídia adversa.</li><li><strong>Classificação:</strong> o risco da empresa considera a atividade, o país dos fornecedores, o volume esperado e o resultado das checagens.</li><li><strong>KYT contínuo:</strong> cada compra e envio de USDT é avaliado. Destino, exposição da carteira e compatibilidade com o faturamento entram na análise. Envios ao exterior ou a carteiras autocustodiadas acima dos limites ficam sujeitos à <a href="/blog/resolucao-bcb-584-retencao-24h-cripto">retenção de 24h da Res. BCB 584</a> a partir de 2027.</li><li><strong>Retroalimentação:</strong> se a empresa passa a enviar valores muito acima do faturamento declarado, o alerta de KYT dispara a revisão do KYB.</li></ol>
<h2>Erros comuns</h2>
<ul><li><strong>Tratar KYB como "KYC com CNPJ".</strong> Parar no contrato social sem chegar ao beneficiário final.</li><li><strong>Fazer KYT sem consultar o perfil do cliente.</strong> As regras ficam genéricas e os alertas, impossíveis de priorizar.</li><li><strong>Fazer KYC só no onboarding.</strong> A Circular 3.978 exige atualização (art. 17), e o KYT é o principal gatilho para ela.</li><li><strong>Manter as três checagens em ferramentas sem ligação entre si.</strong> O supervisor quer ver a decisão completa, não três relatórios soltos.</li></ul>
<h2>Perguntas frequentes</h2>
<h3>KYB é obrigatório?</h3>
<p>O termo não aparece na norma, mas o conteúdo sim. A Circular 3.978 exige qualificar o cliente pessoa jurídica até o beneficiário final (art. 24) e aplicar KYC a administradores e representantes (art. 21).</p>
<h3>KYT substitui o KYC?</h3>
<p>Não. São complementares. O KYT avalia transações, e o KYC fornece o contexto para decidir se uma transação é compatível com o cliente.</p>
<h3>Qual vem primeiro?</h3>
<p>KYC e KYB vêm no onboarding: a Circular 3.978 proíbe iniciar a relação sem identificação e qualificação concluídas (art. 23). O KYT começa na primeira transação e não para mais.</p>
<h3>Empresas de cripto precisam dos três?</h3>
<p>Na prática, sim. As PSAVs seguem a regulamentação de PLD/FT aplicável às instituições autorizadas pelo Banco Central e têm deveres específicos de rastreabilidade e triagem de carteiras na Res. BCB 520/2025.</p>
<h2>Conclusão</h2>
<p>KYC, KYB e KYT não são produtos diferentes que se compram separadamente. São três perguntas que juntas formam um perfil de risco:</p>
<ul><li>quem é a pessoa;</li><li>quem está por trás da empresa;</li><li>o que passa pela conta.</li></ul>
<p>O programa de compliance funciona quando as três respostas ficam no mesmo lugar e a decisão sobre o cliente considera todas elas.</p>
<div class="art-cta"><p><strong>KYC e KYB no mesmo dossiê.</strong> A kycert reúne identificação, quadro societário, beneficiário final, PEP, sanções e mídia adversa num Dossiê de Risco com a decisão registrada.</p><div class="cta"><a href="/dossie-exemplo" class="btn btn-primary btn-lg">Ver dossiê de exemplo</a><a href="/produto/kyb" class="btn btn-ghost btn-lg">Verificação de PJ e beneficiário final</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/o-que-e-kyc">O que é KYC →</a><a href="/blog/o-que-e-kyt">O que é KYT →</a><a href="/blog/abertura-conta-fintech-kyb-escala">Abertura de conta em fintech: KYC, KYB e risco em escala →</a></div>
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
