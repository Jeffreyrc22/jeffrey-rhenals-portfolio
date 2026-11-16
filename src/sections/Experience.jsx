const experience = [
  { company: "Freelance", role: "Desarrollador Full-Stack", period: "2024 — ACTUALIDAD", current: true, description: "Desarrollo de soluciones web, integración de APIs y trabajo con bases de datos. Automatización de tareas y mejora de funcionalidades con Python y JavaScript.", tools: ["Python", "JavaScript", "APIs REST"] },
  { company: "NEORIS", role: "Trainee Developer", period: "AGO 2023 — FEB 2024", description: "Apoyo en el desarrollo de aplicaciones web, integración de APIs REST y trabajo con bases de datos, en colaboración con el equipo de desarrollo.", tools: ["Frontend", "Backend", "Git"] },
  { company: "BCG DMC Private Company", role: "QA Tester", period: "2 MESES", description: "Pruebas de aplicaciones web y registro de incidencias en Excel. Comunicación de hallazgos con el equipo mediante Discord y uso de Git para el seguimiento del desarrollo.", tools: ["Excel", "Discord", "Web", "Git"] },
];

export function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <div><p className="eyebrow">03 / EXPERIENCIA</p><h2>Desarrollo y calidad.<br /><em>En cada etapa.</em></h2></div>
        <p>Experiencia construyendo soluciones web, colaborando con equipos y comprobando que cada funcionalidad responda a lo que necesita el usuario.</p>
      </div>
      {experience.map(item => <article className="experience-row" key={item.company}>
        <div className="experience-period">{item.current && <span className="status-dot" />}{item.period}</div>
        <div className="experience-description"><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p>{item.description}</p><ul className="tags" aria-label={`Herramientas en ${item.company}`}>{item.tools.map(tool => <li key={tool}>{tool}</li>)}</ul></div>
        <span className="experience-tag">{item.role === "QA Tester" ? "CALIDAD DE SOFTWARE" : "DESARROLLO DE SOFTWARE"}</span>
      </article>)}
    </section>
  );
}
