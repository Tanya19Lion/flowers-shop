import { configureStore } from '@reduxjs/toolkit'

import categoriesReducer from "./slices/categoriesSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
    reducer: { 
        categories: categoriesReducer, 
        order: orderReducer
    }
});

export default store;