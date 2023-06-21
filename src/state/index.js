import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers";


export const {increment,decrement}= counterSlice.actions



export const store = configureStore({
    reducer: {
        counter:counterSlice.reducer
    },
})