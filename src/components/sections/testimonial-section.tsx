import React from 'react'
import bg from '../../assets/img/20.png'
import TitleSection from './elements/title-section'
import TestimonialCard from '../ui/testimonial-card'

function TestimonialSection() {
  return (
    <div className="pat py-20 h-[459px] mb-36 sm:mb-52">
      <TitleSection Subtitle='testemunhos' title='O que nossos clientes dizem' align='text-center'/>
      <div className='container mx-auto  px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
      <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
      </div>
      </div>

    </div>
  )
}

export default TestimonialSection