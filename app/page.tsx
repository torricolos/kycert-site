import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import HowItWorks from '@/components/HowItWorks';
import Security from '@/components/Security';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

export default function Page() {
  const navItems = [
    { label: 'Como funciona', href: '#produto' },
    { label: 'Segurança',   href: '#seguranca' },
  ];
  return (
    <>
      <Nav items={navItems} current="Produto" />
      <main id="top">
        <Hero />
        <Problem />
        <HowItWorks />
        <Security />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
