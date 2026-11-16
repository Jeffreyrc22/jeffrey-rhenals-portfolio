import { Arrow } from "../components/Arrow";
import { DotBackground } from "../components/DotBackground";
export function Hero() {
  return (
    <section className="hero" id="top">
      <DotBackground />
      <div className="hero-inner">
        <div className="hero-meta" data-no-particles>
          <span>
            <i /> Software Developer · QA Tester
          </span>
          <span>PORTAFOLIO / 2026</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy" data-no-particles>
            <p className="eyebrow">HOLA, SOY JEFFREY RHENALS</p>
            <h1>
              Del primer boceto
              <br />
              al último <em>detalle.</em>
            </h1>
            <p className="hero-description">
              Desarrollo aplicaciones web y trabajo en calidad de software. Me
              interesa tanto lo que una persona ve como lo que debe funcionar
              detrás.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                Explorar proyectos <Arrow />
              </a>
              <a className="text-link" href="#about">
                Un poco sobre mí <Arrow diagonal />
              </a>
            </div>
          </div>
          <div className="engineering-note" data-no-particles>
            <div className="note-top">
              <span>MI FORMA DE CONSTRUIR</span>
              <span>01—04</span>
            </div>
            <ol>
              {[
                ["Entender.", "El problema antes del código."],
                ["Construir.", "Interfaz, API y datos conectados."],
                ["Comprobar.", "También lo que puede salir mal."],
                ["Refinar.", "Claridad en cada interacción."],
              ].map(([title, text], i) => (
                <li key={title}>
                  <span>0{i + 1}</span>
                  <div>
                    <strong>{title}</strong>
                    <small>{text}</small>
                  </div>
                  <b>↗</b>
                </li>
              ))}
            </ol>
            <div className="note-bottom">
              <span>UI / BACKEND / QA</span>
              <span className="note-star">✳</span>
            </div>
          </div>
        </div>
        <div className="hero-bottom" data-no-particles>
          <span>DISEÑO CON INTENCIÓN. CÓDIGO CON CRITERIO.</span>
          <a href="#projects">
            Continúa explorando <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
