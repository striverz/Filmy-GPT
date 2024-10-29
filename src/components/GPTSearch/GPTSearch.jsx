import React from 'react'
import "./GPTSearch.css"
import languagePrefered from "../../utils/languagePrefered"
import { useSelector } from 'react-redux'
import GPTSearchBar from "../GPTSearchBar/GPTSearchBar"
import GPTMovies from '../GPTMovies/GPTMovies'

const GPTSearch = () => {

  return (
    <div className="gpt">
      <GPTSearchBar/>
      <GPTMovies/>
     
    </div>
  )
}

export default GPTSearch