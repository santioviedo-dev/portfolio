type Project = {
  number: string;
  title: string;
  desc: string;
  impact?: string;
  img?: string;
  tags: string[];
  links: {
    label: string;
    icon: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    number: "001 — Producción",
    title: "ZoomTube",
    desc: "Pipeline de automatización completo que integra la API de Zoom y la API de YouTube con autenticación OAuth2. Descarga grabaciones, normaliza nombres y metadata, y las sube automáticamente sin intervención manual.",
    impact: "Redujo el flujo diario de 15–20 grabaciones de 1–2 hs a ~30 min",
    tags: ["Python", "Zoom API", "YouTube API", "OAuth2", "Pipeline"],
    links: [
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/santioviedo-dev/zoomtube",
      },
    ],
  },
  {
    number: "002 — Producción",
    title: "MailOps",
    desc: "Herramienta interna para operaciones masivas sobre cuentas de correo vía cPanel API: creación desde CSV/Excel, generación automática de credenciales y notificaciones SMTP con templates.",
    impact: "Eliminó gestión manual de ~800 cuentas durante migración",
    tags: ["Python", "cPanel API", "SMTP", "CSV/Excel"],
    links: [
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/santioviedo-dev/MailOps",
      },
    ],
  },
  {
    number: "003 — API REST",
    title: "Sandev Academy",
    desc: "Backend completo para una plataforma de gestión de cursos con Django REST Framework. Incluye autenticación JWT, roles (admin/profesor/alumno), cursos asincrónicos y sincrónicos, evaluaciones con corrección automática y manual, emisión de certificados por señales Django y mensajería interna por curso.",
    tags: ["Python", "Django", "DRF", "PostgreSQL", "JWT", "Supabase"],
    links: [
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/santioviedo-dev/sandev-academy-backend",
      },
    ],
  },
  {
    number: "004 — Web App",
    title: "Expense Tracker",
    desc: "Aplicación web con Flask y PostgreSQL para seguimiento de gastos personales con autenticación y CRUD completo. Permite categorizar gastos y visualizar estadísticas mensuales.",
    img: "/assets/img/expensetracker.png",
    tags: ["Python", "Flask", "Tailwind CSS", "PostgreSQL"],
    links: [
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/santioviedo-dev/expensetracker",
      },
      {
        label: "Demo",
        icon: "external",
        href: "https://expensetracker-santioviedo.vercel.app/",
      },
    ],
  },
  {
    number: "005 — Web App",
    title: "Sistema de Reservas",
    desc: "Sistema fullstack para gestión de turnos de canchas deportivas con login, validaciones de disponibilidad, CRUD completo y filtros.",
    img: "/assets/img/reservations.png",
    tags: ["PHP", "MySQL", "JavaScript", "BulmaCSS"],
    links: [
      {
        label: "GitHub",
        icon: "github",
        href: "https://github.com/santioviedo-dev/fields-reservations",
      },
    ],
  },
  {
    number: "006 — Frontend",
    title: "Proyectos JavaScript",
    desc: "Colección de proyectos frontend de práctica: formulario de tarjeta de crédito con animaciones CSS, to-do app con filtros, y calculadora con modo oscuro persistente.",
    img: "/assets/img/payment-details.png",
    tags: ["JavaScript", "HTML", "CSS"],
    links: [
      {
        label: "Ver en GitHub",
        icon: "github",
        href: "https://github.com/santioviedo-dev",
      },
    ],
  },
];
