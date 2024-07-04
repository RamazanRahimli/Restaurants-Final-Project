import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import About from '../Pages/About/About'
import Menu from '../Pages/Menu/Menu'
import Product from '../Pages/Product/Product'
import Review from '../Pages/Review/Review'
import Contact from '../Pages/Contact/Contact'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/product' element={<Product />} />
                    <Route path='/review' element={<Review />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router
