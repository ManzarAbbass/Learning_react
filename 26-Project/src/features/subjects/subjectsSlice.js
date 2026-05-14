import { createSlice } from "@reduxjs/toolkit";

export const subjectsSlice = createSlice({
    name:"subjects",
    initialState:{  //apki state
        value:[]
    },
})

export default subjectsSlice.reducer