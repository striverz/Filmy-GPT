import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
import "./MoviesList.css"

const MoviesList = ({title,movies}) => {
   


 if (!Array.isArray(movies) || movies.length === 0) return;

 
  return (
    <div className='movies-list'>
        <h2>{title}</h2>
        <div className='movies-list-cards'>
            {
                movies?.map((movie)=>{
                    return(
                       
                        <MovieCard movieImg={movie?.poster_path} key={movie?.id}/>
                    )
                })
            } 
        </div>
    </div>
  )
}

export default MoviesList