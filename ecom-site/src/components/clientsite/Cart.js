import { Button, Table } from 'react-bootstrap';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Classes from '../../assets/css/cart.module.css';
import { cartQuantity, removeCart } from '../../features/clientsite/CartSlice';

export default function Cart() {
    const { carts } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const incrementHandler = (slugId) => {
        const data = {
            slugId,
            type: 'increment',
        };
        dispatch(cartQuantity(data));
    };
    const decrementHandler = (slugId) => {
        const data = {
            slugId,
            type: 'decrement',
        };
        dispatch(cartQuantity(data));
    };
    const removeHandler = (slugId) => {
        dispatch(removeCart(slugId));
    };
    const cartList = () => {
        if (carts === null || carts.length === 0) {
            return <h6 className="text-center text-white">Your cart is empty</h6>;
        }
        return (
            <>
                <Table>
                    <thead>
                        <tr className="text-white">
                            <th>#</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-white">
                        {carts.map((product, index) => {
                            const { slug_id: slugId, name, quantity, price } = product;
                            return (
                                <tr key={slugId}>
                                    <td>{index + 1}</td>
                                    <td>{name.length > 30 ? `${name.substr(0, 30)}...` : name}</td>
                                    <td className="text-center">
                                        <Button
                                            size="sm"
                                            variant="none"
                                            onClick={() => decrementHandler(slugId)}
                                            className="text-info"
                                        >
                                            <AiFillMinusCircle />
                                        </Button>
                                        {quantity}
                                        <Button
                                            size="sm"
                                            variant="none"
                                            onClick={() => incrementHandler(slugId)}
                                            className="text-info"
                                        >
                                            <AiFillPlusCircle />
                                        </Button>
                                    </td>
                                    <td>{price}</td>
                                    <td>
                                        <Button
                                            size="sm"
                                            variant="none"
                                            className="text-danger"
                                            title="Remove"
                                            onClick={() => removeHandler(slugId)}
                                        >
                                            <FaTrash />
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
                <div className="text-center">
                    <Link to="/user/cart" className="btn btn-sm btn-primary">
                        View Cart
                    </Link>
                </div>
            </>
        );
    };
    return <div className={`${Classes.cart} bg-secondary rounded p-2`}>{cartList()}</div>;
}
