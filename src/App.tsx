import Navbar from "./componentes/Navbar"
import Hero from "./secciones/Hero"
import Projects from "./secciones/Projects"
import About from "./secciones/About"
import Skills from "./secciones/Skills"
import Contact from "./secciones/Contact"
import Footer from "./secciones/Footer"

function App() {
  return (
    
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App