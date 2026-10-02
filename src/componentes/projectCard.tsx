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
    <article className="group flex h-full flex-col rounded-xl border border-gray-800 bg-gray-900/60 p-6 transition hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-900">

      <h2 className="text-2xl font-bold text-white mb-3">
        {title}
      </h2>

      <p className="text-gray-400 leading-relaxed mb-6">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-gray-700 bg-gray-800 px-3 py-1 text-sm text-gray-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="mt-auto flex flex-wrap gap-3">

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 transition hover:border-gray-500 hover:scale-110 hover:text-white active:scale-95"
        >
          GitHub
        </a>

        <button
          onClick={onDemoClick}
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-950 transition duration-200 hover:scale-110 hover:bg-gray-300 cursor-pointer active:scale-95"
        >
          Ver demo
        </button>

      </div>

    </article>
  )
}

export default ProjectCard