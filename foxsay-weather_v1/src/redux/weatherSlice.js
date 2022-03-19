import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name: "weather",
    initialState: {
        dataCityDaily: {},
        userCities: [],
        userCitiesId: [465543, 523750],
    },
    reducers: {
        addCityDaily: (state, { payload }) => {
            state.dataCityDaily = payload;
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

export const { addCityDaily, addCity, addCityId } = weatherSlice.actions;

export default weatherSlice.reducer;
