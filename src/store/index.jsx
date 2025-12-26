import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import wishReducer from "./wishSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    wish:wishReducer
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


