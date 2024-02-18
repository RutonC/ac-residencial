import React from 'react'
import {Header, Footer, HeroSection, AboutSection, ServicesSection, FeatureSection, TestimonialSection, ContactSection } from '../components'

function Home() {
  return (
    <main>
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <ServicesSection/>
    <FeatureSection/>
    <TestimonialSection/>
    <ContactSection/>
    <Footer/>
    </main>
  )
}

export default Home