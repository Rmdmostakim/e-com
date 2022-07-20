import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaImages, FaUserAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Email from '../form/Email';
import Phone from '../form/Phone';
import Photo from '../form/Photo';
import Text from '../form/Text';

export default function Testlogin() {
    const initialValue = { name: '', email: '', phone: '', cover: [] };
    const [credentials, setCredentials] = useState(initialValue);
    const credentialsHandler = (name, value) => {
        setCredentials({ ...credentials, [name]: value });
    };
    const coverPhotoHandler = (name, files) => {
        setCredentials({ ...credentials, [name]: files });
    };
    console.log(credentials);
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <form>
                        <Text
                            title="Name"
                            name="name"
                            min={4}
                            text="Enter your name"
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
                            value={credentials.phone}
                            handler={credentialsHandler}
                            text="Enter phone number"
                        >
                            <BsTelephoneFill />
                        </Phone>
                        <Photo
                            title="Cover photo"
                            name="cover"
                            value={credentials.cover}
                            handler={coverPhotoHandler}
                        >
                            <FaImages />
                        </Photo>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}
