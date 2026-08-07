import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { BreadcrumbJsonLd } from '@/components/BreadcrumbJsonLd';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Privacidade & LGPD',
  description: 'Política de privacidade e tratamento de dados pessoais da kycert conforme a LGPD.',
  alternates: { canonical: '/privacidade' },
  openGraph: {
    title: 'Privacidade & LGPD | kycert',
    description: 'Política de privacidade e tratamento de dados pessoais da kycert conforme a LGPD.',
  },
  twitter: {
    title: 'Privacidade & LGPD | kycert',
    description: 'Política de privacidade e tratamento de dados pessoais da kycert conforme a LGPD.',
  },
};

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Privacidade & LGPD"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Legal</span><span class="sep">/</span><span style="color:var(--text-secondary)">Privacidade & LGPD</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Legal</div><h1>Política de Privacidade e LGPD da kycert</h1>
<div class="art-meta"><span>Última atualização: 27 de maio de 2026</span></div>
<p>Esta Política de Privacidade explica como a kycert coleta, utiliza, armazena, compartilha e protege dados pessoais no contexto de sua plataforma tecnológica, incluindo painel web, APIs, integrações, consultas, validações, fluxos de onboarding digital, análise documental, apoio a KYC/KYB, prevenção a fraudes e automação de processos de compliance.</p>
<p>A plataforma kycert é operada por KYCERT DESENVOLVIMENTO LTDA, inscrita no CNPJ nº 68.453.721/0001-90, doravante denominada simplesmente "kycert".</p>
<p>Esta Política deve ser lida em conjunto com os Termos de Uso da kycert e com eventuais contratos, propostas comerciais, ordens de serviço ou documentos complementares aplicáveis.</p>
<h2>1. Quem somos e papéis no tratamento de dados</h2>
<p>1.1. A kycert é uma plataforma tecnológica voltada ao apoio em validação cadastral, verificação de identidade, análise documental, KYC, KYB, onboarding digital, prevenção a fraudes, automação de fluxos de compliance e consultas ou validações por fontes internas e/ou terceiros.</p>
<p>1.2. A kycert poderá tratar dados pessoais em nome dos seus Clientes, conforme as informações e instruções recebidas para uso da plataforma. Em algumas situações, também poderá tratar dados para finalidades próprias, como gestão de contas, segurança, suporte, cobrança, melhoria da plataforma, prevenção de abusos e cumprimento de obrigações legais.</p>
<p>1.3. O Cliente é responsável por garantir que possui fundamento legal adequado para coletar, enviar, consultar, integrar ou tratar dados pessoais por meio da plataforma kycert.</p>
<h2>2. Dados pessoais que podem ser coletados ou tratados</h2>
<p>2.1. A kycert poderá coletar ou tratar diferentes categorias de dados, conforme o uso da plataforma, o plano contratado, as integrações habilitadas e as informações fornecidas pelo Cliente, pelos Usuários, pelos titulares ou por terceiros autorizados.</p>
<p>2.2. Esses dados podem incluir:</p>
<p>dados cadastrais, como nome, razão social, nome fantasia, CPF, CNPJ, data de nascimento, nacionalidade, endereço e dados de cadastro;</p>
<p>dados de identificação, como números de documentos, informações de identidade, dados de representantes legais, sócios, administradores, procuradores, beneficiários finais ou pessoas relacionadas;</p>
<p>documentos, como documentos de identificação, comprovantes, contratos sociais, atos societários, procurações, certidões, documentos empresariais e outros arquivos enviados para análise;</p>
<p>imagens, como fotos, capturas, selfies, imagens de documentos, evidências visuais ou arquivos necessários à verificação de identidade e análise documental;</p>
<p>dados de contato, como e-mail, telefone, endereço, cargo, departamento e informações profissionais;</p>
<p>dados empresariais, como informações cadastrais de empresas, composição societária, dados comerciais, registros públicos, informações de representantes, documentos societários e dados relacionados a processos de KYB;</p>
<p>dados técnicos, como endereço IP, identificadores de dispositivo, navegador, sistema operacional, data e horário de acesso, identificadores de sessão, chaves de API, metadados técnicos e informações de conexão;</p>
<p>logs e trilhas de auditoria, como acessos, autenticações, consultas realizadas, eventos de API, ações de Usuários, alterações de configuração, falhas, registros de segurança e interações operacionais;</p>
<p>dados de uso da plataforma, como funcionalidades acessadas, volume de consultas, integrações utilizadas, preferências, eventos de navegação, métricas de desempenho e registros de suporte;</p>
<p>dados de cobrança e relacionamento comercial, como informações de plano, consumo, pagamentos, notas fiscais, contatos financeiros e histórico de atendimento.</p>
<p>2.3. A kycert não solicita dados pessoais sensíveis de forma ampla ou indiscriminada. No entanto, determinados documentos, imagens ou validações podem conter informações sensíveis ou permitir inferências sensíveis, dependendo do conteúdo enviado pelo Cliente ou exigido pelo fluxo contratado. Nesses casos, o Cliente deve avaliar a necessidade, proporcionalidade e base legal adequada para o tratamento.</p>
<h2>3. Como os dados são coletados</h2>
<p>3.1. Os dados podem ser coletados ou recebidos por meio de:</p>
<p>cadastro e uso da plataforma pelo Cliente ou Usuários;</p>
<p>envio de dados, documentos, imagens ou informações pelo Cliente;</p>
<p>integrações via APIs, webhooks, sistemas internos ou ferramentas de terceiros;</p>
<p>consultas a fontes internas, fontes públicas, bases privadas, provedores, parceiros ou terceiros necessários à execução dos serviços;</p>
<p>interações com suporte, atendimento, área comercial ou canais de comunicação da kycert;</p>
<p>registros automáticos de uso, logs, autenticação, segurança e operação da plataforma.</p>
<h2>4. Finalidades do tratamento</h2>
<p>4.1. A kycert poderá tratar dados pessoais para as seguintes finalidades:</p>
<p>executar os serviços contratados pelo Cliente;</p>
<p>realizar validação cadastral;</p>
<p>apoiar processos de verificação de identidade;</p>
<p>realizar ou apoiar análise documental;</p>
<p>apoiar processos de KYC, KYB e onboarding digital;</p>
<p>prevenir, detectar ou investigar indícios de fraude, abuso, inconsistência ou uso indevido;</p>
<p>automatizar fluxos operacionais de compliance;</p>
<p>permitir consultas, integrações e validações por fontes internas e/ou terceiros;</p>
<p>operar, manter, autenticar, proteger e melhorar a plataforma;</p>
<p>registrar logs de acesso, ações realizadas, eventos de autenticação, trilhas de auditoria e interações operacionais;</p>
<p>fornecer suporte técnico, atendimento e comunicação com Clientes e Usuários;</p>
<p>gerenciar contas, planos, cobranças, faturamento e relacionamento comercial;</p>
<p>cumprir obrigações legais, regulatórias, judiciais, administrativas ou contratuais;</p>
<p>responder a solicitações de titulares, autoridades, parceiros, Clientes ou terceiros legitimamente autorizados;</p>
<p>realizar auditoria, rastreabilidade, segurança da informação, prevenção a incidentes e investigação de uso indevido;</p>
<p>desenvolver melhorias, métricas, estatísticas, qualidade, desempenho e evolução da plataforma, sempre que possível com dados agregados, anonimizados ou minimizados.</p>
<p>4.2. A kycert não presta consultoria jurídica, financeira ou regulatória. A plataforma fornece recursos tecnológicos de apoio, cabendo ao Cliente avaliar os resultados e decidir sobre seus processos, políticas e medidas internas.</p>
<h2>5. Bases legais da LGPD</h2>
<p>5.1. O tratamento de dados pessoais poderá se apoiar em diferentes bases legais previstas na LGPD, conforme o caso, a finalidade e o tipo de dado tratado. As bases legais podem incluir, por exemplo:</p>
<p>execução de contrato ou de procedimentos preliminares relacionados a contrato;</p>
<p>cumprimento de obrigação legal ou regulatória;</p>
<p>exercício regular de direitos em processos judiciais ou administrativos;</p>
<p>legítimo interesse da kycert, do Cliente ou de terceiros, quando aplicável e respeitados os direitos e liberdades fundamentais dos titulares;</p>
<p>prevenção à fraude e à segurança do titular, especialmente em processos de identificação e autenticação;</p>
<p>consentimento, quando exigido ou escolhido como base adequada para determinado fluxo.</p>
<p>5.2. Quando os dados forem tratados pela kycert em nome do Cliente, caberá ao Cliente definir a base legal aplicável ao uso da plataforma em seu fluxo de negócio.</p>
<h2>6. Compartilhamento de dados com terceiros</h2>
<p>6.1. A kycert poderá compartilhar dados pessoais ou permitir o acesso a dados por terceiros quando necessário para prestar, operar, proteger, integrar, melhorar ou viabilizar a plataforma.</p>
<p>6.2. O compartilhamento poderá ocorrer com:</p>
<p>provedores de infraestrutura, hospedagem, armazenamento, processamento, monitoramento e segurança;</p>
<p>provedores de tecnologia, autenticação, comunicação, suporte, análise, observabilidade e atendimento;</p>
<p>APIs, bases de dados, bureaus, fontes públicas ou privadas, provedores de OCR, validação cadastral, análise documental, verificação de identidade, prevenção a fraudes ou apoio a KYC/KYB;</p>
<p>ferramentas de e-mail, WhatsApp, webhooks, automações e integrações usadas para executar os serviços;</p>
<p>parceiros técnicos e fornecedores necessários à execução dos serviços;</p>
<p>prestadores de serviços administrativos, financeiros, jurídicos, contábeis ou de cobrança;</p>
<p>autoridades públicas, órgãos reguladores, Poder Judiciário, entidades governamentais ou terceiros quando houver obrigação legal, ordem válida, solicitação legítima ou necessidade de exercício regular de direitos;</p>
<p>empresas envolvidas em operações societárias, investimentos ou venda de ativos, observadas as salvaguardas aplicáveis.</p>
<p>6.3. A kycert busca limitar o compartilhamento ao necessário para cada finalidade e adotar medidas contratuais, técnicas e organizacionais razoáveis para proteger os dados.</p>
<p>6.4. Determinados serviços de terceiros podem possuir seus próprios termos, políticas e práticas de privacidade. Quando aplicável, o Cliente deverá avaliar se tais condições são compatíveis com seu uso da plataforma e com suas obrigações legais.</p>
<h2>7. Armazenamento e retenção</h2>
<p>7.1. Os dados pessoais serão armazenados pelo tempo necessário para cumprir as finalidades descritas nesta Política, executar os serviços contratados, atender a obrigações legais, regulatórias ou contratuais, preservar direitos, prevenir fraudes, manter registros de segurança e auditoria ou conforme instruções válidas do Cliente.</p>
<p>7.2. Após o encerramento da conta ou da contratação, os dados poderão ser mantidos pelo período necessário para cumprimento de obrigações legais, regulatórias ou contratuais, auditoria, prevenção a fraudes, segurança, cobrança e exercício regular de direitos.</p>
<p>7.3. Depois do prazo necessário, os dados poderão ser excluídos, anonimizados ou mantidos de forma restrita quando houver base legal para conservação.</p>
<h2>8. Segurança da informação</h2>
<p>8.1. A kycert adota medidas técnicas, administrativas e organizacionais razoáveis para proteger dados pessoais contra acessos não autorizados, perda, alteração, divulgação indevida, destruição, uso indevido ou tratamento incompatível com as finalidades informadas.</p>
<p>8.2. Essas medidas podem incluir controles de acesso, gestão de credenciais, registros de eventos, segregação de permissões, monitoramento, revisão de processos e práticas internas de segurança compatíveis com o porte, contexto e riscos da operação.</p>
<p>8.3. Embora a kycert empregue esforços para proteger os dados, nenhum sistema, plataforma, integração, transmissão pela internet ou ambiente tecnológico é totalmente imune a riscos. O Cliente também deve adotar medidas adequadas de segurança em seus próprios ambientes, sistemas, dispositivos, credenciais, integrações e procedimentos internos.</p>
<h2>9. Logs, trilhas de auditoria e registros operacionais</h2>
<p>9.1. A plataforma poderá registrar logs de acesso, ações realizadas, eventos de autenticação, uso de APIs, consultas, interações operacionais, alterações de configuração, eventos de segurança, erros, trilhas de auditoria e demais registros técnicos.</p>
<p>9.2. Esses registros podem ser utilizados para segurança, rastreabilidade, suporte, auditoria, prevenção de fraudes, investigação de incidentes, melhoria da plataforma, comprovação de uso e cumprimento de obrigações legais, regulatórias ou contratuais.</p>
<p>9.3. O acesso, a exportação ou o compartilhamento de logs poderá ser limitado por critérios técnicos, legais, contratuais, comerciais, de segurança ou de confidencialidade.</p>
<p>9.4. A kycert também poderá registrar evidências de aceite dos Termos de Uso, da Política de Privacidade e de documentos relacionados, incluindo checkbox, data e hora, endereço IP, Usuário responsável, versão do documento aceita e registros técnicos associados.</p>
<h2>10. Direitos dos titulares</h2>
<p>10.1. Nos termos da LGPD, os titulares de dados pessoais podem solicitar, conforme o caso:</p>
<p>confirmação da existência de tratamento;</p>
<p>acesso aos dados pessoais;</p>
<p>correção de dados incompletos, inexatos ou desatualizados;</p>
<p>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;</p>
<p>portabilidade dos dados, quando aplicável e regulamentada;</p>
<p>informação sobre compartilhamento de dados;</p>
<p>revogação do consentimento, quando aplicável;</p>
<p>revisão de decisões tomadas unicamente com base em tratamento automatizado, quando cabível.</p>
<p>10.2. Solicitações relacionadas a dados tratados pela kycert em nome de um Cliente poderão precisar ser encaminhadas ao próprio Cliente ou depender de validação e instrução dele.</p>
<p>10.3. A kycert poderá solicitar informações adicionais para confirmar a identidade do solicitante, proteger os titulares e prevenir acessos indevidos.</p>
<h2>11. Encarregado e canal de contato para privacidade</h2>
<p>11.1. O Encarregado pelo Tratamento de Dados Pessoais da kycert é Matheus Menezes.</p>
<p>11.2. Para dúvidas, solicitações ou assuntos relacionados à privacidade e proteção de dados pessoais, entre em contato pelo e-mail:</p>
<p>comercial@kycert.com.br</p>
<h2>12. Transferência internacional de dados</h2>
<p>12.1. A kycert poderá utilizar provedores de tecnologia, infraestrutura, hospedagem, suporte, armazenamento, segurança, comunicação, processamento ou integração localizados no Brasil ou no exterior.</p>
<p>12.2. Quando houver transferência internacional de dados pessoais, a kycert buscará adotar medidas compatíveis com a LGPD, incluindo mecanismos contratuais, técnicos e organizacionais adequados ao contexto e aos riscos envolvidos.</p>
<p>12.3. Quando aplicável, tais transferências poderão se apoiar nas hipóteses previstas na LGPD, incluindo contratos com provedores, cláusulas-padrão, garantias adequadas ou outros mecanismos legalmente aceitos.</p>
<h2>13. Cookies e tecnologias similares</h2>
<p>13.1. A kycert poderá utilizar cookies, pixels, identificadores, armazenamento local, SDKs, ferramentas de análise ou tecnologias similares em seu site, painel web e plataforma.</p>
<p>13.2. Essas tecnologias podem ser utilizadas para:</p>
<p>permitir o funcionamento da plataforma;</p>
<p>autenticar Usuários e manter sessões;</p>
<p>reforçar segurança;</p>
<p>lembrar preferências;</p>
<p>medir desempenho e uso;</p>
<p>entender interações com funcionalidades;</p>
<p>melhorar a experiência e a qualidade dos serviços;</p>
<p>apoiar comunicações, suporte e análises operacionais.</p>
<p>13.3. O Usuário poderá gerenciar cookies por meio das configurações do navegador ou de ferramentas disponibilizadas pela kycert, quando aplicável. A desativação de determinados cookies pode afetar o funcionamento da plataforma.</p>
<h2>14. Decisões automatizadas e análise humana</h2>
<p>14.1. A plataforma kycert pode apoiar fluxos automatizados de validação, classificação, conferência, alerta, consulta ou análise operacional.</p>
<p>14.2. Os resultados fornecidos pela plataforma devem ser interpretados como apoio à análise do Cliente. A kycert não garante conformidade regulatória, não elimina fraudes e não substitui avaliação humana quando ela for necessária ou recomendável.</p>
<p>14.3. Nos termos do art. 20 da LGPD, o titular poderá solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado que afetem seus interesses. Quando a decisão for tomada pelo Cliente com apoio da plataforma, a solicitação poderá ser encaminhada ao próprio Cliente, responsável por seus critérios, políticas e decisão final. A kycert poderá apoiar o Cliente com informações disponíveis na plataforma, respeitados sigilo comercial, segurança e limitações técnicas.</p>
<h2>15. Privacidade de menores de idade</h2>
<p>15.1. A plataforma kycert é voltada ao uso profissional, comercial e institucional por Clientes e Usuários autorizados.</p>
<p>15.2. Caso o Cliente utilize a plataforma para tratar dados de menores de idade em algum fluxo específico, deverá garantir que possui fundamento legal adequado, necessidade legítima, proporcionalidade, informação apropriada e demais cuidados exigidos pela legislação aplicável.</p>
<h2>16. Alterações nesta Política</h2>
<p>16.1. A kycert poderá atualizar esta Política de Privacidade para refletir mudanças legais, regulatórias, técnicas, operacionais, comerciais ou de segurança.</p>
<p>16.2. A versão vigente será indicada pela data de última atualização. Quando alterações relevantes forem realizadas, a kycert poderá comunicar os Clientes e Usuários por meios razoáveis, como e-mail, aviso na plataforma ou outro canal disponível.</p>
<p>16.3. O uso contínuo da plataforma após a publicação de alterações indica ciência da nova versão da Política, sem prejuízo de direitos dos titulares previstos na legislação aplicável.</p>
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
