import { createSlice } from '@reduxjs/toolkit'

export const cardImageSlice = createSlice({
  name: 'Card Image',
  initialState: {
    imgData: []
  },
  reducers: {
    allCardImage: function(state, action) {
        state.imgData.pop()
        state.imgData.push(action.payload)
    }
  }
})

export const { allCardImage, } = cardImageSlice.actions

export default cardImageSlice.reducer