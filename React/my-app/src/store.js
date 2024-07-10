import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import addReducer from './reducers/addSlice'
import cartReducer from './reducers/cartSlice'
import productReducer from './reducers/productSlice'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    adder:addReducer,
    cart:cartReducer,product:productReducer
  },
})