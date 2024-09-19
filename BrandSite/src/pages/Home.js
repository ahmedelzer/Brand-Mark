import React, { useContext, useEffect, useState } from "react";
import Hero from "../component/Hero";
import useFetch from "../hooks/APIsFunctions/useFetch";
import Loading from "../component/Loading";
function Home() {
  const { data, isLoading } = useFetch(
    "/Home/GetFullHomeMainContents?PageSize=11&PageNumber=1"
  );
  console.log(data);
  const [items, setItems] = useState([]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {/* <div
        className={`${
          lan === "AR" ? "text-right" : " text-left"
        } text-[22px] my-6 px-4 text-[#f6cd46]`}
      >
        {lan === "AR" ? "من نحن" : "About Us"}
      </div>
      <div
        className={`${
          lan === "AR" ? "text-right" : "text-left"
        } px-4 text-[17px]`}
      >
        <p>{description}</p>
      </div>
      <div className="slider new-promotions-slider row containers m-auto my-4">
        {items.map((item) => {
          return (
            <div className="col-12 col-md-6" key={item.id}>
              <div className="new-promotions-block">
                <div className="row  mb-4">
                  <div className="col-12 col-lg-12">
                    <Link
                      to={`/matore/${item.id}`}
                      title={lan === "AR" ? item.titleAR : item.titleEN}
                    >
                      <img
                        className="w-100 lazyload w-[440px] h-[385px]"
                        src={item.img}
                        alt={lan === "AR" ? item.titleAR : item.titleEN}
                        title={lan === "AR" ? item.titleAR : item.titleEN}
                      />
                    </Link>
                    <h2 className="text-center">
                      {lan === "AR" ? item.titleAR : item.titleEN}
                    </h2>
                    <div className="text-center promotion-btn">
                      <Link
                        to={`/matore/${item.id}`}
                        title={lan === "AR" ? item.titleAR : item.titleEN}
                        className="bg-[#f6cd46] m-0 hover:bg-[#e1b72e] text-white font-bold py-2 px-4 rounded-md transition duration-300"
                      >
                        {lan === "AR" ? "جربها الان" : "Try Now"}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      {/* <MainContent /> */}
      <Hero />
    </div>
  );
}

export default Home;
