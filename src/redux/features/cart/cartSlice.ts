import { TProduct } from "@/types/product.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  carts: TProduct[];
  totalPayment: number;
};

const initialState: TInitialState = {
  carts: [],
  totalPayment: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<TProduct>) => {
      const productData = { ...action.payload };
      const currentCart = state.carts;

      const previousData = currentCart.find((el) => el._id === productData._id);
      if (previousData) {
        productData.quantity = previousData.quantity + 1;

        const fullData = currentCart.filter((el) => el._id !== productData._id);

        state.carts = [...fullData, productData];
      } else {
        productData.quantity = 1;
        state.carts.push(productData);
      }

      let totalPrice = 0;

      state.carts.forEach((item: TProduct) => {
        const price = item.price * item.quantity;
        totalPrice += price;
      });

      state.totalPayment = totalPrice;
    },
    removeCart: (state, action: PayloadAction<string>) => {
      const productData = action.payload;
      const currentCart = state.carts;

      const previousData = currentCart.find((el) => el._id === productData);
      if (previousData) {
        state.carts = currentCart.filter((el) => el._id !== productData);
      }

      let totalPrice = 0;

      state.carts.forEach((item: TProduct) => {
        const price = item.price * item.quantity;
        totalPrice += price;
      });

      state.totalPayment = totalPrice;
    },

    resetCart: (state) => {
      state.carts = [];
    },
  },
});

export const { addCart, removeCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
