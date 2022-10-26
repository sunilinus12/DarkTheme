import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const Darkmode = createSlice({
    name: 'Darkmode',
    initialState,
    reducers: {
        isDarkMode: (state) => {
            state.value = !state.value;
        },

    },
})

export const { isDarkMode } = Darkmode.actions;

export default Darkmode.reducer;