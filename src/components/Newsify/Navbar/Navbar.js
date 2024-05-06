import React from 'react'
import '../Navbar/Navbar.css'

import searchicon from './Vector.png'

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='company-name'>Newsify</div>
        <div className='navbar-content'>
            <div className='navbar-pages'>
                <div className='navbar-page'>Home</div>
                <div className='navbar-page'>About Us</div>
                <div className='navbar-page'>Pricing</div>
                <div className='navbar-page'>Demo</div>
            </div>
            <div className='navbar-buttons'>
                <div className='search-section'>
                    <img src={searchicon} alt=''/>
                    <span>Search</span>
                </div>
                <div className='register-button'>Register</div>
            </div>
        </div>
        
    </div>
  )
}
