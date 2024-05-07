import React from 'react'
import { Header } from '../../components/Newsify/Header/Header'
import { Navbar } from '../../components/Newsify/Navbar/Navbar'
import { IntroSection } from '../../components/Newsify/IntroSection/IntroSection'

export const Newsify = () => {
  return (
    <div>
        <Header />
        <Navbar />
        <IntroSection/>
    </div>
  )
}
