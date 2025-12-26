import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  items: [],
  totalItems: 0,
};

// Load wishlist from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('wishlist');
    if (serializedState === null) {
      return defaultState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Error loading wishlist from localStorage:', err);
    return defaultState;
  }
};

// Save wishlist to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('wishlist', serializedState);
  } catch (err) {
    console.error('Error saving wishlist to localStorage:', err);
  }
};

const initialState = loadState();

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    // Add item to wishlist
    addToWish(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      // Only add if not already in wishlist
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          company: newItem.company,
          boothNumber: newItem.boothNumber,
          addedAt: new Date().toISOString(),
        });
        state.totalItems++;
        saveState(state);
        console.log('Added to wishlist:', newItem.title);
      } else {
        console.log('Item already in wishlist:', newItem.title);
      }
    },

    // Remove item from wishlist
    removeFromWish(state, action) {
      console.log('action:', action, "state:", state);
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalItems--;
        saveState(state);
        console.log('Removed from wishlist:', existingItem.title);
      }
    },

    // Toggle item in wishlist (add if not present, remove if present)
    toggleWish(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        // Remove from wishlist
        state.items = state.items.filter((item) => item.id !== newItem.id);
        state.totalItems--;
        console.log('Removed from wishlist:', newItem.title);
      } else {
        // Add to wishlist
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          company: newItem.company,
          boothNumber: newItem.boothNumber,
          addedAt: new Date().toISOString(),
        });
        state.totalItems++;
        console.log('Added to wishlist:', newItem.title);
      }
      saveState(state);
    },

    // Clear entire wishlist
    clearWish(state) {
      state.items = [];
      state.totalItems = 0;
      saveState(state);
      console.log('Wishlist cleared');
    },

    // Check if item is in wishlist (for UI state)
    isInWishlist(state, action) {
      const id = action.payload;
      return state.items.some((item) => item.id === id);
    }
  },
});

// Export action creators
export const {
  addToWish,
  removeFromWish,
  toggleWish,
  clearWish,
  isInWishlist
} = wishSlice.actions;

// Export reducer
export default wishSlice.reducer;
