import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        itemsAdded:(state,action)=>{

            const isDup=state.items.find((x)=>x.id===action.payload.id);
            if(isDup){
                isDup.quantity+=1
            }else{
                state.items.push({...action.payload,quantity:1})
            }
        },
        itemsDelete:(state,action)=>{
            state.items=state.items.filter((x)=>x.id!==action.payload.id)
        }
    }
})

export const {itemsAdded,itemsDelete}=cartSlice.actions
export default cartSlice.reducer;