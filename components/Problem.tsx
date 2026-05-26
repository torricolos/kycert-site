import Section, { Eyebrow } from './Section';

export default function Problem() {
  return (
    <Section id="problema" pad="var(--pad-section)" bg="var(--surface-app)">
      <div style={{ maxWidth: 820 }}>
        <Eyebrow>O problema</Eyebrow>
        <h2 style={{
          margin: '20px 0 0',
          fontFamily: 'var(--font-sans)', fontSize: 'clamp(32px, 4vw, 52px)',
          fontWeight: 700, letterSpacing: '-0.035em',
          lineHeight: 1.1, textWrap: 'balance' as const,
        }}>
          Consultar bureau é fácil.{' '}
          <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>
            Validar um cliente regulado, não.
          </span>
        </h2>
        <div style={{ marginTop: 36, display: 'grid', gridTemplateColumns: 'var(--cols-2)', gap: 40 }}>
          <p style={{ margin: 0, fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Em qualquer empresa que precisa validar o cliente antes de operar, o processo se repete:
            documentos circulam por email, sistemas isolados, planilhas e times sobrecarregados.
            Bureau resolve uma consulta — não resolve um cliente.
          </p>
          <p style={{ margin: 0, fontSize: 'var(--text-lg)', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            O custo aparece em três frentes: clientes que desistem no meio do onboarding, documentos
            vencidos que passam batido na renovação, e o tempo do compliance gasto no que um sistema
            poderia resolver sozinho.
          </p>
        </div>
        <div role="list" aria-label="Custo do onboarding manual" style={{
          marginTop: 64, display: 'grid', gridTemplateColumns: 'var(--cols-3)', gap: 0,
          borderTop: '1px solid var(--border-default)',
          borderBottom: '1px solid var(--border-default)',
        }}>
          {[
            { v: '3–7 dias', l: 'pra validar um cliente PJ na média do mercado' },
            { v: '32%', l: 'dos clientes desistem no cadastro tradicional' },
            { v: 'R$ 480', l: 'custo médio por cadastro analisado manualmente' },
          ].map((s, i) => (
            <div key={i} role="listitem" style={{
              padding: '40px 24px',
              borderRight: i < 2 ? '1px solid var(--border-default)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-sans)', fontSize: 'clamp(36px, 4vw, 48px)',
                fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1,
              }}>{s.v}</div>
              <div style={{ marginTop: 12, fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', lineHeight: 1.5, maxWidth: 240 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
