import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const fontSans = Inter_Tight({ subsets: ['latin'], style: ['normal', 'italic'], display: 'swap', variable: '--f-sans' });
const fontSerif = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], display: 'swap', variable: '--f-serif' });
const fontMono = JetBrains_Mono({ subsets: ['latin'], display: 'swap', variable: '--f-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kycert.com.br'),
  title: {
    default: 'kycert · KYC, KYB e trilha auditável para PLD/FT',
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
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'kycert: comprove cada cliente, cada decisão.' }],
    title: 'kycert · Onboarding, KYC/KYB e trilha auditável para instituições reguladas',
    description:
      'Convite, verificação, decisão e evidência, reunidos num único registro pronto para a fiscalização.',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.png'],
    title: 'kycert · Onboarding, KYC/KYB e trilha auditável',
    description: 'Onboarding, verificação e trilha auditável para instituições reguladas.',
  },
  icons: {
    icon: '/images/favicon.svg',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://kycert.com.br/#organization',
      name: 'kycert',
      legalName: 'kycert Tecnologia',
      url: 'https://kycert.com.br/',
      logo: { '@type': 'ImageObject', url: 'https://kycert.com.br/images/logo.png', width: 320, height: 132 },
      description:
        'Plataforma de onboarding, KYC/KYB e trilha auditável para instituições reguladas no Brasil.',
      email: 'contato@kycert.com.br',
      areaServed: 'BR',
      contactPoint: [
        { '@type': 'ContactPoint', contactType: 'sales', email: 'contato@kycert.com.br', availableLanguage: 'pt-BR' },
      ],
      sameAs: ['https://www.linkedin.com/company/kycert/', 'https://www.instagram.com/kycert.oficial/'],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://kycert.com.br/#website',
      url: 'https://kycert.com.br/',
      name: 'kycert',
      inLanguage: 'pt-BR',
      publisher: { '@id': 'https://kycert.com.br/#organization' },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': 'https://kycert.com.br/#software',
      name: 'kycert',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      description:
        'Plataforma de onboarding, KYC/KYB e trilha auditável para instituições reguladas no Brasil.',
      url: 'https://kycert.com.br/',
      inLanguage: 'pt-BR',
      publisher: { '@id': 'https://kycert.com.br/#organization' },
    },
  ],
};

const isProd = process.env.VERCEL_ENV === 'production';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable}`}>
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
              strategy="lazyOnload"
            />
            {/* inline no <head>: roda no parse (antes da hidratação), então cliques cedo enfileiram no dataLayer; só o gtag.js é lazyOnload */}
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18330789484');
              document.addEventListener('click', function (e) {
                var a = e.target.closest && e.target.closest('a[href*="api.whatsapp.com"], a[href*="wa.me"]');
                if (a && typeof gtag === 'function') {
                  gtag('event', 'conversion', { 'send_to': 'AW-18330789484/917pCOzorNMcEOzM5qRE' });
                }
              });`,
              }}
            />
            <Script id="ms-clarity" strategy="lazyOnload">
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
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
