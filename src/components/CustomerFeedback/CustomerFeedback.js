import React from 'react'
import './CustomerFeedback.css'
import { useState } from 'react'

import rating from './feedback/Component 29.png'
import avatar from './feedback/Pic.png'

export const CustomerFeedback = () => {

    const [feedback, setFeedback] = useState([
        {
            messege: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
            name: 'Ashley Cooper',
        },
        {
            messege: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. ",
            name: 'Ashley Cooper',
        },
        {
            messege: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
            name: 'Ashley Cooper',
        },
        {
            messege: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used",
            name: 'Ashley Cooper',
        },
        {
            messege: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end ",
            name: 'Ashley Cooper',
        },
        {
            messege: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn`t used, which have also proved to be easy to use and reliable.",
            name: 'Ashley Cooper',
        },
    ])

  return (
    <div className='customer-feedback-section'>
        <div className='customer-feedback-header'>
            <div className='customer-header-title'>What our customers say</div>
            <div className='customer-header-subtext'>
                "Thank you for your trust in Crypt Land!
                We are grateful for your feedback and are committed to providing the<br />best [products/services offered].
                Read what our clients have to say about their experience with us.
            </div>
        </div>
        <div className='feedback-data'>
            {
                feedback.map((feedback, index) => {
                    return <div key={index} className='feedback-card'>
                        <div className='feedback-details'>
                            <div className='feedback-message'>{feedback.messege}</div>
                            <div className='customer-info'>
                                <img src={avatar} alt=''></img>
                                <div>
                                    <div className='feedback-name'>{feedback.name}</div>
                                    <img src={rating} alt=''></img>
                                </div>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}
