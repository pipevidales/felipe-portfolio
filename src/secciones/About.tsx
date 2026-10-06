import aboutImage from "../imagenes/ImagenProgramador.png"
import SectionTitle from "../componentes/SectionTitle"
import { useLanguage } from "../i18n/Uselanguage"

function About() {
  const { t } = useLanguage()

  const info = [
    { label: t.about.location, value: t.about.locationValue },
    { label: t.about.education, value: t.about.educationValue },
    { label: t.about.english, value: t.about.englishValue },
    { label: t.about.experience, value: t.about.experienceValue },
  ]

  return (
    <section id="about" className="w-full scroll-mt-10 py-24">

      {/* Título: ocupa todo el ancho, igual que Skills */}
      <SectionTitle>{t.about.title}</SectionTitle>

      {/* Contenido: centrado y con ancho limitado */}
      <div className="mx-auto mt-16 grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">

        {/* Columna izquierda: todo centrado */}
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
          <p className="text-lg leading-relaxed text-gray-300">{t.about.p1}</p>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">{t.about.p2}</p>

          <dl className="mt-10 grid w-full grid-cols-1 gap-x-10 gap-y-6 border-t border-gray-800 pt-8 sm:grid-cols-2">
            {info.map(({ label, value }) => (
              <div key={label} className="text-center">
                <dt className="text-sm text-blue-400">{label}</dt>
                <dd className="mt-1 font-medium text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Columna derecha: imagen + texto centrados */}
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-10 text-center">
          <img
            src={aboutImage}
            alt={t.about.imageAlt}
            className="w-full max-w-xs rounded-2xl border border-blue-900/60 shadow-[0_0_50px_-12px] shadow-blue-600/40"
          />

          <p className="text-lg leading-relaxed text-gray-400">{t.about.p3}</p>
        </div>

      </div>
    </section>
  )
}

export default About