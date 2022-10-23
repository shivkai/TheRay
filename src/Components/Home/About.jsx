import React from 'react'
import {GiKnifeFork} from 'react-icons/gi'

const About = () => {

  return (
    <>
      <div id="about" className='p-8 bg-gray-900  md:flex ' style={{boxShadow:"grey 0px 0px 3px, grey 0px 0px 11px 4px"}}>
          
          <div className=' grid grid-flow-col grid-rows-2 grid-cols-2  gap-4 w-full'>
            <img className=' ml-auto  min-h-full  rounded ll'  src={process.env.PUBLIC_URL+"/food.jpg"}/>
          <img className=' ml-auto kk  rounded h-[72%] '  src={process.env.PUBLIC_URL+"/food.jpg"}/>
          <img className=' mt-auto sm:ml-5 jj rounded h-[72%] ' style={{marginLeft:"0px"}}  src={process.env.PUBLIC_URL+"/food.jpg"}/>
            <img className='min-h-full  rounded mm '  src={process.env.PUBLIC_URL+"/food.jpg"}/>
            </div>
            <div className='my-5'>
              <h1 className=' font-bold text-xl sm:text-3xl text-white ml-4'  style={{letterSpacing:"6px",fontFamily:"Alex Brush"}}>Welcome To The Resturant</h1>
              <h1 className={`text-end ml-10 text- sm:mr-20 font-extrabold text-3xl sm:text-4xl  text-yellow-500`} style={{fontFamily:"Calligraffitti"}}><p className='inline-block'><GiKnifeFork/></p> The Ray</h1>
              
              <p className='xs:text-xl sm:text-3xl text-red-600 text-center' style={{fontFamily:"Caveat"}}>The Resturant ray is started with a dream to provide basic human necessties of
              food and logging. It's aim is to provide the necessties at affordable
              prices.</p>
            <div className='flex justify-center mt-4'><button className='p-1 sm:p-2 rounded text-lg font-bold bg-yellow-500 text-gray-700'>Read More...</button></div>
            </div>
            </div>
           
            
    </>
  )
}

export default About