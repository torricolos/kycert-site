import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Tratamento de Dados',
  description: 'Anexo de tratamento de dados pessoais da kycert: papéis, finalidades e segurança.',
  alternates: { canonical: '/tratamento-de-dados' },
  openGraph: {
    images: [{ url: 'https://kycert.com.br/og.png', width: 1200, height: 630, alt: 'kycert: comprove cada cliente, cada decisão.' }],
    locale: 'pt_BR',
    siteName: 'kycert',
    type: 'website',
    title: 'Tratamento de Dados | kycert',
    description: 'Anexo de tratamento de dados pessoais da kycert: papéis, finalidades e segurança.',
  },
  twitter: {
    images: ['https://kycert.com.br/og.png'],
    card: 'summary_large_image',
    title: 'Tratamento de Dados | kycert',
    description: 'Anexo de tratamento de dados pessoais da kycert: papéis, finalidades e segurança.',
  },
};

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Tratamento de Dados"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Legal</span><span class="sep">/</span><span style="color:var(--text-secondary)">Tratamento de Dados</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Legal</div><h1>Anexo de Tratamento de Dados Pessoais da kycert</h1>
<div class="art-meta"><span>Última atualização: 13 de novembro de 2026</span></div>
<p>Este Anexo complementa os Termos de Uso da Plataforma kycert e se aplica quando a kycert tratar dados pessoais em nome do Cliente para execução dos serviços contratados.</p>
<p>A plataforma kycert é operada por KYCERT DESENVOLVIMENTO LTDA, inscrita no CNPJ nº 68.453.721/0001-90, doravante denominada simplesmente "kycert".</p>
<h2>1. Papéis das partes</h2>
<p>1.1. Para os dados pessoais inseridos, enviados, consultados ou integrados pelo Cliente na plataforma, o Cliente atua como controlador, responsável por definir as finalidades, bases legais e critérios de uso dos dados.</p>
<p>1.2. A kycert atua como operadora desses dados, tratando-os conforme as instruções do Cliente, os Termos de Uso, a Política de Privacidade e LGPD, esta contratação e as funcionalidades utilizadas na plataforma.</p>
<h2>2. Finalidade do tratamento</h2>
<p>2.1. A kycert tratará dados pessoais para prestar os serviços contratados, incluindo validação cadastral, verificação de identidade, análise documental, apoio a KYC/KYB, onboarding digital, prevenção a fraudes, integrações, logs, suporte, segurança e operação da plataforma.</p>
<p>2.2. A kycert não utilizará os dados tratados em nome do Cliente para finalidade incompatível com a prestação dos serviços, salvo quando necessário para cumprimento de obrigação legal, exercício regular de direitos, segurança, prevenção a fraudes ou outra hipótese permitida pela LGPD. Em qualquer caso, é vedado à kycert usar esses dados para treinar modelos, enriquecer bases, fazer benchmarking ou oferecê-los a terceiros, ressalvados dados efetivamente anonimizados ou agregados, que não permitam identificar titulares nem o Cliente. Dados recebidos pela integração com o WhatsApp Business Platform (Meta) são tratados apenas para prestar o serviço ao Cliente.</p>
<h2>3. Obrigações da kycert</h2>
<p>3.1. A kycert compromete-se a:</p>
<ul>
<li>tratar dados pessoais conforme as instruções do Cliente e a legislação aplicável;</li>
<li>adotar medidas técnicas e administrativas razoáveis de segurança;</li>
<li>limitar o acesso aos dados a pessoas e fornecedores que precisem acessá-los para execução dos serviços;</li>
<li>apoiar o Cliente, quando razoavelmente possível, no atendimento a solicitações de titulares relacionadas aos dados tratados na plataforma;</li>
<li>manter registros técnicos, logs e trilhas de auditoria quando aplicável;</li>
<li>comunicar o Cliente em até 24 (vinte e quatro) horas a partir da ciência de incidente de segurança que afete dados pessoais tratados em seu nome, nos termos do item 12.5 dos Termos de Uso: a comunicação inicial traz as informações disponíveis, sem depender de investigação concluída, e é complementada à medida da apuração; o prazo conta da identificação de ocorrência concreta que afete ou possa ter afetado esses dados, ainda que a classificação interna não esteja concluída, e não de alertas genéricos sem indício de afetação de dados pessoais;</li>
<li>eliminar, anonimizar ou manter dados após o encerramento da contratação conforme os Termos de Uso, a Política de Privacidade e LGPD e a legislação aplicável.</li>
</ul>
<h2>4. Obrigações do Cliente</h2>
<p>4.1. O Cliente compromete-se a:</p>
<ul>
<li>garantir que possui base legal adequada para tratar os dados enviados à plataforma;</li>
<li>informar os titulares quando necessário;</li>
<li>usar a plataforma para finalidades lícitas e compatíveis com sua contratação;</li>
<li>revisar resultados antes de tomar decisões relevantes;</li>
<li>manter seus próprios controles de segurança, governança, compliance e gestão de acessos.</li>
</ul>
<h2>5. Suboperadores e terceiros</h2>
<p>5.1. A kycert poderá utilizar fornecedores, APIs, bureaus, provedores de OCR, infraestrutura, mensageria, webhooks, suporte e outras integrações necessárias à execução dos serviços, incluindo a Meta, quando o Cliente conectar sua conta ao WhatsApp Business Platform, conforme a Política de Privacidade.</p>
<p>5.2. A kycert mantém lista interna atualizada dos suboperadores que tratam dados pessoais em nome do Cliente, disponibilizada ao Cliente mediante solicitação. A kycert exige obrigações de proteção de dados compatíveis dos seus suboperadores e comunicará alterações materiais com antecedência razoável.</p>
<h2>6. Transferência internacional</h2>
<p>6.1. Quando houver transferência internacional de dados pessoais, a kycert buscará adotar mecanismos compatíveis com a LGPD, incluindo contratos com provedores, cláusulas-padrão, garantias adequadas ou outros mecanismos legalmente aceitos.</p>
<h2>7. Encerramento</h2>
<p>7.1. Após o encerramento da contratação, o Cliente poderá solicitar, em até 30 (trinta) dias, a exportação dos dados inseridos na plataforma, quando tecnicamente disponível e aplicável ao plano contratado.</p>
<p>7.2. Durante esses 30 (trinta) dias, os dados ficam preservados para permitir a exportação. Após esse período, a eliminação ou anonimização dos dados seguirá as instruções do Cliente e os procedimentos de encerramento da kycert, nos prazos da política de retenção efetivamente adotada, ressalvados os que precisem ser mantidos por obrigação legal, regulatória ou contratual, necessidade de auditoria, segurança, prevenção a fraudes, cobrança ou exercício regular de direitos. Cópias de segurança são eliminadas no ciclo regular de rotação e ficam isoladas e sem uso até lá.</p>
<h2>8. Cooperação com autoridades</h2>
<p>8.1. A kycert cooperará com o Cliente em eventuais investigações conduzidas pela ANPD ou outras autoridades competentes relacionadas a dados tratados na qualidade de operadora, fornecendo as informações necessárias dentro do que estiver razoavelmente sob seu controle.</p>
<h2>9. Evidências e auditoria documental</h2>
<p>9.1. O Cliente poderá solicitar, em frequência razoável e mediante aviso prévio, evidências documentais das medidas de segurança e governança adotadas pela kycert, respeitados sigilo comercial, segurança, confidencialidade, limitações técnicas e informações de terceiros.</p>
<h2>10. Prevalência e sobrevivência</h2>
<p>10.1. Em caso de conflito entre este Anexo e a proposta comercial, prevalecerão as condições comerciais da proposta apenas quanto a preço, plano, escopo, vigência e pagamento.</p>
<p>10.2. As obrigações deste Anexo sobrevivem ao término da contratação enquanto houver dados pessoais sob custódia da kycert ou obrigação legal de retenção.</p>
<p>10.3. Quando houver contrato específico com o Cliente que regule o tratamento de dados pessoais de forma diferente ou fixe a versão deste Anexo aplicável a ele, prevalecerá o contrato.</p>
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
