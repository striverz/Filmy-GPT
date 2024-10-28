import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {addPopularMovies} from "../redux/moviesSlice"
import { API_OPTIONS } from '../utils/consts';


const usePopularMovies = () => {

    const dispatch=useDispatch();

    const getPopularMovies=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/popular",API_OPTIONS);
        const json =await data.json();
        dispatch(addPopularMovies(json.results));
    }

    useEffect(()=>{
        getPopularMovies();
    },[]);
 
}

export default usePopularMovies