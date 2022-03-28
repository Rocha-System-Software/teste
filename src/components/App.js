import React from 'react'
import Footer from './Footer/index'
import Header from './Header/index'
import About from './About/index'
import Home from './Home/index'
import Projects from './Projects/index'
import Skills from './Skills/index'

export default function App(){
  return(
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  )
}