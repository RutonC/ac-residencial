import React from 'react'
import rentalHouse from '../../../assets/img/22.png'
import rental from '../../../assets/img/10.svg'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

function ServicesCard() {
  return (
    <div className='h-[410px] w-[408px] bg-white shadow-md rounded-sm pt-10 pb-9 px-8 border-b-4 border-primary-800'>
      <div className='mx-auto'>
      <img src={rentalHouse} className='mx-auto'/>
      <h1 className='font-bold text-2xl text-center text-gray-800 mb-4'>Casa de aluguel</h1>
      <p className='text-md text-gray-500 text-center tracking-widest leading-loose font-light'>Passe dias relaxantes em uma casa totalmente equipada perto da praia.</p>

<div className='flex flex-row justify-center items-center gap-x-2'>
        <p className=' text-sm text-primary-800 text-center my-4'>
      <a href="#" >Encontre uma casa</a> 
        </p>
        <HiOutlineArrowNarrowRight className='text-xl text-primary-800'/>

</div>
      </div>
    </div>
  )
}

export default ServicesCard