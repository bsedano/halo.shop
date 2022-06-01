import { addCart } from "./action";
import { removeCart } from "./action";
import { clearCart } from "./action";

export const addCartThunk = (product) => (dispatch, getStore) => {
  dispatch(addCart(product));
  const { cart } = getStore();
  localStorage.setItem("cart", JSON.stringify(cart));
};
export const removeCartThunk = (product) => (dispatch, getStore) => {
  dispatch(removeCart(product));
  const { cart } = getStore();
  localStorage.setItem("cart", JSON.stringify(cart));
};

export const clearCartThunk = () => (dispatch) => {
  dispatch(clearCart());
  localStorage.removeItem("cart");
};
