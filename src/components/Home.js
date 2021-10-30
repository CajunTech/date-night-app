import React from 'react';
import './Home.css'

export default function Home(props) {
    return (
        <div className='home_container'>
            <div className='home_drink'>
            <img className='drinkImg' src='/images/liquor/liquor1.png' alt='dna logo'/>
            </div>
            <div className='home_combo'></div>
            <div className='home_meal'></div>
        </div>
    );
}

