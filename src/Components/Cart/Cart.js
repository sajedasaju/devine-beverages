import React from 'react';
// import { Button } from 'react-bootstrap';
import CartDetails from '../CartDetails/CartDetails';
import './Cart.css'

const Cart = ({ cart, clearCart, selectRandomProduct }) => {
    // const { img, name } = props;

    // console.log(props.cart, name)

    return (
        <div className='cart-container'>

            <h4>Selected Beverages</h4>
            {/* <p>{img}</p> */}
            {
                cart.map(item => <CartDetails
                    key={item.id}
                    item={item}
                ></CartDetails>)
            }
            <button onClick={selectRandomProduct} className="mb-2 cart-btn">Choose 1 For Me</button>
            <br />
            <button onClick={clearCart} className=" cart-btn">Clear Cart</button>
            <br />

        </div>
    );
};

export default Cart;