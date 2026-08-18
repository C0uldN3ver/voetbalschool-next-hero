/**
 * Design reminder — NEXT single-hero direction:
 * one calm but cinematic conversion surface; official NEXT shield; editorial type;
 * all product context lives in a refined pillar rail within the hero—not below it.
 */
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const pillars = [
  { number: "01", title: "Techniek", text: "Balbeheersing & individuele ontwikkeling" },
  { number: "02", title: "Motoriek", text: "Athletic Skills Model" },
  { number: "03", title: "Plezier", text: "Uitdagend trainen zonder het spelplezier te verliezen" },
];

function NextBrand() {
  return (
    <a className="next-brand" href="#top" aria-label="Voetbalschool NEXT home">
      <span className="next-shield"><img src="/manus-storage/voetbalschool-next-logo_cd29fb32.png" alt="" /></span>
      <span className="next-name"><small>VOETBALSCHOOL</small><strong>NEXT</strong></span>
    </a>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="site-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="field-overlay" aria-hidden="true"><span className="field-line field-line--one" /><span className="field-line field-line--two" /><span className="field-circle" /></div>

        <header className="main-nav">
          <NextBrand />
          <nav className="nav-route" aria-label="Hoofdnavigatie">
            <a href="#ontwikkelroute"><span>01</span> Trainingen</a>
            <a href="#ontwikkelroute"><span>02</span> Onze aanpak</a>
            <a href="#aanmelden"><span>03</span> Aanmelden</a>
          </nav>
          <a className="nav-cta" href="mailto:info@voetbalschoolnext.nl?subject=Aanmelden%20bij%20Voetbalschool%20NEXT">Meld je aan <ArrowUpRight size={15} strokeWidth={2.4} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Menu sluiten" : "Menu openen"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={22} /> : <Menu size={23} />}
          </button>
        </header>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobiele hoofdnavigatie">
            <NextBrand />
            <a href="#ontwikkelroute" onClick={() => setMenuOpen(false)}><span>01</span>Trainingen</a>
            <a href="#ontwikkelroute" onClick={() => setMenuOpen(false)}><span>02</span>Onze aanpak</a>
            <a id="aanmelden" className="mobile-signup" href="mailto:info@voetbalschoolnext.nl?subject=Aanmelden%20bij%20Voetbalschool%20NEXT" onClick={() => setMenuOpen(false)}>Meld je aan <ArrowUpRight size={17} /></a>
          </nav>
        )}

        <div className="hero-content">
          <div className="hero-copy">
            <div className="eyebrow hero-reveal hero-reveal--one"><span className="eyebrow-index">01</span><span>NEXT DEVELOPMENT</span></div>
            <h1 id="hero-title" className="hero-title">ONTWIKKEL<br />JE SPEL.<br /><em>VERLEG JE GRENS.</em></h1>
            <p className="hero-intro hero-reveal hero-reveal--two">Professionele techniektraining voor jeugdspelers.</p>
            <div className="hero-actions hero-reveal hero-reveal--three">
              <a className="button button--primary" href="#ontwikkelroute">Bekijk trainingen <ArrowUpRight size={19} strokeWidth={2.4} /></a>
              <a className="button button--ghost" href="mailto:info@voetbalschoolnext.nl?subject=Aanmelden%20bij%20Voetbalschool%20NEXT">Meld je aan <ArrowUpRight size={19} strokeWidth={2.4} /></a>
            </div>
          </div>

          <aside className="hero-side" aria-label="De NEXT-belofte">
            <div className="side-shield"><img src="/manus-storage/voetbalschool-next-logo_cd29fb32.png" alt="" /></div>
            <p className="side-kicker">JOUW VOLGENDE STAP</p>
            <div className="side-rule" />
            <p className="side-copy">Train met aandacht. Speel met vertrouwen.</p>
          </aside>
        </div>

        <div id="ontwikkelroute" className="pillar-rail" aria-label="De drie trainingspijlers van Voetbalschool NEXT">
          <div className="rail-intro"><span>JOUW ONTWIKKELROUTE</span><ArrowDown size={15} /></div>
          <div className="pillar-list">
            {pillars.map((pillar) => (
              <article className="pillar-item" key={pillar.title}>
                <span className="pillar-number">{pillar.number}</span>
                <div><h2>{pillar.title}</h2><p>{pillar.text}</p></div>
                <span className="pillar-arrow"><ArrowUpRight size={16} /></span>
              </article>
            ))}
          </div>
          <div className="rail-note"><span /> NEXT / FOOTBALL DEVELOPMENT</div>
        </div>
      </section>
    </main>
  );
}
