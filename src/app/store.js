import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cartSlice'
import cardImageSlice from '../features/cardImageSlice'

export default configureStore({
  reducer: {
    allData: cartSlice,
    imageData: cardImageSlice,
  }
})