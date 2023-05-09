import React from 'react'
import './ContactUs.css'

function ContactUs() {
  return (
    <div className='container'>
        <h2>Send a message to us!</h2>
      <div className="form">
        <input type="text" placeholder='Name'/>
        <input type="text" placeholder='Email'/>
        <input type="text" placeholder='Subjet'/>
        <textarea rows={4} placeholder='Message'/>
        <button>SUBMIT</button>
      </div>
    </div>
  )
}

export default ContactUs
