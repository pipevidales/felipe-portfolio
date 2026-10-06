type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  onDemoClick: () => void
}

function ProjectCard({
  title,
  description,
  technologies,
  githubUrl,
  onDemoClick,
}: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col items-center rounded-2xl border border-gray-800 bg-gray-900/60 p-8 text-center transition duration-200 hover:-translate-y-1 hover:border-blue-700/60 hover:bg-gray-900 motion-reduce:transition-none motion-reduce:hover:translate-y-0">

      <h3 className="mb-3 text-2xl font-bold text-white">{title}</h3>

      <p className="mb-6 leading-relaxed text-gray-400">{description}</p>

      {/* Tecnologías centradas */}
      <ul className="mb-8 flex flex-wrap justify-center gap-2">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-blue-900/60 bg-blue-950/40 px-3 py-1 text-sm text-blue-200"
          >
            {technology}
          </li>
        ))}
      </ul>

      {/* Botones centrados, siempre al fondo de la card */}
      <div className="mt-auto flex flex-wrap justify-center gap-3">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border  border-gray-700 px-5 py-2 text-xl font-medium text-gray-300 transition duration-200 hover:scale-105 hover:border-gray-500 hover:bg-gray-800 hover:text-white active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          GitHub
        </a>

        <button
          type="button"
          onClick={onDemoClick}
          className="cursor-pointer rounded-lg bg-white px-5 py-2 text-xl font-semibold text-gray-950 transition duration-200 hover:scale-105 hover:bg-gray-300 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        >
          Ver demo
        </button>
      </div>
    </article>
  )
}

export default ProjectCard