import { createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice({
    name:"product",
    initialState:{
        products1:[],
        products2:[],
        categoryhead:[]
    },
    reducers:{
        addProduct:(state,action)=>{
            state.products1=action.payload
            state.products2=action.payload
            state.categoryhead=[...new Set(action.payload.map((x)=>x.category))]
        },
        categoryProduct:(state,action)=>{
            if(action.payload===""){
                state.products1=state.products2
            }
            else{
            state.products1=state.products2.filter(product1=>product1.category===action.payload)
            }
         },
         titleProduct:(state,action)=>{
            if(action.payload===""){
                state.products1=state.products2
            }
            else{
            state.products1=state.products2.filter(product=>product.title.toLowerCase().includes(action.payload))
            }
         },
        removeProduct:(state,action)=>{
            state.products1=state.products1.filter(product=>product.id!==action.payload)
        }
    }
})

export const {addProduct,removeProduct,categoryProduct}=productSlice.actions
export default productSlice.reducer