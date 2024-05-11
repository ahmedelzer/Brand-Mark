import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import image from "../assets/Hero.jpg";
import v from "../assets/VID_20240109_061602_248.mp4";

//import swper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Add this line for autoplay
import "../slider.css";
import Card from "./Card";
import Cookies from "js-cookie";
import i18next from "i18next";
function Posts() {
  const [autoplay, setAutoplay] = useState({});
  const [isEnded, setIsEnded] = useState(false);
  const [type, setType] = useState("");
  const [postion, setPostion] = useState(false);
  const [dir, setDir] = useState(i18next.dir());
  let swiper = document.querySelector("#swiper-product");
  const handleSlideChange = (swiper) => {
    // Get the current slide
    const currentSlide = swiper.slides[swiper.realIndex];
    // Check if the current slide is a video or an image
    const type = currentSlide.getAttribute("data-type");
    setType(type);
  };
  window.onscroll = function () {
    if (window.scrollY >= swiper?.offsetTop - 500) {
      setPostion(true);
    } else {
      setPostion(false);
    }
  };
  useEffect(() => {
    if (postion === true) {
      if (isEnded === true || type === "image") {
        setAutoplay({ delay: 1500 });
      } else {
        setAutoplay({ delay: 11119 });
      }
    }
    console.log(type, isEnded, autoplay);
  }, [type, isEnded, postion]);
  const lng = Cookies.get("i18next") || "en";
  SwiperCore.use([Pagination, Navigation, Autoplay]);
  useEffect(() => {
    setDir(i18next.dir());
  }, [lng]);
  let data = [
    { scr: image, type: "image" },
    { scr: v, type: "video" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
    { scr: image, type: "image" },
  ];
  return (
    <>
      <div className={`container`} id="swiper-product">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={autoplay}
          // loop={true}
          dir={dir}
          // dir="rtl"
          navigation={false}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
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
          className="productSlider mySwiper mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px] "
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide key={index} data-type={item.type}>
                <Card src={item.scr} type={item.type} setIsEnded={setIsEnded} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Posts;
