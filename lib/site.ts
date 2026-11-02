export const BASE = 'https://kycert.com.br';
export const ORG_ID = `${BASE}/#organization`;
export const DEFAULT_OG = `${BASE}/og.png`;

const WA_TEXT = encodeURIComponent('Olá, gostaria de agendar uma demo da kycert.').replace(/%20/g, '+');
export const WHATSAPP_DEMO = `https://api.whatsapp.com/send/?phone=5511977656630&text=${WA_TEXT}&type=phone_number&app_absent=0`;

/** Escapa HTML para uso em atributos e texto dentro de strings de template. */
export function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Serializa JSON-LD sem permitir fechar o <script> por acidente. */
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\u003c');
}

export function formatDateBR(iso: string): string {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

export function todayISO(): string {
  return new Date().toISOString().slice(0, 10);
}
