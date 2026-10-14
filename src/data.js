// Edita aquí tu información. Todo el sitio se arma con estos datos.

export const perfil = {
  nombre: 'Maicol',
  nombreCompleto: 'Maicol David Siachoque Cubides',
  rol: 'Ingeniero de Sistemas',
  bio: 'Desarrollador de software enfocado en interfaces web con React y JavaScript. También programo en C# y Python, y me especializo en seguridad informática.',
  // Pon tu foto en la carpeta public/ (por ejemplo public/foto.png) y escribe 'foto.png' aquí
  foto: null,
  ciudad: 'Sogamoso, Boyacá',
  zonaHoraria: 'America/Bogota',
  modalidad: 'Presencial o remoto',
  correo: 'maicoldavidsc@gmail.com',
  matricula: '091122-0845418 CND',
  idiomas: ['Español (nativo)', 'Inglés (B2)'],
  // Tu ID de usuario de Discord, para mostrar lo que escuchas en Spotify (ver README)
  discordId: '394697632284672001',
}

export const redes = [
  { nombre: 'GitHub', url: 'https://github.com/MaicolDSC', icono: 'github' },
  { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/maicoldsc', icono: 'linkedin' },
  { nombre: 'Correo', url: 'mailto:maicoldavidsc@gmail.com', icono: 'mail' },
]

export const tecnologias = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vite',
  'Node.js / npm', 'APIs REST', 'Git / GitHub', 'C# (POO)', 'Python',
  'Power BI', 'Excel avanzado', 'MySQL', 'MongoDB',
  'Packet Tracer', 'Redes IPv4 y subredes', 'CRM / tickets',
]

export const proyectos = [
  {
    titulo: 'Portafolio personal',
    descripcion: 'SPA responsive con tema claro/oscuro y navegación entre secciones. Muestra en tiempo real mi actividad de Spotify con la API de Lanyard vía Discord.',
    etiquetas: ['React', 'Tailwind', 'Vite', 'JavaScript', 'Git'],
    url: 'https://github.com/MaicolDSC',
  },
]

export const experiencia = [
  {
    cargo: 'Monitor de Contact Center',
    lugar: 'UNAD',
    descripcion: 'Diagnóstico y resolución de incidencias técnicas en plataformas web y CRM, documentación de casos y comunicación clara con los usuarios.',
    fecha:['Presencial · 03/2026 — 08/2026', 'Remoto · 04/2025 — 02/2026'],
  },
]

export const educacion = [
  { titulo: 'Especialización en Seguridad Informática', lugar: 'UNAD', fecha: '02/2026 — Presente', actual: true },
  { titulo: 'Ingeniería de Sistemas', lugar: 'Universidad Nacional Abierta y a Distancia', fecha: '02/2022 — 08/2026' },
]

export const certificados = [
  { nombre: 'Introduction to Cybersecurity', entidad: 'Cisco', fecha: 'feb 2026' },
  { nombre: 'Data Analysis with Python', entidad: 'IBM', fecha: 'oct 2025' },
  { nombre: 'Python for Data Science', entidad: 'Fractal', fecha: 'sep 2025' },
  { nombre: 'Crash Course on Python', entidad: 'Google', fecha: 'ago 2025' },
  { nombre: 'Gestión de Cursos y Herramientas Didácticas en AVA', entidad: 'UNAD', fecha: '2025' },
]

// Página "Herramientas": lo que usas a diario. Agrega o quita lo que quieras.
export const herramientas = [
  {
    categoria: 'Hardware',
    icono: '💻',
    items: [
      { nombre: 'HP Pavilion Gaming 15', detalle: 'Mi portátil para programar y estudiar' },
      { nombre: 'AMD Ryzen 5 4600H', detalle: 'Procesador de 6 núcleos' },
      { nombre: 'NVIDIA GTX 1650 Ti', detalle: 'Tarjeta gráfica' },
      { nombre: '8 GB RAM · SSD NVMe', detalle: 'Memoria y almacenamiento' },    ],
  },
  {
    categoria: 'Desarrollo',
    icono: '🛠️',
    items: [
      { nombre: 'Visual Studio Code', detalle: 'Editor de código principal' },      { nombre: 'Git y GitHub', detalle: 'Control de versiones' },
      { nombre: 'Node.js', detalle: 'Para correr proyectos con React y Vite' },      { nombre: 'ChatGPT · Claude', detalle: 'IA para resolver dudas y apoyar el desarrollo' },
      { nombre: 'Claude Code', detalle: 'Asistente de programación con IA en VS Code' },
    ],
  },
  {
    categoria: 'Seguridad y redes',
    icono: '🔒',
    items: [
      { nombre: 'Kali Linux · Parrot OS', detalle: 'Distribuciones para pruebas de seguridad' },      { nombre: 'Nmap', detalle: 'Escaneo de puertos y redes' },      { nombre: 'VirtualBox · VMware', detalle: 'Máquinas virtuales para laboratorios' },
      { nombre: 'Cisco Packet Tracer', detalle: 'Simulación de redes' },
    ],
  },
  {
    categoria: 'Datos y productividad',
    icono: '⚡',
    items: [
      { nombre: 'Power BI', detalle: 'Tableros y reportes' },
      { nombre: 'Excel', detalle: 'Macros y tablas dinámicas' },
      { nombre: 'Discord', detalle: 'Comunidades y estado de Spotify' },
      { nombre: 'Spotify', detalle: 'Música para concentrarme' },
    ],
  },
  {
    categoria: 'Soporte y atención',
    icono: '🎧',
    items: [
      { nombre: 'Clientify', detalle: 'CRM y gestión de tickets' },
      { nombre: 'Scarlet', detalle: 'Atención multicanal a estudiantes' },
      { nombre: 'Microsoft Teams · Zoom', detalle: 'Reuniones y trabajo remoto' },
      { nombre: 'Google Workspace', detalle: 'Correo, documentos y hojas de cálculo' },
    ],
  },]
