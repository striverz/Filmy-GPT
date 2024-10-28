import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addupComingMovies } from '../redux/moviesSlice';
import { API_OPTIONS } from '../utils/consts';

const useUpcomingMovies = () => {

    const dispatch=useDispatch();

    const getUpcomingMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/upcoming",API_OPTIONS);
        const json =await data.json();

        dispatch(addupComingMovies(json?.results));


    }


  useEffect(()=>{
    getUpcomingMovies();
  },[]);
}

export default useUpcomingMovies