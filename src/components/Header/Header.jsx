import React, { useEffect } from 'react'
import "./Header.css"
import {LOGO} from "../../utils/consts"
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../../utils/firebase'
import { addUser } from '../../redux/userSlice'

const Header = () => {

  const data=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    
    
   const unsubscribe= onAuthStateChanged(auth, (user) => {
    
      if (user) {
        // console.log("user called");
        
        const {uid,email,password} = user;
        dispatch(addUser({uid:uid,email:email,password:password}));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
      }
    });
    
    //unscribed the onAuthStatechanged callback
    return ()=>unsubscribe();
  
  },[]);

  return (
    <div className="header">
        <nav>
            <img src={LOGO} alt="logo" className="logo"></img>
            {data ? <h2 onClick={()=>{
              signOut(auth)
              .then(() => {
                
              })
              .catch((error) => {
                navigate("/error");
              });

            }}>(SignOut)</h2> :null}

        </nav>
        <h1></h1>
       
    </div>
  )
}

export default Header