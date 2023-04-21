import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../toolkit/items/item.reducer';
import userReducer from '../toolkit/user/userSlice';
import cartReducer from '../toolkit/cart/cartSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    user: userReducer,
    cart: cartReducer
  },
});
