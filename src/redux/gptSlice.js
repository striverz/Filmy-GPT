import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchValue:false,
        gptMovieNames:null,
        gptMovieResults:null,
    },
    reducers:{
        toogleGptSearchValue:(state)=>{
            state.gptSearchValue=!state.gptSearchValue;
        },
        addGptMovies:(state,action)=>{
            
            const {movieNames,movieResults} =action.payload;
            state.gptMovieNames=movieNames;
            state.gptMovieResults=movieResults;
        }
    }
})

export const {toogleGptSearchValue,addGptMovies}=gptSlice.actions;

export default gptSlice.reducer;