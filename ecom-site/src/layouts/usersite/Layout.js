/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Sidemenu from './Sidemenu';
import Topmenu from './Topmenu';

export default function Layout(props) {
    const { children } = props;
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Topmenu show={handleShow} />
            <Sidemenu show={show} close={handleClose} />
            <Container className="pt-5">{children}</Container>
        </>
    );
}
