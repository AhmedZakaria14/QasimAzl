import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          style={{ width: '100%', height: '100%' }}
          fill="none"
        >
          {/* Main Shield / Hexagon Base */}
          <path
            d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 L50 5 Z"
            fill="#2563eb"
          />
          {/* Roof Element inside */}
          <path
            d="M25 45 L50 25 L75 45"
            stroke="#ea580c"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Central Droplet Element */}
          <path
            d="M50 35 C50 35 35 55 35 65 C35 73.284 41.716 80 50 80 C58.284 80 65 73.284 65 65 C65 55 50 35 50 35 Z"
            fill="#f97316"
          />
        </svg>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
