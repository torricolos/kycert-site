import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Tratamento de Dados · kycert',
  description: 'Anexo de Tratamento de Dados Pessoais da kycert — papéis, finalidades e obrigações das partes.',
  robots: { index: true, follow: true },
};

export default function TratamentoDadosPage() {
  return (
    <LegalLayout
      title="Anexo de Tratamento de Dados Pessoais"
      updated="27 de maio de 2026"
      intro="Este Anexo complementa os Termos de Uso da Plataforma kycert e se aplica quando a kycert tratar dados pessoais em nome do Cliente para execução dos serviços contratados. A plataforma kycert é operada por MATHEUS MENEZES PARENTE OLIVEIRA LTDA, inscrita no CNPJ nº 59.959.589/0001-00."
      sections={[
        {
          title: '1. Papéis das partes',
          items: [
            '1.1. Para os dados pessoais inseridos, enviados, consultados ou integrados pelo Cliente na plataforma, o Cliente atua como controlador, responsável por definir as finalidades, bases legais e critérios de uso dos dados.',
            '1.2. A kycert atua como operadora desses dados, tratando-os conforme as instruções do Cliente, os Termos de Uso, a Política de Privacidade, este Anexo, a LGPD e as funcionalidades utilizadas na plataforma.',
          ],
        },
        {
          title: '2. Finalidade do tratamento',
          items: [
            '2.1. A kycert tratará dados pessoais para prestar os serviços contratados, incluindo validação cadastral, verificação de identidade, análise documental, apoio a KYC/KYB, onboarding digital, prevenção a fraudes, integrações, logs, suporte, segurança e operação da plataforma.',
            '2.2. A kycert não utilizará os dados tratados em nome do Cliente para finalidade incompatível com a prestação dos serviços, salvo quando necessário para cumprimento de obrigação legal, exercício regular de direitos, segurança, prevenção a fraudes ou outra hipótese permitida pela LGPD.',
          ],
        },
        {
          title: '3. Obrigações da kycert',
          items: [
            {
              sub: '3.1. A kycert compromete-se a:',
              items: [
                'Tratar dados pessoais conforme as instruções do Cliente e a legislação aplicável',
                'Adotar medidas técnicas e administrativas razoáveis de segurança',
                'Limitar o acesso aos dados a pessoas e fornecedores que precisem acessá-los para execução dos serviços',
                'Apoiar o Cliente, quando razoavelmente possível, no atendimento a solicitações de titulares relacionadas aos dados tratados na plataforma',
                'Manter registros técnicos, logs e trilhas de auditoria quando aplicável',
                'Comunicar o Cliente em prazo de até 72 horas após a confirmação de incidente de segurança que possa gerar risco relevante aos titulares ou ao Cliente',
                'Eliminar, anonimizar ou manter dados após o encerramento da contratação conforme os Termos de Uso, a Política de Privacidade, a LGPD e a legislação aplicável',
              ],
            },
          ],
        },
        {
          title: '4. Obrigações do Cliente',
          items: [
            {
              sub: '4.1. O Cliente compromete-se a:',
              items: [
                'Garantir que possui base legal adequada para tratar os dados enviados à plataforma',
                'Informar os titulares quando necessário',
                'Usar a plataforma para finalidades lícitas e compatíveis com sua contratação',
                'Revisar resultados antes de tomar decisões relevantes',
                'Manter seus próprios controles de segurança, governança, compliance e gestão de acessos',
              ],
            },
          ],
        },
        {
          title: '5. Suboperadores e terceiros',
          items: [
            '5.1. A kycert poderá utilizar fornecedores, APIs, bureaus, provedores de OCR, infraestrutura, mensageria, webhooks, suporte e outras integrações necessárias à execução dos serviços.',
            '5.2. A kycert mantém lista atualizada dos principais fornecedores e suboperadores utilizados na prestação dos serviços, disponível para consulta mediante solicitação. A kycert exige obrigações de proteção de dados compatíveis dos seus suboperadores e comunicará alterações materiais com antecedência razoável.',
          ],
        },
        {
          title: '6. Transferência internacional',
          items: [
            '6.1. Quando houver transferência internacional de dados pessoais, a kycert buscará adotar mecanismos compatíveis com a LGPD, incluindo contratos com provedores, cláusulas-padrão, garantias adequadas ou outros mecanismos legalmente aceitos.',
          ],
        },
        {
          title: '7. Encerramento da contratação',
          items: [
            '7.1. Após o encerramento da contratação, o Cliente poderá solicitar a exportação dos dados inseridos na plataforma quando tecnicamente disponível e aplicável ao plano contratado.',
            '7.2. Após o prazo de até 30 dias, os dados poderão ser excluídos, anonimizados ou mantidos apenas quando houver obrigação legal, regulatória, contratual, necessidade de auditoria, segurança, prevenção a fraudes, cobrança ou exercício regular de direitos.',
          ],
        },
        {
          title: '8. Cooperação com autoridades',
          items: [
            '8.1. A kycert cooperará com o Cliente em eventuais investigações conduzidas pela ANPD ou outras autoridades competentes relacionadas a dados tratados na qualidade de operadora, fornecendo as informações necessárias dentro do que estiver razoavelmente sob seu controle.',
          ],
        },
        {
          title: '9. Evidências e auditoria documental',
          items: [
            '9.1. O Cliente poderá solicitar, em frequência razoável e mediante aviso prévio, evidências documentais das medidas de segurança e governança adotadas pela kycert, respeitados sigilo comercial, segurança, confidencialidade, limitações técnicas e informações de terceiros.',
          ],
        },
        {
          title: '10. Prevalência e sobrevivência',
          items: [
            '10.1. Em caso de conflito entre este Anexo e a proposta comercial, prevalecerão as condições comerciais da proposta apenas quanto a preço, plano, escopo, vigência e pagamento.',
            '10.2. As obrigações deste Anexo sobrevivem ao término da contratação enquanto houver dados pessoais sob custódia da kycert ou obrigação legal de retenção.',
          ],
        },
      ]}
    />
  );
}
