// Direction 3 — "Institutional Brief"
// Centered ceremonial hero with map as centerpiece. Dossier / chancery vibe.
// Photo as full portrait column in expertise. Numbered like a published note.

function hexToRgba(hex, a) { const h = hex.replace('#',''); const n = h.length === 3 ? h.split('').map(c=>c+c).join('') : h; const r = parseInt(n.slice(0,2),16); const g = parseInt(n.slice(2,4),16); const b = parseInt(n.slice(4,6),16); return `rgba(${r},${g},${b},${a})`; }

function Direction3({ accent = '#c9a84c', density = 'airy', palette = { base: palette.base, elev: palette.elev, deep: palette.deep } }) {
  useReveal();
  const C = CONTENT;
  const compact = density === 'compact';
  const px = compact ? 64 : 96;
  const py = compact ? 80 : 120;

  return (
    <div
      style={{
        background: palette.base,
        color: '#e8e6df',
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      {/* Pre-header — dossier ribbon */}
      <div
        style={{
          background: palette.deep,
          borderBottom: `1px solid ${accent}30`,
          padding: `10px ${px}px`,
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: 11,
          letterSpacing: '0.18em',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        <span>DOSSIER N° 2026 / 01</span>
        <span>JONAS WEKO — CONSEIL INDÉPENDANT</span>
        <span style={{ color: accent }}>CONFIDENTIEL — USAGE DIRIGEANTS</span>
      </div>

      {/* Header bar */}
      <header
        style={{
          padding: `28px ${px}px`,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}
      >
        <div />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, letterSpacing: '0.04em', color: '#f5f3ec' }}>
            Jonas Weko
          </div>
          <div style={{ fontSize: 10, letterSpacing: '0.28em', color: accent, marginTop: 4 }}>
            CONSEIL — AFRIQUE DE L’OUEST
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 24, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
          <a href="#expertise" style={{ color: 'inherit', textDecoration: 'none' }}>Expertise</a>
          <a href="#formats" style={{ color: 'inherit', textDecoration: 'none' }}>Prestations</a>
          <a href="#contact" style={{ color: accent, textDecoration: 'none' }}>Contact</a>
        </div>
      </header>

      {/* ────────── HERO — centered ceremonial ────────── */}
      <section
        style={{
          padding: `${py}px ${px}px`,
          paddingTop: compact ? 90 : 130,
          paddingBottom: compact ? 80 : 110,
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {/* Big map centerpiece behind text */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -45%)',
            width: '90%',
            maxWidth: 1100,
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        >
          <WestAfricaMap variant="watermark" accent={accent} />
        </div>

        {/* Compass rose hint top right */}
        <svg
          aria-hidden
          width="80"
          height="80"
          viewBox="0 0 80 80"
          style={{ position: 'absolute', top: 40, right: 40, opacity: 0.5 }}
        >
          <circle cx="40" cy="40" r="32" fill="none" stroke={accent} strokeWidth="0.6" />
          <circle cx="40" cy="40" r="20" fill="none" stroke={accent} strokeWidth="0.4" />
          <path d="M40 12 L43 40 L40 68 L37 40 Z" fill={accent} opacity="0.5" />
          <path d="M12 40 L40 43 L68 40 L40 37 Z" fill={accent} opacity="0.25" />
          <text x="40" y="9" textAnchor="middle" fontSize="9" fill={accent} fontFamily="'Cormorant Garamond', serif" fontStyle="italic">N</text>
        </svg>

        {/* Sigil */}
        <svg
          aria-hidden
          width="60"
          height="60"
          viewBox="0 0 60 60"
          style={{ position: 'absolute', top: 40, left: 40, opacity: 0.5 }}
        >
          <circle cx="30" cy="30" r="28" fill="none" stroke={accent} strokeWidth="0.6" />
          <text x="30" y="34" textAnchor="middle" fontSize="18" fontFamily="'Cormorant Garamond', serif" fill={accent} fontStyle="italic">JW</text>
        </svg>

        <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }}>
          <div
            data-reveal
            style={{
              fontSize: 11,
              letterSpacing: '0.34em',
              color: accent,
              marginBottom: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 18,
            }}
          >
            <span style={{ width: 50, height: 1, background: accent }} />
            ANALYSE DE RISQUE INDÉPENDANTE
            <span style={{ width: 50, height: 1, background: accent }} />
          </div>

          <h1
            data-reveal
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: compact ? 60 : 80,
              lineHeight: 1.04,
              letterSpacing: '-0.02em',
              fontWeight: 400,
              margin: 0,
              color: '#f5f3ec',
              textWrap: 'balance',
            }}
          >
            Comprendre les systèmes
            <br />
            <em style={{ fontStyle: 'italic', color: accent }}>monétaires</em> et <em style={{ fontStyle: 'italic', color: accent }}>politiques</em>
            <br />
            d’Afrique de l’Ouest
            <span style={{ color: 'rgba(255,255,255,0.45)', fontStyle: 'italic', fontSize: '0.55em', display: 'block', marginTop: 16 }}>
              — pour décider.
            </span>
          </h1>

          <p
            data-reveal
            style={{
              fontSize: 18,
              lineHeight: 1.6,
              color: 'rgba(232,230,223,0.7)',
              maxWidth: 700,
              margin: '48px auto 56px',
              fontWeight: 300,
              textWrap: 'balance',
            }}
          >
            {C.hero.sub}
          </p>

          <div data-reveal style={{ display: 'flex', gap: 18, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Btn variant="primary" accent={accent} href={C.hero.ctaPrimary.href} density={density}>
              {C.hero.ctaPrimary.label}
            </Btn>
            <Btn variant="ghost" accent={accent} href={C.hero.ctaSecondary.href} density={density}>
              {C.hero.ctaSecondary.label}
            </Btn>
          </div>
        </div>

        {/* Bottom seal */}
        <div
          data-reveal
          style={{
            marginTop: compact ? 80 : 130,
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            maxWidth: 1000,
            margin: `${compact ? 80 : 130}px auto 0`,
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)' }}>
            PhD ASSAS · LGDJ 2025
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontStyle: 'italic', color: accent }}>
            UEMOA · AES · CFA · Eco
          </div>
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: 'rgba(255,255,255,0.45)' }}>
            FMI · BCEAO · UEMOA
          </div>
        </div>
      </section>

      {/* ────────── PROBLÈME ────────── */}
      <section style={{ padding: `${py}px ${px}px`, maxWidth: 1280, margin: '0 auto' }}>
        <div data-reveal style={{ textAlign: 'center', marginBottom: compact ? 60 : 88 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.28em', color: accent, marginBottom: 18 }}>
            § I · CONSTAT
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: compact ? 40 : 52,
              lineHeight: 1.1,
              letterSpacing: '-0.014em',
              margin: 0,
              fontWeight: 400,
              color: '#f5f3ec',
              maxWidth: 900,
              margin: '0 auto',
              textWrap: 'balance',
            }}
          >
            {C.problem.title}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: compact ? 32 : 48 }}>
          {C.problem.blocks.map((b, i) => (
            <div key={i} data-reveal style={{ textAlign: 'center', position: 'relative' }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  border: `1px solid ${accent}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 28px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  color: accent,
                  fontStyle: 'italic',
                }}
              >
                {b.kicker}
              </div>
              <p
                style={{
                  fontSize: compact ? 15 : 16.5,
                  lineHeight: 1.6,
                  color: '#d6d4cb',
                  margin: 0,
                  fontWeight: 300,
                  textWrap: 'pretty',
                }}
              >
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ────────── EXPERTISE — dossier layout ────────── */}
      <section
        id="expertise"
        style={{
          padding: `${py}px ${px}px`,
          background: 'rgba(255,255,255,0.018)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div data-reveal style={{ textAlign: 'center', marginBottom: compact ? 56 : 80 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.28em', color: accent, marginBottom: 18 }}>
              § II · EXPERTISE
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: compact ? 40 : 52,
                lineHeight: 1.08,
                letterSpacing: '-0.014em',
                margin: '0 auto',
                fontWeight: 400,
                color: '#f5f3ec',
                maxWidth: 1000,
                textWrap: 'balance',
              }}
            >
              {C.expertise.title}
            </h2>
          </div>

          {/* Two columns — bio left (with portrait), zones right */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: compact ? 60 : 80 }}>
            {/* LEFT — Bio with prominent portrait */}
            <div data-reveal>
              <div style={{ fontSize: 10, letterSpacing: '0.28em', color: accent, marginBottom: 16 }}>
                A · QUI JE SUIS
              </div>

              {/* Portrait — large, framed */}
              <div
                style={{
                  position: 'relative',
                  marginBottom: 32,
                }}
              >
                <div
                  style={{
                    aspectRatio: '4 / 5',
                    background: `url(assets/jonas.jpeg) center/cover`,
                    filter: 'grayscale(0.25) contrast(1.05) brightness(0.95)',
                    borderRadius: 2,
                  }}
                />
                {/* Frame corners */}
                <div style={{ position: 'absolute', top: -8, left: -8, width: 24, height: 24, borderTop: `1px solid ${accent}`, borderLeft: `1px solid ${accent}` }} />
                <div style={{ position: 'absolute', top: -8, right: -8, width: 24, height: 24, borderTop: `1px solid ${accent}`, borderRight: `1px solid ${accent}` }} />
                <div style={{ position: 'absolute', bottom: -8, left: -8, width: 24, height: 24, borderBottom: `1px solid ${accent}`, borderLeft: `1px solid ${accent}` }} />
                <div style={{ position: 'absolute', bottom: -8, right: -8, width: 24, height: 24, borderBottom: `1px solid ${accent}`, borderRight: `1px solid ${accent}` }} />

                {/* Caption */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 16,
                    left: 16,
                    right: 16,
                    padding: '14px 18px',
                    background: hexToRgba(palette.base, 0.85),
                    backdropFilter: 'blur(6px)',
                    borderLeft: `2px solid ${accent}`,
                  }}
                >
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#f5f3ec', fontWeight: 400 }}>
                    {C.expertise.name}
                  </div>
                  <div style={{ fontSize: 11, letterSpacing: '0.16em', color: accent, marginTop: 4 }}>
                    DOCTEUR — SCIENCE POLITIQUE
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                {C.expertise.creds.map((c, i) => (
                  <div
                    key={i}
                    style={{
                      fontSize: 13.5,
                      color: 'rgba(232,230,223,0.78)',
                      lineHeight: 1.55,
                      paddingLeft: 18,
                      position: 'relative',
                    }}
                  >
                    <span style={{ position: 'absolute', left: 0, top: 9, width: 8, height: 1, background: accent }} />
                    {c}
                  </div>
                ))}
              </div>

              {/* Thesis quote */}
              <div
                style={{
                  padding: compact ? '24px 28px' : '32px 36px',
                  background: 'rgba(0,0,0,0.25)',
                  borderTop: `1px solid ${accent}`,
                  borderBottom: `1px solid ${accent}`,
                  marginBottom: 28,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, letterSpacing: '0.22em', color: accent, marginBottom: 14 }}>
                  <span>THÈSE — 2025</span>
                  <span>UNIVERSITÉ PARIS PANTHÉON-ASSAS</span>
                </div>
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: compact ? 18 : 20.5,
                    lineHeight: 1.4,
                    fontStyle: 'italic',
                    margin: 0,
                    color: '#f5f3ec',
                    fontWeight: 400,
                    textWrap: 'pretty',
                  }}
                >
                  « {C.expertise.thesisTitle} »
                </p>
              </div>

              {/* Book + stays — two columns */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: '0.22em', color: accent, marginBottom: 10 }}>
                    OUVRAGE PUBLIÉ
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#f5f3ec' }}>
                    <a href={C.expertise.bookHref} style={{ color: '#f5f3ec', textDecoration: 'none', borderBottom: `1px solid ${accent}80` }}>
                      LGDJ ↗
                    </a>
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginTop: 6 }}>
                    Collection Bibliothèque constitutionnelle et de science politique.
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, letterSpacing: '0.22em', color: accent, marginBottom: 10 }}>
                    SÉJOURS DE RECHERCHE
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {C.expertise.stays.map((s) => (
                      <div key={s.org} style={{ fontSize: 13, color: '#e8e6df' }}>
                        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: accent, marginRight: 8 }}>
                          {s.org}
                        </span>
                        <span style={{ color: 'rgba(255,255,255,0.55)' }}>{s.city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — Zones */}
            <div data-reveal>
              <div style={{ fontSize: 10, letterSpacing: '0.28em', color: accent, marginBottom: 16 }}>
                B · ZONES DE COUVERTURE
              </div>

              {/* Stylized map with highlight */}
              <div
                style={{
                  border: '1px solid rgba(255,255,255,0.1)',
                  padding: 28,
                  background: 'rgba(0,0,0,0.25)',
                  marginBottom: 28,
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#f5f3ec', fontStyle: 'italic' }}>
                    Région d’étude
                  </div>
                  <div style={{ fontSize: 10, letterSpacing: '0.18em', color: accent }}>FIG. 02</div>
                </div>
                <WestAfricaMap
                  variant="outline"
                  accent={accent}
                  showLabels={true}
                  highlight={[...WA_ZONES.UEMOA, ...WA_ZONES.AES]}
                />
              </div>

              {/* Zone tags */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[
                  { title: 'Architectures monétaires', kind: 'monetary' },
                  { title: 'Risque politique', kind: 'political' },
                  { title: 'Pays sous couverture', kind: 'country' },
                ].map((cat) => {
                  const items = C.expertise.zones.filter((z) => z.kind === cat.kind);
                  return (
                    <div key={cat.title}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                        <span style={{ width: 14, height: 1, background: accent }} />
                        <span style={{ fontSize: 11, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.7)' }}>
                          {cat.title.toUpperCase()}
                        </span>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                        {items.map((z, i) => (
                          <ZoneTag key={i} {...z} accent={accent} density={density} />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Badges */}
              <div style={{ marginTop: 40, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.22em', color: accent, marginBottom: 16 }}>
                  AFFILIATIONS — INSTITUTIONS
                </div>
                <div style={{ display: 'flex', gap: 28, alignItems: 'center', flexWrap: 'wrap' }}>
                  {C.expertise.badges.map((b) => (
                    <span
                      key={b}
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 24,
                        fontStyle: 'italic',
                        color: '#e8e6df',
                        letterSpacing: '0.02em',
                        position: 'relative',
                      }}
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── FORMATS ────────── */}
      <section id="formats" style={{ padding: `${py}px ${px}px`, maxWidth: 1280, margin: '0 auto' }}>
        <div data-reveal style={{ textAlign: 'center', marginBottom: compact ? 56 : 80 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.28em', color: accent, marginBottom: 18 }}>
            § III · PRESTATIONS
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 40 : 52, margin: 0, fontWeight: 400, letterSpacing: '-0.014em', color: '#f5f3ec' }}>
            {C.formats.title}
          </h2>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', marginTop: 18, maxWidth: 600, margin: '18px auto 0', fontWeight: 300 }}>
            Quatre modalités d’intervention, ajustables au délai et au périmètre.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: compact ? 20 : 28 }}>
          {C.formats.cards.map((card, i) => (
            <div
              key={card.id}
              data-reveal
              style={{
                background: palette.elev,
                border: '1px solid rgba(255,255,255,0.08)',
                padding: compact ? '32px 36px' : '44px 48px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                gap: 18,
              }}
            >
              {/* Corner ornament */}
              <div style={{ position: 'absolute', top: -1, right: -1, padding: '6px 14px', background: accent, color: palette.base, fontSize: 10, letterSpacing: '0.18em', fontWeight: 600 }}>
                FORMAT {String(i + 1).padStart(2, '0')}
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: 18, paddingRight: 100 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 56, color: accent, fontStyle: 'italic', lineHeight: 0.8 }}>
                  {String.fromCharCode(8544 + i)}
                </span>
                <div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: '#f5f3ec', fontWeight: 400, lineHeight: 1.15 }}>
                    {card.tag.split(' ').map((w, j) => (
                      <span key={j}>
                        {w}
                        {j === 0 && card.tag.split(' ').length > 1 ? ' ' : ''}
                      </span>
                    ))}
                  </div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 4 }}>{card.sub}</div>
                </div>
              </div>

              <p style={{ fontSize: compact ? 14.5 : 15.5, color: '#d6d4cb', lineHeight: 1.6, margin: 0, fontWeight: 300, flex: 1 }}>
                {card.body}
              </p>

              <div
                style={{
                  marginTop: 16,
                  paddingTop: 20,
                  borderTop: '1px dashed rgba(255,255,255,0.12)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontSize: 10, letterSpacing: '0.18em', color: accent, marginBottom: 2 }}>PRIX</div>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: '#f5f3ec', fontStyle: 'italic' }}>
                    {card.price}
                  </div>
                </div>
                <Btn variant="underline" accent={accent} href="#contact" density={density}>
                  Me contacter
                </Btn>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ────────── LEAD MAGNET ────────── */}
      <section
        id="lead-magnet"
        style={{
          padding: `${py}px ${px}px`,
          background: palette.deep,
          borderTop: `1px solid ${accent}40`,
          borderBottom: `1px solid ${accent}40`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 64, alignItems: 'stretch' }}>
          {/* Note preview — mock cover */}
          <div data-reveal style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: -12,
                left: -12,
                width: '100%',
                height: '100%',
                background: 'rgba(201,168,76,0.08)',
                border: `1px solid ${accent}40`,
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'relative',
                background: palette.base,
                border: `1px solid ${accent}80`,
                padding: compact ? '40px 36px' : '56px 48px',
                aspectRatio: '3 / 4',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 460,
              }}
            >
              <div>
                <div style={{ fontSize: 10, letterSpacing: '0.28em', color: accent, marginBottom: 16 }}>
                  NOTE DE POSITIONNEMENT
                </div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 32 }}>
                  Hiver 2026 — Vol. 01
                </div>
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: compact ? 30 : 36,
                    lineHeight: 1.08,
                    margin: 0,
                    fontWeight: 400,
                    color: '#f5f3ec',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {C.leadMagnet.headline}
                </h3>
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${accent}40`, display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.1em' }}>
                  <span>JONAS WEKO</span>
                  <span>14 PP. · PDF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form + description */}
          <div data-reveal style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.28em', color: accent, marginBottom: 14 }}>
                TÉLÉCHARGEMENT GRATUIT
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 32 : 38, lineHeight: 1.1, margin: 0, fontWeight: 400, color: '#f5f3ec', letterSpacing: '-0.012em' }}>
                {C.leadMagnet.title}
              </h2>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(232,230,223,0.7)', margin: 0, fontWeight: 300 }}>
              {C.leadMagnet.description}
            </p>

            <div style={{ paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.55)', marginBottom: 10 }}>
                {C.leadMagnet.fieldLabel.toUpperCase()}
              </label>
              <input
                type="email"
                placeholder={C.leadMagnet.placeholder}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: `1px solid ${accent}`,
                  color: '#f5f3ec',
                  fontSize: 16,
                  padding: '12px 0',
                  outline: 'none',
                  fontFamily: 'inherit',
                  marginBottom: 24,
                }}
              />
              <Btn variant="primary" accent={accent} href="#" density={density}>
                {C.leadMagnet.submit}
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── RÉFÉRENCES ────────── */}
      <section style={{ padding: `${py}px ${px}px`, maxWidth: 1280, margin: '0 auto' }}>
        <div data-reveal style={{ textAlign: 'center', marginBottom: compact ? 56 : 80 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.28em', color: accent, marginBottom: 18 }}>
            § IV · RÉFÉRENCES
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 38 : 48, margin: 0, fontWeight: 400, letterSpacing: '-0.012em', color: '#f5f3ec' }}>
            {C.references.title}
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 0,
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {C.references.items.map((r, i) => (
            <div
              key={i}
              data-reveal
              style={{
                padding: compact ? '36px 32px' : '48px 40px',
                borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                textAlign: 'center',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: `1px solid ${accent}80`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontSize: 16,
                  color: accent,
                }}
              >
                {r.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#f5f3ec', marginBottom: 8, fontWeight: 400 }}>
                {r.name}
              </div>
              <div style={{ fontSize: 12, color: 'rgba(232,230,223,0.65)', lineHeight: 1.6 }}>
                {r.role}
                <br />
                <span style={{ color: accent, letterSpacing: '0.04em' }}>{r.org}</span>
              </div>
            </div>
          ))}
        </div>

        <div
          data-reveal
          style={{
            marginTop: 32,
            padding: compact ? '32px 40px' : '44px 56px',
            textAlign: 'center',
            border: '1px dashed rgba(255,255,255,0.12)',
            position: 'relative',
          }}
        >
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, color: accent, opacity: 0.25, position: 'absolute', top: 12, left: 32, lineHeight: 0.8 }}>
            “
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, color: accent, opacity: 0.25, position: 'absolute', bottom: -24, right: 32, lineHeight: 0.8 }}>
            ”
          </span>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: compact ? 18 : 22, color: 'rgba(255,255,255,0.6)', marginBottom: 12, fontWeight: 400 }}>
            {C.references.quote}
          </div>
          <div style={{ fontSize: 10, letterSpacing: '0.22em', color: 'rgba(255,255,255,0.4)' }}>
            ESPACE RÉSERVÉ — À INTÉGRER APRÈS VALIDATION CLIENT
          </div>
        </div>
      </section>

      {/* ────────── CONTACT ────────── */}
      <section
        id="contact"
        style={{
          padding: `${py}px ${px}px`,
          background: 'rgba(255,255,255,0.018)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            right: -120,
            top: '50%',
            transform: 'translateY(-50%)',
            width: 700,
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        >
          <WestAfricaMap variant="watermark" accent={accent} />
        </div>

        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto' }}>
          <div data-reveal style={{ textAlign: 'center', marginBottom: compact ? 50 : 72 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.28em', color: accent, marginBottom: 18 }}>
              § V · CONTACT
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 40 : 50, lineHeight: 1.06, margin: 0, fontWeight: 400, letterSpacing: '-0.014em', color: '#f5f3ec', maxWidth: 800, marginInline: 'auto', textWrap: 'balance' }}>
              {C.contact.title}
            </h2>
          </div>

          <div data-reveal style={{ background: palette.elev, border: '1px solid rgba(255,255,255,0.1)', padding: compact ? '40px 44px' : '56px 64px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, marginBottom: 32 }}>
              <div>
                <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.55)', marginBottom: 10 }}>
                  {C.contact.fields.name.toUpperCase()}
                </label>
                <input
                  type="text"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.18)',
                    color: '#f5f3ec',
                    fontSize: 15,
                    padding: '12px 0',
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.55)', marginBottom: 10 }}>
                  {C.contact.fields.email.toUpperCase()}
                </label>
                <input
                  type="email"
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.18)',
                    color: '#f5f3ec',
                    fontSize: 15,
                    padding: '12px 0',
                    outline: 'none',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: 36 }}>
              <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.55)', marginBottom: 10 }}>
                {C.contact.fields.subject.toUpperCase()}
              </label>
              <select
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.18)',
                  color: '#f5f3ec',
                  fontSize: 15,
                  padding: '12px 0',
                  outline: 'none',
                  fontFamily: 'inherit',
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              >
                {C.contact.subjects.map((s) => (
                  <option key={s} style={{ background: palette.elev }}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', maxWidth: 380, lineHeight: 1.5 }}>
                Réponse sous 48 h ouvrées. Échanges confidentiels — NDA disponible.
              </div>
              <Btn variant="primary" accent={accent} href="#" density={density}>
                {C.contact.submit}
              </Btn>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── FOOTER ────────── */}
      <footer
        style={{
          padding: `${compact ? 50 : 70}px ${px}px ${compact ? 30 : 40}px`,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, color: '#f5f3ec', marginBottom: 12, letterSpacing: '0.02em' }}>
          {C.footer.name}
        </div>
        <div style={{ fontSize: 11, letterSpacing: '0.28em', color: accent, marginBottom: 32 }}>
          CONSEIL INDÉPENDANT — AFRIQUE DE L’OUEST
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, fontSize: 13, color: 'rgba(255,255,255,0.65)', flexWrap: 'wrap', marginBottom: 36 }}>
          <a href={`mailto:${C.footer.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
            {C.footer.email}
          </a>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>
            {C.footer.linkedin}
          </a>
          <span style={{ color: 'rgba(255,255,255,0.2)' }}>·</span>
          <span>{C.footer.city}</span>
        </div>
        <div style={{ fontSize: 10, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.3)', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          {C.footer.copyright}
        </div>
      </footer>
    </div>
  );
}

window.Direction3 = Direction3;
