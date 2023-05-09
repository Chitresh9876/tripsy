import React from 'react'
import './TripStyles.css'

function TripCard(props) {
  return (
    <>
      <div className="card">
        <div className="image">
            <img src={props.img} alt="card_image" />
        </div>
        <div className="desc">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default TripCard
