import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'beneficiario-final-ubo-kyb',
  title: 'Beneficiário final (UBO): obrigações de KYB e como mapear a cadeia societária',
  metaTitle: 'Beneficiário final (UBO): o que o KYB exige',
  description:
    'O que é o beneficiário final (UBO), por que identificá-lo é obrigação de KYB e como mapear a cadeia societária até a pessoa natural que controla a empresa.',
  category: 'KYB',
  eyebrow: 'KYB / beneficiário final',
  excerpt:
    'O que é o beneficiário final, por que identificá-lo é obrigação de KYB e como mapear e registrar a cadeia societária até a pessoa natural que controla a empresa.',
  datePublished: '2026-06-02',
  dateModified: '2026-11-02',
  lead:
    'A obrigação do <a href="/glossario/kyb">KYB</a> vai além da empresa: alcança a pessoa natural que efetivamente controla a estrutura por trás dela. E essa cadeia raramente é curta. Holdings, sócios que também são empresas e participações cruzadas fazem com que o último nome só apareça depois de três, quatro ou mais níveis. Veja o que a regulamentação espera de quem cadastra clientes PJ, onde o mapeamento manual falha e como registrar o caminho até o <a href="/glossario/ubo">beneficiário final (UBO)</a> de forma que resista a uma fiscalização.',
  figure: {
    src: '/images/blog/cadeia-societaria-ubo.svg',
    alt: 'Diagrama de uma empresa cliente cujo quadro societário passa por sócios pessoa física e uma holding intermediária até chegar à pessoa natural identificada como beneficiário final.',
    caption: 'Da empresa cliente à pessoa natural: a cadeia societária percorrida nível a nível, com status de cada participante.',
    width: 1200,
    height: 480,
  },
  body: `
<h2>Contexto regulatório: por que o beneficiário final importa</h2>
<p>Empresas são instrumentos legítimos e essenciais da economia. Também são, historicamente, o véu preferido de quem quer ocultar a origem de recursos ou a identidade de quem se beneficia de uma operação. Quanto mais camadas societárias entre a empresa cliente e a pessoa natural que a controla, mais difícil fica saber com quem a instituição está de fato se relacionando.</p>
<p>Por isso a identificação do beneficiário final é um dos pilares do <a href="/glossario/pld-ft">PLD/FT</a>. Beneficiário final, ou UBO (<em>Ultimate Beneficial Owner</em>), é a pessoa natural que, ao fim da cadeia societária, controla ou se beneficia de uma empresa, direta ou indiretamente. Pode ser o sócio que aparece no contrato social, mas com frequência está escondido sob holdings, fundos e empresas de participações.</p>
<h3>Por que uma empresa limpa não basta</h3>
<p>Uma razão social sem qualquer apontamento pode ter, no topo da estrutura, alguém em lista de sanções ou exposto politicamente. Se a verificação para no CNPJ ou no primeiro nível de sócios, esse risco passa despercebido. É exatamente o ponto cego que o dever de identificação do beneficiário final pretende fechar.</p>

<h2>O que a norma exige de quem cadastra clientes PJ</h2>
<p>A identificação do beneficiário final é dever das instituições reguladas no contexto de prevenção à lavagem de dinheiro. Os principais textos de referência são:</p>
<ul>
<li>a <strong>Lei 9.613/1998</strong>, que estabelece os deveres de identificação de clientes e manutenção de registros;</li>
<li>a <strong>Circular BCB 3.978/2020</strong>, que trata da política de PLD/FT e dos procedimentos de qualificação do cliente, incluindo o cliente pessoa jurídica e a busca pela pessoa natural que o controla;</li>
<li>a <strong>Resolução BCB 277/2022</strong>, que traz exigências de cadastro no mercado de câmbio;</li>
<li>a <strong>Instrução Normativa RFB 2.119/2022</strong>, que disciplina o cadastro de CNPJ e trata da informação sobre o beneficiário final.</li>
</ul>
<p>Em todos esses textos, a lógica é a mesma: não basta saber quem é a empresa, é preciso saber quem a controla. Quando a participação é indireta, passa por outras pessoas jurídicas, o dever de identificação acompanha a cadeia até a pessoa natural. Se não for possível identificar um beneficiário final, a instituição precisa documentar o esforço feito e tratar o cliente com o rigor compatível com essa opacidade.</p>
<h3>Controle não é só percentual</h3>
<p>Muitos times olham apenas para a participação societária e param quando nenhum sócio atinge o percentual de referência adotado pela norma ou pela política interna. É um erro. O conceito de controle é mais amplo: inclui quem exerce poder de decisão por outros meios, como acordo de acionistas, direito de veto, poder de indicar administradores ou procuração com poderes amplos. Quando ninguém passa do percentual, o raciocínio deve seguir para quem de fato comanda a empresa, e a política interna deve dizer como isso é tratado.</p>
<h3>Um exemplo de cadeia</h3>
<p>Imagine a empresa A, com dois sócios: uma pessoa física com 50% e uma holding com os outros 50%. A holding, por sua vez, pertence a uma segunda holding, que pertence a uma única pessoa natural. O beneficiário final da parte da holding só aparece no terceiro nível. Quem consulta só o quadro da empresa A não vê a pessoa do outro lado.</p>
<table class="art-table">
<thead><tr><th>Nível</th><th>Participante</th><th>O que verificar</th></tr></thead>
<tbody>
<tr><td>0</td><td>Empresa cliente (PJ)</td><td>Situação cadastral, atividade, representantes</td></tr>
<tr><td>1</td><td>Sócio pessoa física e holding</td><td>Identidade, sanções, PEP, participação</td></tr>
<tr><td>2</td><td>Sócios da holding</td><td>Natureza (PF ou PJ), participação, histórico</td></tr>
<tr><td>3 ou mais</td><td>Pessoa natural no topo</td><td>Identidade, sanções, PEP, mídia, vínculos</td></tr>
</tbody>
</table>

<h2>Onde o mapeamento manual falha</h2>
<p>Mapear estrutura societária à mão tem três pontos de ruptura.</p>
<p><strong>Profundidade.</strong> Cadeias longas se perdem. O analista consulta o quadro de sócios, vê uma holding e abre outra consulta, depois outra. Em algum ponto, o prazo ou a paciência acabam e o percurso para antes de chegar à pessoa natural.</p>
<p><strong>Atualização.</strong> A estrutura muda: entram e saem sócios, holdings são incorporadas, participações são cedidas. O mapa feito no onboarding envelhece e, sem reverificação periódica, deixa de refletir a realidade.</p>
<p><strong>Registro.</strong> Mesmo quando o mapeamento é correto, raramente fica gravado de forma que comprove o caminho percorrido. O analista sabe quem é o UBO, mas a instituição não consegue demonstrar como chegou a ele.</p>
<p>O resultado costuma ser o mesmo em todos os casos: um nó esquecido, um sócio intermediário que não foi verificado, que vira o apontamento da auditoria.</p>

<h2>Como mapear a cadeia até o UBO</h2>
<p>O caminho é <strong>percorrer a estrutura de forma sistemática e registrar cada nó</strong>. Em termos práticos, o processo tem seis passos:</p>
<ol>
<li>Obter o quadro societário da empresa cliente a partir de fonte oficial.</li>
<li>Classificar cada sócio como pessoa física ou jurídica.</li>
<li>Para cada pessoa jurídica, abrir o quadro dela e repetir o passo, até chegar apenas a pessoas físicas ou a entidades em que o rastreamento não seja possível (por exemplo, estruturas no exterior ou fundos com cotistas pulverizados).</li>
<li>Calcular a participação efetiva de cada pessoa natural, multiplicando os percentuais ao longo da cadeia.</li>
<li>Aplicar o screening de sanções e <a href="/glossario/pep">PEP</a> em cada participante, não apenas no topo.</li>
<li>Registrar o resultado: a árvore, os percentuais, os status por nó e quem validou.</li>
</ol>
<p>Repetir isso para cada cliente PJ, em ciclo, é inviável sem automação.</p>
<h3>Quando a cadeia não chega a uma pessoa natural</h3>
<p>Há casos em que o rastreamento esbarra em limites: sociedades no exterior sem registro público acessível, fundos com cotas pulverizadas, estruturas fiduciárias. Nesses casos, a instituição deve pedir declaração e documentação ao cliente, registrar o esforço feito e enquadrar o cliente como de risco maior, aplicando diligência reforçada nos termos do que a política prevê. A lógica está em <a href="/glossario/cdd-edd">CDD e EDD</a>. O que não se pode é tratar a opacidade como se fosse ausência de risco.</p>

<h2>Checklist de KYB com beneficiário final</h2>
<ul class="checklist">
<li>O CNPJ foi consultado e a situação cadastral, a atividade e a data de abertura constam do registro.</li>
<li>O quadro societário foi obtido de fonte identificável, com data da consulta.</li>
<li>Cada sócio pessoa jurídica teve a própria estrutura aberta, nível a nível.</li>
<li>O percentual efetivo de cada pessoa natural foi calculado e está registrado.</li>
<li>A política define o critério de beneficiário final (percentual e outros indícios de controle).</li>
<li>Todos os participantes passaram por screening de sanções e PEP, com status individual.</li>
<li>Os representantes legais e procuradores foram identificados e verificados.</li>
<li>Estruturas no exterior ou sem rastreio possível têm declaração do cliente e enquadramento de risco reforçado.</li>
<li>A decisão sobre o cliente PJ tem autor, data e justificativa.</li>
<li>A reverificação da estrutura está agendada, com periodicidade definida pelo nível de risco.</li>
</ul>

<h2>Como evidenciar o beneficiário final na fiscalização</h2>
<p>Quando o supervisor escolhe um cliente PJ, a pergunta é direta: quem é o beneficiário final e como a instituição chegou a ele? A resposta precisa mostrar o caminho, não apenas o nome. Um dossiê PJ bem montado reúne:</p>
<ul>
<li><strong>A árvore societária completa</strong>, com cada nível e as participações.</li>
<li><strong>O status de cada participante</strong>: sanções, PEP, mandados e demais apontamentos, cada um com a fonte e a data da consulta.</li>
<li><strong>A identificação do beneficiário final</strong>, com a lógica aplicada para defini-lo.</li>
<li><strong>A decisão sobre o cliente</strong>, com autor, data e justificativa.</li>
<li><strong>O histórico de reverificações</strong>, mostrando que a estrutura foi revista ao longo do tempo.</li>
</ul>
<p>A base geral de como montar essa resposta está em <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização do BACEN</a>. Se o cliente PJ for uma exchange ou outra prestadora de ativos virtuais, veja também as particularidades em <a href="/blog/kyb-para-psav-exchanges">KYB para PSAV e exchanges</a>. No câmbio, o cadastro tem exigências próprias, tratadas em <a href="/blog/lei-14286-cambio-cadastro">Lei 14.286/2021 e cadastro de câmbio</a>.</p>

<h2>Como a kycert trata a cadeia societária</h2>
<p>A <a href="/produto/kyb">verificação PJ (KYB) da kycert</a> percorre a estrutura societária da empresa aos sócios até identificar o beneficiário final, desenha a árvore de controle e aplica screening a cada participante, pessoa física ou jurídica, com status individual por nó. O cadastro PJ é feito sem digitação manual, a partir dos documentos e das fontes consultadas, e o enquadramento de risco segue a regra definida pela sua instituição.</p>
<p>A cadeia inteira fica dentro do <a href="/produto/dossie-de-risco">Dossiê de Risco</a> do cliente PJ: visível, rastreável e exportável em PDF. Você comprova não só quem é o beneficiário final, mas o caminho que levou até ele. Dá para ver uma amostra anonimizada no <a href="/dossie-exemplo">dossiê de exemplo</a>. A <a href="/produto/monitoramento">reverificação periódica</a> repete o screening em ciclo e registra cada rodada, o que ajuda a responder à mudança de estrutura. Para o segmento, veja a <a href="/solucoes/bancos">solução para bancos e fintechs</a>.</p>
<p>Há limites que vale deixar claros. A qualidade do mapeamento depende das fontes disponíveis: estruturas no exterior, fundos pulverizados e arranjos de controle que não aparecem em registro público podem exigir documentação adicional do cliente e julgamento do analista. A plataforma organiza o percurso e o registro, mas a decisão continua com a sua equipe, e fica gravada com o nome de quem decidiu.</p>

<h2>Erros comuns no KYB de beneficiário final</h2>
<h3>Parar no primeiro nível</h3>
<p>Registrar a holding como "sócia" e seguir adiante é o erro mais frequente. A holding não é uma pessoa natural. Enquanto o percurso não chegar a alguém de carne e osso, a pergunta sobre o beneficiário final não foi respondida.</p>
<h3>Verificar só o topo</h3>
<p>Aplicar screening apenas no beneficiário final identificado, ignorando os intermediários, deixa passar riscos relevantes. Um sócio intermediário com sanção ou exposição política muda o perfil do cliente, mesmo que a pessoa no topo esteja limpa.</p>
<h3>Aceitar declaração sem conferência</h3>
<p>A declaração do cliente é parte do processo, mas não substitui a conferência com fontes. Quando a declaração diverge do que as bases mostram, a divergência é, ela mesma, um indício a ser tratado e registrado.</p>
<h3>Esquecer a atualização</h3>
<p>Estruturas mudam. O mapa feito no onboarding sem revisão posterior pode estar errado em seis meses. A periodicidade de reverificação deve ser maior para clientes de risco mais alto, em linha com a abordagem baseada em risco explicada em <a href="/blog/abordagem-baseada-em-risco-abr-exemplo-pratico">ABR na prática</a>.</p>
<h3>Não guardar o caminho</h3>
<p>Chegar ao UBO e não registrar como transforma o trabalho em opinião.</p>
`,
  faq: [
    {
      q: 'O que é beneficiário final (UBO)?',
      a: 'É a pessoa natural que, no fim da cadeia societária, controla ou se beneficia de uma empresa, direta ou indiretamente. Pode ser um sócio direto ou alguém escondido atrás de holdings e outras camadas de participação.',
    },
    {
      q: 'Qual é a base normativa para identificar o beneficiário final no Brasil?',
      a: 'A Lei 9.613/1998 e a Circular BCB 3.978/2020 estão entre as principais referências em PLD/FT. A Resolução BCB 277/2022 traz exigências de cadastro no câmbio, e a Instrução Normativa RFB 2.119/2022 trata do cadastro de CNPJ. Confira sempre a norma do seu segmento.',
    },
    {
      q: 'O que fazer quando a cadeia societária não chega a uma pessoa natural?',
      a: 'Registre o esforço feito, peça declaração e documentos ao cliente, enquadre-o como de risco maior e aplique diligência reforçada conforme a sua política. Tratar a opacidade como ausência de risco é o erro a evitar.',
    },
    {
      q: 'Preciso fazer screening de todos os sócios ou só do beneficiário final?',
      a: 'De todos os participantes relevantes da cadeia, pessoas físicas e jurídicas. Um intermediário com sanção ou exposição política altera o risco do cliente mesmo que o beneficiário final esteja sem apontamentos.',
    },
    {
      q: 'Como comprovar o beneficiário final numa fiscalização?',
      a: 'Apresentando a árvore societária completa, o status de cada participante com fonte e data, o critério usado para definir o beneficiário final e a decisão sobre o cliente com autor e data. O que importa é mostrar o caminho percorrido, não apenas o nome.',
    },
  ],
  related: [
    'kyb-para-psav-exchanges',
    'comprovar-pld-ft-fiscalizacao-bacen',
    'lei-14286-cambio-cadastro',
    'abertura-conta-fintech-kyb-escala',
  ],
  solutions: [
    { href: '/produto/kyb', label: 'Verificação PJ (KYB/UBO)' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/produto/monitoramento', label: 'Reverificação periódica' },
  ],
};

export default post;
