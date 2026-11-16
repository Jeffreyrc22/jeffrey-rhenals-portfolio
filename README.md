# Jeffrey Rhenals — Portafolio

Portafolio en español con proyectos implementados, decisiones técnicas y experiencia profesional confirmada. React, Vite y CSS adaptable; no depende de servicios externos para renderizar.

## Desarrollo

```powershell
npm ci
npm run dev -- --host 127.0.0.1
npm run lint
npm run build
```

## Estructura

- `src/data/portfolio.js`: perfil, tecnologías, casos de estudio y enlaces verificados a GitHub y a los proyectos. LinkedIn permanece vacío hasta disponer de un enlace confirmado.
- `src/sections`: presentación, proyectos, enfoque, experiencia y contacto.
- `src/components/DotBackground.jsx`: animación de puntos; excluye las zonas `data-no-particles` y respeta movimiento reducido.
- `src/layout/Navbar.jsx`: navegación adaptable con menú móvil.
- `public/projects`: capturas reales de los proyectos.
- `public/perfil-jeffrey-rhenals.txt`: perfil descargable.

La experiencia de QA muestra BCG DMC Private Company, octubre–actualidad. No se ha inventado el año ni responsabilidades no confirmadas.

## Proyectos locales

- AURUM Coffee: `C:/Users/NEWPORT/Proyectos/AURUM Coffee`, interfaz en http://127.0.0.1:5174.
- LogiCore: `C:/Users/NEWPORT/Proyectos/LogiCore`, interfaz en http://127.0.0.1:4200.

Cada proyecto mantiene su frontend, API, base de datos, scripts y documentación.

## Proyectos publicados

- AURUM Coffee: https://aurum-coffee-pxik.onrender.com — código: https://github.com/Jeffreyrc22/aurum-coffee
- LogiCore: https://logicore-p1nx.onrender.com — código: https://github.com/Jeffreyrc22/logicore

Ambos se ejecutan en Render con PostgreSQL en Neon. Las instancias gratuitas pueden tardar en responder después de estar inactivas. AURUM no realiza cobros ni envíos reales. LogiCore requiere una cuenta autorizada; no se publican credenciales administrativas.

El formulario utiliza FormSubmit para enviar a jeffreyrc20@gmail.com. La aceptación del proveedor se comprobó; la entrega en el buzón y su activación deben confirmarse por el destinatario. También se ofrece un enlace de correo directo.

## Publicación y comprobaciones

Vercel utiliza `npm run build` y sirve `dist`, según `vercel.json`. Nunca subir `.runtime`, `.env`, dependencias o credenciales. `scripts/Test-Deployments.ps1` realiza comprobaciones de salud, sesión y permisos sin modificar los datos de negocio. Lee las credenciales exclusivamente desde un archivo local ignorado.
