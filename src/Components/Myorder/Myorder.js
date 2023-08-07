import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth'
import OrderCard from './OrderCard';

const Myorder = () => {
    const [myOrder, setMyOrder] = useState([])
    const { user } = useAuth();
  

    useEffect(() => {
        fetch('https://camera-bazar-node-server.onrender.com/my-booking', {
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
            const url = `https://camera-bazar-node-server.onrender.com/all-orders/${id}`
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
                    myOrder.length===0? <p className='text-center font-bold'> You Have Not Any Order </p>: 
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
