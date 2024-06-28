import React from 'react';
import menu8 from '../../About/about.jpg';
import style from './AboutSection.module.scss'; // veya stil dosyanızın yolunu ayarlayın

const AboutSection = () => {
    return (
        <section className={style.about} id="about">
            <h1 className={style.heading}>about <span>us</span></h1>
            <div className={style.row}>
                <div className={style.image}>
                    <img src={menu8} alt="about" />
                </div>
                <div className={style.content}>
                    <h3>What Is The Secret Recipe Of Our Burgers?</h3>
                    <p>Lorem Ipsum, Dolor Sit Amet Consectetur
                        Adipisicing Elit. Quisquam Voluptatem Facere Amet Temporibus Culpa
                        Sit Illo Earum Cupiditate Soluta Perferendis!</p>
                    <p>Lorem Ipsum, Dolor Sit Amet Consectetur
                        Adipisicing Elit. Quisquam Voluptatem Facere Amet Temporibus Culpa
                        Sit Illo Earum Cupiditate Soluta Perferendis!</p>
                    <p>Lorem Ipsum, Dolor Sit Amet Consectetur
                        Adipisicing Elit. Quisquam Voluptatem Facere Amet Temporibus Culpa
                        Sit Illo Earum Cupiditate Soluta Perferendis!</p>
                    <a href="https://www.myrecipes.com/recipe/classic-burger" className={style.btn}>Learn More</a>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
