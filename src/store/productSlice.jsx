import { productCards } from "../data/LocalData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: productCards,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSlice.reducer;
