import React from 'react'
import './LandingPage.css'
import logo from './logo.png'
import dashboard from './dashboard.png'
import partner1 from './Partnerslogo/Component 59.png'
import partner2 from './Partnerslogo/Component 61.png'
import partner3 from './Partnerslogo/Component 56.png'
import partner4 from './Partnerslogo/Component 60.png'
import partner5 from './Partnerslogo/Component 55.png'
import partner6 from './Partnerslogo/Component 57.png'
import service1 from './analize/right side.png'
import service2 from './analize/image.png'
import founder1 from './Founders Image/Rectangle 403.png'
import founder2 from './Founders Image/Rectangle 404.png'
import founder3 from './Founders Image/Rectangle 405.png'


export const LandingPage = () => {
    return (
        <div className='crypt-land-application'>
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
                        Enter your email adress
                        <div className='book-demo-button'>Book a Demo</div>
                    </div>
                    <img className='dashboard-img' src={dashboard} alt='' />
                    <div className='intro-details-buttom-text'>
                        Working with world class partners.<br /> We`re partner first!
                    </div>
                </div>
            </div>
            <div className='partners-dividers'>
                <img className='partners-img' src={partner1} alt='' />
                <img className='partners-img' src={partner2} alt='' />
                <img className='partners-img' src={partner3} alt='' />
                <img className='partners-img' src={partner4} alt='' />
                <img className='partners-img' src={partner5} alt='' />
                <img className='partners-img' src={partner6} alt='' />
            </div>
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
            <div className='founders-section'>
                <div className='founders-section-details'>
                    <div className='founders-details-title'>
                        Modern Companies are<br/>
                        built on Capital.
                    </div>
                    <div className='founders-details-text'>
                        we provide software for the financial and operational needs of today`s <br/>
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
            <div className='plans-section'>
                <div className='plan-section-details'>
                    <div className='plan-details-title'>Find the right plan</div>
                    <div className='plan-details-text'>
                        "Invest in your company's future with our comprehensive financial solution. Contact us for pricing details <br/>
                        and see how we can help you streamline your finances and reach your business goals.
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
