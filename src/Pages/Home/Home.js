import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import HomeProduct from './HomeProduct/HomeProduct'

const Home = () => {
    return (
        <div>
            <Navbar />
            <h2>Banner </h2>
            <HomeProduct />
            <h2>Review</h2>
            <footer>
                this is footer
            </footer>
        </div>
    )
}

export default Home
