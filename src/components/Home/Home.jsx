import React from 'react'
import Product from '../Product/Product'
// Styling
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <div className="home__container">

                <img className='home__image' src="https://m.media-amazon.com/images/I/71yDly3tmEL._SX3000_.jpg" alt="" />

                <div className="home__row">
                    <Product
                        id="78126517"
                        title='The lean startuup'
                        price={29.99}
                        image='https://m.media-amazon.com/images/I/81RN0EFUcMS._AC_SX425_.jpg'
                        rating={5}
                    />
                    <Product
                        id="98172948"
                        title='DOQAUS Bluetooth Headphones Over Ear'
                        price={28.04}
                        image='https://m.media-amazon.com/images/I/61LnmC0aRrL._AC_SL1500_.jpg'
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="46234172347"
                        title='Jean-Patrique The Whatever Pan'
                        price={26.47}
                        image='https://m.media-amazon.com/images/I/71GwP7F0a4L._AC_SL1500_.jpg'
                        rating={4}
                    />
                    <Product
                        id="1541341"
                        title='COSORI Air Fryer Oven with Rapid Air Circulation'
                        price={67.99}
                        image='https://m.media-amazon.com/images/I/71+ZbkyIcdL._AC_SL1500_.jpg'
                        rating={5}
                    />
                    <Product
                        id="12352362"
                        title='UGHEZZ Dehumidifier 1000ml Small Dehumidifier'
                        price={37.39}
                        image='https://m.media-amazon.com/images/I/61Uzl6b9J1L._AC_SL1500_.jpg'
                        rating={3}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="43234464"
                        title='Needs&Gifts 2-3 KG Prime Quality 100% Original'
                        price={13.59}
                        image='https://m.media-amazon.com/images/I/61-RbTjqxmL._AC_SL1391_.jpg'
                        rating={5}
                    />
                </div>

            </div>
        </div>
    )
}

export default Home
