import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleDrinkCard from '../SingleDrinkCard/SingleDrinkCard';
import './AllDrinks.css'

const AllDrinks = () => {
    const [allDrinks, setAllDrinks] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (drinks) => {
        let newCart;
        const exist = cart.find(prevCartItem => prevCartItem.id === drinks.id)
        if (!exist) {
            newCart = [...cart, drinks];
            setCart(newCart);
        }
        else {
            const newCart = [...cart];
            alert("already added")
            setCart(newCart);

        }

    }

    const length = cart.length;
    const selectRandomProduct = () => {
        let newCart
        const random = Math.round(Math.random() * length);
        {
            const randomDRinks = cart.find(item => item.id === random);
            if (randomDRinks) {
                newCart = [randomDRinks];
                setCart(newCart);
            }


        }

        console.log(random)
    }

    const clearCart = () => {
        const newCart = [];
        setCart(newCart);
    }


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setAllDrinks(data);
            })
    }, []);
    return (
        <div className='Beverages container '>

            <div className="row">
                <div className='col-lg-10 col-md-10 col-12'>
                    <div className='row'>
                        {
                            allDrinks.map(singleDrink => <SingleDrinkCard
                                singleDrink={singleDrink}
                                key={singleDrink.id}
                                addToCart={addToCart}
                            ></SingleDrinkCard>)
                        }
                    </div>
                </div>

                <div className='col-lg-2 col-md-2 bg-success'>
                    <Cart
                        cart={cart}
                        clearCart={clearCart}
                        selectRandomProduct={selectRandomProduct}
                    ></Cart>
                </div>
            </div>
        </div>

    );
};

export default AllDrinks;