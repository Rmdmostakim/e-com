/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsFillInboxesFill } from 'react-icons/bs';
import { FaTrash } from 'react-icons/fa';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartQuantity, removeCart } from '../../features/clientsite/CartSlice';
import { getCarts } from '../../features/usersite/CartSlice';

export default function Carts() {
    const { carts } = useSelector((state) => state.userCart);
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
    useEffect(() => {
        dispatch(getCarts());
    }, [dispatch]);
    const cartList = () => {
        if (carts === null || carts.length === 0) {
            return (
                <h6 className="text-center">
                    <GiMagnifyingGlass /> Empty cart
                </h6>
            );
        }
        return (
            <Row>
                <Col md={8}>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map((product, index) => {
                                const { slug_id: slugId, name, quantity, price } = product;
                                return (
                                    <tr key={slugId}>
                                        <td>{index + 1}</td>
                                        <td>
                                            {name.length > 30 ? `${name.substr(0, 30)}...` : name}
                                        </td>
                                        <td>
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
                </Col>
                <Col md={4}>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Cart Bills</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sub Total</td>
                                <td>
                                    {carts
                                        .map((item) => item.price)
                                        .reduce((prev, curr) => prev + curr, 0)}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className="text-center">
                        <Link to="checkout" className="btn btn-sm btn-primary">
                            Checkout
                        </Link>
                    </div>
                </Col>
            </Row>
        );
    };
    return (
        <>
            <title>User Cart</title>
            <Container className="border border-secondary border-2 rounded shadow bg-light p-2 mb-3">
                <h6>
                    <BsFillInboxesFill /> &ensp;My Cart
                </h6>
                {cartList()}
            </Container>
        </>
    );
}
