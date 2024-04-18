import React, { useState } from 'react'
import './Testimonials.css'
import leftArrow  from '../../assets/leftArrow.png'
import rightArrow  from '../../assets/rightArrow.png'
import {testimonialsData} from '../../data/testimonialsData'
const Testimonials = () => {
  const [selected , setSelected] = useState(0)
 const sLen = testimonialsData.length;
  return (
    <div className='Parent-testimonial' id='testimonial'>

       <div className='left-testimonial'>
       <span >Testimonials</span>
       <span className='stroke-text'>WHAT THEY</span>
       <span >SAY ABOUT US</span>
     
       <span style={{textTransform:'none', 
         fontSize:'1.5rem',
         lineHeight:'2rem',
         fontStyle:'italic',
       }}>
       {testimonialsData[selected].review} 
       </span>
       <span>
       <span style={{
        color:'var(--orange)',
       fontSize:'1.4rem'
       }}>
       {testimonialsData[selected].name} 
       </span>
       <span>
       - {testimonialsData[selected].status}
       </span>
       </span>
       </div>

       <div className='right-testimonial'>
        <div className='empty-div'>
          
        </div>
        <div className='empty-orange'>

        </div>
        <img src={testimonialsData[selected].image} alt="persons_image"/>
        <div className='test-image'>
        <img src={leftArrow} 
        onClick={()=>{
          selected===0?setSelected(sLen-1):setSelected((prevValue)=>prevValue-1)
        }}
         alt="image"/>
        <img src={rightArrow} 
        onClick={()=>{
          selected===sLen-1?setSelected(0):setSelected((prevValue)=>prevValue+1)
        }}
         alt="image"/>
        </div>
      
       </div>
    </div>
  )
}

export default Testimonials
