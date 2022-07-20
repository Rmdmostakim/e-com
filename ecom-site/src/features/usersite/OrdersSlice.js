/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getSuccessOrders = createAsyncThunk('orders/success', async () => {
    const res = await axios.get('url');
    return res;
});

const OrdersSlice = createSlice({
    name: 'orders',
    initialState: {
        successOrderIsLoading: false,
        successOrderIsError: false,
        successOrderIsSuccess: false,
        successOrder: null,
    },
    extraReducers: (builder) => {
        builder.addCase(getSuccessOrders.pending, (state) => {
            state.successOrderIsLoading = true;
        });
        builder.addCase(getSuccessOrders.fulfilled, (state, action) => {
            state.successOrderIsLoading = false;
            if (action.payload.status === 200) {
                state.successOrderIsSuccess = true;
                state.successOrder = action.payload.data;
            } else {
                state.successOrderIsError = true;
            }
        });
        builder.addCase(getSuccessOrders.rejected, (state) => {
            state.successOrderIsLoading = false;
            state.successOrderIsSuccess = false;
            state.successOrderIsError = true;
        });
    },
});
export default OrdersSlice.reducer;
