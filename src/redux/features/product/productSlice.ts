import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSLice = createSlice({
  name: "product",
  initialState,
  reducers: {},
});

export default productSLice.reducer;
