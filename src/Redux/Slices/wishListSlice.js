import { createSlice } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name : "wishlist",
  initialState : [],
  reducers : {
    // add to wishlist - view component - product
    addToWishlist : (state, action) => {
         state.push(action.payload)
    },
    // remove wishlist - wishlist component - product id
    removeWishlist : (state, action) => {
      return state.filter(item => item.id != action.payload)
    }
  }
})

export const {addToWishlist, removeWishlist} = wishListSlice.actions
export default wishListSlice.reducer

