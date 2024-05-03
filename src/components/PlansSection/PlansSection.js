import React from 'react'
import { useState } from 'react'
import './PlansSection.css'

export const PlansSection = () => {

    const [plans, setPlans] = useState([
        {
            type: 'Basic',
            price: 0,
            description: 'Get a professional website designed according to your needs.',
            features: [
                'Get a fully designed Website.',
                'Webflow Development',
                'Limited Support'
            ]
        },
        {
            type: 'Pro',
            price: 499,
            description: 'Get a professional website designed according to your needs.',
            features: [
                'Get a fully designed Website.',
                'Webflow Development',
                'Limited Support',
                'Get a fully designed Website',
                'Webflow Development',
                '24/7 Support system'
            ]
        },
        {
            type: 'Enterprise',
            price: 999,
            description: 'Get a professional website designed according to your needs.',
            features: [
                'Get a fully designed Website.',
                'Webflow Development',
                'Limited Support',
                'Get a fully designed Website',
                'Get a fully designed Website',
                'Webflow Development',
                '24/7 Support system'
            ]
        }
    ])

  return (
    <div className='plans-section'>
        <div className='plan-section-details'>
            <div className='plan-details-title'>Find the right plan</div>
            <div className='plan-details-text'>
                "Invest in your company's future with our comprehensive financial solution. Contact us for pricing details <br />
                and see how we can help you streamline your finances and reach your business goals.
            </div>
        </div>
        <div className='plans-data'>
            {
                plans.map((value, index) => {
                    return <div key={index} className='plan-card'>
                        <div className='plan-details'>
                            <div style={{ color: index===0 ? "black" : "#A3DC2F" }}className='plan-type'>{value.type}</div>
                            <div className='plan-price'>${value.price}</div>
                            <div className='plan-description'>{value.description}</div>
                            {value.features.map((e) =>
                                <p className='plan-feature'>{e}</p>
                            )}
                        </div>
                        <button style={{ background: index===2 ? "#A3DC2F" : "white" }} className='select-plan-button'>Select Plan</button>
                    </div>
                })
            }
        </div>
    </div>
  )
}
