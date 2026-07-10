export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <a className="brand" href="/">kycert<span className="sig">.</span></a>
            <div className="tagline">Onboarding, verificação e trilha auditável para instituições reguladas.</div>
            <div className="social">
              <a href="https://www.linkedin.com/company/kycert/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.3-.02-2.96-1.8-2.96-1.8 0-2.08 1.4-2.08 2.86V21h-4z" /></svg>
              </a>
              <a href="https://www.instagram.com/kycert.oficial/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17" cy="7" r="1.2" fill="currentColor" stroke="none" /></svg>
              </a>
            </div>
          </div>

          <div className="col">
            <h5>Produtos</h5>
            <a className="fl" href="/produto/kyc">Verificação PF · KYC</a>
            <a className="fl" href="/produto/kyb">Verificação PJ · KYB</a>
            <a className="fl" href="/produto/dossie-de-risco">Dossiê de Risco</a>
            <a className="fl" href="/produto/ocr">Cadastro & documentos</a>
            <a className="fl" href="/produto/monitoramento">Monitoramento</a>
            <a className="fl" href="/produto/api">API & webhooks</a>
          </div>

          <div className="col">
            <h5>Soluções</h5>
            <a className="fl" href="/solucoes/cambio">Câmbio</a>
            <a className="fl" href="/solucoes/psav">PSAV / cripto</a>
            <a className="fl" href="/solucoes/bancos">Bancos & fintechs</a>
            <a className="fl" href="/solucoes/cooperativas">Cooperativas de crédito</a>
            <a className="fl" href="/solucoes/mercado-capitais">Mercado de capitais</a>
            <a className="fl" href="/solucoes/seguradoras">Seguradoras</a>
            <a className="fl" href="/solucoes/bets">Apostas / Bets</a>
          </div>

          <div className="col">
            <h5>Recursos</h5>
            <a className="fl" href="/blog">Blog</a>
            <a className="fl" href="/faq">Perguntas frequentes</a>
            <a className="fl" href="/faq#glossario">Glossário</a>
            <a className="fl" href="/guias">Guias e materiais</a>
            <a className="fl" href="/dossie-exemplo">Dossiê de exemplo</a>
          </div>

          <div className="col">
            <h5>Empresa</h5>
            <a className="fl" href="/seguranca">Segurança</a>
            <a className="fl" href="/conformidade">Conformidade</a>
            <a className="fl" href="mailto:contato@kycert.com.br">Contato</a>
          </div>

          <div className="col">
            <h5>Legal</h5>
            <a className="fl" href="/termos">Termos de Uso</a>
            <a className="fl" href="/privacidade">Privacidade & LGPD</a>
            <a className="fl" href="/tratamento-de-dados">Tratamento de Dados</a>
          </div>
        </div>

        <div className="foot-legal">
          A kycert não substitui assessoria jurídica nem dispensa os demais deveres regulatórios previstos na legislação vigente. kycert tecnologia ltda · CNPJ 59.959.589/0001-00 · São Paulo · Brasil · Privacidade & LGPD.
        </div>

        <div className="bottom">
          <span>© 2026 kycert. todos os direitos reservados.</span>
          <span className="mono"><span className="live-dot" style={{ width: 7, height: 7 }} /> todos os sistemas operacionais</span>
        </div>
      </div>
    </footer>
  );
}
