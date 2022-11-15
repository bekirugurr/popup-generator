import React from 'react'
import {MdSync} from 'react-icons/md'
import {BiCheckShield} from 'react-icons/bi'
import {BiBadgeCheck} from 'react-icons/bi'

const TopOfFooter = () => {
    const contentArray = [
        {
          logo: <BiCheckShield />,
          header: "Pixel Perfect",
          content: "Helps you calculate your email marketing roi to measure success.",
        },
        {
          logo: <MdSync />,
          header: "Conversion Ready",
          content: "Empowers your emails by generating afree code for a CTA in your subject line.",
        },
        {
          logo: <BiBadgeCheck />,
          header: "Modern & Useful",
          content: "Enables you to estimate the total profit of your investment on a popup service.",
        }
      ];
  return (
    <section>
    <h2 className='text-4xl font-semibold text-center my-12'>Conversion & UX ready popups & modals</h2>
    <ul className='flex my-12 gap-3 sm:gap-8'>
        {contentArray.map((item, index)=>(
        <li key={index} className='w-1/3 p-6 sm:py-12 sm:px-6 lg:px-12 bg-gray-200 rounded-xl flex flex-col justify-start items-center gap-4'>
            <div className='text-5xl text-prime-violet'>
            {item.logo}
            </div>
            <h3 className='text-lg text-center font-semibold'>{item.header}</h3>
            <p className='text-center'>{item.content}</p>
        </li>
        ))}

        {/* <li className='w-1/3 p-6 sm:py-12 sm:px-6 lg:px-12 bg-gray-200 rounded-xl flex flex-col justify-center items-center gap-4'>
            <div className='text-5xl text-prime-violet'>
            <BiCheckShield/>
            </div>
            <h3 className='text-lg text-center font-semibold'>Pixel Perfect</h3>
            <p className='text-center'>Helps you calculate your email marketing roi to measure success.</p>
        </li>
        <li className='w-1/3 p-6 sm:py-12 sm:px-6 lg:px-12 bg-gray-200 rounded-xl flex flex-col justify-center items-center gap-4'>
            <MdSync className='text-5xl text-prime-violet'/>
            <h3 className='text-lg text-center font-semibold'>Conversion Ready</h3>
            <p className='text-center'>Empowers your emails by generating afree code for a CTA in your subject line.</p>
        </li>
        <li className='w-1/3 p-6 sm:py-12 sm:px-6 lg:px-12 bg-gray-200 rounded-xl flex flex-col justify-center items-center gap-4'>
            <BiBadgeCheck className='text-5xl text-prime-violet'/>
            <h3 className='text-lg text-center font-semibold'>Modern & Useful</h3>
            <p className='text-center'>Enables you to estimate the total profit of your investment on a popup service.</p>
        </li> */}
    </ul>
</section>
  )
}

export default TopOfFooter