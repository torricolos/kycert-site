import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'lei-14286-cambio-cadastro',
  title: 'Câmbio: o que a Lei 14.286/2021 e a Res. BCB 277/2022 exigem no cadastro do cliente',
  metaTitle: 'Lei 14.286 e Res. BCB 277: cadastro no câmbio',
  description:
    'O que a Lei 14.286/2021, a Res. BCB 277/2022 e a Circular 3.978 pedem no cadastro do cliente de uma corretora de câmbio, e como comprovar cada decisão.',
  category: 'Câmbio',
  eyebrow: 'Câmbio / regulação',
  excerpt:
    'O marco cambial e a Circular 3.978 se encontram no cadastro do cliente. Veja o que a corretora de câmbio precisa conhecer, registrar e renovar, e como evidenciar.',
  datePublished: '2026-06-09',
  dateModified: '2026-11-02',
  lead: 'O marco cambial reorganizou as regras do mercado de câmbio brasileiro, mas o dever de conhecer o cliente continua vindo do conjunto formado pela Lei 14.286/2021, pela Resolução BCB 277/2022 e pela Circular 3.978/2020. Para a <strong>corretora de câmbio</strong>, é no cadastro que as três normas se encontram: quem é o cliente, quem o controla, qual o risco e quem decidiu. Este artigo mostra o que cada norma cobra nessa etapa, onde a operação costuma travar e que evidência precisa existir quando o Banco Central pedir.',
  figure: {
    src: '/images/blog/fluxo-onboarding-pld-ft.svg',
    alt: 'Fluxo de onboarding de PLD/FT em seis etapas, do convite ao cliente até o registro da decisão e a reverificação periódica.',
    caption: 'O cadastro do cliente de câmbio como uma trilha de seis etapas, do convite à reverificação.',
    width: 1200,
    height: 500,
  },
  body: `
<h2>Contexto regulatório: o novo marco cambial e o dever de conhecer o cliente</h2>
<p>A Lei 14.286/2021 é o marco legal do mercado de câmbio brasileiro. Ela consolidou e modernizou o regime que estava espalhado em normas antigas e deu ao Banco Central a competência de regulamentar as operações. A Resolução BCB 277/2022 detalhou essa regulamentação: define quais operações existem, quem pode realizá-las e como se dá o relacionamento da instituição autorizada com o cliente.</p>
<p>O marco cambial trata de câmbio, não de lavagem de dinheiro. A prevenção à lavagem e ao financiamento do terrorismo segue a <a href="/glossario/pld-ft">disciplina de PLD/FT</a> da Lei 9.613/1998 e, no Sistema Financeiro Nacional, a Circular BCB 3.978/2020. Na prática, uma <strong>corretora de câmbio</strong> responde às duas camadas ao mesmo tempo. Ela precisa operar dentro das regras cambiais e, para cada cliente, cumprir os procedimentos de identificação, qualificação e classificação de risco da Circular 3.978.</p>
<p>A regra vale para o cliente pessoa física (turismo, remessas, estudantes) e, com mais peso de risco, para a pessoa jurídica (importadores, exportadores, prestadores de serviço internacionais). Quem atua em corretoras e DTVMs encontra o recorte do setor na página de <a href="/solucoes/cambio">solução para câmbio</a>.</p>

<h2>O que a norma exige no cadastro do cliente de câmbio</h2>
<p>As normas cambiais e a Circular 3.978 convergem em quatro deveres que se traduzem em cadastro. Cada um tem um efeito concreto na rotina da operação.</p>
<h3>Identificar e qualificar</h3>
<p>A instituição identifica o cliente com documentos válidos e qualifica-o, isto é, reúne informações compatíveis com a atividade, a capacidade financeira e a natureza das operações pretendidas. É o <a href="/glossario/kyc">KYC</a>. Cadastro não é formalidade de abertura: é a base da avaliação de risco que será usada em cada operação.</p>
<h3>Chegar ao beneficiário final</h3>
<p>Quando o cliente é pessoa jurídica, a Circular 3.978 exige procedimentos para identificar a cadeia de participação até a pessoa natural que, em última instância, controla a empresa ou se beneficia dela. É o <a href="/glossario/ubo">beneficiário final</a> e o núcleo do <a href="/glossario/kyb">KYB</a>. Em câmbio isso importa porque empresas de fachada e cadeias com várias camadas e jurisdições são uma tipologia clássica de risco. O passo a passo está em <a href="/blog/beneficiario-final-ubo-kyb">como mapear a cadeia societária até o UBO</a>.</p>
<h3>Classificar o risco e calibrar a diligência</h3>
<p>Com a <a href="/glossario/abr">abordagem baseada em risco</a>, o cliente é enquadrado conforme a avaliação interna da instituição, e a profundidade da diligência acompanha esse enquadramento. Clientes de maior risco, como <a href="/glossario/pep">pessoas expostas politicamente</a> e empresas com estrutura complexa, pedem diligência reforçada (<a href="/glossario/cdd-edd">EDD</a>). O princípio é simples: o mesmo cadastro para todos seria insuficiente para quem é arriscado e excessivo para quem não é.</p>
<h3>Manter o cadastro atualizado</h3>
<p>A obrigação não termina na aprovação. A Circular 3.978 trata da atualização cadastral e do acompanhamento da relação de negócio ao longo do tempo, com periodicidade definida pela instituição conforme o risco. Um cliente que passa a constar em lista de sanções depois de aprovado precisa ser percebido.</p>
<div class="callout">
<strong>Atenção ao que a lei não diz</strong>
<p>A Lei 14.286/2021 e a Resolução BCB 277/2022 não substituem a Circular 3.978. Quando uma regra cambial parecer silenciar sobre o cadastro, a resposta costuma estar na norma de PLD/FT. Confirme sempre o texto vigente e o enquadramento do seu tipo de instituição antes de fixar o procedimento.</p>
</div>

<h2>Checklist prático do cadastro de cliente de câmbio</h2>
<p>Use a lista como roteiro de conferência do fluxo de cadastro da sua corretora. Cada item deve produzir um registro.</p>
<ul class="checklist">
<li>Documento de identidade capturado, legível e conferido, com os dados extraídos vinculados ao arquivo original.</li>
<li>CPF ou CNPJ validado em fonte oficial, com data da consulta registrada.</li>
<li>Para PJ, quadro societário e cadeia de participação mapeados até o beneficiário final, com a fonte de cada nível.</li>
<li>Atividade econômica, finalidade da operação de câmbio e origem dos recursos declaradas e compatíveis entre si.</li>
<li>Screening de listas de sanções e de PEP no cliente, nos sócios e no beneficiário final, com lista, data e resultado gravados.</li>
<li>Apontamentos tratados: homônimos descartados com justificativa, correspondências confirmadas com decisão registrada.</li>
<li>Enquadramento de risco com os fatores que o sustentam, em linha com a avaliação interna da instituição.</li>
<li>Diligência reforçada aplicada e registrada para clientes de alto risco, com aprovação no nível hierárquico da política.</li>
<li>Decisão de aprovar, recusar ou condicionar com autor, data e justificativa.</li>
<li>Periodicidade de reverificação definida por perfil e controle de vencimento do cadastro.</li>
<li>Histórico exportável por cliente, para responder a um pedido do regulador sem reconstrução.</li>
</ul>

<h2>Onde as corretoras de câmbio travam</h2>
<p>Os pontos de atrito costumam ser os mesmos, e quase todos nascem do trabalho manual.</p>
<table class="art-table">
<thead><tr><th>Ponto de atrito</th><th>Consequência</th><th>O que resolve</th></tr></thead>
<tbody>
<tr><td>Cadastro de PJ montado fonte por fonte</td><td>Dias por cliente e cadeia incompleta</td><td>Consulta única da estrutura societária até o UBO</td></tr>
<tr><td>Documentos por e-mail e mensagem</td><td>Cliente desiste no meio; versão errada do arquivo</td><td>Convite guiado no celular, com captura e leitura por OCR</td></tr>
<tr><td>Evidência espalhada</td><td>Reconstrução a cada fiscalização</td><td>Dossiê único por cliente</td></tr>
<tr><td>Reverificação esquecida</td><td>Cliente opera com cadastro vencido</td><td>Controle de vencimento e re-screening agendado</td></tr>
</tbody>
</table>
<p>O segundo custo do cadastro manual é menos visível: o cliente que desiste. Em câmbio, a decisão de operar costuma ser urgente (viagem, pagamento a fornecedor), e uma jornada que exige idas e vindas empurra o cliente para a concorrência. O compliance não deve ser o motivo da perda, e a automação existe para que o rigor e a velocidade andem juntos.</p>

<h2>Como a kycert apoia o cadastro de clientes de câmbio</h2>
<p>A kycert organiza o cadastro e a verificação como uma trilha única. O convite sai com a marca da corretora e é respondido no celular do cliente. A <a href="/produto/ocr">captura e o OCR de documentos</a> eliminam a digitação. A <a href="/produto/kyc">verificação de pessoa física</a> consulta fontes, aplica o screening de sanções e PEP e enquadra o risco pela regra definida pela própria corretora. A <a href="/produto/kyb">verificação de pessoa jurídica</a> recupera a cadeia societária até o beneficiário final e verifica sócios e controladora. Por fim, o <a href="/produto/monitoramento">monitoramento contínuo</a> agenda a reverificação e repete o screening a cada ciclo.</p>
<p>Duas ressalvas de honestidade. Primeiro, a kycert não é um motor de monitoramento transacional (<a href="/glossario/kyt">KYT</a>) em tempo real: ela fornece o perfil de risco do KYC que alimenta o monitoramento de operações da corretora. Segundo, quem define o enquadramento é a regra da própria instituição; a plataforma aplica e registra, não substitui o julgamento do compliance. Para ver a estrutura de preços, consulte a página de <a href="/precos">planos</a>.</p>

<h2>Como evidenciar na fiscalização</h2>
<p>Num pedido de informações do Banco Central sobre um cliente de câmbio, a pergunta de fundo é sempre a mesma: como a instituição decidiu aceitar e manter esse cliente? A evidência que responde combina cinco elementos, todos com autor, data e fonte.</p>
<ol>
<li><strong>Identidade:</strong> documento capturado, dados extraídos e conferência.</li>
<li><strong>Estrutura:</strong> para PJ, a cadeia societária e o beneficiário final, com a fonte.</li>
<li><strong>Verificações:</strong> quais listas foram consultadas, quando, e o resultado, incluindo o percentual de correspondência dos apontamentos.</li>
<li><strong>Risco:</strong> o enquadramento e os fatores que o sustentam.</li>
<li><strong>Decisão e continuidade:</strong> quem aprovou, quando, e o histórico de reverificações.</li>
</ol>
<p>Todos esses elementos aparecem no <a href="/produto/dossie-de-risco">Dossiê de Risco</a>, exportável em PDF por cliente. Há um modelo anonimizado em <a href="/dossie-exemplo">dossiê de exemplo</a>. Para a visão geral de como se preparar, veja o <a href="/blog/checklist-prontidao-fiscalizacao">checklist de prontidão para fiscalização de PLD/FT</a> e o artigo sobre <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização do BACEN</a>.</p>

<h2>Erros comuns no cadastro de câmbio</h2>
<h3>Tratar o cadastro como etapa única</h3>
<p>Aprovar e esquecer. Sem reverificação por perfil, o cliente que era baixo risco no cadastro pode ter mudado e a base ativa envelhece em silêncio.</p>
<h3>Parar no primeiro nível societário</h3>
<p>Registrar apenas os sócios diretos deixa a cadeia incompleta. Quando o sócio é outra empresa, o mapeamento precisa continuar até a pessoa natural.</p>
<h3>Declaração sem confronto</h3>
<p>A finalidade e a origem dos recursos informadas pelo cliente precisam ser confrontadas com o que as verificações mostram. Declaração sem checagem não sustenta o enquadramento de risco.</p>
<h3>Decisão sem justificativa</h3>
<p>Um "aprovado" sem motivo é fraco numa fiscalização. A justificativa deve explicar por que os apontamentos foram descartados ou aceitos.</p>
<h3>Ignorar o limite entre cadastro e monitoramento</h3>
<p>O cadastro define o perfil esperado; o monitoramento compara o que o cliente faz com esse perfil. As duas camadas se complementam, e a ligação entre elas deve estar documentada. O artigo sobre <a href="/blog/kyt-monitoramento-transacional-pix">monitoramento transacional</a> detalha esse ciclo.</p>
`,
  faq: [
    {
      q: 'A Lei 14.286/2021 muda as regras de PLD/FT para corretoras de câmbio?',
      a: 'A lei é o marco do mercado de câmbio e não trata de PLD/FT. Os deveres de identificação, qualificação, classificação de risco e comunicação ao COAF seguem a Lei 9.613/1998 e a Circular BCB 3.978/2020. A corretora de câmbio responde às duas camadas: regras cambiais e regras de prevenção à lavagem.',
    },
    {
      q: 'O que a Resolução BCB 277/2022 regula?',
      a: 'A Resolução BCB 277/2022 regulamenta o mercado de câmbio na linha do marco legal: tipos de operação, instituições autorizadas e o relacionamento com o cliente. Para o cadastro e a verificação do cliente, ela se combina com a Circular 3.978. Confirme no texto vigente o que se aplica ao seu tipo de instituição.',
    },
    {
      q: 'Preciso identificar o beneficiário final de todo cliente de câmbio pessoa jurídica?',
      a: 'A Circular 3.978 exige procedimentos para identificar o beneficiário final de clientes pessoa jurídica, com graus de profundidade definidos pela política e pelo risco da instituição. Em operações de câmbio, cadeias complexas ou com presença em outras jurisdições merecem atenção reforçada, e o registro da fonte de cada nível é parte da evidência.',
    },
    {
      q: 'Com que frequência o cadastro do cliente de câmbio deve ser atualizado?',
      a: 'A periodicidade é definida pela política da instituição conforme o risco do cliente, dentro do que a Circular 3.978 prevê para a atualização cadastral. O ponto de fiscalização é a coerência: ter a regra escrita, aplicá-la a toda a base e registrar cada reverificação realizada.',
    },
    {
      q: 'A kycert faz o monitoramento das operações de câmbio?',
      a: 'Não. A kycert faz KYC, KYB, screening de sanções e PEP, enquadramento de risco, Dossiê de Risco e reverificação periódica. O monitoramento transacional em tempo real é outra camada, que usa o perfil de risco produzido pelo cadastro como insumo.',
    },
  ],
  related: [
    'beneficiario-final-ubo-kyb',
    'checklist-prontidao-fiscalizacao',
    'comprovar-pld-ft-fiscalizacao-bacen',
    'kyt-monitoramento-transacional-pix',
  ],
  solutions: [
    { href: '/solucoes/cambio', label: 'Solução para corretoras de câmbio' },
    { href: '/produto/kyb', label: 'KYB com cadeia societária até o UBO' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco exportável' },
  ],
};

export default post;
