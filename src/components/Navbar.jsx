import React from 'react'
import { appleImg, searchImg, bagImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 px-5 sm:px-10 justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <div>
          <img src={appleImg} alt='Apple' width={14} height={18} className='cursor-pointer'/>
        </div>
        <div className='flex flex-1 justify-center max-sm:hidden'>
          {navLists.map((nav) => (
              <div key={nav} className='px-5 text-gray text-[14px] hover:text-white transition-all cursor-pointer'>
                {nav}
              </div>
          ))}
        </div>
        <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
          <img src={searchImg} alt='Search' className='cursor-pointer'/>
          <img src={bagImg} alt='bag' className='cursor-pointer' />
        </div>
      </nav>
    </header>
  )
}

export default Navbar