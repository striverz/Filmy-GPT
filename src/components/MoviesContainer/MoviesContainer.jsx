import React from 'react'
import "./MoviesContainer.css"
import MoviesList from '../MoviesList/MoviesList'
import { useSelector } from 'react-redux'
const MoviesContainer = () => {

  const movies=useSelector(store=>store.movies);
 

  
  return (
    <div className='movies-container'>
      <MoviesList title={"NOW Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"TOP Rated"} movies={movies.topRatedMovies} />
      <MoviesList title={"Popular"} movies={movies.popularMovies} />
      <MoviesList title={"UP Coming"} movies={movies.upComingMovies} />
    </div>
  )
}

export default MoviesContainer