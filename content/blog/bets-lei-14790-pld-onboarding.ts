import type { Post } from '@/lib/posts';

const post: Post = {
  slug: 'bets-lei-14790-pld-onboarding',
  title: 'KYC bets: o que a Lei 14.790/2023 e a regulamentação da SPA/MF exigem no cadastro do apostador',
  metaTitle: 'KYC bets: Lei 14.790 e PLD no cadastro do apostador',
  description:
    'KYC bets: o que a Lei 14.790/2023 e a regulamentação de PLD das apostas de quota fixa exigem no cadastro do apostador, e como evidenciar cada decisão.',
  category: 'Segmentos',
  eyebrow: 'Apostas / Bets',
  excerpt:
    'A Lei 14.790/2023 e a regulamentação da SPA/MF colocaram a casa de apostas no regime de PLD/FT. Veja o que o KYC do apostador precisa registrar.',
  datePublished: '2026-06-18',
  dateModified: '2026-11-02',
  lead: 'Com a Lei 14.790/2023 e a regulamentação da Secretaria de Prêmios e Apostas do Ministério da Fazenda (SPA/MF), a operação de apostas de quota fixa passou a ter deveres formais de identificação do apostador e de prevenção à lavagem de dinheiro. O <strong>KYC bets</strong> deixou de ser uma boa prática e virou condição de operação autorizada. Este artigo explica o que a norma exige no cadastro, onde o onboarding de apostas costuma travar e que evidência a casa precisa ter quando o regulador pedir a trilha de um apostador.',
  figure: {
    src: '/images/blog/fluxo-onboarding-pld-ft.svg',
    alt: 'Fluxo de onboarding de PLD/FT em seis etapas, do convite ao cadastro até a decisão registrada e a reverificação do cliente.',
    caption: 'O cadastro do apostador como trilha: verificação, risco, decisão e reverificação registradas.',
    width: 1200,
    height: 500,
  },
  body: `
<h2>Contexto regulatório: da Lei 14.790/2023 à regulamentação da SPA/MF</h2>
<p>A Lei 14.790/2023 regulamentou a exploração comercial da modalidade de apostas de quota fixa no Brasil. Ela define o que a operadora pode oferecer, condiciona a atividade à autorização do Ministério da Fazenda e atribui à Secretaria de Prêmios e Apostas (SPA/MF) a função de regulamentar e fiscalizar o setor. A lei também sujeita as operadoras ao regime de prevenção à lavagem de dinheiro e ao financiamento do terrorismo, o mesmo que se aplica a outros setores obrigados pela Lei 9.613/1998.</p>
<p>Na prática, três consequências valem para quem opera. Primeiro, a casa de apostas é <strong>entidade obrigada</strong>: precisa de política e procedimentos de <a href="/glossario/pld-ft">PLD/FT</a>, com identificação do cliente, avaliação de risco e comunicação de operações suspeitas ao COAF. Segundo, a regulamentação da SPA/MF detalha o cadastro do apostador e os requisitos do programa de integridade e de PLD das operadoras autorizadas, por meio de portarias. Terceiro, o regulador pode pedir a trilha de qualquer apostador, e a casa precisa responder com evidência.</p>
<div class="callout">
<strong>Confira a norma vigente</strong>
<p>As portarias da SPA/MF são alteradas com frequência. Antes de fixar o seu procedimento, confirme no texto vigente o número, a versão e os artigos aplicáveis ao seu tipo de operadora. Este artigo cita a lei e descreve os deveres pelo tema, sem numerar dispositivos infralegais.</p>
</div>

<h2>O que a norma exige no cadastro do apostador</h2>
<h3>Identificação antes da primeira aposta</h3>
<p>A regulamentação exige que o apostador seja identificado no cadastro, com documento e CPF, e que a operadora verifique a maioridade, já que a participação é restrita a maiores de 18 anos. A conta do apostador é nominal e individual, o que torna a verificação de identidade um passo do onboarding, e não um detalhe operacional. Esse é o núcleo do <a href="/glossario/kyc">KYC</a> em apostas.</p>
<h3>Prevenção à lavagem de dinheiro e ao financiamento do terrorismo</h3>
<p>Como entidade obrigada, a operadora deve manter política de PLD/FT, avaliar o risco de uso da plataforma para lavagem e adotar procedimentos proporcionais ao risco do cliente, o que se aproxima da <a href="/glossario/abr">abordagem baseada em risco</a>. Isso inclui conferir listas de sanções e identificar <a href="/glossario/pep">pessoas expostas politicamente</a>, além de tratar de forma reforçada o apostador de maior risco (<a href="/glossario/cdd-edd">CDD e EDD</a>).</p>
<h3>Comunicação ao COAF</h3>
<p>Situações atípicas devem ser analisadas e, quando houver suspeita, comunicadas ao COAF conforme a Lei 9.613/1998 e a regulamentação setorial. A decisão de comunicar ou arquivar precisa ser registrada com a fundamentação, tanto para o caso comunicado como para o não comunicado.</p>
<h3>Guarda e disponibilidade das informações</h3>
<p>Os registros do cadastro e das decisões devem ser guardados e estar disponíveis à fiscalização. O prazo e a forma seguem a regulamentação aplicável à operadora; confirme-os no texto vigente.</p>
<h3>Diferenças em relação a outros setores</h3>
<p>Em bancos e corretoras, o regulador é o Banco Central, e a norma de referência é a Circular 3.978/2020. Em apostas, o regulador é a SPA/MF, e o desenho do cadastro nasce da lei e das portarias do setor. Os conceitos são os mesmos (identificar, qualificar, classificar o risco, monitorar, comunicar), mas as normas, os prazos e a fiscalização são diferentes. Para um paralelo, veja como o tema aparece em <a href="/blog/cooperativas-credito-3978-associados">cooperativas de crédito</a>, que respondem à Circular 3.978.</p>

<h2>Checklist de KYC bets</h2>
<p>Cada item abaixo deve produzir um registro com autor, data e fonte.</p>
<ul class="checklist">
<li>Documento do apostador capturado e conferido, com os dados extraídos vinculados ao arquivo original.</li>
<li>CPF validado em fonte oficial antes da primeira aposta, com a data da consulta registrada.</li>
<li>Maioridade verificada a partir do documento e da data de nascimento, com o resultado gravado.</li>
<li>Conta nominal: nome do titular compatível com o documento, e vínculo entre a conta e o cadastro registrado.</li>
<li>Screening de sanções e de PEP no cadastro, com lista, data e resultado.</li>
<li>Apontamentos tratados: homônimos descartados com justificativa e correspondências confirmadas com decisão.</li>
<li>Enquadramento de risco do apostador com os fatores que o sustentam, conforme a avaliação interna da operadora.</li>
<li>Diligência reforçada para apostadores de alto risco e PEP, com aprovação no nível definido pela política.</li>
<li>Decisão de liberar, restringir ou recusar a conta com autor, data e critério.</li>
<li>Reverificação periódica da base ativa, com re-screening de sanções e PEP e registro de cada ciclo.</li>
<li>Procedimento escrito de comunicação ao COAF e registro dos casos analisados.</li>
<li>Histórico exportável por apostador, para responder a um pedido do regulador sem reconstrução.</li>
</ul>

<h2>O ponto sensível: volume, velocidade e rigor</h2>
<p>Casas de apostas operam com alto volume de cadastros e um cliente que espera acesso imediato. Um onboarding lento faz o apostador legítimo desistir; um onboarding frouxo deixa passar o que a norma quer barrar. O desafio é verificar identidade, idade, sanções e PEP no mesmo fluxo, de forma que o rigor não vire barreira.</p>
<table class="art-table">
<thead><tr><th>Dificuldade</th><th>Risco para a operadora</th><th>Resposta</th></tr></thead>
<tbody>
<tr><td>Cadastro lento e com muitas etapas</td><td>Abandono do apostador legítimo</td><td>Captura de documento por câmera, com leitura por OCR e validação na hora</td></tr>
<tr><td>Verificações em sistemas separados</td><td>Evidência espalhada e difícil de reconstruir</td><td>Fontes consultadas em bloco, num registro único</td></tr>
<tr><td>Base ativa sem reavaliação</td><td>Apostador que passa a constar em lista continua jogando</td><td>Reverificação periódica e alerta de mudança de risco</td></tr>
<tr><td>Decisões sem justificativa</td><td>Fragilidade numa fiscalização</td><td>Decisão registrada com autor, data e critério</td></tr>
</tbody>
</table>
<p>Um ponto de atenção: as operadoras costumam combinar o KYC com outras camadas, como a verificação biométrica facial e a prova de vida. Na kycert, a confirmação biométrica facial ainda não está disponível e consta no roadmap; a plataforma hoje cobre o documento por OCR, a idade, o CPF, o screening de sanções e PEP e o registro da decisão. Se a sua operação exige biometria, ela precisa ser contratada de outra fonte e integrada à trilha. O mesmo vale para o monitoramento das apostas e movimentações, que é uma camada de <a href="/glossario/kyt">monitoramento transacional</a> fora do escopo da kycert, embora o perfil de risco do KYC seja um insumo para ele.</p>

<h2>Como a kycert apoia o onboarding de apostadores</h2>
<p>A kycert verifica o apostador no cadastro e registra cada etapa como evidência. O <a href="/produto/ocr">OCR de documentos</a> elimina a digitação, a <a href="/produto/kyc">verificação de pessoa física</a> consulta as fontes e aplica o screening de sanções e PEP, e o enquadramento de risco segue a regra definida pela própria operadora. A decisão fica no <a href="/produto/dossie-de-risco">Dossiê de Risco</a>, exportável em PDF, e o <a href="/produto/monitoramento">monitoramento contínuo</a> agenda a reverificação. A página da <a href="/solucoes/bets">solução para casas de apostas</a> resume a abordagem, e a <a href="/produto/api">API e os webhooks</a> permitem integrar o fluxo ao cadastro que a operadora já tem. Os valores estão em <a href="/precos">preços</a>.</p>

<h2>Como evidenciar na fiscalização</h2>
<p>Quando a SPA/MF ou o COAF pedir a trilha de um apostador, a pergunta é a mesma de qualquer fiscalização de PLD/FT: como a casa decidiu liberar e manter esta conta? A resposta é um registro único que traga:</p>
<ol>
<li><strong>Identidade:</strong> documento, CPF e idade, com a fonte e a data de cada conferência.</li>
<li><strong>Verificações:</strong> listas consultadas, resultado e percentual de correspondência dos apontamentos.</li>
<li><strong>Risco:</strong> o enquadramento e os fatores que pesaram.</li>
<li><strong>Decisão:</strong> quem liberou ou restringiu, quando e por quê.</li>
<li><strong>Continuidade:</strong> as reverificações realizadas e as mudanças de perfil.</li>
</ol>
<p>O <a href="/dossie-exemplo">dossiê de exemplo</a> mostra como essa trilha aparece numa tela. Para um roteiro de autoavaliação em seis blocos, use o <a href="/blog/checklist-prontidao-fiscalizacao">checklist de prontidão para fiscalização de PLD/FT</a>, e para o raciocínio do lado do regulador, leia <a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">como comprovar PLD/FT numa fiscalização</a>.</p>

<h2>Erros comuns no KYC de apostas</h2>
<h3>Confundir cadastro com verificação</h3>
<p>Coletar dados não é verificá-los. Um CPF digitado sem validação, ou um documento aceito sem conferência, não sustenta o cadastro diante de um fiscal.</p>
<h3>Verificar uma vez e nunca mais</h3>
<p>O apostador aprovado hoje pode entrar numa lista restritiva amanhã. Sem reverificação, a base ativa deixa de refletir o risco real.</p>
<h3>Tratar o apostador de alto valor como exceção ao processo</h3>
<p>O cliente que mais movimenta é o que mais merece diligência reforçada, não o que escapa do fluxo para ser atendido mais depressa.</p>
<h3>Perder a decisão no caminho</h3>
<p>Aprovações em chats e e-mails não são evidência. A decisão deve ser registrada no momento em que acontece, com autor e data.</p>
<h3>Copiar o modelo de outro setor sem adaptar</h3>
<p>A estrutura de um banco não se transfere diretamente a uma operadora de apostas: o regulador, a norma de referência e os fatores de risco são outros. Use o modelo como ponto de partida e valide cada requisito contra a regulamentação da SPA/MF. Para ver o ciclo completo de um programa de PLD, veja a <a href="/blog/circular-3978-checklist-pld-ft">lista de verificação da Circular 3.978</a> como referência de estrutura.</p>
`,
  faq: [
    {
      q: 'O que é KYC bets?',
      a: 'É o conjunto de procedimentos de identificação e verificação do apostador que a casa de apostas realiza no cadastro: documento, CPF, maioridade, listas de sanções e PEP, enquadramento de risco e decisão registrada. Ele decorre da Lei 14.790/2023 e da regulamentação da SPA/MF, e sustenta o programa de PLD/FT da operadora.',
    },
    {
      q: 'Casas de apostas são obrigadas a comunicar operações suspeitas ao COAF?',
      a: 'Sim. A Lei 14.790/2023 sujeita as operadoras ao regime de prevenção à lavagem de dinheiro e ao financiamento do terrorismo, e a Lei 9.613/1998 prevê a comunicação de operações suspeitas ao COAF. Os prazos e a forma seguem a regulamentação aplicável, que deve ser conferida no texto vigente.',
    },
    {
      q: 'Qual é o regulador de PLD/FT das apostas de quota fixa?',
      a: 'A Secretaria de Prêmios e Apostas do Ministério da Fazenda (SPA/MF) autoriza e fiscaliza as operadoras, e o COAF recebe as comunicações de operações suspeitas. A Circular BCB 3.978/2020 se aplica a instituições autorizadas pelo Banco Central, não diretamente às casas de apostas.',
    },
    {
      q: 'A kycert faz a biometria facial do apostador?',
      a: 'Hoje não. A confirmação biométrica facial está no roadmap. A plataforma cobre a captura de documento com OCR, a verificação de CPF e idade, o screening de sanções e PEP, o enquadramento de risco e o registro da decisão. Se a sua operação exige biometria, ela deve ser contratada de outra fonte e conectada à trilha.',
    },
    {
      q: 'Como provar à SPA/MF que o apostador foi verificado?',
      a: 'Com um registro feito no momento do cadastro, contendo documento, fontes consultadas com data e resultado, enquadramento de risco e a decisão com autor e data. Reconstruir esse histórico a partir de logs soltos depois do pedido do regulador é o que torna a defesa frágil.',
    },
  ],
  related: [
    'checklist-prontidao-fiscalizacao',
    'comprovar-pld-ft-fiscalizacao-bacen',
    'cooperativas-credito-3978-associados',
    'abordagem-baseada-em-risco-abr-exemplo-pratico',
  ],
  solutions: [
    { href: '/solucoes/bets', label: 'Solução para casas de apostas' },
    { href: '/produto/kyc', label: 'KYC de pessoa física' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco exportável' },
  ],
};

export default post;
