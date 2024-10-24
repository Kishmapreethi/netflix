import { createSlice } from "@reduxjs/toolkit"

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptsearch: false,
    },
    reducers: {
        toggeGptSearchView: (state) => {
            state.showGptsearch = !state.showGptsearch
        }
    }
})

export const { toggeGptSearchView } = gptSlice.actions;

export default gptSlice.reducer
