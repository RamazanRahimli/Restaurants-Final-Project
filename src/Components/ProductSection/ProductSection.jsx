import React from 'react';
import style from './ProductSection.module.scss'; 
import menu5 from "../../About/product-1.png"
import menu6 from "../../About/product-2.png"
import menu7 from "../../About/dark-product.jpg"

const ProductSection = () => {
    return (
        <section className={style.product} id="product">
            <h1 className={style.heading}>our <span>products</span></h1>
            <div className={style['box-container']}>
                <div className={`${style.box}`}>
                    <div className={style['box-head']}>
                        <span className={style.title}>Mini Burger</span>
                        <a href="#" className={style.name}>Bacon Burger</a>
                    </div>
                    <div className={style.image}>
                        <img src={menu5} alt="" />
                        <span className={style.title}>Mini Burger</span>
                        <a href="#" className={style.name}>Bacon Burger</a>
                    </div>
                    <div className={style['box-bottom']}>
                        <div className={style.info}>
                            <b className={style.price}>$9.00</b>
                            <span className={style.amount}>110gr / 300 cal</span>
                        </div>
                    </div>
                </div>
                <div className={`${style.box}`}>
                    <div className={style['box-head']}>
                        <span className={style.title}>Dark Burger</span>
                        <a href="#" className={style.name}>Dark+Cheese Burger</a>
                    </div>
                    <div className={style.image}>
                        <img src={menu6} alt="" />
                    </div>
                    <div className={style['box-bottom']}>
                        <div className={style.info}>
                            <b className={style.price}>$10.00</b>
                            <span className={style.amount}>130gr / 500 cal</span>
                        </div>
                    </div>
                </div> <div className={`${style.box}`}>
                    <div className={style['box-head']}>
                        <span className={style.title}>Dark Burger</span>
                        <a href="#" className={style.name}>Dark+Cheese Burger</a>
                    </div>
                    <div className={style.image}>
                        <img src={menu7} alt="" />
                    </div>
                    <div className={style['box-bottom']}>
                        <div className={style.info}>
                            <b className={style.price}>$10.00</b>
                            <span className={style.amount}>130gr / 500 cal</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default ProductSection;
