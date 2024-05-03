import React from 'react'
import './FoundersSection.css'

import founder1 from './Founders Image/Rectangle 403.png'
import founder2 from './Founders Image/Rectangle 404.png'
import founder3 from './Founders Image/Rectangle 405.png'

export const FoundersSection = () => {
  return (
    <div className='founders-section'>
        <div className='founders-section-details'>
            <div className='founders-details-title'>
                Modern Companies are<br />
                built on Capital.
            </div>
            <div className='founders-details-text'>
                we provide software for the financial and operational needs of today`s <br />
                founders so they can get back to doing what they do best-building
            </div>
        </div>
        <div className='founders-images'>
            <div>
                <img className='founder-image' src={founder1} alt='' />
                <div className='founder-name'>Benjamin McDonald</div>
                <div className='founder-designation'>Founder, CEO</div>
            </div>
            <div>
                <img className='founder-image' src={founder2} alt='' />
                <div className='founder-name'>Jett Yagan</div>
                <div className='founder-designation'>Founder, CEO</div>
            </div>
            <div>
                <img className='founder-image' src={founder3} alt='' />
                <div className='founder-name'>Layla Cramp</div>
                <div className='founder-designation'>Founder, CEO</div>
            </div>
        </div>
    </div>
  )
}
