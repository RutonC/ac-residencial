import React from 'react'

interface TitleProps {
  title:string;
  Subtitle:string;
  description?:string;
  align?:string;
}

function TitleSection({title,Subtitle,description, align}:TitleProps) {
  return (
    <div className={align}>
      <span className='py-2 mb-4 px-2 rounded-full font-semibold text-md  bg-primary-800/10 text-primary-800 uppercase'>{Subtitle}</span>
      <h1 className='text-gray-800 font-bold text-3xl mt-4 mb-3'>{title}</h1>
      <p className='text-sm text-gray-700 leading-loose'>{description}</p>

      
    </div>
  )
}

export default TitleSection