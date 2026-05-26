import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kycert.com.br'),
  title: {
    default: 'KYCERT · Validação de clientes PF e PJ em minutos | Onboarding e KYC para mercados regulados',
    template: '%s · KYCERT',
  },
  description:
    'Plataforma completa de onboarding, KYC e validação de clientes PF e PJ em minutos. Bureau de dados, compliance, AML e auditoria em uma única solução white-label para mercados regulados.',
  keywords: [
    'validação de clientes', 'KYC PF PJ', 'onboarding digital',
    'bureau de dados', 'compliance', 'AML', 'COAF', 'BCB', 'LGPD',
    'KYCERT', 'mercado regulado', 'câmbio', 'fintech',
  ],
  authors: [{ name: 'KYCERT Tecnologia' }],
  robots: { index: true, follow: true },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'KYCERT',
    title: 'KYCERT · Validação completa de PF e PJ em minutos',
    description:
      'Mais que bureau. Plataforma de onboarding, KYC e validação de clientes para mercados regulados.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KYCERT · Validação de clientes em minutos',
    description: 'Onboarding, KYC e bureau em uma plataforma para mercados regulados.',
  },
  icons: {
    icon: '/images/favicon.svg',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KYCERT',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Plataforma de onboarding, KYC e validação de clientes PF e PJ em minutos para mercados regulados.',
  url: 'https://kycert.com.br/',
  inLanguage: 'pt-BR',
  offers: { '@type': 'Offer', priceCurrency: 'BRL' },
  publisher: {
    '@type': 'Organization',
    name: 'KYCERT Tecnologia',
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
