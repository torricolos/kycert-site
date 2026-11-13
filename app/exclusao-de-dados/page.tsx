import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Exclusão de Dados',
  description: 'Como pedir a exclusão de dados pessoais tratados pela kycert, inclusive os recebidos pela integração com o WhatsApp Business Platform.',
  alternates: { canonical: '/exclusao-de-dados' },
  openGraph: {
    images: [{ url: 'https://kycert.com.br/og.png', width: 1200, height: 630, alt: 'kycert: comprove cada cliente, cada decisão.' }],
    locale: 'pt_BR',
    siteName: 'kycert',
    type: 'website',
    title: 'Exclusão de Dados | kycert',
    description: 'Como pedir a exclusão de dados pessoais tratados pela kycert, inclusive os recebidos pela integração com o WhatsApp Business Platform.',
  },
  twitter: {
    images: ['https://kycert.com.br/og.png'],
    card: 'summary_large_image',
    title: 'Exclusão de Dados | kycert',
    description: 'Como pedir a exclusão de dados pessoais tratados pela kycert, inclusive os recebidos pela integração com o WhatsApp Business Platform.',
  },
};

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Exclusão de Dados"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Legal</span><span class="sep">/</span><span style="color:var(--text-secondary)">Exclusão de Dados</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Legal</div><h1>Exclusão de dados pessoais</h1>
<div class="art-meta"><span>Última atualização: 13 de novembro de 2026</span></div>
<p>Esta página explica como pedir a exclusão de dados pessoais tratados pela KYCERT DESENVOLVIMENTO LTDA, inscrita no CNPJ nº 68.453.721/0001-90 ("kycert"), inclusive dados recebidos pela integração com o WhatsApp Business Platform, serviço operado pela Meta.</p>
<h2>Quem pode pedir</h2>
<ul>
<li><strong>Clientes da kycert</strong> (empresas que contratam a plataforma): podem pedir a exclusão dos dados da própria conta, dos seus usuários e das integrações conectadas, inclusive o WhatsApp Business. A kycert executa a exclusão conforme as instruções válidas do Cliente, as regras do contrato e as obrigações legais aplicáveis, inclusive as de conservação de registros (por exemplo, evidências de verificações que o Cliente precise apresentar em auditoria).</li>
<li><strong>Pessoas cujos dados foram tratados por um cliente da kycert</strong> (por exemplo, quem passou por um cadastro, uma validação ou recebeu mensagens de uma empresa que usa a kycert): nesses casos, a kycert atua apenas como operadora, e a responsável pelos seus dados (controladora) é a empresa com quem você se relacionou. O pedido deve ser feito diretamente a essa empresa. Se você escrever para a kycert, identificaremos a empresa responsável, encaminharemos o pedido a ela por canal seguro e avisaremos você. Eventual exclusão será feita conforme a instrução dela, observada a LGPD.</li>
</ul>
<h2>Como pedir</h2>
<ul>
<li>Envie um e-mail para <a href="mailto:privacidade@kycert.com.br">privacidade@kycert.com.br</a> com o assunto "Exclusão de dados".</li>
<li>Informe seu nome, o e-mail ou telefone usado no contato com a kycert ou com o cliente, e quais dados deseja excluir.</li>
<li>Se for cliente e quiser desconectar o WhatsApp, informe também a conta WhatsApp Business ou o número conectado. A desconexão também pode ser feita diretamente no painel da kycert.</li>
<li>Podemos pedir uma confirmação de identidade, para evitar que alguém peça a exclusão de dados de outra pessoa.</li>
</ul>
<h2>Prazo</h2>
<p>Confirmamos o recebimento em até 2 (dois) dias úteis. Quando os dados estiverem sujeitos à exclusão e sob controle técnico da kycert, concluímos a exclusão dos dados operacionais em até 15 (quinze) dias, contados da confirmação de identidade ou da instrução do Cliente, conforme o caso. Cópias de segurança (backups) são eliminadas no ciclo regular de rotação e ficam isoladas e sem uso até lá. Registros de auditoria seguem o item "O que pode ser mantido". Ao final, enviamos um e-mail informando o que foi excluído.</p>
<h2>O que é excluído</h2>
<ul>
<li>Dados recebidos pela integração com o WhatsApp Business Platform: o acesso da kycert à conta é desativado (com a revogação ou invalidação dos tokens de acesso, conforme o mecanismo técnico da integração) e são excluídos os identificadores da conta, números conectados, modelos de mensagem, telefones dos destinatários, conteúdo e status das mensagens.</li>
<li>Dados cadastrais e documentos enviados à plataforma, quando não houver obrigação legal de mantê-los.</li>
</ul>
<h2>O que pode ser mantido</h2>
<p>Registros que a lei ou um contrato obriga a guardar, como notas fiscais, registros de acesso e trilhas de auditoria, ficam bloqueados para outros usos e são excluídos ao fim do prazo legal. A empresa controladora também pode ter obrigações próprias de guarda (por exemplo, regras de prevenção à lavagem de dinheiro), e cabe a ela decidir o que pode ser excluído dos dados que tratou.</p>
<h2>Contato</h2>
<p>Dúvidas: <a href="mailto:privacidade@kycert.com.br">privacidade@kycert.com.br</a>. Encarregado pelo Tratamento de Dados Pessoais: Afonso Henrique Deres. Mais informações na Política de Privacidade da kycert (<a href="/privacidade">kycert.com.br/privacidade</a>).</p>
</article></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="" />

      <BreadcrumbJsonLd items={BREADCRUMB_ITEMS} />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
