import React from 'react'
import './Program.css'
import {programsData} from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'
const Program = () => {
  return (
    <div className='Program' id='program'>
        {/*PRogram header seciton*/ }
        <div className='Program-header'>
        <span className='stroke-text'>EXPLORE OUR</span>
      <span>PROGRAMS</span>
      <span className='stroke-text'>TO SHAPE YOU</span>
        </div>
        {/*Programs  seciton*/ }
        <div className='Programs-category'>
        {programsData.map((items)=>{
            return(
           <div className='category'>
            {items.image}
            <span>{items.heading}</span>
            <span>{items.details}</span>
             <div className='join-now'>
                <span>JOIN NOW</span>
                <img src={RightArrow} alt='join-now img'/>
             </div>
           </div>
            )
        })}
        </div>
    </div>
  )
}

export default Program
