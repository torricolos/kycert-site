import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'seguradoras-susep-onboarding-pld',
  title: 'Seguradoras e corretoras: onboarding e PLD/FT sob a Circular SUSEP 612/2020',
  metaTitle: 'Seguradoras: onboarding e PLD/FT na Circular SUSEP 612',
  description:
    'Como seguradoras e corretoras estruturam a identificação do segurado, a avaliação de risco e a trilha de decisão exigidas pela Circular SUSEP 612/2020.',
  category: 'Segmentos',
  eyebrow: 'Seguradoras',
  excerpt:
    'Seguradoras e corretoras respondem a deveres de PLD/FT supervisionados pela SUSEP. Veja como estruturar o cadastro do segurado e a trilha de decisão que a fiscalização pede.',
  datePublished: '2026-06-19',
  dateModified: '2026-11-02',
  lead: 'Seguradoras, resseguradoras e corretoras de seguros são entidades obrigadas na prevenção à lavagem de dinheiro e ao financiamento do terrorismo, e a SUSEP supervisiona esse dever pela <strong>Circular SUSEP 612/2020</strong>. Na prática, a fiscalização quer ver três coisas por cliente: quem ele é, qual risco você atribuiu a ele e quem decidiu o quê, e quando. Este texto mostra como montar essa trilha no cadastro do segurado, do contratante pessoa jurídica e do beneficiário, sem transformar a contratação em gargalo.',
  figure: {
    src: '/images/blog/fluxo-onboarding-pld-ft.svg',
    alt: 'Fluxo de onboarding de PLD/FT em seis etapas, da captura de dados do cliente até o registro da decisão e a reverificação periódica.',
    caption: 'As etapas do onboarding de PLD/FT, aplicáveis ao segurado e ao contratante.',
    width: 1200,
    height: 500,
  },
  body: `
<h2>Contexto regulatório: seguros como setor obrigado</h2>
<p>A <a href="/glossario/pld-ft">PLD/FT</a> no Brasil nasce na Lei 9.613/1998, que define o crime de lavagem de dinheiro, cria o COAF e lista os setores obrigados a identificar clientes, manter registros e comunicar operações suspeitas. O setor de seguros está nessa lista. Cada supervisor setorial detalha o dever para quem regula: o Banco Central faz isso para as instituições financeiras pela Circular BCB 3.978/2020, a CVM para o mercado de valores pela Resolução CVM 50/2021, e a SUSEP para seguradoras e corretoras pela Circular SUSEP 612/2020.</p>
<p>O dever vale para seguradoras, resseguradoras, entidades de capitalização e corretoras de seguros, cada uma na medida do seu papel. A seguradora é quem assume o risco e recebe o prêmio. A corretora é quem, muitas vezes, tem o primeiro e único contato com o cliente. Nas duas pontas, a SUSEP espera uma política de PLD/FT proporcional ao porte e ao perfil de risco, um responsável designado e controles que funcionem de verdade, não apenas um manual arquivado.</p>
<p>Seguro de danos de baixo valor e seguro de vida com resgate, capitalização ou previdência não têm o mesmo apetite para lavagem. Produtos com acúmulo de reserva, devolução de prêmio, cancelamento antecipado com restituição ou indicação de beneficiário em terceiros são os que mais interessam a quem quer ocultar a origem de recursos. A regra do jogo é a <a href="/glossario/abr">abordagem baseada em risco</a>: o esforço de diligência cresce com o risco do cliente e do produto.</p>

<h2>O que a Circular SUSEP 612/2020 exige</h2>
<p>A Circular 612 organiza o dever em blocos que qualquer time de compliance reconhece. Tratamos aqui pelo tema, sem numerar artigos, porque o que importa é o desenho do controle:</p>
<ul>
<li><strong>Política e governança:</strong> política formal de PLD/FT, aprovada pela alta administração, e diretor responsável perante a SUSEP.</li>
<li><strong>Avaliação interna de risco:</strong> mapeamento dos riscos por clientes, produtos, canais de distribuição e regiões, revisado periodicamente.</li>
<li><strong>Conheça seu cliente:</strong> identificação e qualificação do segurado, do contratante e, quando houver, do beneficiário, com verificação das informações.</li>
<li><strong>Pessoas expostas politicamente e sanções:</strong> identificação de <a href="/glossario/pep">PEP</a> e checagem contra listas restritivas.</li>
<li><strong>Beneficiário final:</strong> para contratante pessoa jurídica, chegar à pessoa natural que controla ou se beneficia da relação.</li>
<li><strong>Monitoramento e comunicação:</strong> acompanhar operações atípicas e comunicar ao COAF o que for suspeito.</li>
<li><strong>Registro e guarda:</strong> manter os registros por prazo definido na norma e acessíveis à fiscalização.</li>
</ul>
<p>Repare que quase todos os blocos terminam em evidência. Fazer a verificação não basta. É preciso poder demonstrar que ela foi feita, com que fonte, por quem e com qual conclusão. Esse é o fio que liga a norma ao que o fiscal pede na visita.</p>

<h3>Quem é o cliente em seguros</h3>
<p>Em um contrato de seguro existem papéis distintos: o proponente, o segurado, o contratante, o beneficiário e, às vezes, o pagador do prêmio. A PLD/FT olha para todos eles. Um seguro de vida contratado por uma empresa em favor de pessoas físicas, por exemplo, exige qualificar a empresa (e seus controladores) e conhecer quem é indicado para receber a indenização. O erro mais frequente é cadastrar só quem assina a proposta.</p>

<h2>Cadastro do segurado, do contratante PJ e do beneficiário</h2>
<p>O desenho mais simples é dividir o cadastro por tipo de pessoa e por camada de verificação.</p>
<h3>Pessoa física</h3>
<p>Para segurados e beneficiários pessoa física, o <a href="/produto/kyc">KYC de pessoa física</a> reúne a captura do documento (com <a href="/produto/ocr">OCR</a> para evitar digitação), a conferência da situação cadastral do CPF, a checagem contra listas de sanções e a identificação de PEP. O resultado vira um enquadramento de risco pela regra que a própria seguradora definiu, e não por um score genérico.</p>
<h3>Pessoa jurídica</h3>
<p>Para contratantes pessoa jurídica, como seguro empresarial, vida em grupo ou garantia, o <a href="/produto/kyb">KYB de pessoa jurídica</a> recupera o quadro societário e segue a cadeia de participações até o <a href="/glossario/ubo">beneficiário final (UBO)</a>. Holding no meio do caminho não é desculpa para parar: o dever alcança a pessoa natural. Se o tema for novo para o seu time, vale ler o texto sobre <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final e KYB</a>.</p>
<h3>Beneficiário</h3>
<p>O beneficiário de um seguro de vida costuma ser indicado depois, às vezes só no sinistro. A boa prática é tratar a indicação como evento de cadastro: quando o beneficiário muda ou é identificado, ele passa pelas mesmas verificações que um cliente, proporcionais ao valor envolvido. A pergunta que a fiscalização faz é simples: antes de pagar, vocês sabiam quem estava recebendo?</p>



<h2>Checklist prático de onboarding em seguros</h2>
<ul class="checklist">
<li>Política de PLD/FT aprovada, com diretor responsável designado e ata arquivada.</li>
<li>Avaliação interna de risco por produto, canal e perfil de cliente, com data da última revisão.</li>
<li>Regra de enquadramento de risco escrita (quais fatores levam a risco baixo, médio ou alto).</li>
<li>Cadastro obrigatório de segurado, contratante e beneficiário antes da emissão ou do pagamento.</li>
<li>Verificação de situação cadastral, sanções e PEP registrada com data e fonte.</li>
<li>KYB com cadeia societária até o beneficiário final para contratante pessoa jurídica.</li>
<li>Diligência reforçada definida para clientes de risco alto, com aprovação de nível superior.</li>
<li>Contrato com corretoras prevendo coleta, formato e prazo de entrega dos dados.</li>
<li>Reverificação periódica por perfil de risco, com vencimento controlado.</li>
<li>Fluxo de comunicação ao COAF com responsável, prazo interno e registro da decisão de comunicar ou não.</li>
<li>Treinamento de PLD/FT para equipe comercial, subscrição e sinistros, com lista de presença.</li>
</ul>

<h2>Risco alto e diligência reforçada em seguros</h2>
<p>A distinção entre <a href="/glossario/cdd-edd">diligência padrão e reforçada (CDD e EDD)</a> é o centro da abordagem baseada em risco. Em seguros, os gatilhos típicos de diligência reforçada incluem: cliente PEP ou próximo de PEP, prêmio incompatível com a renda ou o faturamento declarado, pagamento por terceiro sem vínculo claro, contratante em jurisdição de risco, estrutura societária opaca, cancelamento logo após a contratação com pedido de devolução e mudança de beneficiário perto de um sinistro.</p>
<p>Nenhum desses sinais prova lavagem. Eles obrigam a seguradora a olhar mais fundo, pedir documentos adicionais, buscar aprovação de alçada superior e registrar por que decidiu seguir ou recusar. Quando o resultado levanta suspeita, entra o dever de comunicação ao COAF. Quem decide comunicar ou não precisa deixar escrito o raciocínio, e a decisão de não comunicar também é registro.</p>

<h2>Como evidenciar na fiscalização da SUSEP</h2>
<p>Numa inspeção, a conversa costuma começar por uma amostra: o fiscal escolhe alguns segurados e pede o caminho completo de cada um. Se a resposta depende de procurar e-mails, abrir planilhas e perguntar a quem saiu da empresa, a trilha não existe. O que sustenta uma boa resposta é um dossiê por cliente, que reúna:</p>
<ul>
<li>os dados e documentos capturados, com data e origem;</li>
<li>as fontes consultadas (situação cadastral, sanções, PEP) e o resultado de cada uma;</li>
<li>a cadeia societária e o beneficiário final, no caso de pessoa jurídica;</li>
<li>o enquadramento de risco, com a regra aplicada;</li>
<li>a decisão registrada, com o autor e a data;</li>
<li>o histórico de reverificações.</li>
</ul>
<p>Esse é o papel do <a href="/produto/dossie-de-risco">Dossiê de Risco</a>, exportável em PDF, e você pode ver como ele fica em um caso real no <a href="/dossie-exemplo">dossiê de exemplo</a>. A lógica geral de preparação está no texto sobre <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização</a>. O supervisor muda, a pergunta de fundo é a mesma: mostre como você decidiu.</p>
<div class="callout"><strong>Regra de ouro da evidência</strong><p>Todo registro precisa responder a quatro perguntas: quem fez, quando, contra qual fonte e com qual resultado. Se faltar uma, o fiscal vai tratar o registro como declaração, não como prova.</p></div>

<h2>Reverificação: o cadastro de seguros envelhece</h2>
<p>Seguro é relação longa. Uma apólice de vida pode durar décadas, e o cliente que passou limpo na contratação pode virar PEP, entrar em uma lista de sanções ou mudar de atividade. Por isso a reverificação periódica faz parte do dever de manter o cadastro atualizado. A periodicidade deve acompanhar o risco: clientes de risco alto em ciclos curtos, clientes de risco baixo em ciclos mais longos. A <a href="/produto/monitoramento">reverificação e o monitoramento de cadastro</a> controlam o vencimento, refazem o screening no prazo e registram cada ciclo no dossiê.</p>
<p>Um ponto de atenção: reverificação de cadastro não é monitoramento de transações. A análise de movimentações atípicas (prêmios, resgates, sinistros) é um controle à parte e se alimenta do perfil de risco do cliente. O conceito está explicado no glossário de <a href="/glossario/kyt">KYT</a>. A kycert entrega o perfil de risco do KYC que alimenta esse monitoramento, mas não é um motor transacional em tempo real.</p>

<h2>Erros comuns em onboarding de seguros</h2>
<ul>
<li><strong>Cadastrar só o proponente.</strong> Beneficiário e pagador de prêmio ficam sem qualquer verificação.</li>
<li><strong>Tratar PJ como CNPJ.</strong> Conferir a situação do CNPJ e não olhar sócios nem controlador.</li>
<li><strong>Confiar na corretora sem registro.</strong> Receber dados sem saber quem conferiu e como.</li>
<li><strong>Avaliação de risco genérica.</strong> Um único nível de risco para todos os produtos, sem distinguir vida com resgate de seguro patrimonial simples.</li>
<li><strong>Decisão sem autor.</strong> Aprovação verbal ou em chat, sem data, que não se reconstrói depois.</li>
<li><strong>Cadastro que nunca vence.</strong> Cliente aprovado em 2019 que ninguém reverificou.</li>
<li><strong>Conferir tudo só no sinistro.</strong> Descobrir a pendência na hora de pagar, quando o custo de corrigir é máximo.</li>
</ul>

<h2>Onde a kycert entra no onboarding de seguros</h2>
<p>A kycert não substitui a política da seguradora nem a decisão do analista. Ela estrutura o que cabe a uma plataforma: convite white-label para o segurado enviar dados e documentos, captura com OCR, KYC de pessoa física, KYB com cadeia societária até o beneficiário final, screening de sanções e PEP, enquadramento de risco pela regra do cliente e decisão registrada com autor e data. Tudo isso fica no dossiê exportável. Para quem integra o cadastro ao sistema de subscrição, a <a href="/produto/api">API e os webhooks</a> levam o resultado ao fluxo existente. Os detalhes do segmento estão na página de <a href="/solucoes/seguradoras">soluções para seguradoras</a>, e as condições comerciais em <a href="/precos">preços</a>.</p>
`,
  faq: [
    {
      q: 'Corretoras de seguros também precisam de política de PLD/FT?',
      a: 'Sim. Corretoras de seguros estão entre as entidades obrigadas supervisionadas pela SUSEP, e a Circular SUSEP 612/2020 se aplica a elas na medida da sua atividade. O nível de estrutura é proporcional ao porte e ao risco, mas a identificação do cliente, o registro das decisões e a comunicação de operações suspeitas ao COAF continuam sendo deveres.',
    },
    {
      q: 'Preciso verificar o beneficiário do seguro de vida?',
      a: 'Sim, de forma proporcional ao risco e ao valor. O beneficiário é parte da relação e pode ser o ponto de destino de recursos ilícitos. A prática segura é registrar a indicação como evento de cadastro e rodar identificação, sanções e PEP antes do pagamento da indenização.',
    },
    {
      q: 'Como identificar o beneficiário final de um contratante pessoa jurídica?',
      a: 'Recupere o quadro societário e siga as participações, inclusive por holdings, até chegar à pessoa natural que controla ou se beneficia da empresa. Cada entidade da cadeia deve passar por screening, e o resultado precisa ficar registrado com data e fonte.',
    },
    {
      q: 'Com que frequência devo reverificar o cadastro do segurado?',
      a: 'A norma pede cadastro atualizado e a periodicidade deve seguir a abordagem baseada em risco. Defina na política prazos por perfil, com ciclos mais curtos para risco alto, e controle o vencimento de cada cadastro para que a reverificação aconteça no prazo e fique registrada.',
    },
    {
      q: 'O que a SUSEP pede como evidência numa fiscalização?',
      a: 'Em geral, o caminho completo de clientes escolhidos em amostra: dados e documentos, consultas realizadas, enquadramento de risco, decisão com autor e data, e reverificações. Um dossiê por cliente, exportável, responde a isso sem reconstrução manual.',
    },
  ],
  related: [
    'beneficiario-final-ubo-kyb',
    'comprovar-pld-ft-fiscalizacao-bacen',
    'checklist-prontidao-fiscalizacao',
    'cooperativas-credito-3978-associados',
  ],
  solutions: [
    { href: '/solucoes/seguradoras', label: 'kycert para seguradoras' },
    { href: '/produto/kyb', label: 'Verificação PJ (KYB)' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
  ],
};

export default post;
