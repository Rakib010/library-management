import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware)
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
