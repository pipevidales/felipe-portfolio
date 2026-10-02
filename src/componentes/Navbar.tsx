
function Navbar() {
  return (
    <nav className="sticky top-0 z-40 border-b border-gray-800 bg-gray-950/80 backdrop-blur">

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <a
          href="#"
          className="text-xl font-bold text-white hover:text-gray-300 transition"
        >
          Felipe.dev
        </a>

        <div className="flex gap-8 text-xl text-gray-400">

          <a
            href="#about"
            className="hover:text-white transition"
          >
            About
          </a>

          <a
            href="#skills"
            className="hover:text-white transition"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="hover:text-white transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-white transition"
          >
            Contact
          </a>

        </div>

      </div>

    </nav>
  )
}

export default Navbar