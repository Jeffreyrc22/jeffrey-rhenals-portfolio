import { useEffect, useRef } from "react";
export function DotBackground({ theme = "dark" }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current,
      host = canvas.parentElement,
      ctx = canvas.getContext("2d"),
      reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let pointer = null,
      frame = 0;
    const draw = () => {
      frame = 0;
      const rect = host.getBoundingClientRect(),
        ratio = Math.min(devicePixelRatio || 1, 2);
      const width = Math.round(rect.width * ratio),
        height = Math.round(rect.height * ratio);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      ctx.clearRect(0, 0, rect.width, rect.height);
      for (let x = 14; x < rect.width; x += 26)
        for (let y = 14; y < rect.height; y += 26) {
          const d = pointer ? Math.hypot(pointer.x - x, pointer.y - y) : 1000,
            s = reduced.matches ? 0 : Math.max(0, 1 - d / 160);
          ctx.fillStyle = `rgba(${theme === "light" ? "49,112,86" : "125,211,183"},${(theme === "light" ? 0.07 : 0.09) + s * 0.6})`;
          ctx.beginPath();
          ctx.arc(x, y, 0.65 + s * 1.9, 0, Math.PI * 2);
          ctx.fill();
        }
      host
        .querySelectorAll(
          "[data-no-particles], h2, h3, p, a, button, .project, .technology-panel, .experience-row, .practice-notes, footer",
        )
        .forEach((el) => {
          const b = el.getBoundingClientRect();
          ctx.clearRect(
            b.left - rect.left - 12,
            b.top - rect.top - 12,
            b.width + 24,
            b.height + 24,
          );
        });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw);
    };
    const move = (e) => {
      const r = host.getBoundingClientRect();
      pointer = { x: e.clientX - r.left, y: e.clientY - r.top };
      schedule();
    };
    const leave = () => {
      pointer = null;
      schedule();
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(host);
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    reduced.addEventListener("change", schedule);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      reduced.removeEventListener("change", schedule);
    };
  }, [theme]);
  return (
    <canvas className="dot-background" ref={canvasRef} aria-hidden="true" />
  );
}
