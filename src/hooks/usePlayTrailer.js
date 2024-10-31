import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPlayTrailer } from '../redux/trailerSlice';
import { API_OPTIONS } from '../utils/consts';

const usePlayTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
            if (!response.ok) {
                throw new Error('Failed to fetch videos');
            }
            const json = await response.json();
            
            const fetchTrailers = json?.results?.filter((movie) => movie.type === "Trailer");
            const trailer = fetchTrailers ? fetchTrailers[0] : json?.results[0];

            
            dispatch(addPlayTrailer(trailer));
        } catch (error) {
            
        }
    }

    useEffect(() => {
        if (movieId) { // Check if movieId is valid
            getMovieVideos();
        }
    }, []);

    // Optionally return the trailer or any other data if needed
    // return trailer; // Uncomment this if you want to return the trailer
}

export default usePlayTrailer;
