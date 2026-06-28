import Product from "./Product";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./slideproduct.css";
const SlideProduct = ({ title, data }) => {
  return (
    <div>
      <div className="slide_products slide">
        <div className="container">
          <div className="top_slide">
            <h2>{title}</h2>
            <p>lorem slide_products top_slide container</p>
          </div>
          <Swiper
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={5}
            navigation={true}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            {data.map((item) => (
              <SwiperSlide>
                <Product item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SlideProduct;
