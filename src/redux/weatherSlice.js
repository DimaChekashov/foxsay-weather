import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        dataCity: {},
        dataCityDaily: {},
        userCities: [],
    },
    reducers: {
        addCityState: (state, action) => {
            state.dataCity = action.payload;
        },
        addCityDailyState: (state, action) => {
            state.dataCityDaily = action.payload;
        },
        addCity: (state, action) => {
            state.userCities = [...state.userCities, action.payload];
        },
    },
});

export const { addCityState, addCityDailyState, addCity } =
    weatherSlice.actions;

export default weatherSlice.reducer;
