import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import homeimage from "../assests/p1.jpg";
import Description from "../components/Description";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    {window.scroll(0,0)}
      <Navbar />
      <Hero
        cnamehero="hero"
        cnameheroimage="heroimage"
        imgurl={homeimage}
        heading="Your Journey Your Story"
        description="Choose your favourite destination."
        btn="show"
      />
      <Description/>
      <Trip/>
      <Footer/>

    </>
  );
}

export default Home;
