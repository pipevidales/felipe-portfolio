import type { Localized } from "../i18n/Translations"

export type Project = {
  id: string
  title: Localized
  description: Localized
  technologies: string[]
  githubUrl: string
  demoUrl: string
}

export const projects: Project[] = [
  {
    id: "booking-system",
    title: {
      es: "Sistema de Reservas",
      en: "Booking System",
    },
    description: {
      es: "REST API para gestionar usuarios, negocios, servicios, empleados, horarios y reservas.",
      en: "REST API to manage users, businesses, services, employees, schedules and bookings.",
    },
    technologies: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    githubUrl: "https://github.com/pipevidales",
    demoUrl: "https://www.youtube.com/embed/VmfLN-9aHRM",
  },
  {
    id: "tigo-automation",
    title: {
      es: "Automatización Tigo",
      en: "Tigo Automation",
    },
    description: {
      es: "Automatización de procesos técnicos utilizando Python, APIs y análisis de información.",
      en: "Automation of technical processes using Python, APIs and data analysis.",
    },
    technologies: ["Python", "APIs", "Excel", "Google Colab"],
    githubUrl: "https://github.com/pipevidales",
    demoUrl: "https://www.youtube.com/embed/mbSp4gsKaU0",
  },
]