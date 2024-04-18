import React from 'react'
import './Footer.css'
import github from '../../assets/github.png'
import ig from '../../assets/instagram.png'
import linkdin from '../../assets/linkedin.png'
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <div className='Footer-Parent' id='footer'>
    <div className='empty-footer'>

    </div>
     <div className='social_media'>
       <img src={github} alt="connect_image"/>
       <img src={ig} alt="connect_image"/>
       <img src={linkdin} alt="connect_image"/>
     </div>
     <div>
       <img src={logo} alt="logo"/>
     </div>
     <div className='blur blur-footer1'></div>
     <div className='blur blur-footer2'></div>
    </div>
  )
}

export default Footer
