import ProjectCard from "../componentes/projectCard";
import { projects } from "../data/projetcs";
import VideoModal from "../componentes/VideoModal";
import { useState } from "react";

function Projects(){
    const [isModalOpen, SetIsModalOpen] = useState(false)
    const  [selectedVideo, setSelectedVideo] = useState("")

    const handleDemoClick = (videoUrl: string) => {
        setSelectedVideo(videoUrl)
        SetIsModalOpen(true)
    } 
    return(
        <section id="projects" className="px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-10">
                    Projects
                </h2>
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
                onClose={() => SetIsModalOpen(false)}
            />
        </section>
    )
}

export default Projects