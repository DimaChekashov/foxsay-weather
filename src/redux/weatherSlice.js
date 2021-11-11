import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        dataCity: {},
        dataCityDaily: {},
    },
    reducers: {
        addCityState: (state, action) => {
            state.dataCity = action.payload;
        },
        addCityDailyState: (state, action) => {
            state.dataCityDaily = action.payload;
        },
    },
});

export const { addCityState, addCityDailyState } = weatherSlice.actions;

export default weatherSlice.reducer;
