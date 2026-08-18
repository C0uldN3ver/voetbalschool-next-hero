/**
 * Design reminder — NEXT Academy Hero:
 * a premium, cinematic football academy opening; the supplied real training image leads;
 * broad high-contrast header, clear official identity, and understated method context.
 */
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

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
        <div className="hero-photo-tint" aria-hidden="true" />
        <div className="hero-angle" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <svg className="hero-route" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-40 700 C 330 695, 515 568, 750 425 S 1130 333, 1500 368" />
          <circle cx="750" cy="425" r="7" />
          <circle cx="1500" cy="368" r="7" />
        </svg>

        <header className="hero-header">
          <NextBrand />
          <nav className="desktop-nav" aria-label="Hoofdnavigatie">
            <a href="#trainingen"><span>01</span> Trainingen</a>
            <a href="#werkwijze"><span>02</span> Onze aanpak</a>
            <a href="#over-next"><span>03</span> Over NEXT</a>
          </nav>
          <a className="signup-button" href="mailto:info@voetbalschoolnext.nl?subject=Aanmelden%20bij%20Voetbalschool%20NEXT">Meld je aan <ArrowUpRight size={19} strokeWidth={2.5} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Menu sluiten" : "Menu openen"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={25} /> : <Menu size={26} />}
          </button>
        </header>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobiele hoofdnavigatie">
            <NextBrand />
            <a href="#trainingen" onClick={() => setMenuOpen(false)}><span>01</span>Trainingen</a>
            <a href="#werkwijze" onClick={() => setMenuOpen(false)}><span>02</span>Onze aanpak</a>
            <a href="#over-next" onClick={() => setMenuOpen(false)}><span>03</span>Over NEXT</a>
            <a className="mobile-signup" href="mailto:info@voetbalschoolnext.nl?subject=Aanmelden%20bij%20Voetbalschool%20NEXT" onClick={() => setMenuOpen(false)}>Meld je aan <ArrowUpRight size={18} /></a>
          </nav>
        )}

        <div className="hero-body">
          <div className="hero-copy">
            <p className="hero-kicker"><span>●</span> NEXT FOOTBALL ACADEMY <i>ISSUE 01 / ON FIELD</i></p>
            <h1 id="hero-title">ONTWIKKEL<br />JE SPEL.<br /><em>VERLEG JE GRENS.</em></h1>
            <p className="hero-intro">Professionele techniektraining voor jeugdspelers die met vertrouwen, aandacht en plezier vooruit willen.</p>
            <div className="hero-actions">
              <a className="hero-primary" href="#trainingen">Bekijk trainingen <ArrowUpRight size={20} strokeWidth={2.6} /></a>
              <a className="hero-text-link" href="#werkwijze">Ontdek onze aanpak <span>→</span></a>
            </div>
          </div>

          <aside className="method-panel" aria-label="De NEXT-methode">
            <p className="method-label">DE NEXT-METHODE</p>
            <div className="method-line" />
            <div className="method-items">
              <div><strong>Techniek</strong><span>Balbeheersing</span></div>
              <div><strong>Motoriek</strong><span>Athletic Skills Model</span></div>
              <div><strong>Plezier</strong><span>Uitdagend en vrij spelen</span></div>
            </div>
          </aside>
        </div>

        <div className="hero-footer">
          <a className="scroll-prompt" href="#trainingen"><span>ONTDEK DE VOLGENDE STAP</span><i><ArrowDown size={17} /></i></a>
          <p id="trainingen">TECHNIEK <b>×</b> MOTORIEK <b>×</b> PLEZIER</p>
          <span id="werkwijze" className="hero-index">NEXT / 01</span>
          <span id="over-next" className="sr-only">Voetbalschool NEXT</span>
        </div>
      </section>
    </main>
  );
}
