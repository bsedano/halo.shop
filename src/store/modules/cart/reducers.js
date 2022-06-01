import { ADD_CART } from "./actionTypes";
import { REMOVE_CART } from "./actionTypes";
import { CLEAR_CART } from "./actionTypes";
const initialState = JSON.parse(localStorage.getItem("cart")) || [];
export const cartReducer = (state = initialState, action) => {
  const { product } = action;
  switch (action.type) {
    case ADD_CART:
      return [...state, { ...product, id: Math.random(0, 300) }];
    case REMOVE_CART: {
      const newState = state.filter((item) => item.id !== product.id);
      return [...newState];
    }
    case CLEAR_CART: {
      return [];
    }

    default:
      return state;
  }
};
