import React, { useEffect, useState } from 'react'
import ManageProductCard from './ManageProductCard';
import CircularProgress from '@mui/material/CircularProgress';

const ManageProduct = () => {
    const [cameras, setCameras] = useState([])

    useEffect(() => {
        fetch("https://frozen-beach-02774.herokuapp.com/cameras")
            .then(res => res.json())
            .then(data => setCameras(data))
    }, [])

    const handleDeleteOrder = id => {
        console.log(id)
        const proceed = window.confirm("Are You Sure Want to Delete This Product ?")
        if (proceed) {
            const url = `https://frozen-beach-02774.herokuapp.com/all-cameras/${id}`
            fetch(url, {
                method: "DELETE"
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Deleted Successfully");
                        const remainingProducts = cameras.filter(item => item._id !== id);
                        setCameras(remainingProducts);
                    }
                })
        }
    }
    return (
        <div className='my-6'>
            <h2 className='text-center font-semibold text-xl'>Manage All Product</h2>
            <p className='font-semibold text-xl'>Total Product: {cameras.length}</p>
            {
                cameras.length===0 ? <p className='text-center font-bold'> <CircularProgress /> Loading..  </p> 
                :
                cameras.map(camera => <ManageProductCard 
                    key={camera._id}
                    camera={camera}
                    handleDeleteOrder={handleDeleteOrder}
                    />)
            }
        </div>
    )
}

export default ManageProduct
