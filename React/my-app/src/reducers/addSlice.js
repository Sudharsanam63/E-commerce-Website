import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
    name:"adder",
    initialState:{
        a :0
    },
    reducers:{
        addi:(state,action)=>{
            state.a += action.payload
        }
    }
})

export const {addi}=addSlice.actions
export default addSlice.reducer