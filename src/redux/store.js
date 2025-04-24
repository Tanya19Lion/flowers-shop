import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

import categoriesReducer from "./slices/categoriesSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
    reducer: { 
        categories: categoriesReducer, 
        order: orderReducer,   
        [apiSlice.reducerPath]: apiSlice.reducer, 
    },    
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;