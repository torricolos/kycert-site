import type { Term } from '@/lib/glossary';

const term: Term = {
  slug: 'kyt',
  term: 'KYT',
  fullName: 'Know Your Transaction (monitoramento transacional)',
  metaTitle: 'O que é KYT (Know Your Transaction) e como funciona',
  description:
    'KYT (Know Your Transaction) é o monitoramento de transações para detectar operações suspeitas. Entenda o conceito, a base normativa e a relação com o KYC.',
  shortDef:
    'KYT (Know Your Transaction) é o monitoramento das transações do cliente, em tempo real ou em lotes, para detectar movimentações atípicas e suspeitas de lavagem de dinheiro e gerar alertas para análise e eventual comunicação ao COAF.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  body: `
<h2>O que é</h2>
<p>KYT é a camada de monitoramento que acompanha o que o cliente faz depois de aprovado. Enquanto o <a href="/glossario/kyc">KYC</a> responde quem é o cliente, o KYT observa o comportamento: valores, frequência, contrapartes, geografia e canais. Quando uma operação foge do padrão esperado para aquele perfil, o sistema gera um alerta para análise.</p>

<h2>Base normativa e como se aplica no Brasil</h2>
<p>A Circular BCB 3.978/2020 exige das instituições autorizadas procedimentos de monitoramento, seleção e análise de operações e situações com indícios de lavagem de dinheiro. A Carta Circular BCB 4.001/2020 lista exemplos de operações que podem configurar indício e devem ser avaliadas para comunicação ao COAF. A Resolução CVM 50/2021 e a Circular SUSEP 612/2020 trazem deveres equivalentes em seus setores. A intensidade do monitoramento segue a <a href="/glossario/abr">abordagem baseada em risco</a>.</p>

<h2>Como funciona na prática</h2>
<ul>
<li><strong>Perfil esperado:</strong> o risco e a atividade declarados no onboarding definem o que é normal para aquele cliente.</li>
<li><strong>Regras e cenários:</strong> parâmetros como fracionamento, volume incompatível com a renda ou o faturamento e mudança abrupta de padrão.</li>
<li><strong>Alerta:</strong> a operação fora do padrão entra numa fila.</li>
<li><strong>Análise:</strong> um analista investiga, decide e registra a fundamentação.</li>
<li><strong>Comunicação:</strong> havendo indício, a comunicação ao COAF é feita nos termos da norma aplicável.</li>
</ul>
<p>Em pagamentos instantâneos, como o Pix, o volume e a velocidade tornam o monitoramento automatizado indispensável.</p>

<h2>Erro comum</h2>
<p>Monitorar sem um perfil de referência. Se o cadastro não registra renda, atividade e finalidade com qualidade, o motor de KYT não tem o que comparar e gera ruído: falsos positivos em excesso ou, pior, operações atípicas que passam como normais. A qualidade do KYC determina a qualidade do KYT.</p>

<h2>Como a kycert trata</h2>
<p>A kycert não é um motor de monitoramento transacional e não analisa transações em tempo real. O que ela entrega é a base que o KYT precisa: o perfil de risco produzido pelo <a href="/produto/kyc">KYC</a> e pelo <a href="/produto/kyb">KYB</a>, consolidado no <a href="/produto/dossie-de-risco">Dossiê de Risco</a>, e a <a href="/produto/monitoramento">reverificação periódica</a>, que reconsulta sanções e PEP e avisa quando o perfil de um cliente muda. Esses dados podem chegar ao seu sistema de monitoramento pela <a href="/produto/api">API e webhooks</a>.</p>
`,
  faq: [
    {
      q: 'Qual a diferença entre KYC e KYT?',
      a: 'KYC conhece o cliente no cadastro e define seu perfil de risco. KYT acompanha as transações desse cliente e alerta quando elas fogem do perfil esperado. Um depende do outro.',
    },
    {
      q: 'A kycert faz monitoramento de transações?',
      a: 'Não. A kycert faz verificação e reverificação de clientes. O perfil de risco que ela produz alimenta o motor de monitoramento transacional que a instituição usa.',
    },
    {
      q: 'KYT é obrigatório?',
      a: 'O monitoramento de operações é um dever previsto nas normas de PLD/FT das instituições reguladas. A forma, a ferramenta e a intensidade dependem do porte, do setor e do risco da instituição.',
    },
  ],
  relatedTerms: ['kyc', 'abr', 'pld-ft', 'cdd-edd'],
  relatedPosts: ['kyt-monitoramento-transacional-pix', 'circular-3978-checklist-pld-ft', 'abordagem-baseada-em-risco-abr-exemplo-pratico'],
  solutions: [
    { href: '/produto/monitoramento', label: 'Reverificação periódica' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/produto/api', label: 'API e webhooks' },
  ],
};

export default term;
