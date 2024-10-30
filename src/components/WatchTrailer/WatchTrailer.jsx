import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import usePlayTrailer from '../../hooks/usePlayTrailer';
import "./WatchTrailer.css";
import TrailerHeader from '../TrailerHeader/TrailerHeader';
import DotsLoading from "../DotsLoading/DotsLoading";

const WatchTrailer = () => {
  const [isVideoNotFound, setIsVideoNotFound] = useState(false);
  
  const movieId = useSelector(store => store.trailer.movieId);
  const watchTrailer = useSelector(store => store.trailer.playTrailer);
  const darkMode = useSelector(store => store.config.darkMode);

  usePlayTrailer(movieId);

  useEffect(() => {
    let timer;
    
    if (!watchTrailer) {
      timer = setTimeout(() => {
        setIsVideoNotFound(true);
      }, 5000); // 3 seconds
    } else {
      setIsVideoNotFound(false); // reset if watchTrailer becomes available
    }
    
    return () => clearTimeout(timer); // Cleanup on component unmount or watchTrailer change
  }, [watchTrailer]);

  return (
    <div className='watch-trailer'>
      <TrailerHeader />

      {watchTrailer?.key ? (
        <iframe
          className="iframe-watch-trailer"
          src={`https://www.youtube.com/embed/${watchTrailer?.key}?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&modestbranding=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : isVideoNotFound ? (
        <div className={!darkMode ? 'trailer-error1 trailer-error' : 'trailer-error2 trailer-error'}>
          We're sorry, but the trailer couldn't be loaded. Try selecting another video.!
        </div>
      ) : (
        <div className={!darkMode ? 'trailer-error1 trailer-error' : 'trailer-error2 trailer-error'}>
          <DotsLoading />
        </div>
      )}
    </div>
  );
};

export default WatchTrailer;
