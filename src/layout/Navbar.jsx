import { useState } from "react";
import { Arrow } from "../components/Arrow";
const links = [
  ["#projects", "Proyectos"],
  ["#about", "Sobre mí"],
  ["#experience", "Experiencia"],
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a
          className="wordmark"
          href="#top"
          aria-label="Jeffrey Rhenals, inicio"
          onClick={() => setOpen(false)}
        >
          jr<span>.</span>
        </a>
        <span className="nav-note">DESARROLLO & CALIDAD</span>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Cerrar" : "Menú"}{" "}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          aria-label="Navegación principal"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setOpen(false);
              event.currentTarget.previousElementSibling?.focus();
            }
          }}
          className={open ? "is-open" : ""}
        >
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setOpen(false)}
          >
            Contacto <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
