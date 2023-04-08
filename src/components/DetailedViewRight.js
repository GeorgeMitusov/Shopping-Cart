import React, { useContext }  from 'react';
import { Context } from '../context/Context.js';
import { Link, useNavigate } from 'react-router-dom';

import StarRatings from 'react-star-ratings';

import '../styles/DetailedViewRight.scss';

const DetailedViewRight = () => {

    const { selectedItem, addToCart, onCartOpen, itemQuantity, setItemQuantity,
        onQuantityIncrease, onQuantityDecrease, errorMessage, setErrorMessage } = useContext(Context);

    const navigate = useNavigate();

    const handleBuyNowClick = () => {

        if (itemQuantity === 0) {
            setErrorMessage('Please select a quantity greater than 0');
            return;
        }

        addToCart( selectedItem, itemQuantity );
        navigate('/checkout');
        setItemQuantity(1);
    }

    const handleQtyClick = () => {

        if (itemQuantity === 0) {
            setErrorMessage('Please select a quantity greater than 0');
            return;
        }

        addToCart( selectedItem, itemQuantity );
        onCartOpen();
        setItemQuantity(1);
    }

    return (
        <div className='detailed-view-right'>

            <div className='detailed-view-right-box'>

                <div className='detailed-view-title'>
                    <h1> { selectedItem.title } </h1>
                    <p> { selectedItem.category } </p>  
                </div>

                <div className='detailed-view-price'>
                    <span> price </span>
                    <h3> ${ selectedItem.price.toFixed(0) } </h3>
                </div>

                <div className='detailed-view-rating'>
                    <span className='detailed-view-rating-rate'>
                        Rate
                    </span>

                    <div className='detailed-view-rating-wrap'>
                        <span className='detailed-view-rating-stars'>
                            <StarRatings
                                rating={selectedItem.rating.rate}
                                starRatedColor="#FFD700"
                                starHoverColor="#FFD700"
                                starDimension="20px"
                                starSpacing="5px"
                                /> 
                        </span>
                        <span className='detailed-view-rating-count'> 
                            { selectedItem.rating.count } 
                        </span>
                    </div>
                </div>

                <div className='detailed-view-quantity'>
                    <span> quantity </span>
                    { errorMessage && <div className="error"> { errorMessage } </div>} 
                    <div className="custom-input-container">
                        <button 
                            className="custom-input-button"
                            onClick={onQuantityDecrease}
                        >
                            -
                        </button>
                        <input
                            className="custom-input-field"
                            type="number"
                            min="1"
                            max="10"
                            value={itemQuantity}
                        />
                        <button 
                            className="custom-input-button"
                            onClick={onQuantityIncrease}
                        >
                            +
                        </button>
                    </div>
                </div>

                <div className='detailed-view-nav'>
                    <button 
                        className='detailed-view-nav-add'
                        onClick={handleQtyClick}
                    > 
                        Add to cart 
                    </button>
                    <button 
                        className='detailed-view-nav-buy'
                        onClick={handleBuyNowClick}
                    >
                        Buy now 
                    </button>
                </div>

                <span className='detailed-view-border'></span>

                <div className='detailed-view-description'>
                    <h2> Details </h2>
                    <p> { selectedItem.description } </p>
                </div>

                <div className='detailed-view-sharing'>
                    <h1> SHARE </h1>
                    <div className='detailed-view-share-socials'>
                        <Link to='/'> Twitter </Link>
                        <Link to='/'> Facebook </Link>
                        <Link to='/'> LinkedIn </Link>
                        <Link to='/'> Copy URL </Link>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default DetailedViewRight;