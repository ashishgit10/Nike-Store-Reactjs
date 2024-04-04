// CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load cart items from local storage if available
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state));
        },
        removeFromCart(state, action) {
            const updatedState = state.filter(item => item.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(updatedState));
            return updatedState;
        }
    }
});

export const { add, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;


