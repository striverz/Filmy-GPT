import React from 'react'
import "./VideoInfo.css"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addMovieId } from '../../redux/trailerSlice'
import { FaRegPlayCircle } from "react-icons/fa";
import { GoInfo } from "react-icons/go";


const VideoInfo = ({title,overview,id}) => {

  const dispatch=useDispatch();
  const navigate=useNavigate();

  

  const handleClick=()=>{
    dispatch(addMovieId(id));
    navigate(`/watch/${id}`);
        
        

  }

  
  return (
    <div className="video-info">
      <h1>{title}</h1>
      <p>{overview}</p>
      <div className='btn-c'>
        <button onClick={handleClick} className='play-btn'> <FaRegPlayCircle /> Play</button>
        <button className='play-btn' > <GoInfo />Info</button>
      </div>
    </div>
  )
}

export default VideoInfo