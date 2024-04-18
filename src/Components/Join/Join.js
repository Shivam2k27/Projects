import React, { useRef } from 'react'
import './Join.css'
 
const Join = () => {
  
    
  return (
    <div className='Parent-join' id='join'>
      <div className='left-join'>
        <div></div>
      <div>
        <span className='stroke-text'>READY TO </span>
        <span>LEVEL UP</span>
      </div>
      <div>
        <span>YOUR BODY</span>
        <span className='stroke-text'>WITH US</span>
      </div>
      </div>
      <div className='right-join'>
       <form  className='email-container'>
           <input type="email" name="user_name" placeholder='Enter your email to join'/>
           <button>JOIN NOW</button>
       </form>
      </div>
    </div>
  )
}

export default Join
