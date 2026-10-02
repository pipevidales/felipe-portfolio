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
    <article className="border border-gray-800 rounded-xl p-6 bg-gray-900">

      <h2 className="text-2xl font-bold text-white mb-3">
        {title}
      </h2>

      <p className="text-gray-400 mb-5">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="px-3 py-1 rounded-full bg-gray-800 text-sm text-gray-300"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="flex gap-4">

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
        >
          GitHub
        </a>

        <button
          onClick={onDemoClick}
          className="px-4 py-2 rounded-lg bg-white text-gray-950 hover:bg-gray-200 transition"
        >
          Ver demo
        </button>

      </div>

    </article>
  )
}

export default ProjectCard