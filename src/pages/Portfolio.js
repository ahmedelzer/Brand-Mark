import React from "react";
import Posts from "../component/Posts";

function Portfolio() {
  return (
    <section className="pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-accent mb-2 block">
                Our Portfolio
              </span>
              <h2
                className="
                  font-bold
                   !text-primary
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
              >
                What We Offer
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
        <Posts />
      </div>
    </section>
  );
}

export default Portfolio;
