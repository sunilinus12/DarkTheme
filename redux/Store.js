import { configureStore } from "@reduxjs/toolkit";
import DarkmodeReducer from "./reducers/Logic";

export const store = configureStore({
    reducer: {
        Darkmode: DarkmodeReducer,
    },
})