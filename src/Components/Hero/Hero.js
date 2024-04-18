import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import Calories from '../../assets/calories.png'
const Hero = () => {
  return (
    <div className='Hero' id='hero'>
      <div className='blur hero-blur'></div>
      <div className='blur hero-blur2'></div>
      <div className='left-side'>
        <Header/>
        {/* BEst addd container*/}
        <div className='best-add'>
        <div></div>
        <span>BEST FITNESS PLACE IN TOWN</span>
      </div>
 {/* Hero text Section*/}
 <div className='Hero-text'>
        <div>
          <span className='stroke-text'>SHAPE </span>
          <span>YOUR</span>
        </div>
        <div>
          <span>IDEAL </span>
          <span>BODY</span>
        </div>
      <div>
        <span>Welcome to the Country's finest Fitness Center where Fitness is Life!</span>
      </div>
      </div>

      {/* Figures Section*/}
      <div className='Figures'>
       <div>
        <span>+150</span>
        <span>Expert Coaches</span>
       </div>
       <div>
        <span>+500</span>
        <span>Memebers Community</span>
        </div>
       <div>
        <span>+20</span>
        <span>Community Programs</span>
        </div>
      </div>

       {/* Button Section*/}
       <div className='Hero-button'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
       </div>
      </div>
      


     {/* Starting for Right Section*/}
      <div className='right-side'>
       <button className='btn'>Join Now</button>

          {/* Heart Rate section*/}
       <div className='Heart-rate'>
        <img src={heart} alt='Heart_img'/>
          <span>Heart Rate</span>
          <span> 116 BPM</span>
       </div>

       {/*Hero Images Section*/}
       <img src={hero_image} alt='img' className='hero-image'/>
       <img src={hero_image_back} alt='img' className='hero-image-back'/>

        {/*Calories Div*/}
       {/*  <div className='calories'>
          <img src={Calories} alt='calroes img' className='calories-img'/>
          <div >
          <span>Clories Burned</span>
          <span>220 kCal</span>
          </div>
          
        </div> */}
      </div>
    </div>
  )
}

export default Hero
