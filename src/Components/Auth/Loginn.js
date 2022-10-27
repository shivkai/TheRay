import React, { useState,useEffect } from 'react'
// import { GoogleLogin } from '@react-oauth/google'
import {GoogleLogin} from 'react-google-login'
import axios from 'axios';
import { gapi } from 'gapi-script';
import jwt_decode from 'jwt-decode'
import { Link } from 'react-router-dom';

const Loginn = ({setUser}) => {
  const style = {
    '*':'none',
  }
  const clientId = "114250867045-h3jlop0n66mt8o3chpikiqq1eitkte9v.apps.googleusercontent.com";
  const [password,setpassword] = useState("");
  const [email,setemail] = useState("");
  const [err,setErr] = useState({});
  const [ok,setOk] = useState({});
  const onSuccess = (res) => {

    console.log('success:', res.googleId);
    setUser( res);
};
const onFailure = (err) => {
    console.log('failed:', err);
};
useEffect(() => {
  const initClient = () => {
        gapi.client.init({
        clientId: clientId,
        scope: 'email profile'
      });
   };
   gapi.load('client:auth2', initClient);
});
  
    const trig= (e)=>{
      e.preventDefault();

      axios.post(`https://theray.herokuapp.com/api/login`,{email,password})
       .then((data)=>{
        console.log(data.statusText);
        if(data.statusText==="OK"){
        setOk(data.statusText);}
        else if(data.statusText==="No Content"){
          setErr(data.statusText);
        }
        const ff = jwt_decode(data.data.user);
          setUser(ff);
          
       })
       .catch((err)=>{
          if(err.status)
          console.log(err)
      });
  }
  
 
  
  return (
    <div className=" bg-gray-100 text-gray-900 flex flex-col md:flex-row justify-center">

    <div className='bg-white  md:hidden'>
<img
  src={'/ray.png'}
  className="h-[55px]  md:h-30 mx-auto"
  alt='ddd'
/>
</div>
      <div
      className="max-w-screen-xl lg:flex-row flex-col-reverse m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1"
    >
      <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className='hidden md:block'>
          <img
            src={'/ray.png'}
            className="h-[55px] md:h-30 mx-auto"
            alt='ddd'
          />
        </div>
        <div className="mt-12 flex flex-col items-center">
          <h1 className="text-2xl xl:text-3xl font-extrabold">
            Hungry? Login Fast!
          </h1>
          <div className="w-full flex-1 mt-8">
            <div className="flex flex-col items-center">
              <GoogleLogin
              render={renderProps => (
                <button   className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                onClick={renderProps.onClick} style={{'*':"none"}}>
                 <div className="bg-white p-2 rounded-full">
                  <svg className="w-4" viewBox="0 0 533.5 544.3">
                    <path
                      d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                      fillRule="#4285f4"
                    />
                    <path
                      d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                      fillRule="#34a853"
                    />
                    <path
                      d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                      fillRule="#fbbc04"
                    />
                    <path
                      d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                      fillRule="#ea4335"
                    />
                  </svg>
                </div>
                <span className="ml-4">
                  Login with Google
                </span>
                 </button>
              )}
               clientId={clientId}
               buttonText="Sign in with Google"
               onSuccess={onSuccess}
               onFailure={onFailure}
               cookiePolicy={'single_host_origin'}
               style={style['*']}
                >
                
              </GoogleLogin>
             

              {/* <button
                className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
              >
                <div className="bg-white p-1 rounded-full">
                  <svg className="w-6" viewBox="0 0 32 32">
                    <path
                      fillRule="evenodd"
                      d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                      />
                  </svg>
                </div>
                <span className="ml-4">
                  Login with GitHub
                </span>
              </button> */}
            </div>

            <div className="my-6 border-b text-center">
              <div
                className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Or Login with e-mail
              </div>
            </div>
            {(err && err.length>0)? <div id="alert-2" class="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-red-700 dark:text-red-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div class="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
   <h2>Invalid Credentials. Check Your Email and Password.</h2>
  </div>
  <button type="button" onClick={()=>{setErr({})}} class="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>:<div></div>

            }
            {
              (ok && ok.length>0)?<div id="alert-3" class="flex p-4 mb-4 bg-green-100 rounded-lg dark:bg-green-200" role="alert">
              <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5 text-green-700 dark:text-green-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Info</span>
              <div class="ml-3 text-sm font-medium text-green-700 dark:text-green-800">
               <h2>Login Successfull</h2>
              </div>
              <button type="button" onClick={()=>{setOk({})}} class="ml-auto -mx-1.5 -my-1.5 bg-green-100 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex h-8 w-8 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300" data-dismiss-target="#alert-3" aria-label="Close">
                <span class="sr-only">Close</span>
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </div>:<div></div>
            }
           
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
              <button onClick={trig}
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
                  Login
                </span>
              </button>
              
             
            </div>
            <p className='text-center font-medium'>Not Registered? <Link className='font-semibold underline text-blue-600' to='/signup'>Sign Up </Link>here</p>
            <p className='text-center font-medium text-md'>Or Go Back To <Link className='font-semibold underline text-blue-600' to='/'>Home </Link></p>
          </div>
        </div>
      </div>
      <div className="flex-1  px-2 bg-indigo-100 text-center ">
  <img
    className="md:ml-0  my-8 md:my-11 animate-spin  w-full bg-contain bg-center bg-no-repeat"
    src={"/ne.png"}
  />
</div>
    </div>
    
    </div>

    
  )
}

export default Loginn