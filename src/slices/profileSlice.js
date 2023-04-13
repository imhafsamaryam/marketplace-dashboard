import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "Zacker",
    profileImg: "/images/avatar2.webp"
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setName: (state, action) => {

            state.name = action.payload
        },
        setProfileImg: (state, action) => {

            state.profileImg = action.payload
        },

    },
})

export const { setName, setProfileImg } = profileSlice.actions

export default profileSlice.reducer