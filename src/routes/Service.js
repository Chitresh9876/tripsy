import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import image from '../assests/p3.jpg'
import Footer from '../components/Footer'
import Trip from "../components/Trip";

function Service() {
  return (
    <>
    {window.scroll(0,0)}
      <Navbar/>
    <Hero cnamehero="heroimage_about" cnameheroimage="heroimage_about" imgurl={image} heading="Services" btn="hide"/>
    
    <Trip/>
    <Footer/>
    </>
  )
}

export default Service
