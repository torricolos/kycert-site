import type { Term } from '@/lib/glossary';

const term: Term = {
  slug: 'kyc',
  term: 'KYC',
  fullName: 'Know Your Customer (Conheça seu Cliente)',
  metaTitle: 'O que é KYC (Know Your Customer) no Brasil',
  description:
    'KYC (Know Your Customer) é o processo de identificar, qualificar e classificar o risco de cada cliente. Entenda a base normativa e como aplicar no Brasil.',
  shortDef:
    'KYC (Know Your Customer, ou Conheça seu Cliente) é o conjunto de procedimentos pelos quais uma instituição identifica o cliente, confirma seus dados, avalia seu perfil e classifica seu risco de lavagem de dinheiro antes e durante o relacionamento.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  body: `
<h2>O que é</h2>
<p>KYC é a etapa de conhecimento do cliente dentro da <a href="/glossario/pld-ft">PLD/FT</a>. Ela responde a quatro perguntas: quem é a pessoa, se os dados informados são verdadeiros, se ela aparece em listas de sanções ou é <a href="/glossario/pep">PEP</a>, e qual risco representa para a instituição. Para pessoa jurídica, o equivalente é o <a href="/glossario/kyb">KYB</a>.</p>

<h2>Base normativa e como se aplica no Brasil</h2>
<p>A Lei 9.613/1998 obriga as instituições sujeitas a identificar clientes e manter cadastro. A Circular BCB 3.978/2020 detalha, para as instituições autorizadas pelo Banco Central, os procedimentos de identificação, qualificação e classificação de risco do cliente. A Resolução CVM 50/2021 faz o mesmo no mercado de capitais, e a Circular SUSEP 612/2020 nos seguros. As regras se aplicam com a <a href="/glossario/abr">abordagem baseada em risco</a>: quanto maior o risco, mais profunda a diligência (veja <a href="/glossario/cdd-edd">CDD e EDD</a>).</p>

<h2>Como funciona na prática</h2>
<ul>
<li><strong>Identificação:</strong> captura do documento oficial, conferência dos dados e, quando o fluxo exige, prova de vida.</li>
<li><strong>Qualificação:</strong> ocupação, renda ou faturamento, origem dos recursos e finalidade do relacionamento.</li>
<li><strong>Screening:</strong> consulta a listas de sanções, PEP e mídia adversa.</li>
<li><strong>Classificação de risco:</strong> enquadramento em faixas (por exemplo baixo, médio e alto), conforme a avaliação interna de risco da instituição.</li>
<li><strong>Decisão e registro:</strong> aprovar, recusar ou escalar, com autor, data e evidência guardados.</li>
<li><strong>Reverificação:</strong> atualização periódica do cadastro e do screening.</li>
</ul>
<p>O KYC não termina no onboarding. O perfil de risco definido nele alimenta o <a href="/glossario/kyt">monitoramento transacional</a>.</p>

<h2>Erro comum</h2>
<p>Tratar o KYC como um formulário preenchido uma vez. Na fiscalização, o que pesa é a evidência: quais fontes foram consultadas, quando, o que foi encontrado e quem decidiu. Cadastro aprovado sem trilha, ou sem reverificação, não comprova diligência.</p>

<h2>Como a kycert trata</h2>
<p>A <a href="/produto/kyc">verificação KYC de pessoa física</a> da kycert conduz o convite white-label, captura o documento com <a href="/produto/ocr">OCR</a>, faz screening de sanções e PEP, enquadra o risco pela regra do cliente e gera o <a href="/produto/dossie-de-risco">Dossiê de Risco</a> em PDF, com a decisão registrada com autor e data. A <a href="/produto/monitoramento">reverificação periódica</a> mantém o cadastro atualizado. A regra de risco continua sendo da instituição: a kycert a aplica, não a define.</p>
`,
  faq: [
    {
      q: 'Qual a diferença entre KYC e KYB?',
      a: 'KYC verifica pessoas físicas. KYB verifica pessoas jurídicas e inclui a análise da cadeia societária até o beneficiário final. Os dois fazem parte do mesmo programa de PLD/FT.',
    },
    {
      q: 'O KYC é feito só no onboarding?',
      a: 'Não. A norma exige manter o cadastro atualizado e acompanhar o cliente durante o relacionamento. Por isso o KYC inclui reverificação periódica, com frequência definida conforme o risco do cliente.',
    },
    {
      q: 'Quem é obrigado a fazer KYC no Brasil?',
      a: 'As instituições sujeitas à Lei 9.613/1998 e às normas do seu regulador, como bancos, câmbio, PSAVs, corretoras, seguradoras e bets, cada uma conforme a regra aplicável ao seu setor.',
    },
  ],
  relatedTerms: ['kyb', 'pep', 'abr', 'cdd-edd', 'pld-ft'],
  relatedPosts: ['circular-3978-checklist-pld-ft', 'lista-pep-como-consultar', 'comprovar-pld-ft-fiscalizacao-bacen'],
  solutions: [
    { href: '/produto/kyc', label: 'Verificação KYC de pessoa física' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/produto/monitoramento', label: 'Reverificação periódica' },
  ],
};

export default term;
