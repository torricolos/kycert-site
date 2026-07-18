import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Segurança e proteção de dados',
  description:
    'Como a kycert protege os dados dos seus clientes: LGPD desde o desenho, criptografia, controle de acesso e trilha de auditoria.',
  alternates: { canonical: '/seguranca' },
  openGraph: {
    title: 'Segurança e proteção de dados | kycert',
    description:
      'Como a kycert protege os dados dos seus clientes: LGPD desde o desenho, criptografia, controle de acesso e trilha de auditoria.',
    url: '/seguranca',
  },
  twitter: {
    title: 'Segurança e proteção de dados | kycert',
    description:
      'Como a kycert protege os dados dos seus clientes: LGPD desde o desenho, criptografia, controle de acesso e trilha de auditoria.',
  },
};

const JSONLD = `{"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Início","item":"https://kycert.com.br/"},{"@type":"ListItem","position":2,"name":"Segurança"}]}`;

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span style="color:var(--text-secondary)">Segurança</span></div></nav>
<section style="padding:44px 0 16px"><div class="wrap-narrow">
<div style="font-family:var(--font-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--signal);margin-bottom:16px">Segurança</div>
<h1 style="font-family:var(--font-serif);font-weight:600;font-size:clamp(32px,4.6vw,52px);line-height:1.06;letter-spacing:-.02em">Os dados que você nos confia, tratados como evidência sensível.</h1>
<p style="font-size:19px;color:var(--text-secondary);line-height:1.55;margin:22px 0 28px;max-width:60ch">A kycert processa dados de clientes de instituições reguladas. Toda a plataforma é construída para proteger essa informação e para que o próprio tratamento seja comprovável.</p>
<div class="cta"><a href="https://api.whatsapp.com/send/?phone=5511977656630&amp;text=Ol%C3%A1%2C+gostaria+de+agendar+uma+demo+da+kycert.&amp;type=phone_number&amp;app_absent=0" class="btn btn-primary btn-lg" target="_blank" rel="noopener">Agendar demo</a><a href="/#demo" class="btn btn-ghost btn-lg">Falar com o time</a></div>
</div></section><section style="padding:8px 0 56px"><div class="wrap-narrow"><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Como protegemos os dados</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin:24px 0"><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">LGPD desde o desenho</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">A privacidade é tratada na arquitetura, não como ajuste posterior. Coleta com finalidade definida, controle de acesso e registro do tratamento.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Criptografia</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Dados protegidos em trânsito e em repouso.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Controle de acesso</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Acesso restrito por papel, com registro de quem acessou o quê e quando.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Trilha de auditoria</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Cada Run, consulta e decisão fica registrado de forma que a trilha não possa ser alterada depois — é o que torna o dossiê uma evidência confiável.</p></div><div style="padding:22px;border:1px solid var(--border-default);border-radius:var(--r-lg);background:var(--surface-canvas)"><div style="font-size:16px;font-weight:600;margin-bottom:6px">Controle de acesso e autoria</div><p style="font-size:14px;color:var(--text-secondary);line-height:1.55;margin:0">Cada decisão tem um autor identificado. Quem fez o quê fica registrado, dentro e fora de uma fiscalização.</p></div></div><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Certificações</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">Mantemos práticas verificáveis — LGPD desde o desenho, criptografia, controle de acesso e trilha de auditoria. Certificações formais são descritas apenas quando concluídas; processos em andamento são identificados como tal.</p><h2 style="font-size:24px;font-weight:600;letter-spacing:-.02em;margin:36px 0 12px">Ressalva</h2><p style="font-size:17px;line-height:1.65;color:var(--text-secondary);margin:0 0 16px">A kycert fornece a infraestrutura de verificação e o registro auditável. Não substitui a assessoria jurídica da instituição nem dispensa os demais deveres do regulado perante o BACEN e o COAF.</p></div></section><section style="padding:0 0 88px"><div class="wrap"><div class="band reveal"><span class="eyebrow on-dark" style="justify-content:center">kycert</span><h2 class="serif">Quer detalhes sobre o tratamento de dados?</h2><div class="cta" style="margin-top:8px"><a href="/#demo" class="btn btn-on-dark btn-lg">Falar com o time</a></div></div></div></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSONLD }} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
