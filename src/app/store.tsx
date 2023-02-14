import { configureStore } from "@reduxjs/toolkit";
import { reducer as moviesReducer } from "./features/moviesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
