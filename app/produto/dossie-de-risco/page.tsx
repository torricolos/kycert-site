import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Dossiê de Risco — veredito, evidência e decisão registrada | kycert',
  description:
    'O risco de cada cliente consolidado num dossiê: veredito no topo, apontamentos com evidência, cadeia societária e a decisão registrada com autor, data e PDF.',
  alternates: { canonical: '/produto/dossie-de-risco' },
  openGraph: {
    title: 'Dossiê de Risco — veredito, evidência e decisão registrada | kycert',
    description:
      'O risco de cada cliente consolidado num dossiê: veredito no topo, apontamentos com evidência, cadeia societária e a decisão registrada com autor, data e PDF.',
    url: '/produto/dossie-de-risco',
  },
  twitter: {
    title: 'Dossiê de Risco — veredito, evidência e decisão registrada | kycert',
    description:
      'O risco de cada cliente consolidado num dossiê: veredito no topo, apontamentos com evidência, cadeia societária e a decisão registrada com autor, data e PDF.',
  },
};

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Produtos</span><span class="sep">/</span><span style="color:var(--text-secondary)">Dossiê de Risco</span></div></nav>

<!-- HERO -->
<div class="wrap hero" style="padding-bottom:30px">
  <div style="max-width:760px">
    <span class="eyebrow reveal">Dossiê de risco do cliente</span>
    <h1 class="reveal reveal-d1" style="margin:20px 0">O veredito de risco no topo. <span class="em">A evidência logo abaixo.</span></h1>
    <p class="lead reveal reveal-d2" style="max-width:60ch">Toda a verificação de um cliente em uma tela: score de risco, apontamentos com evidência, estrutura societária e as fontes consultadas. O analista entende a situação em segundos e decide com segurança.</p>
    <div class="cta reveal reveal-d3"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo <svg class="arr" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg></a><a href="#tour" class="btn btn-ghost btn-lg">Ver por dentro</a></div>
  </div>
</div>

<!-- BIG SCREEN -->
<div class="wrap reveal" style="padding-bottom:20px">
  <div class="browser">
    <div class="browser-bar"><span class="dots"><i></i><i></i><i></i></span><span class="url">admin.kycert.com.br/dossie/41.882.300</span></div>
    <div class="screen">
      <div class="screen-side">
        <div class="s-brand">kycert<span class="sig">.</span></div>
        <div class="s-nav">
          <a class="on"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg> Dossiê</a>
          <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h10"/></svg> Fila de análise</a>
          <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg> Consultas</a>
          <a><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/></svg> Compliance</a>
        </div>
      </div>
      <div class="screen-main">
        <div class="sm-head">
          <div><div class="h">Brick Lane Hospitalidade LTDA</div><div class="sub">CNPJ 41.882.300/0001-55 · livemode · 09/06/2026</div></div>
          <div class="score-ring">
            <svg class="ring" viewBox="0 0 36 36"><circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(14,17,22,.08)" stroke-width="3.4"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="#C2772E" stroke-width="3.4" stroke-dasharray="62 100" stroke-linecap="round" transform="rotate(-90 18 18)"/></svg>
            <div><div style="font-size:11px;color:var(--text-tertiary);font-family:var(--font-mono)">RISCO</div><div style="font-size:17px;font-weight:600;color:var(--warning)">Atenção</div></div>
          </div>
        </div>
        <div class="kpis">
          <div class="kpi"><div class="k">Seções</div><div class="v">4</div></div>
          <div class="kpi"><div class="k">Apontamentos</div><div class="v warn">2</div></div>
          <div class="kpi"><div class="k">Sócios</div><div class="v">3</div></div>
          <div class="kpi" style="display:none"></div>
        </div>
        <div class="rows">
          <div class="r"><span class="rl"><b>Cadastral &amp; empresa</b> <small>· CNPJ ativo · 3 anos</small></span><span class="tagst ok">Sem alertas</span></div>
          <div class="r"><span class="rl"><b>Compliance / KYC</b> <small>· empresa + sócios</small></span><span class="tagst err">2 apontamentos</span></div>
          <div class="r"><span class="rl"><b>Estrutura societária</b> <small>· até o beneficiário final</small></span><span class="tagst ok">Mapeada</span></div>
          <div class="r"><span class="rl"><b>Fontes consultadas</b> <small>· 72 fontes · livemode</small></span><span class="tagst ok">Concluída</span></div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- intro -->
<section style="padding:64px 0 24px">
  <div class="wrap-narrow" style="text-align:center">
    <span class="eyebrow reveal" style="justify-content:center">Como o analista lê</span>
    <h2 class="reveal reveal-d1" style="margin:16px auto 0">Em três segundos, ele sabe onde olhar.</h2>
    <p class="sec-lead reveal reveal-d2" style="margin:16px auto 0">O Risk Console organiza a verificação por nível de atenção. O que está em ordem fica recolhido; o que exige decisão aparece primeiro, com a evidência ao lado.</p>
  </div>
</section>

<!-- TOUR -->
<section id="tour" style="padding-top:24px">
  <div class="wrap">

    <!-- 1 score -->
    <div class="tour-step">
      <div class="tour-copy reveal">
        <div class="tour-num">01 · Score de risco</div>
        <h3>Um veredito <span class="serif">no topo da tela.</span></h3>
        <p>O score resume a situação do cliente num rótulo claro — em ordem, atenção ou impeditivo. O analista começa pela conclusão e só desce ao detalhe quando precisa.</p>
        <div class="flist">
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Classificação clara</b><p>Em ordem, atenção ou impeditivo — sem número solto para interpretar.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Fatores determinantes</b><p>O que puxou o risco para cima fica listado, com link para a seção.</p></div></div>
        </div>
      </div>
      <div class="tour-media reveal reveal-d2">
        <div class="ui-card" style="padding:28px">
          <div style="display:flex;align-items:center;gap:22px">
            <svg width="92" height="92" viewBox="0 0 36 36" style="flex:none"><circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(14,17,22,.08)" stroke-width="3"/><circle cx="18" cy="18" r="15.9" fill="none" stroke="#C2772E" stroke-width="3" stroke-dasharray="62 100" stroke-linecap="round" transform="rotate(-90 18 18)"/><text x="18" y="20.5" text-anchor="middle" font-family="JetBrains Mono" font-size="8" font-weight="600" fill="#C2772E">62</text></svg>
            <div>
              <div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--text-tertiary)">Risco do grupo</div>
              <div style="font-size:28px;font-weight:600;letter-spacing:-.03em;color:var(--warning);line-height:1.1;margin-top:4px">Atenção</div>
              <div style="font-size:13px;color:var(--text-secondary);margin-top:4px">2 apontamentos exigem decisão</div>
            </div>
          </div>
          <div style="margin-top:20px;padding-top:18px;border-top:1px solid var(--border-default);display:flex;flex-direction:column;gap:10px">
            <div style="display:flex;align-items:center;gap:10px;font-size:13px"><span style="width:7px;height:7px;border-radius:50%;background:#C0392B;flex:none"></span> Sanção ativa em sócio-administrador <span style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--text-tertiary)">→ Compliance</span></div>
            <div style="display:flex;align-items:center;gap:10px;font-size:13px"><span style="width:7px;height:7px;border-radius:50%;background:var(--warning);flex:none"></span> Mandado de prisão em sócio <span style="margin-left:auto;font-family:var(--font-mono);font-size:11px;color:var(--text-tertiary)">→ Compliance</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 2 seções -->
    <div class="tour-step rev">
      <div class="tour-copy reveal">
        <div class="tour-num">02 · Seções do dossiê</div>
        <h3>Cada frente de verificação <span class="serif">no seu lugar.</span></h3>
        <p>Cadastral, compliance, estrutura societária e fontes ficam separadas, cada uma com o próprio status. O analista pula direto para a seção que pediu atenção.</p>
        <div class="flist">
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Status por seção</b><p>Sem alertas, com apontamento ou impeditivo, em cada frente.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>O limpo fica recolhido</b><p>O que está em ordem não disputa atenção com o que importa.</p></div></div>
        </div>
      </div>
      <div class="tour-media reveal reveal-d2">
        <div class="ui-card">
          <div class="ui-head"><span class="t"><span class="live-dot"></span> Seções do dossiê</span><span class="badge" style="color:var(--warning);background:var(--warning-bg);border-color:var(--warning-bd)">Atenção</span></div>
          <div class="ui-row"><span class="lbl"><b>01 · Cadastral &amp; empresa</b></span><span class="st">Sem alertas</span></div>
          <div class="ui-row"><span class="lbl"><b>02 · Compliance / KYC</b></span><span class="st warn">2 apontamentos</span></div>
          <div class="ui-row"><span class="lbl"><b>03 · Estrutura societária</b></span><span class="st">Mapeada</span></div>
          <div class="ui-row"><span class="lbl"><b>04 · Fontes consultadas</b></span><span class="st">72 · concluída</span></div>
          <div class="ui-foot"><span>Navegue por frente de verificação</span><span class="mono">4 seções</span></div>
        </div>
      </div>
    </div>

    <!-- 3 apontamentos -->
    <div class="tour-step">
      <div class="tour-copy reveal">
        <div class="tour-num">03 · Apontamentos com evidência</div>
        <h3>O alerta vem <span class="serif">com a prova junto.</span></h3>
        <p>Cada apontamento mostra a lista, a fonte, o período e o grau de correspondência — com o nome consultado ao lado do registro encontrado. O analista confirma ou descarta sem sair da tela.</p>
        <div class="flist">
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Fonte e período</b><p>De onde veio o registro e desde quando está em aberto.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Grau de correspondência</b><p>Só entra como apontamento o que passa do limiar; homônimo fica fora da decisão.</p></div></div>
        </div>
      </div>
      <div class="tour-media reveal reveal-d2">
        <div style="display:flex;flex-direction:column;gap:12px">
          <div style="border:1px solid #E7C9C4;border-left:3px solid #C0392B;border-radius:var(--r-lg);background:#FCF1EF;padding:18px 20px">
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px"><span style="font-size:11px;font-weight:600;color:#C0392B;background:#FBE6E3;padding:3px 9px;border-radius:var(--r-full)">Ativo</span><b style="font-size:16px">Crime Financeiro</b><span style="margin-left:auto;font-family:var(--font-mono);font-size:12px;font-weight:700;color:#C0392B">91% match</span></div>
            <div style="display:grid;grid-template-columns:1fr auto;gap:8px;font-size:13px"><span style="color:var(--text-tertiary)">Fonte / Lista</span><b>OFAC · SDN</b><span style="color:var(--text-tertiary)">Sócio</span><b>Heitor A. Brandão</b><span style="color:var(--text-tertiary)">Desde</span><b>12/03/2021</b></div>
          </div>
          <div style="border:1px solid var(--warning-bd);border-left:3px solid var(--warning);border-radius:var(--r-lg);background:var(--warning-bg);padding:18px 20px">
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap"><span style="font-size:11px;font-weight:600;color:var(--warning);background:#F6E4C9;padding:3px 9px;border-radius:var(--r-full)">Ativo</span><b style="font-size:16px">Mandado de Prisão</b><span style="margin-left:auto;font-family:var(--font-mono);font-size:12px;font-weight:700;color:var(--warning)">96% match</span></div>
          </div>
        </div>
      </div>
    </div>

    <!-- 4 societário -->
    <div class="tour-step rev">
      <div class="tour-copy reveal">
        <div class="tour-num">04 · Estrutura societária</div>
        <h3>A cadeia inteira, <span class="serif">até quem controla.</span></h3>
        <p>A estrutura mostra a empresa, cada sócio e a controladora, seguindo a participação até o beneficiário final. O status de compliance aparece em cada nó da cadeia.</p>
        <div class="flist">
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Beneficiário final</b><p>A pessoa física que de fato controla o grupo, identificada.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Apontamento por nó</b><p>Cada entidade da cadeia verificada, com o risco onde ele está.</p></div></div>
        </div>
      </div>
      <div class="tour-media reveal reveal-d2">
        <div class="ui-card">
          <div class="ui-head"><span class="t"><span class="live-dot"></span> Estrutura societária</span><span class="badge" style="color:var(--warning);background:var(--warning-bg);border-color:var(--warning-bd)">2 apontamentos</span></div>
          <div class="ui-row"><span class="lbl"><b>Brick Lane Hospitalidade LTDA</b><br><small style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">empresa analisada</small></span><span class="st">Nada consta</span></div>
          <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>Heitor A. Brandão</b> · 50%</span><span class="st warn">Sanção</span></div>
          <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>Lucas P. Matos</b> · 30%</span><span class="st warn">Mandado</span></div>
          <div class="ui-row"><span class="lbl" style="padding-left:14px">↳ <b>RV Participações</b> · 20%</span><span class="st">Nada consta</span></div>
          <div class="ui-row"><span class="lbl" style="padding-left:32px">↳ <b>Diego M. Sosa</b> · UBO</span><span class="st">Nada consta</span></div>
          <div class="ui-foot"><span>Beneficiário final identificado</span><span class="mono">cadeia · 3 níveis</span></div>
        </div>
      </div>
    </div>

    <!-- 5 fontes -->
    <div class="tour-step">
      <div class="tour-copy reveal">
        <div class="tour-num">05 · Fontes consultadas</div>
        <h3>Transparência de <span class="serif">onde veio cada dado.</span></h3>
        <p>O dossiê mostra cada fonte consultada, com status e tempo de resposta, em modo livemode. O analista sabe exatamente o que foi verificado e prova a cobertura da consulta.</p>
        <div class="flist">
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Status por fonte</b><p>O que respondeu, o que foi pulado e em quanto tempo.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Rastreabilidade</b><p>Run, livemode e créditos registrados para auditoria.</p></div></div>
        </div>
      </div>
      <div class="tour-media reveal reveal-d2">
        <div class="ui-card">
          <div class="ui-head"><span class="t"><span class="live-dot"></span> Fontes consultadas</span><span class="badge">72 fontes</span></div>
          <div class="ui-row"><span class="lbl"><b>Receita Federal</b></span><span class="st">success · 388ms</span></div>
          <div class="ui-row"><span class="lbl"><b>OFAC &amp; listas ONU</b></span><span class="st">success · 512ms</span></div>
          <div class="ui-row"><span class="lbl"><b>PEP · TSE</b></span><span class="st">success · 466ms</span></div>
          <div class="ui-row"><span class="lbl"><b>CNJ · mandados</b></span><span class="st">success · 669ms</span></div>
          <div class="ui-foot"><span style="font-family:var(--font-mono);font-size:11px;color:var(--text-tertiary)">● livemode · run_5b21c9af</span><span class="mono">créditos 4,12</span></div>
        </div>
      </div>
    </div>

    <!-- 6 decisão -->
    <div class="tour-step rev">
      <div class="tour-copy reveal">
        <div class="tour-num">06 · Decisão registrada</div>
        <h3>A análise <span class="serif">vira evidência.</span></h3>
        <p>Quando o analista decide, a aprovação ou recusa fica gravada com autor, data e justificativa, junto da consulta que a sustentou. A trilha do cliente fica pronta para a próxima auditoria.</p>
        <div class="flist">
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Autor e data</b><p>Quem decidiu e quando, sem depender de e-mail.</p></div></div>
          <div class="fi"><span class="c"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg></span><div><b>Exportável em PDF</b><p>O dossiê inteiro sai num documento para apresentar ao regulador.</p></div></div>
        </div>
      </div>
      <div class="tour-media reveal reveal-d2">
        <div class="ui-card">
          <div class="ui-head"><span class="t"><span class="live-dot"></span> Decisão · Brick Lane LTDA</span><span class="badge" style="color:var(--warning);background:var(--warning-bg);border-color:var(--warning-bd)">Em revisão</span></div>
          <div style="padding:20px 18px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px"><span style="width:36px;height:36px;border-radius:50%;background:var(--surface-sunken);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:var(--text-secondary)">AC</span><div><div style="font-size:14px;font-weight:600">ana.compliance</div><div style="font-size:12px;color:var(--text-tertiary);font-family:var(--font-mono)">analista sênior · 09/06 · 14h20</div></div></div>
            <div style="font-size:13.5px;color:var(--text-secondary);line-height:1.55;background:var(--surface-app);border:1px solid var(--border-default);border-radius:var(--r);padding:12px 14px">"Sanção ativa confirmada no sócio-administrador. Cliente encaminhado para diligência reforçada antes de qualquer operação."</div>
          </div>
          <div class="ui-foot"><span>Registrado na trilha do cliente</span><span class="mono">PDF disponível</span></div>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- VALOR -->
<section class="sec-dark">
  <div class="wrap sec-head">
    <span class="eyebrow on-dark reveal">Por que importa</span>
    <h2 class="serif reveal reveal-d1" style="color:#fff">Decisão segura, com a prova já montada.</h2>
    <div class="pcards">
      <div class="pcard reveal reveal-d1"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v9l6 3"/><circle cx="12" cy="12" r="9"/></svg></div><div class="q">Análise em segundos</div><div class="a">O score e os apontamentos colocam o analista direto no que precisa de decisão.</div></div>
      <div class="pcard reveal reveal-d2"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg></div><div class="q">Segurança na decisão</div><div class="a">Cada apontamento vem com fonte, período e correspondência para confirmar ou descartar.</div></div>
      <div class="pcard reveal reveal-d3"><div class="ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v4H4z"/><path d="M6 8v12h12V8"/></svg></div><div class="q">Trilha pronta</div><div class="a">A decisão e a evidência ficam registradas e exportáveis para o regulador.</div></div>
    </div>
  </div>
</section>

<!-- CTA -->
<section style="padding:64px 0 88px" id="demo"><div class="wrap"><div class="band reveal">
  <span class="eyebrow on-dark" style="justify-content:center">Dossiê de Risco</span>
  <h2 class="serif">Veja o Dossiê de Risco com os seus dados.</h2>
  <p>Rode uma consulta real na demo e veja o dossiê de risco montado de ponta a ponta.</p>
  <div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/" class="btn btn-ghost-dark btn-lg">Voltar à plataforma</a></div>
</div></div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="produtos" />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
