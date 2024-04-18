import React from 'react'
import './Reasons.css'
import image1 from '../../assets/image1.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'
import image4 from '../../assets/image4.png'
import nb from '../../assets/nb.png'
import adidas from '../../assets/adidas.png'
import nike from '../../assets/nike.png'
import tick from '../../assets/tick.png'
const Reasons = () => {
  return (
    <div className='Reasons' id='reasons'>
      <div className="left-hand">
        <img src={image1}  alt='img'/>
        <img src={image2} alt='img'/>
        <img src={image3} alt='img'/>
        <img src={image4} alt='img'/>
      </div>
      <div className="right-hand">
        <div className='upper-reasons'>
        <span style={{color:'orange'}}>SOME REASONS</span>
        <div className='why'>
        <span className='stroke-text'>WHY</span>
        <span>CHOOSE US?</span>
        </div>
        </div>

        {/*Why choose  us seciton*/}
       <div className='reasons-bullet' >
        <div>
          <img src={tick} alt="tick_img"/>
          <span>OVER 140+ EXPERT COACHES</span>
        </div>
        <div>
          <img src={tick} alt="tick_img"/>
          <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
        </div>
        <div>
          <img src={tick} alt="tick_img"/>
          <span>1 FREE PROGRAM FOR NEW MEMBER</span>
        </div>
        <div>
          <img src={tick} alt="tick_img"/>
          <span>RELAIABLE PARTNERS</span>
          </div>
          <span style={{
            color:'gray',
            display:'flex',
            fontSize:'1.5rem'
          }}>OUR PARTNERS</span>
        </div>
        <div className='brand-images'>
        <img src={nb} alt="nb"/>           
        <img src={adidas} alt="adidas"/>           
        <img src={nike} alt="nike"/>                  
        </div>
       </div>

      </div>
    
  )
}

export default Reasons
