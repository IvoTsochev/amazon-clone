import React from 'react'
import './Checkout.css';

function Checkout() {
    return (
        <div className='checkout'>

            <div className="checkout__left">
                <img className='checkout__ad' src="https://fortheloveblog.com/wp-content/uploads/2016/07/Amazon-Prime-Banner.jpg" alt="" />
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {/* BasketItemi */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItemi */}
                </div>
            </div>

            <div className="checkout__right">
                <h2>The subtotal will go here</h2>
            </div>
        </div>
    )
}


export default Checkout
