import { createSlice } from "@reduxjs/toolkit";


const initValue={
   value:0
}


export const counterSlice = createSlice({
   name:"counter",
   initialState:initValue,
   reducers:{
      increment:(state)=>{
        state.value+=1
      },
      decrement:(state)=>{
         state.value-=1
      }
   }
})