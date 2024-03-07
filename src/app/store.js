import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import cardImageSlice from '../features/cardImageSlice'
import counterSlice from '../features/counterSlice'

export default configureStore({
  reducer: {
    allData: cartSlice,
    imageData: cardImageSlice,
    count: counterSlice,
  }
})