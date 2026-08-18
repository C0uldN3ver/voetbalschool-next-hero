/**
 * Design reminder — NEXT Academy Hero:
 * a premium, cinematic football academy opening with an uncompromised real training photo.
 * Official brand, bold spacious navigation, and three small varied method cards live in the hero.
 */
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

function NextBrand() {
  return (
    <a className="next-brand" href="#top" aria-label="Voetbalschool NEXT home">
      <span className="next-logo-full"><img src="/manus-storage/voetbalschool-next-logo_cd29fb32.png" alt="Officieel logo Voetbalschool NEXT" /></span>
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
        <svg className="hero-route" viewBox="0 0 1600 900" preserveAspectRatio="none" aria-hidden="true"><path d="M-40 700 C 330 695, 515 568, 750 425 S 1130 333, 1500 368" /><circle cx="750" cy="425" r="7" /><circle cx="1500" cy="368" r="7" /></svg>

        <header className="hero-header">
          <NextBrand />
          <nav className="desktop-nav" aria-label="Hoofdnavigatie">
            <a href="#trainingen">Trainingen</a>
            <a href="#werkwijze">Onze aanpak</a>
            <a href="#over-next">Over NEXT</a>
          </nav>
          <a className="signup-button" href="mailto:info@voetbalschoolnext.nl?subject=Aanmelden%20bij%20Voetbalschool%20NEXT">Meld je aan <ArrowUpRight size={20} strokeWidth={2.6} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Menu sluiten" : "Menu openen"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={25} /> : <Menu size={26} />}</button>
        </header>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobiele hoofdnavigatie">
            <NextBrand />
            <a href="#trainingen" onClick={() => setMenuOpen(false)}>Trainingen</a>
            <a href="#werkwijze" onClick={() => setMenuOpen(false)}>Onze aanpak</a>
            <a href="#over-next" onClick={() => setMenuOpen(false)}>Over NEXT</a>
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

          <aside id="werkwijze" className="method-panel" aria-label="De drie pijlers van Voetbalschool NEXT">
            <p className="method-label">JOUW ONTWIKKELING</p>
            <div className="method-cards">
              <article className="method-card method-card--technique">
                <h2>Techniek</h2>
                <p><strong>Balbeheersing &amp; individuele ontwikkeling.</strong> Gerichte training op aannames, dribbels, passen, schieten en handelen onder druk. Iedere speler krijgt de ruimte om zijn techniek te verfijnen en sterker te worden in 1-tegen-1 situaties.</p>
              </article>
              <article className="method-card method-card--motor">
                <h2>Motoriek</h2>
                <p><strong>Athletic Skills Model.</strong> We trainen snelheid, coördinatie, balans, wendbaarheid en reactievermogen. Zo ontwikkelen spelers niet alleen betere voetbalvaardigheden, maar bewegen ze ook slimmer en sterker op het veld.</p>
              </article>
              <article className="method-card method-card--fun">
                <h2>Plezier</h2>
                <p><strong>Uitdagend trainen zonder het spelplezier te verliezen.</strong> Spelers worden continu uitgedaagd binnen een positieve en energieke omgeving. Intensief trainen en beter worden staan centraal, zonder dat het plezier in voetbal verloren gaat.</p>
              </article>
            </div>
          </aside>
        </div>

        <div className="hero-footer">
          <a className="scroll-prompt" href="#trainingen"><span>ONTDEK DE VOLGENDE STAP</span><i><ArrowDown size={17} /></i></a>
          <p id="trainingen">TECHNIEK <b>×</b> MOTORIEK <b>×</b> PLEZIER</p>
          <span id="over-next" className="hero-index">NEXT / 01</span>
        </div>
      </section>
    </main>
  );
}
