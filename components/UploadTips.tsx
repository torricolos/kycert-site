export default function UploadTips() {
  return (
    <section style={{ padding: '40px 0' }}>
      <div
        style={{
          padding: 24,
          borderRadius: 12,
          background: 'var(--surface-canvas)',
          border: '1px solid var(--border-default)',
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>Dicas pra upload</div>
        <ul
          style={{
            margin: 0,
            paddingLeft: 18,
            color: 'var(--text-secondary)',
            fontSize: 14,
            lineHeight: 1.7,
          }}
        >
          <li>Os PNGs estão no tamanho exato de cada plataforma — não redimensione</li>
          <li>Avatares saem com fundo, ficando certinhos mesmo em apps que cortam diferente</li>
          <li>
            Em capas com proporção 1.91:1 (LinkedIn post, Facebook), mantenha logos centrais —
            laterais podem ser cortadas
          </li>
          <li>
            Para YouTube channel art (2560×1440), a safe-area é só 1546×423 no centro — tudo
            essencial dentro dessa zona
          </li>
          <li>
            Stories Instagram/TikTok: deixe 250px livres no topo e 350px no rodapé (espaço pro
            botão de avançar e UI)
          </li>
        </ul>
      </div>
    </section>
  );
}
