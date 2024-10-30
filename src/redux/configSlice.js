import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        language:"english",
        darkMode:false
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.language=action.payload
        },
        changeMode:(state)=>{
            state.darkMode=!state.darkMode;
        }
    }
})

export const {changeLanguage,changeMode}=configSlice.actions
export default configSlice.reducer;