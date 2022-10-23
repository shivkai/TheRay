import React from 'react'
import { Routes,Route, useNavigate } from 'react-router-dom'
// import Cart from '../Cart/Cart'
import Compiled from './Compiled'
import Main from '../Food/Main'
import { useState,useEffect } from 'react'
import Loginn from '../Auth/Loginn'
import Sign from '../Auth/Sign'
import Landing from '../Main/Landing'
const Home = () => {
  const [user,setUser] = useState({});
  const navigate = useNavigate();
  useEffect(()=>{

    console.log("Inside effect Home"+ user);
    if(user && user.userId && user.userId.length>0){
    localStorage.setItem("userId",user.userId);
      navigate('home');
    }
    else if(user && user.googleId && user.googleId.length>0)
    {
      localStorage.setItem("userId",user.googleId);
      navigate('home');
    }

  },[user]);
  return (
        <div  className="overflow-hidden">
            <Routes>
                 {/* <Route path='landing' element={<Compiled/>}/> */}
                 <Route path='nn' element={<Landing/>} />
                <Route path='signup' element={<Sign/>}/>
                <Route path='/' element={<Compiled/>}/> 
                <Route path='login'  element={<Loginn setUser={setUser}/>}/>
               {(localStorage.getItem("userId") && localStorage.getItem("userId").length>0) && <><Route path='home' element={<Main user={user} setUser={setUser}/>}/>
              {/* //   <Route path="cart" element={<Cart/>}/> */}
                 </>
  }
            </Routes>
        </div>
  )
}

export default Home