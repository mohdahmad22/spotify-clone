'use client'
import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "./musicslice";

export const store = configureStore({
        reducer:{
            music:musicReducer
        },
        devTools:true
    })

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;