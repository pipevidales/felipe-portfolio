import { useLanguage } from "../i18n/Uselanguage"

function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="w-full border-t border-blue-900/40 px-6 py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center text-center">

        <p className="text-base text-gray-300">
          {t.footer.thanks}
        </p>

        <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-500">
          {t.footer.description}
        </p>

        <a
          href="#hero"
          className="mt-6 inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-400 transition-colors duration-200 hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
          {t.footer.backToTop}
        </a>

        <p className="mt-6 text-xs text-gray-600">
          © {new Date().getFullYear()} Felipe. {t.footer.rights}
        </p>

      </div>
    </footer>
  )
}

export default Footer