import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        gptSearchValue:false,
    },
    reducers:{
        toogleGptSearchValue:(state)=>{
            state.gptSearchValue=!state.gptSearchValue;
        }
    }
})

export const {toogleGptSearchValue}=gptSlice.actions;

export default gptSlice.reducer;