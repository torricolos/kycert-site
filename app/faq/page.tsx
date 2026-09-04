import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'FAQ e glossário: KYC, PLD/FT e compliance',
  description:
    'Respostas diretas às dúvidas sobre a kycert e um glossário de KYC, KYB, PLD/FT e verificação de identidade para times de compliance de instituições reguladas.',
  alternates: { canonical: '/faq' },
  openGraph: {
    title: 'FAQ e glossário: KYC, PLD/FT e compliance | kycert',
    description:
      'Respostas diretas às dúvidas sobre a kycert e um glossário de KYC, KYB, PLD/FT e verificação de identidade para times de compliance de instituições reguladas.',
    url: '/faq',
  },
  twitter: {
    title: 'FAQ e glossário: KYC, PLD/FT e compliance | kycert',
    description:
      'Respostas diretas às dúvidas sobre a kycert e um glossário de KYC, KYB, PLD/FT e verificação de identidade para times de compliance de instituições reguladas.',
  },
};

const EXTRA_STYLE = `
  .faq-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:34px 0 8px}
  .tab-panel[hidden]{display:none}
  .faq-cta{margin-top:44px;padding:28px 30px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-app);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:18px}
  .faq-cta p{font-size:16px;color:var(--text-primary);max-width:48ch;line-height:1.5}
`;

const JSONLD_FAQ = `{"@context":"https://schema.org","@type":"FAQPage","inLanguage":"pt-BR","mainEntity":[{"@type":"Question","name":"A kycert substitui meu bureau atual?","acceptedAnswer":{"@type":"Answer","text":"Não. O bureau resolve a consulta pontual; a kycert organiza o cliente inteiro (convite, documento, verificações, risco e decisão) em uma trilha auditável. Você pode manter suas fontes e ganhar o registro que comprova como decidiu."}},{"@type":"Question","name":"Vocês são uma empresa nova. Por que eu confiaria a verificação dos meus clientes a vocês?","acceptedAnswer":{"@type":"Answer","text":"A kycert é construída especificamente para o ambiente regulatório brasileiro (câmbio, PSAV, PLD/FT) e trata os dados que você confia como evidência sensível: residência de dados no Brasil, criptografia e trilha de auditoria. Comece por um piloto delimitado e avalie a trilha em casos reais antes de ampliar."}},{"@type":"Question","name":"O dossiê tem mesmo valor numa fiscalização do BACEN?","acceptedAnswer":{"@type":"Answer","text":"O que a fiscalização pede é como você decidiu: identidade verificada, fontes consultadas, risco enquadrado e decisão com autor e data. O dossiê reúne exatamente esses elementos, com autor e data, exportável em PDF. Veja um dossiê de exemplo anonimizado antes de decidir."}},{"@type":"Question","name":"Já temos um processo de KYC. Trocar dá trabalho?","acceptedAnswer":{"@type":"Answer","text":"A kycert convive com o que você já faz: dá para começar por um fluxo ou um segmento de clientes, sem migrar tudo de uma vez. A integração via API leva a verificação para dentro do seu fluxo atual quando você quiser."}},{"@type":"Question","name":"Quanto custa? Não quero pagar por módulos que não uso.","acceptedAnswer":{"@type":"Answer","text":"O modelo é por créditos: você paga pela verificação, e a plataforma (convite white-label, Dossiê de Risco, decisão registrada, API) vem inclusa, sem cobrança por assento ou por módulo. O plano é dimensionado ao seu volume."}},{"@type":"Question","name":"E a LGPD? Estou processando dados sensíveis de clientes.","acceptedAnswer":{"@type":"Answer","text":"A privacidade é tratada na arquitetura, não como ajuste posterior: finalidade definida, controle de acesso, residência de dados no Brasil e registro do próprio tratamento. A kycert fornece a infraestrutura; não substitui a assessoria jurídica nem os demais deveres do regulado."}},{"@type":"Question","name":"As fontes consultadas são confiáveis e atualizadas?","acceptedAnswer":{"@type":"Answer","text":"Cada Run registra quais fontes foram consultadas, o tempo de resposta e se a consulta foi em livemode. Você não recebe um rótulo genérico de verificado; recebe o rastro da consulta que aconteceu."}},{"@type":"Question","name":"Funciona para o meu volume? Tenho muito onboarding.","acceptedAnswer":{"@type":"Answer","text":"A verificação roda em bloco e o cadastro usa OCR para eliminar digitação, justamente para operações de alto volume com baixa tolerância do cliente à fricção. A reverificação é agendada para não depender de controle manual."}},{"@type":"Question","name":"O que acontece se eu quiser sair? Meus dados ficam presos?","acceptedAnswer":{"@type":"Answer","text":"O dossiê é exportável em PDF, e os dados de verificação são seus. A trilha que você registrou continua sendo um documento que você leva consigo."}},{"@type":"Question","name":"Vocês têm certificação de segurança (ISO 27001, SOC 2)?","acceptedAnswer":{"@type":"Answer","text":"A plataforma adota criptografia, residência de dados no Brasil, controle de acesso com autoria e trilha de auditoria. As certificações formais (ISO 27001, SOC 2) estão em processo de certificação."}}]}`;

const JSONLD_GLOSSARIO = `[{"@context":"https://schema.org","@type":"DefinedTerm","name":"KYC (Know Your Customer)","description":"Conjunto de procedimentos para conhecer e verificar a identidade da pessoa física antes e durante o relacionamento. No Brasil, é parte dos deveres de PLD/FT das instituições reguladas.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"KYB (Know Your Business)","description":"A verificação aplicada à pessoa jurídica: cadastro da empresa, mapeamento da estrutura societária e identificação de quem a controla.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"UBO (Ultimate Beneficial Owner) / Beneficiário final","description":"A pessoa natural que, no fim da cadeia societária, efetivamente controla ou se beneficia da empresa. Identificá-lo é obrigação central do KYB.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"PEP (Pessoa Exposta Politicamente)","description":"Pessoa que exerce ou exerceu função pública relevante, sujeita a maior escrutínio por representar risco elevado de PLD/FT. O screening de PEP é parte da verificação.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"PLD/FT","description":"Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo. O arcabouço de obrigações que justifica todo o processo de verificação e registro.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"Sanções","description":"Listas de pessoas e entidades restritas (OFAC, ONU, COAF, entre outras). O cliente é checado contra essas listas no onboarding e nas reverificações.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"Dossiê","description":"O registro completo de um cliente na kycert: convite, documentos, fontes consultadas, apontamentos e a decisão tomada. É a evidência apresentável numa fiscalização.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"Apontamento","description":"Um ponto de atenção identificado na verificação, sempre acompanhado da fonte, do período e do percentual de correspondência que o originou.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"Run","description":"Uma execução de verificação na kycert. Cada Run registra as fontes consultadas, o tempo de resposta e os créditos consumidos.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"Livemode","description":"Indica que a consulta foi feita em ambiente de produção, com dados reais, em oposição ao ambiente de teste.","inDefinedTermSet":"https://kycert.com.br/faq"},{"@context":"https://schema.org","@type":"DefinedTerm","name":"Créditos","description":"A unidade de consumo da plataforma. Cada Run consome créditos conforme as fontes que a verificação exige.","inDefinedTermSet":"https://kycert.com.br/faq"}]`;

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"FAQ & glossário"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span style="color:var(--text-secondary)">FAQ &amp; glossário</span></div></nav>
<section style="padding:48px 0 16px"><div class="wrap-narrow">
<div class="art-eyebrow" style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">FAQ</div>
<h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.4vw,48px);line-height:1.08;letter-spacing:-.02em">As dúvidas frequentes, respondidas sem rodeio.</h1>
<p style="font-size:18px;color:var(--text-secondary);line-height:1.55;margin-top:18px;max-width:62ch">As perguntas que times de compliance fazem antes de adotar a kycert, e os termos da verificação, num só lugar.</p>
<div class="faq-tabs" role="tablist">
  <button class="sc-tab active" data-tab="faq" role="tab">Perguntas frequentes</button>
  <button class="sc-tab" data-tab="glossario" role="tab">Glossário</button>
</div>
</div></section>

<section style="padding:0 0 72px"><div class="wrap-narrow">

<div class="tab-panel" data-panel="faq">
<div class="faq">
  <details open><summary>A kycert substitui meu bureau atual?<span class="plus">+</span></summary><div class="ans">Não. O bureau resolve a consulta pontual; a kycert organiza o cliente inteiro (convite, documento, verificações, risco e decisão) em uma trilha auditável. Você pode manter suas fontes e ganhar o registro que comprova como decidiu.</div></details>
  <details><summary>Vocês são uma empresa nova. Por que eu confiaria a verificação dos meus clientes a vocês?<span class="plus">+</span></summary><div class="ans">A kycert é construída especificamente para o ambiente regulatório brasileiro (câmbio, PSAV, PLD/FT) e trata os dados que você confia como evidência sensível: residência de dados no Brasil, criptografia e trilha de auditoria. Comece por um piloto delimitado e avalie a trilha em casos reais antes de ampliar.</div></details>
  <details><summary>O dossiê tem mesmo valor numa fiscalização do BACEN?<span class="plus">+</span></summary><div class="ans">O que a fiscalização pede é <em>como</em> você decidiu: identidade verificada, fontes consultadas, risco enquadrado e decisão com autor e data. O dossiê reúne exatamente esses elementos, com autor e data, exportável em PDF. <a class="gl-link" href="/dossie-exemplo">Ver um dossiê de exemplo →</a></div></details>
  <details><summary>Já temos um processo de KYC. Trocar dá trabalho?<span class="plus">+</span></summary><div class="ans">A kycert convive com o que você já faz: dá para começar por um fluxo ou um segmento de clientes, sem migrar tudo de uma vez. A integração via API leva a verificação para dentro do seu fluxo atual quando você quiser.</div></details>
  <details><summary>Quanto custa? Não quero pagar por módulos que não uso.<span class="plus">+</span></summary><div class="ans">O modelo é por créditos: você paga pela verificação, e a plataforma (convite white-label, Dossiê de Risco, decisão registrada, API) vem inclusa, sem cobrança por assento ou por módulo. O plano é dimensionado ao seu volume. <a class="gl-link" href="/precos">Ver planos →</a></div></details>
  <details><summary>E a LGPD? Estou processando dados sensíveis de clientes.<span class="plus">+</span></summary><div class="ans">A privacidade é tratada na arquitetura, não como ajuste posterior: finalidade definida, controle de acesso, residência de dados no Brasil e registro do próprio tratamento. A kycert fornece a infraestrutura; não substitui a assessoria jurídica nem os demais deveres do regulado.</div></details>
  <details><summary>As fontes consultadas são confiáveis e atualizadas?<span class="plus">+</span></summary><div class="ans">Cada Run registra quais fontes foram consultadas, o tempo de resposta e se a consulta foi em livemode. Você não recebe um rótulo genérico de "verificado"; recebe o rastro da consulta que aconteceu.</div></details>
  <details><summary>Funciona para o meu volume? Tenho muito onboarding.<span class="plus">+</span></summary><div class="ans">A verificação roda em bloco e o cadastro usa OCR para eliminar digitação, justamente para operações de alto volume com baixa tolerância do cliente à fricção. A reverificação é agendada para não depender de controle manual.</div></details>
  <details><summary>O que acontece se eu quiser sair? Meus dados ficam presos?<span class="plus">+</span></summary><div class="ans">O dossiê é exportável em PDF, e os dados de verificação são seus. A trilha que você registrou continua sendo um documento que você leva consigo.</div></details>
  <details><summary>Vocês têm certificação de segurança (ISO 27001, SOC 2)?<span class="plus">+</span></summary><div class="ans">A plataforma adota criptografia, residência de dados no Brasil, controle de acesso com autoria e trilha de auditoria. As certificações formais (ISO 27001, SOC 2) estão em processo de certificação. <a class="gl-link" href="/seguranca">Ver práticas de segurança →</a></div></details>
</div>
<div class="faq-cta">
  <p>Ainda com uma dúvida que não está aqui? Leve a sua operação para uma conversa de 30 minutos.</p>
  <a href="/#demo" class="btn btn-primary btn-lg">Falar com o time</a>
</div>
</div>

<div class="tab-panel" data-panel="glossario" hidden>
<div class="gl-list"><div class="gl-item" id="kyc"><div class="gl-term">KYC (Know Your Customer)</div><p class="gl-def">Conjunto de procedimentos para conhecer e verificar a identidade da pessoa física antes e durante o relacionamento. No Brasil, é parte dos deveres de PLD/FT das instituições reguladas.</p><a class="gl-link" href="/produto/kyc">Ver na plataforma →</a></div>
<div class="gl-item" id="kyb"><div class="gl-term">KYB (Know Your Business)</div><p class="gl-def">A verificação aplicada à pessoa jurídica: cadastro da empresa, mapeamento da estrutura societária e identificação de quem a controla.</p><a class="gl-link" href="/produto/kyb">Ver na plataforma →</a></div>
<div class="gl-item" id="ubo-benefici-rio-final"><div class="gl-term">UBO (Ultimate Beneficial Owner) / Beneficiário final</div><p class="gl-def">A pessoa natural que, no fim da cadeia societária, efetivamente controla ou se beneficia da empresa. Identificá-lo é obrigação central do KYB.</p><a class="gl-link" href="/produto/kyb">Ver na plataforma →</a></div>
<div class="gl-item" id="pep"><div class="gl-term">PEP (Pessoa Exposta Politicamente)</div><p class="gl-def">Pessoa que exerce ou exerceu função pública relevante, sujeita a maior escrutínio por representar risco elevado de PLD/FT. O screening de PEP é parte da verificação.</p></div>
<div class="gl-item" id="pld-ft"><div class="gl-term">PLD/FT</div><p class="gl-def">Prevenção à Lavagem de Dinheiro e ao Financiamento do Terrorismo. O arcabouço de obrigações que justifica todo o processo de verificação e registro.</p></div>
<div class="gl-item" id="san-es"><div class="gl-term">Sanções</div><p class="gl-def">Listas de pessoas e entidades restritas (OFAC, ONU, COAF, entre outras). O cliente é checado contra essas listas no onboarding e nas reverificações.</p></div>
<div class="gl-item" id="dossi"><div class="gl-term">Dossiê</div><p class="gl-def">O registro completo de um cliente na kycert: convite, documentos, fontes consultadas, apontamentos e a decisão tomada. É a evidência apresentável numa fiscalização.</p></div>
<div class="gl-item" id="apontamento"><div class="gl-term">Apontamento</div><p class="gl-def">Um ponto de atenção identificado na verificação, sempre acompanhado da fonte, do período e do percentual de correspondência que o originou.</p><a class="gl-link" href="/produto/dossie-de-risco">Ver na plataforma →</a></div>
<div class="gl-item" id="run"><div class="gl-term">Run</div><p class="gl-def">Uma execução de verificação na kycert. Cada Run registra as fontes consultadas, o tempo de resposta e os créditos consumidos.</p></div>
<div class="gl-item" id="livemode"><div class="gl-term">Livemode</div><p class="gl-def">Indica que a consulta foi feita em ambiente de produção, com dados reais, em oposição ao ambiente de teste.</p></div>
<div class="gl-item" id="cr-ditos"><div class="gl-term">Créditos</div><p class="gl-def">A unidade de consumo da plataforma. Cada Run consome créditos conforme as fontes que a verificação exige.</p></div></div>
<div style="margin-top:40px;padding-top:28px;border-top:1px solid var(--border-default);font-size:16px;color:var(--text-primary)">Veja esses conceitos aplicados num dossiê real. <a class="gl-link" href="/dossie-exemplo" style="font-weight:600">Ver dossiê de exemplo →</a></div>
</div>

</div></section>
`;

const EXTRA_SCRIPT = `
(function(){
  var tabs=[].slice.call(document.querySelectorAll('.faq-tabs .sc-tab[data-tab]'));
  var panels=[].slice.call(document.querySelectorAll('.tab-panel[data-panel]'));
  function activate(id,scroll){
    if(!panels.some(function(p){return p.getAttribute('data-panel')===id;})) return;
    tabs.forEach(function(t){t.classList.toggle('active',t.getAttribute('data-tab')===id);});
    panels.forEach(function(p){p.hidden=(p.getAttribute('data-panel')!==id);});
    if(scroll){var top=document.querySelector('.faq-tabs');if(top){window.scrollTo(0, Math.max(0, top.getBoundingClientRect().top + window.scrollY - 90));}}
  }
  tabs.forEach(function(t){t.addEventListener('click',function(){var id=t.getAttribute('data-tab');activate(id);try{history.replaceState(null,'','#'+id);}catch(e){}});});
  var h=(location.hash||'').replace('#','');
  if(h==='glossario'||h==='glossário'){ activate('glossario'); }
  else if(h==='faq'){ activate('faq'); }
  else if(h){
    var gp=document.querySelector('.tab-panel[data-panel="glossario"]');
    var target=null; try{ target=gp&&gp.querySelector('#'+(window.CSS&&CSS.escape?CSS.escape(h):h)); }catch(e){}
    if(target){ activate('glossario'); setTimeout(function(){ window.scrollTo(0, Math.max(0, target.getBoundingClientRect().top + window.scrollY - 90)); }, 60); }
  }
})();
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: EXTRA_STYLE }} />
      <Nav active="recursos" />

      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_FAQ }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD_GLOSSARIO }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
      <script dangerouslySetInnerHTML={{ __html: EXTRA_SCRIPT }} />
    </>
  );
}
