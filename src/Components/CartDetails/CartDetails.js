import React from 'react';
import './CartDetails.css'

const CartDetails = ({ item }) => {
    const { name, img } = item;

    return (
        <div>
            <p className='fw-bolder fs-5 mb-3 pb-3 cart-each-item-details'><img className='cart-img' src={img} alt="" />  {name}</p>



        </div>
    );
};

export default CartDetails;