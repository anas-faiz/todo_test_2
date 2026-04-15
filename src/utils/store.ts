import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./TodoDataSLice"

export const store = configureStore({
    reducer:{
       Todo: TodoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

