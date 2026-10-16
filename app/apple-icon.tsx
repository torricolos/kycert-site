import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0E1116',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#FFFFFF', fontSize: 112, fontWeight: 800, letterSpacing: '-4px', lineHeight: 1 }}>k</span>
        <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#1F8A5B', marginTop: 56, marginLeft: 4 }} />
      </div>
    ),
    { ...size },
  );
}
