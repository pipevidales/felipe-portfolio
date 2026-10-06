import { useLanguage } from "../i18n/useLanguage"

function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage()

  const option = (code: "es" | "en") =>
    `rounded-md px-2.5 py-1 transition-colors duration-200 ${
      language === code ? "bg-blue-600 text-white" : "text-gray-400"
    }`

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t.nav.switchLanguage}
      className="inline-flex cursor-pointer items-center rounded-lg border border-gray-700 p-0.5 text-xs font-semibold transition hover:border-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
    >
      <span className={option("es")}>ES</span>
      <span className={option("en")}>EN</span>
    </button>
  )
}

export default LanguageToggle