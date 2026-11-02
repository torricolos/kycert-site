import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'cooperativas-credito-3978-associados',
  title: 'Cooperativas de crédito: o PLD/FT do quadro de associados na Circular 3.978',
  metaTitle: 'Cooperativas de crédito: KYC de associados e Circular 3.978',
  description:
    'Onboarding de cooperativas de crédito: como verificar, qualificar e reverificar o quadro de associados conforme a Circular BCB 3.978/2020.',
  category: 'Segmentos',
  eyebrow: 'Cooperativas de crédito',
  excerpt:
    'Cooperativas de crédito respondem aos mesmos deveres de PLD/FT das demais instituições do SFN. Veja como verificar e reverificar o quadro de associados com trilha auditável.',
  datePublished: '2026-06-22',
  dateModified: '2026-11-02',
  lead: 'Cooperativa de crédito é instituição financeira. Quem entra como associado abre, para efeitos de PLD/FT, um relacionamento financeiro, e a <strong>Circular BCB 3.978/2020</strong> não faz distinção entre cooperativa e banco no que importa: identificar, qualificar, classificar o risco e registrar. O desafio do onboarding de cooperativas de crédito é fazer isso com um quadro de associados grande, muitas vezes distribuído em agências pequenas, sem perder a proximidade que é a razão de existir do modelo cooperativo. Este texto mostra como estruturar o processo e a prova.',
  figure: {
    src: '/images/blog/fluxo-onboarding-pld-ft.svg',
    alt: 'Fluxo de onboarding de PLD/FT em seis etapas, da coleta de dados do associado até a decisão registrada e a reverificação periódica.',
    caption: 'O onboarding de PLD/FT aplicado à admissão do associado.',
    width: 1200,
    height: 500,
  },
  body: `
<h2>Contexto regulatório: cooperativa responde como instituição financeira</h2>
<p>As cooperativas de crédito integram o Sistema Financeiro Nacional e são autorizadas e supervisionadas pelo Banco Central. A Circular BCB 3.978/2020 dispõe sobre a política, os procedimentos e os controles internos de <a href="/glossario/pld-ft">PLD/FT</a> que as instituições autorizadas devem adotar, e cooperativas estão dentro desse conjunto. Não há versão simplificada do dever só porque o cliente é também dono da instituição.</p>
<p>O que muda é a proporcionalidade. A norma admite que a estrutura de controles seja compatível com o porte, o perfil de risco e a complexidade das operações. Uma cooperativa singular pequena pode ter uma estrutura enxuta. O que ela não pode é ter um processo que não deixe rastro. Quando a fiscalização do BCB chega, a régua da prova é a mesma.</p>
<p>Duas particularidades do modelo cooperativo costumam gerar dúvida:</p>
<ul>
<li><strong>O associado é cliente e membro ao mesmo tempo.</strong> A condição de associado, com voto e capital na cooperativa, não substitui a identificação e a avaliação de risco. Conhecer o cliente continua sendo necessário.</li>
<li><strong>O vínculo comum não dispensa diligência.</strong> A cooperativa de profissionais, de empresários ou de produtores tem um critério de admissão, e esse critério ajuda a validar o perfil, mas não elimina a checagem de sanções, de <a href="/glossario/pep">PEP</a> e de situação cadastral.</li>
</ul>

<h2>O que a Circular 3.978 exige do cadastro de associados</h2>
<p>Falamos aqui do que a norma trata, pelo tema, sem numerar artigos. O desenho de controles que a Circular 3.978 espera tem os seguintes blocos, todos aplicáveis ao quadro de associados:</p>
<ul>
<li><strong>Política e governança:</strong> política formal, aprovada pela administração, e diretor responsável pela PLD/FT perante o BCB.</li>
<li><strong>Avaliação interna de risco:</strong> identificação e mensuração do risco de uso da cooperativa para lavagem, considerando perfil dos associados, produtos, canais e áreas geográficas. É a base da <a href="/glossario/abr">abordagem baseada em risco</a>.</li>
<li><strong>Procedimentos de conheça seu cliente:</strong> coleta, verificação e validação das informações, qualificação e classificação de risco do associado.</li>
<li><strong>Beneficiário final:</strong> para associado pessoa jurídica, identificar a pessoa natural que controla ou se beneficia, conceito detalhado no glossário de <a href="/glossario/ubo">UBO</a>.</li>
<li><strong>Monitoramento e seleção de operações:</strong> acompanhar movimentações e selecionar as atípicas para análise.</li>
<li><strong>Comunicação ao COAF:</strong> comunicar operações com indícios de lavagem, conforme a Lei 9.613/1998.</li>
<li><strong>Manutenção de informações e registros:</strong> guardar dados, documentos e decisões pelo prazo previsto na norma.</li>
<li><strong>Avaliação de efetividade:</strong> testar periodicamente se os controles funcionam.</li>
</ul>
<p>O que aproxima todos esses blocos é a exigência de que o cadastro seja <em>contínuo</em>. A Circular não trata a admissão como evento isolado. O cadastro precisa ser mantido atualizado, e a classificação de risco revista quando o cenário muda.</p>

<h2>Quadro de associados: admitir, qualificar e classificar</h2>
<p>A admissão de associados costuma envolver mais gente do que um onboarding bancário: gerente de relacionamento, assembleia, secretaria. Isso é bom para o vínculo, mas dispersa o registro. O primeiro passo é padronizar o que entra no processo, independentemente de quem atende.</p>
<h3>Associado pessoa física</h3>
<p>O <a href="/produto/kyc">KYC de pessoa física</a> deve capturar documento oficial (com <a href="/produto/ocr">OCR</a> para reduzir erro de digitação), confirmar a situação cadastral do CPF, rodar o screening de sanções e identificar PEP e pessoas próximas. Dados sobre renda, patrimônio e atividade servem para calibrar o risco: se a movimentação futura destoar do declarado, o cadastro é a primeira referência da análise.</p>
<h3>Associado pessoa jurídica</h3>
<p>Em cooperativas que admitem empresas (produtores rurais organizados em pessoa jurídica, pequenas e médias empresas, entidades), o associado PJ exige <a href="/produto/kyb">KYB com cadeia societária</a>. O quadro de sócios precisa ser recuperado, e cada nó da cadeia passa por screening até a pessoa natural. Estruturas com holding familiar são comuns no agronegócio e exigem atenção específica: o beneficiário final não é quem aparece no primeiro nível. O texto sobre <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final e KYB</a> detalha como mapear a cadeia.</p>
<h3>Classificação de risco</h3>
<p>Com os dados verificados, o associado é enquadrado em faixas de risco conforme a regra da própria cooperativa. A regra deve estar escrita: quais fatores elevam o risco (PEP, atividade de risco, jurisdição, estrutura opaca, volume incompatível) e qual diligência cada faixa dispara. A <a href="/glossario/cdd-edd">diferença entre CDD e EDD</a> aqui é operacional: associado de risco baixo segue o fluxo padrão, associado de risco alto exige documentos adicionais e aprovação de alçada superior.</p>

<table class="art-table">
<thead><tr><th>Momento</th><th>O que fazer</th><th>O que registrar</th></tr></thead>
<tbody>
<tr><td>Proposta de admissão</td><td>Coleta de dados e documentos, convite digital ou presencial</td><td>Documentos, origem e data da captura</td></tr>
<tr><td>Verificação</td><td>Situação cadastral, sanções, PEP, cadeia societária (PJ)</td><td>Fonte, resultado e data de cada consulta</td></tr>
<tr><td>Enquadramento</td><td>Classificação de risco pela regra da cooperativa</td><td>Faixa de risco e fatores considerados</td></tr>
<tr><td>Decisão</td><td>Aprovar, aprovar com restrição ou recusar</td><td>Autor, data e justificativa</td></tr>
<tr><td>Relacionamento</td><td>Reverificação periódica e revisão de risco</td><td>Cada ciclo, com resultado</td></tr>
</tbody>
</table>

<h2>Monitorar não é só admitir: a reverificação do cadastro</h2>
<p>Em muitas cooperativas, o cadastro do associado é preenchido na adesão e só reaparece quando há um problema. Esse é o ponto em que a fiscalização costuma encontrar falha. O associado de 2016 pode hoje ser PEP, pode ter aparecido em lista de sanções ou ter mudado de atividade, e o cadastro continua dizendo o que dizia na adesão.</p>
<p>A reverificação periódica resolve isso com um calendário por perfil de risco. Associados de risco alto entram em ciclos curtos, de risco baixo em ciclos mais longos. O ponto crítico é o controle do vencimento: em planilha, o prazo passa sem ninguém notar, e com milhares de associados o controle manual não escala. A <a href="/produto/monitoramento">reverificação e o monitoramento de cadastro</a> cuidam do agendamento, refazem o screening no prazo e registram cada ciclo na ficha do associado.</p>
<div class="callout"><strong>Cadastro não é transação</strong><p>Reverificar o cadastro é diferente de monitorar as movimentações do associado. As duas coisas são exigidas e se complementam: o monitoramento transacional (<a href="/glossario/kyt">KYT</a>) usa o perfil de risco do cadastro como referência. A kycert fornece esse perfil de risco, mas não é um motor de monitoramento transacional em tempo real.</p></div>

<h2>Checklist prático para o onboarding de cooperativas de crédito</h2>
<ul class="checklist">
<li>Política de PLD/FT aprovada e diretor responsável designado, com registro formal.</li>
<li>Avaliação interna de risco que considere o perfil do quadro de associados, os produtos e os canais.</li>
<li>Regra de enquadramento de risco por escrito, com os fatores e as faixas.</li>
<li>Formulário e fluxo de admissão padronizados, iguais para todas as agências e postos de atendimento.</li>
<li>Captura de documento com conferência e registro de origem e data.</li>
<li>Screening de sanções e PEP na adesão, com resultado e fonte guardados.</li>
<li>KYB com beneficiário final para associado pessoa jurídica, inclusive holdings.</li>
<li>Diligência reforçada definida para risco alto, com aprovação de alçada superior.</li>
<li>Calendário de reverificação por faixa de risco, com vencimento controlado fora de planilha.</li>
<li>Procedimento de comunicação ao COAF e registro da decisão de comunicar ou não.</li>
<li>Treinamento de gerentes e atendentes, com lista de presença e conteúdo.</li>
<li>Teste de efetividade dos controles, com relatório e plano de ação.</li>
</ul>

<h2>Como evidenciar na fiscalização do Banco Central</h2>
<p>Quando o BCB inspeciona uma cooperativa, o roteiro costuma envolver amostra de associados, solicitação do histórico de cada um e verificação de que a política escrita é a política praticada. Dois desvios aparecem com frequência: a política diz uma coisa e as agências fazem outra, e o registro existe mas é impossível reconstruir quem decidiu o quê.</p>
<p>A resposta segura é um dossiê por associado, que reúna dados e documentos, fontes consultadas, resultado das consultas, enquadramento, decisão com autor e data e histórico de reverificações. O <a href="/produto/dossie-de-risco">Dossiê de Risco</a> organiza essas informações em uma tela e exporta em PDF, e o <a href="/dossie-exemplo">dossiê de exemplo</a> mostra o formato. Para a lógica geral de preparação, leia <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização</a> e o <a href="/blog/checklist-prontidao-fiscalizacao">checklist de prontidão</a>.</p>
<p>Cooperativas que atuam em sistema (singulares, centrais e confederações) devem ainda definir quais controles são da singular e quais são centralizados, e documentar essa divisão. Quando a central oferece estrutura compartilhada de PLD/FT, o contrato e a evidência de quem fez cada verificação precisam ser claros, pois a responsabilidade regulatória não migra automaticamente.</p>

<h2>Erros comuns no quadro de associados</h2>
<ul>
<li><strong>Admissão sem verificação.</strong> Confiar no vínculo comum e pular a checagem de sanções e PEP.</li>
<li><strong>Cada agência com seu formulário.</strong> Dados que não se comparam e registros que não se consolidam.</li>
<li><strong>Cadastro de 2015 ainda ativo.</strong> Nenhuma reverificação desde a adesão.</li>
<li><strong>Associado PJ tratado como CNPJ.</strong> Beneficiário final nunca identificado, sobretudo em holdings familiares.</li>
<li><strong>Planilha de vencimentos.</strong> O controle que depende de memória não resiste ao crescimento do quadro.</li>
<li><strong>Decisão sem autor.</strong> Aprovação em reunião sem ata ou registro individual.</li>
<li><strong>Risco único para todos.</strong> Classificar todo o quadro na mesma faixa por comodidade.</li>
</ul>

<h2>Onde a kycert entra</h2>
<p>A kycert estrutura a parte repetível do processo: convite white-label para o associado enviar dados e documentos, captura com OCR, KYC de pessoa física, KYB com cadeia societária até o beneficiário final, screening de sanções e PEP, enquadramento de risco pela regra da cooperativa, decisão registrada com autor e data e reverificação periódica com vencimento controlado. Tudo vai para o dossiê exportável. Quem quer integrar ao sistema de gestão da cooperativa pode usar a <a href="/produto/api">API e os webhooks</a>. A visão do segmento está na página de <a href="/solucoes/cooperativas">soluções para cooperativas de crédito</a>, e a lógica de valores em <a href="/precos">preços</a>.</p>
`,
  faq: [
    {
      q: 'A Circular BCB 3.978 vale para cooperativas de crédito?',
      a: 'Sim. A Circular BCB 3.978/2020 se aplica às instituições autorizadas a funcionar pelo Banco Central, o que inclui as cooperativas de crédito. A estrutura de controles pode ser proporcional ao porte e ao risco, mas os deveres de identificar, qualificar, classificar o risco e registrar são os mesmos.',
    },
    {
      q: 'O associado precisa passar por KYC mesmo sendo membro da cooperativa?',
      a: 'Sim. A condição de associado não substitui a identificação e a avaliação de risco. O vínculo ajuda a validar o perfil, mas a checagem de situação cadastral, sanções e PEP continua necessária, e o resultado precisa ficar registrado.',
    },
    {
      q: 'Com que frequência devo reverificar o cadastro dos associados?',
      a: 'A periodicidade deve seguir a abordagem baseada em risco definida na política da cooperativa. Em geral, risco alto exige ciclos mais curtos e risco baixo ciclos mais longos. O essencial é ter o prazo definido por escrito e o vencimento de cada cadastro controlado.',
    },
    {
      q: 'Como tratar associado pessoa jurídica com holding?',
      a: 'Recupere o quadro societário e siga as participações por todos os níveis, inclusive holdings, até a pessoa natural que controla ou se beneficia. Cada entidade da cadeia deve passar por screening, e a cadeia mapeada deve ficar guardada no dossiê.',
    },
    {
      q: 'Cooperativa singular filiada a uma central pode terceirizar a PLD/FT?',
      a: 'Pode compartilhar estrutura e serviços, mas a responsabilidade regulatória da instituição autorizada permanece. O contrato deve dizer quem executa cada controle, e as evidências precisam estar acessíveis à cooperativa para o caso de fiscalização.',
    },
  ],
  related: [
    'comprovar-pld-ft-fiscalizacao-bacen',
    'checklist-prontidao-fiscalizacao',
    'beneficiario-final-ubo-kyb',
    'abertura-conta-fintech-kyb-escala',
  ],
  solutions: [
    { href: '/solucoes/cooperativas', label: 'kycert para cooperativas de crédito' },
    { href: '/produto/monitoramento', label: 'Reverificação e monitoramento' },
    { href: '/produto/kyc', label: 'Verificação PF (KYC)' },
  ],
};

export default post;
