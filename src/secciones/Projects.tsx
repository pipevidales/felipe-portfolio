import { useState } from "react"
import ProjectCard from "../componentes/ProjectCard"
import VideoModal from "../componentes/VideoModal"
import SectionTitle from "../componentes/SectionTitle"
import { projects } from "../data/Projetcs"
import { useLanguage } from "../i18n/Uselanguage"

function Projects() {
  const { language, t } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState("")

  const handleDemoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
    setIsModalOpen(true)
  }

  return (
    <section
      id="projects"
      className="min-h-screen w-full scroll-mt-10 py-24"
    >
      <SectionTitle>{t.projects.title}</SectionTitle>

      <div className="mx-auto mt-16 w-full max-w-6xl px-6 text-center">

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400">
          {t.projects.description}
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title[language]}
              description={project.description[language]}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              onDemoClick={() => handleDemoClick(project.demoUrl)}
            />
          ))}
        </div>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        videoUrl={selectedVideo}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}

export default Projects