/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row, Table } from 'react-bootstrap';
import { BsFillInboxesFill } from 'react-icons/bs';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { GiMagnifyingGlass } from 'react-icons/gi';
import Classes from '../../assets/css/userDashboard.module.css';
import Tracker from '../../components/usersite/Tracker';

export default function Dashboard() {
    const [orders, setOrders] = useState(null);
    const [trackerCode, setTrackerCode] = useState('');
    const inputHandler = (event) => {
        const { value } = event.target;
        setTrackerCode(value);
    };
    const trackerHandler = () => {
        console.log(trackerCode);
    };
    return (
        <>
            <title>Dashboard</title>
            <Container>
                <div className="border border-secondary border-2 rounded shadow bg-light p-2 mb-3">
                    <h6>
                        <BsFillInboxesFill /> &ensp;My Orders
                    </h6>
                    <div>
                        {!orders && (
                            <p className="text-center">
                                <GiMagnifyingGlass /> no data found
                            </p>
                        )}
                        {orders &&
                            orders.map(() => (
                                <Table striped>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            ))}
                    </div>
                </div>
                <div
                    className={`${Classes.tracker} border border-secondary border-2 rounded shadow bg-light p-2`}
                >
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <h6 className="fw-bold text-center">Track your order</h6>
                            <Row className="justify-content-md-center">
                                <Col md={6}>
                                    <InputGroup className="mb-3" size="sm">
                                        <InputGroup.Text>
                                            <FaMapMarkedAlt />
                                        </InputGroup.Text>
                                        <FormControl
                                            placeholder="Enter order code"
                                            value={trackerCode}
                                            onChange={inputHandler}
                                        />
                                        <Button onClick={trackerHandler}>Track</Button>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={8}>
                            <Tracker />
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}
