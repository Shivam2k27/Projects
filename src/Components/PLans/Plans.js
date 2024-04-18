import React from 'react'
import './Plans.css'
import { plansData } from '../../data/plansData'
import whitetick from '../../assets/whiteTick.png'
const Plans = () => {
  return (
    <div className='Parent-container'>
      <div className='blur blur-plan1'></div>
      <div className='blur blur-plan2'></div>
      <div className='Header-plan'>
       <span className='stroke-text'>READY TO START</span>
       <span>YOUR JOURNEY</span>
       <span className='stroke-text'>NOW WITH US</span>
      </div>


      {/*STARTING PLANS SECTIONS*/}
      <div className='card-parent' id='plans'>
       {plansData.map((plans,i)=>{
        return(
            <div className='plans' key={i}>
                
                {plans.icon}
                <span >{plans.name}</span>
                <span >${plans.price}</span>
              
            
            <div className='features'>
                 {plans.features.map((plans1,i)=>{
                return(
                <div className='ftr'>
                    <img src={whitetick} alt=""/>
                    <span key={i}>{plans1}</span>
                </div>
                )
                 })}
            </div>
            <div className='benifits'>
                <span>See More Benifits--</span>
                </div>
                <button>JOIN</button>
            </div>
        )
       })}
      </div>
    </div>
  )
}

export default Plans
