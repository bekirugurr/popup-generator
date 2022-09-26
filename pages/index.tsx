import type { NextPage } from 'next'
import Head from 'next/head'
import GraySection from '../components/GraySection'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Popup Generator</title>
    </Head>
      <Navbar/>
      <Header/>
      <GraySection/>


    </>
  )
}

export default Home
