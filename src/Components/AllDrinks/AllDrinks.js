import React, { useEffect, useState } from 'react';
import SingleDrinkCard from '../SingleDrinkCard/SingleDrinkCard';
import './AllDrinks.css'

const AllDrinks = () => {
    const [allDrinks, setAllDrinks] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                setAllDrinks(data);
            })
    }, []);
    return (
        <div className='container'>
            <h1 className='text-center'>All drinks {allDrinks.length}</h1>

            {
                allDrinks.map(singleDrink => <SingleDrinkCard
                    singleDrink={singleDrink}
                    key={singleDrink.id}
                ></SingleDrinkCard>)
            }

        </div>
    );
};

export default AllDrinks;