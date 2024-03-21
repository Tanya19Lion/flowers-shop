import { createStore, combineReducers } from "redux";

import categoriesReducer from "./reducers/categoriesReducer";
import orderReducer from "./reducers/orderReducer";

const store = createStore( combineReducers({categories: categoriesReducer, bouquets: orderReducer}) );

export default store;