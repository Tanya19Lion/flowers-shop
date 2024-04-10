import { createStore, combineReducers } from "redux";

import categoriesReducer from "./reducers/categoriesReducer";
import bouquetsReducer from './reducers/bouquetsReducer';
import orderReducer from "./reducers/orderReducer";

const store = createStore( combineReducers({categories: categoriesReducer, bouquets: bouquetsReducer, order: orderReducer}) );

export default store;