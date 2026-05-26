import Section, { Eyebrow } from './Section';
import Icon from './Icon';

type Cert = { t: string; d: string; icon: 'shield' | 'file' | 'lock' | 'clock' };

export default function Security() {
  const items: Cert[] = [
    { t: 'BCB Resolução 4.658',     d: 'Política de segurança cibernética para instituições autorizadas. Reportes, contingência, monitoramento.', icon: 'shield' },
    { t: 'Lei 9.613/98 + COAF',     d: 'Prevenção à lavagem de dinheiro. Workflow de comunicações obrigatórias. Documentação de auditoria.', icon: 'file' },
    { t: 'LGPD · Lei 13.709/18',    d: 'Operadores de dados. DPO designado. Encarregado disponível. Direitos do titular automatizados.', icon: 'lock' },
    { t: 'CVM 35 · suitability',    d: 'Cadastro de cliente e categorização de investidor. Integrado ao fluxo de onboarding.', icon: 'file' },
    { t: 'ISO 27001 · em andamento',d: 'Certificação prevista para Q4 de 2026. Controles de segurança da informação já implementados.', icon: 'shield' },
    { t: 'SOC 2 Type II · roadmap', d: 'Auditoria independente de controles operacionais. Planejada para 2027.', icon: 'clock' },
  ];
  return (
    <Section id="seguranca" pad="120px 32px" bg="var(--text-primary)">
      <div style={{ color: 'var(--text-inverse)' }}>
        <div style={{ maxWidth: 760 }}>
          <Eyebrow color="rgba(247,248,250,0.5)">Conformidade & segurança</Eyebrow>
          <h2 style={{
            margin: '20px 0 0',
            fontFamily: 'var(--font-sans)', fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 700, letterSpacing: '-0.035em',
            lineHeight: 1.1, color: 'var(--text-inverse)',
            textWrap: 'balance' as const,
          }}>
            Construído para auditoria.{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'rgba(247,248,250,0.6)' }}>
              Não para post de LinkedIn.
            </span>
          </h2>
          <p style={{ marginTop: 20, fontSize: 'var(--text-lg)', color: 'rgba(247,248,250,0.7)', lineHeight: 1.55, maxWidth: 620 }}>
            Cumprimos as regulações que sua empresa precisa cumprir.
            Sem mágica. Sem badges genéricos. Apenas o que está escrito em lei.
          </p>
        </div>

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {items.map((c) => (
            <div key={c.t} style={{
              padding: 24, borderRadius: 'var(--radius-lg)',
              background: 'rgba(247,248,250,0.04)',
              border: '1px solid rgba(247,248,250,0.08)',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 'var(--radius-md)',
                background: 'rgba(31,138,91,0.18)', color: '#6AB088',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 16,
              }}>
                <Icon name={c.icon} size={18} />
              </div>
              <h3 style={{ margin: 0, fontSize: 'var(--text-md)', fontWeight: 600, color: 'var(--text-inverse)' }}>
                {c.t}
              </h3>
              <p style={{ margin: '8px 0 0', fontSize: 'var(--text-sm)', color: 'rgba(247,248,250,0.6)', lineHeight: 1.5 }}>
                {c.d}
              </p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 28, padding: '18px 24px',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(247,248,250,0.04)',
          border: '1px solid rgba(247,248,250,0.08)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          gap: 24, flexWrap: 'wrap',
        }}>
          <div>
            <div style={{ fontSize: 'var(--text-md)', fontWeight: 600 }}>Quer ver a documentação?</div>
            <div style={{ marginTop: 4, fontSize: 'var(--text-sm)', color: 'rgba(247,248,250,0.6)' }}>
              Política de segurança, DPA e questionário de fornecedor disponíveis sob NDA.
            </div>
          </div>
          <a href="#contato" style={{
            padding: '10px 18px', borderRadius: 'var(--radius-md)',
            background: 'var(--surface-app)', color: 'var(--text-primary)',
            fontSize: 'var(--text-sm)', fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            Solicitar documentação<Icon name="arrow" size={14} strokeWidth={2} />
          </a>
        </div>
      </div>
    </Section>
  );
}
