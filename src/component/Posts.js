import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
//import swper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Add this line for autoplay
import "../slider.css";
import Card from "./Card";
import Cookies from "js-cookie";
function Posts() {
  const [autoplay, setAutoplay] = useState({});
  SwiperCore.use([Pagination, Navigation, Autoplay]);
  let swiper = document.querySelector("#swiper-product");
  window.onscroll = function () {
    if (window.scrollY >= swiper.offsetTop - 500) {
      setAutoplay({ delay: 1500 });
    }
  };
  const lng = Cookies.get("i18next") || "en"; // Get language from cookies

  // Set direction based on language
  const direction = lng === "ar" ? "rtl" : "ltr";

  return (
    <>
      <div className={`container ${direction} `} id="swiper-product">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={autoplay}
          loop={true}
          dir={lng === "ar" ? "rtl" : "ltr"}
          navigation={false}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
          }}
          pagination={{
            clickable: true,
          }}
          className="productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px] "
        >
          <SwiperSlide className="ltr">
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Posts;
