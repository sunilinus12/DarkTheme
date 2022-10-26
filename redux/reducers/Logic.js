import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,
}

export const Darkmode = createSlice({
    name: 'Darkmode',
    initialState,
    reducers: {
        ActiveDarkMode: (state) => {
            state.value = true;
        },
        DeactiveDarkMode: (state) => {
            state.value = false;
        },

    },
})

export const { ActiveDarkMode, DeactiveDarkMode } = Darkmode.actions;

export default Darkmode.reducer;