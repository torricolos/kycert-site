import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "Contas laranja e de passagem: como identificar e prevenir",
  description:
    "Contas laranja e de passagem escoam golpes e lavagem. Veja os sinais de alerta, o novo crime de cessão de conta laranja, a Res. BCB 501 e os controles de onboarding.",
  alternates: { canonical: "/blog/contas-laranja-contas-de-passagem" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/contas-laranja-contas-de-passagem",
    siteName: 'kycert',
    title: "Contas laranja e de passagem: como identificar e prevenir | kycert",
    description:
      "Contas laranja e de passagem escoam golpes e lavagem. Veja os sinais de alerta, o novo crime de cessão de conta laranja, a Res. BCB 501 e os controles de onboarding.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contas laranja e de passagem: como identificar e prevenir | kycert",
    description:
      "Contas laranja e de passagem escoam golpes e lavagem. Veja os sinais de alerta, o novo crime de cessão de conta laranja, a Res. BCB 501 e os controles de onboarding.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Contas laranja e contas de passagem: sinais de alerta e como prevenir","description":"Contas laranja e de passagem escoam golpes e lavagem. Veja os sinais de alerta, o novo crime de cessão de conta laranja, a Res. BCB 501 e os controles de onboarding.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/contas-laranja-contas-de-passagem","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é conta laranja?","acceptedAnswer":{"@type":"Answer","text":"É uma conta aberta ou cedida por uma pessoa para que terceiros movimentem recursos ilícitos em seu nome, geralmente produto de golpes e fraudes."}},{"@type":"Question","name":"Qual a diferença entre conta laranja e conta de passagem?","acceptedAnswer":{"@type":"Answer","text":"Conta laranja descreve quem controla a conta: um terceiro, não o titular. Conta de passagem descreve o comportamento: recursos entram e saem rapidamente. Muitas contas laranja funcionam como contas de passagem."}},{"@type":"Question","name":"Ceder a conta é crime?","acceptedAnswer":{"@type":"Answer","text":"Sim. Desde a Lei 15.397/2026, ceder conta bancária, gratuita ou onerosamente, para trânsito de recursos de atividade criminosa é modalidade de estelionato (art. 171, § 2º, VII, do Código Penal)."}},{"@type":"Question","name":"O banco pode bloquear transferências para uma conta suspeita?","acceptedAnswer":{"@type":"Answer","text":"A Res. BCB 142 (art. 2º-A, incluído pela Res. BCB 501/2025) determina que as instituições rejeitem transações destinadas a contas com fundada suspeita de envolvimento em fraude, comunicando o titular."}},{"@type":"Question","name":"Como identificar uma conta laranja no onboarding?","acceptedAnswer":{"@type":"Answer","text":"Os sinais mais comuns são incompatibilidade entre perfil e uso pretendido, dados de contato e dispositivo reutilizados, cadastros em série e documentos com indício de manipulação."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Contas laranja"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Contas laranja</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Fraude / risco</div>
<h1>Contas laranja e contas de passagem: sinais de alerta e como prevenir</h1>
<div class="art-meta"><span>Contas laranja</span><span>01/10/2026</span><span>8 min de leitura</span></div>
<p class="lead-p"><strong>Conta laranja é uma conta aberta ou cedida por uma pessoa para que terceiros movimentem recursos em seu nome</strong>, em geral dinheiro de golpes, fraudes ou outros crimes. <strong>Conta de passagem</strong> descreve o comportamento: o dinheiro entra e sai rapidamente, sem permanecer, como num túnel.</p>
<p>Na prática, os dois conceitos se sobrepõem. A maioria das contas laranja funciona como conta de passagem. Fora do Brasil, o termo comum é *money mule account*.</p>
<p>Para a instituição, o problema é duplo:</p>
<ul><li>a conta laranja é o <strong>canal de escoamento</strong> de golpes como o do Pix, do falso parente e do falso investimento;</li><li>é também a <strong>porta de entrada</strong> para a lavagem, na fase de ocultação.</li></ul>
<h2>O que mudou na lei e na regulação</h2>
<h3>Cessão de conta laranja virou crime</h3>
<p>A <a href="https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2026/lei/L15397.htm" target="_blank" rel="noopener">Lei 15.397, de 30 de abril de 2026</a>, incluiu no Código Penal, como modalidade de estelionato (art. 171, § 2º, VII), a conduta de quem <strong>"cede, gratuita ou onerosamente, conta bancária para que nela transitem recursos destinados ao financiamento de atividade criminosa ou que dela sejam fruto"</strong>. A pena é a do estelionato: reclusão de 1 a 5 anos e multa.</p>
<p>A mudança tem efeito direto no relacionamento com o cliente. O titular que "aluga" a conta deixa de ser só vítima de aliciamento e pode responder criminalmente.</p>
<h3>Rejeição de transações para contas com fundada suspeita</h3>
<p>A <strong>Res. BCB 501/2025</strong> incluiu o art. 2º-A na <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&amp;numero=142" target="_blank" rel="noopener">Res. BCB 142/2021</a>. As instituições passam a ter de <strong>rejeitar transações de pagamento destinadas a contas com fundada suspeita de envolvimento em fraude</strong>, incluindo Pix, TED e transferências internas.</p>
<p>A avaliação da fundada suspeita usa fatores definidos por cada instituição e pode usar bases públicas e privadas. O titular da conta deve ser informado da medida.</p>
<h3>Compartilhamento de dados de fraude</h3>
<p>A <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20Conjunta&amp;numero=6" target="_blank" rel="noopener">Resolução Conjunta nº 6/2023</a>, em vigor desde 1º/11/2023, obriga as instituições a <strong>compartilhar dados sobre indícios de fraude</strong> entre si, por sistema eletrônico, e a consultar essas informações. Uma conta laranja identificada em uma instituição pode ser conhecida pelas demais.</p>
<h3>Encerramento de conta</h3>
<p>Para contas de depósito, a Res. CMN 4.753/2019 exige o <strong>encerramento da conta</strong> quando a instituição constatar irregularidades graves nas informações prestadas (art. 6º).</p>
<h2>Sinais de alerta no onboarding</h2>
<ul><li><strong>Perfil incompatível com o uso pretendido:</strong> renda declarada baixa ou ocupação genérica, com expectativa de movimentação alta.</li><li><strong>Dados de contato reutilizados:</strong> mesmo telefone, e-mail, dispositivo ou endereço em várias contas.</li><li><strong>Cadastros em série:</strong> várias aberturas em pouco tempo, com padrão parecido (mesma faixa etária, mesma região, mesmo horário).</li><li><strong>Documento ou selfie com sinais de manipulação</strong>, ou documento de outra pessoa. Veja <a href="/blog/fraude-documental-onboarding">fraude documental no onboarding</a>.</li><li><strong>Contas de jovens ou pessoas vulneráveis</strong> recém-abertas, perfil frequentemente alvo de aliciamento.</li><li><strong>Pessoa jurídica recém-constituída</strong>, sem atividade verificável, com sócio de baixa capacidade financeira. É a versão PJ da conta laranja, que só um <a href="/blog/abertura-conta-fintech-kyb-escala">KYB</a> cuidadoso pega.</li></ul>
<h2>Sinais de alerta no comportamento transacional</h2>
<div class="art-table"><table><thead><tr><th>Padrão</th><th>Descrição</th></tr></thead><tbody><tr><td>Passagem rápida</td><td>Recursos recebidos são transferidos em minutos ou horas, com saldo voltando a perto de zero</td></tr><tr><td>Muitos remetentes, poucos destinos</td><td>Dezenas de Pix de pessoas diferentes concentrados e repassados a uma ou poucas contas</td></tr><tr><td>Incompatibilidade com o perfil</td><td>Volume muito acima da renda ou do faturamento declarado (Circular 3.978, art. 39, I, "c")</td></tr><tr><td>Conta dormente que acorda</td><td>Conta sem uso que passa a movimentar alto volume de repente</td></tr><tr><td>Horários atípicos</td><td>Concentração de movimentação de madrugada</td></tr><tr><td>Saída para cripto</td><td>Recursos de várias origens convertidos em stablecoin e enviados para fora</td></tr><tr><td>Contestação e MED</td><td>Recebimento de valores que depois são contestados como golpe</td></tr></tbody></table></div>
<p>Esses padrões são a base dos cenários de <a href="/blog/monitoramento-de-transacoes-pld">monitoramento de transações</a>. A Circular 3.978 também manda dar atenção às operações que, pela habitualidade, valor ou forma, tentam burlar os controles (art. 39, I, "a").</p>
<h2>O ângulo cripto: Pix → USDT → exterior</h2>
<p>Um padrão que preocupa reguladores e o mercado é o uso de contas de passagem para receber recursos de golpes via Pix, converter rapidamente em <a href="/blog/usdt-stablecoins-risco-compliance">stablecoins</a> e enviar para exchanges estrangeiras ou carteiras autocustodiadas, fora do alcance de bloqueio.</p>
<p>O motivo declarado da <a href="/blog/resolucao-bcb-584-retencao-24h-cripto">retenção de 24h da Res. BCB 584</a>, que começa em janeiro de 2027, é justamente dificultar esse escoamento. Para PSAVs e IPs que fazem a ponte entre reais e cripto, a análise do cliente de origem e o monitoramento da velocidade de entrada e saída são os controles centrais.</p>
<h2>Como prevenir: controles em camadas</h2>
<ol><li><strong>KYC que valida, não só coleta.</strong> Identidade confirmada com bases de dados, documento e biometria, qualificação com renda e ocupação plausíveis. Veja <a href="/blog/o-que-e-kyc">o que é KYC</a>.</li><li><strong>Limites iniciais proporcionais ao risco.</strong> Conta nova com limite compatível com o perfil, ampliado com histórico.</li><li><strong>Sinais de dispositivo e de vínculo</strong> entre cadastros para detectar operação em série.</li><li><strong>Consulta às bases compartilhadas</strong> de fraude (Res. Conjunta 6).</li><li><strong>Monitoramento com cenários de passagem</strong> e concentração de contrapartes.</li><li><strong>Procedimento para fundada suspeita:</strong> critérios escritos para rejeitar transações (Res. BCB 142, art. 2º-A), comunicar o titular, encerrar a conta quando cabível e avaliar a comunicação ao Coaf.</li><li><strong>Registro de cada decisão,</strong> para defender o bloqueio diante do cliente e da fiscalização.</li></ol>
<h2>Perguntas frequentes</h2>
<h3>O que é conta laranja?</h3>
<p>É uma conta aberta ou cedida por uma pessoa para que terceiros movimentem recursos ilícitos em seu nome, geralmente produto de golpes e fraudes.</p>
<h3>Qual a diferença entre conta laranja e conta de passagem?</h3>
<p>Conta laranja descreve quem controla a conta: um terceiro, não o titular. Conta de passagem descreve o comportamento: recursos entram e saem rapidamente. Muitas contas laranja funcionam como contas de passagem.</p>
<h3>Ceder a conta é crime?</h3>
<p>Sim. Desde a Lei 15.397/2026, ceder conta bancária, gratuita ou onerosamente, para trânsito de recursos de atividade criminosa é modalidade de estelionato (art. 171, § 2º, VII, do Código Penal).</p>
<h3>O banco pode bloquear transferências para uma conta suspeita?</h3>
<p>A Res. BCB 142 (art. 2º-A, incluído pela Res. BCB 501/2025) determina que as instituições rejeitem transações destinadas a contas com fundada suspeita de envolvimento em fraude, comunicando o titular.</p>
<h3>Como identificar uma conta laranja no onboarding?</h3>
<p>Os sinais mais comuns são incompatibilidade entre perfil e uso pretendido, dados de contato e dispositivo reutilizados, cadastros em série e documentos com indício de manipulação.</p>
<h2>Conclusão</h2>
<p>A conta laranja é um problema de <strong>onboarding</strong> e de <strong>monitoramento</strong> ao mesmo tempo. Ela entra por um KYC que coleta sem validar e se revela no padrão de passagem. Com o novo crime de cessão de conta, a regra de rejeição de transações e o compartilhamento de dados de fraude, a instituição tem mais instrumentos. Também tem mais obrigação de mostrar que os usou com critério.</p>
<div class="art-cta"><p><strong>Barrar a conta laranja começa no cadastro.</strong> A kycert valida identidade com captura por OCR, cruza fontes e registra o veredito de risco e a decisão de cada onboarding.</p><div class="cta"><a href="/produto/kyc" class="btn btn-primary btn-lg">Verificação de pessoa física (KYC)</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/fraude-documental-onboarding">Fraude documental no onboarding →</a><a href="/blog/monitoramento-de-transacoes-pld">Monitoramento de transações →</a><a href="/blog/usdt-stablecoins-risco-compliance">USDT e stablecoins →</a></div>
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
