import React from 'react'
import {Link} from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
  return (
    <div className='head'>
      <ul>
      <Link className='nav' to ="/"><li>Home</li></Link>
      <Link className='nav' to ="/about"><li>About</li></Link>
      <Link className='nav' to ="/services"><li>Services</li></Link>
      <Link className='nav' to ="/contact"><li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Header
