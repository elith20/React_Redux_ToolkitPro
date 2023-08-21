import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskReducer";
import { apiSlice } from "./api";


export const store = configureStore({
    reducer: {
        taskReducer: taskSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})