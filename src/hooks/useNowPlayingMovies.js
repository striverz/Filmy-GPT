import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { NOW_PLAYING,API_OPTIONS } from '../utils/consts';
import {addNowPlayingMovies} from "../redux/moviesSlice"

const useNowPlayingMovies = () => {
    const dispatch=useDispatch();

    const getNowPlayingMoviesData=async()=>{
  
      const data=await fetch(NOW_PLAYING,API_OPTIONS);
      const json=await data.json();
  
      
      dispatch(addNowPlayingMovies(json.results));
    }
  
    useEffect(()=>{
      getNowPlayingMoviesData();
    },[]);
}

export default useNowPlayingMovies