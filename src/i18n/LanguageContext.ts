import { createContext } from "react"
import type { Language, Translations } from "../i18n/Translations"

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  t: Translations
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)