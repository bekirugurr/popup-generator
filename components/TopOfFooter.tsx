import React from 'react'
import {MdSync} from 'react-icons/md'
import {BiCheckShield} from 'react-icons/bi'
import {BiBadgeCheck} from 'react-icons/bi'

const TopOfFooter = () => {
  return (
    <section>
    <h2 className='text-4xl font-semibold text-center my-12'>Conversion & UX ready popups & modals</h2>
    <ul className='flex my-12 gap-8'>
        <li className='w-1/3 p-12 bg-gray-200 rounded-xl flex flex-col justify-center items-center gap-4'>
            <BiCheckShield className='text-5xl text-prime-violet'/>
            <h3 className='text-lg font-semibold'>Pixel Perfect</h3>
            <p className='text-center'>Helps you calculate your email marketing roi to measure success.</p>
        </li>
        <li className='w-1/3 p-12 bg-gray-200 rounded-xl flex flex-col justify-center items-center gap-4'>
            <MdSync className='text-5xl text-prime-violet'/>
            <h3 className='text-lg font-semibold'>Conversion Ready</h3>
            <p className='text-center'>Empowers your emails by generating afree code for a CTA in your subject line.</p>
        </li>
        <li className='w-1/3 p-12 bg-gray-200 rounded-xl flex flex-col justify-center items-center gap-4'>
            <BiBadgeCheck className='text-5xl text-prime-violet'/>
            <h3 className='text-lg font-semibold'>Modern & Useful</h3>
            <p className='text-center'>Enables you to estimate the total profit of your investment on a popup service.</p>
        </li>
    </ul>
</section>
  )
}

export default TopOfFooter