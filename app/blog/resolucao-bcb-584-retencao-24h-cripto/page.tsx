import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "Resolução BCB 584: como aplicar a retenção de 24h em cripto",
  description:
    "A partir de 1º/01/2027, transferências de cripto acima de US$ 10 mil para o exterior ou para autocustódia ficam retidas por 24h. Veja como operar e documentar.",
  alternates: { canonical: "/blog/resolucao-bcb-584-retencao-24h-cripto" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/resolucao-bcb-584-retencao-24h-cripto",
    siteName: 'kycert',
    title: "Resolução BCB 584: como aplicar a retenção de 24h em cripto | kycert",
    description:
      "A partir de 1º/01/2027, transferências de cripto acima de US$ 10 mil para o exterior ou para autocustódia ficam retidas por 24h. Veja como operar e documentar.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Resolução BCB 584: como aplicar a retenção de 24h em cripto | kycert",
    description:
      "A partir de 1º/01/2027, transferências de cripto acima de US$ 10 mil para o exterior ou para autocustódia ficam retidas por 24h. Veja como operar e documentar.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Resolução BCB 584: como aplicar a retenção de 24 horas em transferências de cripto","description":"A partir de 1º/01/2027, transferências de cripto acima de US$ 10 mil para o exterior ou para autocustódia ficam retidas por 24h. Veja como operar e documentar.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/resolucao-bcb-584-retencao-24h-cripto","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é a Resolução BCB 584?","acceptedAnswer":{"@type":"Answer","text":"É a norma do Banco Central, de 7 de agosto de 2026, que leva para os serviços de ativos virtuais as regras de prevenção a fraudes da Res. BCB 142/2021. Ela cria uma retenção cautelar de 24 horas em transferências para o exterior e para carteiras autocustodiadas."}},{"@type":"Question","name":"Quando a Resolução BCB 584 entra em vigor?","acceptedAnswer":{"@type":"Answer","text":"Em 1º de janeiro de 2027."}},{"@type":"Question","name":"A retenção de 24 horas vale para qualquer transferência de cripto?","acceptedAnswer":{"@type":"Answer","text":"Não. Vale para transferências destinadas a entidades de ativos virtuais no exterior ou a carteiras autocustodiadas. É obrigatória acima de US$ 10 mil por operação ou no total do dia, e também quando a política de risco da instituição indicar."}},{"@type":"Question","name":"A PSAV pode liberar a transferência antes de 24 horas?","acceptedAnswer":{"@type":"Answer","text":"Pode, com decisão fundamentada que considere os critérios de risco da sua política. A decisão e a fundamentação precisam ser documentadas."}},{"@type":"Question","name":"Stablecoins como USDT entram na regra?","acceptedAnswer":{"@type":"Answer","text":"Sim. A norma inclui expressamente os ativos virtuais referenciados em moeda fiduciária."}},{"@type":"Question","name":"A retenção bloqueia os ativos do cliente?","acceptedAnswer":{"@type":"Answer","text":"Não de forma definitiva. A norma diz que a medida é cautelar e não implica indisponibilidade definitiva dos ativos."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"PSAV"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">PSAV</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">PSAV / regulação</div>
<h1>Resolução BCB 584: como aplicar a retenção de 24 horas em transferências de cripto</h1>
<div class="art-meta"><span>PSAV</span><span>01/10/2026</span><span>8 min de leitura</span></div>
<p class="lead-p">A partir de <strong>1º de janeiro de 2027</strong>, quem presta serviços de ativos virtuais no Brasil só poderá executar certas transferências <strong>24 horas depois de receber o aporte do cliente</strong>. A regra vale para envios a <strong>prestadoras de serviços de ativos virtuais no exterior</strong> e a <strong>carteiras autocustodiadas</strong>. É obrigatória acima de <strong>US$ 10 mil</strong> por operação ou na soma do dia. Abaixo disso, também se aplica quando a política de risco da instituição indicar.</p>
<p>A retenção é <strong>cautelar</strong>. Ela existe para que a instituição analise o risco da operação antes que os recursos saiam do seu alcance. A instituição pode liberar antes do prazo, desde que a decisão seja <strong>fundamentada e documentada</strong>. Na prática, a parte mais difícil é justamente essa documentação.</p>
<p>A norma é a <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&amp;numero=584" target="_blank" rel="noopener">Resolução BCB nº 584, de 7 de agosto de 2026</a>. Ela altera a Resolução BCB nº 142/2021, que trata de prevenção a fraudes em pagamentos, e passa a incluir os serviços de ativos virtuais.</p>
<h2>A regra em uma tabela</h2>
<div class="art-table"><table><thead><tr><th>Ponto</th><th>O que diz a norma</th></tr></thead><tbody><tr><td>Quem cumpre</td><td>Instituições financeiras, IPs do SPB, demais autorizadas pelo BC e sociedades prestadoras de serviços de ativos virtuais, inclusive as que estão em fase de adequação</td></tr><tr><td>Destinos atingidos</td><td>Entidade de ativos virtuais constituída no exterior; carteira autocustodiada</td></tr><tr><td>Gatilho obrigatório</td><td>Acima de US$ 10.000 por operação <strong>ou</strong> no total de operações do cliente no mesmo dia</td></tr><tr><td>Gatilho por risco</td><td>Qualquer valor, se a política de gerenciamento de riscos indicar</td></tr><tr><td>Prazo</td><td>24 horas contadas do recebimento do aporte na carteira (em reais ou em ativos virtuais)</td></tr><tr><td>Saídas possíveis</td><td>Liberar ao fim do prazo, rejeitar a operação ou liberar antes com decisão fundamentada</td></tr><tr><td>Ativos incluídos</td><td>Serviços do art. 5º, I a V, da Lei 14.478/2022, incluídas as stablecoins</td></tr><tr><td>Vigência</td><td>1º/01/2027</td></tr></tbody></table></div>
<h2>Quem precisa cumprir a Resolução BCB 584</h2>
<p>A Res. 584 muda o art. 1º da Res. BCB 142/2021, que passa a abranger expressamente:</p>
<ul><li>as <strong>sociedades prestadoras de serviços de ativos virtuais</strong>;</li><li>as instituições financeiras, IPs e demais autorizadas que prestem esses serviços;</li><li>as PSAVs <strong>em fase de adequação</strong>, ou seja, as que já operavam quando a <a href="/blog/resolucao-bcb-520-psav">Res. 520</a> entrou em vigor e estão no processo de autorização (art. 88, § 2º, da Res. 520).</li></ul>
<p>A empresa que ainda aguarda a análise do pedido de autorização <strong>não fica de fora</strong>.</p>
<p>Os serviços abrangidos são os cinco do <a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14478.htm" target="_blank" rel="noopener">art. 5º da Lei 14.478/2022</a>:</p>
<ol><li>troca entre ativos virtuais e moeda;</li><li>troca entre ativos virtuais;</li><li>transferência;</li><li>custódia;</li><li>serviços ligados à oferta ou venda de ativos virtuais.</li></ol>
<p>A norma menciona as <strong>stablecoins</strong> de forma expressa. Transferências de USDT ou USDC para fora do ambiente regulado entram na regra como qualquer outro ativo. Veja também <a href="/blog/usdt-stablecoins-risco-compliance">o que muda no compliance de USDT e stablecoins</a>.</p>
<h2>Quando a retenção é obrigatória</h2>
<h3>1. O destino precisa ser de risco</h3>
<p>A regra não alcança qualquer saída. Ela vale quando a transferência vai para:</p>
<ul><li><strong>uma entidade constituída no exterior</strong> que atue no mercado de ativos virtuais, como uma exchange estrangeira;</li><li><strong>uma carteira autocustodiada</strong>. Pela Res. BCB 521/2025, é a carteira cujo dono controla a chave privada e consegue movimentá-la sem uma prestadora de serviços.</li></ul>
<p>Transferências entre PSAVs autorizadas no Brasil <strong>não estão</strong> entre os destinos listados.</p>
<p>Daqui sai o primeiro requisito técnico: a instituição precisa <strong>classificar o destino de cada saque</strong> (PSAV nacional, entidade estrangeira ou autocustódia) antes de executar a ordem. Sem essa classificação, ela não tem como saber se a regra se aplica. Esse é o tipo de informação que a <a href="/blog/analise-de-carteiras-cripto">análise de carteiras</a> entrega.</p>
<h3>2. O valor passa de US$ 10 mil, por operação ou no dia</h3>
<p>A retenção é obrigatória quando a operação passa do equivalente a US$ 10.000. Também é obrigatória quando <strong>a soma das operações do cliente no mesmo dia</strong> passa desse valor.</p>
<p>Esse critério diário existe para impedir o fracionamento. Cinco saques de US$ 2.500 no mesmo dia somam US$ 12.500 e disparam a retenção.</p>
<p>O sistema precisa converter para dólar operações feitas em reais ou em outros ativos e somá-las por cliente ao longo do dia.</p>
<h3>3. A política de risco pede retenção, mesmo abaixo do limite</h3>
<p>Abaixo de US$ 10 mil, a instituição também deve reter quando sua política de gerenciamento de riscos indicar. A norma obriga que a política tenha critérios para isso, compatíveis no mínimo com quatro perfis de risco:</p>
<ul><li><strong>do cliente</strong>: histórico, PEP, mídia adversa, sanções, compatibilidade com a renda declarada, tempo de relacionamento;</li><li><strong>da operação ou do serviço</strong>: valor fora do padrão, saque logo após o depósito, ativo envolvido;</li><li><strong>da contraparte</strong>: quem está do outro lado e o que se sabe sobre a carteira ou a entidade de destino;</li><li><strong>da jurisdição</strong>: onde a entidade de destino está sediada.</li></ul>
<p>A instituição precisa definir esses critérios <strong>por escrito, antes de 1º/01/2027</strong>. Uma política que diz apenas "retemos quando houver suspeita" dificilmente vai se sustentar numa supervisão.</p>
<h2>De onde contam as 24 horas</h2>
<p>A norma diz que a instituição só pode executar a transferência <strong>24 horas após o recebimento dos recursos de aporte na carteira</strong>. O prazo conta do aporte, não da ordem de transferência.</p>
<p><strong>Exemplo:</strong> um cliente deposita R$ 80 mil via Pix às 9h de segunda. Compra USDT e pede o envio para uma carteira autocustodiada às 15h. Pela regra, a transferência só pode sair a partir das 9h de terça, salvo liberação antecipada fundamentada.</p>
<blockquote><p><strong>Fato vs. interpretação:</strong> pela leitura literal da norma, se o aporte foi feito há mais de 24 horas, a condição de tempo já estaria cumprida quando o cliente pedir o saque. Isso não dispensa a análise de risco da operação, que continua exigida pela própria Res. 142 e pelas normas de PLD/FT (§ 10 do novo art. 2º-B). Como a norma ainda não entrou em vigor, vale confirmar esse ponto com a assessoria jurídica e acompanhar eventuais esclarecimentos do Banco Central.</p></blockquote>
<h2>O que fazer durante a retenção</h2>
<p>Encerrada a análise, há três saídas possíveis:</p>
<ol><li><strong>Liberar ao fim das 24 horas</strong>, se a análise não encontrou impedimento.</li><li><strong>Rejeitar a operação</strong>, se a análise indicar risco que a justifique.</li><li><strong>Liberar antes do prazo</strong>, com base em decisão fundamentada que contemple os critérios de risco da política.</li></ol>
<p>A terceira saída é a que mais pesa na experiência do cliente e a que mais pesa em compliance. A norma exige que a <strong>decisão, a fundamentação e os critérios usados sejam documentados</strong> (§ 6º).</p>
<p>Se uma análise posterior concluir que a liberação antecipada foi indevida, a instituição precisa juntar um documento com <strong>as medidas tomadas para corrigir seus controles internos</strong> (§ 7º). Esse material deve estar pronto para envio ao Banco Central.</p>
<p>O BC também pode, se encontrar descumprimento, impor a uma instituição ou a um grupo delas (art. 6º-A):</p>
<ul><li>prazo de retenção <strong>maior</strong> que 24 horas;</li><li>retenção em operações <strong>abaixo</strong> de US$ 10 mil;</li><li><strong>restrições</strong> à liberação antecipada.</li></ul>
<p>Liberar antes do prazo sem critério consistente, portanto, pode custar à empresa justamente a flexibilidade que ela queria preservar.</p>
<h2>O que comunicar ao cliente</h2>
<p>A instituição precisa informar ao cliente que a retenção foi aplicada. A comunicação deve deixar claro:</p>
<ul><li>que a medida é <strong>cautelar</strong>;</li><li>qual é o <strong>prazo</strong> aplicável.</li></ul>
<p>A retenção também <strong>não torna os ativos indisponíveis de forma definitiva</strong>, e o texto ao cliente não deve passar essa impressão.</p>
<p>Um modelo de mensagem, a ser revisado pelo jurídico:</p>
<blockquote><p>"Sua transferência de 12.500 USDT para uma carteira externa está em análise de segurança, conforme a Resolução BCB nº 584/2026. Trata-se de uma retenção cautelar de até 24 horas a partir do seu depósito. Seus ativos continuam disponíveis em sua conta e você será avisado assim que a análise for concluída."</p></blockquote>
<h2>Como estruturar o processo antes de janeiro de 2027</h2>
<ol><li><strong>Mapeie os fluxos de saída.</strong> Liste os pontos onde um ativo sai da plataforma (saque on-chain, envio para outra exchange, OTC, liquidação) e classifique o destino de cada um.</li><li><strong>Identifique o dono da carteira autocustodiada.</strong> A Res. 521 já exige isso nas operações que ela inclui no mercado de câmbio. O mesmo dado ajuda a decidir na retenção.</li><li><strong>Implemente o cálculo de valor.</strong> Faça a conversão para dólar e a soma diária por cliente, com trilha de qual cotação foi usada.</li><li><strong>Escreva os critérios de risco.</strong> Inclua na política os quatro perfis (cliente, operação, contraparte, jurisdição) e diga o que dispara a retenção abaixo de US$ 10 mil e o que permite liberar antes.</li><li><strong>Mantenha o perfil de risco do cliente atualizado.</strong> Cadastro desatualizado leva a decisão sem base. <a href="/blog/o-que-e-kyc">KYC</a>, <a href="/blog/pessoa-exposta-politicamente-pep">PEP</a>, <a href="/blog/listas-de-sancoes-lei-13810">sanções</a> e mídia adversa precisam estar disponíveis no momento da análise.</li><li><strong>Registre cada decisão.</strong> Para cada retenção, guarde quem analisou, os critérios aplicados, o resultado e o horário.</li><li><strong>Atualize o registro diário de fraudes.</strong> A Res. 584 também muda o art. 4º da Res. 142: o registro diário de fraudes e tentativas passa a incluir os serviços de ativos virtuais, com as medidas corretivas adotadas.</li><li><strong>Prepare atendimento e produto.</strong> Ajuste os textos no app, o FAQ e o roteiro do suporte. Clientes de alto valor vão perguntar.</li></ol>
<h2>Como a retenção se relaciona com a Travel Rule</h2>
<p>A Res. 584 não substitui as regras de rastreabilidade da Res. BCB 520/2025. Elas se somam:</p>
<ul><li>O <strong>art. 44 da Res. 520</strong> exige que a PSAV envie à instituição receptora dados do <strong>originador</strong> e do <strong>beneficiário</strong> de cada operação.</li><li>O <strong>art. 89</strong> escalona essa implantação: <strong>etapa I</strong>, entre PSAVs no Brasil, até <strong>2/02/2027</strong>; <strong>etapa II</strong>, operações internacionais, em até 365 dias depois disso.</li><li>O cumprimento é obrigatório para todas as autorizadas a partir de <strong>2/02/2028</strong>.</li></ul>
<p>Na prática, quando a transferência vai para o exterior ou para autocustódia, a instituição muitas vezes ainda não recebe da outra ponta os dados da <a href="/blog/travel-rule-brasil">Travel Rule</a>. A retenção dá o tempo para fazer a análise que esses dados ainda não permitem fazer de forma automática.</p>
<h2>Erros comuns na adequação</h2>
<ul><li><strong>Tratar a regra só como um limite de valor.</strong> O critério por risco abaixo de US$ 10 mil é obrigatório na política.</li><li><strong>Liberar antes do prazo por pressão comercial</strong>, sem fundamentação registrada.</li><li><strong>Ignorar a soma diária</strong> e permitir o fracionamento.</li><li><strong>Não distinguir os destinos.</strong> Sem classificar a carteira, a regra fica impossível de aplicar.</li><li><strong>Achar que a PSAV em adequação está fora.</strong> A norma diz expressamente que ela está dentro.</li></ul>
<h2>Perguntas frequentes</h2>
<h3>O que é a Resolução BCB 584?</h3>
<p>É a norma do Banco Central, de 7 de agosto de 2026, que leva para os serviços de ativos virtuais as regras de prevenção a fraudes da Res. BCB 142/2021. Ela cria uma retenção cautelar de 24 horas em transferências para o exterior e para carteiras autocustodiadas.</p>
<h3>Quando a Resolução BCB 584 entra em vigor?</h3>
<p>Em 1º de janeiro de 2027.</p>
<h3>A retenção de 24 horas vale para qualquer transferência de cripto?</h3>
<p>Não. Vale para transferências destinadas a entidades de ativos virtuais no exterior ou a carteiras autocustodiadas. É obrigatória acima de US$ 10 mil por operação ou no total do dia, e também quando a política de risco da instituição indicar.</p>
<h3>A PSAV pode liberar a transferência antes de 24 horas?</h3>
<p>Pode, com decisão fundamentada que considere os critérios de risco da sua política. A decisão e a fundamentação precisam ser documentadas.</p>
<h3>Stablecoins como USDT entram na regra?</h3>
<p>Sim. A norma inclui expressamente os ativos virtuais referenciados em moeda fiduciária.</p>
<h3>A retenção bloqueia os ativos do cliente?</h3>
<p>Não de forma definitiva. A norma diz que a medida é cautelar e não implica indisponibilidade definitiva dos ativos.</p>
<h2>Conclusão</h2>
<p>A Resolução BCB 584 cria um intervalo obrigatório de análise antes que os recursos saiam para fora do perímetro regulado. Para cumpri-la, a instituição precisa de três coisas:</p>
<ul><li><strong>classificar o destino</strong> de cada transferência;</li><li><strong>ter critérios de risco por escrito</strong> para o cliente, a operação, a contraparte e a jurisdição;</li><li><strong>registrar cada decisão</strong>, sobretudo as liberações antecipadas.</li></ul>
<p>Quem chegar a janeiro com esses três pontos resolvidos consegue reduzir a fricção para clientes de baixo risco e ainda ter o que mostrar ao supervisor.</p>
<div class="art-cta"><p><strong>A decisão de liberar ou reter começa pelo perfil de risco do cliente.</strong> A kycert reúne KYC, sanções, PEP e mídia adversa num Dossiê de Risco com a decisão e o critério registrados, para que cada análise tenha fundamento.</p><div class="cta"><a href="/solucoes/psav" class="btn btn-primary btn-lg">Conhecer a solução para PSAV</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/resolucao-bcb-520-psav">Resolução BCB 520/2025 para PSAV →</a><a href="/blog/travel-rule-brasil">Travel Rule no Brasil →</a><a href="/blog/o-que-e-kyt">O que é KYT →</a></div>
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
