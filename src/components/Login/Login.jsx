import React, { useRef, useState } from 'react'
import "./Login.css"
import Header from '../Header/Header'
import formValidation from '../../utils/formValidation'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile  } from "firebase/auth";
import {auth} from "../../utils/firebase"
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from "../../redux/userSlice"
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSignIn=()=>{
    setIsSignIn(!isSignIn);
  }
  const email=useRef(null);
  const password=useRef(null);
  const name=useRef(null);


  const handleForm=()=>{

    const message=formValidation(email.current.value,password.current.value);
    setErrorMessage(message);
    if(message) return;

    //if everything goes well then do authentication
    if(!isSignIn){

    
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
     .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(auth.currentUser, {
        displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
      }).then(() => {

        const {uid,displayName,email,password}=auth.currentUser;

        dispatch(addUser({uid:uid,displayName:displayName,email:email,password:password}));
        // navigate("/browse");

        
        
      }).catch((error) => {
        // An error occurred
       
    
        // ...
      });
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(errorMessage);
      dispatch(removeUser());
      // ..
    });
  }
  else{
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
   .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    const {uid,email,password}=auth.currentUser;

    dispatch(addUser({uid:uid,email:email,password:password}));
    // navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage);
    dispatch(removeUser())
    
  });
  }



  }

  const [isSignIn,setIsSignIn]=useState(true);
  const [errorMessage,setErrorMessage]=useState(null);

  return (
    <>
    <Header/>
    <div className="login-page">

      <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
        <h1>{isSignIn ? "Sign In" :"Sign Up"}</h1>
         {!isSignIn && <input placeholder='Full Name' ref={name}></input>}
        <input placeholder='Email Address' type='text' ref={email}></input>
        <input placeholder='Password' type='password' ref={password}></input>
        {errorMessage!=null ?  <h4 className='error-msg'>{errorMessage}</h4> :null}
        <button onClick={handleForm}> {isSignIn ? "Sign In" : "Sign Up"}</button>
        <p onClick={handleSignIn}>{isSignIn ? "New to Netflix? Sign up now." :"Already have Netflix? Login now."}</p>
      </form>
     
    </div>
    </>
  )
}

export default Login