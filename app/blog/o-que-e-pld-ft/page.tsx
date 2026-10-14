import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "O que é PLD/FT: guia da prevenção à lavagem de dinheiro",
  description:
    "PLD/FT é o conjunto de políticas e controles para impedir o uso da empresa em lavagem de dinheiro e financiamento do terrorismo. Veja leis, obrigações e prazos.",
  alternates: { canonical: "/blog/o-que-e-pld-ft" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/o-que-e-pld-ft",
    siteName: 'kycert',
    title: "O que é PLD/FT: guia da prevenção à lavagem de dinheiro | kycert",
    description:
      "PLD/FT é o conjunto de políticas e controles para impedir o uso da empresa em lavagem de dinheiro e financiamento do terrorismo. Veja leis, obrigações e prazos.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "O que é PLD/FT: guia da prevenção à lavagem de dinheiro | kycert",
    description:
      "PLD/FT é o conjunto de políticas e controles para impedir o uso da empresa em lavagem de dinheiro e financiamento do terrorismo. Veja leis, obrigações e prazos.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"O que é PLD/FT: leis, obrigações e como funciona um programa de prevenção","description":"PLD/FT é o conjunto de políticas e controles para impedir o uso da empresa em lavagem de dinheiro e financiamento do terrorismo. Veja leis, obrigações e prazos.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/o-que-e-pld-ft","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que significa PLD/FT?","acceptedAnswer":{"@type":"Answer","text":"Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo. É o equivalente brasileiro de AML/CFT."}},{"@type":"Question","name":"Qual a diferença entre AML e PLD?","acceptedAnswer":{"@type":"Answer","text":"Na prática, nenhuma: AML (*Anti-Money Laundering*) é o termo em inglês e PLD, o termo usado na regulação brasileira. O \\"FT\\" acrescenta o financiamento do terrorismo."}},{"@type":"Question","name":"Qual lei trata da lavagem de dinheiro no Brasil?","acceptedAnswer":{"@type":"Answer","text":"A Lei 9.613/1998, que define o crime, lista os sujeitos obrigados e cria o Coaf."}},{"@type":"Question","name":"Quem fiscaliza o PLD/FT?","acceptedAnswer":{"@type":"Answer","text":"Depende do setor. O Banco Central fiscaliza as instituições autorizadas e as PSAVs, a CVM o mercado de capitais, a SUSEP os seguros. O Coaf supervisiona os setores sem regulador próprio e recebe as comunicações de todos."}},{"@type":"Question","name":"Toda empresa de cripto precisa ter PLD/FT?","acceptedAnswer":{"@type":"Answer","text":"Sim. As prestadoras de serviços de ativos virtuais estão no art. 9º, XIX, da Lei 9.613 desde a Lei 14.478/2022, e a Res. BCB 520/2025 detalha os deveres das PSAVs."}},{"@type":"Question","name":"Qual o prazo para comunicar uma operação suspeita ao Coaf?","acceptedAnswer":{"@type":"Answer","text":"Pela Circular 3.978, até o dia útil seguinte à decisão de comunicar. A decisão deve sair dentro do prazo de análise de 45 dias."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"PLD/FT"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">PLD/FT</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">PLD/FT / fundamentos</div>
<h1>O que é PLD/FT: leis, obrigações e como funciona um programa de prevenção</h1>
<div class="art-meta"><span>PLD/FT</span><span>01/10/2026</span><span>10 min de leitura</span></div>
<p class="lead-p"><strong>PLD/FT é a sigla de Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo.</strong> É o conjunto de políticas, procedimentos e controles que uma empresa regulada mantém para não ser usada para:</p>
<ul><li>dar aparência legal a recursos de origem criminosa;</li><li>financiar atos terroristas.</li></ul>
<p>Fora do Brasil, o mesmo tema costuma aparecer como <strong>AML</strong> (*Anti-Money Laundering*) ou <strong>AML/CFT</strong> (*Countering the Financing of Terrorism*). Quando a sigla inclui a proliferação de armas de destruição em massa, aparece como <strong>PLD/FTP</strong>.</p>
<p>Para as instituições autorizadas pelo Banco Central, PLD/FT é obrigação legal com regras detalhadas. Ter uma política escrita não basta: o regulador espera ver o processo funcionando e documentado.</p>
<h2>O que é lavagem de dinheiro</h2>
<p>A <a href="https://www.planalto.gov.br/ccivil_03/leis/l9613.htm" target="_blank" rel="noopener">Lei 9.613/1998</a> define o crime no art. 1º: ocultar ou dissimular a natureza, origem, localização, disposição, movimentação ou propriedade de bens, direitos ou valores provenientes, direta ou indiretamente, de <strong>infração penal</strong>. Desde 2012, qualquer infração penal pode ser crime antecedente.</p>
<p>A literatura costuma descrever a lavagem em três fases. Elas ajudam a entender onde cada controle atua:</p>
<div class="art-table"><table><thead><tr><th>Fase</th><th>O que acontece</th><th>Onde o controle atua</th></tr></thead><tbody><tr><td>Colocação</td><td>O recurso ilícito entra no sistema (depósitos, compra de ativos, cripto)</td><td>KYC no onboarding, limites, origem dos recursos</td></tr><tr><td>Ocultação</td><td>Movimentações sucessivas para apagar o rastro (contas de passagem, fracionamento, transferências internacionais)</td><td>Monitoramento de transações, KYT</td></tr><tr><td>Integração</td><td>O recurso volta à economia com aparência legal</td><td>Monitoramento, análise de compatibilidade patrimonial</td></tr></tbody></table></div>
<p>O financiamento do terrorismo segue outra lógica. O dinheiro pode ter origem lícita, e o problema está no destino. O crime está na <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13260.htm" target="_blank" rel="noopener">Lei 13.260/2016</a>. O cumprimento de sanções da ONU, com bloqueio de ativos, está na <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13810.htm" target="_blank" rel="noopener">Lei 13.810/2019</a>. Veja <a href="/blog/listas-de-sancoes-lei-13810">como funcionam as listas de sanções</a>.</p>
<h2>Quem é obrigado a ter PLD/FT</h2>
<p>O art. 9º da Lei 9.613 lista os "sujeitos obrigados". Entre eles estão:</p>
<ul><li>instituições financeiras;</li><li>quem compra e vende moeda estrangeira (câmbio);</li><li>quem atua com valores mobiliários;</li><li>seguradoras;</li><li>administradoras de cartão;</li><li>desde a Lei 14.478/2022, as <strong>prestadoras de serviços de ativos virtuais</strong> (inciso XIX).</li></ul>
<p>Cada setor tem seu regulador, que detalha as obrigações:</p>
<div class="art-table"><table><thead><tr><th>Setor</th><th>Regulador</th><th>Norma principal de PLD/FT</th></tr></thead><tbody><tr><td>Bancos, IPs, câmbio, cooperativas, consórcios</td><td>Banco Central</td><td>Circular 3.978/2020</td></tr><tr><td>PSAVs autorizadas</td><td>Banco Central</td><td>Res. BCB 520/2025 remete à regulamentação de PLD/FT aplicável às instituições autorizadas</td></tr><tr><td>Mercado de valores mobiliários</td><td>CVM</td><td>Resolução CVM 50/2021</td></tr><tr><td>Seguros e previdência</td><td>SUSEP</td><td>Regulamentação própria (<a href="/blog/seguradoras-susep-onboarding-pld">veja o post sobre seguradoras</a>)</td></tr><tr><td>Setores sem regulador próprio</td><td>Coaf</td><td>Resoluções do Coaf</td></tr></tbody></table></div>
<h2>As obrigações centrais da Lei 9.613</h2>
<p>A lei resume o dever em três verbos:</p>
<ol><li><strong>Identificar clientes e manter cadastro atualizado</strong> (art. 10, I). É o <a href="/blog/o-que-e-kyc">KYC</a>.</li><li><strong>Manter registro das transações</strong>, inclusive com ativos virtuais (art. 10, II).</li><li><strong>Dispensar especial atenção às operações suspeitas e comunicá-las ao Coaf</strong>, sem dar ciência ao cliente (art. 11).</li></ol>
<p>Quem descumpre fica sujeito, cumulativamente ou não, a:</p>
<ul><li>advertência;</li><li>multa de até o dobro do valor da operação, até o dobro do lucro obtido ou até <strong>R$ 20 milhões</strong>;</li><li>inabilitação temporária de administradores;</li><li>cassação ou suspensão da autorização (art. 12).</li></ul>
<h2>Como é um programa de PLD/FT segundo a Circular 3.978</h2>
<p>A <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Circular&amp;numero=3978" target="_blank" rel="noopener">Circular BCB nº 3.978/2020</a> é o regulamento mais completo do tema no país. Na prática, é a referência de mercado. Ela organiza o programa em oito componentes:</p>
<h3>1. Política (arts. 2º a 7º)</h3>
<p>É um documento aprovado pelo conselho ou pela diretoria. Precisa ser compatível com os perfis de risco dos clientes, da instituição, dos produtos e dos parceiros, ser divulgado internamente e ser mantido atualizado.</p>
<h3>2. Governança (arts. 8º e 9º)</h3>
<p>É a estrutura que garante o cumprimento da política. Inclui um <strong>diretor responsável</strong> indicado formalmente ao Banco Central.</p>
<h3>3. Avaliação interna de risco (arts. 10 a 12)</h3>
<p>É o diagnóstico de quanto os produtos e serviços da instituição podem ser usados para lavagem. Desse diagnóstico saem as categorias de risco usadas em todo o resto. A avaliação é documentada, aprovada pelo diretor e revisada periodicamente.</p>
<h3>4. Conhecer clientes, funcionários e parceiros (arts. 13 a 27 e 56 a 60)</h3>
<p>É o KYC, com identificação, qualificação, classificação, <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final</a> e <a href="/blog/pessoa-exposta-politicamente-pep">PEP</a>. O dever se estende a funcionários, parceiros e prestadores terceirizados.</p>
<h3>5. Registro de operações (arts. 28 a 37)</h3>
<p>É o registro de todas as operações, com origem e destino dos recursos. Há regras específicas para dinheiro em espécie acima de R$ 2 mil e de R$ 50 mil.</p>
<h3>6. Monitoramento, seleção e análise (arts. 38 a 47)</h3>
<p>São os procedimentos para identificar operações e situações suspeitas, descritos em manual próprio. É a parte mais operacional do programa, detalhada em <a href="/blog/monitoramento-de-transacoes-pld">monitoramento de transações</a>.</p>
<h3>7. Comunicação ao Coaf (arts. 48 a 55)</h3>
<p>É o envio das suspeitas e das comunicações automáticas pelo Siscoaf. Se não houver comunicação no ano, é preciso fazer a declaração negativa.</p>
<h3>8. Avaliação de efetividade (arts. 61 a 65)</h3>
<p>É um relatório anual que testa se tudo isso funciona, com plano de ação para as deficiências encontradas.</p>
<h2>Os prazos que o compliance precisa saber de cor</h2>
<div class="art-table"><table><thead><tr><th>Obrigação</th><th>Prazo</th><th>Base</th></tr></thead><tbody><tr><td>Iniciar relação sem qualificação completa</td><td>Até 30 dias (exceção)</td><td>Circular 3.978, art. 23</td></tr><tr><td>Monitorar e selecionar uma operação</td><td>Até 45 dias da ocorrência</td><td>Art. 39, parágrafo único</td></tr><tr><td>Analisar a operação selecionada</td><td>Até 45 dias da seleção</td><td>Art. 43, § 1º</td></tr><tr><td>Comunicar suspeita ao Coaf</td><td>Até o dia útil seguinte à decisão</td><td>Art. 48, § 2º</td></tr><tr><td>Comunicar operações em espécie ≥ R$ 50 mil</td><td>Até o dia útil seguinte à operação</td><td>Art. 49</td></tr><tr><td>Declaração de não ocorrência</td><td>Até 10 dias úteis após o fim do ano</td><td>Art. 54</td></tr><tr><td>Guarda de informações de KYC e registros</td><td>Mínimo de 10 anos</td><td>Art. 67</td></tr><tr><td>PEP: manutenção da condição após sair do cargo</td><td>5 anos</td><td>Art. 27, § 5º</td></tr></tbody></table></div>
<h2>PLD/FT em PSAVs e empresas de cripto</h2>
<p>As PSAVs passaram a ter PLD/FT como obrigação regulatória detalhada com as <a href="/blog/resolucao-bcb-520-psav">Resoluções BCB 519, 520 e 521/2025</a>. Além de seguir a regulamentação de PLD/FT aplicável às instituições autorizadas, a Res. 520 traz deveres próprios do mercado de ativos virtuais:</p>
<ul><li>controles para identificar <strong>carteiras sancionadas</strong> (art. 34, III);</li><li>envio de dados de originador e beneficiário nas transferências, a <a href="/blog/travel-rule-brasil">Travel Rule</a> (art. 44);</li><li>guarda dos registros das transações por <strong>cinco anos</strong> (art. 45);</li><li>vedação a <strong>misturadores e embaralhadores</strong> (art. 90).</li></ul>
<p>O monitoramento específico de cripto, com análise de carteiras e exposição on-chain, costuma ser chamado de <a href="/blog/o-que-e-kyt">KYT</a>.</p>
<h2>Onde os programas costumam falhar</h2>
<p>A dificuldade raramente é escrever a política. É provar que ela é executada. Numa fiscalização, o supervisor pede evidência:</p>
<ul><li>como o cliente X foi classificado;</li><li>por que o alerta Y foi encerrado sem comunicação;</li><li>quem decidiu e com base em quê.</li></ul>
<p>Programas que não registram as decisões na hora acabam reconstruindo tudo à mão quando o supervisor chega. Detalhamos isso em <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização do BACEN</a> e no <a href="/blog/checklist-prontidao-fiscalizacao">checklist de prontidão para fiscalização</a>.</p>
<h2>Perguntas frequentes</h2>
<h3>O que significa PLD/FT?</h3>
<p>Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo. É o equivalente brasileiro de AML/CFT.</p>
<h3>Qual a diferença entre AML e PLD?</h3>
<p>Na prática, nenhuma: AML (*Anti-Money Laundering*) é o termo em inglês e PLD, o termo usado na regulação brasileira. O "FT" acrescenta o financiamento do terrorismo.</p>
<h3>Qual lei trata da lavagem de dinheiro no Brasil?</h3>
<p>A Lei 9.613/1998, que define o crime, lista os sujeitos obrigados e cria o Coaf.</p>
<h3>Quem fiscaliza o PLD/FT?</h3>
<p>Depende do setor. O Banco Central fiscaliza as instituições autorizadas e as PSAVs, a CVM o mercado de capitais, a SUSEP os seguros. O Coaf supervisiona os setores sem regulador próprio e recebe as comunicações de todos.</p>
<h3>Toda empresa de cripto precisa ter PLD/FT?</h3>
<p>Sim. As prestadoras de serviços de ativos virtuais estão no art. 9º, XIX, da Lei 9.613 desde a Lei 14.478/2022, e a Res. BCB 520/2025 detalha os deveres das PSAVs.</p>
<h3>Qual o prazo para comunicar uma operação suspeita ao Coaf?</h3>
<p>Pela Circular 3.978, até o dia útil seguinte à decisão de comunicar. A decisão deve sair dentro do prazo de análise de 45 dias.</p>
<h2>Conclusão</h2>
<p>PLD/FT é um programa com oito componentes e uma exigência que atravessa todos eles: <strong>evidência</strong>. A lei define o dever, a Circular 3.978 define o processo, e a fiscalização verifica se o processo deixa rastro.</p>
<p>Para empresas que estão entrando no perímetro regulado agora, como as PSAVs, o caminho mais curto é desenhar o programa já pensando em como cada decisão será comprovada.</p>
<div class="art-cta"><p><strong>PLD/FT que se prova.</strong> A kycert registra cada etapa da diligência do cliente (identificação, PEP, sanções, mídia adversa e decisão) como trilha auditável.</p><div class="cta"><a href="/lp-pld-ft" class="btn btn-primary btn-lg">Ver como a kycert estrutura a trilha de PLD/FT</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/o-que-e-kyc">O que é KYC →</a><a href="/blog/monitoramento-de-transacoes-pld">Monitoramento de transações →</a><a href="/blog/checklist-prontidao-fiscalizacao">Checklist de prontidão para fiscalização →</a></div>
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
