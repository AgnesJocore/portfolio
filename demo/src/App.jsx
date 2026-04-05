import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      
      <main>
        <section id="home" className="section">
          <Hero />
        </section>
        <section id="skills" className="section">
          <Skills />
        </section>
        <section id="projects" className="section">
          <Projects />
        </section>
        <section id="contacts" className="section">
          <Contact />
        </section>
      </main>
    </div>
  )
}

export default App