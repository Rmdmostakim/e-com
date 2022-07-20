/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Products from '../../components/clientsite/Products';

export default function Category() {
    const { products, search } = useSelector((state) => state.products);
    const { slugId } = useParams();

    const categoryFilter = () => {
        if (products) {
            return products.filter((product) => {
                const fProducts = product.category_slug_id;
                return fProducts === slugId;
            });
        }
        return [];
    };
    return (
        <>
            <title>Category</title>
            {products && (
                <Products
                    products={products.filter((product) => {
                        const fProducts = product.category_slug_id;
                        return fProducts === slugId;
                    })}
                />
            )}
        </>
    );
}
