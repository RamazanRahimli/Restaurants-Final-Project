import React from 'react';
import style from './MenuSection.module.scss'; 
import menu1 from "../../About/menu-1.png"
import menu2 from "../../About/menu-2.png"
import menu3 from "../../About/menu-3.png"
import menu4 from "../../About/menu-4.png"
const MenuSection = () => {
    return (
        <section className={style.menu} id="menu">
            <h1 className={style.heading}> OUR <span> MENU </span></h1>
            <div className={style['box-container']}>
                <div className={style.box} id="card">
                    <div className={style['box-head']}>
                        <img src={menu1} className={style.imgs} alt="menu" />
                        <span className={style['menu-category']}>Pizza</span>
                        <h3 className={style.title}> 6 Mini Pizzas</h3>
                        <div className={style.price}>$24.99 </div>
                    </div>
                    <div className={style['box-bottom']}>
                        <button id="add-btn" className={style.btn}>add to card</button>
                    </div>
                </div>

                <div className={style.box} id="card">
                    <div className={style['box-head']}>
                        <img src={menu2} className={style.imgs} alt="menu" />
                        <span className={style['menu-category']}>Burger</span>
                        <h3 className={style.title}> 5 Mini Burgers</h3>
                        <div className={style.price}>$19.99 </div>
                    </div>
                    <div className={style['box-bottom']}>
                        <button id="add-btn" className={style.btn}>add to card</button>
                    </div>
                </div>

                <div className={style.box} id="card">
                    <div className={style['box-head']}>
                        <img src={menu3} className={style.imgs} alt="menu" />
                        <span className={style['menu-category']}>PIZZA</span>
                        <h3 className={style.title}> 2 Mixed Pizzas</h3>
                        <div className={style.price}>$40.99 </div>
                    </div>
                    <div className={style['box-bottom']}>
                        <button id="add-btn" className={style.btn}>add to card</button>
                    </div>
                </div>

                <div className={style.box} id="card">
                    <div className={style['box-head']}>
                        <img src={menu4}className={style.imgs} alt="menu" />
                        <span className={style['menu-category']}>Burger</span>
                        <h3 className={style.title}> 3 Meatball Burgers</h3>
                        <div className={style.price}>$25.99 </div>
                    </div>
                    <div className={style['box-bottom']}>
                        <button id="add-btn" className={style.btn}>add to card</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenuSection;
