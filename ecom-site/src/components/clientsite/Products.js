/* eslint-disable no-unused-vars */
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Classes from '../../assets/css/products.module.css';
import Smallcard from './Smallcard';

export default function Products(props) {
    const { search } = useSelector((state) => state.products);
    const { products } = props;

    return (
        <Container className={Classes.products}>
            <Row>
                {products &&
                    products
                        .filter((product) => {
                            if (search === '' || search === null) return true;
                            const name = product.name.toLowerCase();
                            return name.includes(search.toLowerCase());
                        })
                        .map((product) => (
                            <Col md={3} key={product.slug_id} className="mb-2">
                                <Smallcard product={product} />
                            </Col>
                        ))}
            </Row>
        </Container>
    );
}
