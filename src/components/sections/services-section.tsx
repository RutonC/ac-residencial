import React from 'react'
import ServicesCard from './elements/services-card'
import TitleSection from './elements/title-section'

function ServicesSection() {
  return (
    <div className=' bg-gray-100 py-20'>
        <TitleSection title='Nosso foco principal' Subtitle='Nossos serviços' align='text-center'/>
      <div className='flex flex-wrap items-center justify-center'>
      <ServicesCard/>
      </div>
    </div>
  )
}

export default ServicesSection