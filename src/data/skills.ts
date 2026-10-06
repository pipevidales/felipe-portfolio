import type { Localized } from "../i18n/Translations"

export type SkillGroup = {
  id: string
  title: Localized
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: "backend",
    title: { es: "Backend", en: "Backend" },
    skills: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "Hibernate / JPA",
      "Spring Security",
      "JWT",
    ],
  },
  {
    id: "frontend",
    title: { es: "Frontend", en: "Frontend" },
    skills: ["React", "Tailwind", "Vite", "TypeScript"],
  },
  {
    id: "tools",
    title: { es: "Herramientas y otros", en: "Tools & Other" },
    skills: ["REST APIs", "Git", "GitHub", "Postman", "Python"],
  },
]