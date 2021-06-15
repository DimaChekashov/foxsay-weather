import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        data: {},
    },
    reducers: {
        addState: (state, action) => {
            state.data = action;
        },
    },
});

export const { addState } = weatherSlice.actions;

export default weatherSlice.reducer;
