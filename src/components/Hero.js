import React from 'react'
import './herostyles.css'

function Hero(props) {
  return (
    <>
    <div className={props.cnamehero}>
        <img src={props.imgurl} alt="hero_image" className={props.cnameheroimage} />
        <div className="herotext">
            <h1>{props.heading}</h1>
            <p>{props.description}</p>
            <a href="/" className={props.btn}>Travel Plans</a>
        </div>
    </div>
    </>
      
    
  )
}

export default Hero
