import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    designation: ""
}

export const designationSlice = createSlice({
    name: 'designation',
    initialState,
    reducers: {
        setDesignation: (state, action) => {
            state.designation = action.payload
        },
      

    },
})

export const { setDesignation } = designationSlice.actions

export default designationSlice.reducer