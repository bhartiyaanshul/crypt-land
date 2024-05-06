import React from 'react'
import './CryptLand.css'
import { BusinessService } from '../../components/CryptLand/BusinessService/BusinessService'
import { FoundersSection } from '../../components/CryptLand/FoundersSection/FoundersSection'
import { RequestDemoSection } from '../../components/CryptLand/RequestDemoSection/RequestDemoSection'
import { Navbar } from '../../components/CryptLand/Navbar/Navbar'
import { PlansSection } from '../../components/CryptLand/PlansSection/PlansSection'
import { CustomerFeedback } from '../../components/CryptLand/CustomerFeedback/CustomerFeedback'
import { Footer } from '../../components/CryptLand/Footer/Footer'
import { IntroSection } from '../../components/CryptLand/IntroSection/IntroSection'

export const CryptLand = () => {

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
