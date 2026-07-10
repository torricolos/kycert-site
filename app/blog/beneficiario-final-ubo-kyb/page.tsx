import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Beneficiário final (UBO): o que o KYB exige e como mapear | kycert',
  description:
    'O que é o beneficiário final, por que identificá-lo é obrigação de KYB e como mapear a cadeia societária até a pessoa natural que controla a empresa.',
  alternates: { canonical: '/blog/beneficiario-final-ubo-kyb' },
  openGraph: {
    type: 'article',
    locale: 'pt_BR',
    url: '/blog/beneficiario-final-ubo-kyb',
    siteName: 'kycert',
    title: 'Beneficiário final (UBO): o que o KYB exige e como mapear | kycert',
    description:
      'O que é o beneficiário final, por que identificá-lo é obrigação de KYB e como mapear a cadeia societária até a pessoa natural que controla a empresa.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beneficiário final (UBO): o que o KYB exige e como mapear | kycert',
    description:
      'O que é o beneficiário final, por que identificá-lo é obrigação de KYB e como mapear a cadeia societária até a pessoa natural que controla a empresa.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"Article","headline":"Beneficiário final (UBO): obrigações de KYB e como mapear a cadeia societária","description":"O que é o beneficiário final, por que identificá-lo é obrigação de KYB e como mapear a cadeia societária até a pessoa natural que controla a empresa.","inLanguage":"pt-BR","author":{"@type":"Organization","name":"kycert"},"publisher":{"@type":"Organization","name":"kycert Tecnologia"}}`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><a href="/blog">Blog</a><span class="sep">/</span><span style="color:var(--text-secondary)">KYB</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">KYB / beneficiário final</div>
<h1>Beneficiário final (UBO): obrigações de KYB e como mapear a cadeia societária</h1>
<div class="art-meta"><span>KYB</span><span>02/06/2026</span><span>2 min de leitura</span></div>
<p class="lead-p">A obrigação vai além da empresa: alcança a pessoa natural que efetivamente controla a estrutura por trás dela. E essa cadeia raramente é curta.</p>
<h2>O que é o beneficiário final</h2><p>Beneficiário final, ou UBO (Ultimate Beneficial Owner), é a pessoa natural que, no fim da cadeia societária, controla ou se beneficia de uma empresa. Pode ser o sócio direto, mas com frequência está escondido sob camadas: holdings, empresas que são sócias de outras empresas, participações cruzadas.</p><p>Identificar essa pessoa é o ponto onde o KYB deixa de ser cadastro e vira controle de risco. Uma empresa de fachada limpa pode ter, no topo da estrutura, alguém em lista de sanções ou exposto politicamente.</p><h2>Por que é obrigação</h2><p>A identificação do beneficiário final é dever das instituições reguladas no contexto de PLD/FT. As regras de cadastro e prevenção — entre elas a Resolução BCB 277/2022 para o câmbio e a Circular BCB 3.978/2020 para PLD/FT — exigem que a instituição conheça os seus clientes PJ até quem controla a estrutura por trás da razão social.</p><p>Não chegar ao beneficiário final é uma falha de controle. E é uma falha que aparece com clareza numa fiscalização, porque a cadeia incompleta fica registrada como tal.</p><h2>Onde o mapeamento manual falha</h2><p>Mapear estrutura societária à mão tem três pontos de ruptura. O primeiro é a profundidade: cadeias longas se perdem, e o analista para antes de chegar à pessoa natural. O segundo é a atualização: a estrutura muda, e o mapa feito uma vez envelhece. O terceiro é o registro: mesmo quando o mapeamento é correto, raramente fica gravado de forma que comprove o caminho percorrido.</p><p>O resultado é um nó esquecido — um sócio intermediário que não foi verificado — que vira o apontamento da auditoria.</p><h2>Como mapear a cadeia até o UBO</h2><p>O caminho é automatizar o percurso e registrar cada nó. A kycert percorre a estrutura societária da empresa aos sócios até identificar o beneficiário final, desenha a árvore de controle e aplica screening a cada participante — pessoa física ou jurídica — com status individual por nó.</p><p>A cadeia inteira fica dentro do dossiê PJ: visível, rastreável e apresentável. Você comprova não só quem é o beneficiário final, mas o caminho que levou até ele.</p>
<div class="art-cta"><p>Mapeie a cadeia societária dos seus clientes PJ até o beneficiário final.</p><div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/produto/kyb" class="btn btn-ghost btn-lg">Conhecer a verificação PJ</a></div></div>
<div class="readalso"><h4>Leia também</h4><a href="/blog/comprovar-pld-ft-fiscalizacao-bacen">Como comprovar PLD/FT numa fiscalização →</a><a href="/blog/lei-14286-cambio-cadastro">O que a Lei 14.286/2021 exige no cadastro de câmbio →</a></div>
</article></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="recursos" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
