import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import About from './About'
import Base from './Base'
import Menu from './Menu'

const Compiled = () => {
  return (
    <>
           <Navbar/>
            <Base/>
            <About/>
            <Menu/>
            <Footer/>
    </>
  )
}

export default Compiled