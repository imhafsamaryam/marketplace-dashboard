import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: {}
}

export const singleBidSlice = createSlice({
    name: 'singleBid',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },


    },
})

export const { setData } = singleBidSlice.actions

export default singleBidSlice.reducer