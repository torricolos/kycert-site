import type { Term } from '@/lib/glossary';

const term: Term = {
  slug: 'pep',
  term: 'PEP',
  fullName: 'Pessoa Exposta Politicamente',
  metaTitle: 'O que é PEP (Pessoa Exposta Politicamente)',
  description:
    'PEP é quem exerce ou exerceu função pública relevante e exige diligência reforçada em PLD/FT. Veja quem é PEP, a base normativa e como consultar.',
  shortDef:
    'PEP (Pessoa Exposta Politicamente) é quem exerce ou exerceu, nos últimos cinco anos, cargo, emprego ou função pública relevante, além de seus familiares e pessoas próximas, e por isso exige atenção reforçada na prevenção à lavagem de dinheiro.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  body: `
<h2>O que é</h2>
<p>PEP é uma categoria de risco, não uma restrição. Ser PEP não impede ninguém de ser cliente. A condição existe porque o acesso a recursos públicos e a poder de decisão aumenta a exposição à corrupção e à lavagem de dinheiro. Por isso a instituição precisa saber quem é PEP, aplicar <a href="/glossario/cdd-edd">diligência reforçada</a> e decidir com mais cautela. A definição alcança também familiares e pessoas próximas.</p>

<h2>Base normativa e como se aplica no Brasil</h2>
<p>A Circular BCB 3.978/2020 define PEP para as instituições autorizadas pelo Banco Central e exige procedimentos específicos para identificá-las e tratá-las, incluindo a aprovação do relacionamento em nível adequado de alçada. A Resolução CVM 50/2021 e a Circular SUSEP 612/2020 fazem o mesmo em seus setores, e a Resolução COAF 40/2021 trata do tema para os segmentos sob supervisão do COAF. Cada norma traz sua redação: confira a definição aplicável à sua instituição. O período de cinco anos após deixar a função é o critério usual.</p>

<h2>Como funciona na prática</h2>
<ul>
<li><strong>Identificação:</strong> o cliente declara a condição de PEP e a instituição confere em bases de dados de agentes públicos.</li>
<li><strong>Extensão:</strong> a checagem alcança familiares, representantes e, em pessoa jurídica, sócios e beneficiários finais (veja <a href="/glossario/ubo">UBO</a>).</li>
<li><strong>Classificação:</strong> o cliente PEP costuma ser enquadrado em risco mais alto pela <a href="/glossario/abr">abordagem baseada em risco</a>.</li>
<li><strong>Aprovação e acompanhamento:</strong> decisão por alçada superior, verificação da origem dos recursos e monitoramento intensificado.</li>
</ul>
<p>Como a condição muda com o tempo, o screening precisa ser repetido ao longo do relacionamento.</p>

<h2>Erro comum</h2>
<p>Confiar apenas na autodeclaração, ou consultar o CPF do cliente e esquecer os sócios e o beneficiário final de uma empresa. Outro erro é nunca refazer a consulta: quem não era PEP no onboarding pode ser nomeado depois. E há o erro oposto, tratar toda ocorrência como impeditiva: PEP exige diligência e justificativa, não recusa automática.</p>

<h2>Como a kycert trata</h2>
<p>No <a href="/produto/kyc">KYC de pessoa física</a> e no <a href="/produto/kyb">KYB</a>, a kycert faz screening de PEP no cliente e nos sócios da estrutura, e registra o resultado de cada consulta no <a href="/produto/dossie-de-risco">Dossiê de Risco</a>. A <a href="/produto/monitoramento">reverificação periódica</a> repete o screening e avisa quando algo muda. O enquadramento de risco segue a regra do cliente, e a decisão fica registrada com autor e data. Para o passo a passo da consulta, veja <a href="/blog/lista-pep-como-consultar">lista PEP: como consultar</a>.</p>
`,
  faq: [
    {
      q: 'Quem é considerado PEP no Brasil?',
      a: 'Quem exerce ou exerceu cargo, emprego ou função pública relevante, como mandatos eletivos e altos cargos dos três Poderes, além de familiares e pessoas próximas. A definição exata consta na norma de cada setor.',
    },
    {
      q: 'Por quanto tempo a pessoa continua sendo PEP?',
      a: 'O critério usual é de cinco anos contados do fim do exercício da função. Confira a redação da norma aplicável à sua instituição.',
    },
    {
      q: 'A instituição pode recusar um cliente PEP?',
      a: 'A condição de PEP, por si só, não obriga a recusa. Ela obriga diligência reforçada, aprovação em alçada adequada e monitoramento mais próximo. A decisão deve ser fundamentada e registrada.',
    },
  ],
  relatedTerms: ['kyc', 'ubo', 'cdd-edd', 'abr', 'pld-ft'],
  relatedPosts: ['lista-pep-como-consultar', 'circular-3978-checklist-pld-ft', 'resolucao-cvm-50-pld-ft'],
  solutions: [
    { href: '/produto/kyc', label: 'Verificação KYC com screening de PEP' },
    { href: '/produto/monitoramento', label: 'Reverificação periódica' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
  ],
};

export default term;
