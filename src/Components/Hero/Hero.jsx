import React from 'react'
import style from './Hero.module.scss'

const Hero = () => {
  return (
    <div>
      <section className={style.home} id="home">
        <div className={style.content}>
          <h3>EXPRESS HOME DELIVERY</h3>
          <p>
            Lorem Ipsum Dolor Sit Amet Consectetur
            Adipisicing Elit. Laboriosam Quos
            Repellendus Aliquam Quam Aperiam Quas?
          </p>
          <a href="/menu" className={style.btn}>Order Now</a>
        </div>
      </section>
    </div>
  )
}

export default Hero
