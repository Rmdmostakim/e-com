import { Outlet, Route, Routes } from 'react-router-dom';
import CLientLayout from '../layouts/clientsite/Layout';
import UserLayout from '../layouts/usersite/Layout';
import Category from '../pages/clientsite/Category';
import Details from '../pages/clientsite/Details';
import Home from '../pages/clientsite/Home';
import Registration from '../pages/clientsite/Registration';
import Userlogin from '../pages/clientsite/Userlogin';
import Carts from '../pages/usersite/Carts';
import Dashboard from '../pages/usersite/Dashboard';
import Orders from '../pages/usersite/Orders';

function MainRoutes() {
    return (
        <Routes>
            <Route
                element={
                    <CLientLayout>
                        <Outlet />
                    </CLientLayout>
                }
            >
                <Route path="/" element={<Home />} />
                <Route path="/product/:slugId" element={<Details />} />
                <Route path="/category/:slugId" element={<Category />} />
            </Route>
            <Route path="/login" element={<Userlogin />} />
            <Route path="/registration" element={<Registration />} />
            <Route
                element={
                    <UserLayout>
                        <Outlet />
                    </UserLayout>
                }
            >
                <Route path="/user/dashboard" element={<Dashboard />} />
                <Route path="/user/cart" element={<Carts />} />
                <Route path="/user/orders" element={<Orders />} />
            </Route>
        </Routes>
    );
}
export default MainRoutes;
