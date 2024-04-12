import { createStore, combineReducers } from "redux";

import categoriesReducer from "./reducers/categoriesReducer";
import orderReducer from "./reducers/orderReducer";

const store = createStore( combineReducers({categories: categoriesReducer, order: orderReducer}) );

export default store;