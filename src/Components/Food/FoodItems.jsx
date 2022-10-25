import React from 'react'
import { useState } from 'react';
import {AiFillStar} from 'react-icons/ai'
import foodItems from '../../seed'
const FoodItems = ({choice,cart,setCart,cr}) => {
const arr = [];
    const add=(e)=>{
        const ff = foodItems.map((food)=>{
            
            if(food.id===e.target.id){
                console.log(food.name);
                if(!arr.includes(food.id)){
                 
                arr.push(...arr,food.id);
                console.log("This is arr "+cr);
            setCart(arr);}
                if(localStorage.getItem("items")){
                localStorage.setItem("items",localStorage.getItem("items")+","+food.id);
                }else{
                    localStorage.setItem("items",food.id);
                }
                return <li key={food.id}></li>
            }

        })
   
    }
  return (
    <div>
           <div className='py-1  flex justify-center '>
                <div className="container px-7 py-2 flex flex-col">
                   
                    <div className="container flex justify-evenly py-5">
                        <div className="sm:grid sm:grid-cols-2 flex flex-col gap-7">

                          {
                            foodItems.map((item)=>{
                                return(
                                    (choice==="")?(
                                        <div key={item.id} name={item.tag} className="max-w-md md:max-h-[485px] bg-transparent py-2 rounded-lg overflow-hidden hover:shadow-lg ">
                                        <img className="w-full h-[300px] " src={item.img} alt="Sunset in the mountains"/>
                                         <div className="container">
                                            <div className="grid grid-cols-2 mt-2">
                                                <h3 className='ml-4 font-semibold text-xl'>{item.name}</h3>
                                        
                                                <p className='text-end mr-2'>
                                                <span className="bg-blue-100 px-8 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                                     <AiFillStar/>                                {item.rating}
                                                </span>
        
                                                </p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <h4 className='ml-4 text-lg font-light'>{item.region}</h4>
                                                <p className='text-end mr-2 text-lg font-light italic'>${item.price} per person</p>
                                            </div>
                                         </div>
                                         <div className='flex justify-center mb-2'>                                   
                                                <button onClick={add} id={item.id} className=' bg-red-500 rounded-xl px-8 py-3 hover:bg-red-400 font-semibold text-white text-md'>Add To Cart</button>
                                            </div>
                                    </div>
                                ):(
                                    (choice===item.tag)?
                               
                            
                            <div key={item.id} name={item.tag} className="max-w-md md:max-h-[485px] bg-transparent py-2 rounded-lg overflow-hidden hover:shadow-lg ">
                            <img className="w-full h-[300px] " src={item.img} alt="Sunset in the mountains"/>
                             <div className="container">
                                <div className="grid grid-cols-2 mt-2">
                                    <h3 className='ml-4 font-semibold text-xl'>{item.name}</h3>
                            
                                    <p className='text-end mr-2'>
                                    <span className="bg-blue-100 px-8 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-blue-200 dark:text-blue-800">
                         <AiFillStar/>                                {item.rating}
                                    </span>

                                    </p>
                                </div>
                                <div className="grid grid-cols-2">
                                    <h4 className='ml-4 text-lg font-light'>{item.region}</h4>
                                    <p className='text-end mr-2 text-lg font-light italic'>${item.price} per person</p>
                                </div>
                             </div>
                             <div className='flex justify-center mb-2'>                                   
                                    <button onClick={add} id={item.id} className=' bg-red-500 rounded-xl px-8 py-3 hover:bg-red-400 font-semibold text-white text-md'>Add To Cart</button>
                                </div>
                        </div>:<div key={item.id}></div> )
                            )})}
                            
                           
                            
                    
                       </div>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default FoodItems