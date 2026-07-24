import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kycert.com.br'),
  title: {
    default: 'kycert · Onboarding, KYC/KYB e trilha auditável para instituições reguladas',
    template: '%s · kycert',
  },
  description:
    'Plataforma de onboarding, KYC/KYB e trilha auditável para instituições reguladas no Brasil. Comprove cada decisão de risco numa fiscalização do BACEN.',
  keywords: [
    'KYC', 'KYB', 'onboarding digital', 'trilha auditável', 'compliance',
    'PLD/FT', 'COAF', 'BCB', 'LGPD', 'kycert', 'mercado regulado', 'câmbio', 'PSAV', 'fintech',
  ],
  authors: [{ name: 'kycert Tecnologia' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'kycert',
    title: 'kycert · Onboarding, KYC/KYB e trilha auditável para instituições reguladas',
    description:
      'Convite, verificação, decisão e evidência — reunidos num único registro pronto para a fiscalização.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kycert · Onboarding, KYC/KYB e trilha auditável',
    description: 'Onboarding, verificação e trilha auditável para instituições reguladas.',
  },
  icons: {
    icon: '/images/favicon.svg',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'kycert',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Plataforma de onboarding, KYC/KYB e trilha auditável para instituições reguladas no Brasil.',
  url: 'https://kycert.com.br/',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', priceCurrency: 'BRL' },
  publisher: {
    '@type': 'Organization',
    name: 'kycert Tecnologia',
    url: 'https://kycert.com.br/',
  },
};

const isProd = process.env.VERCEL_ENV === 'production';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {isProd && (
          <>
            <Script
              async
              src="https://www.googletagmanager.com/gtag/js?id=AW-18330789484"
              strategy="afterInteractive"
            />
            <Script id="google-tag" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18330789484');`}
            </Script>
            <Script id="wa-conversion" strategy="afterInteractive">
              {`document.addEventListener('click', function (e) {
                var a = e.target.closest && e.target.closest('a[href*="api.whatsapp.com"], a[href*="wa.me"]');
                if (a && typeof gtag === 'function') {
                  gtag('event', 'conversion', { 'send_to': 'AW-18330789484/917pCOzorNMcEOzM5qRE' });
                }
              });`}
            </Script>
            <Script id="ms-clarity" strategy="afterInteractive">
              {`(function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xr20fxmto1");`}
            </Script>
          </>
        )}
      </head>
      <body>
        {children}
        {isProd && (
          <Script
            id="hs-script-loader"
            src="//js.hs-scripts.com/51689422.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
