import "./VideoPlay.css"
import {API_OPTIONS} from '../../utils/consts';
import { useSelector } from 'react-redux';
import useMovieTrailer from "../../hooks/useMovieTrailer";



const VideoPlay = ({movieId}) => {


  
  useMovieTrailer(movieId);

  const trailerVideo=useSelector((store)=>store.movies?.movieTrailer);

  
  

  return (
    <div className="video-play">
      <iframe
      
      className="iframe-style"
      src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      
      ></iframe>
    </div>
  )
}

export default VideoPlay