import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "Fraude documental no onboarding: tipos e como prevenir",
  description:
    "Documento adulterado, de terceiro, identidade sintética e deepfake: veja os tipos de fraude documental no onboarding, o que a regulação exige e os controles em camadas.",
  alternates: { canonical: "/blog/fraude-documental-onboarding" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/fraude-documental-onboarding",
    siteName: 'kycert',
    title: "Fraude documental no onboarding: tipos e como prevenir | kycert",
    description:
      "Documento adulterado, de terceiro, identidade sintética e deepfake: veja os tipos de fraude documental no onboarding, o que a regulação exige e os controles em camadas.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fraude documental no onboarding: tipos e como prevenir | kycert",
    description:
      "Documento adulterado, de terceiro, identidade sintética e deepfake: veja os tipos de fraude documental no onboarding, o que a regulação exige e os controles em camadas.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Fraude documental no onboarding: tipos, sinais e controles em camadas","description":"Documento adulterado, de terceiro, identidade sintética e deepfake: veja os tipos de fraude documental no onboarding, o que a regulação exige e os controles em camadas.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/fraude-documental-onboarding","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é fraude documental?","acceptedAnswer":{"@type":"Answer","text":"É o uso de documento falso, adulterado ou de outra pessoa, ou de identidade fabricada, para abrir conta ou iniciar relacionamento com uma instituição."}},{"@type":"Question","name":"O que é identidade sintética?","acceptedAnswer":{"@type":"Answer","text":"É uma identidade criada combinando dados reais (como um CPF válido) com dados inventados (nome, foto, endereço), formando uma \\"pessoa\\" que não existe."}},{"@type":"Question","name":"A instituição é obrigada a validar documentos?","acceptedAnswer":{"@type":"Answer","text":"Sim. A Circular 3.978 exige verificar e validar a autenticidade das informações de identificação (art. 16, § 1º), e a Res. CMN 4.753 exige o mesmo na abertura de contas de depósito (art. 2º)."}},{"@type":"Question","name":"O que fazer ao descobrir que uma conta foi aberta com documento falso?","acceptedAnswer":{"@type":"Answer","text":"Para contas de depósito, a Res. CMN 4.753 manda encerrar a conta em caso de irregularidade grave (art. 6º). Também é preciso registrar o indício na base compartilhada de fraude (Res. Conjunta 6) e avaliar a comunicação ao Coaf e às autoridades."}},{"@type":"Question","name":"Prova de vida resolve a fraude documental?","acceptedAnswer":{"@type":"Answer","text":"Não sozinha. Ela combate ataques à biometria, mas não identifica documento verdadeiro de terceiro aliciado nem inconsistências de qualificação. Por isso o controle precisa ser em camadas."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Fraude documental"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Fraude documental</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Fraude / onboarding</div>
<h1>Fraude documental no onboarding: tipos, sinais e controles em camadas</h1>
<div class="art-meta"><span>Fraude documental</span><span>01/10/2026</span><span>8 min de leitura</span></div>
<p class="lead-p"><strong>Fraude documental no onboarding é a tentativa de abrir uma conta ou iniciar um relacionamento usando um documento falso, adulterado ou de outra pessoa</strong>, ou uma identidade que não corresponde a ninguém real. É o ponto de entrada mais comum para <a href="/blog/contas-laranja-contas-de-passagem">contas laranja</a>, golpes e lavagem de dinheiro.</p>
<p>Com o onboarding 100% digital, o documento deixou de ser checado por alguém frente a frente. A defesa passou a ser um conjunto de verificações automáticas e humanas. A regulação exige que essas verificações existam e funcionem.</p>
<h2>O que a regulação exige</h2>
<ul><li><strong>Circular BCB 3.978/2020, art. 16, § 1º:</strong> a identificação do cliente deve incluir a <strong>obtenção, verificação e validação da autenticidade</strong> das informações de identificação, inclusive, se necessário, por confrontação com bancos de dados públicos e privados.</li><li><strong>Res. CMN 4.753/2019, art. 2º:</strong> na abertura de conta de depósitos, a instituição deve verificar e validar a identidade e a qualificação dos titulares e <strong>a autenticidade das informações fornecidas</strong>. A abertura pode ser feita por meios eletrônicos, mas não por canal de telefonia por voz (art. 3º).</li><li><strong>Res. CMN 4.753/2019, art. 6º:</strong> a conta deve ser <strong>encerrada</strong> quando forem constatadas irregularidades graves nas informações prestadas.</li><li><strong>Circular 3.978, art. 23:</strong> não se inicia relação de negócio sem identificação concluída.</li><li><strong>Res. Conjunta nº 6/2023:</strong> obriga o <strong>compartilhamento de indícios de fraude</strong> entre as instituições. Uma identidade fraudulenta detectada em uma instituição pode ser conhecida pelas outras.</li></ul>
<p>Ou seja: <strong>coletar o documento não cumpre a norma. Validar cumpre.</strong></p>
<h2>Os tipos de fraude documental</h2>
<div class="art-table"><table><thead><tr><th>Tipo</th><th>Como funciona</th><th>Onde aparece</th></tr></thead><tbody><tr><td>Documento adulterado</td><td>Documento real com dados alterados (foto, nome, data de nascimento)</td><td>Edição da imagem ou do documento físico</td></tr><tr><td>Documento falsificado</td><td>Documento inteiramente fabricado, que imita o modelo oficial</td><td>Modelos vendidos em mercados ilícitos</td></tr><tr><td>Documento de terceiro</td><td>Documento verdadeiro de outra pessoa, perdido, roubado, vazado ou "alugado"</td><td>Vazamento de dados, aliciamento para contas laranja</td></tr><tr><td>Identidade sintética</td><td>Combinação de dados reais e fictícios (CPF válido com nome e foto inventados) que cria uma "pessoa" nova</td><td>Cadastros em série</td></tr><tr><td>Ataque à biometria</td><td>Foto de foto, vídeo reproduzido em tela, máscara ou *deepfake* para passar pela selfie ou prova de vida</td><td>Etapa de selfie e liveness</td></tr><tr><td>Comprovante falso</td><td>Comprovante de endereço ou de renda fabricado</td><td>Etapa de qualificação</td></tr></tbody></table></div>
<p>O documento de terceiro e a identidade sintética são os mais difíceis de pegar só olhando a imagem, porque o documento pode ser autêntico. O que os denuncia é a <strong>inconsistência entre as fontes</strong>.</p>
<h2>Sinais de alerta</h2>
<ul><li>dados do documento que não batem com bases oficiais ou privadas (nome x CPF, data de nascimento, situação do CPF);</li><li>fonte, espaçamento ou alinhamento inconsistentes no documento;</li><li>foto do documento sem relação com a selfie;</li><li>metadados ou sinais de edição na imagem;</li><li>selfie com reflexo de tela, bordas de papel ou movimento artificial;</li><li>mesmo documento, rosto, dispositivo ou contato usados em vários cadastros;</li><li>renda e ocupação declaradas incompatíveis com idade, região ou perfil;</li><li>comprovantes com layout diferente do padrão do emissor.</li></ul>
<h2>Controles em camadas</h2>
<p>Nenhuma checagem sozinha resolve. O desenho que funciona combina camadas, e cada uma pega o que a anterior deixa passar:</p>
<ol><li><strong>Captura guiada e leitura automática.</strong> OCR para extrair os dados do documento, reduzir erro de digitação e ter o dado estruturado para comparar.</li><li><strong>Validação de dados contra bases.</strong> CPF e nome conferidos com fontes públicas e privadas, como pede a Circular 3.978.</li><li><strong>Análise do documento.</strong> Checagens de integridade e de consistência visual do modelo.</li><li><strong>Biometria e prova de vida.</strong> Comparação entre a selfie e a foto do documento, com detecção de ataque de apresentação.</li><li><strong>Sinais de vínculo e dispositivo.</strong> Detectar reutilização de rosto, documento, aparelho, telefone e e-mail entre cadastros.</li><li><strong>Consulta a bases de fraude compartilhadas</strong> (Res. Conjunta 6) e a listas de <a href="/blog/listas-de-sancoes-lei-13810">sanções</a> e <a href="/blog/pessoa-exposta-politicamente-pep">PEP</a>.</li><li><strong>Coerência da qualificação.</strong> Renda, ocupação e uso pretendido fazem sentido juntos?</li><li><strong>Revisão humana dos casos limítrofes,</strong> com critério escrito.</li><li><strong>Registro da decisão.</strong> O que foi checado, o resultado de cada camada e quem aprovou ou recusou.</li></ol>
<p>A camada 9 costuma ser esquecida. Ela é o que permite:</p>
<ul><li>encerrar uma conta com base em irregularidade grave (Res. 4.753, art. 6º) e defender a decisão;</li><li>alimentar a base compartilhada de fraude;</li><li>mostrar à fiscalização que o KYC valida, e não só coleta.</li></ul>
<h2>Proporcionalidade: nem todo cliente precisa de todas as camadas</h2>
<p>A Circular 3.978 pede procedimentos compatíveis com o perfil de risco. Um cliente com limite baixo e perfil simples pode passar por um fluxo mais leve. Um cliente com expectativa de alto volume, <a href="/blog/kyc-kyb-kyt-diferencas">pessoa jurídica</a> ou operação em cripto e câmbio pede camadas adicionais. A política deve dizer qual fluxo se aplica a qual perfil, e por quê.</p>
<h2>Perguntas frequentes</h2>
<h3>O que é fraude documental?</h3>
<p>É o uso de documento falso, adulterado ou de outra pessoa, ou de identidade fabricada, para abrir conta ou iniciar relacionamento com uma instituição.</p>
<h3>O que é identidade sintética?</h3>
<p>É uma identidade criada combinando dados reais (como um CPF válido) com dados inventados (nome, foto, endereço), formando uma "pessoa" que não existe.</p>
<h3>A instituição é obrigada a validar documentos?</h3>
<p>Sim. A Circular 3.978 exige verificar e validar a autenticidade das informações de identificação (art. 16, § 1º), e a Res. CMN 4.753 exige o mesmo na abertura de contas de depósito (art. 2º).</p>
<h3>O que fazer ao descobrir que uma conta foi aberta com documento falso?</h3>
<p>Para contas de depósito, a Res. CMN 4.753 manda encerrar a conta em caso de irregularidade grave (art. 6º). Também é preciso registrar o indício na base compartilhada de fraude (Res. Conjunta 6) e avaliar a comunicação ao Coaf e às autoridades.</p>
<h3>Prova de vida resolve a fraude documental?</h3>
<p>Não sozinha. Ela combate ataques à biometria, mas não identifica documento verdadeiro de terceiro aliciado nem inconsistências de qualificação. Por isso o controle precisa ser em camadas.</p>
<h2>Conclusão</h2>
<p>Fraude documental se combate com <strong>consistência entre fontes</strong>: documento, bases de dados, biometria, sinais de vínculo e qualificação contando a mesma história. Quando algo não bate, a decisão precisa ficar registrada, com o que foi checado e por quê. É assim que a instituição encerra contas com segurança, alimenta a base compartilhada e responde à fiscalização.</p>
<div class="art-cta"><p><strong>Cadastro sem digitação, validação com fonte.</strong> A kycert captura documentos por OCR, cruza os dados com as fontes de verificação e guarda o resultado e a decisão no Dossiê de Risco.</p><div class="cta"><a href="/produto/ocr" class="btn btn-primary btn-lg">OCR de documentos e cadastro sem digitação</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/o-que-e-kyc">O que é KYC →</a><a href="/blog/contas-laranja-contas-de-passagem">Contas laranja e contas de passagem →</a><a href="/blog/abertura-conta-fintech-kyb-escala">Abertura de conta em fintech →</a></div>
</article></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="recursos" />
      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: FAQ_JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
