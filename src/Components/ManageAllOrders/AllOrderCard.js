import React, { useState } from 'react';
import { FaUserAstronaut, HiOutlineMail, GrStatusGood, BsFillCameraFill, GoLocation, IoMdCall } from "react-icons/all";
import './order.css'

const AllOrderCard = ({ item, deleteOrder }) => {
    const [isApproved, setIsApproved] = useState(item?.status)

    const changeStatus = id => {
        fetch("http://localhost:5000/update-order", {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ _id: id })
        }).then(res => res.json())
            .then(data => {
                alert("Order Status Approved... 😁");
                setIsApproved("Shipped");
            })
    }

   
    return (
        <div className='manage-order-cart shadow-lg p-2 border-2 rounded-3xl my-2 mx-2 custom-width'>
            <div className='flex flex-col py-2  md:mx-auto text-sm font-medium'>

                <h2 className='flex items-center mt-2 py-2 px-2'> <FaUserAstronaut className='inline-block mr-2' /> Name: <span className='text-yellow-700  ml-1'> {item?.CustomerName}</span></h2>
                <h2 className='flex items-center mt-2 py-2 px-2'> <HiOutlineMail className='inline-block mr-1' /> Email: <span className='text-yellow-700  ml-1'> {item?.email}</span></h2>
                <h2 className='flex items-center mt-2 py-2 px-2'> <IoMdCall className='inline-block mr-1' /> Phone: <span className='text-yellow-700 ml-1'> {item?.phone}</span></h2>
                <h2 className='flex items-center mt-2 py-2 px-2'> <GoLocation className='inline-block mr-1' /> Adress: <span className='text-yellow-700  ml-1'> {item?.adress}</span></h2>
                <h2 className='flex items-center mt-2 py-2 px-2'> <BsFillCameraFill className='inline-block mr-1 text-xl' /> Camera: <span className='text-yellow-700  ml-1'> {item?.orderItem || "Admin Email"}</span></h2>
                <h2 className='flex items-center   py-2  px-2 mt-1 '> <GrStatusGood className='inline-block mr-1 hover:text-white' /> Status: <span className='ml-1 text-yellow-700 '> {isApproved} </span></h2>
                <button onClick={() => changeStatus(item._id)} className='ml-2 border rounded-3xl py-2 cursor-pointer hover:bg-green-700  border-green-700 text-green-600  font-medium hover:text-white px-2 mt-2'>Want Approved ?</button>
                <button onClick={() => deleteOrder(item._id)} className='ml-2 border rounded-3xl py-2 cursor-pointer hover:bg-red-500 bg-yellow-400  font-medium text-black hover:text-white px-2 mt-2'>Delete Order</button>
            </div>
        </div>
    )
}

export default AllOrderCard
