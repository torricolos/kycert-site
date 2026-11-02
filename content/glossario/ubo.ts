import type { Term } from '@/lib/glossary';

const term: Term = {
  slug: 'ubo',
  term: 'UBO',
  fullName: 'Ultimate Beneficial Owner (beneficiário final)',
  metaTitle: 'O que é UBO (beneficiário final) e como identificar',
  description:
    'UBO é o beneficiário final: a pessoa física que, no fim da cadeia, controla ou se beneficia de uma empresa. Veja a norma e como identificar.',
  shortDef:
    'UBO (Ultimate Beneficial Owner, ou beneficiário final) é a pessoa física que, em última instância, possui, controla ou influencia significativamente uma pessoa jurídica, ou em cujo nome e benefício uma operação é realizada.',
  datePublished: '2026-11-02',
  dateModified: '2026-11-02',
  body: `
<h2>O que é</h2>
<p>O UBO é quem está no topo da cadeia societária: a pessoa natural que de fato manda ou lucra, ainda que apareça por trás de holdings, fundos ou sociedades no exterior. Identificá-lo é o ponto central do <a href="/glossario/kyb">KYB</a>, porque o nome na ponta do contrato social nem sempre é quem controla. Sem o UBO, a instituição não consegue verificar <a href="/glossario/pep">PEP</a> e sanções sobre quem realmente importa.</p>

<h2>Base normativa e como se aplica no Brasil</h2>
<p>A Circular BCB 3.978/2020 exige que as instituições autorizadas pelo Banco Central procurem identificar o beneficiário final de seus clientes pessoa jurídica, seguindo a participação societária até a pessoa física. A Resolução CVM 50/2021 traz dever equivalente no mercado de capitais. A IN RFB 2.119/2022 exige a informação do beneficiário final no cadastro de CNPJ. As normas fixam um critério de participação a partir do qual a pessoa é tratada como beneficiária final (25% é o parâmetro usual) e também consideram o controle exercido por outros meios, além da participação. Confira o texto aplicável ao seu setor.</p>

<h2>Como funciona na prática</h2>
<ul>
<li><strong>Quadro societário:</strong> levantamento dos sócios diretos e suas participações.</li>
<li><strong>Seguir a cadeia:</strong> quando o sócio é uma empresa, repete-se o levantamento nela, nível a nível.</li>
<li><strong>Cálculo da participação:</strong> a participação indireta se obtém multiplicando os percentuais ao longo da cadeia.</li>
<li><strong>Controle sem participação:</strong> procuração, acordo de acionistas ou poder de nomear administradores também podem caracterizar controle.</li>
<li><strong>Screening:</strong> sanções, PEP e mídia adversa consultados no UBO.</li>
<li><strong>Registro:</strong> a cadeia e o critério usado ficam guardados como evidência.</li>
</ul>
<p>Se a cadeia termina em estrutura sem pessoa física identificável, a instituição documenta o esforço feito e aplica <a href="/glossario/cdd-edd">diligência reforçada</a>.</p>

<h2>Erro comum</h2>
<p>Registrar o sócio direto como beneficiário final. Quando o sócio é uma holding, o UBO está acima dela. O erro inverso também ocorre: aplicar o percentual só aos sócios diretos e deixar de somar participações indiretas, o que esconde quem passa do limite por vários caminhos. E, por fim, não guardar o raciocínio: na fiscalização, a pergunta é como a instituição chegou àquela pessoa.</p>

<h2>Como a kycert trata</h2>
<p>A <a href="/produto/kyb">verificação KYB</a> da kycert percorre o quadro societário, segue a participação por holdings intermediárias até a pessoa física e verifica cada nó contra listas restritivas. A cadeia aparece no <a href="/produto/dossie-de-risco">Dossiê de Risco</a>, com o status de cada participante. Quando a estrutura impede chegar a uma pessoa física, o ponto é sinalizado para análise humana, sem presumir. O critério de participação e a decisão final seguem a regra da instituição. Veja o aprofundamento em <a href="/blog/beneficiario-final-ubo-kyb">beneficiário final (UBO) no KYB</a>.</p>
`,
  faq: [
    {
      q: 'UBO é a mesma coisa que sócio?',
      a: 'Não. Sócio é quem aparece no quadro societário e pode ser outra empresa. UBO é sempre uma pessoa física, identificada ao final da cadeia, que controla ou se beneficia da empresa.',
    },
    {
      q: 'Qual o percentual para ser considerado beneficiário final?',
      a: 'As normas adotam um critério de participação (25% é o parâmetro usual) e também consideram o controle por outros meios. Confira o texto aplicável ao seu setor.',
    },
    {
      q: 'O que fazer se não for possível identificar o UBO?',
      a: 'Documentar as tentativas, classificar o cliente em risco mais alto, aplicar diligência reforçada e decidir, por alçada adequada, se o relacionamento prossegue.',
    },
  ],
  relatedTerms: ['kyb', 'pep', 'cdd-edd', 'kyc', 'pld-ft'],
  relatedPosts: ['beneficiario-final-ubo-kyb', 'kyb-para-psav-exchanges', 'comprovar-pld-ft-fiscalizacao-bacen'],
  solutions: [
    { href: '/produto/kyb', label: 'Verificação KYB até o beneficiário final' },
    { href: '/produto/dossie-de-risco', label: 'Dossiê de Risco' },
    { href: '/dossie-exemplo', label: 'Dossiê de exemplo' },
  ],
};

export default term;
