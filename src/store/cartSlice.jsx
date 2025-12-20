import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  items: [],
  totalQuantity: 0,
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return defaultState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return defaultState;
  }
};

const initialState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;

      // Helper to parse price string like "₹15,000/Pics" to number
      const parsePrice = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        if (!priceStr) return 0;
        const match = priceStr.match(/(\d[\d,]*)/);
        if (match) {
          return parseInt(match[0].replace(/,/g, ''), 10);
        }
        return 0;
      };

      const itemPrice = parsePrice(newItem.price);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price, // Keep original string for display if needed, or store number
          priceValue: itemPrice, // Store numeric value
          image: newItem.image,
          quantity: 1,
          totalPrice: itemPrice,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + itemPrice;
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.priceValue;
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    }
  },
});
//export actions creaters
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
//reducer
export default cartSlice.reducer;


