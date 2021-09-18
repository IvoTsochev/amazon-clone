import React from 'react'
// Styling
import './Product.css';

const Product = () => {
    return (
        <div className='product'>
            <div className="product__info">
                <p>The lean startup</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>19.99</strong>
                </p>
                <div className="product__rating">
                    <p>🌟 </p>
                </div>
            </div>

            <img src="https://m.media-amazon.com/images/I/81RN0EFUcMS._AC_SX425_.jpg" alt="" />

            <button>Add to Basket</button>

        </div>
    )
}

export default Product
