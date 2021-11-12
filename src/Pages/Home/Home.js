import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import Review from '../../Components/Review/Review'
import HomeProduct from './HomeProduct/HomeProduct'

const Home = () => {
    return (
        <div>
            <Navbar />
            <h2>Banner </h2>
            <HomeProduct />
            <hr />
            
            <Review />
            <Footer /> 
        </div>
    )
}

export default Home
