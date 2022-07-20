/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Classes from '../assets/css/form.module.css';

export default function Password(props) {
    const { title, name, value, handler, min, text, children: icon } = props;
    const [empty, setEmpty] = useState(false);
    const [valid, setValid] = useState(true);
    const [visible, setVisible] = useState(false);
    const inputHandler = (event) => {
        const { name: iName, value: iValue } = event.target;
        if (iValue.trim().length === 0) {
            setEmpty(true);
            setValid(true);
        } else if (iValue.trim().length >= 0 && iValue.trim().length < min) {
            setEmpty(false);
            setValid(false);
        } else {
            setEmpty(false);
            setValid(true);
        }

        handler(iName, iValue);
    };
    const visibleHandler = () => {
        setVisible(!visible);
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
                    type={visible ? 'text' : 'password'}
                    placeholder={text}
                    name={name}
                    value={value}
                    onChange={inputHandler}
                    className={(empty && Classes.errorOutline) || (!valid && Classes.errorOutline)}
                />
                <span
                    className={Classes.visible}
                    onClick={visibleHandler}
                    role="button"
                    tabIndex={0}
                >
                    {visible ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
            </Form.Group>
            <div className={`${Classes.errorBox} fw-bold text-center text-danger`}>
                {empty && <small>Input field can not be empty</small>}
                {!valid && <small>Minimim {min} character needed</small>}
            </div>
        </div>
    );
}
