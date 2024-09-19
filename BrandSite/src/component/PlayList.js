import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../slider.css";
import Card from "./Card";
import Cookies from "js-cookie";
import i18next from "i18next";
import { postsStyles } from "./styles"; // Import the styles

function Posts({ data }) {
  const [autoplay, setAutoplay] = useState({});
  const [isEnded, setIsEnded] = useState(false);
  const [type, setType] = useState("");
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
      if (isEnded === true || type === "image") {
        setAutoplay({ delay: 1500 });
      } else {
        setAutoplay({ delay: 11119 });
      }
    }
    console.log(type, isEnded, autoplay);
  }, [type, isEnded, position]);

  const lng = Cookies.get("i18next") || "en";
  SwiperCore.use([Pagination, Navigation, Autoplay]);

  useEffect(() => {
    setDir(i18next.dir());
  }, [lng]);

  return (
    <>
      <div className={postsStyles.container} id="swiper-product">
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
          className={postsStyles.swiper}
        >
          {data?.dataSource.map((item) => (
            <SwiperSlide key={item?.postID} data-type={item.type}>
              <Card
                postTitle={item?.postWithDisplayFiles.post.postTitle}
                src={item?.postWithDisplayFiles.displayFiles}
                description={item?.postWithDisplayFiles.post.postDescription}
                type={item?.type}
                setIsEnded={setIsEnded}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Posts;
