import React from 'react'
import logo from '../../assets/img/logo.png'
import SocialIcons from '../ui/social-icon'
function Footer() {
  return (
    <footer className='bg-[#f3f4f6]'>
      <div className='container relative mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:pt-24'>
        <div className='absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8'>
          <a href='#' className='inline-block rounded-full bg-golden-600 p-2 text-white shadow transition hover:bg-golden-700 sm:p-3 lg:p-4'>
            <span className='sr-only'>Voltar ao topo</span>
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
          </a>
        </div>

        <div className='flex justify-center'>
              <img  src={logo} className="mr-3 h-20 sm:h-28"/>
        </div>
            <p className='text-gray-500 mx-auto mt-6 max-w-md text-center leading-relaxed text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, praesentium quas doloribus earum pariatur consequatur fugiat dolore autem dolorum ipsum facere, voluptatem fuga, consectetur non adipisci maiores culpa nesciunt magnam!</p>
          

          <ul className='mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
            <li>
              <a href="#" className='text-gray-700 transition hover:text-gray-700/75 text-xs'>Termos & Condições</a>
            </li>
            <li>
              <a href="#" className='text-gray-700 transition hover:text-gray-700/75 text-xs'>Politicas de Privacidade</a>
            </li>
            <li>
              <a href="#" className='text-gray-700 transition hover:text-gray-700/75 text-xs'>Cookies</a>
            </li>
          </ul>

          <div className='mt-5 flex justify-center gap-6 md:gap-8'>
            <SocialIcons instagram facebook whatsapp/>
          </div>

        


      </div>
    </footer>
  )
}

export default Footer