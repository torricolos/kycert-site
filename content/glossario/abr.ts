import type { Term } from '@/lib/glossary';

const term: Term = {
  slug: 'abr',
  term: 'ABR',
  fullName: 'Abordagem Baseada em Risco',
  metaTitle: 'O que é ABR (Abordagem Baseada em Risco) em PLD/FT',
  description:
    'ABR (Abordagem Baseada em Risco) calibra a diligência de PLD/FT ao risco de cada cliente, produto e canal. Veja a base normativa e como aplicar.',
  shortDef:
    'ABR (Abordagem Baseada em Risco) é o princípio pelo qual a instituição identifica seus riscos de lavagem de dinheiro, classifica clientes, produtos e canais e aplica controles proporcionais: mais rigor onde o risco é maior, menos onde é menor.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  body: `
<h2>O que é</h2>
<p>A ABR parte de uma ideia simples: nenhuma instituição consegue investigar tudo com a mesma profundidade, e não deveria. Em vez de um procedimento único, ela mede onde o risco está e concentra esforço ali. A avaliação cobre clientes, produtos e serviços, canais de distribuição e áreas geográficas. O resultado é uma classificação que decide quanto <a href="/glossario/cdd-edd">diligência</a> cada relacionamento recebe. É a espinha dorsal da <a href="/glossario/pld-ft">PLD/FT</a> moderna.</p>

<h2>Base normativa e como se aplica no Brasil</h2>
<p>A Circular BCB 3.978/2020 exige que as instituições autorizadas pelo Banco Central tenham política de PLD/FT baseada em risco e realizem avaliação interna de risco, que identifique e mensure o risco de utilização de seus produtos e serviços para lavagem de dinheiro. A Resolução CVM 50/2021 e a Circular SUSEP 612/2020 adotam a mesma lógica em seus setores. A avaliação deve ser documentada e revista periodicamente, e as categorias de risco e os controles correspondentes ficam definidos pela própria instituição.</p>

<h2>Como funciona na prática</h2>
<ul>
<li><strong>Mapear os fatores:</strong> perfil do cliente, atividade, país, produto, canal e valores.</li>
<li><strong>Dar peso a cada fator:</strong> a instituição define a metodologia e a justifica.</li>
<li><strong>Classificar:</strong> enquadrar o cliente em faixas, por exemplo baixo, médio e alto.</li>
<li><strong>Calibrar os controles:</strong> risco baixo recebe a diligência padrão; risco alto, a reforçada, com aprovação em alçada superior.</li>
<li><strong>Revisar:</strong> reclassificar o cliente quando algo muda e reavaliar a metodologia periodicamente.</li>
</ul>
<p>O <a href="/glossario/kyc">KYC</a> gera os dados para a classificação, e o <a href="/glossario/kyt">monitoramento transacional</a> usa a classificação para definir a intensidade da vigilância.</p>

<h2>Erro comum</h2>
<p>Ter a matriz de risco no papel e não aplicá-la. Na fiscalização, aparece a incoerência: a política diz que cliente <a href="/glossario/pep">PEP</a> é alto risco, mas os cadastros mostram o mesmo tratamento dado a qualquer outro. Outro erro é copiar uma metodologia pronta sem adaptá-la ao negócio, ou nunca reavaliá-la depois de lançar um produto novo.</p>

<h2>Como a kycert trata</h2>
<p>A regra de risco é da instituição, e a kycert a aplica. A plataforma faz o enquadramento de cada cliente pela regra que você configura, a partir dos resultados de <a href="/produto/kyc">KYC</a> e <a href="/produto/kyb">KYB</a>, e mostra o veredito no topo do <a href="/produto/dossie-de-risco">Dossiê de Risco</a>, com os fatores que puxaram a classificação. A <a href="/produto/monitoramento">reverificação periódica</a> reclassifica quando o cenário muda. A kycert não substitui a avaliação interna de risco da instituição, que continua sendo responsabilidade dela. Um caso concreto está em <a href="/blog/abordagem-baseada-em-risco-abr-exemplo-pratico">ABR na prática, com exemplo</a>.</p>
`,
  faq: [
    {
      q: 'ABR é a mesma coisa que avaliação interna de risco?',
      a: 'Não. A ABR é o princípio. A avaliação interna de risco é o documento em que a instituição aplica esse princípio ao seu negócio, identificando e mensurando os riscos dos seus produtos, clientes e canais.',
    },
    {
      q: 'Quantas faixas de risco devo ter?',
      a: 'A norma deixa a escolha à instituição. O comum é trabalhar com baixo, médio e alto, desde que a metodologia seja justificada e os controles de cada faixa estejam claros.',
    },
    {
      q: 'Com que frequência reavaliar o risco do cliente?',
      a: 'A periodicidade deve ser proporcional ao risco: clientes de risco maior são reavaliados com mais frequência. Defina na política e comprove a execução.',
    },
  ],
  relatedTerms: ['pld-ft', 'cdd-edd', 'kyc', 'kyt', 'pep'],
  relatedPosts: ['abordagem-baseada-em-risco-abr-exemplo-pratico', 'circular-3978-checklist-pld-ft', 'checklist-prontidao-fiscalizacao'],
  solutions: [
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco com enquadramento' },
    { href: '/produto/kyc', label: 'Verificação KYC' },
    { href: '/produto/monitoramento', label: 'Reverificação periódica' },
  ],
};

export default term;
