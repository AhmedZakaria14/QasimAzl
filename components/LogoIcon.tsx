export default function LogoIcon({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" /> {/* blue-900 */}
          <stop offset="100%" stopColor="#2563eb" /> {/* blue-600 */}
        </linearGradient>
        <linearGradient id="dropGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" /> {/* blue-400 */}
          <stop offset="100%" stopColor="#f97316" /> {/* orange-500 for thermal */}
        </linearGradient>
        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f97316" /> {/* orange-500 */}
          <stop offset="100%" stopColor="#ea580c" /> {/* orange-600 */}
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Main Shield / Hexagon Base */}
      <path
        d="M50 5 L90 20 V50 C90 75 50 95 50 95 C50 95 10 75 10 50 V20 L50 5 Z"
        fill="url(#shieldGradient)"
        filter="url(#shadow)"
      />

      {/* Roof Element inside */}
      <path
        d="M25 45 L50 25 L75 45"
        stroke="url(#roofGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Central Droplet Element representing water and heat */}
      <path
        d="M50 35 C50 35 35 55 35 65 C35 73.284 41.716 80 50 80 C58.284 80 65 73.284 65 65 C65 55 50 35 50 35 Z"
        fill="url(#dropGradient)"
      />
      
      {/* Shine on the droplet */}
      <path
        d="M45 55 C42 60 42 65 45 70"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}
