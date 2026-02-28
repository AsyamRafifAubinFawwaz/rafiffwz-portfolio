import './App.css'
import Navbar from './components/Navbar'
import Home from './assets/pages/Home'
import Skills from './assets/pages/Skills'
import Project from './assets/pages/Project'
import Certificate from './assets/pages/Certificate'
import Achievement from './assets/pages/Achievement'
import { Education } from './assets/pages/Education'
import { Experience } from './assets/pages/Experience'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'

function App() {
  // JSON-LD Structured Data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rafif",
    "url": "https://rafiffwz.com",
    "jobTitle": "Web Developer",
    "description": "Full Stack Web Developer specializing in React, JavaScript, and modern web technologies",
    "sameAs": [
      "https://github.com/rafiffwz",
      "https://linkedin.com/in/rafif",
      "https://twitter.com/rafif"
    ]
  };

  return (
    <>
    
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="certificate">
        <Certificate />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="achievement">
        <Achievement />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="education">
        <Education />
      </section>
      <Footer />
    </>
  )
}

export default App
