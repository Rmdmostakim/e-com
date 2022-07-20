import { Container } from 'react-bootstrap';
import '../../assets/css/tracker.css';

export default function Tracker() {
    return (
        <Container className="px-1 px-md-4 py-5 mx-auto">
            <div className="card">
                <div className="row d-flex justify-content-center">
                    <div className="col-12">
                        <ul id="progressbar" className="progressbar text-center">
                            <li className="active step0" />
                            <li className="step0" />
                            <li className="step0" />
                            <li className="step0" />
                        </ul>
                    </div>
                    <div className="col-12">
                        <div className="icon_content">Confirmed</div>
                        <div className="icon_content">Picked Up</div>
                        <div className="icon_content">On the Way</div>
                        <div className="icon_content">Delivered</div>
                    </div>
                </div>
            </div>
        </Container>
    );
}
