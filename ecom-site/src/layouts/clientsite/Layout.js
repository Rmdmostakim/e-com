/* eslint-disable no-unused-vars */
import { useSelector } from 'react-redux';
import Classes from '../../assets/css/layout.module.css';
import Cart from '../../components/clientsite/Cart';
import Footer from './Footer';
import Menu from './Menu';
import Sidenav from './Sidenav';

export default function Layout(props) {
    const { children } = props;
    const { show } = useSelector((state) => state.cart);
    return (
        <>
            <Menu />
            <div className={Classes.main}>
                <div className={Classes.sidenav}>
                    <Sidenav />
                </div>
                <div className={Classes.products}>{children}</div>
            </div>
            {show && <Cart />}
            <Footer />
        </>
    );
}
