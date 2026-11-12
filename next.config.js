/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // Páginas de bets removidas do site.
      { source: '/solucoes/bets', destination: '/', permanent: true },
      { source: '/blog/bets-lei-14790-pld-onboarding', destination: '/blog', permanent: true },
      // www -> apex (301). http -> https é forçado pelo Vercel; o domínio www também deve ser redirecionado no painel de Domains.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.kycert.com.br' }],
        destination: 'https://kycert.com.br/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/og.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400' }],
      },
      {
        source: '/images/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/llms.txt',
        headers: [{ key: 'Content-Type', value: 'text/plain; charset=utf-8' }],
      },
    ];
  },
};
module.exports = nextConfig;
