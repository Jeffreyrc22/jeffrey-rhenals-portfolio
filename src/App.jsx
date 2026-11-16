import { DotBackground } from "./components/DotBackground";
import { Navbar } from "./layout/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <div className="particle-surface light-surface">
          <DotBackground theme="light" />
          <Projects />
        </div>
        <div className="particle-surface light-surface">
          <DotBackground theme="light" />
          <About />
        </div>
        <div className="particle-surface light-surface">
          <DotBackground theme="light" />
          <Experience />
        </div>
        <Contact />
      </main>
    </>
  );
}
