import { useState } from 'react'
import './App.css'
import Header from './Component/Header'
import Hero from './Component/Hero'
import About from './Component/About'
import Project from './Component/Project'
import Contact from './Component/Contact'
import  Footer  from './Component/Footer'

function App() {

  return (
    <>
     <Header/>
     <Hero/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
