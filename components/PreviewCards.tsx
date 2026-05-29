import { PreviewFrame } from './PreviewFrame';
import Icon from './Icon';

type Props = {
  recipient?: string;
  from?: string;
  message?: string;
};

export function InviteCard({
  recipient = 'Maria Silva',
  from = 'Sua Empresa',
  message = 'Maria, abra seu cadastro para começar a operar com a gente.',
}: Props) {
  return (
    <PreviewFrame>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: 6 }}>
        Convite enviado
      </div>
      <div style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xl)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 24 }}>
        Para {recipient}
      </div>
      <div style={{ background: 'var(--surface-sunken)', borderRadius: 'var(--radius-md)', padding: 16, marginBottom: 14 }}>
        <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginBottom: 4, fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>De</div>
        <div style={{ fontSize: 13, fontWeight: 500 }}>{from} &lt;cadastro@empresa.com.br&gt;</div>
      </div>
      <div style={{ padding: 16, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: 4, background: 'var(--module-cadastro)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 11 }}>SE</div>
          <span style={{ fontSize: 13, fontWeight: 600 }}>{from}</span>
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 17, lineHeight: 1.3, color: 'var(--text-primary)', marginBottom: 12 }}>
          {message}
        </div>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 'var(--radius-sm)', background: 'var(--text-primary)', color: 'var(--surface-canvas)', fontSize: 12, fontWeight: 600 }}>
          Realizar cadastro
        </div>
      </div>
    </PreviewFrame>
  );
}

export function ClientFormCard() {
  return (
    <PreviewFrame dotColor="var(--module-cadastro)">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>Etapa 3 de 5</div>
          <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', marginTop: 2 }}>Documento de identidade</div>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {[1, 1, 1, 0, 0].map((c, i) => (
            <span key={i} style={{ width: 24, height: 4, borderRadius: 2, background: c ? 'var(--text-primary)' : 'var(--surface-sunken)' }} />
          ))}
        </div>
      </div>
      {[
        { name: 'CNH frente.jpg', hint: 'OCR completo · dados extraídos' },
        { name: 'CNH verso.jpg', hint: 'Selfie verificada · biometria OK' },
      ].map((f) => (
        <div key={f.name} style={{ padding: 14, border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', background: 'var(--status-success-bg)', color: 'var(--status-success)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="check" size={18} strokeWidth={2.5} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>{f.name}</div>
            <div style={{ fontSize: 11, color: 'var(--text-tertiary)', marginTop: 1 }}>{f.hint}</div>
          </div>
        </div>
      ))}
      <div style={{ marginTop: 14, padding: 12, borderRadius: 'var(--radius-md)', background: 'var(--module-cadastro)', color: '#fff', fontSize: 13, fontWeight: 600, textAlign: 'center' }}>
        Continuar →
      </div>
    </PreviewFrame>
  );
}

type Check = { l: string; v: string; status: 'success' | 'warning' };

export function ComplianceCard({ checks }: { checks?: Check[] }) {
  const items: Check[] = checks || [
    { l: 'Receita Federal', v: 'CPF regular', status: 'success' },
    { l: 'Lista OFAC', v: 'Sem ocorrências', status: 'success' },
    { l: 'PEP', v: 'Não exposta', status: 'success' },
    { l: 'COAF', v: 'Sem comunicados', status: 'success' },
    { l: 'Renda compatível', v: 'Acima do esperado · revisar', status: 'warning' },
  ];
  return (
    <PreviewFrame dotColor="var(--module-compliance)">
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xs)', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--module-compliance)', marginBottom: 6 }}>
        Compliance
      </div>
      <div style={{ fontSize: 'var(--text-xl)', fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 20 }}>
        Análise de Maria Silva
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map((c) => (
          <div key={c.l} style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '8px 12px', borderRadius: 'var(--radius-sm)',
            background: c.status === 'warning' ? 'var(--status-warning-bg)' : 'transparent',
            border: `1px solid ${c.status === 'warning' ? 'var(--status-warning-border)' : 'var(--border-subtle)'}`,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: `var(--status-${c.status})`, flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 500, flex: 1 }}>{c.l}</span>
            <span style={{ fontSize: 11, color: 'var(--text-tertiary)' }}>{c.v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, padding: 12, borderRadius: 'var(--radius-md)', background: 'var(--surface-sunken)', display: 'flex', alignItems: 'center', gap: 10 }}>
        <Icon name="sparkles" size={14} color="var(--module-ai)" />
        <div style={{ fontSize: 12, color: 'var(--text-secondary)', flex: 1 }}>
          IA enquadrou como <strong style={{ color: 'var(--text-primary)' }}>risco médio (38)</strong>.
        </div>
      </div>
    </PreviewFrame>
  );
}

export function ApprovedCard({ headline = 'Maria está certificada\ne pronta para operar.' }: { headline?: string }) {
  return (
    <PreviewFrame dotColor="var(--status-success)">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0 12px' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--status-success-bg)', color: 'var(--status-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <Icon name="check" size={32} strokeWidth={2.5} />
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'var(--text-2xl)', color: 'var(--text-primary)', textAlign: 'center', lineHeight: 1.15, whiteSpace: 'pre-line' }}>
          {headline}
        </div>
      </div>
      <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, fontSize: 11 }}>
        {([
          ['Tempo total', '1 min 48 s'],
          ['Score de risco', '38 · médio'],
          ['Documentos', '14 anexados'],
          ['Próxima revisão', 'Em 365 dias'],
        ] as const).map(([l, v]) => (
          <div key={l} style={{ padding: 10, background: 'var(--surface-sunken)', borderRadius: 6 }}>
            <div style={{ color: 'var(--text-tertiary)' }}>{l}</div>
            <div style={{ fontWeight: 600, marginTop: 2, fontSize: 14 }}>{v}</div>
          </div>
        ))}
      </div>
    </PreviewFrame>
  );
}
