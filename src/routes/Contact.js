import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import image from '../assests/p2.jpg'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

function Contact() {
  return (
    <>
    {window.scroll(0,0)}
      <Navbar/>
    <Hero cnamehero="heroimage_about" cnameheroimage="heroimage_about" imgurl={image} heading="Contact Us" btn="hide"/>
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default Contact
