import React from 'react'

import dashboard from './dashboard.png'
import partner1 from './Partnerslogo/Component 59.png'
import partner2 from './Partnerslogo/Component 61.png'
import partner3 from './Partnerslogo/Component 56.png'
import partner4 from './Partnerslogo/Component 60.png'
import partner5 from './Partnerslogo/Component 55.png'
import partner6 from './Partnerslogo/Component 57.png'

import './IntroSection.css'

export const IntroSection = () => {
  return (
    <div>
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
    </div>
  )
}
