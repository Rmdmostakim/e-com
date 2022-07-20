import { Button } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Classes from '../../assets/css/smallcard.module.css';
import { addCart } from '../../features/clientsite/CartSlice';

export default function Smallcard({ product }) {
    const {
        slug_id: slugId,
        name,
        unit_price: unitPrice,
        offer_price: offerPrice,
        offer_type: offerType,
        images,
    } = product;
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(addCart(product));
    };

    return (
        <div className={Classes.card}>
            <div className={Classes.imageContainer}>
                <div className={Classes.first}>
                    <div className="d-flex justify-content-between align-items-center">
                        {offerType === 0 && (
                            <span className={Classes.discount}>{`-${offerPrice}`} &#2547;</span>
                        )}
                        {offerType === 1 && (
                            <span className={Classes.discount}>{`-${offerPrice} %`}</span>
                        )}
                        <span className="wishlist">
                            <i className="fa fa-heart-o" />
                        </span>
                    </div>
                </div>
                {images.map((image) => {
                    const { image: iName, type } = image;
                    if (type === 1) {
                        return (
                            <img
                                key={Math.random()}
                                src={iName}
                                className="img-fluid rounded thumbnail-image"
                                alt={iName}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            <div className="product-detail-container p-2">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className={Classes.productName}>
                        <Link to={`/product/${slugId}`} state={product}>
                            {name}
                        </Link>
                    </h5>
                    <div className="d-flex flex-column mb-2">
                        {offerType === 0 && (
                            <span className={Classes.newPrice}>
                                {unitPrice - offerPrice} &#2547;
                            </span>
                        )}
                        {offerType === 1 && (
                            <span className={Classes.newPrice}>
                                {unitPrice - (unitPrice * offerPrice) / 100} &#2547;
                            </span>
                        )}
                        <small className={`${Classes.oldPrice} text-right`}>
                            {unitPrice} &#2547;
                        </small>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-between align-items-center pt-1">
                <div className="m-1">
                    <AiOutlineStar />
                    <span className={Classes.ratingNumber}>4.8</span>
                </div>
                <div className="m-1">
                    <Button size="sm" variant="none" className={Classes.buy} onClick={addToCart}>
                        Buy
                    </Button>
                </div>
            </div>
        </div>
    );
}
