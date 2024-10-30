import React, { useState } from 'react'
import "./TrailerHeader.css"
import { LOGO } from '../../utils/consts'
import { useDispatch } from 'react-redux'
import { removePlayTrailer } from '../../redux/trailerSlice'
import { useNavigate } from 'react-router-dom'
import { FaMoon, FaSun } from 'react-icons/fa';
import { changeMode } from '../../redux/configSlice'

const TrailerHeader = () => {

  const [darkMode,setDarkMode]=useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleTrailerClick=()=>{

    dispatch(removePlayTrailer());
    navigate("/browse");

  }
  const handleDarkMode=()=>{
    setDarkMode(!darkMode);
    dispatch(changeMode());



  }

  return (
    <div className={!darkMode ? 'trailer-header1' :'trailer-header2'}>
       <img  src={LOGO} alt='logo' className='logo'></img>
       <div className='dark-container'>
        <button className={darkMode ? 'dark-mode1 dark-mode':'dark-mode2 dark-mode'} onClick={handleDarkMode}>{!darkMode ? <FaMoon/>: <FaSun/>}</button>
       <button onClick={handleTrailerClick} className='trailer-btn'>Go to Browse</button>
       </div>
       
        
    </div>
  )
}

export default TrailerHeader