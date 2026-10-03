import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: "Listas de sanções: o que a Lei 13.810 exige das empresas",
  description:
    "Como funcionam as listas de sanções no Brasil: Lei 13.810, Res. BCB 44, bloqueio imediato, comunicação a BC, MJSP e Coaf, listas estrangeiras e carteiras sancionadas.",
  alternates: { canonical: "/blog/listas-de-sancoes-lei-13810" },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: "/blog/listas-de-sancoes-lei-13810",
    siteName: 'kycert',
    title: "Listas de sanções: o que a Lei 13.810 exige das empresas | kycert",
    description:
      "Como funcionam as listas de sanções no Brasil: Lei 13.810, Res. BCB 44, bloqueio imediato, comunicação a BC, MJSP e Coaf, listas estrangeiras e carteiras sancionadas.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Listas de sanções: o que a Lei 13.810 exige das empresas | kycert",
    description:
      "Como funcionam as listas de sanções no Brasil: Lei 13.810, Res. BCB 44, bloqueio imediato, comunicação a BC, MJSP e Coaf, listas estrangeiras e carteiras sancionadas.",
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Listas de sanções: o que a Lei 13.810 e a Resolução BCB 44 exigem na prática","description":"Como funcionam as listas de sanções no Brasil: Lei 13.810, Res. BCB 44, bloqueio imediato, comunicação a BC, MJSP e Coaf, listas estrangeiras e carteiras sancionadas.","inLanguage":"pt-BR","datePublished":"2026-10-01","dateModified":"2026-10-01","mainEntityOfPage":"https://kycert.com.br/blog/listas-de-sancoes-lei-13810","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;
const FAQ_JSONLD = `{"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"O que é a Lei 13.810/2019?","acceptedAnswer":{"@type":"Answer","text":"É a lei que trata do cumprimento das sanções do Conselho de Segurança da ONU, incluindo a indisponibilidade de ativos, e da designação nacional de pessoas investigadas ou acusadas de terrorismo."}},{"@type":"Question","name":"Em quanto tempo devo bloquear os ativos de um sancionado?","acceptedAnswer":{"@type":"Answer","text":"Sem demora, que a lei define como \\"imediatamente ou dentro de algumas horas\\" (art. 2º, V)."}},{"@type":"Question","name":"Preciso esperar o Banco Central me avisar?","acceptedAnswer":{"@type":"Answer","text":"Não. A Res. BCB 44 exige que a instituição monitore as determinações e cumpra independentemente da comunicação do Banco Central (art. 2º)."}},{"@type":"Question","name":"Para quem comunico um bloqueio?","acceptedAnswer":{"@type":"Answer","text":"Ao Banco Central (BC Correio), ao Ministério da Justiça e Segurança Pública e ao Coaf, imediatamente, incluindo tentativas de transferência (Res. BCB 44, art. 4º)."}},{"@type":"Question","name":"A lista do OFAC é obrigatória no Brasil?","acceptedAnswer":{"@type":"Answer","text":"Não por força da Lei 13.810, que trata das sanções da ONU. É, porém, prática de mercado e fator de risco relevante, e a Res. BCB 520 exige que as PSAVs controlem listas de sanções e carteiras sancionadas \\"no país ou no exterior\\"."}}]}`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Blog","path":"/blog"},{"name":"Sanções"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">Sanções</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">PLD/FT / sanções</div>
<h1>Listas de sanções: o que a Lei 13.810 e a Resolução BCB 44 exigem na prática</h1>
<div class="art-meta"><span>Sanções</span><span>01/10/2026</span><span>8 min de leitura</span></div>
<p class="lead-p"><strong>Listas de sanções são relações oficiais de pessoas, empresas e entidades sujeitas a medidas restritivas</strong>, como o bloqueio de bens, por envolvimento com terrorismo, proliferação de armas ou outras ameaças à segurança internacional.</p>
<p>No Brasil, a obrigação central vem da <strong><a href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2019/lei/l13810.htm" target="_blank" rel="noopener">Lei 13.810/2019</a></strong>: cumprir, <strong>sem demora e sem aviso prévio ao sancionado</strong>, as determinações de indisponibilidade de ativos do Conselho de Segurança das Nações Unidas (CSNU). Para as instituições autorizadas pelo Banco Central, o procedimento está na <strong><a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?tipo=Resolu%C3%A7%C3%A3o%20BCB&amp;numero=44" target="_blank" rel="noopener">Resolução BCB 44/2020</a></strong>.</p>
<h2>O que diz a Lei 13.810</h2>
<ul><li><strong>Quem cumpre:</strong> todas as pessoas sujeitas à Lei 9.613 (art. 9º). Isso inclui instituições financeiras, IPs, câmbio e, desde 2022, prestadoras de serviços de ativos virtuais.</li><li><strong>O quê:</strong> a <strong>indisponibilidade de ativos</strong>, ou seja, a proibição de transferir, converter, trasladar, disponibilizar ou dispor dos ativos, direta ou indiretamente (art. 2º, II).</li><li><strong>Quando:</strong> <strong>sem demora</strong>. A lei define o termo: "imediatamente ou dentro de algumas horas" (art. 2º, V).</li><li><strong>Sem prévio aviso</strong> à pessoa sancionada (art. 9º).</li><li><strong>Ativos</strong> são definidos de forma ampla: bens, direitos, valores, fundos, recursos ou serviços, financeiros ou não. Ativos virtuais estão incluídos.</li></ul>
<h2>O passo a passo da Resolução BCB 44</h2>
<div class="art-table"><table><thead><tr><th>Obrigação</th><th>O que fazer</th><th>Artigo</th></tr></thead><tbody><tr><td>Cumprir imediatamente</td><td>Tornar indisponíveis os ativos de titularidade direta ou indireta dos sancionados pelo CSNU e pelos seus comitês</td><td>Art. 1º</td></tr><tr><td>Monitorar por conta própria</td><td>Acompanhar as designações <strong>independentemente</strong> de comunicação do Banco Central</td><td>Art. 2º</td></tr><tr><td>Conferir a comunicação do BC</td><td>Ao receber o aviso pelo BC Correio, verificar se as medidas já foram tomadas e tomá-las se necessário</td><td>Art. 3º</td></tr><tr><td>Comunicar o bloqueio</td><td>Informar imediatamente a indisponibilidade <strong>e as tentativas de transferência</strong> ao Banco Central (BC Correio), ao Ministério da Justiça e Segurança Pública e ao Coaf</td><td>Art. 4º</td></tr><tr><td>Comunicar o não cumprimento</td><td>Se deixar de cumprir de imediato, informar o MJSP sem demora, com as razões</td><td>Art. 5º</td></tr><tr><td>Adequar controles</td><td>Ajustar sistemas de controles internos para cumprir a lei</td><td>Art. 6º</td></tr><tr><td>Alcance</td><td>Vale para relações existentes e para as que vierem a ser iniciadas com sancionados</td><td>Art. 7º</td></tr></tbody></table></div>
<p>O art. 2º é o que mais pesa. <strong>A instituição não pode esperar o Banco Central avisar.</strong> Ela precisa acompanhar as listas e reagir sozinha, em horas.</p>
<p>Além disso, comunicações ao Coaf relativas a pessoas que reconhecidamente praticaram ou tentaram praticar atos terroristas devem trazer essa indicação (Circular 3.978, art. 53, II).</p>
<h2>Listas nacionais, da ONU e estrangeiras</h2>
<div class="art-table"><table><thead><tr><th>Lista</th><th>Caráter no Brasil</th></tr></thead><tbody><tr><td><a href="https://main.un.org/securitycouncil/en/content/un-sc-consolidated-list" target="_blank" rel="noopener">Lista consolidada do Conselho de Segurança da ONU</a></td><td><strong>Obrigatória</strong>: cumprimento imediato pela Lei 13.810</td></tr><tr><td>Designações nacionais e determinações judiciais previstas na Lei 13.810</td><td><strong>Obrigatórias</strong></td></tr><tr><td>OFAC (EUA), União Europeia, Reino Unido e outras</td><td>Não têm força de lei no Brasil, mas pesam como fator de risco</td></tr></tbody></table></div>
<blockquote><p><strong>Fato vs. interpretação:</strong> a Lei 13.810 trata das sanções do CSNU e das designações nacionais. Listas estrangeiras como a do OFAC não geram, por si só, obrigação legal de bloqueio no Brasil. Na prática, porém, a maioria das instituições faz a triagem nessas listas como parte da gestão de risco. Os motivos: bancos correspondentes e parceiros internacionais exigem isso, e operar com sancionados por outras jurisdições expõe a instituição a risco reputacional e de contraparte. A Res. BCB 520 aponta nessa direção para as PSAVs ao exigir controles para identificar "listas de sanções e endereços de carteiras de ativos virtuais sancionadas, no país ou no exterior" (art. 34, III).</p></blockquote>
<h2>Sanções no mercado de cripto</h2>
<p>Para as PSAVs, sanções não se resumem a nomes. A lista SDN do OFAC, por exemplo, inclui <strong>endereços de criptoativos</strong> nos registros de pessoas e entidades sancionadas. Por isso:</p>
<ul><li>a triagem precisa cobrir <strong>nomes</strong> (no <a href="/blog/o-que-e-kyc">KYC</a>) e <strong>endereços de carteira</strong> (na <a href="/blog/analise-de-carteiras-cripto">análise de carteiras</a>);</li><li>a Res. BCB 520 exige que a PSAV estabeleça, junto com os prestadores relevantes que contrata, controles para identificar listas de sanções e carteiras sancionadas (art. 34, III);</li><li>no pedido de autorização, as PSAVs que já operavam precisam comprovar os procedimentos para executar as medidas da Lei 13.810 (art. 88, II, "d").</li></ul>
<h2>Como montar o screening de sanções</h2>
<ol><li><strong>Defina as listas.</strong> As obrigatórias (CSNU e nacionais) e as que entram por decisão de risco (OFAC, UE, Reino Unido). Registre essa decisão na política.</li><li><strong>Triagem no onboarding.</strong> Cliente, beneficiários finais, administradores e representantes.</li><li><strong>Re-screening contínuo.</strong> As listas mudam. Um cliente aprovado hoje pode ser designado amanhã. A base inteira precisa ser cruzada a cada atualização relevante, e não só na renovação do cadastro.</li><li><strong>Triagem de transações.</strong> Contrapartes de pagamentos e, em cripto, endereços de origem e destino.</li><li><strong>Tratamento de homônimos.</strong> Correspondência aproximada de nomes gera falsos positivos. Defina critérios de desempate (data de nascimento, documento, nacionalidade) e registre por que cada alerta foi descartado.</li><li><strong>Procedimento de bloqueio.</strong> Quem bloqueia, em quanto tempo, como se comunica ao BC, ao MJSP e ao Coaf. Escreva e teste antes de precisar.</li><li><strong>Registro.</strong> Cada consulta, cada resultado e cada decisão, com data e responsável.</li></ol>
<h2>Perguntas frequentes</h2>
<h3>O que é a Lei 13.810/2019?</h3>
<p>É a lei que trata do cumprimento das sanções do Conselho de Segurança da ONU, incluindo a indisponibilidade de ativos, e da designação nacional de pessoas investigadas ou acusadas de terrorismo.</p>
<h3>Em quanto tempo devo bloquear os ativos de um sancionado?</h3>
<p>Sem demora, que a lei define como "imediatamente ou dentro de algumas horas" (art. 2º, V).</p>
<h3>Preciso esperar o Banco Central me avisar?</h3>
<p>Não. A Res. BCB 44 exige que a instituição monitore as determinações e cumpra independentemente da comunicação do Banco Central (art. 2º).</p>
<h3>Para quem comunico um bloqueio?</h3>
<p>Ao Banco Central (BC Correio), ao Ministério da Justiça e Segurança Pública e ao Coaf, imediatamente, incluindo tentativas de transferência (Res. BCB 44, art. 4º).</p>
<h3>A lista do OFAC é obrigatória no Brasil?</h3>
<p>Não por força da Lei 13.810, que trata das sanções da ONU. É, porém, prática de mercado e fator de risco relevante, e a Res. BCB 520 exige que as PSAVs controlem listas de sanções e carteiras sancionadas "no país ou no exterior".</p>
<h2>Conclusão</h2>
<p>Sanções são a parte do PLD/FT com o prazo mais curto: <strong>horas</strong>, não dias. Isso só funciona com triagem no onboarding, re-screening contínuo da base, procedimento de bloqueio e comunicação escrito e testado, e registro de cada decisão, inclusive dos homônimos descartados.</p>
<div class="art-cta"><p><strong>Um cliente aprovado hoje pode entrar numa lista amanhã.</strong> A kycert faz a triagem de sanções e PEP no onboarding, refaz o screening a cada ciclo e registra cada reverificação no dossiê.</p><div class="cta"><a href="/produto/monitoramento" class="btn btn-primary btn-lg">Reverificação e re-screening de sanções</a><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver dossiê de exemplo</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/pessoa-exposta-politicamente-pep">Pessoa exposta politicamente (PEP) →</a><a href="/blog/o-que-e-pld-ft">O que é PLD/FT →</a><a href="/blog/analise-de-carteiras-cripto">Análise de carteiras cripto →</a></div>
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
