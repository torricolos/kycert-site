import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Termos de Uso · kycert',
  description: 'Termos e condições de uso da plataforma kycert.',
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <LegalLayout
      title="Termos de Uso da Plataforma kycert"
      updated="27 de maio de 2026"
      intro="Estes Termos de Uso regulam o acesso e a utilização da plataforma kycert, incluindo seu painel web, APIs, integrações, funcionalidades, recursos, relatórios, consultas e demais serviços disponibilizados. A plataforma kycert é operada por MATHEUS MENEZES PARENTE OLIVEIRA LTDA, inscrita no CNPJ nº 59.959.589/0001-00."
      sections={[
        {
          title: '1. Definições',
          items: [
            '1.1. kycert significa a plataforma tecnológica voltada ao apoio em validação cadastral, verificação de identidade, análise documental, KYC, KYB, onboarding digital, prevenção a fraudes e automação de fluxos de compliance.',
            '1.2. Cliente significa a pessoa jurídica ou pessoa física que contrata ou utiliza a plataforma kycert para fins profissionais, comerciais, operacionais ou institucionais. A plataforma kycert é voltada a uso B2B, profissional e empresarial, não a uso pessoal ou doméstico de consumidores finais.',
            '1.3. Usuário significa qualquer pessoa autorizada pelo Cliente a acessar ou operar a plataforma kycert.',
            '1.4. Titular significa a pessoa natural a quem se referem os dados pessoais tratados na plataforma.',
            '1.5. Serviços de terceiros significam bases de dados, APIs, provedores, sistemas, ferramentas, integrações, infraestrutura, fornecedores ou parceiros utilizados para viabilizar determinadas funcionalidades da plataforma.',
          ],
        },
        {
          title: '2. Aceitação dos Termos',
          items: [
            '2.1. O uso da plataforma kycert implica a aceitação destes Termos de Uso, bem como da Política de Privacidade da kycert e de eventuais condições comerciais, propostas, contratos, ordens de serviço ou documentos complementares aplicáveis.',
            '2.2. Caso o Usuário esteja acessando a plataforma em nome de uma empresa, organização ou terceiro, declara possuir poderes suficientes para aceitar estes Termos em nome dessa parte.',
            '2.3. Se o Cliente ou Usuário não concordar com estes Termos, deverá interromper imediatamente o uso da plataforma.',
            '2.4. A kycert poderá registrar evidências de aceite destes Termos e da Política de Privacidade, incluindo, quando aplicável, checkbox de aceite, data e hora, endereço IP, Usuário responsável, versão do documento aceita e demais registros técnicos relacionados.',
          ],
        },
        {
          title: '3. Descrição geral dos serviços',
          items: [
            '3.1. A kycert é uma ferramenta tecnológica que atua como camada de apoio à análise cadastral, documental, antifraude, KYC, KYB, onboarding digital e compliance.',
            {
              sub: '3.2. A plataforma poderá oferecer, conforme o plano contratado e a disponibilidade técnica:',
              items: [
                'Validação cadastral',
                'Verificação de identidade',
                'Análise documental',
                'Apoio a processos de KYC e KYB',
                'Onboarding digital',
                'Prevenção e detecção de indícios de fraude',
                'Automação de fluxos de compliance',
                'Consultas, integrações e validações por fontes internas e/ou terceiros',
                'Registro de logs, eventos, trilhas de auditoria e interações operacionais',
                'Acesso via painel web, APIs e integrações',
              ],
            },
            '3.3. A kycert não presta consultoria jurídica, financeira, contábil, regulatória ou de compliance. A plataforma fornece recursos tecnológicos de apoio, cabendo ao Cliente avaliar os resultados e tomar suas próprias decisões.',
            '3.4. A kycert não garante que o uso da plataforma assegurará conformidade regulatória, eliminará fraudes, substituirá análise humana ou afastará riscos operacionais, legais, financeiros ou reputacionais.',
            '3.5. Algumas funcionalidades da kycert poderão ser disponibilizadas em fase beta, piloto, teste, demonstração ou early access. Nessas situações, as funcionalidades podem estar em desenvolvimento, sofrer alterações, ter limitações técnicas, apresentar instabilidades, ser descontinuadas ou não refletir a versão final do produto.',
          ],
        },
        {
          title: '4. Cadastro, conta e credenciais de acesso',
          items: [
            '4.1. Para utilizar a plataforma, o Cliente e seus Usuários poderão precisar criar contas, fornecer informações cadastrais e configurar credenciais de acesso.',
            {
              sub: '4.2. O Cliente é responsável por:',
              items: [
                'Fornecer informações corretas, completas e atualizadas',
                'Manter a confidencialidade de logins, senhas, tokens, chaves de API e demais credenciais',
                'Definir e controlar quem poderá acessar a plataforma em seu nome',
                'Comunicar imediatamente à kycert qualquer suspeita de acesso não autorizado, perda de credenciais ou incidente de segurança',
                'Garantir que seus Usuários utilizem a plataforma de acordo com estes Termos',
              ],
            },
            '4.3. A kycert poderá recusar, suspender ou cancelar cadastros e acessos quando houver indícios de irregularidade, uso indevido, violação destes Termos, inadimplência ou risco à segurança da plataforma, de terceiros ou dos titulares de dados.',
          ],
        },
        {
          title: '5. Responsabilidades do Cliente e dos Usuários',
          items: [
            '5.1. O Cliente e seus Usuários são responsáveis pelo uso adequado da plataforma e pelas decisões tomadas com base nas informações, resultados, indicadores, alertas, validações ou relatórios disponibilizados pela kycert.',
            '5.2. Cabe ao Cliente assegurar que possui autorização, base legal ou fundamento legítimo para submeter dados pessoais, documentos, imagens, informações empresariais ou demais dados à plataforma.',
            '5.3. O Cliente deve informar os titulares de dados quando necessário, de acordo com a legislação aplicável.',
            '5.4. O Cliente deve utilizar a plataforma apenas para finalidades lícitas, legítimas e compatíveis com sua contratação.',
            '5.5. O Cliente deve revisar os resultados gerados pela plataforma antes de tomar decisões que afetem pessoas físicas, empresas, clientes, fornecedores, parceiros ou terceiros.',
            '5.6. O Cliente deve manter seus próprios procedimentos internos de governança, compliance, segurança, prevenção a fraudes e análise de risco.',
            '5.7. O Cliente deve cumprir a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018) e demais normas aplicáveis.',
            '5.8. O Cliente reconhece que a plataforma kycert é uma ferramenta de apoio à análise e não substitui políticas internas, avaliação humana, parecer jurídico, auditoria independente, diligência regulatória ou controles próprios.',
          ],
        },
        {
          title: '6. Usos proibidos',
          items: [
            {
              sub: '6.1. O Cliente e os Usuários não poderão utilizar a plataforma para:',
              items: [
                'Praticar atos ilícitos, abusivos, discriminatórios, fraudulentos ou contrários à legislação aplicável',
                'Violar direitos de titulares de dados, consumidores, parceiros, fornecedores ou terceiros',
                'Realizar tratamento de dados sem fundamento legal, autorização adequada ou finalidade legítima',
                'Tentar acessar contas, dados, sistemas, integrações ou ambientes sem autorização',
                'Interferir no funcionamento, segurança, disponibilidade ou integridade da plataforma',
                'Realizar engenharia reversa, cópia, extração indevida, mineração, raspagem ou reprodução não autorizada da plataforma',
                'Compartilhar credenciais de acesso com pessoas não autorizadas',
                'Utilizar a plataforma para vigilância indevida, perseguição, discriminação ou tomada de decisão automatizada proibida por lei',
                'Enviar arquivos, dados ou códigos maliciosos, inseguros ou incompatíveis com a finalidade da plataforma',
                'Revender, sublicenciar ou disponibilizar acesso à plataforma a terceiros sem autorização prévia da kycert',
              ],
            },
          ],
        },
        {
          title: '7. Serviços, APIs, integrações e bases de terceiros',
          items: [
            '7.1. A plataforma kycert poderá utilizar serviços de terceiros para viabilizar consultas, validações, integrações, infraestrutura, hospedagem, autenticação, processamento, suporte, análise documental, verificação de identidade, prevenção a fraudes ou outras funcionalidades.',
            '7.2. Determinadas informações, resultados ou validações podem depender da disponibilidade, atualização, qualidade, critérios técnicos e regras de funcionamento desses terceiros.',
            '7.3. A kycert não controla integralmente bases, APIs, sistemas, políticas, prazos, indisponibilidades, alterações ou decisões de terceiros. Por isso, determinados recursos podem sofrer instabilidades, limitações, atrasos, erros, mudanças, suspensões ou indisponibilidades.',
            '7.4. A kycert não se responsabiliza por falhas, atrasos, indisponibilidades, perdas, alterações, bloqueios ou limitações decorrentes de integrações, APIs, bases de dados ou serviços de terceiros fora de seu controle razoável.',
          ],
        },
        {
          title: '8. Disponibilidade da plataforma',
          items: [
            '8.1. A kycert envidará esforços comercialmente razoáveis para manter a plataforma disponível, segura e funcional.',
            '8.2. No entanto, a kycert não garante disponibilidade ininterrupta, ausência de falhas, funcionamento sem erros ou compatibilidade permanente com todos os sistemas, navegadores, dispositivos, integrações, APIs ou ambientes do Cliente.',
            '8.3. A plataforma poderá ficar temporariamente indisponível por motivos como manutenção, atualizações, melhorias, falhas técnicas, indisponibilidade de terceiros, incidentes de segurança, eventos de força maior ou fatores fora do controle razoável da kycert.',
            '8.4. Salvo se houver previsão expressa em contrato específico, proposta comercial ou documento complementar, a kycert não assume compromisso de SLA, uptime mínimo ou prazo máximo de resolução de incidentes.',
          ],
        },
        {
          title: '9. Pagamentos, planos, cobranças e inadimplência',
          items: [
            '9.1. O acesso à plataforma poderá estar sujeito a planos, mensalidades, pacotes de uso, franquias, cobranças por volume, consultas, integrações, usuários, APIs ou outras métricas comerciais definidas em proposta, contrato ou documento equivalente.',
            '9.2. O Cliente deverá realizar os pagamentos nos prazos e condições acordados.',
            '9.3. Em caso de atraso, inadimplência, falha de pagamento, contestação indevida ou descumprimento das condições comerciais, a kycert poderá, mediante comunicação ao Cliente quando aplicável: restringir funcionalidades, suspender temporariamente acessos, limitar consultas ou APIs, bloquear novas operações ou cancelar a contratação.',
            '9.4. Valores, planos, limites, condições de cobrança e regras de reajuste deverão ser definidos em documento comercial próprio, quando aplicável.',
          ],
        },
        {
          title: '10. Propriedade intelectual',
          items: [
            '10.1. A plataforma kycert, incluindo seu software, código, interfaces, marca, nome, identidade visual, documentação, fluxos, modelos, relatórios, estruturas, bancos de dados próprios, APIs, layouts, textos, componentes e demais materiais, é protegida por direitos de propriedade intelectual.',
            '10.2. O uso da plataforma não transfere ao Cliente ou aos Usuários qualquer direito de propriedade sobre a kycert ou sobre seus componentes tecnológicos.',
            '10.3. Durante a vigência da contratação, a kycert concede ao Cliente uma licença limitada, revogável, não exclusiva, intransferível e não sublicenciável para acessar e utilizar a plataforma de acordo com estes Termos.',
            '10.4. O Cliente mantém a titularidade sobre os dados, documentos e informações que inserir ou disponibilizar na plataforma, sem prejuízo dos direitos necessários para que a kycert processe tais informações com a finalidade de prestar os serviços contratados.',
          ],
        },
        {
          title: '11. Confidencialidade',
          items: [
            '11.1. As partes deverão manter sigilo sobre informações confidenciais, comerciais, técnicas, operacionais, financeiras, estratégicas, cadastrais, documentais ou de segurança a que tiverem acesso em razão do uso ou fornecimento da plataforma.',
            '11.2. Não serão consideradas confidenciais as informações que: já eram públicas no momento da divulgação; tornaram-se públicas sem violação destes Termos; já eram conhecidas legitimamente pela parte receptora; ou precisem ser divulgadas por obrigação legal, ordem judicial, autoridade competente ou exigência regulatória.',
            '11.3. A obrigação de confidencialidade permanecerá válida mesmo após o encerramento da relação entre o Cliente e a kycert, pelo prazo previsto em contrato específico ou, na ausência de prazo, enquanto a informação mantiver natureza confidencial.',
          ],
        },
        {
          title: '12. Proteção de dados pessoais',
          items: [
            '12.1. O tratamento de dados pessoais realizado no contexto da plataforma deverá observar a LGPD (Lei nº 13.709/2018) e demais normas aplicáveis.',
            '12.2. A kycert poderá tratar dados em nome do Cliente para prestar os serviços contratados e também poderá tratar alguns dados para finalidades próprias, como segurança, suporte, gestão da conta, cobrança, melhoria da plataforma e cumprimento de obrigações legais.',
            '12.3. O Cliente é responsável por garantir que os dados enviados, consultados, integrados ou tratados por meio da plataforma possuam fundamento legal adequado, finalidade legítima e comunicação apropriada aos titulares, quando necessário.',
            '12.4. As regras sobre coleta, uso, compartilhamento, retenção, segurança e direitos dos titulares estão descritas na Política de Privacidade da kycert.',
            '12.5. Em caso de incidente de segurança que envolva dados pessoais tratados pela kycert e que possa gerar risco relevante ao Cliente ou aos titulares, a kycert buscará comunicar o Cliente em prazo de até 72 horas após a confirmação do incidente.',
          ],
        },
        {
          title: '13. Logs, trilhas de auditoria e registros de uso',
          items: [
            '13.1. A kycert poderá registrar logs de acesso, ações realizadas, eventos de autenticação, uso de APIs, consultas, alterações de configuração, trilhas de auditoria, interações operacionais, registros técnicos e demais eventos relacionados ao uso da plataforma.',
            {
              sub: '13.2. Esses registros poderão ser utilizados para:',
              items: [
                'Segurança da informação',
                'Prevenção, investigação e resposta a incidentes',
                'Rastreabilidade de operações',
                'Auditoria interna',
                'Suporte técnico',
                'Melhoria da plataforma',
                'Cumprimento de obrigações legais, regulatórias ou contratuais',
                'Comprovação de uso, consumo, cobranças e execução dos serviços',
              ],
            },
          ],
        },
        {
          title: '14. Limitação de responsabilidade',
          items: [
            '14.1. A kycert fornece uma ferramenta tecnológica de apoio à análise. As informações, validações, indicadores, alertas, relatórios ou resultados disponibilizados pela plataforma devem ser interpretados pelo Cliente de acordo com seus próprios critérios, políticas, controles e análise humana quando aplicável.',
            {
              sub: '14.2. Na máxima extensão permitida pela legislação aplicável, a kycert não será responsável por:',
              items: [
                'Decisões tomadas pelo Cliente ou por terceiros com base nos resultados da plataforma',
                'Uso indevido, incorreto, ilícito ou não autorizado da plataforma',
                'Dados incorretos, incompletos, desatualizados, ilegítimos ou sem base legal enviados pelo Cliente',
                'Indisponibilidade, erro, atraso, alteração ou limitação de serviços, APIs, bases ou sistemas de terceiros',
                'Falhas decorrentes de ambiente, conexão, sistemas, integrações, credenciais ou equipamentos do Cliente',
                'Perda de lucros, receitas, oportunidades, reputação, contratos, economias esperadas ou danos indiretos',
                'Eventos de força maior, caso fortuito, ataques externos, falhas de terceiros ou situações fora do controle razoável da kycert',
              ],
            },
            '14.3. Nada nestes Termos limita responsabilidades que não possam ser excluídas ou restringidas por lei.',
            '14.4. Salvo se houver regra diferente em proposta, contrato ou documento específico, a responsabilidade total da kycert perante o Cliente ficará limitada aos valores efetivamente pagos pelo Cliente à kycert nos 12 meses anteriores ao fato que originou a reclamação.',
          ],
        },
        {
          title: '15. Suspensão ou cancelamento de acesso',
          items: [
            '15.1. A kycert poderá suspender, limitar ou cancelar o acesso do Cliente ou de Usuários à plataforma em caso de: violação destes Termos; inadimplência; uso indevido, abusivo, ilícito ou incompatível com a finalidade da plataforma; risco à segurança, estabilidade, integridade ou reputação da kycert; determinação legal, judicial, regulatória ou de autoridade competente; ou encerramento da contratação.',
            '15.2. Quando razoavelmente possível, a kycert buscará comunicar o Cliente sobre a suspensão ou cancelamento. Em situações urgentes, de risco ou por exigência legal, a medida poderá ser adotada imediatamente.',
            '15.3. Após o encerramento da conta ou da contratação, determinados dados e registros poderão ser mantidos pelo período necessário para cumprimento de obrigações legais, regulatórias ou contratuais, auditoria, prevenção a fraudes, segurança, cobrança e exercício regular de direitos.',
            '15.4. Quando tecnicamente disponível e aplicável ao plano contratado, o Cliente poderá solicitar a exportação dos dados inseridos na plataforma em até 30 dias após o encerramento da contratação.',
          ],
        },
        {
          title: '16. Alterações nos Termos',
          items: [
            '16.1. A kycert poderá atualizar estes Termos de Uso para refletir mudanças legais, regulatórias, técnicas, operacionais, comerciais ou de segurança.',
            '16.2. A versão vigente será indicada pela data de última atualização. Quando alterações relevantes forem realizadas, a kycert poderá comunicar os Clientes por meios razoáveis, como e-mail, aviso na plataforma ou outro canal disponível.',
            '16.3. O uso contínuo da plataforma após a publicação das alterações indica concordância com a nova versão dos Termos.',
          ],
        },
        {
          title: '17. Foro',
          items: [
            '17.1. Estes Termos serão regidos pelas leis da República Federativa do Brasil.',
            '17.2. Fica eleito o foro da Comarca de São Paulo/SP, com renúncia a qualquer outro, por mais privilegiado que seja, para resolver eventuais controvérsias decorrentes destes Termos, salvo quando a legislação aplicável determinar foro diverso.',
          ],
        },
      ]}
    />
  );
}
