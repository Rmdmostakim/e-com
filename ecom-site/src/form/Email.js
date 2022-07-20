/* eslint-disable no-useless-escape */
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Classes from '../assets/css/form.module.css';

export default function Email(props) {
    const { title, name, value, handler, text, children: icon } = props;
    const [empty, setEmpty] = useState(false);
    const [valid, setValid] = useState(true);
    const inputHandler = (event) => {
        const { name: iName, value: iValue } = event.target;
        const res =
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (iValue.trim().length === 0) {
            setEmpty(true);
            setValid(true);
        } else if (!iValue.match(res)) {
            setEmpty(false);
            setValid(false);
        } else {
            setEmpty(false);
            setValid(true);
        }

        handler(iName, iValue);
    };
    return (
        <div className="mb-1">
            <Form.Group className={Classes.text}>
                <Form.Label
                    className={(empty && Classes.errorText) || (!valid && Classes.errorText)}
                >
                    {icon} &ensp;<small>{title}</small>
                </Form.Label>
                <Form.Control
                    size="sm"
                    type="text"
                    placeholder={text}
                    name={name}
                    value={value}
                    onChange={inputHandler}
                    className={(empty && Classes.errorOutline) || (!valid && Classes.errorOutline)}
                />
            </Form.Group>
            <div className={`${Classes.errorBox} fw-bold text-center text-danger`}>
                {empty && <small>Input field can not be empty</small>}
                {!valid && <small>Enter valid email address</small>}
            </div>
        </div>
    );
}
