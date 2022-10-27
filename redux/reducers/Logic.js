import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: false,

}

export const Darkmode = createSlice({
    name: 'Darkmode',
    initialState,

    reducers: {
        ActiveDarkMode: (state,action) => {
            state.value = action.payload;
        },
      

    },
})

export const { ActiveDarkMode} = Darkmode.actions;

export default Darkmode.reducer;