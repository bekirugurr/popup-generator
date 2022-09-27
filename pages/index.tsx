import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import GraySection from '../components/GraySection'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SelectPanel from '../components/SelectPanel'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Popup Generator</title>
    </Head>
      <Navbar/>
      <Header/>
      <GraySection/>
      <SelectPanel/>
      <div className='h-24 bg-green-500'></div>
      <Footer/>
    </>
  )
}

export default Home
