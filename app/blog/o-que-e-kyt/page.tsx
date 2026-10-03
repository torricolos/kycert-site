import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "O que é KYT (Know Your Transaction) e como funciona em cripto",
  description:
    "KYT é o monitoramento do risco de cada transação, inclusive on-chain. Veja como funciona, o que a Res. BCB 520 exige das PSAVs e como KYT e KYC se completam.",
  alternates: { canonical: "/blog/o-que-e-kyt" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/o-que-e-kyt",
    siteName: 'kycert',
    title: "O que é KYT (Know Your Transaction) e como funciona em cripto | kycert",
    description:
      "KYT é o monitoramento do risco de cada transação, inclusive on-chain. Veja como funciona, o que a Res. BCB 520 exige das PSAVs e como KYT e KYC se completam.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "O que é KYT (Know Your Transaction) e como funciona em cripto | kycert",
    description:
      "KYT é o monitoramento do risco de cada transação, inclusive on-chain. Veja como funciona, o que a Res. BCB 520 exige das PSAVs e como KYT e KYC se completam.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"O que é KYT (Know Your Transaction) e como funciona no mercado de cripto","description":"KYT é o monitoramento do risco de cada transação, inclusive on-chain. Veja como funciona, o que a Res. BCB 520 exige das PSAVs e como KYT e KYC se completam.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/o-que-e-kyt","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que significa KYT?","acceptedAnswer":{"@type":"Answer","text":"*Know Your Transaction*, \\"conheça sua transação\\". É a avaliação do risco de cada transação, especialmente em cripto, com base em origem, destino e exposição a endereços de risco."}},{"@type":"Question","name":"KYT é obrigatório no Brasil?","acceptedAnswer":{"@type":"Answer","text":"A sigla não aparece em norma. O monitoramento de transações é obrigatório pela Lei 9.613 e pela Circular 3.978. As PSAVs têm deveres específicos na Res. BCB 520, como identificar carteiras sancionadas e não operar com misturadores. Na prática, o mercado cumpre essas obrigações com ferramentas de KYT."}},{"@type":"Question","name":"Qual a diferença entre KYC e KYT?","acceptedAnswer":{"@type":"Answer","text":"KYC avalia o cliente. KYT avalia as transações. Um programa de PLD/FT eficiente usa os dois juntos."}},{"@type":"Question","name":"O que é exposição indireta?","acceptedAnswer":{"@type":"Answer","text":"É quando os recursos chegam a uma carteira depois de passar por intermediários a partir de um endereço de risco. Pesa menos que a exposição direta, mas não deve ser ignorada."}},{"@type":"Question","name":"Posso terceirizar o KYT?","acceptedAnswer":{"@type":"Answer","text":"Pode contratar a ferramenta e serviços auxiliares. A análise que caracteriza uma operação como suspeita deve ser feita pela própria instituição, no Brasil (Circular 3.978, arts. 44 e 45)."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"KYT"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">KYT</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">KYT / fundamentos</div>
<h1>O que é KYT (Know Your Transaction) e como funciona no mercado de cripto</h1>
<div class="art-meta"><span>KYT</span><span>01/10/2026</span><span>9 min de leitura</span></div>
<p class="lead-p"><strong>KYT (Know Your Transaction, ou "conheça sua transação") é o processo de avaliar o risco de cada transação</strong>: de onde vêm os recursos, para onde vão e com quem a operação se conecta. O <a href="/blog/o-que-e-kyc">KYC</a> responde "quem é o cliente". O KYT responde "o que esse cliente está fazendo, e com quem".</p>
<p>O termo ganhou força no mercado de criptoativos. Como as transações em blockchain são públicas, é possível analisar o histórico de uma carteira e medir sua exposição a endereços ligados a atividades ilícitas, muitas vezes antes de aceitar um depósito ou executar um saque.</p>
<p>KYT não é um termo jurídico. Nenhuma norma brasileira usa essa sigla. O que existe é um conjunto de obrigações de <strong>monitoramento, registro e rastreabilidade de operações</strong>, e o KYT é a forma como o mercado operacionaliza essas obrigações.</p>
<h2>KYT, monitoramento de transações e análise on-chain</h2>
<p>Os três termos aparecem misturados:</p>
<ul><li><strong>Monitoramento de transações</strong> é a obrigação geral de PLD/FT de acompanhar as operações dos clientes para identificar suspeitas. Vale para qualquer instituição regulada. Veja <a href="/blog/monitoramento-de-transacoes-pld">como funciona o monitoramento de transações</a>.</li><li><strong>Análise on-chain</strong> é a técnica de ler a blockchain para entender o caminho dos ativos.</li><li><strong>KYT</strong> é o monitoramento de transações que usa, entre outras fontes, a análise on-chain. Em cripto, costuma ser feito transação a transação e em tempo real.</li></ul>
<h2>Como o KYT funciona na prática</h2>
<p>Um fluxo típico em uma exchange ou PSAV:</p>
<ol><li><strong>Entrada do evento.</strong> O cliente deposita um ativo ou pede um saque para um endereço externo.</li><li><strong>Triagem do endereço.</strong> A ferramenta verifica se o endereço de origem ou destino está ligado a categorias de risco: entidades sancionadas, mercados da darknet, misturadores, golpes, ransomware, exchanges sem supervisão.</li><li><strong>Exposição direta e indireta.</strong> A análise considera tanto a interação direta com um endereço de risco quanto a exposição indireta, quando os recursos passaram por intermediários antes de chegar.</li><li><strong>Pontuação e regras.</strong> O resultado passa por regras definidas pela instituição, como limites de exposição, categorias proibidas e valores.</li><li><strong>Alerta e análise humana.</strong> Casos acima do limite viram alerta para um analista.</li><li><strong>Decisão e registro.</strong> Aprovar, reter, devolver, rejeitar e, quando for o caso, comunicar ao Coaf, sempre com registro da fundamentação.</li></ol>
<p>O passo 6 é onde o KYT encontra o KYC. A mesma exposição pede respostas diferentes para clientes diferentes. Um cliente institucional com histórico conhecido não é igual a uma conta aberta ontem com renda declarada incompatível.</p>
<h2>O que a regulação brasileira exige que o KYT atende</h2>
<div class="art-table"><table><thead><tr><th>Exigência</th><th>Norma</th><th>Como o KYT ajuda</th></tr></thead><tbody><tr><td>Monitorar, selecionar e analisar operações suspeitas</td><td>Circular 3.978, arts. 38 a 43</td><td>Gera e prioriza alertas de transações</td></tr><tr><td>Controles para identificar listas de sanções e <strong>endereços de carteiras sancionadas</strong></td><td>Res. BCB 520, art. 34, III</td><td>Triagem de endereços contra listas</td></tr><tr><td>Vedação a misturadores e embaralhadores</td><td>Res. BCB 520, art. 90</td><td>Detecta exposição a mixers</td></tr><tr><td>Envio de dados de originador e beneficiário (Travel Rule)</td><td>Res. BCB 520, arts. 44 e 89</td><td>Complementa a análise quando os dados ainda não chegam da contraparte</td></tr><tr><td>Identificar o dono de carteira autocustodiada e verificar a origem e o destino dos ativos</td><td>Res. BCB 277, art. 76-A, § 5º (incluído pela Res. 521)</td><td>Análise da carteira e do fluxo</td></tr><tr><td>Retenção cautelar de 24h com análise de risco da contraparte e da jurisdição</td><td>Res. BCB 584/2026 (vigência em 1º/01/2027)</td><td>Fornece o risco da contraparte para a decisão</td></tr><tr><td>Guardar registros das transações por 5 anos</td><td>Res. BCB 520, art. 45</td><td>Histórico das análises e alertas</td></tr></tbody></table></div>
<p>Em resumo: <strong>monitorar transações é obrigação, e o KYT é o método</strong>. Se o monitoramento de cripto não olha a blockchain, ele deixa de fora a parte mais informativa do dado.</p>
<h2>KYT e KYC se completam</h2>
<p>Nenhum dos dois é suficiente sozinho:</p>
<ul><li><strong>KYC sem KYT</strong> conhece o cliente, mas não vê que os recursos que ele deposita vieram de um endereço sancionado.</li><li><strong>KYT sem KYC</strong> sabe que a transação tem exposição de risco, mas não consegue avaliar se ela é compatível com quem é o cliente.</li></ul>
<p>A <a href="/blog/resolucao-bcb-584-retencao-24h-cripto">Res. BCB 584</a> torna isso explícito. Para reter uma transferência ou liberá-la antes das 24 horas, a instituição precisa considerar o perfil de risco <strong>do cliente</strong>, <strong>da operação</strong>, <strong>da contraparte</strong> e <strong>da jurisdição</strong>. O KYT fornece os três últimos. O KYC, o primeiro.</p>
<p>Veja a comparação completa em <a href="/blog/kyc-kyb-kyt-diferencas">KYC, KYB e KYT: diferenças e como se conectam</a>.</p>
<h2>Limites do KYT que o compliance precisa conhecer</h2>
<ul><li><strong>Atribuição é probabilística.</strong> A ligação entre um endereço e uma entidade vem de inteligência do fornecedor. Pode haver erro, atraso ou cobertura desigual entre redes.</li><li><strong>Nem todo risco é visível on-chain.</strong> Transferências entre clientes dentro da mesma exchange, operações em livro de ofertas e trocas fora da blockchain não aparecem no grafo público.</li><li><strong>Falsos positivos custam caro.</strong> Regras mal calibradas geram fila de alertas que ninguém analisa no prazo. O prazo da Circular 3.978 é de 45 dias para selecionar e 45 para analisar.</li><li><strong>A ferramenta não decide.</strong> A Circular 3.978 proíbe terceirizar a análise que caracteriza ou não a suspeita (art. 44). O fornecedor pode prestar serviço auxiliar, mas a decisão é da instituição.</li></ul>
<h2>O que avaliar ao escolher uma solução de KYT</h2>
<ul><li>cobertura das redes e dos ativos que você opera, incluindo as stablecoins;</li><li>categorias de risco e transparência sobre a origem das atribuições;</li><li>triagem antes da transação (pré-saque) e não só depois;</li><li>API e latência compatíveis com o seu fluxo de saque;</li><li>exportação de evidências para o dossiê de análise;</li><li>suporte às mensagens de <a href="/blog/travel-rule-brasil">Travel Rule</a>, ou integração com quem as forneça.</li></ul>
<h2>Perguntas frequentes</h2>
<h3>O que significa KYT?</h3>
<p>*Know Your Transaction*, "conheça sua transação". É a avaliação do risco de cada transação, especialmente em cripto, com base em origem, destino e exposição a endereços de risco.</p>
<h3>KYT é obrigatório no Brasil?</h3>
<p>A sigla não aparece em norma. O monitoramento de transações é obrigatório pela Lei 9.613 e pela Circular 3.978. As PSAVs têm deveres específicos na Res. BCB 520, como identificar carteiras sancionadas e não operar com misturadores. Na prática, o mercado cumpre essas obrigações com ferramentas de KYT.</p>
<h3>Qual a diferença entre KYC e KYT?</h3>
<p>KYC avalia o cliente. KYT avalia as transações. Um programa de PLD/FT eficiente usa os dois juntos.</p>
<h3>O que é exposição indireta?</h3>
<p>É quando os recursos chegam a uma carteira depois de passar por intermediários a partir de um endereço de risco. Pesa menos que a exposição direta, mas não deve ser ignorada.</p>
<h3>Posso terceirizar o KYT?</h3>
<p>Pode contratar a ferramenta e serviços auxiliares. A análise que caracteriza uma operação como suspeita deve ser feita pela própria instituição, no Brasil (Circular 3.978, arts. 44 e 45).</p>
<h2>Conclusão</h2>
<p>KYT é como o mercado de cripto transforma a obrigação de monitorar transações em algo executável na velocidade da blockchain. Com a Res. BCB 520 em vigor, a Res. 584 chegando em janeiro de 2027 e a Travel Rule com prazos definidos, as PSAVs precisam de duas coisas:</p>
<ul><li><strong>ver a transação</strong>, com KYT;</li><li><strong>conhecer o cliente</strong>, com KYC, para decidir com fundamento.</li></ul>
<div class="art-cta"><p><strong>A outra metade do KYT é o cliente.</strong> A kycert entrega KYC, PEP, sanções e mídia adversa num Dossiê de Risco com decisão registrada: o perfil do cliente que a análise de cada transação precisa considerar.</p><div class="cta"><a href="/solucoes/psav" class="btn btn-primary btn-lg">Conhecer a solução para PSAV</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/analise-de-carteiras-cripto">Análise de carteiras cripto →</a><a href="/blog/travel-rule-brasil">Travel Rule no Brasil →</a><a href="/blog/resolucao-bcb-584-retencao-24h-cripto">Resolução BCB 584 →</a></div>
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
