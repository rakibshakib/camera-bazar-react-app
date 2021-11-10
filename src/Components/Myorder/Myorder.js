import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth'
import OrderCard from './OrderCard';
import CircularProgress from '@mui/material/CircularProgress';

const Myorder = () => {
    const [myOrder, setMyOrder] = useState([])
    const { user } = useAuth()

    useEffect(() => {
        fetch('https://frozen-beach-02774.herokuapp.com/my-booking', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: user.email })
        }).then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user.email])
    
    const handleDeleteOrder = id => {
        const proceed = window.confirm("Are You Sure Want to Delete Your Order ?")
        if (proceed) {
            const url = `https://frozen-beach-02774.herokuapp.com/all-orders/${id}`
            fetch(url, {
                method: "DELETE"
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingProducts = myOrder.filter(item => item._id !== id);
                        setMyOrder(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className='mx-auto container my-5'>
            <h2 className='text-xl my-5 text-center font-bold'>My Order </h2>
            <p className='my-3 font-semibold'>User Email: {user.email}</p>
            <div>
                {
                    myOrder.length===0? <p className='text-center font-bold'> <CircularProgress /> Loading..  </p>: 
                    myOrder.map(order => <OrderCard
                        key={order._id}
                        handleDeleteOrder={handleDeleteOrder}
                        order={order}
                    />
                )}
            </div>
        </div>
    )
}

export default Myorder
