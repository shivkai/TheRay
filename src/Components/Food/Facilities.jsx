import React,{useState} from 'react'
import { GiFoodTruck, GiKnifeFork, GiWineBottle } from 'react-icons/gi'
import {IoFastFoodOutline} from 'react-icons/io5'
const Facilities = ({setChoice}) => {
   
    const[a,setA] = useState(false);
    const[b,setB] = useState(false);
    const[c,setC] = useState(false);
    const[d,setD] = useState(false);
    const setStyle=(e)=>{
        if(e.target.id=="a")
        {
            setChoice("");
            setA(true);
            setB(false);setC(false);setD(false);
        }
        else  if(e.target.id=="b")
        {
            setChoice("dinning");
            setA(false);
            setB(true);setC(false);setD(false);
        }
        else if(e.target.id=="c")
        {
            setChoice("party");
            setA(false);
            setB(false);setC(true);setD(false);
        }
        else if(e.target.id=="d")
        {
            setChoice("snack");
            setA(false);
            setB(false);setC(false);setD(true);
        }
    }
  return (
    <div>
          <div className='xs:mt-4 md:mt-1 '>
            <div className="container mx-auto">
                <div className="container flex flex-wrap justify-around ">
                   
                    <div className={`flex  items-center  rounded ${((a)?"border-b-4  border-red-400":"hover:scale-90")}`}>
                        <div   onClick={setStyle}  id="a" className='rounded-full bg-red-300 inline-block p-6'>
                         <GiFoodTruck className='text-3xl pointer-events-none'/>
                         </div>
                        <h3 className='text-center ml-1 font-semibold'>All</h3>
                    </div>
                    <div   className={`flex  items-center  p-1 rounded ${((b)?"border-b-4  border-red-400":"hover:scale-90")}`}>
                        <div onClick={setStyle} id="b" className='rounded-full  bg-red-300 inline-block p-6'>
                         <GiKnifeFork className='text-3xl pointer-events-none'/>
                         </div>
                        <h3 className='text-center ml-1 font-semibold'>Dining Out</h3>
                    </div>
                    <div  className={`flex  items-center p-1 rounded ${((c)?"border-b-4 border-red-400":"hover:scale-90")}`}>
                        <div  onClick={setStyle} id="c" className='rounded-full bg-red-300 inline-block p-6'>
                         <GiWineBottle className='text-3xl pointer-events-none'/>
                         </div>
                        <h3 className='text-center ml-1 font-semibold'>Night Life</h3>
                    </div>
                    <div    className={`flex  items-center  p-1 rounded ${((d)?"border-b-4 border-red-400":"hover:scale-90")}`}>
                        <div onClick={setStyle} id="d" className='rounded-full bg-red-300 inline-block p-6'>
                         <IoFastFoodOutline className='text-3xl pointer-events-none'/>
                         </div>
                        <h3 className='text-center ml-1 font-semibold'>Snacks</h3>
                    </div>
                    
                 
                </div>
            </div>
        </div>
<hr/>
    </div>
  )
}

export default Facilities