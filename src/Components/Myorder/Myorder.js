import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth'
import OrderCard from './OrderCard'


const Myorder = () => {
    const [myOrder, setMyOrder] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch('http://localhost:5000/my-booking', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: user.email })
        }).then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user.email])
    return (
        <div className='mx-auto container my-5'>
            <h2>My Order: </h2>
            
            <div>
                {
                    myOrder.map(order => <OrderCard
                        key={order._id}
                        order={order}
                    />
                    )}


            </div>
        </div>
    )
}

export default Myorder
