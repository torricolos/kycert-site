import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'lista-pep-como-consultar',
  title: 'Lista PEP: como consultar, quem entra e como registrar a decisão',
  metaTitle: 'Lista PEP: como consultar e registrar a decisão',
  description:
    'Lista PEP: como consultar no onboarding e na reverificação, tratar homônimos, obter aprovação da alta gestão e guardar a evidência para o Bacen.',
  category: 'PLD/FT',
  eyebrow: 'PLD/FT / PEP',
  excerpt:
    'Quem é pessoa exposta politicamente pela Circular BCB 3.978/2020, onde consultar, como separar homônimo de PEP de verdade e o que guardar para provar a decisão.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  lead:
    'Consultar uma lista de <a href="/glossario/pep">PEP</a> parece simples: digita o CPF, vê se aparece. Na prática, nenhuma lista pública cobre todos os cargos, os familiares quase nunca estão nela e o nome comum gera falso positivo todos os dias. O que a fiscalização cobra não é a consulta em si, e sim o processo: qual fonte, quando, quem decidiu e por quê. Veja como montá-lo no onboarding e na reverificação.',
  figure: {
    src: '/images/blog/cdd-edd-decisao.svg',
    alt: 'Árvore de decisão que separa a diligência padrão (CDD) da diligência reforçada (EDD) conforme o enquadramento de risco do cliente, incluindo o caso de pessoa exposta politicamente.',
    caption: 'Quando a consulta indica PEP, o cliente passa da diligência padrão à reforçada.',
    width: 1200,
    height: 490,
  },
  body: `
<h2>Contexto regulatório: por que PEP pede atenção especial</h2>
<p>Quem exerce função pública relevante lida com orçamentos e decisões que podem ser desviados. Por isso a regulação de <a href="/glossario/pld-ft">PLD/FT</a> trata a pessoa exposta politicamente como uma categoria que exige atenção reforçada. PEP não é suspeito: o risco de a relação ocultar valores ilícitos é estruturalmente maior, e a instituição precisa demonstrar que olhou para isso.</p>
<p>A regra vale para as instituições autorizadas pelo Banco Central, como bancos, <a href="/solucoes/cambio">corretoras de câmbio</a>, instituições de pagamento e <a href="/solucoes/psav">PSAVs</a>. A Resolução CVM 50/2021 e a Circular SUSEP 612/2020 trazem o mesmo conceito para o mercado de capitais e seguros. Aqui a referência é a Circular BCB 3.978/2020.</p>

<h2>O que a Circular BCB 3.978/2020 exige sobre PEP</h2>
<p>A Circular 3.978/2020 define pessoas expostas politicamente e determina que a política de PLD/FT da instituição trate o tema com procedimentos específicos. Em linguagem da operação, são quatro deveres:</p>
<ol>
<li><strong>Identificar</strong> se o cliente (ou o beneficiário final, no caso de pessoa jurídica) é PEP, familiar ou estreito colaborador de PEP, no início da relação e ao longo dela.</li>
<li><strong>Classificar</strong> o cliente com o nível de risco que reflita essa condição, dentro da <a href="/glossario/abr">abordagem baseada em risco</a> da instituição.</li>
<li><strong>Aplicar diligência reforçada</strong> (<a href="/glossario/cdd-edd">EDD</a>): mais informação sobre a origem dos recursos e da riqueza, monitoramento mais atento e aprovação em nível hierárquico superior para iniciar ou manter a relação, conforme a política interna.</li>
<li><strong>Registrar</strong> o que foi consultado, o resultado e a decisão, de forma que um fiscal consiga refazer o raciocínio.</li>
</ol>
<p>Confira a numeração dos artigos e a relação de cargos no texto vigente da norma antes de incorporá-los à política.</p>

<h2>Quem é PEP: o conceito, o prazo de cinco anos e a lista de cargos</h2>
<p>Pela Circular 3.978/2020, são PEP os agentes públicos que desempenham ou tenham desempenhado, nos cinco anos anteriores, no Brasil ou em países, territórios e dependências estrangeiras, cargos, empregos ou funções públicas relevantes. Há três pontos que costumam gerar dúvida.</p>
<h3>O prazo de cinco anos conta a partir da saída</h3>
<p>A condição de PEP não termina no dia da exoneração: mantém-se por cinco anos após o fim do exercício. Depois, a pessoa deixa de ser PEP para fins da norma, e a instituição só mantém o tratamento reforçado se houver motivo registrado. O erro típico é remover a marcação cedo demais, ou nunca remover.</p>
<h3>PEP estrangeiro e cargos no Brasil</h3>
<p>A definição alcança quem exerce ou exerceu função relevante em outros países, e dirigentes de organizações internacionais. É o recorte em que as listas brasileiras ajudam menos. No Brasil, entram cargos eletivos do Executivo e do Legislativo, ministros, membros de tribunais superiores e de contas, dirigentes de estatais e de partidos, entre outros. O conceito é funcional: depende do cargo e da data, não de uma lista fechada de nomes.</p>

<h2>Familiares e estreitos colaboradores: o ponto cego das listas</h2>
<p>A norma estende o tratamento a quem tem relação próxima com o PEP, e nenhuma lista pública traz essas pessoas de forma completa. Familiares são, em geral, parentes em linha reta até o primeiro grau, cônjuge, companheiro(a), enteado(a); confirme o rol exato no texto da norma. Estreitos colaboradores são sócios, coproprietários ou pessoas com vínculo que as torne beneficiárias de operações do PEP.</p>
<p>A identificação vem do cadastro: o formulário deve perguntar, de forma objetiva, se o cliente é PEP, familiar ou próximo de PEP. Em pessoa jurídica, o <a href="/blog/beneficiario-final-ubo-kyb">mapeamento do beneficiário final</a> revela o PEP escondido numa holding.</p>

<h2>Onde consultar: fontes públicas e o que cada uma não cobre</h2>
<p>Não existe fonte única e completa. O desenho correto combina a declaração do cliente com uma ou mais bases e registra qual foi usada.</p>
<h3>Portal da Transparência e a lista de PEP da CGU</h3>
<p>O Portal da Transparência, mantido pela Controladoria-Geral da União (CGU), disponibiliza uma relação de pessoas expostas politicamente em formato aberto, pensada para apoiar quem é obrigado a identificar PEP. Pelo que se sabe, traz nome, CPF parcialmente mascarado, cargo, órgão e datas de exercício. Confirme na fonte oficial o escopo atual, a periodicidade de atualização e as regras de mascaramento, e cite no seu processo a versão que realmente usou.</p>
<p>Limites que você precisa conhecer: o foco é o governo federal, então cargos estaduais e municipais podem faltar; familiares e colaboradores não estão na lista; o CPF mascarado impede casar a pessoa só pelo número; e PEP estrangeiro está fora do escopo.</p>
<h3>Fontes complementares</h3>
<p>Dados abertos do TSE ajudam com cargos eletivos estaduais e municipais; diários oficiais e portais estaduais e municipais cobrem nomeações; provedores de screening consolidam bases, inclusive internacionais. A declaração do cliente continua sendo a primeira fonte, e a única que alcança familiares e colaboradores.</p>
<p>A <a href="/produto/kyc">verificação de pessoa física da kycert</a> roda o screening de Sanções e PEP no mesmo fluxo do onboarding e registra a fonte, o percentual de correspondência e a data no dossiê.</p>

<h2>Processo de consulta no onboarding e na reverificação</h2>
<p>Um processo que aguenta fiscalização tem sequência fixa. Adapte os prazos ao seu perfil de risco.</p>
<ol>
<li><strong>Coletar a declaração</strong> no <a href="/glossario/kyc">KYC</a>, com data.</li>
<li><strong>Consultar as bases.</strong> Rode o nome e o CPF na fonte definida pela política. Para pessoa jurídica, rode cada sócio e o beneficiário final, não só o representante.</li>
<li><strong>Triar as correspondências.</strong> Resultado sem ocorrência, ocorrência clara ou ocorrência duvidosa (provável homônimo). Cada uma segue um caminho diferente.</li>
<li><strong>Analisar o caso:</strong> origem dos recursos e da riqueza, cargo, período e motivo da relação.</li>
<li><strong>Classificar o risco.</strong> Reenquadre o cliente conforme a regra da instituição.</li>
<li><strong>Obter a aprovação.</strong> Encaminhe ao nível hierárquico definido na política antes de iniciar ou manter a relação.</li>
<li><strong>Registrar a decisão.</strong> Autor, data, fonte, justificativa e documentos.</li>
<li><strong>Agendar a reverificação.</strong> Defina o prazo conforme o risco e repita o ciclo.</li>
</ol>
<h3>Por que a reverificação importa</h3>
<p>Quem não era PEP no onboarding pode ser eleito ou nomeado dois anos depois. Por isso a consulta se repete em periodicidade compatível com o risco e também por gatilho: mudança cadastral, alteração societária ou alerta. O <a href="/produto/monitoramento">monitoramento contínuo da kycert</a> agenda a reverificação, refaz o screening de Sanções e PEP a cada ciclo e registra cada passagem no dossiê. A decisão sobre o alerta continua sendo da sua equipe.</p>

<h2>Homônimos: como separar o PEP de verdade do falso positivo</h2>
<p>Nome comum é a maior fonte de ruído. Uma busca por "José da Silva" pode devolver dezenas de agentes públicos. Tratar tudo como PEP trava o onboarding e afasta cliente bom. Ignorar tudo cria o risco oposto. O caminho é critério objetivo e escrito.</p>
<h3>Critérios para descartar um homônimo</h3>
<ul>
<li><strong>CPF:</strong> na lista, os dígitos visíveis do CPF do agente precisam ser compatíveis com o CPF do cliente. Divergência nos dígitos visíveis descarta.</li>
<li><strong>Data de nascimento e filiação:</strong> quando a fonte traz, confronte com o documento do cliente.</li>
<li><strong>Cargo versus profissão declarada:</strong> um cliente que se declara autônomo e uma ocorrência de ministro de tribunal exigem mais verificação.</li>
<li><strong>Localidade:</strong> estado e município de atuação do cargo frente ao endereço do cliente.</li>
</ul>
<h3>Exemplo prático</h3>
<p>A cliente fictícia Maria Souza Lima abre conta. A consulta devolve um agente público de mesmo nome, ligado a uma secretaria municipal. O CPF visível não bate e a data de nascimento do documento é 14 anos posterior. Decisão: homônimo descartado, com registro de fonte, critério, analista e data. O que protege a instituição é o registro do critério, não só a conclusão.</p>
<p>Na dúvida que os dados não resolvem, não descarte: peça documento adicional ou escale a análise.</p>

<h2>Aprovação da alta gestão e registro da decisão</h2>
<p>Confirmado o PEP, a relação não é proibida: exige decisão consciente de quem tem alçada. A política deve dizer quem aprova (diretor responsável, comitê, gerente sênior). O registro precisa trazer o vínculo político (cargo, órgão, período, parentesco), a fonte e a data da consulta, a origem dos recursos com documentos, o risco atribuído, a decisão com autor e data, e a data da próxima reverificação.</p>
<p>No dossiê, isso vira uma linha do tempo única. Veja como fica no <a href="/dossie-exemplo">dossiê de exemplo</a>, com veredito de risco, apontamentos com evidência e decisão registrada.</p>

<h2>Checklist prático: PEP no onboarding e na reverificação</h2>
<ul class="checklist">
<li>A política de PLD/FT define PEP, familiar e estreito colaborador com base na Circular BCB 3.978/2020.</li>
<li>O formulário de onboarding pergunta sobre PEP, familiar e colaborador e guarda a resposta com data.</li>
<li>Está escrito qual fonte oficial é consultada (por exemplo, a lista de PEP do Portal da Transparência) e qual complementa.</li>
<li>Em pessoa jurídica, são consultados todos os sócios relevantes e o beneficiário final.</li>
<li>Existe critério escrito para descartar homônimo (CPF, data de nascimento, cargo, localidade).</li>
<li>A regra dos cinco anos após a saída do cargo está documentada, com a data de início da contagem.</li>
<li>PEP confirmado é reenquadrado no risco, entra em diligência reforçada e tem aprovação superior registrada.</li>
<li>A origem dos recursos e da riqueza está documentada para cada PEP.</li>
<li>A reverificação tem periodicidade e gatilhos extraordinários definidos.</li>
<li>Cada consulta guarda fonte, data, resultado bruto, analista e justificativa.</li>
</ul>

<h2>Como evidenciar na fiscalização</h2>
<p>O fiscal pedirá uma amostra e perguntará, para cada cliente: como você sabia se era PEP? A resposta é uma sequência de evidências com autor, data e fonte.</p>
<ul>
<li><strong>Sem ocorrência:</strong> consulta com fonte, data e resultado, mais a declaração do cliente.</li>
<li><strong>Homônimo descartado:</strong> resultado bruto, critério aplicado e autor.</li>
<li><strong>PEP confirmado:</strong> análise de origem de recursos, aprovação da alta gestão e plano de monitoramento.</li>
<li><strong>Base inteira:</strong> prova de que a reverificação rodou no prazo.</li>
</ul>
<p>O artigo sobre <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT na fiscalização do Bacen</a> detalha a trilha de evidência, e o <a href="/blog/circular-3978-checklist-pld-ft">checklist da Circular 3.978</a> mostra onde PEP se encaixa no conjunto.</p>

<h2>Erros comuns</h2>
<ul>
<li><strong>Consultar só no onboarding.</strong> Cliente vira PEP depois e ninguém percebe.</li>
<li><strong>Confiar numa única lista.</strong> A base federal não cobre estados, municípios nem o exterior.</li>
<li><strong>Consultar o representante e ignorar o sócio.</strong> Em PJ, o PEP costuma estar na cadeia societária.</li>
<li><strong>Descartar homônimo por impressão ou aprovar sem registrar.</strong> Sem critério escrito, a decisão correta não prova nada.</li>
</ul>
`,
  faq: [
    {
      q: 'Existe uma lista oficial única de PEP no Brasil?',
      a: 'Não. A CGU disponibiliza uma relação de PEP no Portal da Transparência, mas o foco é o governo federal e ela não traz familiares nem estreitos colaboradores. Confira o escopo atual na fonte oficial e complemente com declaração do cliente e outras bases.',
    },
    {
      q: 'Por quanto tempo uma pessoa continua sendo PEP depois de deixar o cargo?',
      a: 'Pela Circular BCB 3.978/2020, a condição se mantém por cinco anos após o término do exercício da função. Depois desse prazo a pessoa deixa de ser PEP para fins da norma, mas a instituição pode manter o tratamento reforçado se a avaliação de risco justificar e o motivo estiver registrado.',
    },
    {
      q: 'Cliente PEP precisa ser recusado?',
      a: 'Não. A condição de PEP exige diligência reforçada, análise de origem dos recursos, aprovação em nível hierárquico superior conforme a política da instituição e monitoramento mais atento. A relação pode ser mantida quando a decisão estiver fundamentada e registrada.',
    },
    {
      q: 'Como saber se uma ocorrência na lista é homônimo?',
      a: 'Compare os dados da fonte com o cadastro: dígitos visíveis do CPF, data de nascimento, filiação, cargo e localidade. Escreva o critério e registre resultado bruto, motivo, autor e data. Se os dados não resolverem, peça documento adicional ou escale.',
    },
    {
      q: 'Com que frequência devo reconsultar a base de PEP?',
      a: 'Defina na sua política a periodicidade conforme o risco, com ciclos mais curtos para risco alto, e inclua gatilhos extraordinários, como mudança cadastral ou societária. O essencial é que a reverificação rode no prazo e fique registrada.',
    },
  ],
  related: ['circular-3978-checklist-pld-ft', 'abordagem-baseada-em-risco-abr-exemplo-pratico', 'beneficiario-final-ubo-kyb', 'comprovar-pld-ft-fiscalizacao-bacen'],
  solutions: [
    { href: '/produto/kyc', label: 'Verificação de pessoa física (KYC)' },
    { href: '/produto/monitoramento', label: 'Reverificação e monitoramento' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
  ],
};

export default post;
