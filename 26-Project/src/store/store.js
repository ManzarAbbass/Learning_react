import { configureStore } from "@reduxjs/toolkit"
import { subjectsSlice } from "../features/subjects/subjectsSlice"
export const store= configureStore({
    reducer:{
        subjects:subjectsSlice
    }
})