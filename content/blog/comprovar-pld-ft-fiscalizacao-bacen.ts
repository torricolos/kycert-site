import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'comprovar-pld-ft-fiscalizacao-bacen',
  title: 'Como comprovar PLD/FT numa fiscalização do BACEN: o que o regulador pede',
  metaTitle: 'Comprovar PLD/FT na fiscalização do BACEN: o que pedem',
  description:
    'Na fiscalização de PLD/FT o BACEN pergunta como você decidiu, não só se o cliente é limpo. Veja o que registrar e como montar o dossiê de cada cliente.',
  category: 'PLD/FT',
  eyebrow: 'PLD/FT / fiscalização',
  excerpt:
    'Numa fiscalização de PLD/FT, o BACEN não pergunta só se o cliente é limpo; pergunta como você decidiu. Veja o que precisa estar registrado e como montar essa resposta.',
  datePublished: '2026-05-28',
  dateModified: '2026-11-02',
  lead:
    'Na fiscalização, o supervisor quer ver como a instituição concluiu que o cliente podia ser aceito, e com qual evidência. Quem registrou o processo tem a resposta pronta. Quem não registrou reconstrói tudo sob pressão, com prazo curto e sem a data original de cada ato. Este texto mostra o que o regulador costuma pedir em <a href="/glossario/pld-ft">PLD/FT</a>, o que precisa estar guardado e como transformar consultas soltas em trilha comprovável.',
  figure: {
    src: '/images/blog/trilha-evidencia-fiscalizacao.svg',
    alt: 'Diagrama que liga a pergunta do fiscal sobre um cliente específico às evidências guardadas no dossiê: identidade, fontes consultadas, enquadramento de risco e decisão com autor e data.',
    caption: 'A pergunta do fiscal e a trilha de evidência que a responde.',
    width: 1200,
    height: 500,
  },
  body: `
<h2>Contexto regulatório: o que a fiscalização de PLD/FT avalia</h2>
<p>A prevenção à lavagem de dinheiro e ao financiamento do terrorismo no sistema financeiro brasileiro parte da <strong>Lei 9.613/1998</strong>, que define o crime e impõe deveres às instituições obrigadas. Para as instituições autorizadas pelo Banco Central, a regulamentação operacional está, em grande parte, na <strong>Circular BCB 3.978/2020</strong>, complementada pela <strong>Carta Circular BCB 4.001/2020</strong>, que lista exemplos de operações e situações com indícios de atipicidade. Outros segmentos têm normas próprias, como a <strong>Resolução CVM 50/2021</strong> no mercado de capitais e a <strong>Circular SUSEP 612/2020</strong> em seguros.</p>
<p>Existe uma diferença que define o resultado de uma fiscalização: ter o dado não é o mesmo que comprovar o que você fez com ele. O supervisor parte do princípio de que a instituição tem acesso a fontes e relatórios. O que ele quer examinar é o <strong>processo de decisão</strong>: a evidência de que houve avaliação, de que ela seguiu um critério e de que alguém respondeu por ela.</p>
<h3>Os dois níveis da fiscalização</h3>
<p>Em geral, a análise acontece em dois níveis. No primeiro, olha-se a <strong>política e os procedimentos</strong>: existe uma avaliação interna de risco, há responsável designado, o processo está formalizado. No segundo, olha-se uma <strong>amostra de clientes e operações</strong> para verificar se a prática corresponde à política. É nesse segundo nível que a ausência de registro aparece com mais clareza, porque o fiscal escolhe o cliente e você precisa mostrar o caminho completo até a decisão.</p>

<h2>O que a norma exige que você consiga demonstrar</h2>
<p>A Circular 3.978 organiza o dever de prevenção em blocos que o time de compliance conhece bem: política de PLD/FT, avaliação interna de risco, procedimentos de identificação e qualificação de clientes, registro de operações, monitoramento, comunicação ao COAF e capacitação. Para efeito de fiscalização, o que importa é transformar cada bloco em algo demonstrável.</p>
<h3>Avaliação interna de risco e abordagem baseada em risco</h3>
<p>A instituição deve identificar e mensurar o risco de utilização de seus produtos e serviços na lavagem de dinheiro e no financiamento do terrorismo. Isso pressupõe uma <a href="/glossario/abr">abordagem baseada em risco (ABR)</a> documentada: quais fatores entram, como pesam, quais níveis existem e que diligência cada nível exige. Um exemplo de aplicação está em <a href="/blog/abordagem-baseada-em-risco-abr-exemplo-pratico">ABR na prática</a>.</p>
<h3>Identificação e qualificação do cliente</h3>
<p>O cadastro precisa permitir saber quem é o cliente, e, quando for pessoa jurídica, quem está por trás dela. Isso envolve <a href="/glossario/kyc">KYC</a> para pessoas físicas e <a href="/glossario/kyb">KYB</a> para empresas, incluindo a identificação do <a href="/glossario/ubo">beneficiário final</a>. A Resolução BCB 277/2022 e a Lei 14.286/2021 trazem exigências específicas de cadastro no câmbio.</p>
<h3>Diligência proporcional ao risco</h3>
<p>Clientes de maior risco, incluindo as pessoas expostas politicamente, pedem diligência reforçada. A distinção entre o procedimento padrão e o reforçado está em <a href="/glossario/cdd-edd">CDD e EDD</a>. O ponto de fiscalização é verificar se a instituição aplicou o nível certo e se consegue provar que aplicou.</p>

<h2>A pergunta que o fiscal faz e a resposta que ele espera</h2>
<p>Na prática, a fiscalização tende a pedir três coisas sobre um cliente específico:</p>
<ol>
<li><strong>Como você o verificou?</strong> Qual documento foi apresentado, como foi validado, quando.</li>
<li><strong>Com base em quê você o classificou?</strong> Que fontes foram consultadas, que apontamentos surgiram, que regra de risco foi aplicada.</li>
<li><strong>Quem decidiu aceitá-lo ou recusá-lo?</strong> Nome, data e justificativa.</li>
</ol>
<p>Cada pergunta exige um tipo de prova diferente, e a resposta só é convincente quando as três chegam juntas, de forma coerente, a partir de uma única fonte. Se a primeira vem de um sistema, a segunda de um relatório em PDF solto e a terceira de uma troca de e-mails, o fiscal percebe a costura.</p>

<h2>O que falta no relatório do bureau</h2>
<p>Um relatório de bureau é uma fotografia de um momento. Ele diz que, na data da consulta, o cliente constava ou não em determinadas listas. Mas não diz o que a instituição fez com aquilo: se considerou o apontamento, como o ponderou, qual decisão tomou e por quê.</p>
<p>Quando a única evidência é o relatório, a instituição tem o dado, mas não tem a trilha. E é a trilha que comprova o cumprimento do dever de PLD/FT, não a existência da consulta. Quatro lacunas aparecem com frequência:</p>
<ul>
<li>consulta feita, mas sem data e hora gravadas junto ao cadastro;</li>
<li>apontamento identificado, mas sem registro de como foi tratado (homônimo? falso positivo? risco aceito?);</li>
<li>decisão tomada em conversa ou mensagem, sem autor e justificativa no sistema;</li>
<li>documentos em pastas diferentes, sem vínculo claro com o cliente nem com a versão do cadastro.</li>
</ul>

<h2>O que precisa estar registrado, cliente por cliente</h2>
<p>Para que a resposta esteja pronta quando o regulador perguntar, cada cliente precisa carregar consigo quatro grupos de informação.</p>
<h3>Identidade verificada</h3>
<p>O documento capturado e validado, os dados extraídos, a data da verificação e, quando houver, a prova de vida ou biometria. Para PJ, o cartão do CNPJ, o quadro societário e os documentos dos representantes.</p>
<h3>Fontes consultadas</h3>
<p>Quais bases foram consultadas (sanções, <a href="/glossario/pep">PEP</a>, mídia negativa, processos), quando e com que resultado. A consulta real precisa ser distinguível de uma consulta simulada ou de um campo preenchido à mão.</p>
<h3>Enquadramento de risco</h3>
<p>O nível atribuído (por exemplo baixo, médio, alto), os fatores que o determinaram e a regra da instituição que o produziu. O enquadramento deve poder ser reproduzido: dado o mesmo cliente, a mesma regra leva à mesma conclusão.</p>
<h3>Decisão</h3>
<p>Aprovação, recusa ou aprovação condicionada, com autor, data e justificativa. Quando houver exceção à regra, a exceção também precisa de autor e motivo.</p>
<p>Esses quatro elementos, reunidos e registrados no momento em que ocorrem, são o que transforma um conjunto de consultas em evidência de processo.</p>

<h2>Checklist de preparação para a fiscalização</h2>
<ul class="checklist">
<li>A política de PLD/FT e a avaliação interna de risco estão atualizadas, datadas e com responsável.</li>
<li>É possível abrir qualquer cliente e ver identidade, fontes, risco e decisão em um só lugar.</li>
<li>Cada consulta tem data, hora e fonte gravadas, não apenas o resultado.</li>
<li>Os apontamentos têm tratamento registrado: o que era, quem analisou, o que concluiu.</li>
<li>As decisões têm autor identificado e justificativa por escrito.</li>
<li>As exceções à regra de risco estão documentadas e aprovadas por quem tem alçada.</li>
<li>Clientes PJ têm a cadeia societária até o beneficiário final registrada, com status por participante.</li>
<li>A reverificação periódica está agendada e os resultados ficam no histórico do cliente.</li>
<li>Há um teste interno: sortear cinco clientes e montar o dossiê de cada um em menos de uma hora.</li>
<li>O dossiê pode ser exportado em formato que o supervisor consiga ler (por exemplo, PDF).</li>
</ul>
<p>O último item do checklist funciona como diagnóstico. Se o teste demora um dia, ou depende da memória de uma pessoa, a trilha não está pronta. Para uma lista mais ampla de itens, use o <a href="/blog/checklist-prontidao-fiscalizacao">checklist de prontidão para fiscalização</a>.</p>

<h2>Como evidenciar na fiscalização: o dossiê por cliente</h2>
<p>A forma mais eficiente de responder é ter um <strong>dossiê por cliente</strong> que reúna os quatro grupos de informação num único documento. O dossiê funciona como o laudo daquele cliente: tem um veredito de risco no topo, os apontamentos com a fonte que os gerou, a estrutura societária quando for PJ e a decisão registrada com quem a tomou.</p>
<p>Algumas práticas tornam o dossiê mais forte perante o supervisor:</p>
<ul>
<li><strong>Imutabilidade prática:</strong> o que foi decidido em uma data não deve ser reescrito depois. Revisões entram como novos registros, preservando o histórico.</li>
<li><strong>Rastreabilidade de autoria:</strong> toda ação relevante tem um usuário identificado.</li>
<li><strong>Vínculo com a política:</strong> o dossiê mostra qual regra de risco foi aplicada, e não apenas o resultado.</li></ul>
<p>Você pode ver como esse documento se apresenta no <a href="/dossie-exemplo">dossiê de exemplo, anonimizado</a>.</p>

<h2>Onde a kycert entra</h2>
<p>A kycert registra o cliente inteiro como trilha auditável, do convite à decisão. O fluxo cobre convite white-label, captura e OCR de documentos, <a href="/produto/kyc">KYC de pessoa física</a>, <a href="/produto/kyb">KYB de pessoa jurídica</a> com a cadeia societária até o beneficiário final, screening de sanções e PEP, enquadramento de risco pela regra que a sua instituição definir e decisão registrada com autor e data. O <a href="/produto/dossie-de-risco">Dossiê de Risco</a> apresenta o veredito no topo, os apontamentos com a fonte de origem e a decisão, tudo exportável em PDF. Quando a fiscalização pede "mostre como você decidiu sobre este cliente", o documento já existe.</p>
<p>A <a href="/produto/monitoramento">reverificação periódica</a> mantém a base atualizada: o screening é refeito no prazo e cada ciclo fica registrado no histórico. Um limite deve ficar claro. A kycert não é um motor de monitoramento transacional (<a href="/glossario/kyt">KYT</a>) em tempo real. Ela fornece o perfil de risco do KYC que alimenta o monitoramento feito pela instituição. Consulte os <a href="/precos">preços</a>.</p>

<h2>Erros comuns que aparecem nas fiscalizações</h2>
<h3>Confundir ter política com ter prova de prática</h3>
<p>Uma política bem escrita é necessária, mas o fiscal testa se ela é seguida. Se o manual diz que clientes de risco alto passam por diligência reforçada e a amostra mostra aprovação direta, o problema deixa de ser documental e passa a ser de controle.</p>
<h3>Registrar o resultado e esquecer o tratamento</h3>
<p>Escrever "sem ocorrência" é fácil. Difícil é explicar, meses depois, por que um apontamento de homônimo foi descartado. O tratamento do apontamento precisa de autor, data e fundamento.</p>
<h3>Reconstruir evidência às vésperas da visita</h3>
<p>Montar a trilha depois do aviso de fiscalização é arriscado por dois motivos: consome a equipe no pior momento e produz documentos cuja data denuncia a reconstrução. A evidência de valor é a que nasce junto com o ato.</p>
<h3>Deixar o cliente PJ pela metade</h3>
<p>Parar no primeiro nível de sócios é uma lacuna comum e visível. O caminho até a pessoa natural precisa estar completo, como explica o texto sobre <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final (UBO) e KYB</a>.</p>
<h3>Não revisitar o cliente</h3>
<p>O cadastro aprovado há três anos, nunca reverificado, é um achado clássico. A periodicidade de revisão deve acompanhar o nível de risco, e as revisões precisam deixar rastro.</p>
<div class="callout"><strong>Ordem de prioridade</strong><p>Se o tempo é curto, comece pelo que mais pesa na amostra do fiscal: decisões com autor e data, tratamento de apontamentos e cadeia completa de clientes PJ.</p></div>
`,
  faq: [
    {
      q: 'O que o BACEN pede numa fiscalização de PLD/FT?',
      a: 'Em geral, política e avaliação interna de risco formalizadas e uma amostra de clientes e operações para verificar a prática. Para cada cliente, o supervisor quer ver como foi verificado, em que base foi classificado e quem decidiu, com datas e justificativas.',
    },
    {
      q: 'O relatório do bureau serve como prova de PLD/FT?',
      a: 'Sozinho, não. Ele registra o que constava em um dia, mas não mostra o tratamento dado aos apontamentos, o enquadramento de risco nem a decisão. A prova vem da trilha completa: identidade, fontes, risco e decisão com autor e data.',
    },
    {
      q: 'Quais normas sustentam a fiscalização de PLD/FT?',
      a: 'A Lei 9.613/1998 é a base. Para instituições autorizadas pelo Banco Central, a Circular BCB 3.978/2020 e a Carta Circular BCB 4.001/2020 detalham procedimentos e exemplos de atipicidade. Cada segmento pode ter normas próprias, como a Resolução CVM 50/2021 e a Circular SUSEP 612/2020.',
    },
    {
      q: 'Como montar o dossiê de um cliente para o supervisor?',
      a: 'Reúna identidade verificada, fontes consultadas com data, enquadramento de risco com a regra aplicada e decisão com autor, data e justificativa. Para PJ, inclua a cadeia societária até o beneficiário final. O ideal é que o documento seja gerado a partir do próprio processo e exportado em PDF.',
    },
    {
      q: 'A kycert substitui o sistema de monitoramento de transações?',
      a: 'Não. A kycert cuida do cadastro, do KYC e KYB, do screening, do enquadramento de risco, da decisão registrada e da reverificação periódica. O monitoramento transacional em tempo real é outra camada, alimentada pelo perfil de risco do KYC.',
    },
  ],
  related: [
    'checklist-prontidao-fiscalizacao',
    'circular-3978-checklist-pld-ft',
    'abordagem-baseada-em-risco-abr-exemplo-pratico',
    'beneficiario-final-ubo-kyb',
  ],
  solutions: [
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/produto/kyc', label: 'Verificação PF (KYC)' },
    { href: '/produto/monitoramento', label: 'Reverificação periódica' },
  ],
};

export default post;
