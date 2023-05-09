import React from 'react'
import './TripStyles.css'
import TripCard from './TripCard'
import p1 from '../assests/p12.jpg'
import p3 from '../assests/p1.jpg'
import p4 from '../assests/p14.jpg'

function Trip() {
  return (
    <>
     <div className="content">
        <h2>Recent Trips</h2>
        <p>You can descover unique destination using Google Maps.</p>
        <div className="cards">
            <TripCard
            img={p1}
            title='Trip in India'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque est quas excepturi nisi porro nemo dolorum unde non, optio assumenda inventore laudantium aliquid. Nesciunt.'/>
            <TripCard
            img={p3}
            title='Trip in Indoneshia'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque est quas excepturi nisi porro nemo dolorum unde non, optio assumenda inventore laudantium aliquid. Nesciunt.'/>
            <TripCard
            img={p4}
            title='Trip in France'
            description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit cumque est quas excepturi nisi porro nemo dolorum unde non, optio assumenda inventore laudantium aliquid. Nesciunt.'/>
        </div>
        </div> 
    </>
  )
}

export default Trip;
