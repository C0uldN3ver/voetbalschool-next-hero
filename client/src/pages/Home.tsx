/**
 * Design reminder — Field Lines Editorial:
 * contemporary sports editorial; asymmetric split hero; charcoal, ivory and Pion Oranje;
 * directional field lines and human, focused youth-football energy.
 */
import { ArrowDown, ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Trainingen", "Onze aanpak", "Over FORWARD."];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site-shell">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-vignette" aria-hidden="true" />
        <div className="hero-grain" aria-hidden="true" />
        <div className="field-overlay field-overlay--top" aria-hidden="true">
          <span className="field-line field-line--one" />
          <span className="field-line field-line--two" />
          <span className="field-circle" />
        </div>

        <header className="main-nav">
          <a className="brand" href="#top" aria-label="FORWARD. Football Academy home">
            <img
              className="brand-mark"
              src="/manus-storage/forward-mark_5af9241d.png"
              alt=""
            />
            <span className="brand-name">FORWARD<span className="brand-dot">.</span></span>
          </a>

          <nav className="desktop-nav" aria-label="Hoofdnavigatie">
            {navItems.map((item) => (
              <a href={`#${item.toLowerCase().replaceAll(" ", "-").replace(".", "")}`} key={item}>
                {item}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#moment">
            Plan een moment <ArrowUpRight size={15} strokeWidth={2.4} />
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Menu sluiten" : "Menu openen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={23} />}
          </button>
        </header>

        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobiele hoofdnavigatie">
            {navItems.map((item) => (
              <a
                href={`#${item.toLowerCase().replaceAll(" ", "-").replace(".", "")}`}
                key={item}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#moment" onClick={() => setMenuOpen(false)}>Plan een moment <ArrowUpRight size={17} /></a>
          </nav>
        )}

        <div id="top" className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-reveal hero-reveal--one">
              <span className="eyebrow-index">01</span>
              <span>JOUW VOLGENDE STAP</span>
            </div>
            <h1 id="hero-title" className="hero-title">
              SPEEL<br />MET <em>RICHTING.</em>
            </h1>
            <p className="hero-intro hero-reveal hero-reveal--two">
              Persoonlijke voetbaltraining voor jonge spelers die met meer vertrouwen, techniek en spelinzicht het veld op willen.
            </p>
            <div className="hero-actions hero-reveal hero-reveal--three">
              <a className="button button--primary" href="#moment">
                Kies jouw trainingsmoment <ArrowUpRight size={19} strokeWidth={2.4} />
              </a>
              <a className="text-link" href="#onze-aanpak">
                Onze aanpak <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <aside className="hero-side" aria-label="Kernwaarden">
            <img className="side-mark" src="/manus-storage/forward-mark_5af9241d.png" alt="" />
            <p className="side-kicker">FORWARD. ACADEMY</p>
            <div className="side-rule" />
            <p className="side-copy">Geen standaard training. Wel een plan dat past bij de speler voor je.</p>
            <a className="side-link" href="#trainingen">BEKIJK DE TRAININGEN <ArrowUpRight size={15} /></a>
          </aside>
        </div>

        <div className="hero-bottom">
          <a className="scroll-prompt" href="#trainingen" aria-label="Scroll naar de trainingen">
            <span>SCROLL OM TE ONTDEKKEN</span>
            <span className="scroll-icon"><ArrowDown size={16} /></span>
          </a>
          <div className="hero-position">NL / FOOTBALL DEVELOPMENT</div>
          <div className="field-note"><span /> TRAIN MET FOCUS</div>
        </div>
      </section>

      <section id="trainingen" className="transition-section" aria-labelledby="training-title">
        <div className="section-route section-route--cream" aria-hidden="true"><span /><i /><b /></div>
        <div className="transition-intro">
          <div className="eyebrow eyebrow--dark"><span className="eyebrow-index">02</span><span>HET VERTREKPUNT</span></div>
          <h2 id="training-title">GROEI BEGINT MET EEN PLAN.</h2>
        </div>
        <div className="route-cards">
          <article className="route-card route-card--dark">
            <span className="route-number">A</span>
            <h3>Maak je eerste balcontact scherper.</h3>
            <p>Werk aan balbeheersing, keuzes en het lef om de volgende actie te maken.</p>
            <a href="#moment">Vind jouw route <ArrowUpRight size={17} /></a>
          </article>
          <article className="route-card route-card--image">
            <img src="/manus-storage/forward-player-portrait_421d3a82.jpg" alt="Voetbalspeler in trainingskleding op het veld" />
            <div className="route-card-overlay"><span>FOCUS</span><strong>1 OP 1</strong></div>
          </article>
          <article className="route-card route-card--graphic">
            <img src="/manus-storage/forward-tactical-graphic_2023d566.jpg" alt="Abstracte tactische veldlijnen" />
            <div className="route-card-overlay route-card-overlay--ink"><span>STRATEGIE</span><strong>MET RICHTING</strong></div>
          </article>
        </div>
      </section>

      <section id="onze-aanpak" className="approach-strip" aria-labelledby="approach-title">
        <div className="approach-art" aria-hidden="true" />
        <div className="section-route section-route--dark" aria-hidden="true"><span /><i /><b /></div>
        <div className="approach-content">
          <div className="eyebrow"><span className="eyebrow-index">03</span><span>ONZE AANPAK</span></div>
          <h2 id="approach-title">SLIMMER TRAINEN.<br />BETER SPELEN.</h2>
          <a id="moment" className="button button--light" href="mailto:info@jouwvoetbalschool.nl?subject=Kennismaken%20met%20FORWARD.">
            Plan een eerste gesprek <ArrowUpRight size={19} strokeWidth={2.4} />
          </a>
        </div>
      </section>

      <footer id="over-forward" className="site-footer">
        <a className="brand brand--footer" href="#top" aria-label="Terug naar boven">
          <img className="brand-mark" src="/manus-storage/forward-mark_5af9241d.png" alt="" />
          <span className="brand-name">FORWARD<span className="brand-dot">.</span></span>
        </a>
        <p>Een startvisie voor een moderne voetbalschool.</p>
        <a href="#top" className="back-to-top">NAAR BOVEN <span>↑</span></a>
      </footer>
    </main>
  );
}
