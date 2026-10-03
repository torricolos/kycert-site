import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "Monitoramento de transações em PLD/FT: o que exige a 3.978",
  description:
    "Como funciona o monitoramento de transações exigido pela Circular 3.978: monitorar, selecionar, analisar e comunicar ao Coaf, com prazos, cenários e erros comuns.",
  alternates: { canonical: "/blog/monitoramento-de-transacoes-pld" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/monitoramento-de-transacoes-pld",
    siteName: 'kycert',
    title: "Monitoramento de transações em PLD/FT: o que exige a 3.978 | kycert",
    description:
      "Como funciona o monitoramento de transações exigido pela Circular 3.978: monitorar, selecionar, analisar e comunicar ao Coaf, com prazos, cenários e erros comuns.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Monitoramento de transações em PLD/FT: o que exige a 3.978 | kycert",
    description:
      "Como funciona o monitoramento de transações exigido pela Circular 3.978: monitorar, selecionar, analisar e comunicar ao Coaf, com prazos, cenários e erros comuns.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Monitoramento de transações: como cumprir a Circular 3.978 na prática","description":"Como funciona o monitoramento de transações exigido pela Circular 3.978: monitorar, selecionar, analisar e comunicar ao Coaf, com prazos, cenários e erros comuns.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/monitoramento-de-transacoes-pld","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é monitoramento de transações?","acceptedAnswer":{"@type":"Answer","text":"É o acompanhamento contínuo das operações dos clientes para identificar sinais de lavagem de dinheiro ou financiamento do terrorismo, com seleção, análise e, quando for o caso, comunicação ao Coaf."}},{"@type":"Question","name":"Qual o prazo para analisar um alerta?","acceptedAnswer":{"@type":"Answer","text":"Pela Circular 3.978, até 45 dias da seleção da operação. A seleção também tem prazo de até 45 dias da ocorrência."}},{"@type":"Question","name":"Preciso documentar alertas que não foram comunicados?","acceptedAnswer":{"@type":"Answer","text":"Sim. A análise deve ser formalizada em dossiê independentemente da comunicação ao Coaf (art. 43, § 2º)."}},{"@type":"Question","name":"Posso terceirizar o monitoramento?","acceptedAnswer":{"@type":"Answer","text":"Pode contratar sistemas e serviços auxiliares. A análise que caracteriza a suspeita não pode ser feita por terceiros nem no exterior (art. 44)."}},{"@type":"Question","name":"Como saber se meu monitoramento é efetivo?","acceptedAnswer":{"@type":"Answer","text":"A Circular 3.978 exige uma avaliação de efetividade anual, documentada em relatório, com testes e plano de ação para as deficiências (arts. 62 a 65)."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Monitoramento de transações"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Monitoramento de transações</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">PLD/FT / monitoramento</div>
<h1>Monitoramento de transações: como cumprir a Circular 3.978 na prática</h1>
<div class="art-meta"><span>Monitoramento de transações</span><span>01/10/2026</span><span>9 min de leitura</span></div>
<p class="lead-p"><strong>Monitoramento de transações é o processo contínuo de acompanhar as operações dos clientes para identificar as que podem indicar lavagem de dinheiro ou financiamento do terrorismo.</strong> Para as instituições autorizadas pelo Banco Central, a <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&amp;numero=3978" target="_blank" rel="noopener">Circular 3.978/2020</a> divide o processo em três etapas obrigatórias, cada uma com prazo:</p>
<ul><li><strong>monitorar e selecionar</strong>;</li><li><strong>analisar</strong>;</li><li><strong>comunicar ao Coaf</strong>.</li></ul>
<p>Ter uma ferramenta que gera alertas não basta. A norma exige que cada etapa tenha critérios escritos, prazo cumprido e decisão registrada.</p>
<h2>O ciclo da Circular 3.978</h2>
<div class="art-table"><table><thead><tr><th>Etapa</th><th>O que é</th><th>Prazo</th><th>Base</th></tr></thead><tbody><tr><td>Monitoramento e seleção</td><td>Identificar operações e situações que possam indicar suspeita</td><td>Até 45 dias da ocorrência</td><td>Art. 39</td></tr><tr><td>Análise</td><td>Caracterizar ou não a operação selecionada como suspeita, em dossiê</td><td>Até 45 dias da seleção</td><td>Art. 43</td></tr><tr><td>Decisão de comunicar</td><td>Fundamentada e registrada no dossiê</td><td>Dentro do prazo de análise</td><td>Art. 48, § 1º</td></tr><tr><td>Comunicação ao Coaf</td><td>Envio pelo Siscoaf, sem dar ciência ao cliente</td><td>Até o dia útil seguinte à decisão</td><td>Arts. 48, § 2º, e 50</td></tr></tbody></table></div>
<p>Os procedimentos valem também para <strong>propostas de operação</strong>, não só para as operações concluídas (art. 38, § 2º). Uma tentativa recusada também pode ser comunicável.</p>
<h2>O que precisa ser monitorado</h2>
<p>O art. 39 lista situações que devem receber atenção especial. Elas são a base mínima de qualquer conjunto de regras:</p>
<ul><li><strong>Burla dos controles:</strong> operações que, pela habitualidade, valor ou forma, tentam escapar da identificação, do registro ou do monitoramento. O exemplo clássico é o fracionamento.</li><li><strong>Espécie com indício de ocultação:</strong> depósitos, saques ou provisionamentos em dinheiro com sinais de dissimulação.</li><li><strong>Incompatibilidade com a capacidade financeira:</strong> movimentação acima do que a renda, o faturamento ou o patrimônio explicam.</li><li><strong>PEP:</strong> operações com <a href="/blog/pessoa-exposta-politicamente-pep">pessoas expostas politicamente</a> brasileiras ou estrangeiras e com seus familiares e colaboradores.</li><li><strong>Beneficiário final não identificável.</strong></li><li><strong>Países com deficiências estratégicas</strong> apontadas pelo Gafi.</li><li><strong>Cadastro que não se consegue atualizar.</strong></li><li><strong>Indícios de financiamento do terrorismo.</strong></li></ul>
<p>Repare que quase todos os itens dependem de informação do <a href="/blog/o-que-e-kyc">KYC</a>. Sem renda, faturamento, condição de PEP e beneficiário final no cadastro, a regra de "incompatibilidade" não tem com o que comparar.</p>
<h2>Regras, cenários e parâmetros</h2>
<p>A norma exige um <strong>manual específico, aprovado pela diretoria</strong> (art. 38, § 3º, IV), com:</p>
<ul><li>a periodicidade de execução do monitoramento para cada tipo de operação;</li><li>os <strong>parâmetros, variáveis, regras e cenários</strong> usados (art. 41).</li></ul>
<p>Exemplos de cenários comuns:</p>
<div class="art-table"><table><thead><tr><th>Cenário</th><th>O que detecta</th><th>Dado necessário</th></tr></thead><tbody><tr><td>Fracionamento</td><td>Várias operações logo abaixo de um limite em curto período</td><td>Histórico transacional</td></tr><tr><td>Passagem rápida</td><td>Recurso entra e sai em pouco tempo, sem permanecer na conta</td><td>Entradas e saídas por janela de tempo</td></tr><tr><td>Incompatibilidade de renda</td><td>Volume mensal muito acima da renda ou faturamento declarado</td><td>KYC atualizado</td></tr><tr><td>Concentração de contrapartes</td><td>Muitas origens diferentes para um único destino, ou o inverso</td><td>Dados de contraparte</td></tr><tr><td>Mudança brusca de perfil</td><td>Conta dormente que passa a movimentar alto volume</td><td>Histórico e cadastro</td></tr><tr><td>Jurisdição de risco</td><td>Origem ou destino em país das listas do Gafi</td><td>Dados de contraparte e país</td></tr><tr><td>Exposição on-chain</td><td>Depósito ou saque ligado a endereço de risco</td><td>Análise de carteiras (<a href="/blog/o-que-e-kyt">KYT</a>)</td></tr></tbody></table></div>
<p>Os cenários de passagem rápida e concentração de contrapartes são os que mais revelam <a href="/blog/contas-laranja-contas-de-passagem">contas laranja e contas de passagem</a>.</p>
<h2>A análise: onde a maioria dos processos falha</h2>
<p>A etapa de análise tem três exigências que pegam muitas operações:</p>
<ol><li><strong>Dossiê obrigatório.</strong> Toda análise é formalizada em dossiê, <strong>haja ou não comunicação ao Coaf</strong> (art. 43, § 2º). Alertas encerrados como "falso positivo" sem justificativa registrada são um achado recorrente de fiscalização.</li><li><strong>A análise não pode ser terceirizada.</strong> É vedado contratar terceiros para a análise que caracteriza a suspeita, e também é vedado fazê-la no exterior (art. 44). Fornecedores podem prestar <strong>serviços auxiliares</strong>, como sistema, dados e triagem, mas a decisão é da instituição.</li><li><strong>Recursos no país.</strong> A instituição precisa ter, no Brasil, pessoas e competências para a análise (art. 45).</li></ol>
<h2>Comunicação ao Coaf</h2>
<ul><li><strong>Suspeitas:</strong> comunicadas até o dia útil seguinte à decisão. A decisão precisa estar fundamentada no dossiê (art. 48).</li><li><strong>Comunicações automáticas:</strong> operações em espécie iguais ou superiores a R$ 50 mil e provisionamentos de saque nesse valor, até o dia útil seguinte (art. 49).</li><li><strong>Sigilo:</strong> nada pode ser informado ao cliente ou a terceiros (art. 50; Lei 9.613, art. 11).</li><li><strong>Marcadores obrigatórios:</strong> a comunicação indica se a pessoa é PEP ou ligada a PEP, entre outras condições (art. 53).</li><li><strong>Declaração negativa:</strong> quem não comunicou nada no ano declara isso em até 10 dias úteis após o encerramento do ano (art. 54).</li></ul>
<h2>Calibração e efetividade</h2>
<p>Um monitoramento com milhares de alertas por mês e dois analistas não cumpre a norma. Os prazos de 45 dias vão estourar. O ajuste de regras é parte da obrigação:</p>
<ul><li>medir a taxa de alertas que viram dossiê com comunicação;</li><li>revisar cenários que só geram ruído e documentar o motivo da mudança;</li><li>testar se cenários relevantes estão faltando.</li></ul>
<p>A <strong>avaliação de efetividade anual</strong> (art. 62) precisa avaliar o monitoramento, com metodologia, testes e deficiências encontradas. Um plano de ação acompanha as correções (art. 65).</p>
<h2>Monitoramento em cripto</h2>
<p>Para as PSAVs, o monitoramento segue a mesma lógica e ganha dados específicos:</p>
<ul><li>exposição on-chain de carteiras;</li><li>dados de originador e beneficiário da <a href="/blog/travel-rule-brasil">Travel Rule</a>;</li><li>a partir de 2027, a <a href="/blog/resolucao-bcb-584-retencao-24h-cripto">retenção de 24h da Res. BCB 584</a> para envios ao exterior e a carteiras autocustodiadas.</li></ul>
<p>A Res. BCB 520 manda as PSAVs adequarem controles internos a esse monitoramento e manterem os registros por cinco anos (art. 45).</p>
<h2>Perguntas frequentes</h2>
<h3>O que é monitoramento de transações?</h3>
<p>É o acompanhamento contínuo das operações dos clientes para identificar sinais de lavagem de dinheiro ou financiamento do terrorismo, com seleção, análise e, quando for o caso, comunicação ao Coaf.</p>
<h3>Qual o prazo para analisar um alerta?</h3>
<p>Pela Circular 3.978, até 45 dias da seleção da operação. A seleção também tem prazo de até 45 dias da ocorrência.</p>
<h3>Preciso documentar alertas que não foram comunicados?</h3>
<p>Sim. A análise deve ser formalizada em dossiê independentemente da comunicação ao Coaf (art. 43, § 2º).</p>
<h3>Posso terceirizar o monitoramento?</h3>
<p>Pode contratar sistemas e serviços auxiliares. A análise que caracteriza a suspeita não pode ser feita por terceiros nem no exterior (art. 44).</p>
<h3>Como saber se meu monitoramento é efetivo?</h3>
<p>A Circular 3.978 exige uma avaliação de efetividade anual, documentada em relatório, com testes e plano de ação para as deficiências (arts. 62 a 65).</p>
<h2>Conclusão</h2>
<p>Monitoramento de transações é um ciclo com prazo e prova: monitorar, selecionar, analisar em dossiê e comunicar. As regras só funcionam bem com um cadastro bom por trás. Sem renda, PEP e beneficiário final atualizados, os cenários mais importantes da Circular 3.978 não têm com o que comparar.</p>
<div class="art-cta"><p><strong>O monitoramento precisa de um cliente bem conhecido.</strong> A kycert mantém o perfil de risco de cada cliente (identificação, PEP, sanções e mídia adversa) num dossiê pronto para ser usado na análise de alertas.</p><div class="cta"><a href="/dossie-exemplo" class="btn btn-primary btn-lg">Ver dossiê de exemplo</a><a href="/lp-pld-ft" class="btn btn-ghost btn-lg">Ver como a kycert estrutura a trilha de PLD/FT</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/o-que-e-pld-ft">O que é PLD/FT →</a><a href="/blog/o-que-e-kyt">O que é KYT →</a><a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">Como comprovar PLD/FT na fiscalização →</a></div>
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
