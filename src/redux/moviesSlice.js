import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        movieTrailer:{},
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{

            state.nowPlayingMovies=action.payload

        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer}=moviesSlice.actions;
export default moviesSlice.reducer;