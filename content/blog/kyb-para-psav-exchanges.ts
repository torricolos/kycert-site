import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'kyb-para-psav-exchanges',
  title: 'KYB para PSAV: como verificar clientes pessoa jurídica numa exchange',
  metaTitle: 'KYB para PSAV: guia para exchanges e clientes PJ',
  description:
    'KYB para PSAV: como mapear cadeia societária, beneficiário final, contrapartes e origem dos recursos de clientes PJ sob as Resoluções BCB 519, 520 e 521.',
  category: 'PSAV',
  eyebrow: 'PSAV / KYB',
  excerpt:
    'O passo a passo do KYB de clientes pessoa jurídica em exchanges e PSAVs: cadeia societária, beneficiário final, contrapartes e origem dos recursos, com checklist e evidências.',
  datePublished: '2026-12-01',
  dateModified: '2026-12-01',
  lead: 'Com as prestadoras de serviços de ativos virtuais sob supervisão do Banco Central, o cliente empresa deixou de ser apenas um CNPJ ativo. Mesas, gestoras, fintechs e empresas que usam cripto na tesouraria trazem estruturas societárias complexas, sócios estrangeiros e recursos de origem variada. Este guia mostra como fazer o KYB de clientes PJ numa exchange de modo que a decisão resista a uma fiscalização.',
  figure: {
    src: '/images/blog/cadeia-societaria-ubo.svg',
    alt: 'Cadeia societária de uma empresa passando por holdings até a pessoa natural beneficiária final.',
    caption: 'Do CNPJ do cliente até a pessoa natural: o caminho percorrido precisa ficar registrado.',
    width: 1200,
    height: 480,
  },
  body: `
<h2>Contexto regulatório: o que mudou para as PSAVs</h2>
<p>A Lei 14.478/2022 estabeleceu as diretrizes para a prestação de serviços de ativos virtuais no Brasil e incluiu as prestadoras no alcance da Lei 9.613/1998, a lei de lavagem de dinheiro. O Banco Central regulamentou o regime com as Resoluções BCB 519, 520 e 521, todas de 2025: a 519 disciplina a autorização e a transição para o regime supervisionado, a 520 estabelece regras de funcionamento, entre elas a documentação da avaliação de risco de clientes e usuários, e a 521 complementa o regime e fixa o cronograma de adequação.</p>
<p>Um ponto de calendário precisa ficar claro. O prazo para o pedido de autorização das PSAVs, 30/10/2026, já foi encerrado. Quem pediu está no processo de análise; quem não pediu precisa conferir a situação atual diretamente com o Banco Central e com seu assessor jurídico, porque as consequências para a continuidade da atividade dependem do texto das resoluções e do andamento de cada caso. Este artigo trata do que vale em qualquer cenário: o cadastro de cliente PJ precisa ser sólido e provável.</p>
<p>O <a href="/glossario/kyb">KYB</a> importa mais aqui do que em outros setores por três razões. As estruturas de clientes PJ de cripto costumam incluir sócios no exterior e veículos intermediários. Os recursos circulam rápido e cruzam fronteiras. E o supervisor vai olhar para a qualidade do conhecimento do cliente antes de olhar para a transação. Para a visão geral das resoluções, veja o artigo sobre a <a href="/blog/resolucao-bcb-520-psav">Resolução BCB 520/2025 para PSAV</a>.</p>

<h2>O que a regulação exige do KYB de clientes PJ</h2>
<p>As resoluções não trazem uma receita de KYB, mas o dever de fundo é claro: a PSAV precisa conhecer seus clientes e usuários, avaliar o risco de cada um e documentar essa avaliação. Isso se apoia nos conceitos já consolidados de PLD/FT no Brasil, como os da <a href="/blog/circular-3978-checklist-pld-ft">Circular BCB 3.978/2020</a>: identificação, qualificação, beneficiário final, tratamento de <a href="/glossario/pep">PEP</a>, diligência proporcional ao risco e guarda de registros. Confira no texto das resoluções como cada dever se aplica à sua categoria de PSAV.</p>
<p>Na prática, para o cliente empresa isso se desdobra em quatro perguntas que a exchange precisa responder e provar:</p>
<ol>
<li>Quem é essa empresa e ela existe de fato (identificação)?</li>
<li>Quem a controla, até a pessoa natural (cadeia societária e <a href="/glossario/ubo">beneficiário final</a>)?</li>
<li>Com quem ela faz negócio e para onde vão os ativos (contrapartes)?</li>
<li>De onde vêm os recursos e por que o volume faz sentido (origem dos recursos)?</li>
</ol>

<h2>Passo 1: identificar a empresa e verificar sua existência</h2>
<p>Comece pelo básico, mas sem pular nada. Colete o CNPJ e confirme a situação cadastral na Receita Federal, a data de abertura, a atividade econômica (CNAE), o endereço e o porte. Verifique o contrato ou estatuto social e as alterações, as procurações e quem tem poderes para operar a conta.</p>
<p>Desconfie de sinais clássicos: empresa aberta há poucas semanas com movimentação prevista alta, atividade declarada incompatível com o uso de cripto, endereço compartilhado por dezenas de empresas e capital social irrisório diante do volume. Nenhum desses sinais condena o cliente, mas cada um deve gerar uma pergunta e uma resposta registrada. O <a href="/produto/ocr">cadastro com OCR de documentos</a> reduz a digitação e o erro nessa etapa.</p>

<h2>Passo 2: mapear a cadeia societária até o beneficiário final</h2>
<p>É o passo em que a maioria dos processos manuais falha. O quadro societário de primeiro nível raramente responde à pergunta; é preciso seguir a participação de sócio em sócio, atravessando holdings, fundos e veículos, até chegar à pessoa natural.</p>
<h3>Como conduzir o mapeamento</h3>
<ul>
<li>Liste os sócios diretos com percentual e função.</li>
<li>Para cada sócio pessoa jurídica, repita: quadro societário, percentuais e administradores.</li>
<li>Pare apenas quando chegar a pessoas naturais ou a uma entidade sem possibilidade de abertura (por exemplo, companhia aberta), e registre o motivo.</li>
<li>Aplique o critério de participação previsto na norma que rege o seu cadastro e, quando ninguém o atinja, avalie o controle por outros meios, como direito de voto, indicação de administradores e acordos de sócios.</li>
</ul>
<p>Cada participante da cadeia, pessoa física ou jurídica, deve passar por screening de sanções e PEP, com status individual. Uma empresa limpa pode ter, no topo da estrutura, um sócio sancionado. A página de <a href="/produto/kyb">verificação de pessoa jurídica</a> mostra como a kycert desenha a árvore e marca cada nó, e o artigo sobre <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final e KYB</a> aprofunda o raciocínio.</p>
<div class="callout"><strong>Sinal de alerta</strong><p>Cadeia que termina em veículo sem abertura possível, procurador que atua em nome de vários clientes e mudanças societárias logo antes de grandes depósitos merecem diligência reforçada e aprovação em nível superior.</p></div>

<h2>Passo 3: conhecer as contrapartes e a atividade do cliente</h2>
<p>Num cliente PJ de cripto, o risco está tanto em quem ele é quanto no que ele faz. Registre, na qualificação, o modelo de negócio e a finalidade de uso da exchange: tesouraria, pagamento a fornecedores, market making, operação por conta de terceiros ou prestação de serviço a clientes finais.</p>
<p>Esse último caso pede atenção especial. Se o cliente é, ele mesmo, uma plataforma que movimenta recursos de terceiros, a exchange passa a ter exposição a clientes que não conhece. Pergunte quais controles de PLD/FT o cliente aplica, se está autorizado a funcionar no Brasil ou no país de origem e se aceita compartilhar informações quando necessário. Registre as respostas e a base de verificação.</p>
<p>Defina também as contrapartes esperadas: de quais jurisdições o cliente espera enviar e receber ativos, com que volume e frequência, e quais carteiras externas serão usadas. Esse perfil declarado é o ponto de comparação do monitoramento: quando o comportamento real foge do perfil, há alerta. Monitoramento transacional é outra camada, explicada no texto sobre <a href="/blog/kyt-monitoramento-transacional-pix">KYT e Pix</a>; o KYB entrega a ele o perfil esperado e o nível de risco.</p>

<h2>Passo 4: verificar a origem dos recursos e do patrimônio</h2>
<p>A origem dos recursos responde de onde vem o dinheiro que o cliente vai usar na exchange. A origem do patrimônio responde como a empresa e seus controladores acumularam riqueza. Nos casos de risco baixo, a declaração do cliente com verificação de coerência pode bastar. Nos de risco alto, pede-se prova.</p>
<table class="art-table"><thead><tr><th>Perfil do cliente PJ</th><th>Origem dos recursos: o que pedir</th></tr></thead><tbody>
<tr><td>Empresa operacional</td><td>Demonstrações financeiras, faturamento recente e extratos que mostrem a coerência com o volume</td></tr>
<tr><td>Gestora ou fundo</td><td>Regulamento, lista de cotistas relevantes e documentos do administrador</td></tr>
<tr><td>Holding patrimonial</td><td>Origem do patrimônio dos controladores, declarações e documentos de aporte</td></tr>
<tr><td>Empresa recente</td><td>Prova do aporte de capital e documentos do sócio que o fez</td></tr>
</tbody></table>
<p>Compare o volume declarado com a capacidade financeira da empresa. Um cliente com faturamento modesto que declara movimentar valores muito acima disso precisa de explicação documentada, ou o relacionamento deve ser restringido ou recusado.</p>

<h2>Checklist de KYB para clientes PJ de PSAV</h2>
<ul class="checklist">
<li>CNPJ, situação cadastral, CNAE e endereço confirmados na Receita Federal e arquivados com data.</li>
<li>Contrato ou estatuto social, alterações e procurações arquivados, com poderes de quem opera a conta identificados.</li>
<li>Cadeia societária mapeada até a pessoa natural, com percentual por nível e motivo registrado quando não foi possível abrir um nó.</li>
<li>Beneficiário final identificado, com documento e dados cadastrais.</li>
<li>Sanções e PEP consultadas para a empresa, os sócios, os administradores, os procuradores e o beneficiário final.</li>
<li>Modelo de negócio, finalidade de uso e contrapartes esperadas descritos na qualificação.</li>
<li>Origem dos recursos documentada de forma proporcional ao risco, e origem do patrimônio nos casos de risco alto.</li>
<li>Classificação de risco registrada com os critérios que a produziram, conforme a sua política.</li>
<li>Aprovação por nível hierárquico adequado para clientes de risco alto e para PEP na cadeia, com autor e data.</li>
<li>Reverificação periódica agendada com prazo ligado ao risco e gatilhos de revisão por mudança societária.</li>
</ul>

<h2>Como evidenciar o KYB na fiscalização</h2>
<p>O supervisor da PSAV vai pedir, para uma amostra de clientes PJ, a história completa da decisão. Prepare um dossiê por cliente com a cadeia societária desenhada, o resultado de cada consulta com fonte e data, a classificação de risco, a justificativa da origem dos recursos e a decisão com o nome de quem a tomou. O <a href="/produto/dossie-de-risco">Dossiê de Risco</a> da kycert reúne esses elementos, com a cadeia societária, os apontamentos com evidência por participante e a decisão registrada, e pode ser exportado em PDF. Para ver o formato, abra o <a href="/dossie-exemplo">dossiê de exemplo</a>.</p>
<p>A mesma lógica vale para o ciclo de vida. Quando o quadro societário muda, o histórico deve mostrar a nova consulta e o novo enquadramento. O <a href="/produto/monitoramento">monitoramento contínuo</a> da kycert agenda a reverificação e registra cada ciclo. Para a visão do setor, consulte a página de <a href="/solucoes/psav">soluções para exchanges e PSAVs</a>.</p>
<p>Os limites ficam explícitos: a kycert não é custódia, não faz monitoramento transacional nem análise de carteiras on-chain, e não decide a comunicação ao COAF nem substitui o assessor jurídico no pedido de autorização. Ela estrutura e registra o onboarding PF e PJ que alimenta esses controles.</p>

<h2>Erros comuns no KYB de exchanges</h2>
<h3>Parar na holding</h3>
<p>Registrar a controladora como sócia e considerar o assunto encerrado deixa o beneficiário final sem identificação. É o apontamento mais fácil de encontrar.</p>
<h3>Aceitar a declaração de origem sem coerência</h3>
<p>Um campo de texto livre com a frase "recursos de atividade empresarial" não é verificação. Compare com faturamento, extratos e porte.</p>
<h3>Tratar cliente que presta serviço a terceiros como cliente comum</h3>
<p>A exposição indireta pede diligência reforçada e perguntas sobre os controles de PLD/FT do próprio cliente.</p>
<h3>KYB feito uma vez e esquecido</h3>
<p>Mudanças societárias e sócios que entram em listas depois do cadastro só aparecem se houver reverificação. Faça dela uma rotina, não um evento.</p>
<h3>Decisão sem rastro</h3>
<p>Aprovar no chat e arquivar nada. Para o supervisor, o que não está registrado com autor e data não aconteceu. A preparação ampla para a supervisão está no <a href="/blog/checklist-prontidao-fiscalizacao">checklist de prontidão para fiscalização</a>. Para dimensionar a implantação, veja os <a href="/precos">preços</a>.</p>
`,
  faq: [
    {
      q: 'O que é KYB para PSAV?',
      a: 'É a verificação de clientes pessoa jurídica por uma prestadora de serviços de ativos virtuais: identificar a empresa, mapear a cadeia societária até o beneficiário final, entender as contrapartes e a atividade, verificar a origem dos recursos e registrar a classificação de risco e a decisão.',
    },
    {
      q: 'O prazo de 30/10/2026 para pedir autorização ao BCB já passou?',
      a: 'Sim. O prazo para o pedido de autorização das PSAVs, previsto no regime das Resoluções BCB 519, 520 e 521/2025, foi encerrado em 30/10/2026. Confira a situação atual da sua empresa diretamente com o Banco Central e com seu assessor jurídico.',
    },
    {
      q: 'Preciso identificar o beneficiário final de todo cliente PJ da exchange?',
      a: 'O dever de conhecer o cliente alcança a pessoa natural que controla a empresa. Quando não é possível chegar a ela, a prática segura é registrar a tentativa e o motivo, tratar o cliente como de risco elevado e decidir sobre manter ou encerrar o relacionamento.',
    },
    {
      q: 'Quais documentos pedir para comprovar a origem dos recursos de uma empresa?',
      a: 'Depende do perfil e do risco. Para empresas operacionais, demonstrações financeiras, faturamento e extratos. Para holdings, a origem do patrimônio dos controladores. Para empresas recentes, prova do aporte de capital. Em todos os casos, compare o volume esperado com a capacidade declarada.',
    },
    {
      q: 'A kycert monitora as transações dos clientes da exchange?',
      a: 'Não. A kycert faz o onboarding: KYC e KYB, cadeia societária até o beneficiário final, screening de sanções e PEP, enquadramento de risco, dossiê e reverificação periódica. O perfil de risco gerado alimenta o monitoramento transacional, que permanece em sistema próprio da exchange.',
    },
  ],
  related: [
    'resolucao-bcb-520-psav',
    'beneficiario-final-ubo-kyb',
    'kyt-monitoramento-transacional-pix',
    'circular-3978-checklist-pld-ft',
  ],
  solutions: [
    { href: '/solucoes/psav', label: 'Soluções para exchanges e PSAVs' },
    { href: '/produto/kyb', label: 'Verificação de pessoa jurídica (KYB)' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco exportável' },
    { href: '/produto/monitoramento', label: 'Reverificação e monitoramento contínuo' },
  ],
};

export default post;
