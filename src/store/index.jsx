import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
})

store.subscribe(() => {
  try {
    const cartState = store.getState().cart;
    localStorage.setItem('cart', JSON.stringify(cartState));
  } catch (e) {
    console.warn("Could not save cart state", e);
  }
});
