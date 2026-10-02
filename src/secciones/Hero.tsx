function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">

      <p className="text-lg text-gray-400 mb-4">
        Hi, I'm Felipe 👋
      </p>

      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        Fullstack Software Developer
      </h1>

      <p className="max-w-2xl text-lg text-gray-400 mb-8">
        I build backend applications and REST APIs
        using Java, Spring Boot, PostgreSQL, React and Typescript.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-lg bg-white text-gray-950 font-semibold hover:bg-gray-200 transition"
        >
          View Projects
        </a>

        <a
          href="https://github.com/pipevidales"
          target="_blank"
          className="px-6 py-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition"
        >
          GitHub
        </a>
      </div>

    </section>
  )
}

export default Hero