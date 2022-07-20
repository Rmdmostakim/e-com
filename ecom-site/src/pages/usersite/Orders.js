/* eslint-disable no-unused-vars */
export default function Orders() {
    const arr1 = [
        { slug_id: 1, name: 'samsung', price: 200, quantity: 1 },
        { slug_id: 2, name: 'apple', price: 300, quantity: 1 },
        { slug_id: 3, name: 'nokia', price: 100, quantity: 1 },
    ];
    const arr2 = [{ slug_id: 1, name: 'Alice', unitPrice: 200, offerPrice: 10, offerType: 0 }];
    const newArr = arr1.map((obj) => {
        const { slug_id: slugId, quantity } = obj;
        const product = arr2.filter((cart) => cart.slug_id === slugId);
        if (product.length !== 0) {
            const { unitPrice, offerPrice, offerType } = product[0];
            let price = 0;
            if (offerType === 0) {
                price = unitPrice - offerPrice;
            }
            if (offerType === 1) {
                price = unitPrice - (unitPrice * offerPrice) / 100;
            }
            return { ...obj, price };
        }

        return obj;
    });
    console.log(newArr);
    return <div>Orders</div>;
}
