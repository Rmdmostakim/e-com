/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import url from '../url';

export const getCarts = createAsyncThunk('carts/getCarts', async () => {
    const carts = JSON.parse(localStorage.getItem('carts'));
    const slugs = carts.map((product) => product.slug_id);
    const res = axios.post(url.getCart, { slugs });
    return res;
});

export const CartSlice = createSlice({
    name: 'carts',
    initialState: {
        carts: null,
        isLoading: false,
        isError: false,
        isSuccess: false,
    },
    extraReducers: (builder) => {
        builder.addCase(getCarts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getCarts.fulfilled, (state, action) => {
            state.isLoading = false;
            if (action.payload.status === 200) {
                state.isSuccess = true;
                const userCarts = action.payload.data;
                const LocalCarts = JSON.parse(localStorage.getItem('carts'));
                const newProducts = LocalCarts.map((lProject) => {
                    const { slug_id: slugId, quantity } = lProject;
                    const product = userCarts.filter((cart) => cart.slug_id === slugId);
                    if (product.length !== 0) {
                        const {
                            unit_price: unitPrice,
                            offer_price: offerPrice,
                            offer_type: offerType,
                        } = product[0];
                        let price = 0;
                        if (offerType === 0) {
                            price = (unitPrice - offerPrice) * quantity;
                        }
                        if (offerType === 1) {
                            price = (unitPrice - (unitPrice * offerPrice) / 100) * quantity;
                        }
                        return { ...lProject, price };
                    }
                    return lProject;
                });
                state.carts = newProducts;
                localStorage.setItem('carts', JSON.stringify(state.carts));
            } else {
                state.isError = true;
            }
        });
        builder.addCase(getCarts.rejected, (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
        });
    },
});
export default CartSlice.reducer;
