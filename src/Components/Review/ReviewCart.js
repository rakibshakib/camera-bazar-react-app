import { Rating } from '@mui/material'
import React from 'react'

const ReviewCart = ({ item }) => {
    return (
        <div className='my-2 mx-5 border rounded-xl'>
            <div className='flex flex-col py-5 px-5 justify-items-center items-center gap-5'>
                <Rating name="read-only" value={item.reviewRating} readOnly />
                <p className='text-center'>{item.review}</p>
                <h2 className='font-semibold'>{item.name}</h2>
            </div>
        </div>
    )
}

export default ReviewCart
