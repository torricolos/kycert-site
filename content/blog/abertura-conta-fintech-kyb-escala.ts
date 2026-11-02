import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'abertura-conta-fintech-kyb-escala',
  title: 'Abertura de conta em fintech: KYC de pessoa física e KYB de pessoa jurídica em escala',
  metaTitle: 'Abertura de conta em fintech: KYC e KYB em escala',
  description:
    'Como instituições de pagamento verificam PF e PJ em volume, enquadram o risco no fluxo e mantêm a trilha exigida pela Circular BCB 3.978/2020.',
  category: 'Segmentos',
  eyebrow: 'Bancos e fintechs',
  excerpt:
    'Instituições de pagamento abrem conta em volume e respondem por cada cliente em PLD/FT. Veja como verificar PF e PJ sem travar o onboarding e sem perder a trilha.',
  datePublished: '2026-06-24',
  dateModified: '2026-11-02',
  lead: 'Fintech que abre conta em minutos vive uma tensão permanente: cada segundo a mais no onboarding custa conversão, e cada verificação a menos custa exposição regulatória. A <strong>Circular BCB 3.978/2020</strong> não aceita velocidade como justificativa para cliente mal identificado, e o Banco Central tampouco aceita lentidão como desculpa para atalho. A saída é desenhar o onboarding de forma que a verificação forte aconteça dentro do fluxo, no tempo da abertura, com o risco enquadrado e a decisão registrada. Este texto trata do KYC de pessoa física e do KYB de pessoa jurídica em escala, e do que guardar para provar que funcionou.',
  figure: {
    src: '/images/blog/fluxo-onboarding-pld-ft.svg',
    alt: 'Fluxo de onboarding de PLD/FT em seis etapas, da captura de dados à decisão registrada e à reverificação, aplicável à abertura de conta digital.',
    caption: 'O fluxo de onboarding de PLD/FT, aplicado à abertura de conta digital.',
    width: 1200,
    height: 500,
  },
  body: `
<h2>Contexto regulatório: quem é instituição obrigada no ecossistema de pagamentos</h2>
<p>Instituições de pagamento autorizadas pelo Banco Central, sociedades de crédito direto, de empréstimo entre pessoas e demais instituições autorizadas a funcionar pelo BCB estão sujeitas à Circular BCB 3.978/2020, que trata da política, dos procedimentos e dos controles internos de <a href="/glossario/pld-ft">PLD/FT</a>. A Lei 9.613/1998 é o alicerce: define o crime, cria o dever de identificar clientes, manter registros e comunicar ao COAF as operações suspeitas.</p>
<p>Fintechs que operam como correspondentes, como parceiras de bancos ou como camada de produto (BaaS) precisam olhar o contrato com cuidado. A responsabilidade regulatória de cada parte decorre da autorização que ela tem, e não do nome do produto. Se a instituição autorizada é a que mantém a conta, é ela quem responde pela identificação do cliente perante o BCB, ainda que a captura aconteça em outra empresa. Por isso o contrato precisa dizer quem executa cada etapa e como a evidência chega à instituição responsável.</p>
<p>Na conta Pix, a Resolução BCB 1/2020 que institui o arranjo reforça outro ponto: a conta digital é a porta de entrada de recursos que circulam em tempo real. Cadastro fraco vira conta de passagem em horas, não em meses.</p>

<h2>O que a norma exige no onboarding de conta</h2>
<p>Pela Circular 3.978, a instituição deve ter procedimentos de conheça seu cliente compatíveis com a abordagem baseada em risco. Pelo tema, sem numerar artigos, isso significa:</p>
<ul>
<li><strong>Identificação e qualificação:</strong> coletar e verificar dados de identificação do cliente, e qualificá-lo conforme sua atividade, renda ou faturamento.</li>
<li><strong>Classificação de risco:</strong> enquadrar o cliente em categorias de risco definidas na avaliação interna de risco da instituição.</li>
<li><strong>Pessoas expostas politicamente:</strong> identificar <a href="/glossario/pep">PEP</a> e aplicar tratamento compatível.</li>
<li><strong>Beneficiário final:</strong> para pessoa jurídica, chegar à pessoa natural que controla ou se beneficia, tema do glossário sobre <a href="/glossario/ubo">UBO</a>.</li>
<li><strong>Diligência proporcional:</strong> risco maior, verificação mais profunda, como mostra a <a href="/glossario/abr">abordagem baseada em risco</a>.</li>
<li><strong>Manutenção do cadastro:</strong> manter as informações atualizadas ao longo do relacionamento.</li>
<li><strong>Registro:</strong> guardar dados, documentos e decisões de forma acessível à fiscalização.</li>
</ul>
<p>Nenhum desses itens diz quanto tempo o onboarding deve levar. O que a norma exige é resultado: cliente identificado, risco classificado, decisão documentada. Como chegar lá em segundos é decisão de engenharia e de política.</p>

<h2>KYC de pessoa física em escala</h2>
<p>O <a href="/glossario/kyc">KYC</a> de pessoa física em abertura digital combina quatro camadas, e cada uma pega um tipo de problema diferente.</p>
<h3>Captura e leitura do documento</h3>
<p>O cliente envia o documento pelo celular, e a leitura por <a href="/produto/ocr">OCR</a> extrai nome, CPF, data de nascimento e filiação sem digitação. Além de acelerar, isso elimina uma fonte comum de divergência: o dado digitado errado que depois não bate com nenhuma base.</p>
<h3>Conferência cadastral</h3>
<p>Os dados lidos são cruzados com a situação cadastral do CPF e com as demais fontes definidas na política. CPF suspenso, regularizado, cancelado ou nulo muda o enquadramento. Divergência entre o nome do documento e o da base é sinal para revisão, não para aprovação automática.</p>
<h3>Sanções e PEP</h3>
<p>O screening contra listas de sanções e a identificação de PEP precisam acontecer antes da ativação da conta. Um acerto exige análise: homônimo ou o próprio cliente? O resultado e a decisão do analista ficam registrados, inclusive os falsos positivos, pois são eles que mostram ao fiscal que alguém olhou.</p>
<h3>Prova de identidade</h3>
<p>Documento válido não prova que quem está no celular é o dono dele. A prova de vida e a comparação facial são camadas de combate a fraude de identidade, e o desenho exato depende da política e do apetite de risco da instituição. Entram na trilha como evidência, com o resultado e a data.</p>

<h2>KYB de pessoa jurídica em escala</h2>
<p>A conta PJ é onde o onboarding digital mais escorrega. Verificar o CNPJ é fácil. Entender quem está por trás da empresa dá trabalho. O <a href="/glossario/kyb">KYB</a> completo exige:</p>
<ul>
<li>dados cadastrais da empresa obtidos de fonte oficial, e não digitados;</li>
<li>quadro societário recuperado automaticamente;</li>
<li>cadeia de participações seguida por todos os níveis, inclusive holdings e sócios que são outras empresas;</li>
<li>identificação do beneficiário final, a pessoa natural que de fato controla;</li>
<li>screening de sanções e PEP em cada participante da cadeia, e não só no representante legal;</li>
<li>verificação do representante e do procurador que operam a conta.</li>
</ul>
<p>Feito à mão, o processo vira gargalo ou vira atalho. Na plataforma, o <a href="/produto/kyb">KYB com cadeia societária até o beneficiário final</a> percorre a estrutura, marca o status de cada nó e registra o resultado. O texto sobre <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final e KYB</a> mostra os cenários mais difíceis, como cadeias com sócio estrangeiro e participação cruzada.</p>

<table class="art-table">
<thead><tr><th>Tipo de cliente</th><th>Verificações mínimas</th><th>Sinal para diligência reforçada</th></tr></thead>
<tbody>
<tr><td>Pessoa física</td><td>Documento, CPF, sanções, PEP, prova de identidade</td><td>PEP, divergência cadastral, renda incompatível com o uso previsto</td></tr>
<tr><td>Pessoa jurídica</td><td>CNPJ, quadro societário, UBO, sanções de cada nó</td><td>Cadeia opaca, sócio em jurisdição de risco, empresa muito recente com volume alto</td></tr>
<tr><td>Representante ou procurador</td><td>Identidade, poderes, sanções, PEP</td><td>Um mesmo representante em muitas contas sem vínculo aparente</td></tr>
</tbody>
</table>

<h2>Risco enquadrado dentro do fluxo</h2>
<p>Abrir conta rápido e enquadrar o risco depois é a combinação que gera passivo. O enquadramento precisa ser parte do fluxo: com os dados verificados, a regra da instituição calcula a faixa de risco e define o caminho. Risco baixo segue para aprovação automática. Risco médio pode ativar a conta com limites. Risco alto vai para a fila de análise com <a href="/glossario/cdd-edd">diligência reforçada</a>.</p>
<p>A regra é da instituição, não da plataforma. O que a plataforma garante é que a regra seja aplicada de forma idêntica a todos os clientes e que o resultado fique registrado com os fatores que o produziram. Isso também resolve um problema silencioso: a aprovação automática só é defensável se a regra que a produziu estiver documentada e versionada.</p>
<div class="callout"><strong>Velocidade não é ausência de registro</strong><p>Aprovação em segundos é aceitável quando cada verificação fica gravada com fonte, resultado e data, e quando a regra aplicada está documentada. O que o fiscal rejeita é a aprovação rápida que não deixa rastro.</p></div>

<h2>Checklist prático de onboarding de conta digital</h2>
<ul class="checklist">
<li>Avaliação interna de risco atualizada, com clientes, produtos, canais e regiões.</li>
<li>Regra de enquadramento escrita, versionada e aplicada igualmente a todo cliente.</li>
<li>Captura de documento com leitura automática e guarda do arquivo original.</li>
<li>Conferência da situação cadastral do CPF e do CNPJ com data e fonte.</li>
<li>Screening de sanções e PEP antes da ativação da conta, com tratamento de acertos.</li>
<li>Camada de prova de identidade definida na política, com resultado registrado.</li>
<li>KYB com cadeia societária até o beneficiário final para toda conta PJ.</li>
<li>Verificação do representante legal e do procurador.</li>
<li>Fila de análise com alçada definida para risco alto e registro da decisão.</li>
<li>Reverificação periódica por faixa de risco, com vencimento controlado.</li>
<li>Contratos com parceiros e provedores de BaaS definindo quem executa e quem guarda cada evidência.</li>
<li>Integração por API para que o resultado do onboarding chegue ao core sem retrabalho.</li>
</ul>

<h2>Como evidenciar na fiscalização</h2>
<p>A inspeção do BCB em instituição de pagamento tende a partir de amostra: o fiscal escolhe contas abertas num período, e a instituição precisa reproduzir o caminho de cada uma. Com volume alto, não há como montar o dossiê na hora. Ele precisa ser um subproduto do próprio onboarding.</p>
<p>O que compõe a prova de cada conta: dados e documentos capturados, fontes consultadas e resultados, cadeia societária no caso de PJ, enquadramento de risco com a regra aplicada, decisão com autor (humano ou regra automatizada) e data, e histórico de reverificações. O <a href="/produto/dossie-de-risco">Dossiê de Risco</a> reúne isso em uma ficha exportável em PDF, e o <a href="/dossie-exemplo">dossiê de exemplo</a> mostra o formato. Para a lógica de preparação, leia <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização</a>.</p>
<h2>Erros comuns em abertura de conta em escala</h2>
<ul>
<li><strong>Verificar só o CNPJ.</strong> Conta PJ aberta sem olhar sócios, controlador e representante.</li>
<li><strong>Aprovação automática sem regra documentada.</strong> A decisão existe, mas ninguém sabe dizer por quê.</li>
<li><strong>Screening só no representante.</strong> Os demais sócios nunca passam por listas.</li>
<li><strong>Cada produto com seu onboarding.</strong> Conta, crédito e cartão com fluxos diferentes e sem trilha única por cliente.</li>
<li><strong>Fraude de identidade tratada como problema só do antifraude.</strong> A conta fraudada nasce dentro da base e vira problema de PLD/FT quando movimenta.</li>
<li><strong>Parceiro BaaS sem evidência acessível.</strong> A instituição responsável não consegue obter a prova quando a fiscalização pede.</li>
<li><strong>Cadastro que nunca é revisto.</strong> Cliente de risco baixo em 2024 e mudança de atividade em 2026 sem reclassificação.</li>
</ul>

<h2>Onde a kycert entra</h2>
<p>A kycert reúne, num único onboarding, o convite white-label para o cliente enviar dados, a captura de documentos com OCR, o KYC de pessoa física, o KYB de pessoa jurídica com cadeia societária até o beneficiário final, o screening de sanções e PEP, o enquadramento de risco pela regra do cliente e a decisão registrada com autor e data. A reverificação periódica mantém o cadastro vivo, e a <a href="/produto/api">API e os webhooks</a> levam o resultado ao seu core. Ela não é um motor de monitoramento transacional (KYT) em tempo real: o <a href="/glossario/kyt">monitoramento de transações</a> é outro controle, que usa o perfil de risco do KYC como insumo. A visão do segmento está na página de <a href="/solucoes/bancos">soluções para bancos e fintechs</a>, e os planos em <a href="/precos">preços</a>.</p>
`,
  faq: [
    {
      q: 'Fintech precisa seguir a Circular BCB 3.978?',
      a: 'Sim, quando é instituição autorizada a funcionar pelo Banco Central, como as instituições de pagamento. A Circular 3.978/2020 define a política, os procedimentos e os controles de PLD/FT. Quem opera como parceira de uma instituição autorizada deve seguir o que o contrato e a instituição responsável definirem.',
    },
    {
      q: 'Quais dados mínimos verificar na abertura de conta de pessoa física?',
      a: 'Identificação do cliente com documento válido, CPF e situação cadastral, screening de sanções, identificação de PEP e qualificação compatível com o risco. A prova de identidade (prova de vida, biometria) depende da política da instituição. Cada verificação deve ficar registrada com fonte e data.',
    },
    {
      q: 'O KYB precisa chegar ao beneficiário final em toda conta PJ?',
      a: 'Sim, a norma exige a identificação do beneficiário final de pessoa jurídica, a pessoa natural que controla ou se beneficia. Isso implica seguir a cadeia de participações, inclusive por holdings, e verificar cada entidade, com registro do resultado.',
    },
    {
      q: 'Aprovação automática de conta é compatível com a PLD/FT?',
      a: 'É, desde que a regra de aprovação esteja documentada, seja aplicada igualmente a todos os clientes e cada verificação fique registrada. Casos de risco alto ou com acerto em lista devem sair do automático e ir para análise com diligência reforçada.',
    },
    {
      q: 'Como provar ao Banco Central que o onboarding foi feito corretamente?',
      a: 'Com um dossiê por cliente: dados e documentos, fontes consultadas, resultados, cadeia societária (PJ), enquadramento de risco, decisão com autor e data e reverificações. O dossiê deve ser gerado a partir do próprio fluxo, e não reconstruído depois.',
    },
  ],
  related: [
    'beneficiario-final-ubo-kyb',
    'comprovar-pld-ft-fiscalizacao-bacen',
    'lei-14286-cambio-cadastro',
    'cooperativas-credito-3978-associados',
  ],
  solutions: [
    { href: '/solucoes/bancos', label: 'kycert para bancos e fintechs' },
    { href: '/produto/kyb', label: 'Verificação PJ (KYB)' },
    { href: '/produto/api', label: 'API e webhooks' },
  ],
};

export default post;
