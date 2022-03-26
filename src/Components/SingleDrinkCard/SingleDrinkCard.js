import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleDrinkCard.css'

const SingleDrinkCard = ({ singleDrink, addToCart }) => {
    const { img, name, price } = singleDrink
    // console.log(addToCart)
    return (

        <div className='col-md-6 col-lg-4 col-12 '>
            <div className='singleDrink-container shadow-lg'>
                <div className='image-container '>
                    <img src={img} alt="" className='img-fluid' />
                </div>
                <div className='singleDrink-info'>
                    <h1>{name}</h1>
                    <h3>Price : ${price}</h3>

                </div>
                <div className='add-to-cart '>
                    <button onClick={() => { addToCart(singleDrink) }} className='addToCart d-flex align-items-center justify-content-center'>
                        <p className='btn-text mb-0 me-3'>Add to Cart</p>
                        <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
                    </button>


                </div>
            </div>
        </div>

    );
};

export default SingleDrinkCard;