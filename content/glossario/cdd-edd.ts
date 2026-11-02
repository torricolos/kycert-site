import type { Term } from '@/lib/glossary';

const term: Term = {
  slug: 'cdd-edd',
  term: 'CDD e EDD',
  fullName: 'Customer Due Diligence e Enhanced Due Diligence',
  metaTitle: 'CDD e EDD: diligência padrão e reforçada em PLD/FT',
  description:
    'CDD é a diligência padrão sobre o cliente; EDD é a reforçada, para casos de maior risco. Entenda quando aplicar cada uma e como evidenciar na fiscalização.',
  shortDef:
    'CDD (Customer Due Diligence) é a diligência padrão aplicada a todo cliente. EDD (Enhanced Due Diligence) é a diligência reforçada, com mais informação, aprovação superior e acompanhamento intensivo, reservada a clientes e situações de maior risco.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  body: `
<h2>O que é</h2>
<p>CDD e EDD são dois níveis do mesmo dever. A CDD é o conjunto de procedimentos básicos de conhecimento do cliente: identificar, qualificar, verificar listas e classificar o risco. A EDD acrescenta camadas quando a classificação indica risco elevado. Quem decide qual dos dois níveis se aplica é a <a href="/glossario/abr">abordagem baseada em risco</a>. Em termos práticos, o <a href="/glossario/kyc">KYC</a> padrão é a CDD, e o caso que exige mais é a EDD.</p>

<h2>Base normativa e como se aplica no Brasil</h2>
<p>A Circular BCB 3.978/2020 prevê procedimentos de identificação e qualificação proporcionais ao risco e exige atenção especial a situações como as de <a href="/glossario/pep">PEP</a>, com aprovação do relacionamento em nível adequado. A Resolução CVM 50/2021 e a Circular SUSEP 612/2020 seguem lógica semelhante. As normas não costumam usar as siglas CDD e EDD; usam a ideia de diligência proporcional e, para casos de risco maior, procedimentos reforçados. Quais gatilhos levam à EDD é definição da política de cada instituição.</p>

<h2>Como funciona na prática</h2>
<p>Gatilhos usuais da EDD: cliente PEP, estrutura societária opaca, ligação com jurisdição de risco, mídia adversa relevante, ocorrência em lista de sanções a ser esclarecida ou atividade de risco elevado.</p>
<ul>
<li><strong>CDD:</strong> documento, dados cadastrais, screening, classificação e registro da decisão.</li>
<li><strong>EDD:</strong> tudo da CDD, mais comprovação da origem do patrimônio e dos recursos, entrevista ou documentação adicional, análise aprofundada da cadeia até o <a href="/glossario/ubo">beneficiário final</a> e aprovação por alçada superior.</li>
<li><strong>Acompanhamento:</strong> reverificação mais frequente e <a href="/glossario/kyt">monitoramento</a> intensificado para clientes em EDD.</li>
<li><strong>Registro:</strong> a justificativa do nível aplicado e da decisão fica guardada.</li>
</ul>
<p>Para empresas, o <a href="/glossario/kyb">KYB</a> segue a mesma lógica de dois níveis.</p>

<h2>Erro comum</h2>
<p>Aplicar EDD por reflexo, a todos, ou nunca aplicá-la. No primeiro caso, o processo emperra e o analista perde foco no que importa. No segundo, o cliente de alto risco é tratado como qualquer outro. Também é comum faltar a justificativa: o dossiê mostra a EDD feita, mas não explica por que ela foi acionada.</p>

<h2>Como a kycert trata</h2>
<p>A kycert enquadra o risco pela regra do cliente e aponta, no <a href="/produto/dossie-de-risco">Dossiê de Risco</a>, os fatores que justificam o nível, o que ajuda a decidir entre CDD e EDD. No <a href="/produto/kyb">KYB</a>, a cadeia societária até o beneficiário final e o screening em cada nó entregam a base da EDD de empresas. A decisão e a justificativa ficam registradas com autor e data, e a <a href="/produto/monitoramento">reverificação periódica</a> pode ser configurada com mais frequência para perfis de maior risco. Os documentos adicionais e a aprovação em alçada superior seguem o processo da instituição. O quadro completo está em <a href="/blog/abordagem-baseada-em-risco-abr-exemplo-pratico">ABR na prática</a>.</p>
`,
  faq: [
    {
      q: 'Qual a diferença entre CDD e EDD?',
      a: 'CDD é a diligência padrão, aplicada a todos os clientes. EDD é a diligência reforçada, com mais informação, aprovação em alçada superior e acompanhamento mais próximo, aplicada a casos de risco elevado.',
    },
    {
      q: 'Quando devo aplicar a EDD?',
      a: 'Quando a classificação de risco indicar risco alto, por exemplo cliente PEP, estrutura opaca ou jurisdição de risco. Os gatilhos exatos devem estar definidos na política da instituição.',
    },
    {
      q: 'CDD e EDD aparecem na norma brasileira?',
      a: 'As siglas são internacionais. A norma brasileira exprime a ideia como diligência proporcional ao risco e procedimentos reforçados para situações de maior risco.',
    },
  ],
  relatedTerms: ['abr', 'kyc', 'kyb', 'pep', 'ubo'],
  relatedPosts: ['abordagem-baseada-em-risco-abr-exemplo-pratico', 'lista-pep-como-consultar', 'beneficiario-final-ubo-kyb'],
  solutions: [
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/produto/kyb', label: 'Verificação KYB' },
    { href: '/produto/monitoramento', label: 'Reverificação periódica' },
  ],
};

export default term;
