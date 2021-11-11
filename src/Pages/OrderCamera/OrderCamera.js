import React from 'react'
import BackToHome from '../../Components/BackBtn/BackToHome'
import Footer from '../../Components/Footer/Footer'
import Navbar from '../../Components/Navbar/Navbar'
import OrderForm from '../../Components/OrderForm/OrderForm'

const OrderCamera = () => {
    return (
        <div>
            <Navbar />
            <OrderForm ></OrderForm>
            <BackToHome></BackToHome>
            <Footer />
        </div>
    )
}

export default OrderCamera
