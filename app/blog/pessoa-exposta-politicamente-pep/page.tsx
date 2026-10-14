import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "PEP: o que é pessoa exposta politicamente e o que fazer",
  description:
    "Quem é PEP, quem conta como familiar e estreito colaborador, por quanto tempo a condição dura e o que a Circular 3.978 exige no onboarding e no monitoramento.",
  alternates: { canonical: "/blog/pessoa-exposta-politicamente-pep" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/pessoa-exposta-politicamente-pep",
    siteName: 'kycert',
    title: "PEP: o que é pessoa exposta politicamente e o que fazer | kycert",
    description:
      "Quem é PEP, quem conta como familiar e estreito colaborador, por quanto tempo a condição dura e o que a Circular 3.978 exige no onboarding e no monitoramento.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "PEP: o que é pessoa exposta politicamente e o que fazer | kycert",
    description:
      "Quem é PEP, quem conta como familiar e estreito colaborador, por quanto tempo a condição dura e o que a Circular 3.978 exige no onboarding e no monitoramento.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Pessoa exposta politicamente (PEP): quem é e o que a regulação exige","description":"Quem é PEP, quem conta como familiar e estreito colaborador, por quanto tempo a condição dura e o que a Circular 3.978 exige no onboarding e no monitoramento.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/pessoa-exposta-politicamente-pep","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que significa PEP?","acceptedAnswer":{"@type":"Answer","text":"Pessoa exposta politicamente: quem exerce ou exerceu nos últimos cinco anos cargo, emprego ou função pública relevante, além de seus familiares e estreitos colaboradores."}},{"@type":"Question","name":"Quanto tempo uma pessoa continua PEP depois de sair do cargo?","acceptedAnswer":{"@type":"Answer","text":"Cinco anos (Circular 3.978, art. 27, § 5º)."}},{"@type":"Question","name":"PEP pode abrir conta?","acceptedAnswer":{"@type":"Answer","text":"Pode. A norma exige diligência reforçada, classificação de risco compatível e aprovação por nível hierárquico superior, não a recusa."}},{"@type":"Question","name":"Familiar de PEP também é PEP?","acceptedAnswer":{"@type":"Answer","text":"A Circular 3.978 trata familiares e estreitos colaboradores como categorias a serem verificadas e consideradas na classificação de risco e no monitoramento, com os mesmos cuidados (art. 19)."}},{"@type":"Question","name":"Vereador é PEP?","acceptedAnswer":{"@type":"Answer","text":"Sim. Vereadores estão no art. 27, § 1º, VIII, da Circular 3.978."}},{"@type":"Question","name":"Onde consultar se alguém é PEP?","acceptedAnswer":{"@type":"Answer","text":"No Portal da Transparência, que publica uma relação de PEP, complementado por declaração do cliente e bases privadas, sobretudo para PEP estrangeiro e para familiares e colaboradores."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"PEP"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">PEP</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">KYC / PEP</div>
<h1>Pessoa exposta politicamente (PEP): quem é e o que a regulação exige</h1>
<div class="art-meta"><span>PEP</span><span>01/10/2026</span><span>8 min de leitura</span></div>
<p class="lead-p"><strong>Pessoa exposta politicamente (PEP) é quem ocupa ou ocupou, nos últimos cinco anos, cargo ou função pública relevante</strong>, como mandato eletivo, cargo de alto escalão no Executivo, nos tribunais superiores ou no Ministério Público, ou direção de partido político. A condição se estende a <strong>familiares</strong> e <strong>estreitos colaboradores</strong>.</p>
<p>Ser PEP <strong>não impede</strong> abrir conta ou fazer negócios. O que muda é o nível de diligência. A <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&amp;numero=3978" target="_blank" rel="noopener">Circular BCB 3.978/2020</a> exige que a instituição:</p>
<ul><li>identifique a condição;</li><li>considere essa condição na classificação de risco;</li><li>submeta a decisão de aceitar ou manter o cliente a um nível hierárquico superior.</li></ul>
<h2>Quem é PEP no Brasil</h2>
<p>O art. 27, § 1º, da Circular 3.978 lista as pessoas expostas politicamente no país:</p>
<div class="art-table"><table><thead><tr><th>Esfera</th><th>Quem é PEP</th></tr></thead><tbody><tr><td>Federal: Legislativo e Executivo</td><td>Detentores de mandato eletivo; Ministros de Estado ou equiparados; cargos de Natureza Especial; presidente, vice e diretores de entidades da administração indireta; DAS nível 6 ou equivalente</td></tr><tr><td>Judiciário</td><td>Membros do CNJ, STF, tribunais superiores, TRFs, TRTs, TREs, CSJT e CJF</td></tr><tr><td>Ministério Público</td><td>Membros do CNMP, Procurador-Geral da República e vice, Procurador-Geral do Trabalho, Procurador-Geral da Justiça Militar, Subprocuradores-Gerais da República, Procuradores-Gerais de Justiça dos Estados e do DF</td></tr><tr><td>Tribunal de Contas da União</td><td>Membros, Procurador-Geral e Subprocuradores-Gerais do MP junto ao TCU</td></tr><tr><td>Partidos políticos</td><td>Presidentes e tesoureiros nacionais, ou equivalentes</td></tr><tr><td>Estados e DF</td><td>Governadores, Secretários de Estado, Deputados Estaduais e Distritais, presidentes de entidades da administração indireta, presidentes de Tribunais de Justiça, Militares e de Contas</td></tr><tr><td>Municípios</td><td>Prefeitos, Vereadores, Secretários Municipais, presidentes de entidades da administração indireta e de Tribunais de Contas municipais</td></tr></tbody></table></div>
<h3>PEP estrangeiro</h3>
<p>Também são PEP as pessoas que, no exterior, sejam (art. 27, § 2º):</p>
<ul><li>chefes de estado ou de governo;</li><li>políticos e ocupantes de cargos governamentais de escalões superiores;</li><li>oficiais-generais e membros de escalões superiores do Judiciário;</li><li>executivos de escalões superiores de empresas públicas;</li><li>dirigentes de partidos políticos.</li></ul>
<p>Entram ainda os dirigentes de escalões superiores de <strong>organizações internacionais</strong> (§ 3º).</p>
<p>Para clientes residentes no exterior, a instituição deve adotar pelo menos <strong>duas</strong> destas três providências (§ 4º):</p>
<ul><li>pedir declaração expressa do cliente;</li><li>consultar informações públicas;</li><li>consultar bases de dados de PEP.</li></ul>
<h3>A regra dos cinco anos</h3>
<p>A condição de PEP <strong>continua por cinco anos</strong> depois que a pessoa deixa o cargo (art. 27, § 5º). Um ex-prefeito que saiu do mandato há três anos ainda é PEP para fins de PLD/FT.</p>
<h2>Familiares e estreitos colaboradores</h2>
<p>A Circular 3.978 manda verificar também se o cliente é <strong>representante, familiar ou estreito colaborador</strong> de PEP (art. 19).</p>
<ul><li><strong>Familiar:</strong> parentes em linha reta ou colateral até o segundo grau, cônjuge, companheiro ou companheira, enteado e enteada. Na prática: pais, filhos, avós, netos, irmãos, cônjuge e enteados.</li><li><strong>Estreito colaborador:</strong> pessoa natural conhecida por ter relação próxima com a PEP. Exemplos: quem tem participação conjunta com ela em empresa ou em arranjo sem personalidade jurídica, quem é seu mandatário, ou quem controla empresa ou arranjo criado em benefício da PEP.</li></ul>
<p>O segundo grupo é o mais difícil de identificar e, muitas vezes, o mais relevante. Estruturas societárias usadas por PEP costumam ter como sócio um colaborador, não a própria PEP. Por isso a checagem de PEP deve correr também sobre os <a href="/blog/beneficiario-final-ubo-kyb">beneficiários finais</a> e administradores de clientes pessoa jurídica.</p>
<h2>O que a instituição deve fazer com um cliente PEP</h2>
<h3>No onboarding</h3>
<ol><li><strong>Identificar a condição</strong> de PEP, familiar ou estreito colaborador, como parte da qualificação do cliente (arts. 19 e 27).</li><li><strong>Classificar o risco</strong> considerando essa condição (art. 19, § 2º, II).</li><li><strong>Adotar controles compatíveis</strong> com essa qualificação (art. 19, § 2º, I). Na prática: entender a origem dos recursos e do patrimônio.</li><li><strong>Submeter a decisão a nível hierárquico superior.</strong> A avaliação do interesse em iniciar ou manter o relacionamento deve ser feita por alguém <strong>acima</strong> de quem autorizaria um cliente comum (art. 19, § 3º).</li></ol>
<h3>No relacionamento</h3>
<ul><li><strong>Monitoramento reforçado.</strong> Operações com PEP brasileiro, PEP estrangeiro e seus familiares e colaboradores estão entre as que exigem atenção especial (art. 39, I, "d" e "e"). Veja <a href="/blog/monitoramento-de-transacoes-pld">monitoramento de transações</a>.</li><li><strong>Comunicação ao Coaf marcada.</strong> Toda comunicação ao Coaf deve indicar se a pessoa é PEP ou ligada a PEP (art. 53, I).</li><li><strong>Rechecagem periódica.</strong> Clientes viram PEP no meio do relacionamento, a cada eleição ou nomeação. A checagem não pode ser feita só no cadastro: é preciso <a href="/produto/monitoramento">reverificar a base periodicamente</a>.</li></ul>
<h2>Onde consultar PEP</h2>
<ul><li><strong>Portal da Transparência:</strong> a Controladoria-Geral da União publica uma relação de pessoas expostas politicamente para <a href="https://portaldatransparencia.gov.br/download-de-dados/pep" target="_blank" rel="noopener">download</a>.</li><li><strong>Autodeclaração do cliente:</strong> útil, mas não suficiente sozinha.</li><li><strong>Bases privadas e mídia:</strong> essenciais para PEP estrangeiro, para cargos estaduais e municipais e, principalmente, para identificar familiares e estreitos colaboradores, que não aparecem em listas oficiais.</li></ul>
<h2>Erros comuns</h2>
<ul><li>Checar PEP só no onboarding e nunca mais.</li><li>Ignorar familiares e colaboradores, ou checar só o titular de uma pessoa jurídica.</li><li>Recusar automaticamente qualquer PEP, o que gera perda comercial sem base normativa, em vez de aplicar diligência reforçada.</li><li>Aprovar PEP no mesmo nível hierárquico de um cliente comum.</li><li>Não registrar a decisão e quem a tomou.</li></ul>
<h2>Perguntas frequentes</h2>
<h3>O que significa PEP?</h3>
<p>Pessoa exposta politicamente: quem exerce ou exerceu nos últimos cinco anos cargo, emprego ou função pública relevante, além de seus familiares e estreitos colaboradores.</p>
<h3>Quanto tempo uma pessoa continua PEP depois de sair do cargo?</h3>
<p>Cinco anos (Circular 3.978, art. 27, § 5º).</p>
<h3>PEP pode abrir conta?</h3>
<p>Pode. A norma exige diligência reforçada, classificação de risco compatível e aprovação por nível hierárquico superior, não a recusa.</p>
<h3>Familiar de PEP também é PEP?</h3>
<p>A Circular 3.978 trata familiares e estreitos colaboradores como categorias a serem verificadas e consideradas na classificação de risco e no monitoramento, com os mesmos cuidados (art. 19).</p>
<h3>Vereador é PEP?</h3>
<p>Sim. Vereadores estão no art. 27, § 1º, VIII, da Circular 3.978.</p>
<h3>Onde consultar se alguém é PEP?</h3>
<p>No Portal da Transparência, que publica uma relação de PEP, complementado por declaração do cliente e bases privadas, sobretudo para PEP estrangeiro e para familiares e colaboradores.</p>
<h2>Conclusão</h2>
<p>PEP não é sinônimo de cliente proibido. É sinônimo de <strong>diligência que precisa ficar registrada</strong>: quem é a pessoa, qual a relação com o cargo, de onde vêm os recursos, quem aprovou e por quê. É exatamente isso que o supervisor pergunta.</p>
<div class="art-cta"><p><strong>PEP verificado em cada cliente, com a decisão registrada.</strong> A kycert checa PEP, sanções e mídia adversa no fluxo de onboarding e guarda o apontamento, a fonte e o critério da decisão no Dossiê de Risco.</p><div class="cta"><a href="/dossie-exemplo" class="btn btn-primary btn-lg">Ver dossiê de exemplo</a><a href="/produto/monitoramento" class="btn btn-ghost btn-lg">Reverificação e re-screening de PEP</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/o-que-e-kyc">O que é KYC →</a><a href="/blog/listas-de-sancoes-lei-13810">Listas de sanções →</a><a href="/blog/beneficiario-final-ubo-kyb">Beneficiário final (UBO) →</a></div>
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
