import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { add, remove} = CartSlice.actions;
export default CartSlice.reducer;
