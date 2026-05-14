import { configureStore } from "@reduxjs/toolkit"
import { subjectsSliceReducer } from "../features/subjects/subjectsSlice"

export const store= configureStore({
    reducer:{
        subjects:subjectsSliceReducer
    }
})