import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Classes from '../../assets/css/loginform.module.css';
import Email from '../../form/Email';
import Password from '../../form/Password';

export default function Userlogin() {
    const initialValue = { email: '', password: '' };
    const [credentials, setCredentials] = useState(initialValue);
    const credentialsHandler = (name, value) => {
        setCredentials({ ...credentials, [name]: value });
    };
    const submitHandler = () => {
        console.log(credentials);
    };
    return (
        <>
            <title>Login</title>
            <Container>
                <Container className=" mt-lg-5">
                    <Row className="justify-content-md-center">
                        <Col md={6} className="bg-light rounded">
                            <h6 className="text-center text-primary m-2">Login</h6>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3 p-2">
                                    <Email
                                        title="Email"
                                        name="email"
                                        text="Enter your email"
                                        value={credentials.email}
                                        handler={credentialsHandler}
                                    >
                                        <MdEmail />
                                    </Email>

                                    <Password
                                        title="Password"
                                        name="password"
                                        min={6}
                                        text="Enter password"
                                        value={credentials.password}
                                        handler={credentialsHandler}
                                    >
                                        <FaLock />
                                    </Password>
                                    <div className={`${Classes.btn} text-center mt-2 mb-2`}>
                                        <Button size="sm" onClick={submitHandler}>
                                            Login
                                        </Button>
                                    </div>
                                </Col>
                                <div className="text-center">
                                    <p>
                                        Forgot password?{' '}
                                        <Link to="/forgot-password">Click Here</Link>
                                        &ensp; Have not account?{' '}
                                        <Link to="/registration">Sign Up</Link>
                                    </p>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
}
