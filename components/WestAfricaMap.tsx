export default function WestAfricaMap() {
  return (
    <svg viewBox="0 0 520 430" aria-hidden="true" className="h-full w-full opacity-70">
      <defs>
        <linearGradient id="mapGold" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.08" />
        </linearGradient>
        <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M105 130 145 91l75 13 39-31 78 11 55 47 40 19-11 58 38 54-39 56-74 10-37 42-92-2-46-34-52 1-53-48 18-70-31-43Z"
        fill="url(#mapGold)"
        stroke="#c9a84c"
        strokeOpacity="0.45"
        strokeWidth="1.4"
        filter="url(#softGlow)"
      />
      <path d="M115 222c63 9 128 7 190-6 41-8 79-20 119-38" fill="none" stroke="#e8edf6" strokeOpacity="0.12" strokeWidth="1" />
      <path d="M173 108c19 74 18 150-3 227" fill="none" stroke="#e8edf6" strokeOpacity="0.1" strokeWidth="1" />
      <path d="M272 84c13 93 7 188-18 283" fill="none" stroke="#e8edf6" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="314" cy="245" r="4" fill="#c9a84c" opacity="0.75" />
      <circle cx="250" cy="236" r="3" fill="#c9a84c" opacity="0.55" />
      <circle cx="190" cy="253" r="3" fill="#c9a84c" opacity="0.45" />
    </svg>
  );
}
