export const profile = {
  name: "Jeffrey Rhenals",
  email: "jeffreyrc20@gmail.com",
  github: "https://github.com/Jeffreyrc22",
  linkedin: "",
};
export const projects = [
  {
    id: "aurum",
    liveUrl: "https://aurum-coffee-pxik.onrender.com",
    repository: "https://github.com/Jeffreyrc22/aurum-coffee",
    number: "01",
    name: "AURUM Coffee",
    category: "E-commerce",
    subtitle:
      "Comercio electrónico con control transaccional de pedidos e inventario.",
    description:
      "Aplicación full-stack para una tienda de café: catálogo filtrable, cuentas de cliente, carrito e historial de pedidos. Una API en Spring Boot valida precios, permisos y disponibilidad; PostgreSQL conserva los pedidos y los movimientos de inventario.",
    image: "/projects/aurum.png",
    stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL"],
    challenge:
      "Un carrito puede estar desactualizado al confirmar. La interfaz debe explicar lo que ocurre y el servidor debe impedir pedidos duplicados y ventas sin existencias.",
    decisions: [
      "Precios calculados en el servidor y bloqueo transaccional del inventario.",
      "Confirmación idempotente: reintentar una petición no duplica el pedido.",
      "Componentes reutilizables, estados de carga y navegación adaptable.",
    ],
    scope:
      "Catálogo con filtros, autenticación, historial de pedidos y administración. El checkout guarda pedidos de demostración: no cobra ni realiza envíos.",
  },
  {
    id: "logicore",
    liveUrl: "https://logicore-p1nx.onrender.com",
    repository: "https://github.com/Jeffreyrc22/logicore",
    number: "02",
    name: "LogiCore",
    category: "Operaciones",
    subtitle:
      "Gestión logística, documentación privada y trazabilidad operativa.",
    description:
      "Aplicación de gestión con Angular y una API Java: reúne operaciones logísticas, documentos, inventario y reportes. El backend aplica permisos por rol y por operación, valida los cambios de estado y registra un historial auditable en PostgreSQL.",
    image: "/projects/logicore.png",
    stack: ["Angular", "TypeScript", "Java", "PostgreSQL"],
    challenge:
      "Un operador necesita ver lo que tiene asignado, los documentos deben conservar su privacidad y los cambios de estado deben respetar el proceso.",
    decisions: [
      "Autorización por rol y por operación aplicada en el backend.",
      "Historial de estados, auditoría y movimientos de inventario transaccionales.",
      "Dashboard y reportes calculados desde registros de PostgreSQL.",
    ],
    scope:
      "Operaciones, documentos, inventario, contactos, usuarios y reportes. La recuperación por correo requiere un servidor SMTP configurado.",
  },
  {
    id: "rotary",
    number: "03",
    name: "Imagen Pública Rotary Zona 25A",
    category: "Sitio institucional",
    kind: "FRONTEND",
    subtitle: "Campañas, iniciativas y recursos en una experiencia institucional.",
    description: "Desarrollo frontend con React y Vite para la página de inicio de Imagen Pública Rotary Zona 25A. Incluye navegación, secciones informativas, galerías y recursos institucionales, con estilos adaptados a su identidad visual.",
    image: "/projects/rotary.svg",
    illustration: true,
    stack: ["React", "Vite", "JavaScript", "CSS"],
    challenge: "Organizar contenidos institucionales para que las iniciativas, actividades y recursos sean fáciles de encontrar.",
    decisions: ["Componentes React para estructurar la interfaz.", "Vite y CSS para el desarrollo y la presentación adaptable."],
    scope: "Adaptación de la página de inicio. Las páginas secundarias siguen pendientes de alineación con Zona 25A. Repositorio privado; la imagen es conceptual.",
  },
  {
    id: "personality",
    number: "04",
    name: "Test de personalidad — 38° Lab",
    category: "Interfaz de acceso",
    kind: "FRONTEND",
    subtitle: "Una entrada clara y accesible al recorrido del test.",
    description: "Interfaz de acceso desarrollada con HTML, CSS y JavaScript. Formulario adaptable, validación de campos, foco en el primer error y estado de carga preparado para conectar el cuestionario.",
    image: "/projects/personality.svg",
    illustration: true,
    stack: ["HTML5", "CSS3", "JavaScript"],
    challenge: "Facilitar la entrada al cuestionario con un formulario comprensible y usable desde móvil o escritorio.",
    decisions: ["Validación accesible y foco en el primer campo con errores.", "Distribución adaptable sin dependencias de un framework."],
    scope: "Interfaz de acceso implementada. La integración del cuestionario y la persistencia de datos están pendientes; no se presenta como un test funcional completo. Repositorio privado e imagen conceptual.",
  },
];
export const technologies = [
  ["HTML5", "H5", "#f39975", "Estructura semántica"],
  ["CSS3", "C3", "#8ab9f0", "Diseño adaptable"],
  ["JavaScript", "JS", "#f3db72", "Interactividad web"],
  ["TypeScript", "TS", "#75a9ef", "Contratos y tipos"],
  ["React", "⚛", "#67d8ef", "Componentes y estado"],
  ["Angular", "A", "#f15b78", "Aplicaciones de gestión"],
  ["Tailwind CSS", "≈", "#58d1dd", "Sistemas de estilos"],
  ["Bootstrap", "B", "#c7a0ff", "Componentes responsive"],
  ["Python", "Py", "#e8cd72", "Desarrollo y automatización"],
  ["Django", "Dj", "#99cfad", "Aplicaciones web"],
  ["Java", "J", "#e7a36b", "Lógica de negocio"],
  ["Spring Boot", "S", "#94c575", "APIs y seguridad"],
  ["APIs REST", "API", "#8dd4cd", "Integración de servicios"],
  ["MongoDB", "M", "#91cf91", "Bases de datos documentales"],
  ["MySQL", "My", "#85bde0", "Bases de datos relacionales"],
  ["PostgreSQL", "PG", "#8daee0", "Datos y transacciones"],
  ["AWS", "aws", "#f1bf79", "Servicios en la nube"],
  ["Git", "G", "#ef9279", "Control de versiones"],
  ["GitHub", "GH", "#d7e1e8", "Repositorios y colaboración"],
].map(([name, mark, color, detail]) => ({ name, mark, color, detail }));

