import ProjectCard from "../componentes/projectCard";
import { projects } from "../data/projetcs";
import VideoModal from "../componentes/VideoModal";
import { useState } from "react";

function Projects(){
    const [isModalOpen, setIsModalOpen] = useState(false)
    const  [selectedVideo, setSelectedVideo] = useState("")

    const handleDemoClick = (videoUrl: string) => {
        setSelectedVideo(videoUrl)
        setIsModalOpen(true)
    } 
    return(
        <section id="projects" className="px-6 py-20">
            <div className="mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Projects
                </h2>

                 <p className="mt-3 max-w-2xl text-gray-400 leading-relaxed">
                    A continuación algunos de los proyectos que he desarrollado mientras aprendo,
                    experimento y fortalezco mis habilidades en desarrollo de software.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
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