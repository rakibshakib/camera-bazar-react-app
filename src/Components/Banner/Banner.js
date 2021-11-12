import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/swiper.min.css";
import banner1 from "../../images/banner1.png";
import banner2 from "../../images/banner2.png";
import banner3 from "../../images/banner3.png";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="container mx-auto">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 6,
          },
          426: {
            slidesPerView: 1,
            spaceBetween: 6,
          },

          769: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="banner-img">
            <img src={banner1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-img">
            <img src={banner2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-img">
            <img src={banner3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
