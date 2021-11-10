import React from 'react'
import Login from './Login/Login'
import BackToHome from '../../Components/BackBtn/BackToHome'
import './Login.css';
import cameraBg from '../../images/cameraBg.jpg'
const LoginPage = () => {
    return (
        <div className='banner' style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6),
        rgba(0, 0, 0, 0.6)), url(${cameraBg})`
        }}>
            <Login/>
            <BackToHome /> 
        </div>
    )
}

export default LoginPage
