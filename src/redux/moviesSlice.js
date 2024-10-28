import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:{},
        movieTrailer:{},
        popularMovies:{},
        topRatedMovies:{},
        upComingMovies:{},
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{

            state.nowPlayingMovies=action.payload

        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload
        },
        addupComingMovies:(state,action)=>{
            state.upComingMovies=action.payload
        }
    }
})

export const {addNowPlayingMovies,addMovieTrailer,addPopularMovies,addTopRatedMovies,addupComingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;