import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import QuestionSection from '../QuestionSection/QuestionSection';
import SingleDrinkCard from '../SingleDrinkCard/SingleDrinkCard';
import './AllDrinks.css'

const AllDrinks = () => {
    const [allDrinks, setAllDrinks] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (drinks) => {
        if (cart.length < 4) {
            let newCart;
            const exist = cart.find(prevCartItem => prevCartItem.id === drinks.id)
            if (!exist) {
                newCart = [...cart, drinks];
                setCart(newCart);
            }
            else {
                const newCart = [...cart];
                alert("This item is already added")
                setCart(newCart);

            }

        }
        else {
            alert("You can not add more than 4 Items.")
        }

    }


    const selectRandomProduct = () => {
        const length = cart.length;
        console.log(cart, length)
        let newCart
        const random = Math.round(Math.random() * length);
        {
            const randomDRinks = cart[random];
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
        <div className='Beverages'>

            <div className="row m-0 p-0">
                <div className='order-2 col-lg-8 container mt-5'>
                    <div className='row g-4 '>
                        {
                            allDrinks.map(singleDrink => <SingleDrinkCard
                                singleDrink={singleDrink}
                                key={singleDrink.id}
                                addToCart={addToCart}
                            ></SingleDrinkCard>)
                        }
                    </div>
                </div>

                <div className='col-lg-2 col-md-2 cart-section shadow-lg'>
                    <Cart
                        cart={cart}
                        clearCart={clearCart}
                        selectRandomProduct={selectRandomProduct}
                    ></Cart>
                </div>
            </div>
            <QuestionSection></QuestionSection>
        </div>

    );
};

export default AllDrinks;