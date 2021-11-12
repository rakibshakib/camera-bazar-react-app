import React from 'react'
import BannerPage from '../../Components/BannerPage/BannerPage'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import PromotionalBanner from '../../Components/PromotionalBanner/PromotionalBanner'
import Review from '../../Components/Review/Review'
import HomeProduct from './HomeProduct/HomeProduct'

const Home = () => {
    return (
        <div>
            <Navbar />
            <BannerPage />
            <HomeProduct />
            <hr />
            <NewsLetter />
            <PromotionalBanner />
            <Review />
            <Footer /> 
        </div>
    )
}

export default Home
