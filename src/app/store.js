import { configureStore } from '@reduxjs/toolkit'
import productReducer from '../ReduxSlice/ProductsSlice'

export default configureStore({
  reducer: {
    products: productReducer
  }
})