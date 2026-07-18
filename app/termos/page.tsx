import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SiteInteractions from '@/components/SiteInteractions';

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Termos de uso da plataforma kycert.',
  alternates: { canonical: '/termos' },
  openGraph: {
    title: 'Termos de Uso | kycert',
    description: 'Termos de uso da plataforma kycert.',
  },
  twitter: {
    title: 'Termos de Uso | kycert',
    description: 'Termos de uso da plataforma kycert.',
  },
};

const BODY_HTML = `
<nav class="crumbs"><div class="wrap"><a href="/">Início</a><span class="sep">/</span><span>Legal</span><span class="sep">/</span><span style="color:var(--text-secondary)">Termos de Uso</span></div></nav>
<section style="padding:36px 24px 80px"><article class="article">
<div class="art-eyebrow">Legal</div><h1>Termos de Uso da Plataforma kycert</h1>
<div class="art-meta"><span>Última atualização: 27 de maio de 2026</span></div>
<p>Estes Termos de Uso regulam o acesso e a utilização da plataforma kycert, incluindo seu painel web, APIs, integrações, funcionalidades, recursos, relatórios, consultas e demais serviços disponibilizados.</p>
<p>A plataforma kycert é operada por MATHEUS MENEZES PARENTE OLIVEIRA LTDA, inscrita no CNPJ nº 59.959.589/0001-00, doravante denominada simplesmente "kycert".</p>
<p>Ao acessar, contratar ou utilizar a plataforma kycert, o cliente, usuário ou representante autorizado declara que leu, compreendeu e concorda com estes Termos de Uso.</p>
<h2>1. Definições</h2>
<p>1.1. Para fins destes Termos de Uso:</p>
<p>kycert significa a plataforma tecnológica voltada ao apoio em validação cadastral, verificação de identidade, análise documental, KYC, KYB, onboarding digital, prevenção a fraudes e automação de fluxos de compliance.</p>
<p>1.2. Cliente significa a pessoa jurídica ou pessoa física que contrata ou utiliza a plataforma kycert para fins profissionais, comerciais, operacionais ou institucionais. A plataforma kycert é voltada a uso B2B, profissional e empresarial, não a uso pessoal ou doméstico de consumidores finais.</p>
<p>1.3. Usuário significa qualquer pessoa autorizada pelo Cliente a acessar ou operar a plataforma kycert.</p>
<p>1.4. Titular significa a pessoa natural a quem se referem os dados pessoais tratados na plataforma.</p>
<p>1.5. Serviços de terceiros significam bases de dados, APIs, provedores, sistemas, ferramentas, integrações, infraestrutura, fornecedores ou parceiros utilizados para viabilizar determinadas funcionalidades da plataforma.</p>
<h2>2. Aceitação dos Termos</h2>
<p>2.1. O uso da plataforma kycert implica a aceitação destes Termos de Uso, bem como da Política de Privacidade da kycert e de eventuais condições comerciais, propostas, contratos, ordens de serviço ou documentos complementares aplicáveis.</p>
<p>2.2. Caso o Usuário esteja acessando a plataforma em nome de uma empresa, organização ou terceiro, declara possuir poderes suficientes para aceitar estes Termos em nome dessa parte.</p>
<p>2.3. Se o Cliente ou Usuário não concordar com estes Termos, deverá interromper imediatamente o uso da plataforma.</p>
<p>2.4. A kycert poderá registrar evidências de aceite destes Termos e da Política de Privacidade, incluindo, quando aplicável, checkbox de aceite, data e hora, endereço IP, Usuário responsável, versão do documento aceita e demais registros técnicos relacionados. Esses registros poderão ser utilizados para fins de segurança, auditoria, comprovação de aceite e exercício regular de direitos.</p>
<h2>3. Descrição geral dos serviços</h2>
<p>3.1. A kycert é uma ferramenta tecnológica que atua como camada de apoio à análise cadastral, documental, antifraude, KYC, KYB, onboarding digital e compliance.</p>
<p>3.2. A plataforma poderá oferecer, conforme o plano contratado e a disponibilidade técnica:</p>
<p>validação cadastral;</p>
<p>verificação de identidade;</p>
<p>análise documental;</p>
<p>apoio a processos de KYC e KYB;</p>
<p>onboarding digital;</p>
<p>prevenção e detecção de indícios de fraude;</p>
<p>automação de fluxos de compliance;</p>
<p>consultas, integrações e validações por fontes internas e/ou terceiros;</p>
<p>registro de logs, eventos, trilhas de auditoria e interações operacionais;</p>
<p>acesso via painel web, APIs e integrações.</p>
<p>3.3. A kycert não presta consultoria jurídica, financeira, contábil, regulatória ou de compliance. A plataforma fornece recursos tecnológicos de apoio, cabendo ao Cliente avaliar os resultados e tomar suas próprias decisões.</p>
<p>3.4. A kycert não garante que o uso da plataforma assegurará conformidade regulatória, eliminará fraudes, substituirá análise humana ou afastará riscos operacionais, legais, financeiros ou reputacionais.</p>
<h2>3.1. Beta, testes e early access</h2>
<p>3.5. Algumas funcionalidades da kycert poderão ser disponibilizadas em fase beta, piloto, teste, demonstração ou early access.</p>
<p>3.6. Nessas situações, as funcionalidades podem estar em desenvolvimento, sofrer alterações, ter limitações técnicas, apresentar instabilidades, ser descontinuadas ou não refletir a versão final do produto. O Cliente reconhece que esses recursos são disponibilizados para validação, aprendizado e melhoria da plataforma.</p>
<p>3.7. Salvo acordo específico em sentido diferente, funcionalidades beta ou de early access são fornecidas sem compromisso de continuidade, disponibilidade, desempenho, compatibilidade ou manutenção permanente.</p>
<h2>4. Cadastro, conta e credenciais de acesso</h2>
<p>4.1. Para utilizar a plataforma, o Cliente e seus Usuários poderão precisar criar contas, fornecer informações cadastrais e configurar credenciais de acesso.</p>
<p>4.2. O Cliente é responsável por:</p>
<p>fornecer informações corretas, completas e atualizadas;</p>
<p>manter a confidencialidade de logins, senhas, tokens, chaves de API e demais credenciais;</p>
<p>definir e controlar quem poderá acessar a plataforma em seu nome;</p>
<p>comunicar imediatamente à kycert qualquer suspeita de acesso não autorizado, perda de credenciais ou incidente de segurança;</p>
<p>garantir que seus Usuários utilizem a plataforma de acordo com estes Termos.</p>
<p>4.3. A kycert poderá recusar, suspender ou cancelar cadastros e acessos quando houver indícios de irregularidade, uso indevido, violação destes Termos, inadimplência ou risco à segurança da plataforma, de terceiros ou dos titulares de dados.</p>
<h2>5. Responsabilidades do Cliente e dos Usuários</h2>
<p>5.1. O Cliente e seus Usuários são responsáveis pelo uso adequado da plataforma e pelas decisões tomadas com base nas informações, resultados, indicadores, alertas, validações ou relatórios disponibilizados pela kycert.</p>
<p>Cabe ao Cliente:</p>
<p>5.2. assegurar que possui autorização, base legal ou fundamento legítimo para submeter dados pessoais, documentos, imagens, informações empresariais ou demais dados à plataforma;</p>
<p>5.3. informar os titulares de dados quando necessário, de acordo com a legislação aplicável;</p>
<p>5.4. utilizar a plataforma apenas para finalidades lícitas, legítimas e compatíveis com sua contratação;</p>
<p>5.5. revisar os resultados gerados pela plataforma antes de tomar decisões que afetem pessoas físicas, empresas, clientes, fornecedores, parceiros ou terceiros;</p>
<p>5.6. manter seus próprios procedimentos internos de governança, compliance, segurança, prevenção a fraudes e análise de risco;</p>
<p>5.7. cumprir a Lei Geral de Proteção de Dados Pessoais, Lei nº 13.709/2018, e demais normas aplicáveis.</p>
<p>5.8. O Cliente reconhece que a plataforma kycert é uma ferramenta de apoio à análise e não substitui políticas internas, avaliação humana, parecer jurídico, auditoria independente, diligência regulatória ou controles próprios.</p>
<h2>6. Usos proibidos</h2>
<p>6.1. O Cliente e os Usuários não poderão utilizar a plataforma para:</p>
<p>praticar atos ilícitos, abusivos, discriminatórios, fraudulentos ou contrários à legislação aplicável;</p>
<p>violar direitos de titulares de dados, consumidores, parceiros, fornecedores ou terceiros;</p>
<p>realizar tratamento de dados sem fundamento legal, autorização adequada ou finalidade legítima;</p>
<p>tentar acessar contas, dados, sistemas, integrações ou ambientes sem autorização;</p>
<p>interferir no funcionamento, segurança, disponibilidade ou integridade da plataforma;</p>
<p>realizar engenharia reversa, cópia, extração indevida, mineração, raspagem ou reprodução não autorizada da plataforma, de suas bases, relatórios, interfaces, APIs ou componentes;</p>
<p>compartilhar credenciais de acesso com pessoas não autorizadas;</p>
<p>utilizar a plataforma para vigilância indevida, perseguição, discriminação, criação de listas ilícitas ou tomada de decisão automatizada proibida por lei;</p>
<p>enviar arquivos, dados ou códigos maliciosos, inseguros ou incompatíveis com a finalidade da plataforma;</p>
<p>revender, sublicenciar ou disponibilizar acesso à plataforma a terceiros sem autorização prévia da kycert.</p>
<p>6.2. A kycert poderá adotar medidas técnicas, administrativas ou contratuais para prevenir, investigar ou interromper usos proibidos.</p>
<h2>7. Serviços, APIs, integrações e bases de terceiros</h2>
<p>7.1. A plataforma kycert poderá utilizar serviços de terceiros para viabilizar consultas, validações, integrações, infraestrutura, hospedagem, autenticação, processamento, suporte, análise documental, verificação de identidade, prevenção a fraudes ou outras funcionalidades.</p>
<p>7.2. Esses terceiros podem incluir, por exemplo, bureaus, provedores de OCR, APIs de validação, serviços de envio de e-mail, WhatsApp, webhooks, ferramentas de automação, infraestrutura em nuvem e outros fornecedores necessários à operação da plataforma.</p>
<p>7.3. Determinadas informações, resultados ou validações podem depender da disponibilidade, atualização, qualidade, critérios técnicos e regras de funcionamento desses terceiros.</p>
<p>7.4. A kycert não controla integralmente bases, APIs, sistemas, políticas, prazos, indisponibilidades, alterações ou decisões de terceiros. Por isso, determinados recursos podem sofrer instabilidades, limitações, atrasos, erros, mudanças, suspensões ou indisponibilidades.</p>
<p>7.5. A kycert não se responsabiliza por falhas, atrasos, indisponibilidades, perdas, alterações, bloqueios ou limitações decorrentes de integrações, APIs, bases de dados ou serviços de terceiros fora de seu controle razoável.</p>
<p>7.6. Quando aplicável, o uso de funcionalidades integradas a terceiros poderá estar sujeito também a termos, políticas, limites técnicos e condições comerciais desses terceiros.</p>
<h2>8. Disponibilidade da plataforma</h2>
<p>8.1. A kycert envidará esforços comercialmente razoáveis para manter a plataforma disponível, segura e funcional.</p>
<p>8.2. No entanto, a kycert não garante disponibilidade ininterrupta, ausência de falhas, funcionamento sem erros ou compatibilidade permanente com todos os sistemas, navegadores, dispositivos, integrações, APIs ou ambientes do Cliente.</p>
<p>8.3. A plataforma poderá ficar temporariamente indisponível por motivos como manutenção, atualizações, melhorias, falhas técnicas, indisponibilidade de terceiros, incidentes de segurança, eventos de força maior ou fatores fora do controle razoável da kycert.</p>
<p>8.4. Salvo se houver previsão expressa em contrato específico, proposta comercial ou documento complementar, a kycert não assume compromisso de SLA, uptime mínimo ou prazo máximo de resolução de incidentes.</p>
<h2>9. Pagamentos, planos, cobranças e inadimplência</h2>
<p>9.1. O acesso à plataforma poderá estar sujeito a planos, mensalidades, pacotes de uso, franquias, cobranças por volume, consultas, integrações, usuários, APIs ou outras métricas comerciais definidas em proposta, contrato, pedido, painel de contratação ou documento equivalente.</p>
<p>9.2. O Cliente deverá realizar os pagamentos nos prazos e condições acordados.</p>
<p>9.3. Em caso de atraso, inadimplência, falha de pagamento, contestação indevida, extrapolação de limites contratados ou descumprimento das condições comerciais, a kycert poderá, mediante comunicação ao Cliente quando aplicável:</p>
<p>restringir funcionalidades;</p>
<p>suspender temporariamente acessos;</p>
<p>limitar consultas, integrações ou uso de APIs;</p>
<p>bloquear novas operações;</p>
<p>cancelar a contratação, observadas as condições aplicáveis.</p>
<p>9.4. Valores, planos, limites, condições de cobrança e regras de reajuste deverão ser definidos em documento comercial próprio, quando aplicável.</p>
<p>9.5. Quando não houver regra específica em proposta ou contrato, a kycert buscará comunicar o Cliente antes de suspender o acesso por inadimplência, concedendo prazo razoável para regularização, salvo em situações de fraude, risco de segurança, uso indevido ou exigência legal.</p>
<h2>10. Propriedade intelectual</h2>
<p>10.1. A plataforma kycert, incluindo seu software, código, interfaces, marca, nome, identidade visual, documentação, fluxos, modelos, relatórios, estruturas, bancos de dados próprios, APIs, layouts, textos, componentes e demais materiais, é protegida por direitos de propriedade intelectual.</p>
<p>10.2. O uso da plataforma não transfere ao Cliente ou aos Usuários qualquer direito de propriedade sobre a kycert ou sobre seus componentes tecnológicos.</p>
<p>10.3. Durante a vigência da contratação, a kycert concede ao Cliente uma licença limitada, revogável, não exclusiva, intransferível e não sublicenciável para acessar e utilizar a plataforma de acordo com estes Termos e com as condições comerciais aplicáveis.</p>
<p>10.4. O Cliente mantém a titularidade sobre os dados, documentos e informações que inserir ou disponibilizar na plataforma, sem prejuízo dos direitos necessários para que a kycert processe tais informações com a finalidade de prestar os serviços contratados.</p>
<h2>11. Confidencialidade</h2>
<p>11.1. As partes deverão manter sigilo sobre informações confidenciais, comerciais, técnicas, operacionais, financeiras, estratégicas, cadastrais, documentais ou de segurança a que tiverem acesso em razão do uso ou fornecimento da plataforma.</p>
<p>11.2. Não serão consideradas confidenciais as informações que:</p>
<p>já eram públicas no momento da divulgação;</p>
<p>tornaram-se públicas sem violação destes Termos;</p>
<p>já eram conhecidas legitimamente pela parte receptora;</p>
<p>precisem ser divulgadas por obrigação legal, ordem judicial, autoridade competente ou exigência regulatória.</p>
<p>11.3. A obrigação de confidencialidade permanecerá válida mesmo após o encerramento da relação entre o Cliente e a kycert, pelo prazo previsto em contrato específico ou, na ausência de prazo, enquanto a informação mantiver natureza confidencial.</p>
<h2>12. Proteção de dados pessoais</h2>
<p>12.1. O tratamento de dados pessoais realizado no contexto da plataforma deverá observar a LGPD e demais normas aplicáveis.</p>
<p>12.2. A kycert poderá tratar dados em nome do Cliente para prestar os serviços contratados e também poderá tratar alguns dados para finalidades próprias, como segurança, suporte, gestão da conta, cobrança, melhoria da plataforma e cumprimento de obrigações legais.</p>
<p>12.3. O Cliente é responsável por garantir que os dados enviados, consultados, integrados ou tratados por meio da plataforma possuam fundamento legal adequado, finalidade legítima e comunicação apropriada aos titulares, quando necessário.</p>
<p>12.4. As regras sobre coleta, uso, compartilhamento, retenção, segurança e direitos dos titulares estão descritas na Política de Privacidade da kycert.</p>
<p>12.5. Em caso de incidente de segurança que envolva dados pessoais tratados pela kycert e que possa gerar risco relevante ao Cliente ou aos titulares, a kycert buscará comunicar o Cliente em prazo de até 72 (setenta e duas) horas após a confirmação do incidente, com as informações disponíveis no momento.</p>
<p>12.6. Quando a kycert tratar dados pessoais em nome do Cliente, poderão ser aplicadas também as condições do Anexo de Tratamento de Dados Pessoais da kycert, disponível em <a href="/tratamento-de-dados">kycert.com.br/tratamento-de-dados</a>.</p>
<h2>13. Logs, trilhas de auditoria e registros de uso</h2>
<p>13.1. A kycert poderá registrar logs de acesso, ações realizadas, eventos de autenticação, uso de APIs, consultas, alterações de configuração, trilhas de auditoria, interações operacionais, registros técnicos e demais eventos relacionados ao uso da plataforma.</p>
<p>13.2. Esses registros poderão ser utilizados para:</p>
<p>segurança da informação;</p>
<p>prevenção, investigação e resposta a incidentes;</p>
<p>rastreabilidade de operações;</p>
<p>auditoria interna;</p>
<p>suporte técnico;</p>
<p>melhoria da plataforma;</p>
<p>cumprimento de obrigações legais, regulatórias ou contratuais;</p>
<p>comprovação de uso, consumo, cobranças e execução dos serviços.</p>
<p>13.3. O acesso aos logs poderá ser limitado por critérios técnicos, comerciais, legais, de segurança ou de confidencialidade.</p>
<h2>14. Limitação de responsabilidade</h2>
<p>14.1. A kycert fornece uma ferramenta tecnológica de apoio à análise. As informações, validações, indicadores, alertas, relatórios ou resultados disponibilizados pela plataforma devem ser interpretados pelo Cliente de acordo com seus próprios critérios, políticas, controles e análise humana quando aplicável.</p>
<p>14.2. Na máxima extensão permitida pela legislação aplicável, a kycert não será responsável por:</p>
<p>decisões tomadas pelo Cliente ou por terceiros com base nos resultados da plataforma;</p>
<p>uso indevido, incorreto, ilícito ou não autorizado da plataforma;</p>
<p>dados incorretos, incompletos, desatualizados, ilegítimos ou sem base legal enviados pelo Cliente;</p>
<p>indisponibilidade, erro, atraso, alteração ou limitação de serviços, APIs, bases ou sistemas de terceiros;</p>
<p>falhas decorrentes de ambiente, conexão, sistemas, integrações, credenciais ou equipamentos do Cliente;</p>
<p>perda de lucros, receitas, oportunidades, reputação, contratos, economias esperadas ou danos indiretos;</p>
<p>eventos de força maior, caso fortuito, ataques externos, falhas de terceiros ou situações fora do controle razoável da kycert.</p>
<p>14.3. Nada nestes Termos limita responsabilidades que não possam ser excluídas ou restringidas por lei.</p>
<p>14.4. Salvo se houver regra diferente em proposta, contrato ou documento específico, a responsabilidade total da kycert perante o Cliente, decorrente ou relacionada ao uso da plataforma, ficará limitada aos valores efetivamente pagos pelo Cliente à kycert nos 12 (doze) meses anteriores ao fato que originou a reclamação. Essa limitação não se aplica a hipóteses de dolo, violação comprovada de confidencialidade atribuível à kycert ou responsabilidades que não possam ser limitadas por lei.</p>
<h2>15. Suspensão ou cancelamento de acesso</h2>
<p>15.1. A kycert poderá suspender, limitar ou cancelar o acesso do Cliente ou de Usuários à plataforma em caso de:</p>
<p>violação destes Termos;</p>
<p>inadimplência;</p>
<p>uso indevido, abusivo, ilícito ou incompatível com a finalidade da plataforma;</p>
<p>risco à segurança, estabilidade, integridade ou reputação da kycert, de terceiros ou dos titulares de dados;</p>
<p>determinação legal, judicial, regulatória ou de autoridade competente;</p>
<p>encerramento da contratação.</p>
<p>15.2. Quando razoavelmente possível, a kycert buscará comunicar o Cliente sobre a suspensão ou cancelamento. Em situações urgentes, de risco ou por exigência legal, a medida poderá ser adotada imediatamente.</p>
<p>15.3. Após o encerramento da conta ou da contratação, determinados dados e registros poderão ser mantidos pelo período necessário para cumprimento de obrigações legais, regulatórias ou contratuais, auditoria, prevenção a fraudes, segurança, cobrança e exercício regular de direitos, observada a Política de Privacidade da kycert.</p>
<p>15.4. Quando tecnicamente disponível e aplicável ao plano contratado, o Cliente poderá solicitar a exportação dos dados inseridos na plataforma em até 30 (trinta) dias após o encerramento da contratação, observadas limitações técnicas, legais, contratuais e de segurança. Após esse período, os dados poderão ser excluídos, anonimizados ou mantidos apenas quando houver fundamento legal para retenção.</p>
<h2>16. Alterações nos Termos</h2>
<p>16.1. A kycert poderá atualizar estes Termos de Uso para refletir mudanças legais, regulatórias, técnicas, operacionais, comerciais ou de segurança.</p>
<p>16.2. A versão vigente será indicada pela data de última atualização. Quando alterações relevantes forem realizadas, a kycert poderá comunicar os Clientes por meios razoáveis, como e-mail, aviso na plataforma ou outro canal disponível.</p>
<p>16.3. O uso contínuo da plataforma após a publicação das alterações indica concordância com a nova versão dos Termos.</p>
<h2>17. Foro</h2>
<p>17.1. Estes Termos serão regidos pelas leis da República Federativa do Brasil.</p>
<p>17.2. Fica eleito o foro da Comarca de São Paulo/SP, com renúncia a qualquer outro, por mais privilegiado que seja, para resolver eventuais controvérsias decorrentes destes Termos, salvo quando a legislação aplicável determinar foro diverso.</p>
</article></section>
`;

export default function Page() {
  return (
    <>
      <Nav active="" />
      <div dangerouslySetInnerHTML={{ __html: BODY_HTML }} />
      <Footer />
      <SiteInteractions />
    </>
  );
}
