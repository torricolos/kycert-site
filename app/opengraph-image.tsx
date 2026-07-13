import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'KYCERT — Comprove cada cliente, cada decisão.'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0E1116',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px 96px',
        }}
      >
        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6 }}>
          <span style={{
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 800,
            fontSize: 36,
            letterSpacing: '-1.5px',
            color: '#FFFFFF',
            lineHeight: 1,
          }}>
            kycert
          </span>
          <div style={{
            width: 7, height: 7,
            borderRadius: '50%',
            background: '#1F8A5B',
            marginBottom: 5,
          }} />
        </div>

        {/* Headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 72,
            color: '#FFFFFF',
            lineHeight: 1.05,
            letterSpacing: '-2px',
          }}>
            Comprove cada cliente,<br />
            <span style={{ color: '#1F8A5B' }}>cada decisão.</span>
          </div>
          <div style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 22,
            color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.4,
          }}>
            Onboarding, KYC e bureau para mercados regulados — BCB · LGPD · COAF
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
