import React from 'react'
import {IMG_CDN_URL} from "../../utils/consts";
import "./MovieCard.css"
const MovieCard = ({movieImg}) => {
  return (
    <div className='movie-card'>
        <img src={IMG_CDN_URL+movieImg} className='movie-card-img'></img>
    </div>
  )
}

export default MovieCard