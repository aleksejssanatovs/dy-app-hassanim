import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartTotal: 0,
        cartQuantity: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find((item) => item.id === action.payload.id);
            if (itemInCart) {
                itemInCart.quantity++;
                state.cartTotal += action.payload.price;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
                state.cartTotal += action.payload.price;
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            state.cartTotal += action.payload.price;
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1
            } else {
                item.quantity--;
            }
            state.cartTotal -= action.payload.price;
            if (state.cartTotal < 0) {
                state.cartTotal = 0;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
            state.cartTotal -= action.payload.price;
            if (state.cartTotal < 0) {
                state.cartTotal = 0;
            }
        },
    },
});

export default cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;