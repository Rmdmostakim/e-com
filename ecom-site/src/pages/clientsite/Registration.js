import { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaLock, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Classes from '../../assets/css/loginform.module.css';
import Email from '../../form/Email';
import Password from '../../form/Password';
import Phone from '../../form/Phone';
import Text from '../../form/Text';

export default function Registration() {
    const navigate = useNavigate();
    const initialValue = { name: '', email: '', phone: '', password: '' };
    const [credentials, setCredentials] = useState(initialValue);
    const credentialsHandler = (name, value) => {
        setCredentials({ ...credentials, [name]: value });
    };
    const submitHandler = () => {
        console.log(credentials);
        navigate(-1);
    };

    return (
        <>
            <title>Registration</title>
            <Container>
                <Container className=" mt-lg-5">
                    <Row className="justify-content-md-center">
                        <Col md={6} className="bg-light rounded">
                            <h6 className="text-center text-primary m-2">Registration</h6>
                            <Row className="justify-content-center">
                                <Col md={6} className="mb-3 p-2">
                                    <Text
                                        title="Name"
                                        name="name"
                                        min={5}
                                        text="Enter full name"
                                        value={credentials.name}
                                        handler={credentialsHandler}
                                    >
                                        <FaUserAlt />
                                    </Text>
                                    <Email
                                        title="Email"
                                        name="email"
                                        text="Enter your email"
                                        value={credentials.email}
                                        handler={credentialsHandler}
                                    >
                                        <MdEmail />
                                    </Email>
                                    <Phone
                                        title="Phone"
                                        name="phone"
                                        min={8}
                                        text="Enter phone number"
                                        value={credentials.phone}
                                        handler={credentialsHandler}
                                    >
                                        <BsTelephoneFill />
                                    </Phone>
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
                                            Registration
                                        </Button>
                                    </div>
                                </Col>
                                <div className="text-center">
                                    <p>
                                        Have an account? <Link to="/login">Sign in</Link>
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
