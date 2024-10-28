import React from 'react'
import "./MoviesContainer.css"
import MoviesList from '../MoviesList/MoviesList'
import { useSelector } from 'react-redux'
const MoviesContainer = () => {

  const movies=useSelector(store=>store.movies);
 

  // console.log(movies.nowPlayingMovies);
  return (
    <div className='movies-container'>
      <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MoviesList title={"Popular"} movies={movies.popularMovies} />
      <MoviesList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MoviesList title={"Up Coming"} movies={movies.upComingMovies} />

      

    </div>
  )
}

export default MoviesContainer