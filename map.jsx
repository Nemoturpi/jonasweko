// West Africa stylized map — abstract, ton-sur-ton.
// Country boundaries are intentionally simplified — institutional vibe,
// not cartographic precision. UEMOA + AES + côtiers anglophones grouped.

const WA_COUNTRIES = {
  // Approximate polygon paths in a 1000x780 viewBox (rough geo positions,
  // simplified so the map reads as a region not a chart).
  MR: { name: 'Mauritanie', d: 'M120,80 L380,80 L420,210 L360,260 L200,260 L120,200 Z' },
  ML: { name: 'Mali', d: 'M200,260 L360,260 L420,210 L520,210 L560,330 L520,420 L420,470 L350,460 L290,400 L240,380 L210,330 Z' },
  NE: { name: 'Niger', d: 'M520,210 L760,210 L820,300 L820,420 L760,460 L640,460 L560,420 L520,370 Z' },
  SN: { name: 'Sénégal', d: 'M120,280 L210,330 L240,380 L210,420 L170,440 L120,410 L100,340 Z' },
  GM: { name: 'Gambie', d: 'M120,360 L210,360 L210,390 L120,390 Z' },
  GW: { name: 'Guinée-Bissau', d: 'M120,430 L210,440 L210,470 L120,470 Z' },
  GN: { name: 'Guinée', d: 'M170,440 L290,400 L330,460 L320,520 L240,540 L170,510 Z' },
  SL: { name: 'Sierra Leone', d: 'M170,520 L240,540 L240,580 L180,580 Z' },
  LR: { name: 'Liberia', d: 'M240,540 L320,540 L340,610 L260,620 L240,580 Z' },
  CI: { name: 'Côte d\u2019Ivoire', d: 'M320,540 L420,520 L470,540 L470,620 L420,650 L340,640 L320,580 Z' },
  BF: { name: 'Burkina Faso', d: 'M350,460 L520,460 L560,500 L540,560 L450,540 L380,520 Z' },
  GH: { name: 'Ghana', d: 'M470,540 L560,540 L560,640 L500,660 L470,640 Z' },
  TG: { name: 'Togo', d: 'M560,540 L600,540 L600,650 L560,650 Z' },
  BJ: { name: 'Bénin', d: 'M600,540 L650,540 L660,650 L600,650 Z' },
  NG: { name: 'Nigeria', d: 'M650,520 L820,460 L860,540 L840,650 L740,680 L660,650 Z' },
};

// Coverage zones for the brief: UEMOA + AES + côtiers
const ZONES = {
  UEMOA: ['SN', 'ML', 'BF', 'NE', 'CI', 'TG', 'BJ', 'GW'],
  AES: ['ML', 'BF', 'NE'],
  COASTAL: ['CI', 'GH', 'TG', 'BJ', 'NG', 'SN'],
};

// Renders the stylized region. Props:
//   variant: 'watermark' | 'outline' | 'filled' | 'highlight'
//   accent: hex color for accent strokes/fills
//   showLabels: bool
//   highlight: array of country codes to emphasize
function WestAfricaMap({
  variant = 'watermark',
  accent = '#c9a84c',
  showLabels = false,
  highlight = [],
  className = '',
  style = {},
}) {
  const codes = Object.keys(WA_COUNTRIES);
  const fill = {
    watermark: 'rgba(201,168,76,0.03)',
    outline: 'transparent',
    filled: 'rgba(255,255,255,0.04)',
    highlight: 'rgba(255,255,255,0.025)',
  }[variant];
  const stroke = {
    watermark: 'rgba(201,168,76,0.18)',
    outline: 'rgba(255,255,255,0.22)',
    filled: 'rgba(255,255,255,0.28)',
    highlight: 'rgba(255,255,255,0.18)',
  }[variant];

  return (
    <svg
      viewBox="0 0 920 720"
      className={className}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Carte stylisée de l\u2019Afrique de l\u2019Ouest"
    >
      <defs>
        <pattern id="wa-dots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="0.7" fill="rgba(201,168,76,0.35)" />
        </pattern>
      </defs>

      {/* Ocean / atmospheric hatch on the left edge */}
      {variant !== 'watermark' && (
        <g opacity="0.35">
          {Array.from({ length: 14 }).map((_, i) => (
            <line
              key={i}
              x1={20}
              y1={120 + i * 38}
              x2={90}
              y2={140 + i * 38}
              stroke={accent}
              strokeWidth="0.6"
              opacity="0.4"
            />
          ))}
        </g>
      )}

      {/* Country shapes */}
      {codes.map((code) => {
        const c = WA_COUNTRIES[code];
        const isHi = highlight.includes(code);
        return (
          <path
            key={code}
            d={c.d}
            fill={isHi ? `${accent}26` : fill}
            stroke={isHi ? accent : stroke}
            strokeWidth={isHi ? 1.2 : 0.7}
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
          />
        );
      })}

      {/* Optional labels — small caps codes */}
      {showLabels &&
        codes.map((code) => {
          const c = WA_COUNTRIES[code];
          // Crude centroid via path bounding box estimate
          const match = c.d.match(/[ML]([\d.]+),([\d.]+)/g) || [];
          const pts = match.map((m) => m.slice(1).split(',').map(Number));
          if (pts.length === 0) return null;
          const cx = pts.reduce((s, p) => s + p[0], 0) / pts.length;
          const cy = pts.reduce((s, p) => s + p[1], 0) / pts.length;
          return (
            <text
              key={code + '-l'}
              x={cx}
              y={cy}
              textAnchor="middle"
              fontSize="11"
              fontFamily="'DM Sans', sans-serif"
              fontWeight="500"
              letterSpacing="0.08em"
              fill={highlight.includes(code) ? accent : 'rgba(255,255,255,0.45)'}
            >
              {code}
            </text>
          );
        })}

      {/* Subtle meridian / parallel lines for cartographic feel */}
      {variant === 'filled' && (
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" strokeDasharray="2 4">
          <line x1="0" y1="260" x2="920" y2="260" />
          <line x1="0" y1="460" x2="920" y2="460" />
          <line x1="280" y1="0" x2="280" y2="720" />
          <line x1="560" y1="0" x2="560" y2="720" />
        </g>
      )}
    </svg>
  );
}

// Polygonal/network rendering of West Africa — ADIT-style.
// Generates triangulated mesh from sampled country centroids + edge points,
// rendered as thin navy strokes with gold accent vertices.
function WestAfricaNetwork({ navy = '#0d2849', accent = '#d4b96b', strokeWidth = 0.8, className = '', style = {}, highlight = [] }) {
  // Manually-curated point cloud across the region — denser than centroids.
  // Coordinates in the same 920x720 viewBox as WestAfricaMap.
  const points = [
    // Outer frame samples
    [80, 100], [180, 80], [300, 90], [430, 95], [560, 100], [690, 110], [810, 130],
    // Sahel band
    [120, 200], [240, 220], [360, 230], [480, 230], [600, 240], [730, 260],
    // Mid band (Mali / BF / Niger)
    [180, 320], [290, 340], [400, 350], [510, 340], [620, 340], [740, 360],
    // Lower Sahel
    [220, 410], [330, 420], [450, 430], [570, 430], [680, 440], [790, 470],
    // Gulf of Guinea
    [200, 490], [310, 500], [430, 500], [540, 510], [650, 530], [770, 560],
    [260, 580], [380, 590], [490, 590], [600, 610], [710, 620],
    [340, 640], [460, 660], [580, 670], [690, 680],
  ];

  // Build triangles via simple Delaunay-ish nearest-neighbor edge connection.
  // We don't need a true triangulation — just enough edges for the mesh look.
  const edges = [];
  const seen = new Set();
  const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  for (let i = 0; i < points.length; i++) {
    const neighbors = points
      .map((p, j) => ({ j, d: dist(points[i], p) }))
      .filter((x) => x.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, 4); // each point connects to ~4 nearest
    for (const n of neighbors) {
      if (n.d > 200) continue;
      const key = i < n.j ? `${i}-${n.j}` : `${n.j}-${i}`;
      if (seen.has(key)) continue;
      seen.add(key);
      edges.push([i, n.j, n.d]);
    }
  }

  // Approximate region mask — exclude edges that cross too far west into ocean
  const inRegion = (p) => {
    const [x, y] = p;
    // Crude polygon hull check
    if (x < 100 && y > 480) return false;
    if (x > 830) return false;
    return true;
  };

  return (
    <svg viewBox="0 0 920 720" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      {/* Edges (the mesh) */}
      <g stroke={navy} strokeOpacity="0.55" strokeWidth={strokeWidth} fill="none">
        {edges.map(([i, j], k) => {
          const p1 = points[i];
          const p2 = points[j];
          if (!inRegion(p1) || !inRegion(p2)) return null;
          return <line key={k} x1={p1[0]} y1={p1[1]} x2={p2[0]} y2={p2[1]} />;
        })}
      </g>
      {/* Vertices — small navy dots, with gold highlights on a few */}
      {points.map((p, i) => {
        if (!inRegion(p)) return null;
        const isAccent = i % 7 === 0 || i % 11 === 0;
        return (
          <circle
            key={i}
            cx={p[0]}
            cy={p[1]}
            r={isAccent ? 2.2 : 1.4}
            fill={isAccent ? accent : navy}
            opacity={isAccent ? 0.9 : 0.75}
          />
        );
      })}
    </svg>
  );
}

window.WestAfricaNetwork = WestAfricaNetwork;

window.WestAfricaMap = WestAfricaMap;
window.WA_COUNTRIES = WA_COUNTRIES;
window.WA_ZONES = ZONES;
