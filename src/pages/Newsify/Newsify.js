import React from 'react'
import { Header } from '../../components/Newsify/Header/Header'
import { Navbar } from '../../components/Newsify/Navbar/Navbar'
import { IntroSection } from '../../components/Newsify/IntroSection/IntroSection'
import { Features } from '../../components/Newsify/Features/Features'
import { ServicesSection } from '../../components/Newsify/ServicesSection/ServicesSection'

export const Newsify = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <IntroSection/>
        <Features/>
        <ServicesSection />
    </div>
  )
}
