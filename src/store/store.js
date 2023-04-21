import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from '../toolkit/items/item.reducer';

export const store = configureStore({
  reducer: {
    items: itemsReducer
  },
});
