import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        weatherState: {},
    },
    reducers: {
        addState: (state, action) => {
            state.weatherState = action;
        },
    },
});

export const { addState } = weatherSlice.actions;

export default weatherSlice.reducer;
