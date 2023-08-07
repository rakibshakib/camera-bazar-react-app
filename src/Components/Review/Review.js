import React, { useEffect, useState } from 'react'
import ReviewCart from './ReviewCart';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/swiper.min.css';

import SwiperCore, { Pagination, Autoplay } from 'swiper/core';

SwiperCore.use([Pagination, Autoplay]);
const Review = () => {
    const [productReview, setProductReview] = useState([])
    useEffect(() => {
        fetch('https://camera-bazar-node-server.onrender.com/review')
            .then(res => res.json())
            .then(data => setProductReview(data))
    }, [])
    return (
        <div className='container mx-auto my-6'>
            <h2 className='text-2xl text-center font-semibold my-6'>Customer Review</h2>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true
                }}
                slidesPerGroup={3}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 6,
                    },
                    426: {
                        slidesPerView: 2,
                        spaceBetween: 6,
                    },
                   
                    769: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    }
                    
                }}
                className="mySwiper"
            >
                {
                    productReview.map(item =>
                        <SwiperSlide>
                            <ReviewCart
                                key={item?._id}
                                item={item}
                            />
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    )
}

export default Review
