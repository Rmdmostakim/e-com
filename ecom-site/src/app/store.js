import { configureStore } from '@reduxjs/toolkit';
import CartReducer from '../features/clientsite/CartSlice';
import ProductsReducer from '../features/clientsite/ProductsSlice';
import UserCartReducer from '../features/usersite/CartSlice';

const store = configureStore({
    reducer: {
        products: ProductsReducer,
        cart: CartReducer,
        userCart: UserCartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['products/getProducts/fulfilled', 'carts/getCarts/fulfilled'],
            },
        }),
});
export default store;
