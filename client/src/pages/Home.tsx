/**
 * Design reminder — NEXT Training Route:
 * high-contrast football editorial with a real brand shield, route-navigation,
 * cinematic training motion and three development pillars as the key UX journey.
 */
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const routes = [
  { index: "01", label: "Trainingen", target: "trainingen" },
  { index: "02", label: "Werkwijze", target: "werkwijze" },
  { index: "03", label: "Over NEXT", target: "over-next" },
];

const pillars = [
  {
    number: "01",
    title: "Techniek",
    text: "Balbeheersing & individuele ontwikkeling",
    note: "JE BAL. JOUW MOMENT.",
    className: "pillar-card--technique",
  },
  {
    number: "02",
    title: "Motoriek",
    text: "Athletic Skills Model",
    note: "BEWEEG VRIJ. SPEEL VRIJ.",
    className: "pillar-card--motor",
  },
  {
    number: "03",
    title: "Plezier",
    text: "Uitdagend trainen zonder het spelplezier te verliezen",
    note: "GROEI MET EEN GLIMLACH.",
    className: "pillar-card--fun",
  },
];

function NextBrand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={`next-brand ${footer ? "next-brand--footer" : ""}`} href="#top" aria-label="Voetbalschool NEXT home">
      <span className="next-shield"><img src="/manus-storage/voetbalschool-next-logo_cd29fb32.png" alt="" /></span>
      <span className="next-name"><small>VOETBALSCHOOL</small><strong>NEXT</strong></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <section id="top" className="hero-section" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="field-overlay" aria-hidden="true"><span className="field-line field-line--one" /><span className="field-line field-line--two" /><span className="field-circle" /></div>

        <header className="main-nav">
          <NextBrand />
          <nav className="route-nav" aria-label="Hoofdnavigatie">
            <span className="route-nav-caption">JOUW ROUTE</span>
            <div className="route-nav-track">
              {routes.map((route, position) => (
                <a href={`#${route.target}`} key={route.target} className="route-nav-link">
                  <span className={`route-node route-node--${position + 1}`} />
                  <span className="route-index">{route.index}</span>
                  <span>{route.label}</span>
                </a>
              ))}
            </div>
          </nav>
          <a className="nav-cta" href="#aanmelden">Meld je aan <ArrowUpRight size={15} strokeWidth={2.4} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Menu sluiten" : "Menu openen"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={23} />}
          </button>
        </header>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobiele hoofdnavigatie">
            <NextBrand />
            {routes.map((route) => <a href={`#${route.target}`} key={route.target} onClick={() => setMenuOpen(false)}><span>{route.index}</span>{route.label}</a>)}
            <a className="mobile-signup" href="#aanmelden" onClick={() => setMenuOpen(false)}>Meld je aan <ArrowUpRight size={17} /></a>
          </nav>
        )}

        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-reveal hero-reveal--one"><span className="eyebrow-index">01</span><span>NEXT DEVELOPMENT</span></div>
            <h1 id="hero-title" className="hero-title">ONTWIKKEL<br />JE SPEL.<br /><em>VERLEG JE GRENS.</em></h1>
            <p className="hero-intro hero-reveal hero-reveal--two">Professionele techniektraining voor jeugdspelers.</p>
            <div className="hero-actions hero-reveal hero-reveal--three">
              <a className="button button--primary" href="#trainingen">Bekijk trainingen <ArrowUpRight size={19} strokeWidth={2.4} /></a>
              <a className="button button--ghost" href="#aanmelden">Meld je aan <ArrowUpRight size={19} strokeWidth={2.4} /></a>
            </div>
          </div>

          <aside className="hero-side" aria-label="Startpunt bij NEXT">
            <div className="side-shield"><img src="/manus-storage/voetbalschool-next-logo_cd29fb32.png" alt="" /></div>
            <p className="side-kicker">START BIJ NEXT</p>
            <div className="side-rule" />
            <p className="side-copy">Vind de training die past bij jouw volgende stap.</p>
            <a className="side-link" href="#trainingen">KIES JOUW ROUTE <ArrowUpRight size={15} /></a>
          </aside>
        </div>

        <div className="hero-bottom">
          <a className="scroll-prompt" href="#trainingen"><span>ONTDEK JOUW ROUTE</span><span className="scroll-icon"><ArrowDown size={16} /></span></a>
          <div className="hero-position">VOETBALSCHOOL NEXT / DEVELOPMENT</div>
          <div className="field-note"><span /> TECHNIEK · MOTORIEK · PLEZIER</div>
        </div>
      </section>

      <section id="trainingen" className="pillar-section" aria-labelledby="pillar-title">
        <div className="section-route section-route--cream" aria-hidden="true"><span /><i /><b /></div>
        <div className="pillar-heading">
          <div className="eyebrow eyebrow--dark"><span className="eyebrow-index">02</span><span>JOUW ONTWIKKELROUTE</span></div>
          <h2 id="pillar-title">DRIE BOUWSTENEN.<br /><em>ÉÉN STERKER SPEL.</em></h2>
          <p>Bij NEXT groeit techniek niet los van beweging en plezier. Iedere training geeft je iets mee voor de volgende wedstrijd.</p>
        </div>
        <div className="pillar-grid">
          {pillars.map((pillar) => (
            <article className={`pillar-card ${pillar.className}`} key={pillar.title}>
              <div className="pillar-card-top"><span>{pillar.number}</span><span>{pillar.note}</span></div>
              {pillar.title === "Motoriek" && <img src="/manus-storage/forward-player-portrait_421d3a82.jpg" alt="Jeugdspeler op een verlicht trainingsveld" />}
              <div className="pillar-card-content"><h3>{pillar.title}</h3><p>{pillar.text}</p><a href="#aanmelden">Ontdek meer <ArrowUpRight size={17} /></a></div>
            </article>
          ))}
        </div>
      </section>

      <section id="werkwijze" className="approach-section" aria-labelledby="approach-title">
        <div className="approach-art" aria-hidden="true" />
        <div className="section-route section-route--dark" aria-hidden="true"><span /><i /><b /></div>
        <div className="approach-content">
          <div className="eyebrow"><span className="eyebrow-index">03</span><span>ZO WERKT NEXT</span></div>
          <h2 id="approach-title">VAN TRAINING<br />NAAR VERTROUWEN.</h2>
          <p>We dagen je uit op jouw niveau en maken ruimte voor fouten, herhaling en progressie. Zo blijft ontwikkelen iets waar je zin in hebt.</p>
          <a id="aanmelden" className="button button--light" href="mailto:info@voetbalschoolnext.nl?subject=Aanmelden%20bij%20Voetbalschool%20NEXT">Meld je aan <ArrowUpRight size={19} strokeWidth={2.4} /></a>
        </div>
      </section>

      <footer id="over-next" className="site-footer">
        <NextBrand footer />
        <p>Ontwikkel je spel. Verleg je grens.</p>
        <a href="#top" className="back-to-top">NAAR BOVEN <span>↑</span></a>
      </footer>
    </main>
  );
}
