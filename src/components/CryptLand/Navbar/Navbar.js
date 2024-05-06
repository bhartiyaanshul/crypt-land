import React from 'react'
import './Navbar.css'
import logo from './logo.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-section'>
            <div>About us</div>
            <div>Plateform</div>
            <div>Solution</div>
            <div>Customer</div>
        </div>
        <div className='navbar-logo'>
            <img src={logo} alt='' />
            <div>Crypt Land</div>
        </div>
        <div className='navbar-section'>
            <div>Price</div>
            <div>Contact</div>
            <div>Login</div>
            <div className='signup-button'>Sign up</div>
        </div>
    </div>
  )
}
