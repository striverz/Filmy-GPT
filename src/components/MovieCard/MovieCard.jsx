import React from 'react'
import {IMG_CDN_URL} from "../../utils/consts";
import "./MovieCard.css"
import { useDispatch } from 'react-redux';
import {addMovieId} from "../../redux/trailerSlice"
import { useNavigate } from 'react-router-dom';


const MovieCard = ({movieImg,movieId}) => {

  const dispatch=useDispatch();
  const navigate=useNavigate();
  
  if(!movieImg) return null;

  const handleClick=()=>{
    dispatch(addMovieId(movieId));
    navigate(`/watch/${movieId}`);
  }
 
  return (
    <div className='movie-card'>
        <img src={IMG_CDN_URL+movieImg} className='movie-card-img' alt='movie-card' onClick={handleClick}></img>
    </div>
  )
}

export default MovieCard