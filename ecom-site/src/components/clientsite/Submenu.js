/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import Classes from '../../assets/css/submenu.module.css';

export default function Submenu(props) {
    const { catName, subCategory } = props;
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    };
    const categoryList = (cat) => {
        const { name, slug_id: slugId } = cat;
        return (
            <ol key={Math.random()}>
                <NavLink
                    to={`/category/${slugId}`}
                    className={({ isActive }) =>
                        isActive ? `${Classes.active} text-capitalize` : 'text-capitalize'
                    }
                >
                    {name}
                </NavLink>
            </ol>
        );
    };
    const data = [
        { slug_id: 1, name: 'mobile' },
        { slug_id: 2, name: 'smart phone' },
        { slug_id: 3, name: 'smart tv' },
        { slug_id: 4, name: 'smart watch' },
    ];
    return (
        <div className={Classes.submenu}>
            <Button
                variant="none"
                className="btn btn-sm fw-bold text-capitalize"
                onClick={handleShow}
            >
                {catName} {show ? <BsCaretUpFill /> : <BsCaretDownFill />}
            </Button>
            <div>{show && subCategory.map((datas) => categoryList(datas))}</div>
        </div>
    );
}
