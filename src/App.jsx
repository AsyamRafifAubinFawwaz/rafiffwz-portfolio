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
    <Helmet>
        <title>Rafif | Web Developer Portfolio - React, JavaScript, Tailwind</title>
        <meta name="description" content="Portfolio Rafif - Full Stack Web Developer. Spesialisasi dalam React, JavaScript, HTML, CSS, Tailwind CSS, dan responsive design." />
        <meta name="keywords" content="web developer, react developer, javascript, portfolio, front-end, full stack, tailwind css" />
        <meta name="google-site-verification" content="T5t4iHtmKDv17MwidohsMQghgJCxqP4flLe9v8WtNL8" />
        <link rel="canonical" href="https://rafiffwz.com/" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rafiffwz.com/" />
        <meta property="og:title" content="Rafif | Professional Web Developer Portfolio" />
        <meta property="og:description" content="Portfolio Rafif - Full Stack Web Developer specializing in React and JavaScript" />
        <meta property="og:image" content="https://rafiffwz.com/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rafif | Web Developer Portfolio" />
        <meta name="twitter:description" content="Lihat portfolio saya sebagai Web Developer professional" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
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
