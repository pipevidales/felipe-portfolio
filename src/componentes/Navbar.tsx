import { useEffect, useState } from "react"
import { useLanguage } from "../i18n/Uselanguage"
import LanguageToggle from "./LanguageToggle"

const links = [
  { href: "#hero", key: "home" },
  { href: "#about", key: "about" },
  { href: "#skills", key: "skills" },
  { href: "#projects", key: "projects" },
  { href: "#contact", key: "contact" },
] as const

function Navbar() {
  const { t } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [active, setActive] = useState("hero")

  const closeMenu = () => setIsMenuOpen(false)

  // Resalta el link de la sección que está en el centro de la pantalla
  useEffect(() => {
    const sections = links
      .map(({ href }) => document.querySelector(href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // Link de escritorio con subrayado azul animado
  const desktopLink = (id: string) =>
    `relative text-sm transition-colors duration-200 sm:text-base
     after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-blue-500 after:transition-transform after:duration-200
     hover:text-white hover:after:scale-x-100
     ${active === id ? "text-white after:scale-x-100" : "text-gray-400"}`

  return (
    <nav className="sticky top-0 z-40 border-b border-blue-900/40 bg-gray-950/70 backdrop-blur-md">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

        <a
          href="#hero"
          onClick={closeMenu}
          className="text-xl font-bold text-white transition-colors duration-200 hover:text-blue-400"
        >
          {t.nav.brand}
        </a>

        <div className="flex items-center gap-5 sm:gap-6">

          {/* Links de escritorio */}
          <div className="hidden gap-4 sm:flex sm:gap-6">
            {links.map(({ href, key }) => (
              <a key={href} href={href} className={desktopLink(href.slice(1))}>
                {t.nav[key]}
              </a>
            ))}
          </div>

          {/* Selector de idioma (visible también en móvil) */}
          <LanguageToggle />

          {/* Botón móvil */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="-m-1.5 cursor-pointer rounded-lg p-1.5 text-gray-300 transition hover:bg-gray-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:hidden"
            aria-label={isMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {isMenuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-blue-900/40 bg-gray-950/90 px-6 py-3 sm:hidden"
        >
          <div className="flex flex-col">
            {links.map(({ href, key }) => (
              <a
                key={href}
                href={href}
                onClick={closeMenu}
                className={`rounded-lg py-3 text-center transition-colors duration-200 hover:bg-gray-800/60 hover:text-white ${
                  active === href.slice(1) ? "font-semibold text-white" : "text-gray-400"
                }`}
              >
                {t.nav[key]}
              </a>
            ))}
          </div>
        </div>
      )}

    </nav>
  )
}

export default Navbar