export type Language = "es" | "en"

// Para datos con texto en ambos idiomas (proyectos, grupos de skills)
export type Localized = Record<Language, string>

const es = {
  nav: {
    brand: "Portafolio Felipe",
    home: "Inicio",
    about: "Sobre mí",
    skills: "Habilidades",
    projects: "Proyectos",
    contact: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    switchLanguage: "Cambiar a inglés",
  },
  hero: {
    greeting: "Hola, soy Felipe 👋",
    title: "Desarrollador de Software Backend",
    description:
      "Me gusta construir aplicaciones, aprender nuevas tecnologías y convertir ideas en soluciones útiles.",
    projectsBtn: "Ver proyectos",
  },
  about: {
    title: "Sobre mí",
    p1: "Soy estudiante de Desarrollo de Software enfocado en backend. Disfruto construir APIs REST y aplicaciones backend con Java, Spring Boot y PostgreSQL.",
    p2: "Disfruto convertir ideas en soluciones prácticas y mejorar continuamente la forma en que construyo software.",
    p3: "Soy adaptable, disfruto aprender nuevas tecnologías y aprendo rápido. Actualmente me enfoco en fortalecer mis habilidades de desarrollo de software y en construir proyectos prácticos.",
    imageAlt: "Desarrollo backend",
    location: "Ubicación",
    locationValue: "Colombia",
    education: "Educación",
    educationValue: "Tecnólogo en Desarrollo de Software",
    english: "Inglés",
    englishValue: "B1",
    experience: "Experiencia",
    experienceValue: "Prácticas profesionales (TIGO)",
  },
  skills: {
    title: "Habilidades",
  },
  projects: {
    title: "Proyectos",
    description:
      "Algunos de los proyectos que he desarrollado mientras aprendo, experimento y fortalezco mis habilidades en desarrollo de software.",
    demo: "Ver demo",
  },
  contact: {
    title: "Contacto",
    description:
      "Estoy abierto a nuevas oportunidades, proyectos y colaboraciones. No dudes en conectar conmigo a través de mis perfiles.",
  },
  footer: {
    thanks: "Gracias por visitar mi espacio. 🚀",
    description:
      "Un pequeño sitio para compartir lo que voy construyendo, mientras aprendo y disfruto el camino.",
    backToTop: "Volver arriba",
    rights: "Todos los derechos reservados.",
  },
}

// "typeof es" obliga a que el inglés tenga exactamente las mismas claves:
// si olvidas una traducción, TypeScript te lo marca.
const en: typeof es = {
  nav: {
    brand: "Felipe's Portfolio",
    home: "Home",
    about: "About Me",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    switchLanguage: "Switch to Spanish",
  },
  hero: {
    greeting: "Hi, I'm Felipe 👋",
    title: "Backend Software Developer",
    description:
      "I enjoy building applications, learning new technologies and turning ideas into useful solutions.",
    projectsBtn: "View projects",
  },
  about: {
    title: "About Me",
    p1: "I'm a Software Development student focused on backend development. I enjoy building REST APIs and backend applications using Java, Spring Boot and PostgreSQL.",
    p2: "I enjoy turning ideas into practical solutions and continuously improving the way I build software.",
    p3: "I'm adaptable, enjoy learning new technologies and learn quickly. I'm currently focused on strengthening my software development skills and building practical projects.",
    imageAlt: "Backend development",
    location: "Location",
    locationValue: "Colombia",
    education: "Education",
    educationValue: "Software Development Technologist",
    english: "English",
    englishValue: "B1",
    experience: "Experience",
    experienceValue: "Professional internship (TIGO)",
  },
  skills: {
    title: "Skills",
  },
  projects: {
    title: "Projects",
    description:
      "Some of the projects I've built while learning, experimenting and strengthening my software development skills.",
    demo: "View demo",
  },
  contact: {
    title: "Contact",
    description:
      "I'm open to new opportunities, projects and collaborations. Feel free to connect with me through my social profiles.",
  },
  footer: {
    thanks: "Thanks for visiting my space. 🚀",
    description:
      "A small site to share what I'm building, while I learn and enjoy the journey.",
    backToTop: "Back to top",
    rights: "All rights reserved.",
  },
}

export type Translations = typeof es

export const translations: Record<Language, Translations> = { es, en }