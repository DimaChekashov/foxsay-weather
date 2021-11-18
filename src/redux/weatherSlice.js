import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        dataCity: {},
        dataCityDaily: {},
        userCities: [],
        userCitiesId: ["465543", "523750"],
    },
    reducers: {
        addCityState: (state, action) => {
            state.dataCity = action.payload;
        },
        addCityDailyState: (state, action) => {
            state.dataCityDaily = action.payload;
        },
        addCity: (state, { payload }) => {
            const idx = state.userCities.findIndex(
                ({ id }) => id === payload.id
            );

            if (idx > -1) {
                state.userCities[idx] = payload;
            } else {
                state.userCities.push(payload);
            }
        },
        addCityId: (state, action) => {
            state.userCitiesId = [...state.userCitiesId, action.payload];
        },
    },
});

export const { addCityState, addCityDailyState, addCity } =
    weatherSlice.actions;

export default weatherSlice.reducer;
