import React from 'react'
// Styling
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src="https://logo-base.com/logo/amazon-logo.png" alt="" />
            <div className="header__search">
                <input className='header__searchIn' type="text" />
                {/* Logo */}

                <div className="header__nav">
                    <div className="header__option">
                        <span className='header__optionLineOne'>Hello Guest</span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Hello Guest</span>
                    </div>
                    <div className="header__option">
                        <span className='header__optionLineOne'>Hello Guest</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
