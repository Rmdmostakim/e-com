/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from './features/clientsite/CartSlice';
import { getProducts } from './features/clientsite/ProductsSlice';
import MainRoutes from './routes/MainRoutes';

function App() {
    const { categories, products } = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCart());
    }, [dispatch]);

    return <MainRoutes />;
}

export default React.memo(App);
