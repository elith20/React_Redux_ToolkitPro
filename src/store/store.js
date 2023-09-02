import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./taskReducer";
import { apiSlice } from "./api";
import { userApi } from "./userApi";
import userReducer from './authreducer'


export const store = configureStore({
    reducer: {
        taskReducer: taskSlice,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [userApi.reducerPath]: userApi.reducer,
        userReducer: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([apiSlice.middleware, userApi.middleware]),
})