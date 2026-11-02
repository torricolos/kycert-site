import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'consorcios-mercado-capitais-onboarding',
  title: 'Consórcios e gestoras: o onboarding que o BCB e a CVM cobram',
  metaTitle: 'Consórcios e gestoras: onboarding PLD/FT sob BCB e CVM',
  description:
    'Administradoras de consórcio (Circular BCB 3.978) e gestoras (Resolução CVM 50/2021): como estruturar o cadastro do consorciado e do investidor com trilha.',
  category: 'Segmentos',
  eyebrow: 'Consórcios e mercado de capitais',
  excerpt:
    'Administradoras de consórcio (BCB) e gestoras de recursos (CVM) respondem a deveres de identificação e PLD/FT. Veja como estruturar o cadastro do consorciado e do investidor.',
  datePublished: '2026-06-26',
  dateModified: '2026-11-02',
  lead: 'Administradoras de consórcio respondem ao Banco Central. Gestoras de recursos e distribuidoras respondem à CVM. Os dois reguladores escrevem normas diferentes, com vocabulário próprio, mas cobram a mesma coisa de quem recebe um cliente: identificar, entender o risco e registrar a decisão. Para quem opera com os dois lados, ou com um deles, o desafio é montar um cadastro que satisfaça a <strong>Circular BCB 3.978/2020</strong> e a <strong>Resolução CVM 50/2021</strong> sem duplicar processos. Este texto mostra o que cada norma pede, onde elas se encontram e como guardar a prova.',
  figure: {
    src: '/images/blog/fluxo-onboarding-pld-ft.svg',
    alt: 'Fluxo de onboarding de PLD/FT em seis etapas, da captura de dados do cliente à decisão registrada e à reverificação, comum a consórcios e gestoras.',
    caption: 'O mesmo fluxo de onboarding atende o consorciado e o investidor.',
    width: 1200,
    height: 500,
  },
  body: `
<h2>Contexto regulatório: dois supervisores, uma base legal</h2>
<p>A Lei 9.613/1998 é a base comum da <a href="/glossario/pld-ft">PLD/FT</a> no Brasil. Ela cria o dever de identificar clientes, manter registros e comunicar operações suspeitas ao COAF, e remete a cada supervisor setorial a regulamentação do dever para as entidades sob sua supervisão.</p>
<p>No consórcio, a atividade é regulada pela Lei 11.795/2008 e supervisionada pelo Banco Central. As administradoras são instituições autorizadas pelo BCB, e a Circular BCB 3.978/2020, que dispõe sobre a política, os procedimentos e os controles internos de PLD/FT, se aplica a elas. No mercado de valores mobiliários, a CVM regula o dever pela Resolução CVM 50/2021, que alcança gestoras de recursos, distribuidoras, corretoras, administradoras fiduciárias e demais participantes do sistema de distribuição e de administração de carteiras, cada um na sua função.</p>
<p>Grupos econômicos que têm uma administradora de consórcio e uma gestora, ou uma corretora e uma distribuidora, convivem com duas normas dentro do mesmo CNPJ raiz. A tentação é criar dois cadastros. O caminho mais eficiente é um cadastro único, com os atributos exigidos por ambas, e regras de enquadramento de risco que apontem para a política de cada entidade.</p>

<h2>O que cada norma exige</h2>
<h3>Administradoras de consórcio: Circular BCB 3.978/2020</h3>
<p>Pelo tema, sem numerar artigos, a Circular exige das administradoras: política de PLD/FT aprovada pela administração com diretor responsável; avaliação interna de risco que considere clientes, produtos, canais e áreas geográficas; procedimentos de conheça seu cliente com qualificação e classificação de risco; identificação de <a href="/glossario/pep">PEP</a> e do <a href="/glossario/ubo">beneficiário final</a>; monitoramento e seleção de operações atípicas; comunicação ao COAF; registro e guarda das informações; e avaliação de efetividade.</p>
<p>O consórcio tem particularidades de risco. A cota contemplada por lance elevado, a quitação antecipada com recursos de origem pouco clara, a transferência de cota para terceiros e o pagamento por conta de outra pessoa são pontos que pedem atenção. Nenhum prova lavagem, mas todos justificam <a href="/glossario/cdd-edd">diligência reforçada</a> proporcional.</p>
<h3>Gestoras e distribuidoras: Resolução CVM 50/2021</h3>
<p>A Resolução CVM 50/2021 adota a <a href="/glossario/abr">abordagem baseada em risco</a> como eixo. Em linhas gerais, exige política de PLD/FT, avaliação interna de risco, procedimentos de identificação e qualificação do cliente, classificação do cliente por faixa de risco, tratamento de PEP e de beneficiário final, monitoramento, comunicação ao COAF, guarda de registros e designação de diretor responsável. Cada participante aplica as regras conforme o seu papel: quem tem relação direta com o cliente final (distribuidor) e quem gere a carteira (gestor) têm responsabilidades distintas e devem dividir por contrato o que cada um coleta e guarda.</p>
<p>No fundo de investimento, o cotista é cliente, e a verificação alcança também a cadeia de beneficiários finais quando o cotista é pessoa jurídica ou veículo. Fundos exclusivos e carteiras de poucos investidores merecem atenção especial.</p>

<h2>Onde as duas normas se encontram</h2>
<p>Apesar da forma diferente, o núcleo operacional é o mesmo. Em ambos os casos, o cliente precisa ser identificado e qualificado, ter o risco classificado, ser checado contra sanções e PEP, ter o beneficiário final identificado quando for pessoa jurídica, e ter a decisão registrada.</p>

<table class="art-table">
<thead><tr><th>Elemento</th><th>Consórcio (BCB)</th><th>Mercado de capitais (CVM)</th></tr></thead>
<tbody>
<tr><td>Quem é o cliente</td><td>Consorciado, e quem paga por ele</td><td>Investidor, cotista e, no fundo, sua cadeia</td></tr>
<tr><td>Norma de referência</td><td>Circular BCB 3.978/2020</td><td>Resolução CVM 50/2021</td></tr>
<tr><td>Eixo</td><td>Abordagem baseada em risco</td><td>Abordagem baseada em risco</td></tr>
<tr><td>Pontos de atenção</td><td>Lance, quitação antecipada, cessão de cota, pagamento por terceiro</td><td>Origem do patrimônio, veículos interpostos, resgates atípicos</td></tr>
<tr><td>Evidência</td><td>Dossiê do consorciado</td><td>Dossiê do investidor</td></tr>
</tbody>
</table>

<h2>Cadastro do consorciado e do investidor</h2>
<h3>Pessoa física</h3>
<p>O <a href="/produto/kyc">KYC de pessoa física</a> captura o documento (com <a href="/produto/ocr">OCR</a> para evitar digitação), confere a situação cadastral do CPF, roda screening de sanções e identifica PEP. Para investidor, soma-se a qualificação patrimonial e da origem dos recursos, que dá substância à classificação de risco.</p>
<h3>Pessoa jurídica e veículos</h3>
<p>Consorciado PJ e investidor PJ, como empresas, holdings patrimoniais e fundos, exigem <a href="/produto/kyb">KYB com cadeia societária até o beneficiário final</a>. A estrutura é seguida por todos os níveis, e cada participante passa por screening. Quanto mais camadas, maior o risco de ocultação, e maior a necessidade de registrar o mapeamento. O texto sobre <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final e KYB</a> aprofunda o tema.</p>
<h3>Classificação de risco</h3>
<p>Com os dados verificados, o cliente é enquadrado conforme a regra da instituição. A regra precisa ser escrita e aplicada igualmente a todos. Fatores típicos: PEP, atividade de risco, jurisdição, estrutura opaca, incompatibilidade entre patrimônio declarado e volume de operações. O resultado define o fluxo: padrão, reforçado ou recusa.</p>
<div class="callout"><strong>Sobre adequação de perfil (suitability)</strong><p>A verificação de adequação do produto ao perfil do investidor é dever distinto da PLD/FT e tem norma própria da CVM. Ela se apoia em cadastro identificado e verificado, mas não faz parte do que a kycert entrega hoje. A kycert entrega a base verificada e o enquadramento de PLD/FT, sobre a qual o processo de adequação pode se apoiar.</p></div>

<h2>Checklist prático de onboarding para consórcios e gestoras</h2>
<ul class="checklist">
<li>Política de PLD/FT aprovada para cada entidade supervisionada, com diretor responsável designado.</li>
<li>Avaliação interna de risco por entidade, com clientes, produtos, canais e regiões.</li>
<li>Cadastro único com os atributos exigidos pelo BCB e pela CVM, evitando dois processos paralelos.</li>
<li>Regra de enquadramento de risco escrita e aplicada igualmente a todo cliente.</li>
<li>Captura de documento com guarda do original, data e origem.</li>
<li>Screening de sanções e PEP na entrada, com tratamento de acertos registrado.</li>
<li>KYB com beneficiário final para consorciado PJ, investidor PJ e veículos de investimento.</li>
<li>Qualificação da origem dos recursos proporcional ao risco, sobretudo em lances e resgates elevados.</li>
<li>Regra para cessão de cota e para pagamento por terceiro, com verificação do terceiro.</li>
<li>Contrato entre gestor e distribuidor definindo quem coleta, verifica e guarda cada evidência.</li>
<li>Reverificação periódica por faixa de risco, com vencimento controlado.</li>
<li>Procedimento de comunicação ao COAF, com registro da decisão de comunicar ou não.</li>
</ul>

<h2>Como evidenciar na fiscalização do BCB e da CVM</h2>
<p>As duas fiscalizações partem de lógica parecida: amostra de clientes, pedido do histórico e checagem de que a política escrita corresponde à prática. A CVM, além disso, costuma olhar a efetividade da relação entre as entidades da cadeia, por exemplo entre gestor e distribuidor. O BCB olha a evolução do controle ao longo do tempo, incluindo a avaliação de efetividade.</p>
<p>O que sustenta a resposta em ambos os casos é um dossiê por cliente: dados e documentos, fontes e resultados, cadeia societária quando houver, enquadramento de risco, decisão com autor e data e reverificações. O <a href="/produto/dossie-de-risco">Dossiê de Risco</a> reúne isso e exporta em PDF, e o <a href="/dossie-exemplo">dossiê de exemplo</a> mostra o formato. Para a lógica de preparação, vale o texto sobre <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização</a> e o <a href="/blog/checklist-prontidao-fiscalizacao">checklist de prontidão</a>. Ambos valem para qualquer supervisor, com adaptação do vocabulário.</p>
<p>Um ponto prático para grupos com mais de uma entidade: o dossiê precisa indicar qual entidade e qual política foram aplicadas. O mesmo cliente pode ter risco diferente em duas entidades do grupo, e a prova deve deixar claro qual regra produziu qual resultado.</p>

<h2>Erros comuns em consórcios e gestoras</h2>
<ul>
<li><strong>Dois cadastros para o mesmo cliente.</strong> Dados divergentes entre a administradora e a gestora do mesmo grupo.</li>
<li><strong>Consorciado verificado, pagador não.</strong> Terceiros que quitam parcelas ou lances nunca passam por verificação.</li>
<li><strong>Cessão de cota sem novo cadastro.</strong> O cessionário entra sem ser identificado.</li>
<li><strong>Investidor PJ sem beneficiário final.</strong> Veículos e holdings aceitos sem seguir a cadeia.</li>
<li><strong>Responsabilidade difusa entre gestor e distribuidor.</strong> Cada um acha que o outro coleta e guarda.</li>
<li><strong>Origem de recursos não qualificada.</strong> Resgates e lances elevados sem qualquer racional documentado.</li>
<li><strong>Confundir adequação de perfil com PLD/FT.</strong> Cumprir um e achar que o outro está coberto.</li>
</ul>

<h2>Onde a kycert entra</h2>
<p>A kycert estrutura o cadastro único do consorciado e do investidor: convite white-label, captura de documentos com OCR, KYC de pessoa física, KYB com cadeia societária até o beneficiário final, screening de sanções e PEP, enquadramento de risco pela regra do cliente, decisão registrada com autor e data e reverificação periódica. A trilha fica disponível para o BCB ou para a CVM, conforme o enquadramento de cada entidade. A integração com os sistemas da administradora ou da gestora usa a <a href="/produto/api">API e os webhooks</a>. O monitoramento transacional (<a href="/glossario/kyt">KYT</a>) é um controle à parte: a kycert fornece o perfil de risco do KYC que o alimenta, mas não monitora transações em tempo real. A página de <a href="/solucoes/mercado-capitais">soluções para consórcios e mercado de capitais</a> detalha o segmento, e os planos estão em <a href="/precos">preços</a>.</p>
`,
  faq: [
    {
      q: 'A Circular BCB 3.978 se aplica a administradoras de consórcio?',
      a: 'Sim. As administradoras de consórcio são instituições autorizadas pelo Banco Central e estão sujeitas à Circular BCB 3.978/2020, que trata da política, dos procedimentos e dos controles internos de PLD/FT. O consórcio em si é regulado pela Lei 11.795/2008.',
    },
    {
      q: 'Gestora de recursos precisa seguir a Resolução CVM 50/2021?',
      a: 'Sim, na medida da sua função. A Resolução CVM 50/2021 trata da PLD/FT no mercado de valores mobiliários e alcança gestoras, distribuidoras e demais participantes. A divisão de responsabilidades entre gestor e distribuidor deve estar clara em contrato, com definição de quem coleta e guarda cada evidência.',
    },
    {
      q: 'Posso usar o mesmo cadastro para a administradora de consórcio e para a gestora do grupo?',
      a: 'É possível e recomendável, desde que o cadastro tenha os atributos exigidos pelas duas normas e a regra de enquadramento de risco aponte para a política de cada entidade. O dossiê deve indicar qual entidade e qual política foram aplicadas.',
    },
    {
      q: 'Preciso identificar o beneficiário final de um investidor pessoa jurídica?',
      a: 'Sim. A identificação do beneficiário final de pessoa jurídica e de veículos é parte do dever de conhecer o cliente. Siga a cadeia de participações, inclusive por holdings, até a pessoa natural que controla ou se beneficia, e registre o resultado do screening em cada nó.',
    },
    {
      q: 'Adequação de perfil do investidor faz parte da PLD/FT?',
      a: 'Não. Adequação de perfil (suitability) é dever distinto, com norma própria da CVM. Ela se apoia em cadastro identificado e verificado, mas a PLD/FT trata de outro risco. Convém tratar os dois processos de forma coordenada, sem tomar um pelo outro.',
    },
  ],
  related: [
    'beneficiario-final-ubo-kyb',
    'comprovar-pld-ft-fiscalizacao-bacen',
    'checklist-prontidao-fiscalizacao',
    'abertura-conta-fintech-kyb-escala',
  ],
  solutions: [
    { href: '/solucoes/mercado-capitais', label: 'kycert para consórcios e mercado de capitais' },
    { href: '/produto/kyb', label: 'Verificação PJ (KYB)' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
  ],
};

export default post;
