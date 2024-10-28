import "./Browse.css"
import Header from '../Header/Header'
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import TrailerContainer from "../TrailerContainer/TrailerContainer"
import MoviesContainer from "../MoviesContainer/MoviesContainer"
import usePopularMovies from "../../hooks/usePopularMovies"
import useTopRatedMovies from "../../hooks/useTopRatedMovies"
import useUpcomingMovies from "../../hooks/useUpcomingMovies"
import GPTSearch from "../GPTSearch/GPTSearch"
import { useSelector } from "react-redux"
const Browse = () => {
  //custom hood for calling api and putting data into our appStore
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const gptSearchValue=useSelector(store=>store.gpt.gptSearchValue);

  return (
    <div className='browse'>
      <Header/>
      {
        gptSearchValue 
        ? <GPTSearch/> : 
        <>
         <TrailerContainer/>
         <MoviesContainer/>
        </>
      }
      
     
      
     
    </div>
  )
}

export default Browse