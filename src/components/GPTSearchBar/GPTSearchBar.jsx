import React from 'react'
import "./GPTSearchBar.css"
import language from "../../utils/languagePrefered"
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {

  const langKey=useSelector((store)=>store.config.language);
  return (
    <div className='gpt-searchbar'>
      <input placeholder={language[langKey].gptSearchPlaceholder}></input>
      <button>{language[langKey].search}</button>
    </div>
  )
}

export default GPTSearchBar