import aboutImage from "../imagenes/ImagenProgramador.png"
import SectionTitle from "../componentes/SectionTitle"

const info = [
  { label: "Ubicación", value: "Colombia" },
  { label: "Educación", value: "Tecnólogo Desarrollo de Software" },
  { label: "Inglés", value: "B1" },
  { label: "Experiencia", value: "Prácticas profesionales (TIGO)" },
]

function About() {
  return (
    <section id="about" className="w-full py-24">

      {/* Título: ocupa todo el ancho, igual que Skills */}
      <SectionTitle>About Me</SectionTitle>

      {/* Contenido: centrado y con ancho limitado */}
      <div className="mx-auto mt-16 grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 lg:gap-24">

        {/* Columna izquierda: todo centrado */}
        <div className="mx-auto flex w-full max-w-xl flex-col items-center text-center">
          <p className="text-lg leading-relaxed text-gray-300">
            I'm a Software Development student focused on backend
            development. I enjoy building REST APIs and backend
            applications using Java, Spring Boot and PostgreSQL.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-gray-400">
            I enjoy turning ideas into practical solutions and
            continuously improving the way I build software.
          </p>

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
            alt="Backend development"
            className="w-full max-w-xs rounded-2xl border border-blue-900/60 shadow-[0_0_50px_-12px] shadow-blue-600/40"
          />

          <p className="text-lg leading-relaxed text-gray-400">
            I'm adaptable, enjoy learning new technologies and learn
            quickly. I'm currently focused on strengthening my software
            development skills and building practical projects.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About