export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / EXPERIENCIA</p>
          <h2>
            La calidad también
            <br />
            <em>se construye.</em>
          </h2>
        </div>
        <p>
          Desarrollo y QA son dos formas complementarias de entender un
          producto: cómo funciona y dónde necesita mejorar.
        </p>
      </div>
      <article className="experience-row">
        <div className="experience-period">
          <span className="status-dot" /> OCTUBRE — ACTUALIDAD
        </div>
        <div>
          <h3>QA Tester</h3>
          <p>BCG DMC Private Company</p>
        </div>
        <span className="experience-tag">CALIDAD DE SOFTWARE</span>
      </article>
      <article className="experience-row neoris-experience">
        <div className="experience-period">AGO 2023 — FEB 2024</div>
        <div>
          <h3>Trainee Developer</h3>
          <p>NEORIS</p>
        </div>
        <span className="experience-tag">DESARROLLO DE SOFTWARE</span>
      </article>
      <article className="experience-row">
        <div className="experience-period">TRABAJO INDEPENDIENTE</div>
        <div>
          <h3>Desarrollador de software</h3>
          <p>Freelancer</p>
        </div>
        <span className="experience-tag">DESARROLLO DE SOFTWARE</span>
      </article>
      <div className="practice-notes">
        {[
          [
            "Flujos completos",
            "Desde la interacción en pantalla hasta la respuesta del servidor y los datos guardados.",
          ],
          [
            "Estados que importan",
            "Errores, permisos, cargas y casos límite forman parte del diseño de una función.",
          ],
          [
            "Decisiones explicables",
            "Documentar el porqué facilita revisar, mantener y ampliar un proyecto.",
          ],
        ].map(([title, text], i) => (
          <div key={title}>
            <span>ENFOQUE / 0{i + 1}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
