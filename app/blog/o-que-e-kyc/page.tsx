import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "O que é KYC: como funciona o Know Your Customer no Brasil",
  description:
    "KYC é o processo de identificar, qualificar e classificar o risco de cada cliente. Veja o que a Circular 3.978 exige, as etapas e como estruturar o KYC na prática.",
  alternates: { canonical: "/blog/o-que-e-kyc" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/o-que-e-kyc",
    siteName: 'kycert',
    title: "O que é KYC: como funciona o Know Your Customer no Brasil | kycert",
    description:
      "KYC é o processo de identificar, qualificar e classificar o risco de cada cliente. Veja o que a Circular 3.978 exige, as etapas e como estruturar o KYC na prática.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "O que é KYC: como funciona o Know Your Customer no Brasil | kycert",
    description:
      "KYC é o processo de identificar, qualificar e classificar o risco de cada cliente. Veja o que a Circular 3.978 exige, as etapas e como estruturar o KYC na prática.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"O que é KYC (Know Your Customer) e o que a regulação brasileira exige","description":"KYC é o processo de identificar, qualificar e classificar o risco de cada cliente. Veja o que a Circular 3.978 exige, as etapas e como estruturar o KYC na prática.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/o-que-e-kyc","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que significa KYC?","acceptedAnswer":{"@type":"Answer","text":"KYC é a sigla de *Know Your Customer*, \\"conheça seu cliente\\". É o processo de identificar, qualificar e classificar o risco de cada cliente antes e durante o relacionamento."}},{"@type":"Question","name":"KYC é obrigatório no Brasil?","acceptedAnswer":{"@type":"Answer","text":"Sim, para as pessoas sujeitas à Lei 9.613/1998 (art. 9º). Entre elas estão as instituições financeiras, as instituições de pagamento, as corretoras de câmbio e, desde a Lei 14.478/2022, as prestadoras de serviços de ativos virtuais."}},{"@type":"Question","name":"Qual norma do Banco Central regula o KYC?","acceptedAnswer":{"@type":"Answer","text":"A Circular BCB nº 3.978/2020, em vigor desde 1º de julho de 2020. O KYC está nos arts. 13 a 27."}},{"@type":"Question","name":"Quanto tempo devo guardar os dados do KYC?","acceptedAnswer":{"@type":"Answer","text":"No mínimo dez anos, à disposição do Banco Central (art. 67 da Circular 3.978)."}},{"@type":"Question","name":"Qual a diferença entre KYC e KYB?","acceptedAnswer":{"@type":"Answer","text":"KYC trata do cliente em geral. KYB (*Know Your Business*) é o KYC aplicado a pessoas jurídicas, com foco na estrutura societária e no beneficiário final."}},{"@type":"Question","name":"Posso abrir a conta antes de concluir o KYC?","acceptedAnswer":{"@type":"Answer","text":"Não. A exceção é a falta de informações de qualificação, que admite início da relação por até 30 dias, desde que o monitoramento não seja prejudicado."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"KYC"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">KYC</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">KYC / fundamentos</div>
<h1>O que é KYC (Know Your Customer) e o que a regulação brasileira exige</h1>
<div class="art-meta"><span>KYC</span><span>01/10/2026</span><span>9 min de leitura</span></div>
<p class="lead-p"><strong>KYC (Know Your Customer, ou "conheça seu cliente") é o conjunto de procedimentos que uma instituição usa para saber com quem está fazendo negócio.</strong> Na prática, isso significa:</p>
<ul><li>verificar se o cliente é quem diz ser;</li><li>entender sua atividade e sua capacidade financeira;</li><li>classificar o risco que ele representa de uso da instituição para lavagem de dinheiro, financiamento do terrorismo ou fraude.</li></ul>
<p>No Brasil, o KYC é uma obrigação legal. A <a href="https://www.planalto.gov.br/ccivil_03/leis/l9613.htm" target="_blank" rel="noopener">Lei 9.613/1998</a> determina, no art. 10, que as pessoas sujeitas a ela "identificarão seus clientes e manterão cadastro atualizado". Para as instituições autorizadas pelo Banco Central, o detalhamento está na <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&amp;numero=3978" target="_blank" rel="noopener">Circular BCB nº 3.978/2020</a>. Desde a Lei 14.478/2022, a lista de obrigados inclui também as <strong>prestadoras de serviços de ativos virtuais</strong> (art. 9º, XIX, da Lei 9.613).</p>
<h2>As três etapas do KYC segundo a Circular 3.978</h2>
<p>A Circular 3.978 organiza o KYC em três verbos: <strong>identificar, qualificar e classificar</strong> (art. 13). Uma quarta obrigação atravessa as três: <strong>manter atualizado</strong>.</p>
<div class="art-table"><table><thead><tr><th>Etapa</th><th>O que é</th><th>Base na Circular 3.978</th></tr></thead><tbody><tr><td>Identificação</td><td>Coletar, verificar e validar a identidade do cliente</td><td>Art. 16</td></tr><tr><td>Qualificação</td><td>Entender quem é o cliente: atividade, renda ou faturamento, patrimônio, condição de PEP</td><td>Arts. 18 e 19</td></tr><tr><td>Classificação</td><td>Enquadrar o cliente numa categoria de risco definida pela avaliação interna</td><td>Art. 20</td></tr><tr><td>Atualização</td><td>Manter as informações atualizadas ao longo do relacionamento</td><td>Art. 17</td></tr></tbody></table></div>
<h3>1. Identificação: o cliente é quem diz ser?</h3>
<p>O mínimo a coletar está no art. 16, § 2º:</p>
<ul><li><strong>pessoa natural:</strong> nome completo, endereço residencial e CPF;</li><li><strong>pessoa jurídica:</strong> razão social, endereço da sede e CNPJ.</li></ul>
<p>Coletar não basta. A norma exige <strong>obter, verificar e validar a autenticidade</strong> dessas informações. Quando necessário, isso inclui confrontá-las com bancos de dados públicos e privados (art. 16, § 1º).</p>
<p>É aqui que entram a validação do documento, a checagem do CPF e a prova de vida. Também é aqui que acontece a maior parte das <a href="/blog/fraude-documental-onboarding">fraudes documentais no onboarding</a>.</p>
<h3>2. Qualificação: quem é esse cliente?</h3>
<p>Qualificar é coletar, verificar e validar informações <strong>compatíveis com o perfil de risco e com a natureza da relação de negócio</strong> (art. 18). Na prática, isso significa:</p>
<ul><li>ocupação ou atividade econômica;</li><li>renda (pessoa física) ou faturamento (pessoa jurídica);</li><li>patrimônio;</li><li>verificação da condição de <a href="/blog/pessoa-exposta-politicamente-pep">pessoa exposta politicamente (PEP)</a> e de familiares e estreitos colaboradores de PEP (art. 19).</li></ul>
<p>Para clientes pessoa jurídica, a qualificação inclui analisar a cadeia societária até chegar à pessoa natural que é o <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final</a> (art. 24). Isso já é <strong>KYB</strong>, o "Know Your Business", tratado em detalhe em <a href="/blog/kyc-kyb-kyt-diferencas">KYC, KYB e KYT: diferenças</a>.</p>
<h3>3. Classificação: qual o risco desse cliente?</h3>
<p>Com as informações de qualificação, a instituição enquadra o cliente numa <strong>categoria de risco</strong> (art. 20). Essas categorias não são livres. Elas vêm da <strong>avaliação interna de risco</strong> que a instituição é obrigada a fazer (art. 10).</p>
<p>A classificação define a intensidade de tudo o que vem depois:</p>
<ul><li>com que frequência o cadastro é atualizado;</li><li>quais documentos adicionais se pedem;</li><li>quão sensível é o <a href="/blog/monitoramento-de-transacoes-pld">monitoramento de transações</a> daquele cliente.</li></ul>
<h3>4. Atualização: o KYC não termina no onboarding</h3>
<p>As informações devem ser <strong>mantidas atualizadas</strong> (art. 17). Um cliente classificado como baixo risco há três anos pode ter mudado de atividade, virado PEP ou passado a movimentar valores incompatíveis com sua renda.</p>
<p>Os critérios de atualização para cada categoria de risco precisam estar no manual de procedimentos (art. 22).</p>
<h2>Regras que costumam surpreender</h2>
<ul><li><strong>Não se inicia relação sem KYC concluído.</strong> É vedado iniciar relação de negócio sem identificação e qualificação concluídas. Há uma exceção de até <strong>30 dias</strong> quando faltam informações de qualificação, desde que o monitoramento não seja prejudicado (art. 23).</li><li><strong>Administradores e representantes também passam por KYC.</strong> Os procedimentos se aplicam aos administradores de clientes pessoa jurídica e aos representantes de clientes (art. 21).</li><li><strong>Guarda por 10 anos.</strong> As informações coletadas no KYC devem ficar à disposição do Banco Central por no mínimo dez anos (art. 67).</li><li><strong>Tudo em sistema.</strong> As informações do KYC precisam estar em sistemas informatizados e ser usadas no monitoramento de operações (art. 14).</li></ul>
<h2>KYC em exchanges, PSAVs e fintechs: o que muda na prática</h2>
<p>A obrigação é a mesma. O que muda é o contexto operacional:</p>
<ul><li><strong>Volume e velocidade.</strong> Exchanges e fintechs abrem contas em escala, com o cliente esperando aprovação em minutos. O KYC precisa ser automatizado na coleta e na verificação e reservar o olhar humano para os casos de risco.</li><li><strong>KYC proporcional ao risco.</strong> A norma pede procedimentos "compatíveis com o perfil de risco". Isso abre espaço para trilhas diferentes: um fluxo simples para o cliente de baixo risco e diligência reforçada para PEP, alto volume ou atividade sensível.</li><li><strong>Regulação setorial em cima da Circular.</strong> As PSAVs autorizadas passaram a seguir a regulamentação aplicável às instituições do Banco Central, por força da <a href="/blog/resolucao-bcb-520-psav">Res. BCB 520/2025</a> (arts. 44, 47 e 87). Fintechs que abrem conta de depósito também seguem a Res. CMN 4.753/2019, que exige verificar a autenticidade das informações do cliente.</li></ul>
<h3>Exemplo: estruturando o KYC de uma exchange</h3>
<ol><li><strong>Cadastro básico</strong> com CPF, nome e endereço, validados contra bases de dados.</li><li><strong>Documento com foto</strong> e verificação de que pertence à pessoa (biometria ou prova de vida).</li><li><strong>Qualificação:</strong> ocupação, renda e patrimônio declarados, cruzados com a capacidade de movimentação pretendida.</li><li><strong>Checagens de PEP, <a href="/blog/listas-de-sancoes-lei-13810">sanções</a> e mídia adversa.</strong></li><li><strong>Classificação de risco</strong> com base na matriz da avaliação interna.</li><li><strong>Decisão registrada:</strong> aprovado, aprovado com restrição de limites ou recusado, com quem decidiu e por quê.</li><li><strong>Gatilhos de revisão:</strong> prazo por categoria de risco, mudança de comportamento transacional ou alerta de lista.</li></ol>
<p>O passo 6 é o que mais falta nas operações. A avaliação até acontece, mas não fica registrada de forma que um auditor ou o supervisor consiga reconstruir a decisão. Falamos disso em <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização do BACEN</a>.</p>
<h2>O que acontece quando o KYC falha</h2>
<ul><li><strong>Risco regulatório.</strong> A Lei 9.613 prevê sanções para quem descumpre as obrigações de identificação e registro: advertência, multa que pode chegar a R$ 20 milhões, inabilitação de administradores e cassação da autorização (art. 12).</li><li><strong>Risco de fraude.</strong> Contas abertas com documentos falsos ou de terceiros viram <a href="/blog/contas-laranja-contas-de-passagem">contas laranja</a> e canais para golpes.</li><li><strong>Risco de contraparte.</strong> Bancos e parceiros fazem diligência sobre a qualidade do KYC de quem atendem. Um KYC fraco fecha portas comerciais.</li></ul>
<h2>Perguntas frequentes</h2>
<h3>O que significa KYC?</h3>
<p>KYC é a sigla de *Know Your Customer*, "conheça seu cliente". É o processo de identificar, qualificar e classificar o risco de cada cliente antes e durante o relacionamento.</p>
<h3>KYC é obrigatório no Brasil?</h3>
<p>Sim, para as pessoas sujeitas à Lei 9.613/1998 (art. 9º). Entre elas estão as instituições financeiras, as instituições de pagamento, as corretoras de câmbio e, desde a Lei 14.478/2022, as prestadoras de serviços de ativos virtuais.</p>
<h3>Qual norma do Banco Central regula o KYC?</h3>
<p>A Circular BCB nº 3.978/2020, em vigor desde 1º de julho de 2020. O KYC está nos arts. 13 a 27.</p>
<h3>Quanto tempo devo guardar os dados do KYC?</h3>
<p>No mínimo dez anos, à disposição do Banco Central (art. 67 da Circular 3.978).</p>
<h3>Qual a diferença entre KYC e KYB?</h3>
<p>KYC trata do cliente em geral. KYB (*Know Your Business*) é o KYC aplicado a pessoas jurídicas, com foco na estrutura societária e no beneficiário final.</p>
<h3>Posso abrir a conta antes de concluir o KYC?</h3>
<p>Não. A exceção é a falta de informações de qualificação, que admite início da relação por até 30 dias, desde que o monitoramento não seja prejudicado.</p>
<h2>Conclusão</h2>
<p>KYC não é um formulário de cadastro. É um processo de quatro movimentos que precisa deixar rastro:</p>
<ul><li>identificar e validar quem é o cliente;</li><li>qualificar quem ele é;</li><li>classificar o risco;</li><li>manter tudo atualizado.</li></ul>
<p>A Circular 3.978 diz o que fazer. O desafio operacional é fazer isso em escala e conseguir provar depois como cada decisão foi tomada.</p>
<div class="art-cta"><p><strong>Cada cliente como uma evidência, não como uma consulta avulsa.</strong> A kycert reúne identificação, PEP, sanções e mídia adversa num Dossiê de Risco com a decisão e o critério registrados.</p><div class="cta"><a href="/dossie-exemplo" class="btn btn-primary btn-lg">Ver dossiê de exemplo</a><a href="/produto/kyc" class="btn btn-ghost btn-lg">Verificação de pessoa física (KYC)</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/o-que-e-pld-ft">O que é PLD/FT →</a><a href="/blog/kyc-kyb-kyt-diferencas">KYC, KYB e KYT: diferenças →</a><a href="/blog/beneficiario-final-ubo-kyb">Beneficiário final (UBO) →</a></div>
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
