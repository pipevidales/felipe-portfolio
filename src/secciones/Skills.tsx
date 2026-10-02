import { skills } from "../data/skills";

function Skills(){
    return(
        <section id="skills" className="px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-10">
                    Skills
                </h2>

                <div className="flex flex-wrap gap-3">
                    {
                        skills.map((skill) => (
                            <span key = {skill}
                            className="px-4 py-2 rounded-lg border border-gray-800 bg-gray-900 text-gray-300">
                                {skill}
                            </span>
                        )        
                      )
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills