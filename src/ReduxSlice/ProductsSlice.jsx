import { createSlice } from '@reduxjs/toolkit'
export const productSlice = createSlice({
    name: 'products',
    initialState: {
      cartItems: 0,
      cartItemsArray : []
    },
    reducers: {
      addProduct: (state, action) => {
        console.log("in the reducer")
        console.log(state.cartItems)
        state.cartItems += 1;
      },
      removeProduct:(state, action) => {
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);         
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { addProduct, removeProduct, incrementByAmount } = productSlice.actions
  
  export default productSlice.reducer