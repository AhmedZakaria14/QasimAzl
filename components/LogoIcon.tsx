export default function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className={className} fill="none" role="img" aria-label="شعار عوازل القصيم">
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#291686" />
          <stop offset="100%" stopColor="#5a40b8" />
        </linearGradient>
        <linearGradient id="dropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#b9df81" />
          <stop offset="100%" stopColor="#7bbb3f" />
        </linearGradient>
        <filter id="shadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1d0e63" floodOpacity="0.25" />
        </filter>
      </defs>
      <path d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 L50 5 Z" fill="url(#shieldGradient)" filter="url(#shadow)" />
      <path d="M25 45 L50 25 L75 45" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity=".95" />
      <path d="M50 35 C50 35 35 55 35 65 C35 73.284 41.716 80 50 80 C58.284 80 65 73.284 65 65 C65 55 50 35 50 35 Z" fill="url(#dropGradient)" />
      <path d="M45 55 C42 60 42 65 45 70" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}
