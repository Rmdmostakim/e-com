import { Badge, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaCartArrowDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Classes from '../../assets/css/menu.module.css';
import icon from '../../assets/icons/icons.png';
import { changeShow } from '../../features/clientsite/CartSlice';
import { searchFilter } from '../../features/clientsite/ProductsSlice';

export default function Menu() {
    const { count } = useSelector((state) => state.cart);
    const dispacth = useDispatch();
    const serachHandler = (event) => {
        const { value } = event.target;
        dispacth(searchFilter(value));
    };
    const cartHandler = () => {
        dispacth(changeShow());
    };
    return (
        <div className={`${Classes.navContainer} bg-dark fw-bold`}>
            <Container className={Classes.navMenu}>
                <Row>
                    <Col md={3} sm={12} className={Classes.navBrand}>
                        <Link to="/">
                            <img src={icon} alt="brnad name" /> Brandname
                        </Link>
                    </Col>
                    <Col md={5} sm={12} className={Classes.navSearch}>
                        <form>
                            <InputGroup size="sm">
                                <Form.Control
                                    type="text"
                                    placeholder="search...."
                                    onChange={serachHandler}
                                />
                                <InputGroup.Text className={Classes.searchBtn}>
                                    <AiOutlineSearch />
                                </InputGroup.Text>
                            </InputGroup>
                        </form>
                    </Col>
                    <Col md={4} sm={12} className="text-center">
                        <div
                            className={Classes.cartBox}
                            tabIndex={0}
                            role="button"
                            onClick={cartHandler}
                        >
                            <FaCartArrowDown />
                            <Badge bg="primary" pill>
                                <small>{count}</small>
                            </Badge>
                        </div>
                        <Link to="/login">Sign in</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
