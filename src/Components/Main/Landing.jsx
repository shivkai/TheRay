import React,{useState,useEffect} from "react";
import { BsPlayCircleFill } from "react-icons/bs";
import { FaHamburger } from "react-icons/fa";
import 'tw-elements'
import {Link} from 'react-router-dom'
const Landing = () => {
    const [show,setShow] = useState(false);

    const hum = ()=>{
        setShow(()=>{return (!show)})
    }
   
    const trigger = ()=>{
      const temp = document.getElementById("vid").classList;
      temp.toggle("hidden");
    }
    
    const [visible, setVisible] = useState(true)
    
    const handleScroll = () => {
        const currentScrollPos = window.scrollY
    
        if(currentScrollPos > 78){
            setVisible(false)
        }else{
            setVisible(true)
        }
    
    }
    
    useEffect( () => {
        window.addEventListener('scroll', handleScroll);
    
        return () => window.removeEventListener('scroll', handleScroll)
    })
    

  return (
    <>

    <div id="tt" className={`  ${visible?'bg-white':'bg-black opacity-90 text-white'} align-middle items-center px-2 flex flex-row fixed top-0 left-0  right-0 z-50 justify-between`}>
        <div className="relative ml-2">
            <p className="md:w-14 md:h-14 w-10 h-10 rounded-xl"><img className="rounded-full" src="/logo.png" /></p>
        </div>
        <div  className="hidden lg:w-[50%] lg:flex lg:flex-row lg:justify-evenly">
            <a href="#home" className="cursor-pointer px-4 pt-1 pb-1 hover:bg-slate-500 hover:rounded-md hover:text-white font-mono font-semibold text-lg">Home</a>
            <a href="#dish" className="cursor-pointer px-4 pt-1 pb-1 hover:bg-slate-500 hover:rounded-md hover:text-white font-mono font-semibold text-lg">Dish</a>
            <a href="#chef" className="cursor-pointer px-4 pt-1 pb-1 hover:bg-slate-500 hover:rounded-md hover:text-white font-mono font-semibold text-lg">Chefs</a>
            <p className="mt-2"><Link to="/login" className="px-4 py-2 mt-2 bg-green-400 mr-2 text-white rounded-sm">Login</Link><Link to="/signup" className="px-4 text-white py-2 rounded-sm bg-blue-500">Sign Up</Link></p>
        </div>
        <div id="burger" onClick={hum} className="lg:hidden text-xl cursor-pointer">
            <FaHamburger/>
        </div>
    </div>

   {show?(
    
    
      <div className="bg-black opacity-90 h-[100vh] w-[35vw] absolute top-0 left-0 z-40 p-4">
        <div className=" h-[80%]">
          <div className="flex h-[40%] opacity-100 flex-col justify-evenly">
            <p className=" text-white opacity-100 font-semibold py-2 px-1">Home</p>
            <p className=" text-white font-semibold  py-2 px-1">Dish</p>
            <p className="  text-white font-semibold  py-2 px-1">Chefs</p>
            <p className="  text-white font-semibold  py-2 px-1">Contact</p>
          </div>
        </div>
      </div>
   ):<></>} 

      <section className=" max-w-full" id="home" >
        <div className="">

        <img className="w-full bg-cover min-h-[80vh] mt-6 md:mt-3" src={"/landing.png"} alt="food image" />
        </div>
        <div className="absolute md:w-[55%] top-40 left-10 text-white leading-loose">
            <h2 className="text-xl">WIDE OPTIONS OF CHOICE</h2>
            <h1 className="text-5xl whitespace-nowrap md:text-6xl mt-4 font-serif font-semibold">Delicious Food</h1>
            <p className=" mtext-lg font-normal mt-4 break-words ">At Ray we take pride in what we make and in what we do.<br></br> We like minded people banded together to fullfill our aim to 
                providea healthy and good taste food at a affordable price.
            </p>
            <button className="mt-4 border border-red-500 bg-red-500 rounded-full px-3 py-2">CHECK OUR MENU</button>
        </div>
     
      </section>


      <section  className="mt-4 flex flex-col align-middle justify-center items-center">
        <div className="">
            <h1 className="text-center text-3xl tracking-wider font-medium">Our Top Rated Dishes</h1>
            <h2 className="text-center mt-2 font-normal tracking-wide">The most enjoyed dishes</h2>
        </div>
        <div className="mt-6 flex flex-nowrap mx-2  justify-center md:gap-2 lg:gap-1  flex-col md:flex-row items-center">

            <div className="flex mb-4 w-[60%] md:w-[28%] lg:w-[33%]   flex-col items-center justify-evenly gap-2  leading-10 ">
                <div className="hover:text-red-500  ">

                <img className="h-[25vh] hover:-skew-x-6 hover:scale-105 mb-2 " src={'/food.jpg'}/>
                <h2 className="text-center font-medium text-2xl">SOME FOOD</h2>
                </div>
                <h3 className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, delectus?</h3>
            </div>
            
            <div className="flex mb-4 w-[60%] md:w-[28%] lg:w-[33%]   flex-col items-center justify-evenly gap-2  leading-10 ">
                <div className="hover:text-red-500  ">

                <img className="h-[25vh] hover:-skew-x-6 hover:scale-105 mb-2 " src={'/food.jpg'}/>
                <h2 className="text-center font-medium text-2xl">SOME FOOD</h2>
                </div>
                <h3 className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, delectus?</h3>
            </div>

            <div className="flex mb-4 w-[60%] md:w-[28%] lg:w-[33%]   flex-col items-center justify-evenly gap-2  leading-10 ">
                <div className="hover:text-red-500  ">

                <img className="h-[25vh] hover:-skew-x-6 hover:scale-105 mb-2 " src={'/food.jpg'}/>
                <h2 className="text-center font-medium text-2xl">SOME FOOD</h2>
                </div>
                <h3 className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, delectus?</h3>
            </div>
            </div>
            
      </section>

      {/*  video */}

      <section id="dish" className="flex justify-center h-[80vh] mt-10 z-20 relative" style={{backgroundImage: "url(" +"/serv.png"+ ")",backgroundSize:"cover"}}>
        {/* <div className=" h-[90%] container absolute top-12 left-14 " >
        <iframe className="w-full h-[100%]  " src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>
        </div> */}

         <div className="container z-10 flex flex-col justify-center items-center align-middle h-[100%]">
          <div className="row-span-1 align-middle items-center flex flex-col justify-center">
            <BsPlayCircleFill onClick={trigger} className="text-8xl "/>
          <h1 className="text-3xl text-white"> We alway serve waping hot and tsty food.</h1>
          </div>
        </div>
        

<div id="vid" className="z-50 hidden">

        <div className="absolute flex items-center md:block h-[60vh] top-[10vh] left-[15vw] right-[15vw] bg-red-500">
        <iframe  className=" w-[100%] h-[50%] md:h-[100%]"
src="https://www.youtube.com/embed/tgbNymZ7vqY">
</iframe>

        </div>
</div>
      </section>

{/* Fetaures */}

<section className="mt-10 flex justify-center">
  <div className="lg:container grid lg:grid-rows-1 grid-cols-1 lg:grid-cols-4 gap-3">

  <div className="p-6 md:p-12 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-0">
    <img className="h-14 w-14" src="/f1.png" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-medium text-black">Fresh Breakfast</div>
    <p className="text-slate-500">We provide fresh and hand picked light breakfast</p>
  </div>
</div>

  <div className="p-6 md:p-12 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-0">
    <img className="h-14 w-14" src="/bento.png" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-medium text-black">Awesome Lunch</div>
    <p className="text-slate-500">We provide wide range of tasty lunch</p>
  </div>
</div>
  <div className="p-6 md:p-12 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-0">
    <img className="h-14 w-14" src="/dinner.png" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-medium text-black">Glossy Dinner</div>
    <p className="text-slate-500">We provide best food, service and location for dinner</p>
  </div>
</div>


  <div className="p-6 md:p-12 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div className="shrink-0">
    <img className="h-14 w-14" src="/buffet.png" alt="ChitChat Logo"/>
  </div>
  <div>
    <div className="text-xl font-medium text-black">Quality Buffet</div>
    <p className="text-slate-500">Our service and quality is second to none</p>
  </div>
</div>


  </div>
  
</section>

{/* carousel */}
<div className="my-2 h-1 bg-gray-300"></div>
        <section className=" mt-10 p-2 mb-4">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold italic mb-1">Our Featured Delicacy</h1>
            <h2 className="text-xl font-thin italic mb-2 ">The Soul of our restaurant</h2>
          </div>
          <div className="mx-auto ">
 
        <div id="carouselExampleControls" class="mx-auto w-[80%] h-[60%] carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
      <img
        src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        class="block w-full"
        alt="Camera"
      />
    </div>
    <div class="carousel-item relative float-left w-full">
      <img
        src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        class="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
           
</div>
        </section>

        {/* Chefs */}




<section id="chef" className="mt-10 p-4">
  <div className="flex justify-center mb-14">
    <h1 className="text-4xl font-semibold italic ">Our Master Chef's</h1>
  </div>
  <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 place-items-center">
  
    <div class=" md:w-[75%] rounded overflow-hidden shadow-lg">
  <img class="w-full h-[70%]" src="/pic.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">The Fryer</div>
    <p class="text-gray-700 text-base">
      Mia Yosuvich, alwyas up for oily ans fried items.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
<div class=" md:w-[75%] rounded overflow-hidden shadow-lg">
  <img class="w-full h-[75%]" src="/pic2.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-3">The Baker</div>
    <p class="text-gray-700 text-base">
      Rishi singh, The Baker geek.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

<div class=" md:w-[75%] rounded overflow-hidden shadow-lg">
  <img class="w-full h-[70%]" src="/pic1.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
  <div class="font-bold text-2xl mb-2">The Garnisher</div>
    <p class="text-gray-700 text-base">
      Hinamoto Yumi, The best garnisher second to none.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

<div class=" md:w-[75%] rounded overflow-hidden shadow-lg">
  <img class="w-full h-[70%]" src="/pic3.png" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
  <div class="font-bold text-2xl mb-2">The Soup Specialist</div>
    <p class="text-gray-700 text-base">
      Heena sharma, The godess of soupy food.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>

  </div>
 </section>

 <footer>


 <footer class="text-white p-4 rounded-sm shadow md:px-6 md:py-8 bg-black opacity-90 ">
    <div class="sm:flex sm:items-center sm:justify-between">
        <a href="#home" class="flex items-center mb-4 sm:mb-0">
            <img src="/logo.png" class="mr-3 h-8 rounded-full" alt="ray Logo"/>
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">The Ray</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm  sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="/nn" class="hover:underline">TheRay™</a>. All Rights Reserved.
    </span>
</footer>


 </footer>
    </>
  
      )}

export default Landing;