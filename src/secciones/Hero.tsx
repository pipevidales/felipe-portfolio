function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-[calc(100vh-4.5rem)] w-full scroll-mt-10 items-center justify-center overflow-hidden px-6"
    >
      {/* Resplandor azul de fondo */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18),transparent_60%)]" />

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">

        <p className="mb-4 font-friendly text-xl font-semibold text-blue-400 md:text-2xl">
          Hola, soy Felipe 👋
        </p>

        <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight text-white md:text-7xl">
          Backend Software Developer
        </h1>

        <p className="mx-auto mb-10 w-full max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
          Me gusta construir aplicaciones, aprender nuevas tecnologías
          y convertir ideas en soluciones útiles.
        </p>

        {/* Botones: mismo tamaño, tipografía y padding */}
        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#projects"
            className="inline-flex cursor-pointer items-center gap-3 rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-gray-950 shadow-lg shadow-blue-600/20 transition duration-200 hover:scale-105 hover:bg-gray-200 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 md:text-lg"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="#facc15"
              stroke="#facc15"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 7a2 2 0 0 1 2-2h5l2 2h9a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
            </svg>
            Ver proyectos
          </a>

          <a
            href="https://github.com/pipevidales"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex cursor-pointer items-center gap-3 rounded-lg border border-gray-700 px-7 py-3.5 text-base font-semibold text-white transition duration-200 hover:scale-105 hover:border-blue-600 hover:bg-gray-800 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 md:text-lg"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49v-1.71c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.2 9.2 0 0 1 12 7.13c.85 0 1.7.12 2.5.36 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92v2.85c0 .28.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
            </svg>
            GitHub
          </a>

        </div>
      </div>
    </section>
  )
}

export default Hero