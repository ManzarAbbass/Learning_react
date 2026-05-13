import { createSlice } from "@reduxjs/toolkit";

export const counterSlice=createSlice({ // counterSlice hmne feature banaya count ka 
    name:"counter",
    initialState:{ // state he hamri jiski value hmne initial 0 di he
        value:0
    },
    reducers:{ // iske reducer ke andar actions hein do increament or decreament 
        increament:(state)=>{state.value+=1},
        decreament:(state)=>{state.value-=1},
        increamentbyfive:(state,param)=>{state.value+=param.payload}
    }
})

export const {increament,decreament,increamentbyfive}=counterSlice.actions // ye hmne destructering ki he counterSlice.actions (incr,decr) aur usko export kiya he 
export default counterSlice.reducer // aur ye hmne pore counterSlice ke andar jo object tha reducer ka usko export kiya default