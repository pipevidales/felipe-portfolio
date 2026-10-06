import { skillGroups } from "../data/skills"
import SectionTitle from "../componentes/SectionTitle"

function Skills() {
  return (
    <section
      id="skills"
      className="flex min-h-screen w-full scroll-mt-10 flex-col py-24"
    >
      {/* Título a todo el ancho, igual que las demás secciones */}
      <SectionTitle>Skills</SectionTitle>

      {/* Contenido centrado horizontal y verticalmente */}
      <div className="flex flex-1 items-center py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 md:grid-cols-3 lg:gap-16">

          {skillGroups.map((group) => (
            <div key={group.title} className="text-center">

              <h3 className="text-lg font-semibold text-gray-200">
                {group.title}
              </h3>
              <div className="mx-auto mb-6 mt-3 h-0.5 w-10 rounded-full bg-blue-700" />

              <ul className="flex flex-wrap justify-center gap-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-blue-900/60 bg-blue-950/40 px-4 py-2 text-sm text-blue-200 transition duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:bg-blue-900/40 hover:text-white motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:text-base"
                  >
                    {skill}
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Skills