import React from 'react'
import landingimage from './image.png'

import './IntroSection.css'

import partner1 from './partnerimages/stripe-seeklogo.com.png'
import partner2 from './partnerimages/Component 49.png'
import partner3 from './partnerimages/Component 52.png'
import partner4 from './partnerimages/Component 50.png'
import partner5 from './partnerimages/spotify-seeklogo.com 2.png'
import partner6 from './partnerimages/Component 51.png'
import partner7 from './partnerimages/zoom-seeklogo.com-1.png'

export const IntroSection = () => {
    return (
        <div>
            <div className='introsection'>
                <div className='intro-section-content'>
                    <div className='intro-section-details'>
                        <div className='hey-text'>Hey,Everyone &#128075;</div>
                        <div className='intro-section-title'>Newsify is the email
                            newsletter that works
                            completely automated
                        </div>
                        <div className='intro-section-subtext'>Track connections in real time. See who your <br/>
                            community being lead by and find the most active
                        </div>
                        <div className='enter-email-section'>
                            <input className='enter-email-input' placeholder='Your Email Address'></input>
                            <div className='register-button'>Register</div>
                        </div>
                    </div>
                    <img className='intro-image' src={landingimage} alt=''/>
                </div>
            </div>
            <div className='intro-section-divider'>
                <img className='divider-img' src={partner1} alt='' />
                <img className='divider-img' src={partner2} alt='' />
                <img className='divider-img' src={partner3} alt='' />
                <img className='divider-img' src={partner4} alt='' />
                <img className='divider-img' src={partner5} alt='' />
                <img className='divider-img' src={partner6} alt='' />
                <img className='divider-img' src={partner7} alt='' />
            </div>
        </div>
    )
}
