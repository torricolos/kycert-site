import type { Term } from '@/lib/glossary';

const term: Term = {
  slug: 'kyb',
  term: 'KYB',
  fullName: 'Know Your Business',
  metaTitle: 'O que é KYB (Know Your Business) e como aplicar',
  description:
    'KYB (Know Your Business) é a verificação de empresas: cadastro PJ, quadro societário e beneficiário final. Veja a base normativa e como fazer no Brasil.',
  shortDef:
    'KYB (Know Your Business) é o processo de verificar uma pessoa jurídica: confirmar o cadastro, mapear a cadeia societária até o beneficiário final, consultar sanções e PEP em cada sócio e classificar o risco da empresa.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  body: `
<h2>O que é</h2>
<p>KYB é o <a href="/glossario/kyc">KYC</a> aplicado a empresas. A diferença central é que o cliente pessoa jurídica é uma estrutura: para conhecê-lo é preciso saber quem a controla. Por isso o KYB inclui o mapeamento do quadro societário e a identificação do <a href="/glossario/ubo">beneficiário final</a>, a pessoa física que, em última instância, detém ou controla a empresa.</p>

<h2>Base normativa e como se aplica no Brasil</h2>
<p>A Circular BCB 3.978/2020 exige que as instituições autorizadas pelo Banco Central identifiquem e qualifiquem clientes pessoa jurídica e procurem chegar ao beneficiário final. A Resolução CVM 50/2021 traz dever equivalente no mercado de capitais, e a IN RFB 2.119/2022 disciplina o cadastro de CNPJ, incluindo a informação do beneficiário final. Para prestadoras de serviços de ativos virtuais, as Resoluções BCB 519, 520 e 521/2025 reforçam a necessidade de diligência sobre clientes. A profundidade segue a <a href="/glossario/abr">abordagem baseada em risco</a>.</p>

<h2>Como funciona na prática</h2>
<ul>
<li><strong>Cadastro PJ:</strong> situação do CNPJ, atividade econômica, data de abertura, endereço e documentos constitutivos.</li>
<li><strong>Quadro societário:</strong> sócios e administradores, com participação e função.</li>
<li><strong>Cadeia de controle:</strong> quando um sócio é outra empresa (holding), segue-se a participação até a pessoa física.</li>
<li><strong>Screening por nó:</strong> sanções, <a href="/glossario/pep">PEP</a> e mídia adversa consultados na empresa e em cada sócio relevante.</li>
<li><strong>Classificação e decisão:</strong> risco enquadrado, decisão registrada e <a href="/glossario/cdd-edd">diligência reforçada</a> quando o risco é alto.</li>
</ul>
<p>Estruturas com muitas camadas, offshores ou participação pulverizada exigem mais atenção, porque são o caminho típico para ocultar o controle real.</p>

<h2>Erro comum</h2>
<p>Parar no primeiro nível. Registrar apenas os sócios diretos, sem seguir a participação por holdings intermediárias, deixa o beneficiário final sem identificação. Outro erro é consultar sanções somente na empresa e ignorar os sócios: uma sanção no controlador contamina o risco do cliente.</p>

<h2>Como a kycert trata</h2>
<p>A <a href="/produto/kyb">verificação KYB</a> da kycert monta a cadeia societária até o beneficiário final, aplica screening de sanções e PEP em cada nó e guarda o status de cada participante. O resultado entra no <a href="/produto/dossie-de-risco">Dossiê de Risco</a>, exportável em PDF, com a decisão registrada com autor e data. Para integrar ao seu fluxo, há a <a href="/produto/api">API com webhooks</a>. Quando a estrutura não permite chegar a uma pessoa física, a plataforma não inventa: o ponto fica sinalizado para análise humana.</p>
`,
  faq: [
    {
      q: 'O que o KYB verifica além do CNPJ?',
      a: 'Além da situação cadastral, verifica o quadro societário, a cadeia de controle até o beneficiário final e o screening de sanções e PEP na empresa e nos sócios.',
    },
    {
      q: 'KYB e UBO são a mesma coisa?',
      a: 'Não. KYB é o processo de verificar a empresa. UBO é uma das informações que o KYB precisa produzir: a pessoa física que controla ou se beneficia da empresa.',
    },
    {
      q: 'Preciso refazer o KYB depois do onboarding?',
      a: 'Sim. Empresas mudam de sócios, de controle e de situação cadastral. A reverificação periódica, com frequência ligada ao risco, mantém o cadastro e o screening atualizados.',
    },
  ],
  relatedTerms: ['kyc', 'ubo', 'pep', 'cdd-edd', 'abr'],
  relatedPosts: ['beneficiario-final-ubo-kyb', 'kyb-para-psav-exchanges', 'abertura-conta-fintech-kyb-escala'],
  solutions: [
    { href: '/produto/kyb', label: 'Verificação KYB de pessoa jurídica' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/solucoes/psav', label: 'Solução para PSAVs' },
  ],
};

export default term;
