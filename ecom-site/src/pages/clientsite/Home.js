/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import Products from '../../components/clientsite/Products';

export default function Home() {
    const { products, search } = useSelector((state) => state.products);
    return (
        <>
            <title>Home</title>
            <Products products={products} />
        </>
    );
}
