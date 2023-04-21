import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import productItems from '../../assets/products.json';

const itemsSlice = createSlice({
    name: 'items',
    initialState: productItems.products,
    reducers: {}
})

export default itemsSlice.reducer;