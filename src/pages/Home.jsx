import React from 'react'
import Herosection from '../components/Herosection'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'
import Plans from '../components/Plans'

export default function Home() {
  return (
    <div>
      <Herosection />
        <About/>
        <Project/>
        <Skills />
        <Contact />
        <Plans />
    </div>
  )
}
