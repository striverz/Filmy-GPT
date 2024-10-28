import React, { useEffect } from 'react'
import { addMovieTrailer } from '../redux/moviesSlice';
import { API_OPTIONS } from '../utils/consts';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {

    const dispatch=useDispatch();
    const getMovieVideos=async()=>{
        const data=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS);
        const json=await data.json();

        const fetchTrailers=json?.results?.filter((movie)=>movie.type=="Trailer");
       
        const trailer=fetchTrailers ? fetchTrailers[0] : json?.resutls[0];
       
        dispatch(addMovieTrailer(trailer));

      }
    
      useEffect(()=>{
         getMovieVideos();
      },[]);

}

export default useMovieTrailer