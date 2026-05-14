import { createSlice } from "@reduxjs/toolkit";

export const subjectsSlice = createSlice({
    name:"subjects",
    initialState:[],
    reducers:{
        addSubject:(state,actions)=>{state.push(actions.payload)}
    }
})

export const {addSubject} =subjectsSlice.actions
export default subjectsSlice.reducer