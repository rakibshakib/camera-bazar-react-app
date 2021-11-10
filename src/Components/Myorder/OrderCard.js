import React from 'react'

const OrderCard = ({ order, handleDeleteOrder }) => {

    
    return (
        <div>
            <div className='border rounded-2xl p-5 my-3'>
                <div className='flex flex-col md:flex-row justify-items-start md:justify-between items-center p-2'>
                    <div>
                        <h2 className="font-medium text-md py-2">{order.orderItem}</h2>
                        <h2>Price: {order?.price}</h2>
                    </div>
                    <button onClick={()=> handleDeleteOrder(order._id)} className='border p-3 font-medium bg-yellow-400 rounded-2xl'>Delete Order</button>
                </div>
            </div>
        </div>
    )
}

export default OrderCard
