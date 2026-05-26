import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://kycert.com.br'),
  title: 'KYCERT · Social media kit',
  description:
    'Pacote completo de assets para redes sociais da KYCERT — avatares, capas e templates de post nos tamanhos exatos de cada plataforma.',
  keywords: ['KYCERT', 'brand assets', 'social media', 'kit', 'LinkedIn', 'Instagram'],
  authors: [{ name: 'KYCERT Tecnologia' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/social-kit',
    title: 'KYCERT · Social media kit',
    description: 'Avatares, capas e templates de post pra todas as redes.',
    siteName: 'KYCERT',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630, alt: 'KYCERT' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KYCERT · Social media kit',
    description: 'Avatares, capas e templates de post pra todas as redes.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/images/favicon.svg',
    apple: '/images/apple-touch-icon.png',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
