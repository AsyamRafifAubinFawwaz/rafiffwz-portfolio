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
  return (
    <>
    <Helmet>
        <title>Home | Rafif Portfolio</title>
        <meta name="description" content="Portfolio resmi Rafif - Web Developer" />
        <meta name="google-site-verification" content="T5t4iHtmKDv17MwidohsMQghgJCxqP4flLe9v8WtNL8" />
        <link rel="canonical" href="https://rafiffwz.com/" />
      </Helmet>
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
