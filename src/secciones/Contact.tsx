function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-10 w-full px-6 py-24"
    >

      {/* Encabezado */}
      <div className="w-full flex items-center gap-6 mb-16">

        <div className="h-0.5 flex-1 bg-blue-800" />

        <h2 className="text-center text-3xl md:text-4xl font-bold text-white whitespace-nowrap">
          Contact
        </h2>

        <div className="h-0.5 flex-1 bg-blue-800" />

      </div>


      {/* Contenido */}
      <div className="w-full max-w-4xl mx-auto text-center">

        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          I'm open to new opportunities, projects and collaborations.
          Feel free to connect with me through my social profiles.
        </p>


        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>


          <a
            href="mailto:tuemail@example.com"
            className="px-6 py-3 rounded-lg bg-white text-gray-950 font-semibold hover:bg-gray-200 transition"
          >
            Email
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contact