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
        },
        removeGptMovies:(state,action)=>{
            state.gptMovieNames=null;
            state.gptMovieResults=null;
        }
    }
})

export const {toogleGptSearchValue,addGptMovies,removeGptMovies}=gptSlice.actions;

export default gptSlice.reducer;