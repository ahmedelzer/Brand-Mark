import React, { useEffect, useRef, useState } from "react";
import image from "../assets/Hero.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay"; // Add this line for autoplay
import "../slider.css";
import Cookies from "js-cookie";
import i18next from "i18next";
function Card({ postTitle, description, src, type, setIsEnded }) {
  const videoRef = useRef(null);
  const [autoplay, setAutoplay] = useState({});
  const [isSEnded, setIsSEnded] = useState(false);
  const [typeFile, setType] = useState("");
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
      if (isSEnded === true || type === "image") {
        setAutoplay({ delay: 1500 });
      } else {
        setAutoplay({ delay: 11119 });
      }
    }
    console.log(type, isSEnded, autoplay);
  }, [type, isSEnded, postion]);
  const lng = Cookies.get("i18next") || "en";
  SwiperCore.use([Pagination, Navigation, Autoplay]);
  useEffect(() => {
    setDir(i18next.dir());
  }, [lng]);
  const handleVideoEnd = () => {
    console.log("Video ended!");
    setIsEnded(true);
  };

  const handleType = () => {
    src?.map((file) => {
      switch (type) {
        case "image":
          return (
            <img
              className="w-full"
              id="myVideo"
              src={src}
              alt="Sunset in the mountains"
            />
          );
        case "video":
          return (
            <video
              ref={videoRef}
              autoPlay
              // loop
              controls
              muted
              onEnded={handleVideoEnd}
              className="shadow-lg"
            >
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );
        default:
          return null;
      }
    });
  };
  return (
    <div class="max-w-sm rounded overflow-hidden bg-card card-shadow shadow-lg my-4 ">
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
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
        pagination={{
          clickable: true,
        }}
        className="productSlider mySwiper mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px] "
      >
        {handleType()}
      </Swiper>
      <div class="px-6 py-4">
        <div class="font-bold text-accent text-xl mb-2">{postTitle}</div>
        <p class="text-base">
          {description}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block !bg-body text-white  rounded-full px-3 py-1 text-sm font-semibold  mr-2 mb-2">
          #photography
        </span>
        <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-body mr-2 mb-2">
          #travel
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
}

export default Card;
