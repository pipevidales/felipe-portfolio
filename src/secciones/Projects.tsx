import { useState } from "react"
import ProjectCard from "../componentes/projectCard"
import VideoModal from "../componentes/VideoModal"
import SectionTitle from "../componentes/SectionTitle"
import { projects } from "../data/projetcs"

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState("")

  const handleDemoClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl)
    setIsModalOpen(true)
  }

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-24"
    >
      {/* Título a todo el ancho, igual que las demás secciones */}
      <SectionTitle>Proyectos</SectionTitle>

      {/* Contenido centrado y con ancho limitado */}
      <div className="mx-auto mt-16 w-full max-w-6xl px-6 text-center">

        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-gray-400">
          Algunos de los proyectos que he desarrollado mientras aprendo,
          experimento y fortalezco mis habilidades en desarrollo de software.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
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