import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Página não encontrada',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <main style={{ padding: '96px 24px 120px', textAlign: 'center' }}>
        <div className="wrap">
          <span className="eyebrow">Erro 404</span>
          <h1 className="as-h2" style={{ margin: '16px auto 0' }}>Esta página não existe ou mudou de endereço.</h1>
          <p className="sec-lead" style={{ margin: '16px auto 0' }}>
            Volte para o início ou siga para as soluções e o blog da kycert.
          </p>
          <div style={{ marginTop: 28, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a className="btn btn-primary" href="/">Ir para o início</a>
            <a className="btn btn-ghost" href="/solucoes/cambio">Ver soluções</a>
            <a className="btn btn-ghost" href="/blog">Ler o blog</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
