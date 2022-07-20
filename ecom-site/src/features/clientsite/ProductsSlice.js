/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../url';

export const getProducts = createAsyncThunk('products/getProducts', async () => {
    const res = await axios.get(url.home);
    return res;
});

const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
        isLoading: false,
        isError: null,
        isSuccess: false,
        errors: null,
        categories: null,
        products: null,
        search: null,
    },
    reducers: {
        searchFilter: (state, action) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.status === 200) {
                state.isSuccess = true;
                state.categories = action.payload.data.categories;
                state.products = action.payload.data.products;
            } else {
                state.isError = true;
                state.errors = action.payload.data;
            }
        });
        builder.addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.category = null;
            state.products = null;
            state.errors = action.payload.error.message;
        });
    },
});
export const { searchFilter } = ProductsSlice.actions;
export default ProductsSlice.reducer;
