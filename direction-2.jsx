// Direction 2 — ADIT-inspired structure
// Light cream bg + navy ink + gold accent. Offset card grids, dashed diagonal
// connectors, floating gold/navy squares, polygonal network illustration.
// Navy (palette.base) and accent are still theme-driven.

function hexToRgba(hex, a) {
  const h = hex.replace('#', '');
  const n = h.length === 3 ? h.split('').map((c) => c + c).join('') : h;
  const r = parseInt(n.slice(0, 2), 16);
  const g = parseInt(n.slice(2, 4), 16);
  const b = parseInt(n.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

// Floating decorative square (gold or navy) — ADIT signature element
function FloatSquare({ color, size = 12, top, left, right, bottom, style = {} }) {
  return (
    <span
      aria-hidden
      style={{
        position: 'absolute',
        width: size,
        height: size,
        background: color,
        top, left, right, bottom,
        ...style,
      }}
    />
  );
}

// Dashed diagonal connector — used between sections/cards
function DashedConnector({ from, to, color, style = {} }) {
  // from/to are {x: %, y: %} in parent
  return (
    <svg
      aria-hidden
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none', width: '100%', height: '100%', ...style }}
      preserveAspectRatio="none"
    >
      <line
        x1={`${from.x}%`} y1={`${from.y}%`}
        x2={`${to.x}%`} y2={`${to.y}%`}
        stroke={color} strokeWidth="0.5" strokeDasharray="2 4"
      />
    </svg>
  );
}

// Gold-bordered pill button — ADIT CTA style on light bg
function ADITBtn({ children, href = '#', variant = 'gold', density = 'compact', navy, gold, style = {} }) {
  const compact = density === 'compact';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: compact ? 13 : 14,
    fontWeight: 600,
    letterSpacing: '0.02em',
    padding: compact ? '12px 28px' : '15px 34px',
    borderRadius: 999,
    textDecoration: 'none',
    transition: 'all .2s',
    cursor: 'pointer',
    border: '1.5px solid transparent',
  };
  const variants = {
    gold: { ...base, background: 'transparent', color: navy, borderColor: gold },
    goldFill: { ...base, background: gold, color: navy, borderColor: gold },
    navy: { ...base, background: navy, color: '#fff', borderColor: navy },
  };
  return (
    <a href={href} style={{ ...variants[variant], ...style }}>
      {children}
    </a>
  );
}

// Gold-highlighted keyword span — ADIT body emphasis
function K({ children, color }) {
  return <strong style={{ color, fontWeight: 600 }}>{children}</strong>;
}

function Direction2({ accent = '#d4b96b', density = 'compact', palette = { base: '#0d2849', elev: '#103056', deep: '#0a1f3a' } }) {
  useReveal();
  const C = CONTENT;
  const compact = density === 'compact';

  // Tokens
  const navy = palette.base;
  const gold = accent;
  const bg = '#fafaf6';        // cream paper
  const panel = '#e8ebec';     // light grey panel
  const ink = navy;            // primary text = navy
  const inkMuted = hexToRgba(navy, 0.72);
  const inkSubtle = hexToRgba(navy, 0.55);
  const inkBare = hexToRgba(navy, 0.3);
  const px = compact ? 64 : 88;
  const py = compact ? 90 : 130;

  return (
    <div
      style={{
        background: bg,
        color: ink,
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        minHeight: '100%',
      }}
    >
      {/* ────────── TOP UTILITY ────────── */}
      <div
        style={{
          padding: `8px ${px}px`,
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 32,
          fontSize: 11,
          letterSpacing: '0.18em',
          color: inkSubtle,
          borderBottom: `1px solid ${hexToRgba(navy, 0.08)}`,
        }}
      >
        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>FR</a>
        <a href="#" style={{ color: inkBare, textDecoration: 'none' }}>EN</a>
      </div>

      {/* ────────── MAIN NAV ────────── */}
      <header
        style={{
          padding: `24px ${px}px`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: bg,
        }}
      >
        {/* Logo block — circular gold spiral + name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <svg width="44" height="44" viewBox="0 0 44 44" aria-hidden>
            <circle cx="22" cy="22" r="20" fill="none" stroke={gold} strokeWidth="1.5" />
            <path
              d="M22 8 Q34 14, 34 22 Q34 32, 22 32 Q12 32, 12 24 Q12 18, 20 18 Q26 18, 26 22 Q26 26, 22 26"
              fill="none"
              stroke={navy}
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <circle cx="34" cy="14" r="1.5" fill={gold} />
            <circle cx="30" cy="11" r="1" fill={gold} opacity="0.7" />
          </svg>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, letterSpacing: '0.05em', color: navy, lineHeight: 1 }}>
              JONAS
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 600, letterSpacing: '0.05em', color: navy, lineHeight: 1, marginTop: 2 }}>
              WEKO
            </div>
          </div>
        </div>

        <nav style={{ display: 'flex', gap: 36, fontSize: 13, fontWeight: 600, color: navy }}>
          {[
            ['Constat', '#problem'],
            ['Expertise', '#expertise'],
            ['Prestations', '#formats'],
            ['Références', '#references'],
            ['Contact', '#contact'],
          ].map(([l, h]) => (
            <a key={l} href={h} style={{ color: 'inherit', textDecoration: 'none' }}>
              {l}
            </a>
          ))}
        </nav>
      </header>

      {/* ────────── HERO ────────── */}
      <section
        id="hero"
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          padding: `80px ${px}px`,
          background: palette.deep,
        }}
      >
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
          }}
        >
          <img
            src="uploads/hero.webp"
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              opacity: 0.75,
              display: 'block',
            }}
          />
        </div>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background: 'linear-gradient(105deg, rgba(8,12,24,0.92) 0%, rgba(8,12,24,0.7) 45%, rgba(8,12,24,0.2) 100%)',
            pointerEvents: 'none',
          }}
        />

        <div
          data-reveal
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 680,
          }}
        >
          <span
            style={{
              display: 'inline-block',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 11.5,
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: gold,
              marginBottom: 24,
              paddingBottom: 10,
              borderBottom: `1px solid ${hexToRgba('#ffffff', 0.16)}`,
            }}
          >
            Analyse indépendante · Afrique de l'Ouest
          </span>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
              fontWeight: 300,
              lineHeight: 1.18,
              letterSpacing: '-0.01em',
              color: '#fff',
              margin: '0 0 28px',
              textWrap: 'balance',
            }}
          >
            Comprendre les systèmes monétaires et politiques d'Afrique de l'Ouest —{' '}
            <em style={{ color: '#ead68f', fontStyle: 'italic' }}>pour décider.</em>
          </h1>
          <p
            style={{
              fontSize: 16.5,
              fontWeight: 300,
              color: 'rgba(255,255,255,0.72)',
              lineHeight: 1.75,
              margin: '0 0 48px',
              maxWidth: 520,
            }}
          >
            Analyse indépendante pour investisseurs, banques et institutions exposées à la zone franc, à l'Eco et aux dynamiques de l'AES.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a
              href="#contact"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                background: gold,
                color: palette.deep,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Demander un briefing
            </a>
            <a
              href="#lead-magnet"
              style={{
                display: 'inline-block',
                padding: '14px 36px',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                fontWeight: 400,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Télécharger la note
            </a>
          </div>
        </div>
      </section>

      {/* ────────── AFFILIATIONS — strip between hero and CONSTAT ────────── */}
      <section
        data-reveal
        style={{
          position: 'relative',
          padding: `${compact ? 36 : 48}px ${px}px`,
          background: bg,
          borderTop: `1px solid ${hexToRgba(navy, 0.1)}`,
          borderBottom: `1px solid ${hexToRgba(navy, 0.1)}`,
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.28em',
              color: gold,
              fontWeight: 600,
            }}
          >
            AFFILIATIONS
          </div>
          <div
            style={{
              display: 'flex',
              gap: 56,
              alignItems: 'center',
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
            }}
          >
            {C.expertise.badges.map((b) => (
              <span
                key={b}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontStyle: 'italic',
                  fontWeight: 600,
                  color: navy,
                  letterSpacing: '0.02em',
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── § I · CONSTAT (navy banner + cream blocks) ────────── */}
      <section id="problem" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Navy banner — full width, section header */}
        <div style={{ background: navy, color: '#fff', position: 'relative' }}>
          {/* Section header inside banner */}
          <div
            data-reveal
            style={{
              padding: `${compact ? 80 : 110}px ${px}px ${compact ? 80 : 110}px`,
              textAlign: 'center',
              maxWidth: 1000,
              marginInline: 'auto',
              position: 'relative',
            }}
          >
            <FloatSquare color={gold} size={12} top={36} right={px - 20} />
            <FloatSquare color={gold} size={10} bottom={36} left={px - 20} />
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.28em',
                color: gold,
                fontWeight: 600,
                marginBottom: 24,
              }}
            >
              § I · CONSTAT
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: compact ? 48 : 62,
                lineHeight: 1.04,
                letterSpacing: '-0.014em',
                margin: 0,
                fontWeight: 500,
                color: '#fff',
                textWrap: 'balance',
              }}
            >
              {C.problem.title}
            </h2>
          </div>
        </div>

        {/* Navy area — 3 blocks, no numbers */}
        <div style={{ position: 'relative', padding: `${py}px ${px}px`, background: navy }}>
          <FloatSquare color={gold} size={10} top={py - 18} left={px + 24} />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 1,
              background: hexToRgba('#ffffff', 0.1),
              maxWidth: 1180,
              marginInline: 'auto',
            }}
          >
            {C.problem.blocks.map((b, i) => (
              <div
                key={i}
                data-reveal
                style={{
                  background: navy,
                  padding: compact ? '32px 28px' : '40px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  minHeight: 240,
                }}
              >
                <span
                  aria-hidden
                  style={{
                    width: 32,
                    height: 2,
                    background: gold,
                    display: 'block',
                  }}
                />
                <p
                  style={{
                    fontSize: compact ? 15 : 16,
                    lineHeight: 1.55,
                    color: 'rgba(255,255,255,0.85)',
                    margin: 0,
                    fontWeight: 400,
                    textWrap: 'pretty',
                  }}
                >
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── § II · EXPERTISE ────────── */}
      <section id="expertise" style={{ position: 'relative', padding: `${py}px ${px}px`, overflow: 'hidden' }}>
        <FloatSquare color={gold} size={14} top={py - 20} left={px + 40} />
        <FloatSquare color={navy} size={10} top={py + 40} right={px - 30} />

        <div data-reveal style={{ textAlign: 'center', maxWidth: 1000, marginInline: 'auto', marginBottom: compact ? 60 : 84 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.28em',
              color: gold,
              fontWeight: 600,
              marginBottom: 22,
            }}
          >
            § II · EXPERTISE
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: compact ? 46 : 60,
              lineHeight: 1.04,
              letterSpacing: '-0.014em',
              margin: 0,
              fontWeight: 500,
              color: navy,
              textWrap: 'balance',
            }}
          >
            {C.expertise.title}
          </h2>
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.6,
              color: inkMuted,
              maxWidth: 620,
              margin: '22px auto 0',
              fontWeight: 400,
              textWrap: 'pretty',
            }}
          >
            Une combinaison rare : <K color={gold}>doctorat dédié</K> au régime monétaire CFA,
            fréquentation des <K color={gold}>trois institutions clés</K> (FMI, BCEAO, UEMOA),
            publication LGDJ.
          </p>
        </div>

        {/* ───── BIO — editorial portrait spread ───── */}
        <div
          data-reveal
          style={{
            position: 'relative',
            marginBottom: compact ? 110 : 140,
            display: 'grid',
            gridTemplateColumns: '480px 1fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          {/* Editorial portrait — large, dominant, in-photo caption banner */}
          <div style={{ position: 'relative' }}>
            {/* Gold offset frame behind */}
            <div
              style={{
                position: 'absolute',
                left: -16,
                top: 18,
                width: '100%',
                height: '100%',
                border: `1.5px solid ${gold}`,
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/5',
                background: `url(assets/jonas.jpeg) center/cover`,
                overflow: 'hidden',
              }}
            >
              {/* In-photo caption banner — navy bar at bottom of portrait */}
              <div
                style={{
                  position: 'absolute',
                  left: 16,
                  right: 16,
                  bottom: 16,
                  padding: '14px 20px',
                  background: hexToRgba(navy, 0.92),
                  backdropFilter: 'blur(6px)',
                  WebkitBackdropFilter: 'blur(6px)',
                  borderLeft: `2px solid ${gold}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontWeight: 500,
                    color: '#fff',
                    letterSpacing: '0.005em',
                    lineHeight: 1.1,
                  }}
                >
                  Jonas Weko, PhD
                </div>
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    color: gold,
                    fontWeight: 600,
                    marginTop: 6,
                  }}
                >
                  DOCTEUR — SCIENCE POLITIQUE
                </div>
              </div>
            </div>
            <FloatSquare color={gold} size={10} bottom={28} left={-6} />
          </div>

          {/* Bio meta — name + creds + thesis stacked */}
          <div style={{ paddingTop: 18 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', color: gold, fontWeight: 600, marginBottom: 16 }}>
              CONSULTANT — DOCTEUR EN SCIENCE POLITIQUE
            </div>
            <h3
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: compact ? 64 : 78,
                margin: 0,
                fontWeight: 600,
                color: navy,
                letterSpacing: '-0.01em',
                lineHeight: 0.96,
                textWrap: 'balance',
              }}
            >
              {C.expertise.name}
            </h3>

            <div
              style={{
                marginTop: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                paddingTop: 24,
                borderTop: `1px solid ${hexToRgba(navy, 0.12)}`,
              }}
            >
              {C.expertise.creds.map((c, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: 14,
                    color: inkMuted,
                    lineHeight: 1.55,
                    paddingLeft: 20,
                    position: 'relative',
                    fontWeight: 400,
                  }}
                >
                  <span style={{ position: 'absolute', left: 0, top: 10, width: 10, height: 1, background: gold }} />
                  {c}
                </div>
              ))}
            </div>

            {/* Book + séjours row */}
            <div
              style={{
                marginTop: 32,
                paddingTop: 20,
                borderTop: `1px solid ${hexToRgba(navy, 0.1)}`,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 16,
              }}
            >
              <div style={{ fontSize: 13 }}>
                <span style={{ color: inkSubtle }}>{C.expertise.bookLabel} · </span>
                <a href={C.expertise.bookHref} style={{ color: gold, fontWeight: 600, textDecoration: 'none', borderBottom: `1px solid ${gold}` }}>
                  LGDJ ↗
                </a>
              </div>
              <div style={{ fontSize: 12, color: inkSubtle, fontStyle: 'italic' }}>
                Séjours · {C.expertise.stays.map((s) => s.org).join(' · ')}
              </div>
            </div>
          </div>
        </div>

        {/* ───── CINQ PÔLES — centered subsection header, harmonized with section pattern ────── */}
        <div
          data-reveal
          style={{
            textAlign: 'center',
            maxWidth: 900,
            marginInline: 'auto',
            marginBottom: compact ? 48 : 64,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.28em',
              color: gold,
              fontWeight: 600,
              marginBottom: 22,
            }}
          >
            CHAMPS D’EXPERTISE
          </div>
          <h3
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: compact ? 38 : 46,
              lineHeight: 1.06,
              letterSpacing: '-0.012em',
              margin: 0,
              fontWeight: 600,
              color: navy,
              textWrap: 'balance',
            }}
          >
            Cinq pôles de couverture
          </h3>
          <p
            style={{
              fontSize: 13.5,
              color: inkMuted,
              lineHeight: 1.6,
              maxWidth: 540,
              margin: '20px auto 0',
              fontWeight: 400,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}
          >
            Monétaire · Politique · Pays · Briefings · Conseil
          </p>
        </div>

        {/* Cards row */}
        <div data-reveal style={{ position: 'relative' }}>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {[
              {
                title: 'Architecture monétaire',
                terms: ['Franc CFA / UEMOA', 'Eco', 'Dette souveraine', 'e-CFA & fintech'],
                icon: 'brain',
              },
              {
                title: 'Risque politique',
                terms: ['Confédération AES', 'Golfe de Guinée', 'Coopération franco-afr.'],
                icon: 'handshake',
              },
              {
                title: 'Pays côtiers',
                terms: ['Côte d\u2019Ivoire', 'Sénégal', 'Ghana', 'Togo', 'Bénin'],
                icon: 'compass',
              },
              {
                title: 'Briefings dirigeants',
                terms: ['COMEX', 'Direction risque pays', 'Investisseurs', 'Banques'],
                emphasized: true,
                icon: 'arrow',
              },
              {
                title: 'Conseil & formation',
                terms: ['Due diligence', 'Audit géopolitique', 'Suivi mensuel'],
                icon: 'king',
              },
            ].map((p, i) => (
              <PoleCard
                key={p.title}
                pole={p}
                navy={navy}
                gold={gold}
                ink={ink}
                inkMuted={inkMuted}
                inkSubtle={inkSubtle}
                bg={bg}
              />
            ))}
          </div>
        </div>

        {/* Affiliations moved to strip between hero and CONSTAT */}
      </section>

      {/* ────────── § III · PRESTATIONS ────────── */}
      <section id="formats" style={{ position: 'relative', padding: `${py}px ${px}px`, overflow: 'hidden' }}>
        <FloatSquare color={gold} size={12} top={py - 30} right={px + 60} />

        <div data-reveal style={{ textAlign: 'center', maxWidth: 900, marginInline: 'auto', marginBottom: compact ? 60 : 84 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.28em',
              color: gold,
              fontWeight: 600,
              marginBottom: 22,
            }}
          >
            § III · PRESTATIONS
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 46 : 60, margin: 0, fontWeight: 500, color: navy, letterSpacing: '-0.014em', lineHeight: 1.04, textWrap: 'balance' }}>
            {C.formats.title}
          </h2>
          <p style={{ fontSize: 14.5, color: inkMuted, lineHeight: 1.6, maxWidth: 620, margin: '22px auto 0', fontWeight: 400, textWrap: 'pretty' }}>
            Quatre modalités d’engagement <K color={gold}>ajustables au délai</K> et au périmètre.
            Chaque format est livrable en français ou en anglais.
          </p>
        </div>

        {/* Editorial price list — horizontal rows, no numbering */}
        <div
          style={{
            borderTop: `1.5px solid ${hexToRgba(navy, 0.35)}`,
            borderBottom: `1.5px solid ${hexToRgba(navy, 0.35)}`,
            background: '#fff',
            position: 'relative',
          }}
        >
          <FloatSquare color={gold} size={10} top={-6} left={px / 2} />
          <FloatSquare color={navy} size={8} bottom={-5} right={px / 2} />

          {C.formats.cards.map((card, i) => {
            const titleCase = (s) => s.charAt(0) + s.slice(1).toLowerCase();
            return (
              <div
                key={card.id}
                data-reveal
                style={{
                  display: 'grid',
                  gridTemplateColumns: '320px 1fr 220px',
                  gap: 56,
                  padding: compact ? '36px 40px' : '48px 56px',
                  borderTop: i > 0 ? `1px solid ${hexToRgba(navy, 0.12)}` : 'none',
                  alignItems: 'start',
                  position: 'relative',
                }}
              >
                {/* Left — title block */}
                <div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: compact ? 30 : 36,
                      fontWeight: 500,
                      color: navy,
                      letterSpacing: '-0.01em',
                      lineHeight: 1.04,
                      marginBottom: 12,
                      textWrap: 'balance',
                    }}
                  >
                    {titleCase(card.tag)}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: inkSubtle,
                      fontStyle: 'italic',
                      fontWeight: 400,
                      lineHeight: 1.45,
                      textWrap: 'pretty',
                    }}
                  >
                    {card.sub}
                  </div>
                </div>

                {/* Middle — body */}
                <p
                  style={{
                    fontSize: compact ? 15 : 16,
                    lineHeight: 1.6,
                    color: ink,
                    margin: 0,
                    marginTop: 6,
                    fontWeight: 400,
                    textWrap: 'pretty',
                  }}
                >
                  {card.body}
                </p>

                {/* Right — price + CTA */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    alignItems: 'flex-end',
                    textAlign: 'right',
                    paddingTop: 4,
                  }}
                >
                  <div
                    style={{
                      fontSize: 10.5,
                      letterSpacing: '0.22em',
                      color: inkSubtle,
                      fontWeight: 600,
                    }}
                  >
                    HONORAIRES
                  </div>
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontSize: compact ? 22 : 26,
                      fontWeight: 500,
                      color: gold,
                      lineHeight: 1.1,
                    }}
                  >
                    {card.price}
                  </div>
                  <a
                    href="#contact"
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      color: navy,
                      textDecoration: 'none',
                      borderBottom: `1px solid ${navy}`,
                      paddingBottom: 2,
                      marginTop: 4,
                    }}
                  >
                    Me contacter →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ────────── LEAD MAGNET — navy block with white form ────────── */}
      <section
        id="lead-magnet"
        style={{
          position: 'relative',
          padding: `${py}px ${px}px`,
          background: panel,
          overflow: 'hidden',
        }}
      >
        <FloatSquare color={gold} size={14} top={40} left="42%" />
        <FloatSquare color={navy} size={12} bottom={50} right="20%" />

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'stretch', position: 'relative' }}>
          {/* Left navy block */}
          <div
            style={{
              background: navy,
              color: '#fff',
              padding: compact ? '48px 48px' : '64px 60px',
              position: 'relative',
            }}
          >
            <FloatSquare color={gold} size={10} top={-6} right={-6} />
            <div style={{ fontSize: 11, letterSpacing: '0.22em', color: gold, fontWeight: 600, marginBottom: 18 }}>
              NOTE DE POSITIONNEMENT — TÉLÉCHARGEMENT GRATUIT
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: compact ? 38 : 48,
                fontWeight: 600,
                lineHeight: 1.05,
                margin: '0 0 24px 0',
                color: '#fff',
                letterSpacing: '-0.005em',
                textWrap: 'balance',
              }}
            >
              {C.leadMagnet.headline}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.78)', margin: 0, fontWeight: 400 }}>
              {C.leadMagnet.description}
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 28, fontSize: 12, color: 'rgba(255,255,255,0.6)', flexWrap: 'wrap', letterSpacing: '0.04em' }}>
              {['14 pages', 'PDF français', 'Mise à jour trimestrielle', 'Sources annotées'].map((s) => (
                <span key={s} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 6, height: 6, background: gold }} />
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Right form on white */}
          <div
            style={{
              background: '#fff',
              padding: compact ? '40px 40px' : '52px 52px',
              boxShadow: `0 6px 32px ${hexToRgba(navy, 0.08)}`,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{ fontSize: 11, letterSpacing: '0.22em', color: gold, fontWeight: 600, marginBottom: 16 }}>
              INSCRIPTION
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, fontWeight: 600, color: navy, marginBottom: 32, letterSpacing: '-0.005em' }}>
              Recevoir la note
            </div>
            <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.16em', color: inkSubtle, fontWeight: 600, marginBottom: 10 }}>
              {C.leadMagnet.fieldLabel.toUpperCase()}
            </label>
            <input
              type="email"
              placeholder={C.leadMagnet.placeholder}
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: `1.5px solid ${hexToRgba(navy, 0.2)}`,
                color: navy,
                fontSize: 16,
                padding: '12px 0',
                outline: 'none',
                fontFamily: 'inherit',
                marginBottom: 28,
              }}
            />
            <ADITBtn variant="goldFill" navy={navy} gold={gold} density={density} href="#">
              {C.leadMagnet.submit}
            </ADITBtn>
            <div style={{ marginTop: 20, fontSize: 11, color: inkSubtle, lineHeight: 1.5 }}>
              Aucun spam. Vos données restent en France (UE). Désinscription en un clic.
            </div>
          </div>
        </div>
      </section>

      {/* ────────── § IV · RÉFÉRENCES ────────── */}
      <section id="references" style={{ position: 'relative', padding: `${py}px ${px}px`, overflow: 'hidden' }}>
        <FloatSquare color={navy} size={10} top={60} right={px - 20} />

        <div data-reveal style={{ textAlign: 'center', maxWidth: 900, margin: '0 auto', marginBottom: compact ? 56 : 80 }}>
          <div
            style={{
              fontSize: 11,
              letterSpacing: '0.28em',
              color: gold,
              fontWeight: 600,
              marginBottom: 22,
            }}
          >
            § IV · RÉFÉRENCES
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 46 : 60, margin: 0, fontWeight: 500, color: navy, letterSpacing: '-0.014em', lineHeight: 1.04, textWrap: 'balance' }}>
            {C.references.title}
          </h2>
          <p style={{ fontSize: 14, color: inkMuted, lineHeight: 1.6, maxWidth: 600, margin: '22px auto 0', fontWeight: 400, textWrap: 'pretty' }}>
            Affiliations institutionnelles et collaborations académiques sélectionnées.
            Citation client à publier après accord écrit.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {C.references.items.map((r, i) => (
            <div
              key={i}
              data-reveal
              style={{
                background: '#fff',
                padding: compact ? '32px 32px' : '40px 40px',
                borderTop: `3px solid ${gold}`,
                border: `1px solid ${hexToRgba(navy, 0.08)}`,
                borderTopWidth: 3,
                borderTopColor: gold,
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: '50%',
                  background: hexToRgba(gold, 0.15),
                  border: `1.5px solid ${gold}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontSize: 18,
                  fontWeight: 600,
                  color: navy,
                  marginBottom: 20,
                }}
              >
                {r.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: navy, fontWeight: 600, marginBottom: 8, letterSpacing: '-0.005em' }}>
                {r.name}
              </div>
              <div style={{ fontSize: 13, color: inkMuted, lineHeight: 1.55 }}>
                {r.role}
                <br />
                <K color={gold}>{r.org}</K>
              </div>
            </div>
          ))}
        </div>

        <div
          data-reveal
          style={{
            marginTop: 32,
            padding: compact ? '24px 32px' : '32px 40px',
            background: panel,
            display: 'flex',
            alignItems: 'center',
            gap: 24,
          }}
        >
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, color: gold, lineHeight: 0.6, fontWeight: 600 }}>“</span>
          <div style={{ flex: 1, fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 17, fontWeight: 500, color: inkSubtle }}>
            {C.references.quote}
          </div>
          <div style={{ fontSize: 10, letterSpacing: '0.2em', color: inkBare, fontWeight: 600 }}>
            ZONE RÉSERVÉE
          </div>
        </div>
      </section>

      {/* ────────── § V · CONTACT (D1 pattern, D2 charter) ────────── */}
      <section
        id="contact"
        style={{
          position: 'relative',
          padding: `${py}px ${px}px`,
          background: navy,
          color: '#fff',
          overflow: 'hidden',
        }}
      >
        {/* Map watermark left — D1 style */}
        <div
          style={{
            position: 'absolute',
            left: -100,
            top: -50,
            width: 700,
            opacity: 0.22,
            pointerEvents: 'none',
          }}
        >
          <WestAfricaMap variant="watermark" accent={gold} />
        </div>
        <FloatSquare color={gold} size={14} top={py - 20} right={px + 100} />
        <FloatSquare color={gold} size={10} bottom={80} right={px + 240} />

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80, alignItems: 'start' }}>
          {/* LEFT — header + context info (left-aligned to mirror form on right) */}
          <div data-reveal>
            <div
              style={{
                fontSize: 11,
                letterSpacing: '0.28em',
                color: gold,
                fontWeight: 600,
                marginBottom: 22,
              }}
            >
              § V · CONTACT
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: compact ? 42 : 54,
                margin: '0 0 32px 0',
                fontWeight: 500,
                lineHeight: 1.04,
                letterSpacing: '-0.014em',
                color: '#fff',
                textWrap: 'balance',
              }}
            >
              {C.contact.title}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,0.72)', maxWidth: 420, fontWeight: 400, margin: 0 }}>
              Réponse sous <K color={gold}>48 heures ouvrées</K>. Échanges confidentiels —
              NDA disponible sur simple demande.
            </p>

            <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['Disponibilité', 'Q3 2026 — agenda partiel'],
                ['Langues', 'Français · Anglais'],
                ['Base', 'Paris — déplacements terrain UEMOA'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 24, alignItems: 'baseline' }}>
                  <div style={{ width: 120, color: gold, letterSpacing: '0.16em', fontSize: 11, fontWeight: 600 }}>
                    {k.toUpperCase()}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.88)', fontSize: 14, fontWeight: 400 }}>
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form card on white */}
          <div data-reveal>
            <div
              style={{
                background: '#fff',
                color: navy,
                padding: compact ? '40px 44px' : '52px 56px',
                position: 'relative',
              }}
            >
              <FloatSquare color={gold} size={10} top={-6} right={-6} />

              <div style={{ marginBottom: 28 }}>
                <FormField label={C.contact.fields.name} navy={navy} inkSubtle={inkSubtle} />
              </div>
              <div style={{ marginBottom: 28 }}>
                <FormField label={C.contact.fields.email} type="email" navy={navy} inkSubtle={inkSubtle} />
              </div>
              <div style={{ marginBottom: 36 }}>
                <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.16em', color: inkSubtle, fontWeight: 600, marginBottom: 10 }}>
                  {C.contact.fields.subject.toUpperCase()}
                </label>
                <select
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: `1.5px solid ${hexToRgba(navy, 0.18)}`,
                    color: navy,
                    fontSize: 15,
                    padding: '10px 0',
                    outline: 'none',
                    fontFamily: 'inherit',
                    appearance: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {C.contact.subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: inkSubtle, maxWidth: 220, lineHeight: 1.4 }}>
                  Vos données sont traitées en confidentialité (RGPD).
                </span>
                <ADITBtn variant="goldFill" navy={navy} gold={gold} density={density} href="#">
                  {C.contact.submit}
                </ADITBtn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── FOOTER ────────── */}
      <footer style={{ background: navy, color: '#fff', padding: `${compact ? 40 : 60}px ${px}px 24px`, borderTop: `1px solid ${hexToRgba('#ffffff', 0.08)}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, alignItems: 'start', paddingBottom: 32, borderBottom: `1px solid ${hexToRgba('#ffffff', 0.1)}` }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600, color: '#fff', letterSpacing: '0.02em' }}>
              {C.footer.name}
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: gold, fontWeight: 600, marginTop: 8 }}>
              CONSEIL INDÉPENDANT — AFRIQUE DE L’OUEST
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 12, maxWidth: 340, lineHeight: 1.6 }}>
              Analyse de risque politique et monétaire. Paris, France.
            </div>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', color: gold, fontWeight: 600, marginBottom: 12 }}>EMAIL</div>
            <a href={`mailto:${C.footer.email}`} style={{ color: '#fff', textDecoration: 'none', fontSize: 13 }}>{C.footer.email}</a>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', color: gold, fontWeight: 600, marginBottom: 12 }}>LINKEDIN</div>
            <a href="#" style={{ color: '#fff', textDecoration: 'none', fontSize: 13 }}>{C.footer.linkedin}</a>
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.2em', color: gold, fontWeight: 600, marginBottom: 12 }}>LIEU</div>
            <div style={{ color: '#fff', fontSize: 13 }}>{C.footer.city}</div>
          </div>
        </div>
        <div style={{ paddingTop: 20, fontSize: 10, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>
          {C.footer.copyright}
        </div>
      </footer>
    </div>
  );
}

// PoleCard — 5-column row, editorial style. Icon + title + tags.
// Emphasized variant = filled gold. No numbering.
function PoleCard({ pole, navy, gold, ink, inkMuted, inkSubtle, bg }) {
  const emphasized = pole.emphasized;
  return (
    <div
      data-reveal
      style={{
        background: emphasized ? gold : '#fff',
        border: emphasized ? 'none' : `1px solid ${hexToRgba(navy, 0.12)}`,
        padding: '28px 18px 22px',
        minHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxShadow: emphasized ? `0 8px 24px ${hexToRgba(navy, 0.12)}` : 'none',
      }}
    >
      {/* Top accent — gold rule, no number */}
      <span
        aria-hidden
        style={{
          width: 28,
          height: 2,
          background: emphasized ? '#fff' : gold,
          display: 'block',
          marginBottom: 18,
          alignSelf: 'center',
        }}
      />

      {/* Icon — centered */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 80, marginBottom: 18 }}>
        <PolyIcon kind={pole.icon} color={emphasized ? '#fff' : navy} accent={emphasized ? '#fff' : gold} />
      </div>

      {/* Title */}
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 22,
          fontWeight: 600,
          color: emphasized ? '#fff' : navy,
          textAlign: 'center',
          lineHeight: 1.1,
          letterSpacing: '-0.005em',
          marginBottom: 14,
          minHeight: 50,
        }}
      >
        {pole.title}
      </div>

      {/* Divider */}
      <span
        style={{
          width: 24,
          height: 1,
          background: emphasized ? 'rgba(255,255,255,0.5)' : hexToRgba(navy, 0.25),
          alignSelf: 'center',
          marginBottom: 14,
        }}
      />

      {/* Terms list */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 6,
          flex: 1,
        }}
      >
        {pole.terms.slice(0, 5).map((t, i) => (
          <span
            key={i}
            style={{
              fontSize: 11.5,
              fontWeight: 500,
              color: emphasized ? 'rgba(255,255,255,0.92)' : inkMuted,
              textAlign: 'center',
              lineHeight: 1.3,
              letterSpacing: '0.01em',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

// Clean editorial line icons — single stroke, refined geometric forms.
// Replaces the previous polygonal mesh set.
function PolyIcon({ kind, color = '#0d2849', accent = '#d4b96b' }) {
  const stroke = color;
  const dot = accent;
  const sw = 1.4;
  const common = { width: 64, height: 64, viewBox: '0 0 64 64', fill: 'none' };

  if (kind === 'brain') {
    // Architecture monétaire — pièce avec "F" (franc)
    return (
      <svg {...common}>
        <circle cx="32" cy="32" r="22" stroke={stroke} strokeWidth={sw} />
        <circle cx="32" cy="32" r="16" stroke={stroke} strokeWidth="0.8" opacity="0.4" />
        <path
          d="M26 22 L26 42 M26 22 L36 22 M26 31 L34 31"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="square"
        />
        <circle cx="32" cy="10" r="1.6" fill={dot} />
      </svg>
    );
  }
  if (kind === 'handshake') {
    // Risque politique — bouclier + ligne d'horizon
    return (
      <svg {...common}>
        <path
          d="M32 10 L48 16 L48 32 C48 42, 40 50, 32 54 C24 50, 16 42, 16 32 L16 16 Z"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <path
          d="M22 30 L28 36 L42 22"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="10" r="1.6" fill={dot} />
      </svg>
    );
  }
  if (kind === 'compass') {
    // Pays côtiers — vagues / littoral
    return (
      <svg {...common}>
        <path
          d="M8 24 Q16 18, 24 24 T40 24 T56 24"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
        />
        <path
          d="M8 34 Q16 28, 24 34 T40 34 T56 34"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
        />
        <path
          d="M8 44 Q16 38, 24 44 T40 44 T56 44"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinecap="round"
          opacity="0.6"
        />
        <circle cx="48" cy="18" r="1.6" fill={dot} />
      </svg>
    );
  }
  if (kind === 'king') {
    // Conseil & formation — livre ouvert
    return (
      <svg {...common}>
        <path
          d="M8 18 L30 22 L30 50 L8 46 Z"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <path
          d="M56 18 L34 22 L34 50 L56 46 Z"
          stroke={stroke}
          strokeWidth={sw}
          strokeLinejoin="round"
        />
        <path d="M32 22 L32 50" stroke={stroke} strokeWidth="0.8" />
        <path d="M14 26 L24 27.5 M14 32 L24 33.5 M14 38 L24 39.5" stroke={stroke} strokeWidth="0.8" />
        <path d="M40 27.5 L50 26 M40 33.5 L50 32 M40 39.5 L50 38" stroke={stroke} strokeWidth="0.8" />
        <circle cx="32" cy="18" r="1.6" fill={dot} />
      </svg>
    );
  }
  // arrow — Briefings dirigeants : document plié
  return (
    <svg {...common}>
      <path
        d="M16 10 L42 10 L52 20 L52 54 L16 54 Z"
        stroke={stroke}
        strokeWidth={sw}
        strokeLinejoin="round"
      />
      <path d="M42 10 L42 20 L52 20" stroke={stroke} strokeWidth={sw} strokeLinejoin="round" />
      <path
        d="M22 30 L46 30 M22 38 L46 38 M22 46 L36 46"
        stroke={stroke}
        strokeWidth="1.1"
        strokeLinecap="square"
      />
      <circle cx="34" cy="10" r="1.6" fill={dot} />
    </svg>
  );
}

// ────── Hero composition: editorial African scene ──────
// Duotone illustration — acacia tree silhouette, Sahel horizon, sun arc,
// and a subtle West Africa map echoing the region. Replaces the abstract
// polygonal network in the hero.
function AfricaScene({ navy, gold, style = {} }) {
  const sandLight = hexToRgba(gold, 0.08);
  const ink = hexToRgba(navy, 0.92);
  return (
    <svg
      viewBox="0 0 720 720"
      style={{ width: '100%', display: 'block', ...style }}
      aria-label="Paysage éditorial — Afrique de l’Ouest"
    >
      {/* Frame */}
      <rect x="0" y="0" width="720" height="720" fill="#fafaf6" />
      <rect x="6" y="6" width="708" height="708" fill="none" stroke={hexToRgba(navy, 0.12)} strokeWidth="1" />

      {/* Sun disc — gold ring */}
      <circle cx="470" cy="240" r="150" fill={hexToRgba(gold, 0.14)} />
      <circle cx="470" cy="240" r="150" fill="none" stroke={gold} strokeWidth="1.2" />
      <circle cx="470" cy="240" r="110" fill="none" stroke={gold} strokeWidth="0.6" opacity="0.6" />
      <circle cx="470" cy="240" r="70" fill="none" stroke={gold} strokeWidth="0.6" opacity="0.4" />

      {/* West Africa map outline — subtle, behind the sun */}
      <g
        transform="translate(160, 110) scale(0.42)"
        fill="none"
        stroke={hexToRgba(navy, 0.22)}
        strokeWidth="1.4"
        strokeLinejoin="round"
      >
        {/* Simplified contour of the region */}
        <path d="M120,80 L380,80 L420,210 L520,210 L760,210 L820,300 L820,420 L860,540 L840,650 L740,680 L660,650 L600,650 L560,650 L500,660 L420,650 L340,640 L260,620 L240,580 L180,580 L170,510 L120,470 L120,430 L120,390 L120,360 L100,340 L120,280 Z" />
        {/* A couple internal dividers for country-ish feel */}
        <path d="M380,80 L420,210 L560,330 L640,460 L660,650" opacity="0.6" />
        <path d="M120,360 L240,380 L380,520 L470,540 L600,540" opacity="0.5" />
      </g>

      {/* Star above the sun */}
      <g transform="translate(380, 110)" stroke={gold} strokeWidth="1" fill="none">
        <line x1="-8" y1="0" x2="8" y2="0" />
        <line x1="0" y1="-8" x2="0" y2="8" />
        <line x1="-6" y1="-6" x2="6" y2="6" opacity="0.6" />
        <line x1="-6" y1="6" x2="6" y2="-6" opacity="0.6" />
      </g>

      {/* Horizon — Sahel line */}
      <line x1="40" y1="520" x2="680" y2="520" stroke={hexToRgba(navy, 0.55)} strokeWidth="1" />
      <line x1="40" y1="528" x2="680" y2="528" stroke={hexToRgba(navy, 0.18)} strokeWidth="0.6" />

      {/* Dune layers below horizon — duotone */}
      <path
        d="M40 520 Q200 540, 360 522 T680 520 L680 600 L40 600 Z"
        fill={sandLight}
      />
      <path
        d="M40 580 Q220 610, 400 588 T680 600 L680 660 L40 660 Z"
        fill={hexToRgba(gold, 0.15)}
      />
      <path
        d="M40 640 Q240 670, 440 648 T680 660 L680 700 L40 700 Z"
        fill={hexToRgba(navy, 0.06)}
      />

      {/* Acacia (umbrella tree) silhouette — left foreground */}
      <g fill={ink}>
        {/* Trunk */}
        <path d="M150 520 L154 460 L158 460 L162 520 Z" />
        {/* Canopy — umbrella shape, multiple ellipses to read as an acacia */}
        <ellipse cx="156" cy="452" rx="62" ry="14" />
        <ellipse cx="120" cy="448" rx="22" ry="8" />
        <ellipse cx="196" cy="448" rx="24" ry="8" />
        {/* Top branches */}
        <path d="M156 455 L156 442 M140 452 L132 438 M172 452 L182 438" stroke={ink} strokeWidth="1.2" fill="none" />
      </g>

      {/* Baobab silhouette — right foreground (smaller, distant) */}
      <g fill={hexToRgba(navy, 0.7)}>
        <path d="M576 520 L580 488 L600 488 L604 520 Z" />
        <ellipse cx="590" cy="478" rx="28" ry="14" />
        {/* Bare branches */}
        <path
          d="M590 472 L590 456 M580 470 L572 458 M600 470 L608 458 M584 466 L578 452 M596 466 L602 452"
          stroke={hexToRgba(navy, 0.7)}
          strokeWidth="1.1"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Birds — couple of V marks high right */}
      <g stroke={hexToRgba(navy, 0.55)} strokeWidth="1.1" fill="none" strokeLinecap="round">
        <path d="M520 130 L526 126 L532 130" />
        <path d="M548 116 L554 112 L560 116" />
        <path d="M540 150 L544 147 L548 150" opacity="0.7" />
      </g>

      {/* Caption tick */}
      <g fontFamily="'DM Sans', sans-serif" fontSize="9" fill={hexToRgba(navy, 0.6)} letterSpacing="1.5">
        <text x="40" y="690">SAHEL — HORIZON DE L'OUEST</text>
        <text x="680" y="690" textAnchor="end">AFRIQUE DE L'OUEST</text>
      </g>

      {/* Caption underline */}
      <line x1="40" y1="694" x2="220" y2="694" stroke={hexToRgba(navy, 0.4)} strokeWidth="0.5" />
    </svg>
  );
}

// Inline form field
function FormField({ label, type = 'text', navy, inkSubtle }) {
  return (
    <div>
      <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.16em', color: inkSubtle, fontWeight: 600, marginBottom: 10 }}>
        {label.toUpperCase()}
      </label>
      <input
        type={type}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: `1.5px solid ${hexToRgba(navy, 0.18)}`,
          color: navy,
          fontSize: 15,
          padding: '10px 0',
          outline: 'none',
          fontFamily: 'inherit',
        }}
      />
    </div>
  );
}

window.Direction2 = Direction2;
