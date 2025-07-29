import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './assets/pages/Home'
import Skills from './assets/pages/Skills'
import Project from './assets/pages/Project'
import Certificate from './assets/pages/Certificate'
import Achievement from './assets/pages/Achievement'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar />
     <Home /> 
     <Project />
     <Skills />
     <Certificate />
     <Achievement />
     
    </>
  )
}

export default App
