import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: {},
  },
  reducers: {
    addItems: (state, action) => {
      // console.log(action.payload);
      if (state.cartItems[action.payload.name]) {
        state.cartItems[action.payload.name]["count"] = ++state.cartItems[
          action.payload.name
        ]["count"];
      } else {
        state.cartItems[action.payload.name] = action.payload;
        state.cartItems[action.payload.name]["count"] = 1;
      }
      // console.log(state.cartItems[action.payload.name]["count"])
    },
    removeItems: (state, action) => {
      if (state.cartItems[action.payload.name]["count"] >= 1) {
        state.cartItems[action.payload.name]["count"] = --state.cartItems[
          action.payload.name
        ]["count"];
      } else {
        delete state.cartItems[action.payload.name];
      }
    },
    clearCart: (state) => {
      state.cartItems.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
