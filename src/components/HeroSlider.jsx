import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HeroSlider = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
            loop={true}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br />
                  360controller
                </h3>
                <p>Windows Xp/10/7/8 ps3, TV Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero1.jpg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br />
                  360controller
                </h3>
                <p>Windows Xp/10/7/8 ps3, TV Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero2.jpg"></img>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br />
                  360controller
                </h3>
                <p>Windows Xp/10/7/8 ps3, TV Box</p>
                <Link to="/" className="btn">
                  Shop Now
                </Link>
              </div>
              <img src="/src/img/banner_Hero3.jpg"></img>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
