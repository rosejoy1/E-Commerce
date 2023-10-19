import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    name:'wishList',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addToWishlist}  = wishlistSlice.actions
export default wishlistSlice.reducer