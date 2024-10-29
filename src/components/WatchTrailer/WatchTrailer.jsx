import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import usePlayTrailer from '../../hooks/usePlayTrailer';

const WatchTrailer = () => {

  const movieId=useSelector(store=>store.trailer.movieId);
  usePlayTrailer(movieId);

  const watchTrailer=useSelector(store=>store.trailer.playTrailer);
  console.log(watchTrailer);

 
  return (
    <div>
         <iframe
      
      className=""
      src={`https://www.youtube.com/embed/${watchTrailer?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      
      ></iframe>

    </div>
  )
}

export default WatchTrailer