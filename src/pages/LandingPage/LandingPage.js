import React from 'react'
import './LandingPage.css'
import logo from './logo.png'
import { useState } from 'react'
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
import bookdemo from './bookdemo/bookdemo.png'
import socialicon from './footer/social iocn.png'
import rating from './feedback/Component 29.png'
import avatar from './feedback/Pic.png'

export const LandingPage = () => {

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
                                    <div className='plan-type'>{value.type}</div>
                                    <div className='plan-price'>${value.price}</div>
                                    <div className='plan-description'>{value.description}</div>
                                    {value.features.map((e) =>
                                        <p className='plan-feature'>{e}</p>
                                    )}
                                </div>
                                <button className='select-plan-button'>Select Plan</button>
                            </div>
                        })
                    }
                </div>
            </div>
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
