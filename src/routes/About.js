import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import image from '../assests/p5.jpg'
import Footer from '../components/Footer'
import AboutuUs from '../components/AboutuUs'

function About() {
  return (
    <>
    {window.scroll(0,0)}
      <Navbar/>
    <Hero cnamehero="heroimage_about" cnameheroimage="heroimage_about" imgurl={image} heading="About Us" btn="hide"/>
    <AboutuUs/>
    <Footer/>
    </>
    
  )
}

export default About
