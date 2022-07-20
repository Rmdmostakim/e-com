/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { AiFillCloseCircle } from 'react-icons/ai';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Classes from '../assets/css/imageType.module.css';

export default function Photo(props) {
    const { title, name, handler, value, children: icon } = props;
    const [empty, setEmpty] = useState(false);
    const styles = {
        fontFamily: 'sans-serif',
        textAlign: 'center',
        display: 'flex',
    };
    const fileHandler = (event) => {
        const { files } = event.target;
        const fileArr = Array.prototype.slice.call(files);
        handler(name, fileArr);
    };
    const removeHandler = (iName) => {
        const filter = value.filter((image) => image !== iName);
        handler(name, filter);
    };
    const perview = () => {
        if (value.length === 0) {
            return (
                <div className="errorBox fw-bold text-center text-danger">
                    <small>Input field can not be empty</small>
                </div>
            );
        }
        return (
            <Row className="justify-content-md-center">
                {value.map((image) => (
                    <Col md={3} key={Math.random()}>
                        <img src={URL.createObjectURL(image)} alt={image.name} />
                        <div className={`${Classes.remove} text-danger`}>
                            <AiFillCloseCircle onClick={() => removeHandler(image)} />
                        </div>
                    </Col>
                ))}
            </Row>
        );
    };
    return (
        <div className="mb-1">
            <Form.Group>
                <Form.Label>
                    {icon}&ensp;{title}
                </Form.Label>
            </Form.Group>
            <div className={`${Classes.upload_btn_wrapper} d-grid`}>
                <Button size="sm" variant="primary">
                    <FaCloudUploadAlt />
                    &ensp;Upload
                </Button>
                <input type="file" multiple onChange={fileHandler} />
            </div>
            <div className={`${Classes.preview} m-2 p-2`}>{perview()}</div>
        </div>
    );
}
