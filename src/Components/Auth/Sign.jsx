import React,{useState} from 'react'
import {Link, useNavigate}  from 'react-router-dom'
import axios from 'axios';
import jwt_decode from 'jwt-decode'
const Sign = () => {
    
        const [password,setpassword] = useState("");
        const [email,setemail] = useState("");
        const [err,setErr] = useState({});
        const [st,setSt] = useState("");
        const navigate = useNavigate();
        
          const trig= async (e)=>{
            e.preventDefault();
      
      if(password.length>0){
       await axios.post(`https://theray.herokuapp.com/api/register`,{email,password})
        .then((d)=>{
                console.log(d);
                setSt(d.data.msg)
                navigate('/login');
                // setUser(data.user);
            })
         .catch((err)=>{
          setErr(err);
                console.log(err);
            })
          }  
          else{

            setSt("Password And Respassword Does not match");
          }
          }
        
  return (
    <div>
        <div className=" bg-gray-100 text-gray-900 flex flex-col md:flex-row justify-center">

        <div className='bg-white  md:hidden'>
    <img
      src={'/ray.png'}
      className="h-[55px]  md:h-30 mx-auto"
      alt='ddd'
    />
  </div>
<div
className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-col-reverse md:flex-row flex-1"
>
<div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
  <div className='hidden md:block'>
    <img
      src={'/ray.png'}
      className="h-[55px]  md:h-30 mx-auto"
      alt='ddd'
    />
  </div>
  <div className="mt-12 flex flex-col items-center">
    <h1 className="text-2xl xl:text-3xl font-extrabold">
      Hungry? Sign Up Fast!
    </h1>
    <div className="w-full flex-1 mt-8">
     
      <div className="my-4 border-b text-center">
        <div
          className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
        >
          Sign Up with e-mail
        </div>
      </div>

      <div className="mx-auto max-w-xs">
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
          type="email"
          value={email}
          onChange={(e)=>{setemail(e.target.value)}}
          placeholder="Email"
        />
        <input
          className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
          type="password"
          value={password}
         onChange= {(e)=>{setpassword(e.target.value)}}
          placeholder="Password"
        />
        <button 
        onClick={trig}
          className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        >
          <svg
            className="w-6 h-6 -ml-2"
            fillRule="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
            <circle cx="8.5" cy="7" r="4" />
            <path d="M20 8v6M23 11h-6" />
          </svg>
          <span className="ml-3">
            Sign Up
          </span>
        </button>
        
       
      </div>
      <p className='text-center font-medium'>Already have account? <Link  className='font-semibold underline text-blue-600' to={'/login'}>Login </Link>Now</p>
      <p className='text-center font-medium text-md'>Or Go Back To <Link className='font-semibold underline text-blue-600' to='/'>Home </Link></p>

   
    </div>
  </div>
</div>
<div className="flex-1 px-2 bg-indigo-100 text-center ">
  <img
    className="md:ml-0  my-8 md:my-11 animate-spin  w-full bg-contain bg-center bg-no-repeat"
    src={"/ne.png"}
  />
</div>
</div>

</div>


    </div>
  )
}

export default Sign