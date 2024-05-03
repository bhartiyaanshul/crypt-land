import React from 'react'
import './LandingPage.css'
import { BusinessService } from '../../components/BusinessService/BusinessService'
import logo from './logo.png'
import { useState } from 'react'
import dashboard from './dashboard.png'
import partner1 from './Partnerslogo/Component 59.png'
import partner2 from './Partnerslogo/Component 61.png'
import partner3 from './Partnerslogo/Component 56.png'
import partner4 from './Partnerslogo/Component 60.png'
import partner5 from './Partnerslogo/Component 55.png'
import partner6 from './Partnerslogo/Component 57.png'



import socialicon from './footer/social iocn.png'

import { FoundersSection } from '../../components/FoundersSection/FoundersSection'
import { RequestDemoSection } from '../../components/RequestDemoSection/RequestDemoSection'
import { Navbar } from '../../components/Navbar/Navbar'
import { PlansSection } from '../../components/PlansSection/PlansSection'
import { CustomerFeedback } from '../../components/CustomerFeedback/CustomerFeedback'

export const LandingPage = () => {

    return (
        <div className='crypt-land-application'>

            <Navbar />
            <div className='intro-section' >
                <div className='intro-details-section'>
                    <div className='intro-details-title'>
                        The Finance Solutions <br />For Your Business
                    </div>
                    <div className='intro-details-subtext'>
                        Empower your finance team. The onestop plateform for all financial<br />
                        management of small and medium-sized business.
                    </div>
                    <div className='book-demo'>
                        <input type='text' placeholder='Enter your email adress'></input>
                        <div className='book-demo-button'>Book a Demo</div>
                    </div>
                </div>
            </div>
            <div style={{
                width: "100%",
                display: 'flex',
                justifyContent: "center"
            }}
            className='dashboard-img-wrapper'
            >
                <img className='dashboard-img' src={dashboard} alt='' />
            </div>
            <div className='intro-details-buttom-text'>
                Working with world class partners.<br /> We`re partner first!
            </div>
            <div className='partners-dividers'>
                <img className='partners-img' src={partner1} alt='' />
                <img className='partners-img' src={partner2} alt='' />
                <img className='partners-img' src={partner3} alt='' />
                <img className='partners-img' src={partner4} alt='' />
                <img className='partners-img' src={partner5} alt='' />
                <img className='partners-img' src={partner6} alt='' />
            </div>

            <BusinessService />
            <FoundersSection />
            <PlansSection />
            <CustomerFeedback />
            <RequestDemoSection />

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
        </div>
    )
}
