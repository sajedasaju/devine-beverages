import React from 'react';
import { Button } from 'react-bootstrap';
import './Cart.css'

const Cart = ({ cart }) => {
    // const { img, name } = props;

    // console.log(props.cart, name)
    return (
        <div>
            <h4>Selected Beverages</h4>
            {/* <p>{img}</p> */}
            {
                cart.map(item => <p><img src={item.img} className="cart-img" alt="" /> {item.name}</p>)
            }
            <Button>Choose Again</Button>
        </div>
    );
};

export default Cart;