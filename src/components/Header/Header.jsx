import React, { useEffect } from 'react'
import "./Header.css"
import {LOGO} from "../../utils/consts"
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../../redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from '../../utils/firebase'
import { addUser } from '../../redux/userSlice'
import avatar from "../../assets/avatar.jpg"
import {  ignOut } from "firebase/auth";
import {toogleGptSearchValue} from "../../redux/gptSlice"
import { SUPPORTED_LANGUAGES } from '../../utils/consts'
import { changeLanguage } from '../../redux/configSlice'

const Header = () => {

  
  const data=useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    
    
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
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

  const handleGPTSearch=()=>{
    //do something
    dispatch(toogleGptSearchValue());
  }

  const gptSearchValue=useSelector(store=>store.gpt.gptSearchValue);

  const handleLanguageSelected=(e)=>{
    
    dispatch(changeLanguage(e.target.value));

  }

  return (
    <div className="header">
            <img src={LOGO} alt="logo" className="logo" />

            {data ? (
                <div className="nav-right">

                  
                  {gptSearchValue ? <select onChange={handleLanguageSelected}>
                    {SUPPORTED_LANGUAGES.map((lang)=>{
                      return(
                        <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                      )
                    })}
                    
                  </select> :null}

                  <button className='search-btn' onClick={handleGPTSearch}>{gptSearchValue ? "Browse" :"GPT Search"}</button>

                   

        
                    <img src={avatar} className='avatar' alt="avatar" onClick={() => {
                  signOut(auth).then(() => {
                    // Sign-out successful.
                  }).catch((error) => {
                    // An error happened.
                  });

                }}/>
                    
                </div>
                
            ) : null}
        </div>
  )
}

export default Header