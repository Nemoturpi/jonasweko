// Direction 1 — "Editorial Watermark"
// Modern consultancy, typography-led. Asymmetric. Map as faint watermark.
// Big number kickers. Bio card with portrait. Tag cloud for zones.

function hexToRgba(hex, a) { const h = hex.replace('#',''); const n = h.length === 3 ? h.split('').map(c=>c+c).join('') : h; const r = parseInt(n.slice(0,2),16); const g = parseInt(n.slice(2,4),16); const b = parseInt(n.slice(4,6),16); return `rgba(${r},${g},${b},${a})`; }

function Direction1({ accent = '#c9a84c', density = 'airy', palette = { base: palette.base, elev: palette.elev, deep: palette.deep } }) {
  useReveal();
  const C = CONTENT;
  const compact = density === 'compact';
  const pad = compact ? '70px 64px' : '110px 80px';
  const gap = compact ? 40 : 64;

  return (
    <div
      style={{
        background: palette.base,
        color: '#e8e6df',
        fontFamily: "'DM Sans', sans-serif",
        position: 'relative',
        minHeight: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Top utility bar */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: compact ? '20px 64px' : '28px 80px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 22,
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            Jonas Weko
          </span>
          <span style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.18)' }} />
          <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.04em' }}>
            Analyse de risque · Afrique de l’Ouest
          </span>
        </div>
        <div style={{ display: 'flex', gap: 28, fontSize: 13, color: 'rgba(255,255,255,0.7)' }}>
          <a href="#expertise" style={{ color: 'inherit', textDecoration: 'none' }}>Expertise</a>
          <a href="#formats" style={{ color: 'inherit', textDecoration: 'none' }}>Prestations</a>
          <a href="#lead-magnet" style={{ color: 'inherit', textDecoration: 'none' }}>Note d’ouverture</a>
          <a href="#contact" style={{ color: accent, textDecoration: 'none' }}>Contact ↗</a>
        </div>
      </header>

      {/* ────────── HERO ────────── */}
      <section style={{ position: 'relative', padding: pad, paddingTop: compact ? 80 : 120, paddingBottom: compact ? 100 : 160 }}>
        {/* Watermark map — corner, very faint */}
        <div
          style={{
            position: 'absolute',
            right: -120,
            bottom: -80,
            width: 820,
            opacity: 0.55,
            pointerEvents: 'none',
          }}
        >
          <WestAfricaMap variant="watermark" accent={accent} />
        </div>

        {/* Grain overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 100%, rgba(201,168,76,0.05), transparent 50%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: 1100 }}>
          <div data-reveal style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36 }}>
            <span style={{ width: 36, height: 1, background: accent }} />
            <span style={{ fontSize: 12, letterSpacing: '0.22em', color: accent, textTransform: 'uppercase' }}>
              Conseil indépendant — Paris
            </span>
          </div>

          <h1
            data-reveal
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: compact ? 64 : 84,
              lineHeight: 1.02,
              letterSpacing: '-0.018em',
              fontWeight: 400,
              margin: 0,
              maxWidth: 1000,
              color: '#f5f3ec',
              textWrap: 'balance',
            }}
          >
            Comprendre les systèmes <em style={{ fontStyle: 'italic', color: accent }}>monétaires</em>
            <br />
            et <em style={{ fontStyle: 'italic', color: accent }}>politiques</em> d’Afrique de l’Ouest
            <span style={{ color: 'rgba(255,255,255,0.4)' }}> — pour décider.</span>
          </h1>

          <p
            data-reveal
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: 'rgba(232,230,223,0.72)',
              maxWidth: 680,
              marginTop: 40,
              marginBottom: 56,
              fontWeight: 300,
            }}
          >
            {C.hero.sub}
          </p>

          <div data-reveal style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Btn variant="primary" accent={accent} href={C.hero.ctaPrimary.href} density={density}>
              {C.hero.ctaPrimary.label}
            </Btn>
            <Btn variant="ghost" accent={accent} href={C.hero.ctaSecondary.href} density={density}>
              {C.hero.ctaSecondary.label}
            </Btn>
          </div>

          {/* Hero meta row */}
          <div
            data-reveal
            style={{
              marginTop: compact ? 80 : 120,
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 32,
              maxWidth: 900,
              paddingTop: 32,
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            {[
              ['PhD', 'Paris Panthéon-Assas'],
              ['LGDJ', 'Ouvrage publié, 2025'],
              ['FMI · BCEAO · UEMOA', 'Séjours de recherche'],
              ['8 pays', 'Couverture régionale'],
            ].map(([k, v], i) => (
              <div key={i}>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', color: accent, marginBottom: 8, textTransform: 'uppercase' }}>
                  {k}
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── PROBLÈME ────────── */}
      <section style={{ padding: pad, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: 80 }} data-reveal>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', color: accent, marginBottom: 16 }}>§ 01 — CONSTAT</div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: compact ? 36 : 44,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                margin: 0,
                fontWeight: 400,
                color: '#f5f3ec',
              }}
            >
              {C.problem.title}
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: compact ? 28 : 44 }}>
            {C.problem.blocks.map((b, i) => (
              <div
                key={i}
                data-reveal
                style={{
                  display: 'grid',
                  gridTemplateColumns: '60px 1fr',
                  gap: 28,
                  paddingBottom: compact ? 28 : 44,
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 32,
                    fontStyle: 'italic',
                    color: accent,
                    fontWeight: 400,
                  }}
                >
                  {b.kicker}
                </div>
                <p
                  style={{
                    fontSize: compact ? 17 : 19,
                    lineHeight: 1.5,
                    color: '#d9d7d0',
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
        </div>
      </section>

      {/* ────────── EXPERTISE ────────── */}
      <section id="expertise" style={{ padding: pad, background: 'rgba(255,255,255,0.015)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div data-reveal style={{ marginBottom: compact ? 60 : 90, maxWidth: 800 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', color: accent, marginBottom: 16 }}>§ 02 — EXPERTISE</div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: compact ? 40 : 52,
              lineHeight: 1.08,
              letterSpacing: '-0.012em',
              margin: 0,
              fontWeight: 400,
              color: '#f5f3ec',
            }}
          >
            {C.expertise.title}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: gap + 20 }}>
          {/* Left: Bio card with portrait */}
          <div data-reveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '180px 1fr',
                gap: 32,
                alignItems: 'start',
                marginBottom: 36,
              }}
            >
              <div
                style={{
                  width: 180,
                  height: 220,
                  background: `url(assets/jonas.jpeg) center/cover`,
                  filter: 'grayscale(0.4) contrast(1.05) brightness(0.95)',
                  borderRadius: 2,
                  boxShadow: `inset 0 0 0 1px rgba(201,168,76,0.4), 6px 6px 0 0 rgba(201,168,76,0.15)`,
                }}
              />
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', color: accent, marginBottom: 8 }}>
                  CONSULTANT — DOCTEUR
                </div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 34,
                    margin: 0,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: '#f5f3ec',
                  }}
                >
                  {C.expertise.name}
                </h3>
                <div style={{ marginTop: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {C.expertise.creds.map((c, i) => (
                    <div key={i} style={{ fontSize: 13.5, color: 'rgba(232,230,223,0.7)', lineHeight: 1.5 }}>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                padding: compact ? '20px 24px' : '28px 32px',
                borderLeft: `2px solid ${accent}`,
                background: 'rgba(201,168,76,0.04)',
                marginBottom: 24,
              }}
            >
              <div style={{ fontSize: 11, letterSpacing: '0.18em', color: accent, marginBottom: 10 }}>
                {C.expertise.thesisLabel.toUpperCase()}
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: compact ? 17 : 19,
                  lineHeight: 1.4,
                  fontStyle: 'italic',
                  margin: 0,
                  color: '#e8e6df',
                  fontWeight: 400,
                }}
              >
                « {C.expertise.thesisTitle} »
              </p>
            </div>

            <div style={{ display: 'flex', gap: 32, fontSize: 13, alignItems: 'baseline' }}>
              <div>
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{C.expertise.bookLabel} · </span>
                <a href={C.expertise.bookHref} style={{ color: accent, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                  {C.expertise.bookPublisher}
                </a>
              </div>
              <div style={{ width: 1, height: 14, background: 'rgba(255,255,255,0.15)' }} />
              <div style={{ color: 'rgba(255,255,255,0.55)' }}>
                Séjours : {C.expertise.stays.map((s) => `${s.org} (${s.city})`).join(' · ')}
              </div>
            </div>
          </div>

          {/* Right: zones cloud */}
          <div data-reveal>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', color: accent, marginBottom: 24 }}>
              {C.expertise.zonesTitle.toUpperCase()}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 40 }}>
              {C.expertise.zones.map((z, i) => (
                <ZoneTag key={i} {...z} accent={accent} density={density} />
              ))}
            </div>

            {/* Mini map indicator */}
            <div
              style={{
                padding: '24px 28px',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 2,
                background: 'rgba(0,0,0,0.2)',
                display: 'grid',
                gridTemplateColumns: '1fr 200px',
                gap: 24,
                alignItems: 'center',
              }}
            >
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', color: accent, marginBottom: 8 }}>
                  ZONE PRINCIPALE
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#f5f3ec', marginBottom: 6 }}>
                  UEMOA + AES
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  Huit pays — environ 140 millions d’habitants — un compte d’opérations en mutation.
                </div>
              </div>
              <WestAfricaMap
                variant="outline"
                accent={accent}
                highlight={[...WA_ZONES.UEMOA, ...WA_ZONES.AES]}
                showLabels={false}
              />
            </div>
          </div>
        </div>

        {/* Badges row */}
        <div
          data-reveal
          style={{
            marginTop: compact ? 56 : 80,
            paddingTop: 32,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 20,
          }}
        >
          <div style={{ fontSize: 11, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.4)' }}>
            INSTITUTIONS — AFFILIATIONS
          </div>
          <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
            {C.expertise.badges.map((b) => (
              <span
                key={b}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  fontStyle: 'italic',
                  color: 'rgba(255,255,255,0.55)',
                  letterSpacing: '0.02em',
                }}
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ────────── FORMATS ────────── */}
      <section id="formats" style={{ padding: pad, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div data-reveal style={{ marginBottom: compact ? 50 : 80, display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 30 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', color: accent, marginBottom: 16 }}>§ 03 — PRESTATIONS</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 40 : 52, margin: 0, fontWeight: 400, letterSpacing: '-0.012em', color: '#f5f3ec' }}>
              {C.formats.title}
            </h2>
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', maxWidth: 320, lineHeight: 1.5 }}>
            Quatre modalités d’engagement. Chaque format se décline en français ou en anglais.
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {C.formats.cards.map((card, i) => (
            <div
              key={card.id}
              data-reveal
              className="jw-format-row"
              style={{
                display: 'grid',
                gridTemplateColumns: '60px 1.2fr 2fr 1fr 160px',
                gap: 32,
                padding: compact ? '24px 0' : '36px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                alignItems: 'center',
              }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontStyle: 'italic', color: accent }}>
                0{i + 1}
              </div>
              <div>
                <div style={{ fontSize: 13, letterSpacing: '0.16em', color: '#f5f3ec', fontWeight: 600, marginBottom: 6 }}>
                  {card.tag}
                </div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{card.sub}</div>
              </div>
              <div style={{ fontSize: compact ? 14 : 15, color: '#d6d4cb', lineHeight: 1.5, fontWeight: 300 }}>
                {card.body}
              </div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, color: '#f5f3ec', fontStyle: 'italic' }}>
                {card.price}
              </div>
              <div>
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
          padding: pad,
          background: `linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.02))`,
          borderTop: `1px solid ${accent}40`,
          borderBottom: `1px solid ${accent}40`,
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div data-reveal>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', color: accent, marginBottom: 16 }}>
              {C.leadMagnet.eyebrow.toUpperCase()}
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 40 : 52, fontWeight: 400, lineHeight: 1.08, margin: '0 0 28px 0', color: '#f5f3ec', letterSpacing: '-0.012em' }}>
              {C.leadMagnet.headline}
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(232,230,223,0.75)', margin: 0, fontWeight: 300, maxWidth: 520 }}>
              {C.leadMagnet.description}
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 16, fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
              <span>· 14 pages</span>
              <span>· PDF français</span>
              <span>· Mise à jour trimestrielle</span>
            </div>
          </div>
          <div data-reveal>
            <div
              style={{
                background: palette.elev,
                border: `1px solid ${accent}50`,
                padding: compact ? '32px 36px' : '44px 48px',
                borderRadius: 2,
              }}
            >
              <div style={{ fontSize: 11, letterSpacing: '0.18em', color: accent, marginBottom: 20 }}>
                FORMULAIRE — INSCRIPTION
              </div>
              <label style={{ display: 'block', fontSize: 12, color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>
                {C.leadMagnet.fieldLabel}
              </label>
              <input
                type="email"
                placeholder={C.leadMagnet.placeholder}
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.2)',
                  color: '#f5f3ec',
                  fontSize: 16,
                  padding: '12px 0',
                  outline: 'none',
                  fontFamily: 'inherit',
                  marginBottom: 28,
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>
                  Aucun spam · Désinscription en un clic
                </span>
                <Btn variant="primary" accent={accent} href="#" density={density}>
                  {C.leadMagnet.submit}
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────── RÉFÉRENCES ────────── */}
      <section style={{ padding: pad, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div data-reveal style={{ marginBottom: 60 }}>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', color: accent, marginBottom: 16 }}>§ 04 — RÉFÉRENCES</div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 36 : 44, margin: 0, fontWeight: 400, letterSpacing: '-0.012em', color: '#f5f3ec' }}>
            {C.references.title}
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: gap, marginBottom: 60 }}>
          {C.references.items.map((r, i) => (
            <div
              key={i}
              data-reveal
              style={{
                paddingTop: 28,
                borderTop: `1px solid ${accent}40`,
              }}
            >
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: '#f5f3ec', marginBottom: 6, fontWeight: 400 }}>
                {r.name}
              </div>
              <div style={{ fontSize: 13, color: 'rgba(232,230,223,0.65)', lineHeight: 1.55 }}>
                {r.role}
                <br />
                <span style={{ color: accent }}>{r.org}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quote placeholder */}
        <div
          data-reveal
          style={{
            padding: compact ? '32px 40px' : '48px 60px',
            border: '1px dashed rgba(255,255,255,0.15)',
            borderRadius: 2,
            textAlign: 'center',
            background: 'rgba(0,0,0,0.15)',
          }}
        >
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 60, color: accent, opacity: 0.5, lineHeight: 0.5 }}>
            “
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 22 : 26, fontStyle: 'italic', color: 'rgba(255,255,255,0.55)', maxWidth: 720, margin: '20px auto' }}>
            {C.references.quote}
          </div>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)' }}>
            ZONE RÉSERVÉE — INTÉGRATION APRÈS VALIDATION
          </div>
        </div>
      </section>

      {/* ────────── CONTACT ────────── */}
      <section
        id="contact"
        style={{
          padding: pad,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.015)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: -100,
            top: -50,
            width: 600,
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        >
          <WestAfricaMap variant="watermark" accent={accent} />
        </div>

        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 80 }}>
          <div data-reveal>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', color: accent, marginBottom: 16 }}>§ 05 — CONTACT</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: compact ? 40 : 52, margin: '0 0 32px 0', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.012em', color: '#f5f3ec' }}>
              {C.contact.title}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: 'rgba(232,230,223,0.7)', maxWidth: 420, fontWeight: 300 }}>
              Réponse sous 48 heures ouvrées. Échanges confidentiels — NDA disponible sur simple demande.
            </p>

            <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['Disponibilité', 'Q3 2026 — agenda partiel'],
                ['Langues', 'Français · Anglais'],
                ['Base', 'Paris — déplacements terrain UEMOA'],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 24, fontSize: 13 }}>
                  <div style={{ width: 110, color: accent, letterSpacing: '0.12em', fontSize: 11 }}>{k.toUpperCase()}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)' }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          <div data-reveal>
            <div style={{ background: palette.elev, border: '1px solid rgba(255,255,255,0.08)', padding: compact ? '32px' : '44px', borderRadius: 2 }}>
              {[
                { k: 'name', label: C.contact.fields.name, type: 'text' },
                { k: 'email', label: C.contact.fields.email, type: 'email' },
              ].map((f) => (
                <div key={f.k} style={{ marginBottom: 28 }}>
                  <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>
                    {f.label.toUpperCase()}
                  </label>
                  <input
                    type={f.type}
                    style={{
                      width: '100%',
                      background: 'transparent',
                      border: 'none',
                      borderBottom: '1px solid rgba(255,255,255,0.18)',
                      color: '#f5f3ec',
                      fontSize: 15,
                      padding: '10px 0',
                      outline: 'none',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>
              ))}
              <div style={{ marginBottom: 32 }}>
                <label style={{ display: 'block', fontSize: 11, letterSpacing: '0.16em', color: 'rgba(255,255,255,0.55)', marginBottom: 8 }}>
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
                    padding: '10px 0',
                    outline: 'none',
                    fontFamily: 'inherit',
                    appearance: 'none',
                  }}
                >
                  {C.contact.subjects.map((s) => (
                    <option key={s} style={{ background: palette.elev }}>
                      {s}
                    </option>
                  ))}
                </select>
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
          padding: compact ? '40px 64px' : '60px 80px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 40,
          alignItems: 'start',
        }}
      >
        <div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, color: '#f5f3ec', marginBottom: 8 }}>
            {C.footer.name}
          </div>
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', maxWidth: 320, lineHeight: 1.6 }}>
            Analyse indépendante de risque politique et monétaire — Afrique de l’Ouest. Paris, France.
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', color: accent, marginBottom: 12 }}>CONTACT</div>
          <a href={`mailto:${C.footer.email}`} style={{ color: '#d6d4cb', textDecoration: 'none', fontSize: 13 }}>
            {C.footer.email}
          </a>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', color: accent, marginBottom: 12 }}>RÉSEAU</div>
          <a href="#" style={{ color: '#d6d4cb', textDecoration: 'none', fontSize: 13 }}>
            {C.footer.linkedin}
          </a>
        </div>
        <div>
          <div style={{ fontSize: 11, letterSpacing: '0.18em', color: accent, marginBottom: 12 }}>LIEU</div>
          <div style={{ color: '#d6d4cb', fontSize: 13 }}>{C.footer.city}</div>
        </div>
      </footer>
      <div
        style={{
          padding: '20px 80px',
          borderTop: '1px solid rgba(255,255,255,0.04)',
          fontSize: 11,
          color: 'rgba(255,255,255,0.35)',
          letterSpacing: '0.06em',
        }}
      >
        {C.footer.copyright}
      </div>
    </div>
  );
}

window.Direction1 = Direction1;
