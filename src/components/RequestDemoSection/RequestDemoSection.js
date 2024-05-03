import React from 'react'
import './RequestDemoSection.css'

import bookdemo from './bookdemo/bookdemo.png'

export const RequestDemoSection = () => {
  return (
    <div className='request-demo-section'>
        <div className='book-demo-section'>
            <div className='book-demo-details'>
                <div className='demo-details-title'>Let`s Upgrade your finances experience by using Cryptland</div>
                <div className='demo-buttons-section'>
                    <div className='request-demo-button'>Request Demo</div>
                    <div className='watch-video-button'>Watch Video</div>
                </div>
            </div>
            <img className='book-demo-image' src={bookdemo} alt='' />
        </div>
    </div>
  )
}
