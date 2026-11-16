import { useState } from "react";
import { DotBackground } from "../components/DotBackground";
import { profile } from "../data/portfolio";
import { Arrow } from "../components/Arrow";
export function Contact() {
  const [status, setStatus] = useState("idle");
  async function sendMessage(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const fields = new FormData(form);
    if (fields.get("_honey")) return;
    setStatus("sending");
    try {
      const response = await fetch(
        `https://formsubmit.co/ajax/${profile.email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(Object.fromEntries(fields)),
          signal: AbortSignal.timeout(20000),
        },
      );
      const result = await response.json();
      if (
        !response.ok ||
        (result.success !== true && result.success !== "true")
      )
        throw new Error("Send failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  const links = [
    ["GitHub", profile.github],
    ["LinkedIn", profile.linkedin],
  ].filter(([, url]) => url);
  return (
    <section id="contact" className="contact-section particle-surface">
      <DotBackground />
      <div className="contact-inner">
        <p className="eyebrow">04 / SIGUIENTE PASO</p>
        <h2>
          El buen software
          <br />
          empieza con una
          <br />
          <em>buena conversación.</em>
        </h2>
        <div className="contact-form-layout">
          <div className="contact-intro">
            <h3>Cuéntame qué tienes en mente.</h3>
            <p>
              Una oportunidad profesional, una colaboración o un proyecto que
              necesita tomar forma.
            </p>
            <a href={`mailto:${profile.email}`}>
              {profile.email} <Arrow diagonal />
            </a>
          </div>
          <form
            data-no-particles
            className="contact-form"
            onSubmit={sendMessage}
            aria-label="Formulario de contacto"
            aria-busy={status === "sending"}
          >
            <input
              type="hidden"
              name="_subject"
              value="Nuevo contacto desde el portafolio de Jeffrey"
            />
            <div className="form-trap" aria-hidden="true">
              <label>
                Dejar vacío
                <input name="_honey" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="form-row">
              <label>
                Tu nombre
                <input
                  name="name"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="¿Cómo te llamas?"
                />
              </label>
              <label>
                Correo electrónico
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={254}
                  placeholder="nombre@empresa.com"
                />
              </label>
            </div>
            <label>
              Tu mensaje
              <textarea
                name="message"
                required
                minLength={10}
                maxLength={4000}
                rows={5}
                placeholder="Háblame de tu proyecto o de la oportunidad…"
              />
            </label>
            <p className="form-privacy">
              Usaré tus datos para responder a tu consulta. FormSubmit procesa
              el envío del mensaje.
            </p>
            <button
              className="button primary"
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Enviando…" : "Enviar mensaje"}{" "}
              <Arrow diagonal />
            </button>
            <p className="form-feedback" role="status" aria-live="polite">
              {status === "success"
                ? "El servicio ha recibido tu mensaje. Gracias por escribirme."
                : status === "error"
                  ? "No se pudo confirmar el envío. Conservamos tu mensaje; puedes reintentar o escribirme directamente por correo."
                  : ""}
            </p>
          </form>
        </div>
        <div className="contact-bottom">
          <p>
            Mi trabajo, mi enfoque y las decisiones detrás de cada proyecto,
            reunidos en un solo lugar.
          </p>
          <div className="contact-actions">
            {profile.email && (
              <a className="button primary" href={`mailto:${profile.email}`}>
                Escríbeme <Arrow diagonal />
              </a>
            )}
            <a
              className="button outline"
              href="/perfil-jeffrey-rhenals.txt"
              download
            >
              Descargar perfil <Arrow diagonal />
            </a>
            {links.map(([label, url]) => (
              <a key={label} href={url} target="_blank" rel="noreferrer">
                {label} <Arrow diagonal />
              </a>
            ))}
          </div>
        </div>
      </div>
      <footer>
        <span>
          Jeffrey Rhenals<span className="footer-dot">.</span>
        </span>
        <small>
          © {new Date().getFullYear()} · Hecho con atención al detalle.
        </small>
        <a href="#top">Volver arriba ↑</a>
      </footer>
    </section>
  );
}
