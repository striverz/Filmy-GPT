import React from 'react'
import "./GPTSearch.css"
import languagePrefered from "../../utils/languagePrefered"
import { useSelector } from 'react-redux'
import GPTSearchBar from "../GPTSearchBar/GPTSearchBar"

const GPTSearch = () => {

  return (
    <div className="gpt">
      <GPTSearchBar/>
     
    </div>
  )
}

export default GPTSearch