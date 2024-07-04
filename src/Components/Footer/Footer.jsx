// Footer.js

import React from 'react';
import style from './Footer.module.scss'; // veya stil dosyanızın yolunu ayarlayın

const Footer = () => {
    return (
        <section className={style.footer}>
            <div className={style.share}>
                <a href="/" className="fab fa-facebook"></a>
                <a href="/" className="fab fa-twitter"></a>
                <a href="https://www.instagram.com/mouradbalayev/?next=%2Faccounts%2Flogin%2F%3Fnext%3D%252Fmouradbalayev%252F%26source%3Dfollow&hl=en" className="fab fa-instagram"></a>
                <a href="/" className="fab fa-linkedin"></a>
                <a href="/" className="fab fa-pinterest"></a>
            </div>

            <div className={style.links}>
                <a href="/" className="active">Home</a>
                <a href="/about">About</a>
                <a href="/menu">Menu</a>
                <a href="/product">Products</a>
                <a href="/review">Review</a>
                <a href="/contact">Contacts</a>
            </div>
            <div className={style.credit}>
                created by <span>Ramazan Rehimli</span> | all rights reserved
            </div>
        </section>
    );
}

export default Footer;
