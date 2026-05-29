import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Política de Privacidade · kycert',
  description: 'Como a kycert coleta, utiliza, armazena e protege dados pessoais.',
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <LegalLayout
      title="Política de Privacidade e LGPD"
      updated="27 de maio de 2026"
      intro="Esta Política de Privacidade explica como a kycert coleta, utiliza, armazena, compartilha e protege dados pessoais no contexto de sua plataforma tecnológica. A plataforma kycert é operada por MATHEUS MENEZES PARENTE OLIVEIRA LTDA, inscrita no CNPJ nº 59.959.589/0001-00. Esta Política deve ser lida em conjunto com os Termos de Uso da kycert."
      sections={[
        {
          title: '1. Quem somos e papéis no tratamento de dados',
          items: [
            '1.1. A kycert é uma plataforma tecnológica voltada ao apoio em validação cadastral, verificação de identidade, análise documental, KYC, KYB, onboarding digital, prevenção a fraudes, automação de fluxos de compliance e consultas ou validações por fontes internas e/ou terceiros.',
            '1.2. A kycert poderá tratar dados pessoais em nome dos seus Clientes, conforme as informações e instruções recebidas para uso da plataforma. Em algumas situações, também poderá tratar dados para finalidades próprias, como gestão de contas, segurança, suporte, cobrança, melhoria da plataforma, prevenção de abusos e cumprimento de obrigações legais.',
            '1.3. O Cliente é responsável por garantir que possui fundamento legal adequado para coletar, enviar, consultar, integrar ou tratar dados pessoais por meio da plataforma kycert.',
          ],
        },
        {
          title: '2. Dados pessoais que podem ser coletados ou tratados',
          items: [
            '2.1. A kycert poderá coletar ou tratar diferentes categorias de dados, conforme o uso da plataforma, o plano contratado, as integrações habilitadas e as informações fornecidas pelo Cliente, pelos Usuários, pelos titulares ou por terceiros autorizados.',
            {
              sub: '2.2. Esses dados podem incluir:',
              items: [
                'Dados cadastrais: nome, razão social, CPF, CNPJ, data de nascimento, nacionalidade, endereço e dados de cadastro',
                'Dados de identificação: números de documentos, informações de identidade, dados de representantes legais, sócios, administradores, procuradores, beneficiários finais ou pessoas relacionadas',
                'Documentos: documentos de identificação, comprovantes, contratos sociais, atos societários, procurações, certidões e outros arquivos enviados para análise',
                'Imagens: fotos, capturas, selfies, imagens de documentos e evidências visuais para verificação de identidade e análise documental',
                'Dados de contato: e-mail, telefone, endereço, cargo, departamento e informações profissionais',
                'Dados empresariais: composição societária, dados comerciais, registros públicos, informações de representantes e documentos societários',
                'Dados técnicos: endereço IP, identificadores de dispositivo, navegador, sistema operacional, data e horário de acesso, identificadores de sessão, chaves de API e metadados técnicos',
                'Logs e trilhas de auditoria: acessos, autenticações, consultas realizadas, eventos de API, ações de Usuários, alterações de configuração e registros de segurança',
                'Dados de uso da plataforma: funcionalidades acessadas, volume de consultas, integrações utilizadas, preferências e eventos de navegação',
                'Dados de cobrança e relacionamento comercial: informações de plano, consumo, pagamentos, notas fiscais e histórico de atendimento',
              ],
            },
            '2.3. A kycert não solicita dados pessoais sensíveis de forma ampla ou indiscriminada. No entanto, determinados documentos, imagens ou validações podem conter informações sensíveis dependendo do conteúdo enviado pelo Cliente. Nesses casos, o Cliente deve avaliar a necessidade, proporcionalidade e base legal adequada para o tratamento.',
          ],
        },
        {
          title: '3. Como os dados são coletados',
          items: [
            {
              sub: '3.1. Os dados podem ser coletados ou recebidos por meio de:',
              items: [
                'Cadastro e uso da plataforma pelo Cliente ou Usuários',
                'Envio de dados, documentos, imagens ou informações pelo Cliente',
                'Integrações via APIs, webhooks, sistemas internos ou ferramentas de terceiros',
                'Consultas a fontes internas, fontes públicas, bases privadas, provedores ou parceiros necessários à execução dos serviços',
                'Interações com suporte, atendimento, área comercial ou canais de comunicação da kycert',
                'Registros automáticos de uso, logs, autenticação, segurança e operação da plataforma',
              ],
            },
          ],
        },
        {
          title: '4. Finalidades do tratamento',
          items: [
            {
              sub: '4.1. A kycert poderá tratar dados pessoais para as seguintes finalidades:',
              items: [
                'Executar os serviços contratados pelo Cliente',
                'Realizar validação cadastral, verificação de identidade e análise documental',
                'Apoiar processos de KYC, KYB e onboarding digital',
                'Prevenir, detectar ou investigar indícios de fraude, abuso ou uso indevido',
                'Automatizar fluxos operacionais de compliance',
                'Permitir consultas, integrações e validações por fontes internas e/ou terceiros',
                'Operar, manter, autenticar, proteger e melhorar a plataforma',
                'Registrar logs de acesso, ações realizadas, eventos de autenticação e trilhas de auditoria',
                'Fornecer suporte técnico, atendimento e comunicação com Clientes e Usuários',
                'Gerenciar contas, planos, cobranças, faturamento e relacionamento comercial',
                'Cumprir obrigações legais, regulatórias, judiciais, administrativas ou contratuais',
                'Responder a solicitações de titulares, autoridades, parceiros, Clientes ou terceiros legitimamente autorizados',
                'Realizar auditoria, rastreabilidade, segurança da informação e investigação de uso indevido',
              ],
            },
          ],
        },
        {
          title: '5. Bases legais da LGPD',
          items: [
            '5.1. O tratamento de dados pessoais poderá se apoiar em diferentes bases legais previstas na LGPD, conforme o caso, a finalidade e o tipo de dado tratado.',
            {
              sub: '5.2. As bases legais podem incluir, por exemplo:',
              items: [
                'Execução de contrato ou de procedimentos preliminares relacionados a contrato',
                'Cumprimento de obrigação legal ou regulatória',
                'Exercício regular de direitos em processos judiciais ou administrativos',
                'Legítimo interesse da kycert, do Cliente ou de terceiros, quando aplicável e respeitados os direitos e liberdades fundamentais dos titulares',
                'Prevenção à fraude e à segurança do titular, especialmente em processos de identificação e autenticação',
                'Consentimento, quando exigido ou escolhido como base adequada para determinado fluxo',
              ],
            },
            '5.3. Quando os dados forem tratados pela kycert em nome do Cliente, caberá ao Cliente definir a base legal aplicável ao uso da plataforma em seu fluxo de negócio.',
          ],
        },
        {
          title: '6. Compartilhamento de dados com terceiros',
          items: [
            '6.1. A kycert poderá compartilhar dados pessoais ou permitir o acesso a dados por terceiros quando necessário para prestar, operar, proteger, integrar, melhorar ou viabilizar a plataforma.',
            {
              sub: '6.2. O compartilhamento poderá ocorrer com:',
              items: [
                'Provedores de infraestrutura, hospedagem, armazenamento, processamento, monitoramento e segurança',
                'Provedores de tecnologia, autenticação, comunicação, suporte, análise e observabilidade',
                'APIs, bases de dados, bureaus, fontes públicas ou privadas, provedores de OCR, validação cadastral, análise documental e verificação de identidade',
                'Ferramentas de e-mail, WhatsApp, webhooks, automações e integrações usadas para executar os serviços',
                'Parceiros técnicos e fornecedores necessários à execução dos serviços',
                'Prestadores de serviços administrativos, financeiros, jurídicos, contábeis ou de cobrança',
                'Autoridades públicas, órgãos reguladores, Poder Judiciário ou entidades governamentais quando houver obrigação legal ou solicitação legítima',
                'Empresas envolvidas em operações societárias, investimentos ou venda de ativos, observadas as salvaguardas aplicáveis',
              ],
            },
            '6.3. A kycert busca limitar o compartilhamento ao necessário para cada finalidade e adotar medidas contratuais, técnicas e organizacionais razoáveis para proteger os dados.',
          ],
        },
        {
          title: '7. Armazenamento e retenção',
          items: [
            '7.1. Os dados pessoais serão armazenados pelo tempo necessário para cumprir as finalidades descritas nesta Política, executar os serviços contratados, atender a obrigações legais, regulatórias ou contratuais, preservar direitos, prevenir fraudes, manter registros de segurança e auditoria ou conforme instruções válidas do Cliente.',
            '7.2. Após o encerramento da conta ou da contratação, os dados poderão ser mantidos pelo período necessário para cumprimento de obrigações legais, regulatórias ou contratuais, auditoria, prevenção a fraudes, segurança, cobrança e exercício regular de direitos.',
            '7.3. Depois do prazo necessário, os dados poderão ser excluídos, anonimizados ou mantidos de forma restrita quando houver base legal para conservação.',
          ],
        },
        {
          title: '8. Segurança da informação',
          items: [
            '8.1. A kycert adota medidas técnicas, administrativas e organizacionais razoáveis para proteger dados pessoais contra acessos não autorizados, perda, alteração, divulgação indevida, destruição, uso indevido ou tratamento incompatível com as finalidades informadas.',
            '8.2. Essas medidas podem incluir controles de acesso, gestão de credenciais, registros de eventos, segregação de permissões, monitoramento, revisão de processos e práticas internas de segurança compatíveis com o porte, contexto e riscos da operação.',
            '8.3. Embora a kycert empregue esforços para proteger os dados, nenhum sistema, plataforma, integração ou ambiente tecnológico é totalmente imune a riscos. O Cliente também deve adotar medidas adequadas de segurança em seus próprios ambientes.',
          ],
        },
        {
          title: '9. Direitos dos titulares',
          items: [
            {
              sub: '9.1. Nos termos da LGPD, os titulares de dados pessoais podem solicitar:',
              items: [
                'Confirmação da existência de tratamento',
                'Acesso aos dados pessoais',
                'Correção de dados incompletos, inexatos ou desatualizados',
                'Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei',
                'Portabilidade dos dados, quando aplicável e regulamentada',
                'Informação sobre compartilhamento de dados',
                'Revogação do consentimento, quando aplicável',
                'Revisão de decisões tomadas unicamente com base em tratamento automatizado, quando cabível',
              ],
            },
            '9.2. Solicitações relacionadas a dados tratados pela kycert em nome de um Cliente poderão precisar ser encaminhadas ao próprio Cliente ou depender de validação e instrução dele.',
            '9.3. A kycert poderá solicitar informações adicionais para confirmar a identidade do solicitante, proteger os titulares e prevenir acessos indevidos.',
          ],
        },
        {
          title: '10. Encarregado e canal de contato',
          items: [
            '10.1. O Encarregado pelo Tratamento de Dados Pessoais da kycert é Matheus Menezes.',
            '10.2. Para dúvidas, solicitações ou assuntos relacionados à privacidade e proteção de dados pessoais, entre em contato pelo e-mail: comercial@kycert.com.br',
          ],
        },
        {
          title: '11. Transferência internacional de dados',
          items: [
            '11.1. A kycert poderá utilizar provedores de tecnologia, infraestrutura, hospedagem, suporte, armazenamento, segurança, comunicação, processamento ou integração localizados no Brasil ou no exterior.',
            '11.2. Quando houver transferência internacional de dados pessoais, a kycert buscará adotar medidas compatíveis com a LGPD, incluindo mecanismos contratuais, técnicos e organizacionais adequados ao contexto e aos riscos envolvidos.',
          ],
        },
        {
          title: '12. Cookies e tecnologias similares',
          items: [
            '12.1. A kycert poderá utilizar cookies, pixels, identificadores, armazenamento local, SDKs, ferramentas de análise ou tecnologias similares em seu site, painel web e plataforma.',
            {
              sub: '12.2. Essas tecnologias podem ser utilizadas para:',
              items: [
                'Permitir o funcionamento da plataforma',
                'Autenticar Usuários e manter sessões',
                'Reforçar segurança',
                'Lembrar preferências',
                'Medir desempenho e uso',
                'Melhorar a experiência e a qualidade dos serviços',
              ],
            },
            '12.3. O Usuário poderá gerenciar cookies por meio das configurações do navegador. A desativação de determinados cookies pode afetar o funcionamento da plataforma.',
          ],
        },
        {
          title: '13. Decisões automatizadas e análise humana',
          items: [
            '13.1. A plataforma kycert pode apoiar fluxos automatizados de validação, classificação, conferência, alerta, consulta ou análise operacional.',
            '13.2. Os resultados fornecidos pela plataforma devem ser interpretados como apoio à análise do Cliente. A kycert não garante conformidade regulatória, não elimina fraudes e não substitui avaliação humana quando ela for necessária ou recomendável.',
            '13.3. Nos termos do art. 20 da LGPD, o titular poderá solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado que afetem seus interesses. Quando a decisão for tomada pelo Cliente com apoio da plataforma, a solicitação poderá ser encaminhada ao próprio Cliente.',
          ],
        },
        {
          title: '14. Alterações nesta Política',
          items: [
            '14.1. A kycert poderá atualizar esta Política de Privacidade para refletir mudanças legais, regulatórias, técnicas, operacionais, comerciais ou de segurança.',
            '14.2. A versão vigente será indicada pela data de última atualização. Quando alterações relevantes forem realizadas, a kycert poderá comunicar os Clientes e Usuários por meios razoáveis, como e-mail, aviso na plataforma ou outro canal disponível.',
            '14.3. O uso contínuo da plataforma após a publicação de alterações indica ciência da nova versão da Política, sem prejuízo de direitos dos titulares previstos na legislação aplicável.',
          ],
        },
      ]}
    />
  );
}
