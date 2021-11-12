import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import AboutUsComponent from './AboutUsComponent'

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <AboutUsComponent />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default AboutUs
