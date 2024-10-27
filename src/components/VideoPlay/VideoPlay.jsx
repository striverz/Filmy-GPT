import "./VideoPlay.css"
import {API_OPTIONS} from '../../utils/consts';
import { useSelector } from 'react-redux';
import useMovieTrailer from "../../hooks/useMovieTrailer";



const VideoPlay = ({movieId}) => {


  
  useMovieTrailer(movieId);

  const trailerVideo=useSelector((store)=>store.movies?.movieTrailer);

  
  

  return (
    <div className="video-play">
      <iframe className="iframe-style" 
      src={"https://www.youtube.com/embed/" +trailerVideo?.key+ "?si=HS0_QAjDW6Rn4uhi" + "?&autoplay=1&mute=1" }
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe>
    </div>
  )
}

export default VideoPlay