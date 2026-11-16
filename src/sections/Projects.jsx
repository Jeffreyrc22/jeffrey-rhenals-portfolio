import { projects } from "../data/portfolio";
import { Arrow } from "../components/Arrow";
export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / TRABAJO SELECCIONADO</p>
          <h2>
            Cuatro proyectos.
            <br />
            <em>Problemas distintos.</em>
          </h2>
        </div>
        <p>
          Comercio electrónico, gestión logística, comunicación institucional
          y experiencias de acceso. Distintos problemas, un mismo cuidado por el detalle.
        </p>
      </div>
      <div className="project-list">
        {projects.map((p) => (
          <article className={`project ${p.id}`} key={p.id}>
            <div className="project-preview">
              <img
                src={p.image}
                alt={`${p.illustration ? "Ilustración conceptual de" : "Interfaz de"} ${p.name}`}
                loading="lazy"
                width="1280"
                height="720"
              />
              <span className="preview-label">{p.illustration ? "Ilustración conceptual · " : ""}{p.category}</span>
            </div>
            <div className="project-content">
              <div className="project-topline">
                <span>PROYECTO {p.number}</span>
                <span>{p.kind || "FULL-STACK"}</span>
              </div>
              <h3>{p.name}</h3>
              <p className="project-subtitle">{p.subtitle}</p>
              <p className="project-description">{p.description}</p>
              <ul className="tags" aria-label="Tecnologías">
                {p.stack.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <div className="project-actions">
                {p.repository && <a
                  className="repository-link"
                  href={p.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver código de ${p.name} en GitHub (abre en otra pestaña)`}
                >
                  Ver código en GitHub <Arrow diagonal />
                </a>}
                {p.liveUrl && (
                  <a
                    className="repository-link live-project-link"
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir ${p.name} desplegado (abre en otra pestaña)`}
                  >
                    Ver proyecto <Arrow diagonal />
                  </a>
                )}
              </div>
              <details className="case-study">
                <summary>
                  Arquitectura y alcance <Arrow diagonal />
                </summary>
                <div className="case-content">
                  <h4>El problema</h4>
                  <p>{p.challenge}</p>
                  <h4>Decisiones técnicas</h4>
                  <ul>
                    {p.decisions.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <h4>Alcance</h4>
                  <p>{p.scope}</p>
                </div>
              </details>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

