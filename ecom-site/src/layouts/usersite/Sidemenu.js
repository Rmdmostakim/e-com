import { Offcanvas, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaBoxOpen } from 'react-icons/fa';
import { RiDashboardFill, RiLockPasswordFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import Classes from '../../assets/css/userSidemenu.module.css';
import user from '../../assets/images/user.png';

export default function Sidemenu(props) {
    const { show, close } = props;

    return (
        <Offcanvas show={show} onHide={close} scroll className={Classes.sideMenu}>
            <Offcanvas.Header closeButton className={Classes.dashboard}>
                <Offcanvas.Title>
                    <NavLink
                        to="/user/dashboard"
                        className={({ isActive }) => (isActive ? Classes.active : null)}
                    >
                        <RiDashboardFill /> Dashboard
                    </NavLink>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <hr />
            <Offcanvas.Body>
                <div className={`${Classes.profile} text-center`}>
                    <img src={user} alt="" />
                    <h6>User Name</h6>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip>Change Profile</Tooltip>}>
                        <NavLink
                            to="/user/avatar"
                            className={({ isActive }) => (isActive ? Classes.profileActive : null)}
                        >
                            <CgProfile />
                        </NavLink>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip>Reset Pasword</Tooltip>}>
                        <NavLink
                            to="/user/password"
                            className={({ isActive }) => (isActive ? Classes.profileActive : null)}
                        >
                            <RiLockPasswordFill />
                        </NavLink>
                    </OverlayTrigger>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip>Edit Profile</Tooltip>}>
                        <NavLink
                            to="/user/profile"
                            className={({ isActive }) => (isActive ? Classes.profileActive : null)}
                        >
                            <BiEdit />
                        </NavLink>
                    </OverlayTrigger>
                </div>
                <hr />
                <div className={Classes.link}>
                    <ul>
                        <li>
                            <NavLink
                                to="/user/cart"
                                className={({ isActive }) => (isActive ? Classes.active : null)}
                            >
                                <BsFillCartCheckFill /> Cart
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/user/orders"
                                className={({ isActive }) => (isActive ? Classes.active : null)}
                            >
                                <FaBoxOpen /> Orders
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
