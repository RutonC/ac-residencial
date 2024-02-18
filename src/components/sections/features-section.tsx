import React from 'react'
import TitleSection from './elements/title-section'
import ProductCard from '../ui/product-card'

function FeaturesSection() {
  return (
    <div className='container mx-auto py-20'>
      <TitleSection Subtitle='Propriedades' title='Listagens de Propriedades' align='text-center'/>
      <div className='grid grid-cols-2 lg:grid-cols-2 md:grid-cols-1'>
        <div className='grid grid-cols-2 gap-4'>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
        <div className='bg-gray-200'>

        </div>

      </div>
    </div>
  )
}

export default FeaturesSection