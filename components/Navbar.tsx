import React from 'react'
import Image from 'next/image'
import navbarLogo from '../assets/navbarLogo.svg'
import { FiChevronDown } from 'react-icons/fi'

const Navbar = () => {
  return (
    <nav className='font-secondary font-medium my-1 py-2.5 px-32 flex flex-row justify-between items-center shadow-md shadow-slate-300/50'>
        <div className='flex flex-row  items-center gap-5'>
            <div className='pr-6 hover:text-prime-violet'>
                <a className='flex flex-row  items-center gap-1 cursor-pointer'><Image src={navbarLogo} alt='logo'/>
                <div className='font-bold'>modal.cards</div>
            </a></div>
            <div className='hover:text-prime-violet'><a className='cursor-pointer flex flex-row items-center gap-2'>Solutions  <FiChevronDown/></a></div>
            <div className='hover:text-prime-violet'><a className='cursor-pointer'>Product Tour</a> </div>
            <div  className='hover:text-prime-violet'><a className='cursor-pointer'>Showcase</a> </div>
            <div  className='hover:text-prime-violet'><a className='cursor-pointer'>Pricing</a> </div>
        </div>
        <div className='flex flex-row items-center gap-5'>
            <div className='hover:text-prime-violet'><a className='cursor-pointer'>Sign In</a> </div>
            <button className='w-28 bg-prime-violet hover:bg-violet-500 py-2 rounded-xl text-white left-32'>Try for free</button>
        </div>
    </nav>
  )
}

export default Navbar