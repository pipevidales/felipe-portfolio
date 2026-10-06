import { useState } from "react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }
  return (
    <nav className="sticky top-0 z-40 border-b border-gray-500 bg-gray-800/80 backdrop-blur">

      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">

        <a
          href="#"
          className="text-xl font-bold text-white hover:text-gray-300 transition"
        >
          Portafolio Felipe
        </a>

        <div className="hidden sm:flex gap-4 text-sm text-gray-400 sm:gap-6 sm:text-base">

          <a
            href="#hero"
            className="hover:text-white transition"
          >
            Inicio
          </a>

          <a
            href="#about"
            className="hover:text-white transition"
          >
            About Me
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
      
        {/* Botón móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="cursor-pointer text-xl text-gray-300 sm:hidden"
          aria-label="Abrir menú"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="border-t border-gray-800 px-6 py-4 sm:hidden">

          <div className="flex flex-col gap-4 text-gray-400">

            <a
              href="#about"
              onClick={closeMenu}
              className="hover:text-white transition"
            >
              About
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="hover:text-white transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={closeMenu}
              className="hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="hover:text-white transition"
            >
              Contact
            </a>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar