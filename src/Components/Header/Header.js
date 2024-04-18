import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'
const Header = () => {
  const[menu , setMenu]=useState(false)
  return (
    <div className='Header'>
      <img src={logo} alt='Logo_img' className='logo'/>
      <ul className='Header_list'>
         
        <li><Link
        to='program'
        spy={true}
        smooth={true}
        >Programs</Link></li>
        <li><Link
        to='reasons'
        spy={true}
        smooth={true}
        >Why us</Link></li>
        <li><Link
        to='plans'
        spy={true}
        smooth={true}
        >Plans</Link></li>
        <li><Link
        to='testimonial'
        spy={true}
        smooth={true}
        >Testimonials</Link></li>
      </ul>

    </div>
  )
}

export default Header
