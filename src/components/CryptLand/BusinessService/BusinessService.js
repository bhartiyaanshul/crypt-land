import './BusinessService.css'

import React from 'react'
import service1 from './analize/right side.png'
import service2 from './analize/image.png'

export const BusinessService = () => {
  return (
    <div className='business-services-section'>
      <div className='business-services-title'>Boosting Business. Today <br />and Tomorrow.</div>
          <div className='business-services'>
              <div className='business-service'>
                  <img src={service1} alt='' />
                  <div className='business-service-details'>
                      <div className='business-details-title'>
                          Optimise expense
                          Management as a team
                      </div>
                      <div className='business-details-text'>
                          Bring harmony to team expenses with budget limits and
                          real-time monitiring. Freedom for your staff. Peace of
                          mind for you.
                      </div>
                      <div className='explore-more-button'>Explore more</div>
                  </div>
              </div>
              <div className='business-service'>
                  <div className='business-service-details'>
                      <div className='business-details-title'>
                          Real-time accounting
                          at your fingertips.
                      </div>
                      <div className='business-details-text'>
                          Take the pain out of book keeping!
                          Wave goodbye to mountains of paperwork and endless email reminders.
                          There`s now a new way of accounting.
                      </div>
                      <div className='explore-more-button'>Explore more</div>
                  </div>
                  <img src={service2} alt='' />
              </div>
          </div>
      </div>
  )
}
