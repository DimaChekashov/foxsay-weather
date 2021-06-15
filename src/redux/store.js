import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherSlice";

export default configureStore({
    weather: weatherReducer,
});