import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaUser} from 'react-icons/fa'
import { RiCustomerService2Fill} from 'react-icons/ri'
import { MdRoomService} from 'react-icons/md'
import { BsFillCartCheckFill} from 'react-icons/bs'
import { BsFillArrowUpCircleFill} from 'react-icons/bs'
import { BsFillArrowDownCircleFill} from 'react-icons/bs'


const Base = () => {
    const toUp=()=>{
     
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    const toDown=()=>{
        document.body.scrollTop=5;
        document.documentElement.scrollTop = 10000;
    }
    const style={
        "font-family": 'Caveat'
    }
  return (

        <>
         {/* <div className='w-full bg-transparent max-h-full'></div> */}
        <div>
            <main className='min-w-[100vw] max-h-[90vh]  ' id="home">
                   <img className='max-h-[90vh] cursor-default min-w-[100vw] relative bg-cover bg-center' src={process.env.PUBLIC_URL+"/food.jpg"}/>
                    <div className='absolute  top-20 sm:top-1/4 left-8 h-24  md:top-1/3 md:left-5 md:w-1/2'>
                        <h1 className='text-2xl   sm:text-5xl md:text-6xl text-white' style={{fontFamily:"Caveat"}}>Hungry for food ?</h1>
                        <p className='text-1xl sm:text-2xl md:text-4xl sm:my-2 text-white font-[Caveat]'>Food is only one click away .</p>
                        <button className='bg-gray-700 sm:p-2  sm:my-2 rounded-md text-white  hover:bg-blue-800 '>Order now</button>
                        <button className='bg-yellow-500 mx-1 sm:p-2  sm:my-3 rounded-md text-white  hover:bg-blue-800 '>Book Table</button>
                    </div>

            </main>
        </div>
            <div className='w-full '>
                
                    <div className="container mx-auto py-11 px-5">

                        <div className="grid grid-cols-1 py-8 xs:grid-cols-2 sm:grid-cols-4 gap-3">
                            <div className='container  shadow-2xl py-11 px-2 max-w-sm mx-1 bg-white  hover:bg-yellow-500 hover:text-white '>
                                <div className='flex justify-center'>
                                    <FaUser className='text-lg'/>
                                   
                                </div>
                                <h1 className='text-center font-bold'>Master Chefs</h1>
                                <div className='my-1 sm:text-xs md:text-base'>Our chef are best in the world, with best training.</div>
                            </div >
                            <div className='container shadow-2xl py-11 px-2 max-w-sm mx-1 bg-white hover:bg-yellow-500 hover:text-white'>
                                <div className='flex justify-center'>
                                    <MdRoomService className='text-lg'/>
                                   
                                </div>
                                <h1 className='text-center font-bold'>Quality Food</h1>
                                <div className='my-1 sm:text-xs md:text-base'>Our chef are best in the world, with best training.</div>
                            </div >
                            <div className='container shadow-2xl py-11 px-2 max-w-sm mx-1 bg-white  hover:bg-yellow-500 hover:text-white '>
                                <div className='flex justify-center'>
                                    <BsFillCartCheckFill className='text-lg'/>
                                   
                                </div>
                                <h1 className='text-center font-bold'>Online Order</h1>
                                <div className='my-1 sm:text-xs md:text-base'>Our chef are best in the world, with best training.</div>
                            </div >
                            <div className='container shadow-2xl py-11 px-2 max-w-sm mx-1 bg-white hover:bg-yellow-500 hover:text-white'>
                                <div className='flex justify-center'>
                                    <RiCustomerService2Fill className='text-lg'/>
                                   
                                </div>
                                <h1 className='text-center font-bold'>24/7 Service</h1>
                                <div className='my-1 sm:text-xs md:text-base'>Our chef are best in the world, with best training.</div>
                            </div >
                           
                            
                        </div>                        
              
                </div>
                            
                       
            </div>
            <div className=' hidden sm:inline-flex sm:flex-col sm:top-2/3 sm:right-8 sm:fixed'>
              <button ><BsFillArrowUpCircleFill onClick={toUp} style={{fontSize:"60px"}} className='mb-4 text-gray-400 hover:text-white'/></button>
              <button ><BsFillArrowDownCircleFill onClick={toDown} style={{fontSize:"60px"}} className='text-gray-400 hover:text-white '/></button>
            </div>
            
        </>
        
            
  )
}

export default Base