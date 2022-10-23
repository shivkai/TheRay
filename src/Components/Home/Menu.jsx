import React from 'react'

const Menu = () => {
  return (
    <>
        <div className=''>
            <div className="py-3 px-2 ">
                <div className="py-3 w-4/6 sm:w-[90vw] lg:w-[70vw] mx-auto" >
                    <div className='mb-5  flex justify-center flex-1'>
                        <h1 className='text-center border-0 p-2 border-r-2 border-b-2 border-slate-700 inline-block text-3xl font-extrabold sm:text-5xl font-[Tangerine]'>Our Most liked product's</h1>
                    </div>
                    <div className=' container' id="menu">
                        <div className=' container flex justify-evenly'>
                            <div className='flex items-center flex-row hover:bg-slate-700 p-2 rounded-md'>
                            <i className="fa fa-seedling text-yellow-600 text-xl mr-1"></i>Vegan
                                </div>
                                <div className='flex items-center flex-row hover:bg-yellow-600 p-2 rounded-md'>
                            <i className="fa fa-drumstick-bite text-slate-700 text-xl mr-1"></i>Vegan
                                </div>
                                <div className='flex items-center flex-row hover:bg-slate-700 p-2 rounded-md'>
                            <i className="fa fa-ice-cream text-yellow-600 text-xl mr-1"></i>Vegan
                                </div>
                        </div>
                    </div>
                    <div className='sm:grid gap-4 my-5 sm:grid-cols-2 flex flex-col'>
                        
                        <div className='container flex-1 flex border-[1px] p-1 '>
                            <img className='max-w-[42%] p-1' src={process.env.PUBLIC_URL+"/food.jpg"} />
                            <div className='flex justify-center flex-col m-1'>
                                <h1 className=' border-slate-700 border-0 rounded border-b-4'>Chesse burger</h1>
                                <p>The best and chessiest burger</p>
                            </div>
                        </div>
                        <div className='container flex-1 flex border-[1px] p-1 '>
                            <img className='max-w-[42%] p-1' src={process.env.PUBLIC_URL+"/food.jpg"} />
                            <div className='flex justify-center flex-col m-1'>
                                <h1 className=' border-slate-700 border-0 rounded border-b-4'>Chesse burger</h1>
                                <p>The best and chessiest burger</p>
                            </div>
                        </div>
                        <div className='container flex-1 flex  border-[1px] p-1 '>
                            <img className='max-w-[42%] p-1' src={process.env.PUBLIC_URL+"/food.jpg"} />
                            <div className='flex justify-center flex-col m-1'>
                                <h1 className=' border-slate-700 border-0 rounded border-b-4'>Chesse burger</h1>
                                <p>The best and chessiest burger</p>
                            </div>
                        </div>
                        <div className='container flex-1 flex  border-[1px] p-1 '>
                            <img className='max-w-[42%] p-1' src={process.env.PUBLIC_URL+"/food.jpg"} />
                            <div className='flex justify-center flex-col m-1'>
                                <h1 className=' border-slate-700 border-0 rounded border-b-4'>Chesse burger</h1>
                                <p>The best and chessiest burger</p>
                            </div>
                        </div>
                       
                       
                        

                      
                      
                        
                      
                        
                    </div>
                </div>
            </div>
        </div>
<div className='bg-slate-900 ' style={{boxShadow:"1px 0px 7px 3px grey, 4px 1px 3px 2px grey"}}>
        <div className='container w-[100vw] sm:w-auto h-[41rem] justify-center items-cente sm:m-0 mx-auto flex flex-1 flex-col sm:flex-row'>
            <div className='sm:w-1/2  '> <img className='h-full' src={process.env.PUBLIC_URL+"/food.jpg"} /></div>
              <div className='sm:w-1/2 mt-10 sm:py-5 ml-1 flex flex-col justify-center'>
                    <div className='mt-2'>
                        <h3 className='text-yellow-500 ml-5  text-xl' >Reservation_____</h3>
                        <h1 className='text-center text-3xl font-bold text-orange-500'>Book Table Online</h1>
                    </div>
                  <form className='mt-1 px-2 py-1 '>

                      <div className="grid xl:grid-cols-2 gap-2 xl:gap-6 mb-3">
                          <div className="relative z-0 w-full mb-6 group">
                              <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                              <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                          </div>
                      </div>
                      <div className="grid xl:grid-cols-2 xl:gap-6 gap-2 mt-3">
                          <div className="relative z-0 w-full mb-6 group">
                              <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                          </div>
                          <div className="relative z-0 w-full mb-6 group">
                              <input type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                              <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
                          </div>
                      </div>
                      <div className='flex justify-center'>
                            <button type="submit" className="text-white bg-yellow-500  focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-600 dark:focus:ring-yellow-700">Book Now</button>
                       </div>
                  </form>
              </div>
        </div>
</div>
<div>
            <div className='py-8'>
                <h2 className='text-center text-xl text-orange-500 font-mono'><p className='h-[3px] bg-orange-400 w-8 inline-block'></p>Team Members<p className='h-[3px] bg-orange-400 w-8 inline-block'></p></h2>
                <h1 className='text-center text-3xl text-yellow-500 font-mono font-bold'>Our Master Chef's</h1>
            </div>
        <div className='conatiner sm:py-3 flex flex-1 justify-center'>
            <div className="container   sm:px-8">
                <div className="grid md:grid-cols-4 gap-3">


                <div className="sm:min-w-[60%] sm:mx-auto md:min-w-[100%] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pt-5 pb-10">
                        <img className="mb-3 w-36 h-36 rounded-full shadow-lg" src={process.env.PUBLIC_URL+"/food.jpg"} alt="Bonnie image"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                </div>
                <div className="sm:min-w-[60%] md:min-w-[100%] sm:mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pt-5 pb-10">
                        <img className="mb-3 w-36 h-36 rounded-full shadow-lg" src={process.env.PUBLIC_URL+"/food.jpg"} alt="Bonnie image"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                </div>
                <div className="sm:min-w-[60%] md:min-w-[100%] sm:mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pt-5 pb-10">
                        <img className="mb-3 w-36 h-36 rounded-full shadow-lg" src={process.env.PUBLIC_URL+"/food.jpg"} alt="Bonnie image"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                </div>
                <div className="sm:min-w-[60%] md:min-w-[100%] sm:mx-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex flex-col items-center pt-5 pb-10">
                        <img className="mb-3 w-36 h-36 rounded-full shadow-lg" src={process.env.PUBLIC_URL+"/food.jpg"} alt="Bonnie image"/>
                        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Bonnie Green</h5>
                        <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                    </div>
                </div>
                

</div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Menu