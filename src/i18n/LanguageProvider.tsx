import { useEffect, useMemo, useState, type ReactNode } from "react"
import { LanguageContext } from "../i18n/LanguageContext"
import { translations, type Language } from "../i18n/Translations"

const STORAGE_KEY = "language"

// 1) idioma guardado  2) idioma del navegador  3) español por defecto
function getInitialLanguage(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === "es" || saved === "en") return saved
  } catch {
    // localStorage puede no estar disponible; seguimos con el idioma del navegador
  }
  return navigator.language.toLowerCase().startsWith("en") ? "en" : "es"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // se ignora: el idioma simplemente no se recordará
    }
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((l) => (l === "es" ? "en" : "es")),
      t: translations[language],
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}