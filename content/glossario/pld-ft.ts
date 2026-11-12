import type { Term } from '@/lib/glossary';

const term: Term = {
  slug: 'pld-ft',
  term: 'PLD/FT',
  fullName: 'Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo',
  metaTitle: 'O que é PLD/FT (Prevenção à Lavagem de Dinheiro)',
  description:
    'PLD/FT é o conjunto de políticas e controles contra lavagem de dinheiro e financiamento do terrorismo. Veja a base normativa e os pilares do programa.',
  shortDef:
    'PLD/FT é o conjunto de políticas, procedimentos e controles que as instituições adotam para impedir que seus produtos sejam usados para lavar dinheiro ou financiar o terrorismo, e para detectar e comunicar operações suspeitas às autoridades.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  body: `
<h2>O que é</h2>
<p>PLD/FT reúne tudo o que uma instituição faz para não ser veículo de crime financeiro. A lavagem de dinheiro é o processo de dar aparência lícita a recursos de origem criminosa. O financiamento do terrorismo é o fornecimento de recursos a atividades terroristas, mesmo de origem lícita. Na prática, o programa de PLD/FT é a soma de governança, conhecimento do cliente, monitoramento, comunicação e registro.</p>

<h2>Base normativa e como se aplica no Brasil</h2>
<p>A Lei 9.613/1998 tipifica o crime de lavagem, define as pessoas sujeitas às obrigações e cria o COAF. Cada regulador detalha o programa para o seu setor: a Circular BCB 3.978/2020 para instituições autorizadas pelo Banco Central, com a Carta Circular BCB 4.001/2020 listando operações com indício de lavagem; a Resolução CVM 50/2021 no mercado de capitais; a Circular SUSEP 612/2020 em seguros; e as Resoluções BCB 519, 520 e 521/2025 para prestadoras de serviços de ativos virtuais. A <a href="/glossario/abr">abordagem baseada em risco</a> organiza todo o programa.</p>

<h2>Como funciona na prática</h2>
<ul>
<li><strong>Governança:</strong> política aprovada pela alta administração, diretor responsável e avaliação interna de risco.</li>
<li><strong>Conheça seu cliente:</strong> <a href="/glossario/kyc">KYC</a> para pessoas físicas e <a href="/glossario/kyb">KYB</a> para empresas, com identificação do <a href="/glossario/ubo">beneficiário final</a> e checagem de <a href="/glossario/pep">PEP</a> e sanções.</li>
<li><strong>Monitoramento:</strong> acompanhamento das operações, o <a href="/glossario/kyt">KYT</a>.</li>
<li><strong>Comunicação:</strong> operações suspeitas são comunicadas ao COAF, nos termos da norma.</li>
<li><strong>Treinamento e auditoria:</strong> capacitação da equipe e testes de efetividade.</li>
<li><strong>Registro:</strong> guarda de dados e decisões para apresentar ao regulador.</li>
</ul>

<h2>Erro comum</h2>
<p>Confundir ter política com ter programa. Um documento bem escrito não prova nada se não houver evidência de execução. A fiscalização pergunta por casos reais: quem foi verificado, contra quais fontes, quem decidiu e quando. Outro erro é concentrar o esforço no onboarding e esquecer a reverificação e o monitoramento.</p>

<h2>Como a kycert trata</h2>
<p>A kycert cobre a parte de conhecimento e reverificação do cliente: <a href="/produto/kyc">KYC</a>, <a href="/produto/kyb">KYB</a> com cadeia societária até o beneficiário final, screening de sanções e PEP, enquadramento de risco pela regra do cliente e <a href="/produto/monitoramento">reverificação periódica</a>. O resultado é o <a href="/produto/dossie-de-risco">Dossiê de Risco</a>, que registra cada decisão com autor e data. Ela não substitui o programa da instituição, não é motor de monitoramento transacional e não faz a comunicação ao COAF. Para um roteiro de verificação, veja o <a href="/blog/circular-3978-checklist-pld-ft">checklist da Circular 3.978</a>.</p>
`,
  faq: [
    {
      q: 'O que significa PLD/FT?',
      a: 'Significa Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo. Designa o programa de políticas e controles que as instituições reguladas mantêm para evitar e detectar esses crimes.',
    },
    {
      q: 'Quem precisa ter um programa de PLD/FT?',
      a: 'As pessoas e instituições listadas na Lei 9.613/1998 e reguladas por BCB, CVM, SUSEP, COAF e outros órgãos, cada uma conforme a norma do seu setor.',
    },
    {
      q: 'PLD/FT e compliance são a mesma coisa?',
      a: 'Não. Compliance é a função mais ampla de conformidade. PLD/FT é uma de suas frentes, com normas, prazos e comunicações próprias ao COAF.',
    },
  ],
  relatedTerms: ['kyc', 'kyb', 'abr', 'kyt', 'cdd-edd'],
  relatedPosts: ['circular-3978-checklist-pld-ft', 'comprovar-pld-ft-fiscalizacao-bacen', 'resolucao-cvm-50-pld-ft'],
  solutions: [
    { href: '/produto/kyc', label: 'Verificação KYC' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/conformidade', label: 'Conformidade' },
  ],
};

export default term;
