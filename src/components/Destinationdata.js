import React from 'react'
import './descriptionstyle.css'

function Destinationdata(props) {
  return (
    <>
    <div className={props.cname}>
            <div className="desc_title">
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
            </div>
        
        <div className="desc_img">
            <img src={props.img1} alt="image_1" />
            <img src={props.img2} alt="image_2" />
        </div>
        </div>
      
    </>
  )
}

export default Destinationdata
