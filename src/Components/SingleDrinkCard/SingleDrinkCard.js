import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './SingleDrinkCard.css'

const SingleDrinkCard = ({ singleDrink }) => {
    const { img, name, price } = singleDrink
    // console.log(addToCart)
    return (

        <div className='singleDrink-container col-md-6 col-lg-4 col-12 '>
            <div className='image-container '>
                <img src={img} alt="" className='img-fluid' />
            </div>
            <div className='singleDrink-info'>
                <h1>{name}</h1>
                <h3>Price : ${price}</h3>

            </div>
            <div className='add-to-cart'>
                <button className='btn-cart'>
                    <p className='btn-text'>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                </button>


            </div>
        </div>

    );
};

export default SingleDrinkCard;