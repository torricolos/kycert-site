import type { Metadata } from 'next';
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
