import "./Browse.css"
import Header from '../Header/Header'
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import TrailerContainer from "../TrailerContainer/TrailerContainer"
import MoviesContainer from "../MoviesContainer/MoviesContainer"
import usePopularMovies from "../../hooks/usePopularMovies"
import useTopRatedMovies from "../../hooks/useTopRatedMovies"
import useUpcomingMovies from "../../hooks/useUpcomingMovies"
const Browse = () => {
  //custom hood for calling api and putting data into our appStore
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className='browse'>
      <Header/>
      <TrailerContainer/>
      <MoviesContainer/>
      
     
    </div>
  )
}

export default Browse