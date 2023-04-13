import { configureStore } from '@reduxjs/toolkit'
import profileSlice from './slices/profileSlice'
import categorySlice from './slices/categorySlice'
import singleBidSlice from './slices/singleBidSlice'

export const store = configureStore({
    reducer: {
        profile: profileSlice,
        category: categorySlice,
        singleBid: singleBidSlice
    },
})