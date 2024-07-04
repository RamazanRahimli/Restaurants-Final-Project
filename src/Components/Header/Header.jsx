import React from 'react';
import style from './Header.module.scss'; 
import logo from "../../About/logo.png"
const Header = () => {
    return (
        <header className={style.header}>
            <a href="/" className={style.logo}>
                <img src={logo} alt="logo" />
            </a>
            <nav className={style.navbar}>
                <a href="/">Home</a>
                <a href="/about" >About</a>
                <a href="/menu">Menu</a>
                <a href="/product">Products</a>
                <a href="/review">Review</a>
                <a href="/contact">Contacts</a>
            </nav>
            <div className={style.buttons}>
                <button id="search-btn">
                    <i className="fas fa-search"></i>
                </button>
                <button id="cart-btn" >
                    <i className="fas fa-shopping-cart"></i>
                    <span id='item-count'></span>
                </button>
                <button id="menu-btn " className={style.menubtn}>
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className={style['search-form']}>
                <input type="text" className={style['search-input']} id="search-box" placeholder="Search Here" />
                <i className="fas fa-search"></i>
            </div>
            <div className={style['cart-items-container']}>
                {/* Sepet içeriği buraya eklenebilir */}
            </div>
        </header>
    );
}

export default Header;
