function Contact (){
    return(
        <section id="contact" className="px-6 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                    Contact Me
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    I'm open to new opportunities, projects and collaborations.
                    Feel free to connect with me through my social profiles.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://www.linkedin.com/in/felipe-vidales-tabares-1533a3425/?isSelfProfile=true"
                    target="_blank"
                    rel="noopener noreferrer"
className="px-6 py-3 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition duration-200 hover:scale-110 cursor-pointer active:scale-95" >
                        LinkedIn
                    </a>

                    <a  href="mailto:pipevidalest08@gmail.com"
className="px-6 py-3 rounded-lg bg-white text-gray-950 font-semibold hover:bg-gray-200 transition duration-200 hover:scale-110 hover:bg-gray-300 cursor-pointer active:scale-95">
                        Gmail
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Contact