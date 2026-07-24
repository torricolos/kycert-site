import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Obrigado',
  robots: { index: false, follow: false },
};

const BODY_HTML = `
<section style="min-height:56vh;display:flex;align-items:center;justify-content:center;padding:80px 24px">
  <div style="max-width:460px;text-align:center">
    <div style="width:60px;height:60px;border-radius:50%;background:var(--signal-bg);border:1px solid var(--signal-bd);display:flex;align-items:center;justify-content:center;margin:0 auto 26px">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1F8A5B" stroke-width="2.4"><path d="M20 6 9 17l-5-5"/></svg>
    </div>
    <h1 style="font-family:var(--font-serif);font-weight:700;font-size:clamp(28px,4vw,38px);letter-spacing:-.03em;color:var(--text-primary)">Recebemos seus dados.</h1>
    <p style="font-size:17px;line-height:1.6;color:var(--text-secondary);margin-top:16px">Retornamos em breve para marcar a conversa de 15 minutos.</p>
    <div style="margin-top:32px"><a href="/dossie-exemplo" class="btn btn-ghost btn-lg">Ver um dossiê de exemplo</a></div>
  </div>
</section>
`;

export default function Page() {
  return (
    <>
      <Nav active="" />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
    </>
  );
}
