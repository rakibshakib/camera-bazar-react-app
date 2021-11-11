import React from 'react'

const ManageProductCard = ({camera, handleDeleteOrder}) => {
    return (
        <div className='border rounded-2xl p-5 my-3'>
                <div className='flex flex-col md:flex-row justify-items-start md:justify-between items-center p-2'>
                    <div>
                        <h2 className="font-medium text-md py-2">{camera.cameraName}</h2>
                    </div>
                    <button onClick={()=> handleDeleteOrder(camera._id)} className='border p-3 font-medium bg-yellow-400 rounded-2xl'>Delete Product</button>
                </div>
            </div>
    )
}

export default ManageProductCard
