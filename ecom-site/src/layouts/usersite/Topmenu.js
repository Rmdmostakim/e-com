import { Badge, Button, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { AiOutlineLogout } from 'react-icons/ai';
import { FaBars, FaBell } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Classes from '../../assets/css/userTopmenu.module.css';

export default function Topmenu(props) {
    const { show } = props;
    return (
        <div className={`${Classes.topMenu} bg-dark`}>
            <Container>
                <Row>
                    <Col md={3} sm={6}>
                        <div className="d-flex">
                            <Link to="/" className=" text-white-50">
                                Brandname
                            </Link>
                            <div
                                onClick={show}
                                tabIndex={0}
                                role="button"
                                className={`${Classes.menuBar} text-center text-white`}
                            >
                                <FaBars />
                            </div>
                        </div>
                    </Col>
                    <Col md={{ span: 4, offset: 4 }} sm={6}>
                        <Row>
                            <Col md={8}>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip>Notification</Tooltip>}
                                >
                                    <Button variant="none" className="text-white" size="sm">
                                        <FaBell />
                                        <Badge pill bg="danger">
                                            9
                                        </Badge>
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip>Message</Tooltip>}
                                >
                                    <Button variant="none" className="text-white" size="sm">
                                        <MdEmail />
                                        <Badge pill bg="danger">
                                            9
                                        </Badge>
                                    </Button>
                                </OverlayTrigger>
                            </Col>
                            <Col md={4}>
                                <OverlayTrigger
                                    placement="bottom"
                                    overlay={<Tooltip>Logout</Tooltip>}
                                >
                                    <Button variant="none" className="text-white">
                                        <AiOutlineLogout />
                                    </Button>
                                </OverlayTrigger>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
