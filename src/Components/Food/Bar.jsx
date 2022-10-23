import React, { useEffect, useState ,useRef} from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import {BsFillCartFill} from 'react-icons/bs'
import {GrLocation} from 'react-icons/gr'
import {MdDeleteForever} from 'react-icons/md'
import axios from 'axios'
import seed from '../../seed'
import {Link,useNavigate } from 'react-router-dom'
import Facilities from './Facilities'
import FoodItems from './FoodItems'



const Bar = ({user,setUser}) => {
    let listItem = [];
    const cr = [];
    let target;
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        console.log("useEffect cart "+cart);
    },[]);
    const flag = true;
    const [choice,setChoice] = useState("");
    const [city,setCity] = useState("Yamunanagar");
    const navigate = useNavigate();
    const set=(e)=>{
        setCity(e.target.value);
    }
    let price = 0;
    const closeCart = (e)=>{
        const list = document.getElementById("cartx").classList;
        let bol = list.contains("hidden");
        
        console.log(e.target.id + " " + target);
        if(bol )
        {
            
        }else{
            if((e.target.id)===target){

            }
            else if(e.target.id == "cartx" || e.target.id=="crt" ){
                
            }
            else{
                list.add("hidden");
            }
        }
        
    }
    const toggleCart = (e)=>{
        target = e.target.id;
        console.log(e.target);
        console.log("Inside "+cart);
        const list = document.getElementById("cartx").classList;
        list.toggle("hidden");
        listItem = localStorage.getItem("items").split(",")
    }
   
    const del=(e)=>{
      const vl=(e.target.id).toString();
     
      const tt = localStorage.getItem("items").split(",");
      console.log(tt.indexOf(vl));
    // localStorage.setItem("items",localStorage.getItem("items").substring(0,tt)+localStorage.getItem(tt+1));
    
}
    var xx ={};
    const Out=()=>{
        localStorage.clear();
        setUser=xx;
        navigate('/login');

    }
  return (
    <div className='min-w-screen' onClick={closeCart}>
        <div className='md:container px-3 pt-4 '>
            <div className=" lg:px-3 w-screen py-2  flex items-center justify-evenly " >
               <div className='w-[200px] md:w-[350px] flex flex-row align-middle justify-center items-center'>
                 <img className='w-[40%] md:w-[42%]' src={'/logo.png'}/>
                <h1 className='text-3xl md:text-5xl  font-semibold' style={{fontFamily:"Tangerine"}}>The Ray</h1>
                {/* < h1 className=' text-4xl font-bold  px-4' style={{fontFamily:"Tangerine",fontSize:"4rem"}}>The Ray</h1> */}
                </div>
              <div className='wrapper hidden sm:flex lg:justify-center lg:w-[80%] gap-2 '>
                <div className=' relative w-1/3  lg:w-1/5'>
                    <select className='w-full text-end rounded-lg  font-semibold h-full border-2 border-gray-300' onChange={set} >                        
                       <option className='p-1' id="1" value="Yamunanagar">Yamunanagar</option>
                        <option className='p-1' id="2" value='Chandigarh' >Chandigarh</option>
                        <option className='p-1' id="3" value="Ambala" >Ambala</option>
                    </select>
                    <GrLocation className='absolute text-xl top-4 left-1'/>
                </div>
                <div className=' relative w-1/2 '>
                    <input className=' w-full py-3 rounded-lg px-2 border-2 border-gray-300 shadow-md ' type='text' placeholder={`Search for food or resturant`}/>
                    <BiSearchAlt2 className='absolute -mt-9 text-3xl right-2'/> 
                </div>
            </div>
                <div   className='flex gap-3 mr-3 items-center'>
                   <div  id="icon" onClick={toggleCart} className=" cursor-pointer"> <BsFillCartFill   className='pointer-events-none text-3xl'/></div>
                 <button className='w-24 py-2 bg-yellow-500 rounded   cursor-pointer' onClick={Out}>Log Out</button></div>
        
            </div>  
            <div id="crt" className='cursor-pointer fixed top-5 right-0'>
            <div id='cartx' className="hidden pointer-events-none absolute bg-red-300  right-6 w-[75vw] md:w-[40vw] lg:w-[25vw]">
            
                    <h1 className='text-center border-b-2 border-b-white text-white text-2xl'>Cart Items </h1>
                <div className='px-3 py-3'>
                    <ul className='p-2'>
                        {console.log(localStorage.getItem("items"))}
                        {
                        
                          seed.map((food)=>{
                            
                                const ll = localStorage.getItem("items");
                                let num=0;
                                if(ll){const ml = localStorage.getItem("items").split(",");
                                for(let i=0;i<ll.length;i++)
                                {
                                    if(ll.charAt(i)==food.id){
                                        num++;
                                    }
                                }}
                                // console.log("this is al "+al)
                                if(ll && ll.match(food.id)){
                                price=price+(num*food.price);
                                }
                                return (ll && ll.match(food.id)?(
                                <li key={food.id} className='border-t-2 border-b-2'>
                                    < div className='flex flex-row h-[100px] m-2'>
                                        <img className='w-1/3' src={food.img}/>
                                        <div className='w-2/3'>
                                            <h2 className='text-center text-white text-xl font-semibold'>{food.name}</h2>
                                            <p className='text-center text-lg'>Qtn: {num}</p>
                                            <p className='text-center text-lg'>Price : ${food.price}/-</p>
                                        </div>
                                        <div className='flex items-center' id={food.id} onClick={del}><div className='text-2xl ' ><MdDeleteForever/></div></div>
                                    </div>
                                </li>
                                ):<li key={food.id}></li>)
                            })
                        }
                        
                        
                    </ul>
                    <div className='flex flex-row justify-between'>
                    <div className="flex space-x-2 justify-center">
  <button
    type="button"
    data-mdb-ripple="true"
    data-mdb-ripple-color="light"
    className="inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
  >Order</button>
</div>
                    <p className='text-white text-xl'>Total Price: <span className='text-white mr-2 text-xl font-semibold underline underline-offset-1'>${price}</span> </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
        <Facilities setChoice={setChoice}/>

            <div className='mt-4'>
                <div className="container mx-auto justify-center">
                    <div className="container flex justify-center">
                        <div className="flex gap-4 flex-wrap">
                            <div className='p-2 border text-slate-500 border-slate-400 hover:scale-110'>Filters</div>
                            <div className='p-2 border text-slate-500 border-slate-400 hover:scale-110'>Rating</div>
                            <div className='p-2 border text-slate-500 border-slate-400 hover:scale-110'>Safe and Hygenic</div>
                            <div className='p-2 border text-slate-500 border-slate-400 hover:scale-110'>Pure Veg</div>
                            <div className='p-2 border text-slate-500 border-slate-400 hover:scale-110'>Great Offers </div>
                        </div>
                    </div>
                </div>
            </div>

        <h2 className='text-3xl font-semibold text-center py-2 mt-2'>Best Food in {city}</h2>
        <FoodItems choice={choice} cart={cart} cr={cr} setCart={setCart}/>
         
    </div>
  )
  function print(e){
    console.log(e.target);
  }
}

export default Bar