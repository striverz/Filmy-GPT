import "./Browse.css"
import Header from '../Header/Header'
import useNowPlayingMovies from "../../hooks/useNowPlayingMovies"
import TrailerContainer from "../TrailerContainer/TrailerContainer"
import MoviesContainer from "../MoviesContainer/MoviesContainer"
const Browse = () => {
  //custom hood for calling api and putting data into our appStore
  useNowPlayingMovies();

  return (
    <div className='browse'>
      <Header/>
      <TrailerContainer/>
      {/* <MoviesContainer/> */}
      
     
    </div>
  )
}

export default Browse