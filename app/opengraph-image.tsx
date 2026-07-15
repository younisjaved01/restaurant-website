import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0B5D2A 0%, #16A234 55%, #35C759 100%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 120,
            height: 120,
            borderRadius: 32,
            background: 'rgba(255,255,255,0.15)',
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 64, color: '#FFFFFF', fontWeight: 700 }}>N</span>
        </div>
        <span style={{ fontSize: 64, fontWeight: 700, color: '#FFFFFF' }}>
          Nature&apos;s Brew Co.
        </span>
        <span style={{ fontSize: 30, color: '#EAF8EE', marginTop: 16 }}>
          Smoothies, Fresh Juices &amp; Coffee
        </span>
      </div>
    ),
    { ...size }
  );
}
