
import React from 'react';
import menu9 from '../../About/quote.png';
import menu91 from '../../About/avatar-1.png';
import menu92 from '../../About/avatar-2.png';
import menu93 from '../../About/avatar-3.png';
import style from './ReviewSection.module.scss'; 

const ReviewSection = () => {
    return (
        <section className={style.review} id="review">
            <h1 className={style.heading}>Customer's <span>Review</span></h1>
            <div className={style['box-container']}>
                <div className={style.box}>
                    <img src={menu9} alt="quote" />
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                        Autem Nulla Repellendus Similique Porro Explicabo,
                        Blanditiis Voluptatibus Obcaecati Harum Est,
                        Eos Quo Modi Alias.
                        Possimus Odio Quam Ex Earum Ducimus! Officia.</p>
                    <img src={menu91} alt="avatar" className="user" />
                    <h3>Günel</h3>
                    <div className={style.stars}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
                <div className={style.box}>
                    <img src={menu9}  alt="quote" />
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                        Autem Nulla Repellendus Similique Porro Explicabo,
                        Blanditiis Voluptatibus Obcaecati Harum Est,
                        Eos Quo Modi Alias.
                        Possimus Odio Quam Ex Earum Ducimus! Officia.</p>
                    <img src={menu92} alt="avatar" className="user" />
                    <h3>Cavid</h3>
                    <div className={style.stars}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
                <div className={style.box}>
                    <img src={menu9} alt="quote" />
                    <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.
                        Autem Nulla Repellendus Similique Porro Explicabo,
                        Blanditiis Voluptatibus Obcaecati Harum Est,
                        Eos Quo Modi Alias.
                        Possimus Odio Quam Ex Earum Ducimus! Officia.</p>
                    <img src={menu93} alt="avatar" className="user" />
                    <h3>Leyla</h3>
                    <div className={style.stars}>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ReviewSection;
