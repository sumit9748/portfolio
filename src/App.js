import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Intro from './components/intro/Intro'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'

const App = () => {
    return (
        <div>
            <Intro />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
    )
}

export default App