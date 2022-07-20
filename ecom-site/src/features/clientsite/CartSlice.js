/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        carts: null,
        count: 0,
        show: false,
        pro: null,
    },
    reducers: {
        getCart: (state) => {
            if (!localStorage.getItem('carts')) {
                localStorage.setItem('carts', '[]');
            } else {
                state.carts = JSON.parse(localStorage.getItem('carts'));
                state.count = state.carts.length;
            }
        },
        addCart: (state, action) => {
            const {
                slug_id: slugId,
                name,
                unit_price: unitPrice,
                offer_price: offerPrice,
                offer_type: offerType,
            } = action.payload;

            if (state.carts.length === 0) {
                let price = 0;
                if (offerType === 0) {
                    price = unitPrice - offerPrice;
                }
                if (offerType === 1) {
                    price = unitPrice - (unitPrice * offerPrice) / 100;
                }
                const item = { slug_id: slugId, name, price, quantity: 1 };
                state.count += 1;
                state.carts.push(item);
                localStorage.setItem('carts', JSON.stringify(state.carts));
            } else {
                const product = state.carts.filter((cart) => cart.slug_id === slugId);
                if (product.length !== 0) {
                    console.log(product);
                    const { quantity, price } = product[0];
                    product[0].quantity = quantity + 1;
                    product[0].price = price + price / quantity;
                    localStorage.setItem('carts', JSON.stringify(state.carts));
                } else {
                    let price = 0;
                    if (offerType === 0) {
                        price = unitPrice - offerPrice;
                    }
                    if (offerType === 1) {
                        price = unitPrice - (unitPrice * offerPrice) / 100;
                    }
                    const item = { slug_id: slugId, name, price, quantity: 1 };
                    state.count += 1;
                    state.carts.push(item);
                    localStorage.setItem('carts', JSON.stringify(state.carts));
                }
            }
        },
        cartQuantity: (state, action) => {
            const { type, slugId } = action.payload;
            const product = state.carts.filter((cart) => cart.slug_id === slugId);
            const { quantity, price } = product[0];
            if (type === 'increment') {
                product[0].quantity = quantity + 1;
                product[0].price = price + price / quantity;
                localStorage.setItem('carts', JSON.stringify(state.carts));
            }
            if (type === 'decrement') {
                if (quantity > 1) {
                    product[0].quantity = quantity - 1;
                    product[0].price = price - price / quantity;
                    localStorage.setItem('carts', JSON.stringify(state.carts));
                }
            }
        },
        removeCart: (state, action) => {
            const slugId = action.payload;
            state.carts = state.carts.filter((contacts) => contacts.slug_id !== slugId);
            localStorage.setItem('carts', JSON.stringify(state.carts));
            state.count -= 1;
        },
        changeShow: (state) => {
            state.show = !state.show;
        },
    },
});
export const { getCart, addCart, cartQuantity, removeCart, changeShow } = CartSlice.actions;
export default CartSlice.reducer;
