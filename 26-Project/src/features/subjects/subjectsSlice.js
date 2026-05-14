import { createSlice } from "@reduxjs/toolkit";

export const subjectsSlice = createSlice({
    name:"subjects",
    initialState:[],
    reducers:{
        addSubject:(state,actions)=>{state.push(actions.payload)},
        deleteSubject:(state,actions)=>{return state.filter((subj)=>subj.id!==actions.payload)}
    }
})

export const {addSubject,deleteSubject} = subjectsSlice.actions
export default subjectsSlice.reducer