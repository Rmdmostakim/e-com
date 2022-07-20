import { Button, Col, Container, Row } from 'react-bootstrap';
import { GlassMagnifier } from 'react-image-magnifiers';
import { useDispatch } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { useLocation } from 'react-router-dom';
import Classes from '../../assets/css/details.module.css';
import { addCart } from '../../features/clientsite/CartSlice';

export default function Details() {
    const location = useLocation();
    const product = location.state;
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addCart(product));
    };
    return (
        <Container className={Classes.details}>
            <Row className="justify-content-center">
                <Col md={6}>
                    <Row>
                        <Col md={6}>
                            <Carousel
                                showArrows={false}
                                showStatus={false}
                                infiniteLoop
                                showThumbs={false}
                                autoPlay
                                stopOnHover
                            >
                                {product.images.map((image) => {
                                    const { slug_id: slugId, image: name } = image;
                                    return (
                                        <GlassMagnifier
                                            key={slugId}
                                            allowOverflow={false}
                                            imageSrc={name}
                                            largeImageSrc={name}
                                            magnifierBorderSize={1}
                                            magnifierSize="30%"
                                        />
                                    );
                                })}
                            </Carousel>
                        </Col>
                        <Col md={6}>
                            <h6>{product.name}</h6>
                            <h6>
                                Brand: <small>{product.brand.name}</small>
                            </h6>
                            <h6>{product.details && product.details.details}</h6>
                        </Col>
                    </Row>
                    <Row className="justify-content-center mt-5">
                        <Col md={4}>
                            <Button size="sm" onClick={addToCart}>
                                Add to cart
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}
