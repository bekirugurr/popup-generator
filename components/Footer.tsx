import React from 'react'
import Accordion from './Accordion'
import BottomOfFooter from './BottomOfFooter'
import TopOfFooter from './TopOfFooter'


const Footer = () => {
  return (
    <footer className='px-32 mb-36'>
        <TopOfFooter/>
        <Accordion/>
        <BottomOfFooter/>
    </footer>
  )
}

export default Footer