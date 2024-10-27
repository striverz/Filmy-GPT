import React, { useRef, useState } from 'react'
import "./Login.css"
import Header from '../Header/Header'
const Login = () => {

  const handleSignIn=()=>{
    setIsSignIn(!isSignIn);
  }

  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);

  const [isSignIn,setIsSignIn]=useState(true);
  
  return (
    <>
    <Header/>
    <div className="login-page">

      <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
        <h1>{isSignIn ? "Sign In" :"Sign Up"}</h1>
         {!isSignIn && <input placeholder='Full Name' ref={name}></input>}
        <input placeholder='Email Address' type='text' ref={email}></input>
        <input placeholder='Password' type='password' ref={password}></input>
        <button> {isSignIn ? "Sign In" : "Sign Up"}</button>
        <p onClick={handleSignIn}>{isSignIn ? "New to Netflix? Sign up now." :"Already have Netflix? Login now."}</p>
      </form>
     
    </div>
    </>
  )
}

export default Login