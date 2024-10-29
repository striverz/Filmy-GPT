import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from '../MoviesList/MoviesList';
import "./GPTMovies.css"


const GPTMovies = () => {

    const {gptMovieNames,gptMovieResults}=useSelector(store=>store.gpt);

    if(!gptMovieNames) return null;

  return (
    <div className='gpt-movies'> 
    
        {
            gptMovieNames.map((movie,ind)=><MoviesList key={movie} title={movie} movies={gptMovieResults[ind]} />)
        }

    </div>
  )
}

export default GPTMovies