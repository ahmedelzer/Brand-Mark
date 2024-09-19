import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../slider.css";
import Cookies from "js-cookie";
import i18next from "i18next";
import { cardStyles } from "./styles"; // Import the styles

function Card({ postTitle, description, src, type, setIsEnded }) {
  const videoRef = useRef(null);
  const [autoplay, setAutoplay] = useState({});
  const [isSEnded, setIsSEnded] = useState(false);
  const [typeFile, setType] = useState("");
  const [position, setPosition] = useState(false);
  const [dir, setDir] = useState(i18next.dir());
  let swiper = document.querySelector("#swiper-product");

  const handleSlideChange = (swiper) => {
    const currentSlide = swiper.slides[swiper.realIndex];
    const type = currentSlide.getAttribute("data-type");
    setType(type);
  };

  window.onscroll = function () {
    if (window.scrollY >= swiper?.offsetTop - 500) {
      setPosition(true);
    } else {
      setPosition(false);
    }
  };

  useEffect(() => {
    if (position === true) {
      if (isSEnded === true || type === "image") {
        setAutoplay({ delay: 1500 });
      } else {
        setAutoplay({ delay: 11119 });
      }
    }
    console.log(type, isSEnded, autoplay);
  }, [type, isSEnded, position]);

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
    return src?.map((file) => {
      switch (type) {
        case "image":
          return (
            <img
              className={cardStyles.image}
              id="myVideo"
              src={file}
              alt="Media content"
            />
          );
        case "video":
          return (
            <video
              ref={videoRef}
              autoPlay
              controls
              muted
              onEnded={handleVideoEnd}
              className={cardStyles.video}
            >
              <source src={file} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className={cardStyles.container}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={autoplay}
        dir={dir}
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
        className={cardStyles.swiper}
      >
        {handleType()}
      </Swiper>
      <div className={cardStyles.contentContainer}>
        <div className={cardStyles.title}>{postTitle}</div>
        <p className={cardStyles.description}>
          {description}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className={cardStyles.tagContainer}>
        <span className={`${cardStyles.tag} ${cardStyles.tagPhotography}`}>
          #photography
        </span>
        <span className={`${cardStyles.tag} ${cardStyles.tagTravel}`}>
          #travel
        </span>
        <span className={`${cardStyles.tag} ${cardStyles.tagWinter}`}>
          #winter
        </span>
      </div>
    </div>
  );
}

export default Card;
