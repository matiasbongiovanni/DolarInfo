import React from 'react'
import Menu from './Menu'

const Nav = () => {
  return (
    <header>
        <nav className='bg-[#09090b] h-20 flex items-center p-3 justify-between'>
            <span className='text-white font-bold text-2xl'><a href="#">DolarInfo</a></span>
                <ul className='text-white font-medium flex gap-5 items-center'>
                    <Menu />
                </ul>
        </nav>
    </header>
  )
}

export default Nav