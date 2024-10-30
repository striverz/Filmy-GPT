import { createSlice } from "@reduxjs/toolkit";
import { React } from "react";

const trailerSlice=createSlice({

    name:'trailer',
    initialState:{
        movieId:null,
        playTrailer:{}
    },
    reducers:{
        addMovieId:(state,action)=>{
            state.movieId=action.payload;

        },
        addPlayTrailer:(state,action)=>{
            state.playTrailer=action.payload;
        },
        removePlayTrailer:(state,action)=>{
            state.playTrailer=null;
            state.movieId=null;
        }
    }
})

export const {addPlayTrailer,removePlayTrailer,addMovieId} =trailerSlice.actions;
export default trailerSlice.reducer;