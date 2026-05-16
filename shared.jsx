// Shared content + atoms for all three Jonas Weko landing directions.
// Content faithful to the brief; tone: institutional, FR.

const CONTENT = {
  brand: 'Jonas Weko',
  role: 'Analyse de risque politique & monétaire — Afrique de l\u2019Ouest',
  hero: {
    h1: 'Comprendre les systèmes monétaires et politiques d\u2019Afrique de l\u2019Ouest — pour décider.',
    sub: 'Analyse indépendante pour investisseurs, banques et institutions exposées à la zone franc, à l\u2019Eco et aux dynamiques de l\u2019AES.',
    ctaPrimary: { label: 'Demander un briefing', href: '#contact' },
    ctaSecondary: { label: 'Télécharger la note d\u2019ouverture', href: '#lead-magnet' },
  },
  problem: {
    title: 'Ce que les analyses standards ne donnent pas',
    blocks: [
      {
        kicker: '01',
        body:
          'Les notes OSINT génériques ne décryptent pas les mécanismes techniques du compte d\u2019opérations ni la trajectoire réelle de l\u2019Eco.',
      },
      {
        kicker: '02',
        body:
          'Les voix médiatiques sur le franc CFA sont souvent militantes ou institutionnelles. Peu offrent une lecture à la fois rigoureuse et opérationnelle.',
      },
      {
        kicker: '03',
        body:
          'Les directeurs risque pays ont besoin de scénarios utilisables en COMEX — pas de rapports de 80 pages.',
      },
    ],
  },
  expertise: {
    title: 'Une expertise rare sur les architectures monétaires ouest-africaines',
    name: 'Jonas Weko, PhD',
    creds: [
      'Docteur en science politique — Université Paris Panthéon-Assas',
      'Mention Très Honorable avec Félicitations du Jury, 2025',
      'Lauréat du Prix de thèse de l\u2019Université Paris-Panthéon-Assas',
    ],
    thesisLabel: 'Thèse',
    thesisTitle:
      'Le régime monétaire du franc CFA depuis 1959 — Genèse et trajectoire de réformes sous l\u2019effet structurant du compte d\u2019opérations',
    bookLabel: 'Ouvrage publié',
    bookPublisher: 'LGDJ',
    bookHref: '#',
    stays: [
      { org: 'FMI', city: 'Washington' },
      { org: 'BCEAO', city: 'Dakar' },
      { org: 'UEMOA', city: 'Ouagadougou' },
    ],
    zonesTitle: 'Zones de couverture',
    zones: [
      { label: 'Franc CFA / Zone UEMOA', kind: 'monetary', code: 'UEMOA' },
      { label: 'Architecture monétaire Eco', kind: 'monetary' },
      { label: 'Confédération AES — Mali, Burkina Faso, Niger', kind: 'political', code: 'AES' },
      { label: 'Côte d\u2019Ivoire', kind: 'country', code: 'CI' },
      { label: 'Sénégal', kind: 'country', code: 'SN' },
      { label: 'Togo', kind: 'country', code: 'TG' },
      { label: 'Bénin', kind: 'country', code: 'BJ' },
      { label: 'Ghana', kind: 'country', code: 'GH' },
      { label: 'Dette souveraine UEMOA', kind: 'monetary' },
      { label: 'e-CFA & réglementation fintech', kind: 'monetary' },
      { label: 'Risque politique Golfe de Guinée', kind: 'political' },
      { label: 'Coopération franco-africaine', kind: 'political' },
    ],
    badges: ['Assas', 'LGDJ', 'FMI', 'BCEAO', 'UEMOA'],
  },
  formats: {
    title: 'Formats d\u2019intervention',
    cards: [
      {
        tag: 'BRIEFING DIRIGEANTS',
        sub: 'Format oral confidentiel, 1h',
        body: 'Contexte politique et monétaire sur mesure. Pour Comités de Direction, DAF et directions risque pays.',
        price: 'Sur demande',
        id: 'briefing',
      },
      {
        tag: 'NOTE D\u2019ANALYSE',
        sub: '3 à 15 pages — livraison 5 à 10 jours',
        body: 'Scénarios sur un pays, un événement ou une décision monétaire.',
        price: 'À partir de 1 500 €',
        id: 'note',
      },
      {
        tag: 'MISSION APPROFONDIE',
        sub: 'Due diligence, audit géopolitique, rapport stratégique',
        body: 'Terrain possible si nécessaire. Délais et périmètre adaptés.',
        price: 'Sur devis',
        id: 'mission',
      },
      {
        tag: 'SUIVI MENSUEL',
        sub: 'Accès expert régulier, briefing trimestriel, alerte signal faible',
        body: 'Pour équipes risque ou investissement.',
        price: 'Retainer mensuel',
        id: 'retainer',
      },
    ],
  },
  leadMagnet: {
    title: 'Note de positionnement',
    eyebrow: 'Téléchargement gratuit',
    headline: 'L\u2019Eco sans l\u2019UEMOA : scénarios pour 2026-2028',
    description:
      'Une lecture technique et politique sur l\u2019hypothèse d\u2019un Eco lancé sans la zone franc, et ses implications pour les corporates, les banques et les souverains UEMOA.',
    fieldLabel: 'Email professionnel',
    placeholder: 'prenom.nom@institution.eu',
    submit: 'Recevoir la note',
  },
  references: {
    title: 'Affiliations et collaborations',
    items: [
      { name: 'Rémi Rioux', role: 'Directeur général', org: 'Agence française de développement' },
      { name: 'David Stasavage', role: 'Carroll and Milton Petrie Professor', org: 'New York University' },
      { name: 'Africa Global Security', role: 'Partenaire opérationnel', org: 'Kénitra, Maroc' },
    ],
    quote: 'Citation à intégrer après validation.',
  },
  contact: {
    title: 'Demander un briefing ou une note d\u2019analyse',
    fields: {
      name: 'Nom / Organisation',
      email: 'Email professionnel',
      subject: 'Objet de la demande',
    },
    subjects: [
      'Briefing dirigeants',
      'Demande de note d\u2019analyse',
      'Mission / retainer',
      'Prise de contact générale',
    ],
    submit: 'Envoyer la demande',
  },
  footer: {
    name: 'Jonas Weko',
    email: 'contact@jonasweko.com',
    linkedin: 'linkedin.com/in/jonasweko',
    city: 'Paris — disponible pour missions',
    copyright: '© 2026 Jonas Weko · Tous droits réservés',
  },
};

// Small UI atoms reused across directions.
// All scoped to `.jw-*` selectors via inline style so they survive per-direction theming.

function Btn({ children, variant = 'primary', accent, href = '#', density = 'airy', ...rest }) {
  const compact = density === 'compact';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    fontFamily: "'DM Sans', sans-serif",
    fontSize: compact ? 13 : 14,
    fontWeight: 500,
    letterSpacing: '0.02em',
    padding: compact ? '10px 18px' : '14px 24px',
    borderRadius: 2,
    textDecoration: 'none',
    transition: 'all .2s',
    cursor: 'pointer',
    border: '1px solid transparent',
  };
  const styles = {
    primary: {
      ...base,
      background: accent,
      color: '#0a0f1e',
      borderColor: accent,
    },
    ghost: {
      ...base,
      background: 'transparent',
      color: '#e8e6df',
      borderColor: 'rgba(255,255,255,0.22)',
    },
    underline: {
      ...base,
      background: 'transparent',
      color: accent,
      borderColor: 'transparent',
      borderBottom: `1px solid ${accent}`,
      padding: compact ? '6px 0' : '8px 0',
      borderRadius: 0,
    },
  };
  return (
    <a href={href} style={styles[variant]} {...rest}>
      <span>{children}</span>
      {variant !== 'underline' && <span style={{ fontSize: 14, opacity: 0.7 }}>→</span>}
      {variant === 'underline' && <span style={{ fontSize: 12, marginLeft: 2 }}>→</span>}
    </a>
  );
}

function ZoneTag({ label, kind, accent, density }) {
  const tones = {
    monetary: { bg: 'rgba(201,168,76,0.07)', bd: 'rgba(201,168,76,0.28)', fg: '#e8d99a' },
    political: { bg: 'rgba(255,255,255,0.04)', bd: 'rgba(255,255,255,0.18)', fg: '#d6d4cb' },
    country: { bg: 'transparent', bd: 'rgba(255,255,255,0.14)', fg: '#b8b6ac' },
  };
  const t = tones[kind] || tones.country;
  const compact = density === 'compact';
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: compact ? '4px 10px' : '7px 14px',
        borderRadius: 999,
        background: t.bg,
        border: `1px solid ${kind === 'monetary' ? accent : t.bd}`,
        color: kind === 'monetary' ? accent : t.fg,
        fontSize: compact ? 11 : 12.5,
        fontFamily: "'DM Sans', sans-serif",
        letterSpacing: '0.01em',
        whiteSpace: 'nowrap',
      }}
    >
      {kind === 'monetary' && <span style={{ width: 4, height: 4, borderRadius: 4, background: accent }} />}
      {label}
    </span>
  );
}

// Animate-in on intersect — fade only, very light.
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity 700ms ease, transform 700ms ease';
      obs.observe(el);
    });
    return () => obs.disconnect();
  });
}

Object.assign(window, { CONTENT, Btn, ZoneTag, useReveal });
