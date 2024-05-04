import React from 'react'
import './LandingPage.css'
import { BusinessService } from '../../components/BusinessService/BusinessService'
import { FoundersSection } from '../../components/FoundersSection/FoundersSection'
import { RequestDemoSection } from '../../components/RequestDemoSection/RequestDemoSection'
import { Navbar } from '../../components/Navbar/Navbar'
import { PlansSection } from '../../components/PlansSection/PlansSection'
import { CustomerFeedback } from '../../components/CustomerFeedback/CustomerFeedback'
import { Footer } from '../../components/Footer/Footer'
import { IntroSection } from '../../components/IntroSection/IntroSection'

export const LandingPage = () => {

    return (
        <div className='crypt-land-application'>
            <Navbar />
            <IntroSection />
            <BusinessService />
            <FoundersSection />
            <PlansSection />
            <CustomerFeedback />
            <RequestDemoSection />
            <Footer />
        </div>
    )
}
