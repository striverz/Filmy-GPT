import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import usePlayTrailer from '../../hooks/usePlayTrailer';
import "./WatchTrailer.css"
import Header from "../Header/Header"
import TrailerHeader from '../TrailerHeader/TrailerHeader';

const WatchTrailer = () => {

  const movieId=useSelector(store=>store.trailer.movieId);
  usePlayTrailer(movieId);

  const watchTrailer=useSelector(store=>store.trailer.playTrailer);
  const darkMode=useSelector(store=>store.config.darkMode);


 

 
  return (
    <div className='watch-trailer'>
      <TrailerHeader/>


        { watchTrailer?.key ? <iframe
      
      className="iframe-watch-trailer"
      src={`https://www.youtube.com/embed/${watchTrailer?.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      
      ></iframe>: <div className={darkMode ? 'trailer-error1 trailer-error' : 'trailer-error2 trailer-error'}>Error Occured!</div>}

    </div>
  )
}

export default WatchTrailer