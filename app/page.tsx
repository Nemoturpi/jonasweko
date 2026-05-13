import ContactForm from "@/components/ContactForm";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import SectionTracker from "@/components/SectionTracker";
import WestAfricaMap from "@/components/WestAfricaMap";

const coverageTags = [
  "Franc CFA / Zone UEMOA",
  "Architecture monétaire Eco",
  "Confédération AES : Mali, Burkina Faso, Niger",
  "Côte d’Ivoire",
  "Sénégal",
  "Togo",
  "Bénin",
  "Ghana",
  "Dette souveraine UEMOA",
  "e-CFA et réglementation fintech",
  "Risque politique Golfe de Guinée",
  "Coopération franco-africaine",
];

const offers = [
  {
    id: "briefing-dirigeants",
    title: "Briefing dirigeants",
    format: "Format oral confidentiel, 1h",
    description: "Contexte politique et monétaire sur mesure",
    audience: "Pour Comités de Direction, DAF et directions risque pays",
    price: "Sur demande",
  },
  {
    id: "note-analyse",
    title: "Note d’analyse",
    format: "3 à 15 pages, livraison 5 à 10 jours",
    description: "Scénarios sur un pays, un événement ou une décision monétaire",
    audience: "Pour arbitrer vite avec une base exploitable en comité",
    price: "À partir de 1 500 €",
  },
  {
    id: "mission-approfondie",
    title: "Mission approfondie",
    format: "Due diligence, audit géopolitique, rapport stratégique",
    description: "Terrain possible si nécessaire",
    audience: "Pour une exposition pays ou transaction sensible",
    price: "Sur devis",
  },
  {
    id: "suivi-mensuel",
    title: "Suivi mensuel",
    format: "Accès expert régulier, briefing trimestriel, alerte signal faible",
    description: "Pour équipes risque ou investissement",
    audience: "Pour transformer la veille en décisions suivies",
    price: "Retainer mensuel",
  },
];

const references = [
  "Rémi Rioux — Directeur général, Agence française de développement",
  "David Stasavage — Carroll and Milton Petrie Professor, NYU",
  "Africa Global Security — Kénitra, Maroc",
];

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold/80">{eyebrow}</p>
      <h2 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <SectionTracker />

      <section data-section-id="hero" className="relative min-h-screen px-5 py-8 sm:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(circle_at_65%_25%,black,transparent_62%)]">
          <WestAfricaMap />
        </div>
        <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-gold">Jonas Weko · Analyse indépendante</p>
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl font-semibold leading-[0.95] text-ink sm:text-6xl lg:text-7xl">
              Comprendre les systèmes monétaires et politiques d’Afrique de l’Ouest — pour décider.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/75 sm:text-xl">
              Analyse indépendante pour investisseurs, banques et institutions exposées à la zone franc, à l’Eco et aux dynamiques de l’AES.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a data-cta-id="hero-primary-briefing" href="#contact" className="rounded-full bg-gold px-7 py-3 text-center font-medium text-night transition hover:bg-[#d8ba67]">
              Demander un briefing
            </a>
            <a data-cta-id="hero-secondary-lead-magnet" href="#lead-magnet" className="rounded-full border border-gold/50 px-7 py-3 text-center font-medium text-gold transition hover:border-gold hover:bg-gold/10">
              Télécharger la note d’ouverture
            </a>
          </div>
        </div>
      </section>

      <section data-section-id="probleme" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Problème" title="Ce que les analyses standards ne donnent pas" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              "Les notes OSINT génériques ne décryptent pas les mécanismes techniques du compte d’opérations ni la trajectoire réelle de l’Eco.",
              "Les voix médiatiques sur le franc CFA sont souvent militantes ou institutionnelles. Peu offrent une lecture à la fois rigoureuse et opérationnelle.",
              "Les directeurs risque pays ont besoin de scénarios utilisables en COMEX — pas de rapports de 80 pages.",
            ].map((text) => (
              <article key={text} className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 text-lg leading-8 text-ink/75">
                {text}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-section-id="expertise" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Expertise" title="Une expertise rare sur les architectures monétaires ouest-africaines" />
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <article className="rounded-3xl border border-gold/20 bg-gold/[0.06] p-7 sm:p-9">
              <p className="text-2xl font-semibold text-ink">Jonas Weko, PhD</p>
              <div className="mt-5 space-y-4 leading-7 text-ink/75">
                <p>Docteur en science politique — Université Paris Panthéon-Assas<br />Mention Très Honorable avec Félicitations du Jury, 2025<br />Lauréat du Prix de thèse de l’Université Paris-Panthéon-Assas</p>
                <p><span className="text-gold">Thèse :</span> “Le régime monétaire du franc CFA depuis 1959 — Genèse et trajectoire de réformes sous l’effet structurant du compte d’opérations”</p>
                <p><span className="text-gold">Ouvrage publié :</span> <a data-cta-id="expertise-lgdj-link" href="https://www.lgdj.fr/" className="underline decoration-gold/50 underline-offset-4 hover:text-gold">LGDJ</a></p>
                <p><span className="text-gold">Séjours de recherche :</span><br />FMI, Washington<br />BCEAO, Dakar<br />UEMOA, Ouagadougou</p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs uppercase tracking-[0.28em] text-ink/45">Badges remplaçables par logos</p>
                <p className="text-sm tracking-[0.18em] text-ink/60">Assas · LGDJ · FMI · BCEAO · UEMOA</p>
              </div>
            </article>
            <article className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 sm:p-9">
              <h3 className="font-serif text-3xl text-ink">Zones de couverture</h3>
              <div className="mt-7 flex flex-wrap gap-3">
                {coverageTags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-night/70 px-4 py-2 text-sm text-ink/75">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section data-section-id="formats" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Prestations" title="Formats d’intervention" />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {offers.map((offer) => (
              <article key={offer.id} className="flex min-h-[23rem] flex-col rounded-3xl border border-white/10 bg-white/[0.035] p-6 transition hover:border-gold/45 hover:bg-gold/[0.05]">
                <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-gold">{offer.title}</h3>
                <p className="mt-5 text-lg font-medium text-ink">{offer.format}</p>
                <p className="mt-4 leading-7 text-ink/70">{offer.description}</p>
                <p className="mt-4 leading-7 text-ink/60">{offer.audience}</p>
                <p className="mt-auto pt-7 text-sm text-gold/90">Prix : {offer.price}</p>
                <a data-cta-id={`offer-${offer.id}`} href="#contact" className="mt-5 inline-flex text-sm font-medium text-ink/75 underline decoration-gold/50 underline-offset-4 hover:text-gold">
                  Me contacter
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lead-magnet" data-section-id="lead-magnet" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-gold/25 bg-gold/[0.07] p-7 sm:p-10 lg:p-12">
          <SectionHeading eyebrow="Lead magnet" title="Note de positionnement — Téléchargement gratuit" />
          <p className="font-serif text-3xl text-ink">L’Eco sans l’UEMOA : scénarios pour 2026-2028</p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/75">
            Une lecture technique et politique sur l’hypothèse d’un Eco lancé sans la zone franc, et ses implications pour les corporates, les banques et les souverains UEMOA.
          </p>
          <LeadMagnetForm />
        </div>
      </section>

      <section data-section-id="references" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Références" title="Affiliations et collaborations" />
          <div className="grid gap-4 md:grid-cols-3">
            {references.map((reference) => (
              <div key={reference} className="rounded-3xl border border-white/10 bg-white/[0.035] p-6 text-ink/75">
                {reference}
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-dashed border-gold/30 p-6 text-ink/50">Citation à intégrer après validation.</div>
        </div>
      </section>

      <section id="contact" data-section-id="contact" className="px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="Contact" title="Demander un briefing ou une note d’analyse" />
            <p className="max-w-xl text-lg leading-8 text-ink/70">
              Décrivez brièvement votre besoin : exposition pays, décision monétaire, transaction, comité d’investissement ou demande de veille confidentielle.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-10 text-sm text-ink/55 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-ink/80">Jonas Weko</p>
          <div className="flex flex-wrap gap-4">
            <a data-cta-id="footer-email" href="mailto:contact@example.com" className="hover:text-gold">Email</a>
            <a data-cta-id="footer-linkedin" href="https://www.linkedin.com/" className="hover:text-gold">LinkedIn</a>
            <span>Paris — disponible pour missions</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
