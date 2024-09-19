import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Data } from "./Data";

// import { Swiper, SwiperSlide } from "swiper/react";
//import swper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "../slider.css";
//requireds
// import { Pagination, Navigation } from "swiper";
import { CartContext } from "../context/Language";
function Matore() {
  const { lan, setLan } = useContext(CartContext);

  const { id } = useParams();
  const Department = Data.filter((e) => e.id === id);
  console.log(Department);
  if (id <= 4) {
    return (
      <>
        {/* {Department.map((item) => {
          return (
            <div className=" my-4 containers" key={item.id}>
              <h1 className=" text-center font-bold text-[22px] text-[#f6cd46]  my-4">
                {lan === "AR" ? item.titleAR : item.titleEN}
              </h1>
              <div
                className={`${
                  lan === "AR" ? "text-right" : " text-left"
                } px-4 mt-5 text-[18px]`}
              >
                <p>{lan === "AR" ? item.desAR : item.desEN}</p>
              </div>
              <div className="mt-7">
                <Swiper
                  modules={[Pagination, Navigation]}
                  loop={false}
                  navigation={true}
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
                  className="productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
                >
                  <>
                    {item.imges.map((img, index) => {
                      return (
                        <SwiperSlide key={item.id}>
                          <img key={index} src={img} alt={item.titleAR} />
                        </SwiperSlide>
                      );
                    })}
                  </>
                </Swiper>
              </div>
              <div class="text-center promotion-btn mt-12">
                <a
                  target="_blank"
                  href="https://api.whatsapp.com/send/?phone=96407710772555&text&type=phone_number&app_absent=0"
                  className="bg-[#f6cd46] m-0 hover:bg-[#e1b72e] text-white font-bold py-2 px-4 rounded-md transition duration-300"
                >
                  {lan === "AR" ? "تواصل معنا" : "Contact Us"}
                </a>
              </div>
            </div>
          );
        })} */}
      </>
    );
  } else {
    return <></>;
  }
}

export default Matore;
