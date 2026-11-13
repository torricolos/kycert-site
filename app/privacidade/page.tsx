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
    images: [{ url: 'https://kycert.com.br/og.png', width: 1200, height: 630, alt: 'kycert: comprove cada cliente, cada decisão.' }],
    locale: 'pt_BR',
    siteName: 'kycert',
    type: 'website',
    title: 'Privacidade & LGPD | kycert',
    description: 'Política de privacidade e tratamento de dados pessoais da kycert conforme a LGPD.',
  },
  twitter: {
    images: ['https://kycert.com.br/og.png'],
    card: 'summary_large_image',
    title: 'Privacidade & LGPD | kycert',
    description: 'Política de privacidade e tratamento de dados pessoais da kycert conforme a LGPD.',
  },
};

const BREADCRUMB_ITEMS = [{"name":"Início","path":"/"},{"name":"Privacidade & LGPD"}];

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Legal</span><span class="sep">/</span><span style="color:var(--text-secondary)">Privacidade &amp; LGPD</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Legal</div><h1>Política de Privacidade e LGPD da kycert</h1>
<div class="art-meta"><span>Última atualização: 13 de novembro de 2026</span></div>
<p>Esta Política de Privacidade explica como a kycert coleta, utiliza, armazena, compartilha e protege dados pessoais no contexto de sua plataforma tecnológica, incluindo painel web, APIs, integrações, consultas, validações, fluxos de onboarding digital, análise documental, apoio a KYC/KYB, prevenção a fraudes e automação de processos de compliance.</p>
<p>A plataforma kycert é operada por KYCERT DESENVOLVIMENTO LTDA, inscrita no CNPJ nº 68.453.721/0001-90, doravante denominada simplesmente "kycert".</p>
<p>Esta Política deve ser lida em conjunto com os Termos de Uso da kycert e com eventuais contratos, propostas comerciais, ordens de serviço ou documentos complementares aplicáveis.</p>
<h2>1. Quem somos e papéis no tratamento de dados</h2>
<p>1.1. A kycert é uma plataforma tecnológica voltada ao apoio em validação cadastral, verificação de identidade, análise documental, KYC, KYB, onboarding digital, prevenção a fraudes, automação de fluxos de compliance e consultas ou validações por fontes internas e/ou terceiros.</p>
<p>1.2. A kycert poderá tratar dados pessoais em nome dos seus Clientes, conforme as informações e instruções recebidas para uso da plataforma. Em algumas situações, também poderá tratar dados para finalidades próprias, como gestão de contas, segurança, suporte, cobrança, melhoria da plataforma, prevenção de abusos e cumprimento de obrigações legais. Dados tratados em nome dos Clientes não são usados para treinar modelos, enriquecer bases, fazer benchmarking ou ser oferecidos a terceiros, ressalvados dados efetivamente anonimizados ou agregados. Dados recebidos pela integração com o WhatsApp Business Platform seguem as regras da seção 7.</p>
<p>1.3. O Cliente é responsável por garantir que possui fundamento legal adequado para coletar, enviar, consultar, integrar ou tratar dados pessoais por meio da plataforma kycert.</p>
<h2>2. Dados pessoais que podem ser coletados ou tratados</h2>
<p>2.1. A kycert poderá coletar ou tratar diferentes categorias de dados, conforme o uso da plataforma, o plano contratado, as integrações habilitadas e as informações fornecidas pelo Cliente, pelos Usuários, pelos titulares ou por terceiros autorizados.</p>
<p>2.2. Esses dados podem incluir:</p>
<ul>
<li>dados cadastrais, como nome, razão social, nome fantasia, CPF, CNPJ, data de nascimento, nacionalidade, endereço e dados de cadastro;</li>
<li>dados de identificação, como números de documentos, informações de identidade, dados de representantes legais, sócios, administradores, procuradores, beneficiários finais ou pessoas relacionadas;</li>
<li>documentos, como documentos de identificação, comprovantes, contratos sociais, atos societários, procurações, certidões, documentos empresariais e outros arquivos enviados para análise;</li>
<li>imagens, como fotos, capturas, selfies, imagens de documentos, evidências visuais ou arquivos necessários à verificação de identidade e análise documental, incluindo dados biométricos faciais quando a funcionalidade de biometria for contratada;</li>
<li>dados de contato, como e-mail, telefone, endereço, cargo, departamento e informações profissionais;</li>
<li>dados empresariais, como informações cadastrais de empresas, composição societária, dados comerciais, registros públicos, informações de representantes, documentos societários e dados relacionados a processos de KYB;</li>
<li>dados técnicos, como endereço IP, identificadores de dispositivo, navegador, sistema operacional, data e horário de acesso, identificadores de sessão, chaves de API, metadados técnicos e informações de conexão;</li>
<li>logs e trilhas de auditoria, como acessos, autenticações, consultas realizadas, eventos de API, ações de Usuários, alterações de configuração, falhas, registros de segurança e interações operacionais;</li>
<li>dados de uso da plataforma, como funcionalidades acessadas, volume de consultas, integrações utilizadas, preferências, eventos de navegação, métricas de desempenho e registros de suporte;</li>
<li>dados de cobrança e relacionamento comercial, como informações de plano, consumo, pagamentos, notas fiscais, contatos financeiros e histórico de atendimento.</li>
</ul>
<p>2.3. Algumas funcionalidades da plataforma, quando contratadas e acionadas pelo Cliente, envolvem por sua natureza o tratamento de dados pessoais sensíveis, em especial dados biométricos usados na verificação de identidade, como prova de vida e comparação facial. Nesses fluxos, o tratamento é parte prevista do serviço, e cabe ao Cliente, como controlador, definir a base legal aplicável nos termos do art. 11 da LGPD. Outras validações exigem cautela, como consultas sobre pessoas expostas politicamente (PEP) e listas restritivas, ainda que nem todo dado dessas consultas seja dado sensível na definição da LGPD. Documentos e imagens enviados também podem conter informações sensíveis ou permitir inferências sensíveis. A kycert não trata todas essas categorias em toda operação: o tratamento depende das funcionalidades contratadas e do fluxo configurado pelo Cliente, que deve avaliar sua necessidade e proporcionalidade.</p>
<h2>3. Como os dados são coletados</h2>
<p>3.1. Os dados podem ser coletados ou recebidos por meio de:</p>
<ul>
<li>cadastro e uso da plataforma pelo Cliente ou Usuários;</li>
<li>envio de dados, documentos, imagens ou informações pelo Cliente;</li>
<li>integrações via APIs, webhooks, sistemas internos ou ferramentas de terceiros;</li>
<li>consultas a fontes internas, fontes públicas, bases privadas, provedores, parceiros ou terceiros necessários à execução dos serviços;</li>
<li>interações com suporte, atendimento, área comercial ou canais de comunicação da kycert;</li>
<li>registros automáticos de uso, logs, autenticação, segurança e operação da plataforma.</li>
</ul>
<h2>4. Finalidades do tratamento</h2>
<p>4.1. A kycert poderá tratar dados pessoais para as seguintes finalidades:</p>
<ul>
<li>executar os serviços contratados pelo Cliente;</li>
<li>realizar validação cadastral;</li>
<li>apoiar processos de verificação de identidade;</li>
<li>realizar ou apoiar análise documental;</li>
<li>apoiar processos de KYC, KYB e onboarding digital;</li>
<li>prevenir, detectar ou investigar indícios de fraude, abuso, inconsistência ou uso indevido;</li>
<li>automatizar fluxos operacionais de compliance;</li>
<li>permitir consultas, integrações e validações por fontes internas e/ou terceiros;</li>
<li>operar, manter, autenticar, proteger e melhorar a plataforma;</li>
<li>registrar logs de acesso, ações realizadas, eventos de autenticação, trilhas de auditoria e interações operacionais;</li>
<li>fornecer suporte técnico, atendimento e comunicação com Clientes e Usuários;</li>
<li>gerenciar contas, planos, cobranças, faturamento e relacionamento comercial;</li>
<li>cumprir obrigações legais, regulatórias, judiciais, administrativas ou contratuais;</li>
<li>responder a solicitações de titulares, autoridades, parceiros, Clientes ou terceiros legitimamente autorizados;</li>
<li>realizar auditoria, rastreabilidade, segurança da informação, prevenção a incidentes e investigação de uso indevido;</li>
<li>desenvolver melhorias, métricas, estatísticas, qualidade, desempenho e evolução da plataforma, usando apenas dados agregados ou anonimizados quando se tratar de dados tratados em nome dos Clientes (item 1.2).</li>
</ul>
<p>4.2. A kycert não presta consultoria jurídica, financeira ou regulatória. A plataforma fornece recursos tecnológicos de apoio, cabendo ao Cliente avaliar os resultados e decidir sobre seus processos, políticas e medidas internas.</p>
<p>4.3. As finalidades próprias da kycert descritas no item 4.1, como melhoria, métricas, estatísticas e evolução da plataforma, não se aplicam aos dados recebidos pela integração com o WhatsApp Business Platform (Meta). Esses dados são tratados apenas para prestar o serviço ao Cliente, conforme a seção 7.</p>
<h2>5. Bases legais da LGPD</h2>
<p>5.1. O tratamento de dados pessoais poderá se apoiar em diferentes bases legais previstas na LGPD, conforme o caso, a finalidade e o tipo de dado tratado. As bases legais podem incluir, por exemplo:</p>
<ul>
<li>execução de contrato ou de procedimentos preliminares relacionados a contrato;</li>
<li>cumprimento de obrigação legal ou regulatória;</li>
<li>exercício regular de direitos em processos judiciais ou administrativos;</li>
<li>legítimo interesse da kycert, do Cliente ou de terceiros, quando aplicável e respeitados os direitos e liberdades fundamentais dos titulares;</li>
<li>prevenção à fraude e à segurança do titular, especialmente em processos de identificação e autenticação;</li>
<li>consentimento, quando exigido ou escolhido como base adequada para determinado fluxo.</li>
</ul>
<p>5.2. Quando os dados forem tratados pela kycert em nome do Cliente, caberá ao Cliente definir a base legal aplicável ao uso da plataforma em seu fluxo de negócio.</p>
<h2>6. Compartilhamento de dados com terceiros</h2>
<p>6.1. A kycert poderá compartilhar dados pessoais ou permitir o acesso a dados por terceiros quando necessário para prestar, operar, proteger, integrar, melhorar ou viabilizar a plataforma.</p>
<p>6.2. O compartilhamento poderá ocorrer com:</p>
<ul>
<li>provedores de infraestrutura, hospedagem, armazenamento, processamento, monitoramento e segurança;</li>
<li>provedores de tecnologia, autenticação, comunicação, suporte, análise, observabilidade e atendimento;</li>
<li>APIs, bases de dados, bureaus, fontes públicas ou privadas, provedores de OCR, validação cadastral, análise documental, verificação de identidade, prevenção a fraudes ou apoio a KYC/KYB;</li>
<li>ferramentas de e-mail, WhatsApp Business Platform (conforme a seção 7), webhooks, automações e integrações usadas para executar os serviços;</li>
<li>parceiros técnicos e fornecedores necessários à execução dos serviços;</li>
<li>prestadores de serviços administrativos, financeiros, jurídicos, contábeis ou de cobrança;</li>
<li>autoridades públicas, órgãos reguladores, Poder Judiciário, entidades governamentais ou terceiros quando houver obrigação legal, ordem válida, solicitação legítima ou necessidade de exercício regular de direitos;</li>
<li>empresas envolvidas em operações societárias, investimentos ou venda de ativos, observadas as salvaguardas aplicáveis.</li>
</ul>
<p>6.3. A kycert busca limitar o compartilhamento ao necessário para cada finalidade e adotar medidas contratuais, técnicas e organizacionais razoáveis para proteger os dados.</p>
<p>6.4. Determinados serviços de terceiros podem possuir seus próprios termos, políticas e práticas de privacidade. Quando aplicável, o Cliente deverá avaliar se tais condições são compatíveis com seu uso da plataforma e com suas obrigações legais.</p>
<h2>7. Integração com o WhatsApp Business Platform (Meta)</h2>
<p>7.1. A kycert permite que o Cliente conecte sua própria conta do WhatsApp Business à plataforma, por meio do WhatsApp Business Platform, serviço operado pela Meta Platforms, Inc. e suas afiliadas ("Meta"), para enviar alertas e executar fluxos de comunicação em seu nome.</p>
<p>7.2. Quando o Cliente conecta a conta, a kycert recebe e trata: identificadores da conta WhatsApp Business e da conta comercial na Meta; números de telefone conectados; tokens de acesso concedidos pelo Cliente; modelos (templates) de mensagem; números de telefone dos destinatários; conteúdo das mensagens enviadas e recebidas; e status de entrega e leitura.</p>
<p>7.3. Esses dados são usados exclusivamente para prestar o serviço contratado pelo Cliente: enviar alertas e mensagens, executar os fluxos configurados por ele, registrar o histórico de envios e dar suporte à integração.</p>
<p>7.4. A kycert não vende, aluga ou cede dados obtidos pela Meta e não os utiliza para publicidade, perfilamento, enriquecimento de bases, treinamento de modelos ou finalidades próprias.</p>
<p>7.5. Nessas operações, a kycert atua como operadora, e o Cliente como controlador dos dados, nos termos da LGPD. As mensagens trafegam pela infraestrutura da Meta e também estão sujeitas aos termos e políticas da Meta.</p>
<p>7.6. O Cliente pode desconectar a integração a qualquer momento, pelo painel ou pelo e-mail <a href="mailto:privacidade@kycert.com.br">privacidade@kycert.com.br</a>. Na desconexão, a kycert desativa seu acesso à conta, revogando ou invalidando os tokens de acesso conforme o mecanismo técnico da integração, e exclui os dados operacionais recebidos pela integração em até 15 (quinze) dias, ressalvados os registros mantidos por obrigação legal e as cópias de segurança, eliminadas no ciclo regular de rotação. O passo a passo está em <a href="/exclusao-de-dados">kycert.com.br/exclusao-de-dados</a>.</p>
<h2>8. Armazenamento e retenção</h2>
<p>8.1. Os dados pessoais serão armazenados pelo tempo necessário para cumprir as finalidades descritas nesta Política, executar os serviços contratados, atender a obrigações legais, regulatórias ou contratuais, preservar direitos, prevenir fraudes, manter registros de segurança e auditoria ou conforme instruções válidas do Cliente.</p>
<p>8.2. Após o encerramento da conta ou da contratação, os dados poderão ser mantidos pelo período necessário para cumprimento de obrigações legais, regulatórias ou contratuais, auditoria, prevenção a fraudes, segurança, cobrança e exercício regular de direitos.</p>
<p>8.3. Depois do prazo necessário, os dados poderão ser excluídos, anonimizados ou mantidos de forma restrita quando houver base legal para conservação.</p>
<h2>9. Segurança da informação</h2>
<p>9.1. A kycert adota medidas técnicas, administrativas e organizacionais razoáveis para proteger dados pessoais contra acessos não autorizados, perda, alteração, divulgação indevida, destruição, uso indevido ou tratamento incompatível com as finalidades informadas.</p>
<p>9.2. Essas medidas podem incluir controles de acesso, gestão de credenciais, registros de eventos, segregação de permissões, monitoramento, revisão de processos e práticas internas de segurança compatíveis com o porte, contexto e riscos da operação.</p>
<p>9.3. Embora a kycert empregue esforços para proteger os dados, nenhum sistema, plataforma, integração, transmissão pela internet ou ambiente tecnológico é totalmente imune a riscos. O Cliente também deve adotar medidas adequadas de segurança em seus próprios ambientes, sistemas, dispositivos, credenciais, integrações e procedimentos internos.</p>
<h2>10. Logs, trilhas de auditoria e registros operacionais</h2>
<p>10.1. A plataforma poderá registrar logs de acesso, ações realizadas, eventos de autenticação, uso de APIs, consultas, interações operacionais, alterações de configuração, eventos de segurança, erros, trilhas de auditoria e demais registros técnicos.</p>
<p>10.2. Esses registros podem ser utilizados para segurança, rastreabilidade, suporte, auditoria, prevenção de fraudes, investigação de incidentes, melhoria da plataforma, comprovação de uso e cumprimento de obrigações legais, regulatórias ou contratuais.</p>
<p>10.3. O acesso, a exportação ou o compartilhamento de logs poderá ser limitado por critérios técnicos, legais, contratuais, comerciais, de segurança ou de confidencialidade.</p>
<p>10.4. A kycert também poderá registrar evidências de aceite dos Termos de Uso, da Política de Privacidade e de documentos relacionados, incluindo checkbox, data e hora, endereço IP, Usuário responsável, versão do documento aceita e registros técnicos associados.</p>
<h2>11. Direitos dos titulares</h2>
<p>11.1. Nos termos da LGPD, os titulares de dados pessoais podem solicitar, conforme o caso:</p>
<ul>
<li>confirmação da existência de tratamento;</li>
<li>acesso aos dados pessoais;</li>
<li>correção de dados incompletos, inexatos ou desatualizados;</li>
<li>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;</li>
<li>portabilidade dos dados, quando aplicável e regulamentada;</li>
<li>informação sobre compartilhamento de dados;</li>
<li>revogação do consentimento, quando aplicável;</li>
<li>revisão de decisões tomadas unicamente com base em tratamento automatizado, quando cabível.</li>
</ul>
<p>11.2. Solicitações relacionadas a dados tratados pela kycert em nome de um Cliente poderão precisar ser encaminhadas ao próprio Cliente ou depender de validação e instrução dele.</p>
<p>11.3. A kycert poderá solicitar informações adicionais para confirmar a identidade do solicitante, proteger os titulares e prevenir acessos indevidos.</p>
<p>11.4. O passo a passo para pedir a exclusão de dados, inclusive dos dados recebidos pela integração com o WhatsApp Business Platform, está em <a href="/exclusao-de-dados">kycert.com.br/exclusao-de-dados</a>.</p>
<h2>12. Encarregado e canal de contato para privacidade</h2>
<p>12.1. O Encarregado pelo Tratamento de Dados Pessoais da kycert é Afonso Henrique Deres.</p>
<p>12.2. Para dúvidas, solicitações ou assuntos relacionados à privacidade e proteção de dados pessoais, inclusive pedidos de exclusão, entre em contato pelo e-mail: <a href="mailto:privacidade@kycert.com.br">privacidade@kycert.com.br</a></p>
<h2>13. Transferência internacional de dados</h2>
<p>13.1. A kycert poderá utilizar provedores de tecnologia, infraestrutura, hospedagem, suporte, armazenamento, segurança, comunicação, processamento ou integração localizados no Brasil ou no exterior.</p>
<p>13.2. Quando houver transferência internacional de dados pessoais, a kycert buscará adotar medidas compatíveis com a LGPD, incluindo mecanismos contratuais, técnicos e organizacionais adequados ao contexto e aos riscos envolvidos.</p>
<p>13.3. Quando aplicável, tais transferências poderão se apoiar nas hipóteses previstas na LGPD, incluindo contratos com provedores, cláusulas-padrão, garantias adequadas ou outros mecanismos legalmente aceitos.</p>
<h2>14. Cookies e tecnologias similares</h2>
<p>14.1. A kycert poderá utilizar cookies, pixels, identificadores, armazenamento local, SDKs, ferramentas de análise ou tecnologias similares em seu site, painel web e plataforma.</p>
<p>14.2. Essas tecnologias podem ser utilizadas para:</p>
<ul>
<li>permitir o funcionamento da plataforma;</li>
<li>autenticar Usuários e manter sessões;</li>
<li>reforçar segurança;</li>
<li>lembrar preferências;</li>
<li>medir desempenho e uso;</li>
<li>entender interações com funcionalidades;</li>
<li>melhorar a experiência e a qualidade dos serviços;</li>
<li>apoiar comunicações, suporte e análises operacionais.</li>
</ul>
<p>14.3. O Usuário poderá gerenciar cookies por meio das configurações do navegador ou de ferramentas disponibilizadas pela kycert, quando aplicável. A desativação de determinados cookies pode afetar o funcionamento da plataforma.</p>
<h2>15. Decisões automatizadas e análise humana</h2>
<p>15.1. A plataforma kycert pode apoiar fluxos automatizados de validação, classificação, conferência, alerta, consulta ou análise operacional.</p>
<p>15.2. Os resultados fornecidos pela plataforma devem ser interpretados como apoio à análise do Cliente. A kycert não garante conformidade regulatória, não elimina fraudes e não substitui avaliação humana quando ela for necessária ou recomendável.</p>
<p>15.3. Nos termos do art. 20 da LGPD, o titular poderá solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado que afetem seus interesses. Quando a decisão for tomada pelo Cliente com apoio da plataforma, a solicitação poderá ser encaminhada ao próprio Cliente, responsável por seus critérios, políticas e decisão final. A kycert poderá apoiar o Cliente com informações disponíveis na plataforma, respeitados sigilo comercial, segurança e limitações técnicas.</p>
<h2>16. Privacidade de menores de idade</h2>
<p>16.1. A plataforma kycert é voltada ao uso profissional, comercial e institucional por Clientes e Usuários autorizados.</p>
<p>16.2. Caso o Cliente utilize a plataforma para tratar dados de menores de idade em algum fluxo específico, deverá garantir que possui fundamento legal adequado, necessidade legítima, proporcionalidade, informação apropriada e demais cuidados exigidos pela legislação aplicável.</p>
<h2>17. Alterações nesta Política</h2>
<p>17.1. A kycert poderá atualizar esta Política de Privacidade para refletir mudanças legais, regulatórias, técnicas, operacionais, comerciais ou de segurança.</p>
<p>17.2. A versão vigente será indicada pela data de última atualização. Quando alterações relevantes forem realizadas, a kycert poderá comunicar os Clientes e Usuários por meios razoáveis, como e-mail, aviso na plataforma ou outro canal disponível.</p>
<p>17.3. O uso contínuo da plataforma após a publicação de alterações indica ciência da nova versão da Política, sem prejuízo de direitos dos titulares previstos na legislação aplicável.</p>
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
