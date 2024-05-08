import React from 'react'
import { Header } from '../../components/Newsify/Header/Header'
import { Navbar } from '../../components/Newsify/Navbar/Navbar'
import { IntroSection } from '../../components/Newsify/IntroSection/IntroSection'
import { Features } from '../../components/Newsify/Features/Features'
import { ServicesSection } from '../../components/Newsify/ServicesSection/ServicesSection'
import { Footer } from '../../components/Newsify/Footer/Footer'
import { LetsStartSection } from '../../components/Newsify/LetsStartSection/LetsStartSection'
import { Feedback } from '../../components/Newsify/Feedback/Feedback'

export const Newsify = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <IntroSection/>
        <Features/>
        <ServicesSection />
        <Feedback />
        <LetsStartSection/>
        <Footer />
    </div>
  )
}
