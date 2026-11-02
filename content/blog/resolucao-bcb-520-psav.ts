import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'resolucao-bcb-520-psav',
  title: 'Resolução BCB 520/2025: o que muda para PSAV e como comprovar a avaliação de risco',
  metaTitle: 'Resolução BCB 520 para PSAV: avaliação de risco',
  description:
    'O que a Lei 14.478 e as Resoluções BCB 519, 520 e 521 mudam para PSAVs e como comprovar a avaliação de risco do cliente com trilha auditável.',
  category: 'PSAV',
  eyebrow: 'PSAV / regulação',
  excerpt:
    'O que a Resolução BCB 520/2025 e as normas do marco de ativos virtuais exigem das PSAVs em avaliação de risco, e como registrar cada decisão como evidência auditável.',
  datePublished: '2026-05-12',
  dateModified: '2026-11-02',
  lead:
    'As prestadoras de serviços de ativos virtuais (PSAVs) deixaram de operar num vácuo regulatório. Com a Lei 14.478/2022 e as Resoluções BCB 519, 520 e 521/2025, o Banco Central passou a autorizar e supervisionar o setor, e a avaliação de risco do cliente virou obrigação que precisa ser comprovada. O prazo para pedir autorização ao BCB, 30/10/2026, já se encerrou. Veja o que a supervisão espera do seu <a href="/glossario/kyc">KYC</a> e como montar a evidência de cada decisão.',
  figure: {
    src: '/images/blog/matriz-risco-abr.svg',
    alt: 'Diagrama que parte da avaliação de risco da instituição, passa pelo enquadramento do cliente em níveis de risco e termina na diligência proporcional a cada nível.',
    caption: 'Da avaliação de risco ao nível de diligência: o caminho que a PSAV precisa conseguir demonstrar para cada cliente.',
    width: 1200,
    height: 480,
  },
  body: `
<h2>Contexto regulatório: do mercado informal à supervisão do BCB</h2>
<p>Durante anos, exchanges e outras empresas de ativos virtuais no Brasil conduziram o cadastro de clientes com regras próprias. Cada casa definia quais documentos pedir, quais listas consultar e quando recusar. Não havia um padrão exigido pelo supervisor, e o resultado era uma colcha de práticas muito diferentes entre si.</p>
<p>A <strong>Lei 14.478/2022</strong> criou o marco legal dos ativos virtuais e designou o Banco Central como autoridade de supervisão das prestadoras. As <strong>Resoluções BCB 519, 520 e 521/2025</strong> regulamentaram esse marco: tratam da autorização das prestadoras, das condições de funcionamento e das regras operacionais do setor. A vigência começou em 02/02/2026.</p>
<p>A mudança de fundo é de natureza. O que era uma decisão interna da empresa passou a ser um dever perante o regulador. Quem presta o serviço sem autorização, ou autorizado mas sem processo de prevenção documentado, fica exposto a sanções administrativas e a questionamentos sobre a continuidade da operação.</p>
<h3>A quem se aplica</h3>
<p>A regulação se aplica às pessoas jurídicas que prestam serviços de ativos virtuais, como corretagem, intermediação, custódia e administração. Quem já operava antes da vigência e quer seguir operando precisa estar autorizado. As regras de <a href="/glossario/pld-ft">PLD/FT</a> da <strong>Lei 9.613/1998</strong> também alcançam o setor, o que liga o marco de ativos virtuais ao mesmo dever de prevenção que bancos e corretoras de câmbio já cumprem.</p>

<h2>O que o prazo de 30/10/2026 significa hoje</h2>
<p>O prazo para o pedido de autorização das PSAVs que já estavam em operação <strong>encerrou em 30/10/2026</strong>. Hoje é 02/11/2026, ou seja, a janela fechou há poucos dias. Isso muda o tom da conversa: não se trata mais de "chegar a tempo", e sim de saber em que situação a empresa está.</p>
<p>Há três cenários possíveis, e cada um pede uma postura diferente:</p>
<ul>
<li><strong>Pedido protocolado no prazo.</strong> A prioridade é manter o processo de PLD/FT funcionando como descrito no pedido, porque o BCB analisa o que a empresa afirmou que faz. Divergência entre o prometido e o praticado é o pior cenário.</li>
<li><strong>Pedido não protocolado.</strong> A empresa precisa entender, com apoio jurídico, a situação atual perante o BCB e as consequências para a operação. As regras de transição e os efeitos de cada caso devem ser conferidos diretamente nas normas e nos comunicados do Banco Central.</li>
<li><strong>Empresa nova, ainda sem operação.</strong> O caminho é pedir autorização antes de começar, com o processo de risco e cadastro já desenhado.</li>
</ul>
<p>Em qualquer cenário, confira a situação atual e os desdobramentos do prazo no BCB. Este artigo não substitui a leitura das normas nem a orientação jurídica sobre o seu caso concreto.</p>

<h2>O que a norma exige em avaliação de risco e cadastro</h2>
<p>O núcleo do que importa para o time de compliance está no dever de conhecer o cliente e de proporcionar a diligência ao risco. Na prática, a supervisão espera encontrar na PSAV quatro blocos de controle.</p>
<h3>1. Avaliação interna de risco</h3>
<p>A empresa precisa identificar e medir o risco de ser usada para lavagem de dinheiro e financiamento do terrorismo, considerando seus clientes, produtos, canais e as jurisdições envolvidas. É a lógica da <a href="/glossario/abr">abordagem baseada em risco (ABR)</a>, que a <strong>Circular BCB 3.978/2020</strong> consolidou para as instituições autorizadas. Para o cliente cripto, fatores típicos são a origem dos recursos, o volume movimentado, o uso de carteiras externas e a exposição internacional.</p>
<h3>2. Identificação e qualificação do cliente</h3>
<p>Cadastro com identidade verificada, documento válido, dados de contato e, para pessoas jurídicas, a identificação de quem controla a empresa. No caso de PJ, isso inclui chegar ao <a href="/glossario/ubo">beneficiário final (UBO)</a>. O assunto é detalhado em <a href="/blog/kyb-para-psav-exchanges">KYB para PSAV e exchanges</a>.</p>
<h3>3. Screening de sanções e PEP</h3>
<p>Consulta a listas restritivas e verificação de <a href="/glossario/pep">pessoa exposta politicamente (PEP)</a>. O cliente cripto tem forte componente internacional, e um cadastro que passa com sanção ativa vira risco direto para a operação.</p>
<h3>4. Diligência proporcional e decisão registrada</h3>
<p>Clientes de risco maior pedem diligência reforçada, a lógica de <a href="/glossario/cdd-edd">CDD e EDD</a>. O ponto decisivo é que alguém decida, com base em critério, e que isso fique registrado com autor, data e justificativa.</p>
<table class="art-table">
<thead><tr><th>Dever</th><th>O que a supervisão espera ver</th></tr></thead>
<tbody>
<tr><td>Avaliação interna de risco</td><td>Documento com metodologia, fatores considerados e revisão periódica</td></tr>
<tr><td>Identificação do cliente</td><td>Documento capturado, dados validados, data da verificação</td></tr>
<tr><td>Beneficiário final (PJ)</td><td>Cadeia societária percorrida até a pessoa natural</td></tr>
<tr><td>Sanções e PEP</td><td>Consulta feita, fonte, data e resultado</td></tr>
<tr><td>Decisão</td><td>Aprovação, recusa ou diligência reforçada, com autor e justificativa</td></tr>
</tbody>
</table>

<h2>Onde os times de PSAV costumam falhar</h2>
<p>Na maioria dos casos, a avaliação até acontece. O que falta é o registro dela. A operação analisa o cliente, aprova ou recusa, mas não guarda como chegou ali: qual fonte consultou, qual critério aplicou, quem decidiu. Quando o regulador pergunta, a equipe reconstrói tudo na mão, e o que se reconstrói tarde não tem o mesmo valor probatório do que foi registrado na hora.</p>
<p>O segundo ponto de falha é o volume. Exchanges têm fluxo alto de onboarding e um cliente com pouca paciência para fricção. Avaliar o risco de cada um e ainda documentar a avaliação, manualmente, não escala. O terceiro é a mudança de perfil: o cliente aprovado em janeiro pode entrar em lista de sanções em setembro, e sem <a href="/produto/monitoramento">reverificação periódica</a> ninguém percebe.</p>
<div class="callout"><strong>Um limite importante</strong><p>Reverificar o perfil de risco do cliente não é o mesmo que monitorar transações. O <a href="/glossario/kyt">KYT</a> (monitoramento transacional) analisa o comportamento das operações em tempo real e é outra camada de controle. O perfil de risco do KYC é a base que alimenta esse monitoramento.</p></div>

<h2>Checklist prático para a PSAV</h2>
<ul class="checklist">
<li>Existe um documento de avaliação interna de risco, com metodologia, data e responsável.</li>
<li>Cada cliente PF tem documento capturado e validado, com data e hora da verificação.</li>
<li>Cada cliente PJ tem a cadeia societária mapeada até o beneficiário final, com status por participante.</li>
<li>Sanções e PEP são consultados no onboarding e reconsultados em ciclo definido.</li>
<li>O enquadramento de risco segue a regra da própria instituição e fica gravado no cadastro.</li>
<li>Clientes de risco alto têm diligência reforçada registrada, não apenas aprovada.</li>
<li>Toda aprovação ou recusa tem autor, data e justificativa.</li>
<li>Há periodicidade de reverificação por perfil de risco, e as reverificações ficam registradas.</li>
<li>O processo descrito no pedido de autorização é o mesmo que a equipe pratica.</li>
<li>Qualquer cadastro pode ser exportado em documento único, pronto para entregar ao supervisor.</li>
</ul>

<h2>Como evidenciar a avaliação de risco na fiscalização</h2>
<p>Pense no cenário concreto: o supervisor escolhe um cliente e pergunta como a PSAV chegou à decisão de aceitá-lo. A resposta precisa caber num dossiê, não numa reunião de reconstrução. Para cada cliente, o dossiê deve conter:</p>
<ul>
<li><strong>Identidade verificada:</strong> o documento capturado, os dados extraídos e a data da verificação.</li>
<li><strong>Fontes consultadas:</strong> quais listas e bases foram consultadas, quando, e com que resultado.</li>
<li><strong>Enquadramento de risco:</strong> o nível atribuído e a regra que o produziu.</li>
<li><strong>Decisão:</strong> quem aprovou ou recusou, quando, e com qual justificativa.</li>
<li><strong>Histórico:</strong> as reverificações posteriores e qualquer mudança de perfil.</li>
</ul>
<p>É para isso que existe o <a href="/produto/dossie-de-risco">Dossiê de Risco da kycert</a>: o veredito fica no topo, os apontamentos aparecem com a fonte que os gerou, e a decisão é registrada com autor, data e justificativa, exportável em PDF. Você pode ver como isso fica na prática no <a href="/dossie-exemplo">dossiê de exemplo</a>. A lógica geral de montar essa resposta está em <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização do BACEN</a>.</p>
<h3>Como a kycert apoia o processo da PSAV</h3>
<p>A plataforma cobre a parte de cadastro e risco do cliente: convite white-label, captura e <a href="/produto/ocr">OCR de documentos</a>, <a href="/produto/kyc">KYC de pessoa física</a>, <a href="/produto/kyb">KYB de pessoa jurídica</a> com cadeia societária até o beneficiário final, screening de sanções e PEP, enquadramento de risco pela regra definida por você e decisão registrada. As reverificações periódicas mantêm a base atualizada. A kycert não é uma ferramenta de monitoramento transacional: ela fornece o perfil de risco do KYC que alimenta esse monitoramento. Para o contexto do segmento, veja a página de <a href="/solucoes/psav">solução para PSAV</a>.</p>

<h2>Erros comuns de PSAVs sob o novo regime</h2>
<h3>Tratar o pedido de autorização como fim do trabalho</h3>
<p>A autorização não encerra o dever de prevenção, ela o inaugura. O BCB analisa o processo que a empresa descreveu e, depois, supervisiona se ele é praticado. Descrever um fluxo robusto no papel e operar outro é o caminho mais curto para um apontamento.</p>
<h3>Guardar o relatório da consulta e achar que basta</h3>
<p>O resultado de uma consulta é uma fotografia. Ele diz que, naquele dia, o cliente constava ou não em uma lista. Não diz o que a empresa fez com a informação. Sem a decisão registrada, falta a parte que prova o cumprimento do dever.</p>
<h3>Ignorar o beneficiário final em clientes PJ</h3>
<p>Empresas de trading, tesourarias e fundos que operam em cripto frequentemente têm estruturas com holdings. Parar no primeiro nível de sócios deixa um nó sem verificação. O tema está em <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final (UBO) e KYB</a>.</p>
<h3>Aplicar o mesmo tratamento a todos os clientes</h3>
<p>A abordagem baseada em risco existe para evitar isso. Tratar igual o investidor pessoa física de baixo volume e uma PJ estrangeira com estrutura complexa gasta esforço no lugar errado. Veja um exemplo de enquadramento em <a href="/blog/abordagem-baseada-em-risco-abr-exemplo-pratico">ABR na prática</a>.</p>
<h3>Deixar a conferência da situação para depois</h3>
<p>Com o prazo de 30/10/2026 encerrado, o erro seria seguir sem saber exatamente em que pé a empresa está perante o BCB. Confirme a situação do pedido, os comunicados mais recentes e as obrigações aplicáveis ao seu caso. Para preparar a casa antes de uma visita do supervisor, use também o <a href="/blog/checklist-prontidao-fiscalizacao">checklist de prontidão para fiscalização</a>.</p>

<h2>Próximos passos</h2>
<p>Se a sua PSAV já tem o pedido em análise, o melhor investimento agora é garantir que a prática diária corresponda ao que foi descrito, com evidência por cliente. Se ainda está definindo o processo, comece pelo enquadramento de risco e pelo registro de cada decisão. Sobre custos, veja a página de <a href="/precos">preços</a>.</p>
`,
  faq: [
    {
      q: 'Qual é o prazo para a PSAV pedir autorização ao Banco Central?',
      a: 'O prazo para o pedido de autorização das PSAVs que já operavam encerrou em 30/10/2026. Como hoje é 02/11/2026, a janela fechou. Quem não protocolou o pedido deve conferir a situação atual e as consequências diretamente com o BCB e com assessoria jurídica.',
    },
    {
      q: 'O que a Resolução BCB 520/2025 exige da PSAV em termos de PLD/FT?',
      a: 'Junto com as Resoluções 519 e 521 e a Lei 14.478/2022, ela integra o marco de supervisão das PSAVs. Na prática, a prestadora precisa conhecer o cliente, avaliar o risco de forma proporcional e manter registro verificável do que fez, em linha com a Lei 9.613/1998 e com a lógica da Circular BCB 3.978/2020.',
    },
    {
      q: 'Como comprovar a avaliação de risco de um cliente de exchange?',
      a: 'Guardando, por cliente, a identidade verificada, as fontes consultadas com data, o enquadramento de risco atribuído e a decisão com autor, data e justificativa. Esse conjunto, reunido em um dossiê exportável, é o que responde à pergunta do supervisor.',
    },
    {
      q: 'A kycert faz monitoramento de transações de PSAV?',
      a: 'Não. A kycert cuida de cadastro, KYC e KYB, screening de sanções e PEP, enquadramento de risco, decisão registrada e reverificação periódica. O monitoramento transacional (KYT) é outra camada, e o perfil de risco gerado no KYC alimenta esse monitoramento.',
    },
    {
      q: 'Preciso mapear o beneficiário final de clientes PJ em cripto?',
      a: 'Sim, como parte do conhecimento do cliente pessoa jurídica. É preciso percorrer a cadeia societária até a pessoa natural que controla a empresa e verificar cada participante, registrando o caminho percorrido.',
    },
  ],
  related: [
    'kyb-para-psav-exchanges',
    'comprovar-pld-ft-fiscalizacao-bacen',
    'checklist-prontidao-fiscalizacao',
    'abordagem-baseada-em-risco-abr-exemplo-pratico',
  ],
  solutions: [
    { href: '/solucoes/psav', label: 'KYC para PSAV e exchanges' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/produto/kyb', label: 'Verificação PJ (KYB/UBO)' },
  ],
};

export default post;
