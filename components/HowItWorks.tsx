import Section, { Eyebrow } from './Section';
import { InviteCard, ClientFormCard, ComplianceCard, ApprovedCard } from './PreviewCards';

export default function HowItWorks() {
  const steps = [
    {
      n: '01',
      t: 'Sua empresa convida o cliente',
      d: 'Um link único, com sua marca e seu domínio. Email ou WhatsApp. Nada de PDFs em anexo, nada de planilha de controle. O cliente recebe e abre direto no celular.',
      preview: <InviteCard />,
    },
    {
      n: '02',
      t: 'O cliente cadastra em até 2 minutos',
      d: 'Fluxo PF ou PJ, mobile ou desktop. Captura de documentos por câmera, OCR automático, validação ao vivo. Salva e retoma de onde parou.',
      preview: <ClientFormCard />,
    },
    {
      n: '03',
      t: 'KYC e análise de risco em paralelo',
      d: 'Receita Federal, OFAC, listas PEP, COAF, antecedentes. A IA pontua e enquadra a operação. Seu time de compliance só recebe o que precisa de decisão humana.',
      preview: <ComplianceCard />,
    },
    {
      n: '04',
      t: 'Cliente certificado, pronto pra operar',
      d: 'Ficha completa, audit log assinado e integrações com seu sistema operacional. Renovação automática a cada 365 dias — você não esquece, ele também não.',
      preview: <ApprovedCard />,
    },
  ];

  return (
    <Section id="produto" pad="var(--pad-section)">
      <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 80px' }}>
        <Eyebrow>Como funciona</Eyebrow>
        <h2 style={{
          margin: '20px 0 0',
          fontFamily: 'var(--font-sans)', fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 700, letterSpacing: '-0.035em',
          lineHeight: 1.1, textWrap: 'balance' as const,
        }}>
          Do convite ao{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>
            cliente validado
          </span>{' '}em quatro etapas.
        </h2>
        <p style={{
          marginTop: 16, fontSize: 'var(--text-lg)',
          color: 'var(--text-secondary)', lineHeight: 1.5,
          maxWidth: 580, margin: '16px auto 0',
        }}>
          O mesmo fluxo serve para pessoa física e pessoa jurídica.
          Configurável, auditável, integrável.
        </p>
      </div>

      <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 80 }}>
        {steps.map((s, i) => (
          <li key={s.n} style={{ display: 'grid', gridTemplateColumns: 'var(--cols-step)', gap: 64, alignItems: 'center' }}>
            <div className="step-order" style={{ order: i % 2 === 1 ? 2 : 1 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.14em', color: 'var(--text-tertiary)', marginBottom: 14 }}>
                {s.n}
              </div>
              <h3 style={{
                margin: 0, fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: 600,
                letterSpacing: '-0.025em', lineHeight: 1.15,
                textWrap: 'balance' as const,
              }}>
                {s.t}
              </h3>
              <p style={{ marginTop: 16, fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.55, textWrap: 'pretty' as const }}>
                {s.d}
              </p>
            </div>
            <div className="step-order" style={{ order: i % 2 === 1 ? 1 : 2 }}>{s.preview}</div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
