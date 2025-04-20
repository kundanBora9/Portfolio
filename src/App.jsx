import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Hero from './Component/Hero'
import About from './Component/About'
import Work from './Component/Work'
import Project from './Component/Project'
import Contact from './Component/Contact'
import  Footer  from './Component/Footer'
import SplashCursor from './Component/SplashCursor.jsx'
import TechSlider from './Component/TechSlider.jsx'

function App() {

  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Work/>
     <Project/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
