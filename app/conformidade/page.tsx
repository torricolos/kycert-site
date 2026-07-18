import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Mapa de normas e conformidade regulatória',
  description:
    'O mapa de normas do BACEN, CVM, SUSEP, SPA/MF, COAF e LGPD que afetam câmbio, PSAVs, bancos, cooperativas, seguradoras, mercado de capitais e bets — o que cada uma pede, onde a kycert entra e qual evidência fica registrada.',
  alternates: { canonical: '/conformidade' },
  openGraph: {
    title: 'Mapa de normas e conformidade regulatória | kycert',
    description:
      'O mapa de normas do BACEN, CVM, SUSEP, SPA/MF, COAF e LGPD que afetam câmbio, PSAVs, bancos, cooperativas, seguradoras, mercado de capitais e bets — o que cada uma pede, onde a kycert entra e qual evidência fica registrada.',
    url: '/conformidade',
  },
  twitter: {
    title: 'Mapa de normas e conformidade regulatória | kycert',
    description:
      'O mapa de normas do BACEN, CVM, SUSEP, SPA/MF, COAF e LGPD que afetam câmbio, PSAVs, bancos, cooperativas, seguradoras, mercado de capitais e bets — o que cada uma pede, onde a kycert entra e qual evidência fica registrada.',
  },
};

const EXTRA_STYLE = `
.cseg{display:flex;gap:8px;flex-wrap:wrap;margin-top:24px}
.cseg button{font-family:var(--font-mono);font-size:12px;padding:8px 15px;border-radius:var(--r-full);border:1px solid var(--border-default);background:var(--surface-canvas);color:var(--text-secondary);cursor:pointer;transition:.15s}
.cseg button.active,.cseg button:hover{background:var(--brand);color:#fff;border-color:var(--brand)}
.cmap{display:flex;flex-direction:column;gap:14px;margin-top:24px}
.cmap-row{border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas);box-shadow:var(--sh-sm);overflow:hidden}
.cmap-row .top{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:16px 22px;border-bottom:1px solid var(--border-default);background:var(--surface-app);flex-wrap:wrap}
.cmap-row .top .law{font-family:var(--font-mono);font-size:12px;color:var(--signal);font-weight:600;margin-bottom:3px}
.cmap-row .top .fr{font-size:17px;font-weight:600;letter-spacing:-.01em}
.cmap-row .tags{display:flex;gap:6px;flex-wrap:wrap}
.cmap-row .tg{font-family:var(--font-mono);font-size:10px;text-transform:uppercase;letter-spacing:.05em;color:var(--text-tertiary);border:1px solid var(--border-default);border-radius:var(--r-full);padding:3px 9px}
.cmap-cols{display:grid;grid-template-columns:1fr 1fr 1fr}
.cmap-cols > div{padding:18px 22px;border-right:1px solid var(--border-default)}
.cmap-cols > div:last-child{border-right:none}
.cmap-cols .cl{font-family:var(--font-mono);font-size:10.5px;text-transform:uppercase;letter-spacing:.08em;color:var(--text-tertiary);margin-bottom:9px;display:flex;align-items:center;gap:7px}
.cmap-cols .ev .cl{color:var(--signal)}
.cmap-cols p{font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0}
.cmap-empty{display:none;padding:40px;text-align:center;color:var(--text-tertiary);font-size:15px}
@media(max-width:760px){.cmap-cols{grid-template-columns:1fr}.cmap-cols > div{border-right:none;border-bottom:1px solid var(--border-default)}.cmap-cols > div:last-child{border-bottom:none}}
`;

const JSONLD = `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"https://kycert.com.br/"},{"@type":"ListItem","position":2,"name":"Conformidade"}]}`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span style="color:var(--text-secondary)">Conformidade</span></div></nav>

<section style="padding:48px 0 80px"><div class="wrap sec-head" style="max-width:none">
  <span class="eyebrow reveal">Conformidade</span>
  <h2 class="reveal reveal-d1" style="margin-top:14px;max-width:22ch">O que a regulação pede, e onde a kycert entra.</h2>
  <p class="sec-lead reveal reveal-d2">Escolha o seu segmento para ver só as normas que se aplicam — e, em cada uma, o que ela exige, onde a kycert atua e qual evidência fica registrada.</p>

  <div class="cseg reveal reveal-d2">
    <button class="active" data-seg="todos">Todos</button>
    <button data-seg="cambio">Câmbio</button>
    <button data-seg="psav">PSAV / cripto</button>
    <button data-seg="banco">Bancos &amp; fintechs</button>
    <button data-seg="cooperativas">Cooperativas</button>
    <button data-seg="capitais">Consórcios &amp; capitais</button>
    <button data-seg="seguradoras">Seguradoras</button>
    <button data-seg="bets">Apostas / Bets</button>
    <button data-seg="demais">Demais segmentos</button>
  </div>

  <div class="cmap reveal reveal-d3">
    <div class="cmap-row" data-seg="cambio">
      <div class="top"><div><div class="law">Lei 14.286/2021 · Res. BCB 277/2022</div><div class="fr">Mercado de câmbio</div></div><div class="tags"><span class="tg">Câmbio</span></div></div>
      <div class="cmap-cols">
        <div><div class="cl">O que pede</div><p>Identificar e qualificar o cliente de câmbio e manter o relacionamento documentado.</p></div>
        <div><div class="cl">Onde a kycert entra</div><p>Cadastro estruturado, com documento, verificações e decisão num fluxo só.</p></div>
        <div class="ev"><div class="cl"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>Evidência</div><p>Ficha do cliente com a trilha da decisão, pronta para o BCB.</p></div>
      </div>
    </div>
    <div class="cmap-row" data-seg="psav">
      <div class="top"><div><div class="law">Lei 14.478/2022 · Res. BCB 519, 520 e 521/2025</div><div class="fr">Ativos virtuais (PSAV)</div></div><div class="tags"><span class="tg">PSAV</span></div></div>
      <div class="cmap-cols">
        <div><div class="cl">O que pede</div><p>Avaliação de risco do cliente documentada, além de autorização e funcionamento. Vigência em 02/02/2026; pedido de autorização até 30/10/2026.</p></div>
        <div><div class="cl">Onde a kycert entra</div><p>Onboarding com avaliação de risco registrada a cada cliente.</p></div>
        <div class="ev"><div class="cl"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>Evidência</div><p>Dossiê de Risco com score, apontamentos e decisão, exportável.</p></div>
      </div>
    </div>
    <div class="cmap-row" data-seg="capitais">
      <div class="top"><div><div class="law">Circular BCB 3.978/2020 · CVM 50/2021</div><div class="fr">Consórcios e mercado de capitais</div></div><div class="tags"><span class="tg">Capitais</span></div></div>
      <div class="cmap-cols">
        <div><div class="cl">O que pede</div><p>Identificar o consorciado e o investidor e prevenir a lavagem sob o BCB e a CVM.</p></div>
        <div><div class="cl">Onde a kycert entra</div><p>Cadastro PF e PJ com KYB até o beneficiário final e risco registrado.</p></div>
        <div class="ev"><div class="cl"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>Evidência</div><p>Trilha do cadastro pronta para o BCB ou a CVM, exportável.</p></div>
      </div>
    </div>
    <div class="cmap-row" data-seg="seguradoras">
      <div class="top"><div><div class="law">Circular SUSEP nº 612/2020</div><div class="fr">Seguros</div></div><div class="tags"><span class="tg">Seguradoras</span></div></div>
      <div class="cmap-cols">
        <div><div class="cl">O que pede</div><p>Identificar o segurado e o contratante PJ e registrar a avaliação de risco.</p></div>
        <div><div class="cl">Onde a kycert entra</div><p>Cadastro do segurado com sanções, PEP e avaliação de risco registrada.</p></div>
        <div class="ev"><div class="cl"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>Evidência</div><p>Ficha do segurado com a decisão registrada, pronta para a SUSEP.</p></div>
      </div>
    </div>
    <div class="cmap-row" data-seg="bets">
      <div class="top"><div><div class="law">Lei 14.790/2023 · Portaria SPA/MF 722/2024 (cadastro) e 827/2024 (PLD/FT)</div><div class="fr">Apostas (Bets)</div></div><div class="tags"><span class="tg">Bets</span></div></div>
      <div class="cmap-cols">
        <div><div class="cl">O que pede</div><p>Identificar o apostador, confirmar a idade e cumprir os deveres de PLD/FT.</p></div>
        <div><div class="cl">Onde a kycert entra</div><p>KYC do apostador com idade, sanções e PEP antes da primeira aposta.</p></div>
        <div class="ev"><div class="cl"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>Evidência</div><p>Trilha do cadastro do apostador, pronta para a SPA/MF.</p></div>
      </div>
    </div>
    <div class="cmap-row" data-seg="cambio psav banco cooperativas demais">
      <div class="top"><div><div class="law">Circular BCB 3.978/2020 · Lei 9.613/98 + COAF</div><div class="fr">PLD/FT</div></div><div class="tags"><span class="tg">Câmbio</span><span class="tg">PSAV</span><span class="tg">Bancos</span><span class="tg">Cooperativas</span><span class="tg">Demais</span></div></div>
      <div class="cmap-cols">
        <div><div class="cl">O que pede</div><p>Identificar, qualificar e monitorar o cliente; comunicar operações ao COAF.</p></div>
        <div><div class="cl">Onde a kycert entra</div><p>Verificações em bloco, reverificação no prazo e registro de cada etapa.</p></div>
        <div class="ev"><div class="cl"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>Evidência</div><p>Trilha por cliente com fontes, data e responsável de cada decisão.</p></div>
      </div>
    </div>
    <div class="cmap-row" data-seg="cambio psav banco cooperativas capitais seguradoras bets demais">
      <div class="top"><div><div class="law">LGPD · Lei 13.709/18</div><div class="fr">Proteção de dados</div></div><div class="tags"><span class="tg">Todos</span></div></div>
      <div class="cmap-cols">
        <div><div class="cl">O que pede</div><p>Tratar dados com finalidade, base legal, controle de acesso e registro.</p></div>
        <div><div class="cl">Onde a kycert entra</div><p>Coleta com finalidade, acesso por papel e registro de cada tratamento.</p></div>
        <div class="ev"><div class="cl"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12l5 5L20 7"/></svg>Evidência</div><p>Registros de tratamento e controles descritos na página de Segurança.</p></div>
      </div>
    </div>
    <div class="cmap-empty" id="cmapEmpty">Nenhuma norma listada para este segmento.</div>
  </div>

  <p class="fineprint reveal">A aplicação das normas depende da atividade, do porte e da estrutura de cada instituição. A kycert estrutura e registra controles; não substitui assessoria jurídica nem dispensa os demais deveres do regulado.</p>
</div></section>

<section style="padding:0 0 88px"><div class="wrap"><div class="band reveal"><span class="eyebrow on-dark" style="justify-content:center">kycert</span><h2 class="serif">Veja a conformidade aplicada ao seu segmento.</h2><div class="cta" style="margin-top:8px"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-on-dark btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/dossie-exemplo" class="btn btn-ghost-dark btn-lg">Ver dossiê de exemplo</a></div></div></div></section>
`;

const EXTRA_SCRIPT = `
(function(){
  var rows=[].slice.call(document.querySelectorAll('.cmap-row'));
  var empty=document.getElementById('cmapEmpty');
  document.querySelectorAll('.cseg button').forEach(function(b){
    b.addEventListener('click',function(){
      document.querySelectorAll('.cseg button').forEach(function(x){x.classList.remove('active')});
      b.classList.add('active');
      var seg=b.getAttribute('data-seg'),shown=0;
      rows.forEach(function(r){
        var ok=(seg==='todos')||(' '+r.getAttribute('data-seg')+' ').indexOf(' '+seg+' ')>-1;
        r.style.display=ok?'':'none'; if(ok)shown++;
      });
      empty.style.display=shown?'none':'block';
    });
  });
})();
`;

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: EXTRA_STYLE }} />
      <Nav active="conformidade" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
      <script dangerouslySetInnerHTML={{ __html: EXTRA_SCRIPT }} />
    </>
  );
}
