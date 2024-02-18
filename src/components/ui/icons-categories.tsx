import React from 'react'
import {IoBedOutline} from 'react-icons/io5'

interface IconsCategoriesProps {
  icon:React.ReactNode;
  title:string;
}

function IconsCategories({icon, title}:IconsCategoriesProps) {
  return (
    <div className=''>
      <div className='flex flex-row items-center gap-x-1 mb-3'>
      <span className='text-sm text-gray-500'>3</span>
      {icon}
      </div>
      <h4 className='text-sm text-gray-500 tracking-widest'>{title}</h4>
    </div>
  )
}

export default IconsCategories