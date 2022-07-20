/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import '../assets/css/telType.css';

export default function Phone(props) {
    const { title, name, value, min, handler, text, children: icon } = props;
    const [empty, setEmpty] = useState(false);
    const inputHandler = (phone) => {
        if (phone.length < min) {
            setEmpty(true);
        } else {
            setEmpty(false);
        }
        handler(name, phone);
    };
    return (
        <div className="mb-1">
            <Form.Group>
                <Form.Label className={empty && 'errorText'}>
                    {icon} &ensp;<small>{title}</small>
                </Form.Label>
                <PhoneInput
                    country="bd"
                    enableSearch
                    placeholder={text}
                    value={value}
                    onChange={(phone) => inputHandler(phone)}
                    className={empty && 'errorOutline'}
                    countryCodeEditable={false}
                />
            </Form.Group>
            <div className="errorBox fw-bold text-center text-danger">
                {empty && <small>Minimim {min} digit needed</small>}
            </div>
        </div>
    );
}
