import { useRef } from "react";
import { Arrow } from "./Arrow";

export function ProjectDetail({ project: p }) {
  const dialog = useRef(null);
  return <>
    <button className="project-detail-trigger" onClick={() => dialog.current.showModal()}>
      Explorar proyecto <Arrow diagonal />
    </button>
    <dialog ref={dialog} className="project-dialog" aria-labelledby={`detail-${p.id}`} onClick={e => { if (e.target === e.currentTarget) e.currentTarget.close(); }}>
      <div className="detail-shell">
        <header className="detail-toolbar">
          <span>PROYECTO {p.number} / {p.category}</span>
          <button className="detail-close" aria-label="Cerrar detalle del proyecto" onClick={() => dialog.current.close()}>✕</button>
        </header>
        <div className="detail-intro">
          <p className="eyebrow">{p.kind || "FULL-STACK"}</p>
          <h2 id={`detail-${p.id}`}>{p.name}</h2>
          <p>{p.subtitle}</p>
          <div className="project-actions">
            {p.liveUrl && <a className="repository-link live-project-link" href={p.liveUrl} target="_blank" rel="noopener noreferrer">Abrir proyecto <Arrow diagonal /></a>}
            {p.repository && <a className="repository-link" href={p.repository} target="_blank" rel="noopener noreferrer">Ver código en GitHub <Arrow diagonal /></a>}
          </div>
        </div>
        <figure className="detail-image"><img src={p.image} alt={`${p.illustration ? "Ilustración conceptual de" : "Interfaz de"} ${p.name}`} />{p.illustration && <figcaption>Ilustración conceptual del proyecto</figcaption>}</figure>
        <div className="detail-grid">
          <div><p className="eyebrow">01 / CONTEXTO</p><h3>El problema</h3><p>{p.challenge}</p><h3>Decisiones técnicas</h3><ul className="detail-decisions">{p.decisions.map(t => <li key={t}>{t}</li>)}</ul></div>
          <aside><p className="eyebrow">02 / IMPLEMENTACIÓN</p><h3>Tecnologías</h3><ul className="tags">{p.stack.map(t => <li key={t}>{t}</li>)}</ul><h3>Alcance del proyecto</h3><p>{p.scope}</p></aside>
        </div>
        <footer className="detail-footer"><span>Diseño, desarrollo y decisiones técnicas.</span><button className="repository-link" onClick={() => dialog.current.close()}>Volver a proyectos <span aria-hidden="true">↩</span></button></footer>
      </div>
    </dialog>
  </>;
}
