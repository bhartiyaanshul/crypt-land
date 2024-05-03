import React from 'react'
import './Footer.css'
import logo from './logo.png'
import socialicon from './footer/social iocn.png'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-details'>
            <div className='footer-company-info'>
                <div className='footer-logo'>
                    <img src={logo} alt='' />
                    <div className='footer-logo-text'>Crypt Land</div>
                </div>
                <div className='conpany-info-text'>Empower your finance team.
                    The onestop plateform for all financial management
                    of small and medium- sized business.</div>
                <img className='social-icon' src={socialicon} alt='' />
            </div>
            <div className='footer-company-provides'>
                <div className='company-platform'>
                    <div className='company-provides-title'>Plateform</div>
                    <div className='company-provides-services'>
                        <div >Why Cloudwise</div>
                        <div >Expense management</div>
                        <div >Automatic bookkeeping</div>
                        <div >Integeration</div>
                    </div>
                </div>
                <div className='company-company-details'>
                    <div className='company-provides-title'>Company</div>
                    <div className='company-provides-services'>
                        <div >About us</div>
                        <div >Plateform</div>
                        <div >Solution</div>
                        <div >Customer</div>
                        <div >Pricing</div>
                    </div>
                </div>
                <div className='company-resources'>
                    <div className='company-provides-title'>Resources</div>
                    <div className='company-provides-services'>
                        <div >Blog</div>
                        <div >Help center</div>
                        <div >Webinar</div>
                        <div >FAQ`s</div>
                        <div >Status</div>
                    </div>
                </div>
                <div className='company-solutions'>
                    <div className='company-provides-title'>Solutions</div>
                    <div className='company-provides-services'>
                        <div >Self Employeed</div>
                        <div >Email Business</div>
                        <div >Sms & Startups</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='footer-bottom'>
            <div className='footer-line'></div>
            <div className='footer-bottom-text'>
                <div>© 2023 Crypt Land. All rights reserved</div>    |
                <div> Cookie Settings, Anti-Spam, Privacy, User agreement, Legal Notice and Responsible Disclosure</div>
            </div>
        </div>
    </div>
  )
}
