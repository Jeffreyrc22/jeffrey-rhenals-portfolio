import { useRef } from "react";
import { technologies } from "../data/portfolio";
export function About() {
  const carousel = useRef(null);
  function move(direction) {
    const track = carousel.current;
    track.scrollBy({
      left: direction * track.clientWidth * 0.85,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  return (
    <section id="about" className="section about-section">
      <div className="about-copy">
        <p className="eyebrow">02 / SOBRE MÍ</p>
        <h2>
          Construir bien.
          <br />
          <em>Mirar más allá.</em>
        </h2>
        <p>
          Me gusta llevar una idea hasta una aplicación que se pueda recorrer,
          usar y comprobar. Trabajo tanto la interfaz como las reglas que la
          sostienen: quién puede hacer qué, cómo se guardan los datos y qué
          ocurre cuando algo falla.
        </p>
        <p>
          Mi trabajo en QA también influye en cómo desarrollo. Un formulario no
          termina cuando se ve bien; termina cuando sus validaciones y estados
          ayudan a la persona a continuar.
        </p>
        <div className="about-signature">
          <span>JR.</span>
          <div>
            Jeffrey Rhenals<small>Desarrollo de software · Calidad</small>
          </div>
        </div>
      </div>
      <div className="technology-panel">
        <div className="technology-heading">
          <h3>Herramientas con propósito.</h3>
          <p>Tecnologías y herramientas que manejo.</p>
        </div>
        <div
          className="carousel-controls"
          aria-label="Controles de tecnologías"
        >
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Tecnologías anteriores"
            aria-controls="technology-track"
          >
            ←
          </button>
          <span>Explora mi stack</span>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Tecnologías siguientes"
            aria-controls="technology-track"
          >
            →
          </button>
        </div>
        <div
          className="technology-carousel"
          id="technology-track"
          ref={carousel}
          tabIndex={0}
          role="region"
          aria-label="Carrusel de tecnologías: desplaza para explorar"
        >
          {technologies.map((t) => (
            <div className="technology" key={t.name}>
              <span
                className="tech-mark"
                style={{ "--tech-color": t.color }}
                aria-hidden="true"
              >
                {t.mark}
              </span>
              <div>
                <strong>{t.name}</strong>
                <small>{t.detail}</small>
              </div>
            </div>
          ))}
        </div>
        <div className="technology-foot">
          También en el flujo: SQL · Maven · Docker Compose
        </div>
      </div>
    </section>
  );
}
