import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'abordagem-baseada-em-risco-abr-exemplo-pratico',
  title: 'Abordagem baseada em risco (ABR): exemplo prático com pesos, pontuação e três clientes',
  metaTitle: 'Abordagem baseada em risco (ABR): exemplo prático',
  description:
    'Abordagem baseada em risco (ABR) na prática: fatores, pesos, tabela de pontuação e três clientes fictícios enquadrados em risco baixo, médio e alto.',
  category: 'PLD/FT',
  eyebrow: 'PLD/FT / abordagem baseada em risco',
  excerpt:
    'Como montar a avaliação interna de risco da Circular BCB 3.978/2020 e enquadrar clientes: um modelo ilustrativo completo, com pesos, pontuação e a diligência de cada nível.',
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  lead:
    'A <a href="/glossario/abr">abordagem baseada em risco</a> (ABR) diz que a diligência deve ser proporcional ao risco: mais atenção onde o risco é maior, menos fricção onde é menor. A teoria é simples. O difícil é transformar isso em critérios que dois analistas aplicariam do mesmo jeito. Este texto explica o que a Circular BCB 3.978/2020 pede e apresenta um exemplo completo e ilustrativo, com fatores, pesos, tabela de pontuação e três clientes fictícios, para você adaptar à sua realidade.',
  figure: {
    src: '/images/blog/matriz-risco-abr.svg',
    alt: 'Matriz que liga a avaliação interna de risco ao enquadramento do cliente em baixo, médio ou alto risco e à diligência correspondente a cada nível.',
    caption: 'Da avaliação de risco da instituição ao enquadramento do cliente e à diligência aplicada.',
    width: 1200,
    height: 480,
  },
  body: `
<h2>Contexto regulatório: a ABR como base de toda a PLD/FT</h2>
<p>Nenhuma instituição tem recursos para aplicar a mesma diligência máxima a todos os clientes, e nenhuma deveria. A ABR organiza o esforço: o risco é identificado, medido, classificado e tratado de forma proporcional. Ela vale para bancos, <a href="/solucoes/cambio">corretoras de câmbio</a>, cooperativas, instituições de pagamento e <a href="/solucoes/psav">PSAVs</a>, e aparece com o mesmo espírito na Resolução CVM 50/2021 e na Circular SUSEP 612/2020.</p>
<p>O erro mais frequente é tratar a ABR como um documento de política que ninguém consulta. Na fiscalização, o que importa é a cadeia completa: a avaliação interna de risco justifica as categorias, as categorias definem o enquadramento de cada cliente, e o enquadramento define a diligência. Se qualquer elo faltar, o documento perde valor.</p>

<h2>O que a Circular BCB 3.978/2020 exige: avaliação interna de risco e classificação</h2>
<p>A Circular 3.978/2020 pede que a instituição faça uma <strong>avaliação interna de risco</strong> para identificar e medir o risco de utilização de seus produtos e serviços na lavagem de dinheiro e no financiamento do terrorismo. Em termos práticos, a avaliação considera ao menos quatro perfis de risco:</p>
<ul>
<li><strong>Clientes:</strong> quem eles são, a atividade, a origem dos recursos, a condição de <a href="/glossario/pep">PEP</a>.</li>
<li><strong>A própria instituição:</strong> modelo de negócio, áreas geográficas de atuação, estrutura.</li>
<li><strong>Operações, transações, produtos, serviços e canais:</strong> o que é oferecido e como é contratado.</li>
<li><strong>Atividades de funcionários, parceiros e prestadores de serviços terceirizados.</strong></li>
</ul>
<p>O resultado é uma classificação em categorias de risco, no mínimo alto, médio e baixo, com procedimentos de diligência diferentes para cada uma. A avaliação deve ser documentada, aprovada pela diretoria, e revista periodicamente e quando houver mudança relevante no modelo de negócio. Confira no texto vigente da norma a periodicidade mínima exigida e os detalhes de cada exigência antes de fixá-los na sua política.</p>
<p>O <a href="/blog/circular-3978-checklist-pld-ft">checklist da Circular 3.978</a> mostra onde a avaliação se encaixa nas demais obrigações. Aqui o foco é a parte do cliente: como sair de uma lista de fatores para um enquadramento defensável.</p>

<h2>Exemplo prático (ilustrativo): o modelo de pontuação</h2>
<div class="callout"><strong>Atenção: exemplo ilustrativo</strong><p>Os fatores, pesos, notas, faixas e prazos abaixo são fictícios e servem para explicar o método. Não são recomendação regulatória nem referência de mercado. Cada instituição deve definir os seus a partir da própria avaliação interna de risco, aprovada pela diretoria.</p></div>
<h3>Passo 1: escolha os fatores</h3>
<p>Seis fatores de cliente, cada um com uma nota de 1 (risco baixo), 2 (médio) ou 3 (alto):</p>
<table class="art-table">
<thead><tr><th>Fator</th><th>Peso</th><th>Nota 1 (baixo)</th><th>Nota 2 (médio)</th><th>Nota 3 (alto)</th></tr></thead>
<tbody>
<tr><td>Perfil e atividade</td><td>25%</td><td>Assalariado ou atividade simples e comprovada</td><td>Autônomo, PJ com estrutura simples ou com holding</td><td>Atividade sensível, estrutura opaca ou muitas camadas</td></tr>
<tr><td>Geografia</td><td>15%</td><td>Residência e operações no Brasil</td><td>Operações com países de risco intermediário</td><td>Países de alto risco ou lista de atenção</td></tr>
<tr><td>Produto e serviço</td><td>20%</td><td>Conta básica, produto local</td><td>Produtos com valor médio ou uso internacional pontual</td><td>Câmbio, ativos virtuais, pagamentos internacionais recorrentes</td></tr>
<tr><td>Canal</td><td>10%</td><td>Presencial ou digital com verificação forte</td><td>Digital sem contato direto</td><td>Intermediários ou terceiros sem controle</td></tr>
<tr><td>Exposição (PEP, sanções, mídia)</td><td>20%</td><td>Sem ocorrências</td><td>Mídia adversa a verificar ou vínculo indireto</td><td>PEP, familiar de PEP ou apontamento relevante</td></tr>
<tr><td>Volume esperado</td><td>10%</td><td>Compatível com renda declarada</td><td>Acima da média do segmento</td><td>Desproporcional ao perfil</td></tr>
</tbody>
</table>
<p>Os pesos somam 100%. Eles refletem o que a instituição considera mais relevante no seu negócio: um câmbio dá mais peso a produto e geografia; uma conta digital pode dar mais peso a canal.</p>
<h3>Passo 2: calcule a pontuação</h3>
<p>A pontuação final é a soma de nota vezes peso, e vai de 1,00 a 3,00. Faixas do exemplo:</p>
<table class="art-table">
<thead><tr><th>Pontuação</th><th>Enquadramento</th></tr></thead>
<tbody>
<tr><td>Até 1,50</td><td>Risco baixo</td></tr>
<tr><td>De 1,51 a 2,25</td><td>Risco médio</td></tr>
<tr><td>Acima de 2,25</td><td>Risco alto</td></tr>
</tbody>
</table>
<h3>Passo 3: defina as regras de exceção</h3>
<p>Pontuação média pode esconder um fator crítico, por isso o modelo precisa de regras que se sobrepõem ao cálculo. No exemplo: cliente PEP é enquadrado no mínimo como risco alto; sanção confirmada é impeditiva, independentemente da pontuação; documento não verificado interrompe o onboarding. Sem essas regras, a média dilui o que importa.</p>

<h2>Três clientes fictícios enquadrados</h2>
<h3>Cliente A: Ana, risco baixo</h3>
<p>Ana, 34 anos, é assalariada em Curitiba e abre uma conta de pagamento básica pelo celular, com documento e verificação de identidade. Não tem ocorrência em sanções, PEP ou mídia, e a movimentação esperada é compatível com a renda.</p>
<table class="art-table">
<thead><tr><th>Fator</th><th>Nota</th><th>Peso</th><th>Contribuição</th></tr></thead>
<tbody>
<tr><td>Perfil e atividade</td><td>1</td><td>25%</td><td>0,25</td></tr>
<tr><td>Geografia</td><td>1</td><td>15%</td><td>0,15</td></tr>
<tr><td>Produto e serviço</td><td>1</td><td>20%</td><td>0,20</td></tr>
<tr><td>Canal</td><td>2</td><td>10%</td><td>0,20</td></tr>
<tr><td>Exposição</td><td>1</td><td>20%</td><td>0,20</td></tr>
<tr><td>Volume esperado</td><td>1</td><td>10%</td><td>0,10</td></tr>
</tbody>
</table>
<p><strong>Total: 1,10, risco baixo.</strong> Diligência no exemplo: <a href="/glossario/cdd-edd">CDD</a> padrão com identificação, validação do documento e screening de sanções e PEP. Reverificação a cada 24 meses.</p>

<h3>Cliente B: Comercial Norte Importadora Ltda., risco médio</h3>
<p>Empresa importadora com dois sócios, um deles uma holding que tem como sócia uma pessoa natural. Contrata operações de câmbio de forma recorrente. Não há PEP nem sanção, mas a cadeia societária tem uma camada intermediária e o volume está acima da média do segmento.</p>
<table class="art-table">
<thead><tr><th>Fator</th><th>Nota</th><th>Peso</th><th>Contribuição</th></tr></thead>
<tbody>
<tr><td>Perfil e atividade</td><td>2</td><td>25%</td><td>0,50</td></tr>
<tr><td>Geografia</td><td>2</td><td>15%</td><td>0,30</td></tr>
<tr><td>Produto e serviço</td><td>3</td><td>20%</td><td>0,60</td></tr>
<tr><td>Canal</td><td>2</td><td>10%</td><td>0,20</td></tr>
<tr><td>Exposição</td><td>1</td><td>20%</td><td>0,20</td></tr>
<tr><td>Volume esperado</td><td>2</td><td>10%</td><td>0,20</td></tr>
</tbody>
</table>
<p><strong>Total: 2,00, risco médio.</strong> Diligência no exemplo: <a href="/produto/kyb">KYB</a> completo, com cadeia societária até o <a href="/glossario/ubo">beneficiário final</a>, screening de sócios e do UBO, documentos da atividade e das operações comerciais, e justificativa da finalidade do câmbio. Reverificação a cada 12 meses.</p>

<h3>Cliente C: Carlos, risco alto</h3>
<p>Carlos foi secretário estadual e deixou o cargo há dois anos. Agora é empresário, com participação em uma empresa de ativos virtuais, e quer contratar pagamentos internacionais. A renda declarada é alta, mas o volume esperado é desproporcional ao histórico de atividade.</p>
<table class="art-table">
<thead><tr><th>Fator</th><th>Nota</th><th>Peso</th><th>Contribuição</th></tr></thead>
<tbody>
<tr><td>Perfil e atividade</td><td>2</td><td>25%</td><td>0,50</td></tr>
<tr><td>Geografia</td><td>2</td><td>15%</td><td>0,30</td></tr>
<tr><td>Produto e serviço</td><td>3</td><td>20%</td><td>0,60</td></tr>
<tr><td>Canal</td><td>2</td><td>10%</td><td>0,20</td></tr>
<tr><td>Exposição</td><td>3</td><td>20%</td><td>0,60</td></tr>
<tr><td>Volume esperado</td><td>3</td><td>10%</td><td>0,30</td></tr>
</tbody>
</table>
<p><strong>Total: 2,50, risco alto.</strong> Mesmo que a soma ficasse abaixo da faixa, a regra de exceção para PEP o levaria a risco alto. Diligência no exemplo: <a href="/glossario/cdd-edd">EDD</a>, com documentação da origem dos recursos e da riqueza, aprovação da alta gestão antes de iniciar a relação, monitoramento transacional reforçado e reverificação a cada 6 meses. Como a condição de PEP se mantém por cinco anos após a saída do cargo, o caso entra no controle de prazo. O <a href="/blog/lista-pep-como-consultar">guia da lista PEP</a> detalha a consulta e o registro.</p>

<h2>Da pontuação à diligência: o quadro resumido</h2>
<table class="art-table">
<thead><tr><th>Nível</th><th>Diligência (exemplo)</th><th>Reverificação (exemplo)</th><th>Aprovação</th></tr></thead>
<tbody>
<tr><td>Baixo</td><td>CDD padrão, screening, validação documental</td><td>24 meses</td><td>Analista</td></tr>
<tr><td>Médio</td><td>CDD ampliada, KYB com UBO, documentos de atividade</td><td>12 meses</td><td>Analista sênior</td></tr>
<tr><td>Alto</td><td>EDD, origem de recursos, monitoramento reforçado</td><td>6 meses</td><td>Alta gestão</td></tr>
</tbody>
</table>
<p>A plataforma entra em duas pontas: o <a href="/produto/dossie-de-risco">Dossiê de Risco</a> reúne o enquadramento pela regra do cliente com a base que o sustenta, e a <a href="/produto/monitoramento">reverificação periódica</a> cumpre o prazo de cada nível. As regras, os pesos e a decisão são da sua instituição. Para o monitoramento das transações depois do cadastro, veja o texto sobre <a href="/blog/kyt-monitoramento-transacional-pix">KYT no Pix</a>.</p>

<h2>Checklist prático: implantar a ABR</h2>
<ul class="checklist">
<li>A avaliação interna de risco está documentada, aprovada pela diretoria e datada.</li>
<li>Os fatores cobrem cliente, instituição, produtos e canais, e terceiros.</li>
<li>Cada fator tem escala de notas descrita, que dois analistas aplicariam da mesma forma.</li>
<li>Os pesos têm justificativa ligada ao negócio.</li>
<li>As faixas de pontuação e as regras de exceção (PEP, sanção, documento não verificado) estão escritas.</li>
<li>Cada nível de risco tem diligência, aprovação e prazo de reverificação definidos.</li>
<li>O enquadramento de cada cliente guarda as notas por fator e a data.</li>
<li>Mudanças de enquadramento exigem justificativa e autor.</li>
<li>Há teste periódico: uma amostra de clientes é reenquadrada por outro analista para medir consistência.</li>
<li>A avaliação é revista quando muda produto, canal, mercado ou base de clientes.</li>
</ul>

<h2>Como evidenciar na fiscalização</h2>
<p>Leve o documento de avaliação, a versão aprovada com data, a tabela de fatores e pesos, e uma amostra de clientes em cada nível, cada um com notas por fator e diligência aplicada. Mostre também a prova de que a reverificação ocorreu no prazo do nível, e que mudanças de enquadramento têm justificativa. O guia de <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT ao Bacen</a> mostra como organizar essa trilha, e o <a href="/dossie-exemplo">dossiê de exemplo</a> mostra como fica um enquadramento com evidência.</p>

<h2>Erros comuns</h2>
<ul>
<li><strong>Modelo copiado e não adaptado.</strong> Pesos de outro negócio não representam o seu risco.</li>
<li><strong>Tudo cai em médio.</strong> Escalas vagas levam à concentração no meio e eliminam a utilidade do modelo.</li>
<li><strong>Sem regras de exceção.</strong> A média esconde o PEP ou a sanção.</li>
<li><strong>Enquadrar uma vez e esquecer.</strong> O risco muda; a reverificação precisa refazer o enquadramento.</li>
<li><strong>Alterar o resultado à mão sem registro.</strong> Exceção sem justificativa é o primeiro ponto de apontamento.</li>
</ul>
`,
  faq: [
    {
      q: 'O que é a abordagem baseada em risco (ABR) em PLD/FT?',
      a: 'É o princípio de que a diligência deve ser proporcional ao risco. A instituição identifica e mede seus riscos na avaliação interna, classifica os clientes em categorias (no mínimo alto, médio e baixo) e aplica controles mais intensos onde o risco é maior, conforme a Circular BCB 3.978/2020.',
    },
    {
      q: 'Os pesos e faixas deste exemplo valem para a minha instituição?',
      a: 'Não. O modelo é ilustrativo e serve para explicar o método. Os fatores, pesos, faixas e prazos precisam derivar da avaliação interna de risco da sua instituição, que deve ser documentada e aprovada pela diretoria.',
    },
    {
      q: 'Com que frequência o cliente deve ser reenquadrado?',
      a: 'Conforme o nível de risco definido pela instituição, com ciclos mais curtos para risco alto, e também sempre que houver gatilho, como mudança cadastral ou societária, alerta de monitoramento ou nova condição de PEP. Os prazos do exemplo (24, 12 e 6 meses) são ilustrativos.',
    },
    {
      q: 'Posso mudar o enquadramento calculado manualmente?',
      a: 'Pode, se a política prever a exceção, mas toda alteração precisa de justificativa, autor e data, e deve ser revista por outro nível. Alterações sem registro costumam ser apontadas na fiscalização.',
    },
  ],
  related: ['circular-3978-checklist-pld-ft', 'lista-pep-como-consultar', 'kyt-monitoramento-transacional-pix', 'checklist-prontidao-fiscalizacao'],
  solutions: [
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/produto/kyb', label: 'Verificação de pessoa jurídica (KYB/UBO)' },
    { href: '/produto/monitoramento', label: 'Reverificação e monitoramento' },
  ],
};

export default post;
