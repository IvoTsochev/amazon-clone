import React from 'react'
import Product from '../Product/Product'
// Styling
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className='home__image' src="https://m.media-amazon.com/images/I/71yDly3tmEL._SX3000_.jpg" alt="" />
            </div>
            <div className="home__row">
                <Product />
            </div>

            <div className="home__row">
                {/* Product */}
                {/* Product */}
                {/* Product */}
            </div>

            <div className="home__row">
                {/* Product */}
            </div>
        </div>
    )
}

export default Home
