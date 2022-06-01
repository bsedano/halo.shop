import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { productsReducer } from "./modules/products/reducers";
import { cartReducer } from "./modules/cart/reducers";
const reducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  
});
const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;
