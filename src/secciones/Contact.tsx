import SectionTitle from "../componentes/SectionTitle"
import { useLanguage } from "../i18n/useLanguage"

function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="w-full scroll-mt-10 py-24">

      {/* Título a todo el ancho, igual que las demás secciones */}
      <SectionTitle>{t.contact.title}</SectionTitle>

      {/* Contenido centrado */}
      <div className="mx-auto mt-16 w-full max-w-4xl px-6">

        <div className="rounded-2xl border border-blue-900/50 bg-gray-900/40 px-6 py-12 text-center md:px-12">

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-400">
            {t.contact.description}
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="https://www.linkedin.com/in/felipe-vidales-tabares-1533a3425/?isSelfProfile=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-3 rounded-lg border border-gray-700 px-7 py-3.5 text-base font-semibold text-white transition duration-200 hover:scale-105 hover:border-blue-600 hover:bg-gray-800 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>

            <a
              href="mailto:pipevidalest08@gmail.com"
              className="inline-flex cursor-pointer items-center gap-3 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-gray-950 shadow-lg shadow-blue-600/20 transition duration-200 hover:scale-105 hover:bg-gray-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact