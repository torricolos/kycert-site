import Section, { Eyebrow } from './Section';
import Icon from './Icon';

type Cert = { t: string; d: string; icon: 'shield' | 'file' | 'lock' | 'clock' };

export default function Security() {
  const items: Cert[] = [
    { t: 'BCB Resolução 4.658',  d: 'Política de segurança cibernética para instituições autorizadas. Reportes, contingência, monitoramento.', icon: 'shield' },
    { t: 'Lei 9.613/98 + COAF',  d: 'Prevenção à lavagem de dinheiro. Workflow de comunicações obrigatórias. Documentação de auditoria.', icon: 'file' },
    { t: 'LGPD · Lei 13.709/18', d: 'Operadores de dados. DPO designado. Encarregado disponível. Direitos do titular automatizados.', icon: 'lock' },
    { t: 'CVM 35 · suitability',  d: 'Cadastro de cliente e categorização de investidor. Integrado ao fluxo de onboarding.', icon: 'file' },
  ];
  return (
    <Section id="seguranca" pad="var(--pad-section)" bg="var(--text-primary)">
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

        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'var(--cols-2)', gap: 16 }}>
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
      </div>
    </Section>
  );
}
