import React from 'react'
import Header from '../../Components/Header/Header'
import Hero from '../../Components/Hero/Hero'
import MenuSection from '../../Components/MenuSection/MenuSection'
import ProductSection from '../../Components/ProductSection/ProductSection'
import AboutSection from '../../Components/AboutSection/AboutSection'
import ReviewSection from '../../Components/ReviewSection/ReviewSection'
import ContactSection from '../../Components/ContactSection/ContactSection'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <MenuSection/>
      <ProductSection/>
      <AboutSection/>
      <ReviewSection/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home
