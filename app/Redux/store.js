"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});
