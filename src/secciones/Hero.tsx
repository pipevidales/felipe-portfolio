function Hero() {
  return (
    <section className="min-h-[85vh] w-full flex items-center justify-center px-6">

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">

        <p className="text-xl text-gray-400 mb-4">
          Hola, soy Felipe 👋
        </p>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Backend Software Developer
        </h1>

        <p className="w-full max-w-3xl mx-auto text-center text-lg md:text-xl text-gray-400 leading-relaxed mb-10">
          Me gusta construir aplicaciones, aprender nuevas tecnologías
          y convertir ideas en soluciones útiles.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-white text-gray-950 font-semibold hover:bg-gray-200 transition duration-200 hover:scale-110 hover:bg-gray-300 cursor-pointer active:scale-95"
          >
            Ver proyectos
          </a>

          <a
            href="https://github.com/pipevidales"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-700 text-white hover:bg-gray-800 transition hover:bg-gray-800 transition duration-200 hover:scale-110 cursor-pointer active:scale-95"
          >
            GitHub
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero