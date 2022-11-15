import React from 'react'
import Accordion from './footerComponents/Accordion'
import BottomOfFooter from './footerComponents/BottomOfFooter'
import TopOfFooter from './footerComponents/TopOfFooter'


const Footer = () => {
  return (
    <footer className='px-3 md:px-24 lg:px-32 mb-6'>
        <TopOfFooter/>
        <Accordion/>
        <BottomOfFooter/>
    </footer>
  )
}

export default Footer