import './App.css'
import Navbar from './components/Navbar'
import Home from './assets/pages/Home'
import Skills from './assets/pages/Skills'
import Project from './assets/pages/Project'
import Certificate from './assets/pages/Certificate'
import Achievement from './assets/pages/Achievement'
import { Education } from './assets/pages/Education'
import { Experience } from './assets/pages/experience'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="certificate">
        <Certificate />
      </section>
      <section id="achievement">
        <Achievement />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <Footer />
    </>
  )
}

export default App
