import React from 'react'
import './descriptionstyle.css'
import p1 from '../assests/p11.jpg'
import p2 from '../assests/p10.jpg'
import p3 from '../assests/p8.jpg'
import p4 from '../assests/p7.jpg'
import Destinationdata from './Destinationdata'

function Description() {
  return (
    <>
     <div className="desc_heading">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunnity to see a lot, within a time frame.</p>
         
        <Destinationdata
        cname='desc_content'
        heading='Tala Volcano, Batangas'
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, cum repellat ab minus numquam itaque consequatur explicabo, ipsa modi quisquam adipisci sapiente. Dolore ratione corrupti expedita, in ducimus aperiam, voluptas exercitationem beatae laborum quam suscipit veniam maiores obcaecati nisi aliquid a aut fuga consequatur officia eum iste nobis laudantium odio?'
        img1={p3}
        img2={p4}/>

        <Destinationdata
        cname='desc_content_reverse'
        heading='Mt. Dagalbul, Batangas'
        description='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, cum repellat ab minus numquam itaque consequatur explicabo, ipsa modi quisquam adipisci sapiente. Dolore ratione corrupti expedita, in ducimus aperiam, voluptas exercitationem beatae laborum quam suscipit veniam maiores obcaecati nisi aliquid a aut fuga consequatur officia eum iste nobis laudantium odio?'
        img1={p1}
        img2={p2}/>
        
        </div>
    </>
  )
}

export default Description
