import React, { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
// import swper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "../slider.css";
//requireds
import Cookies from "js-cookie";
import i18next from "i18next";
import { defaultProjectProxyRouteWithoutAPI } from "../request";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
function PlayList({ files, setFile, isFile }) {
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
  return (
    <>
      <div className="con my-5 relative flex justify-between !text-white flex-wrap md:flex-nowrap">
        <div className="w-[100%]">
          {/* two */}
          <ul className="">
            <li className=" text-decoration-none ">
              <Swiper
                className=" my-8"
                modules={[Pagination, Navigation]}
                loop={false}
                navigation={true}
                breakpoints={{
                  200: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  1440: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
                // pagination={{
                //   clickable: true,
                // }}
              >
                {files.map((file) => {
                  return (
                    <SwiperSlide key={file.displayFileForPostID}>
                      <button
                        onClick={() =>
                          setFile(
                            defaultProjectProxyRouteWithoutAPI +
                              file.displayFile
                          )
                        }
                        className={`${
                          defaultProjectProxyRouteWithoutAPI +
                            file.displayFile ===
                          isFile
                            ? "border border-x-black border-y-black"
                            : ""
                        } duration-300 transition-all rounded-md hover:opacity-70 cursor-pointer bg-transparent overflow-hidden`}
                      >
                        <img
                          src={
                            defaultProjectProxyRouteWithoutAPI +
                            file.displayFile
                          }
                          className=" md:rounded-[0px] rounded-sm"
                          alt=""
                        />
                      </button>
                    </SwiperSlide>
                  );
                })}
                {/* <SwiperSlide>
                  <img
                    src={isFile}
                    className=" md:rounded-[0px] rounded-sm"
                    alt=""
                  />
                </SwiperSlide> */}
              </Swiper>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default PlayList;
