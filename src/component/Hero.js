import React from "react";
import Card from "./Card";
import MainContent from "./MainContent";
import Posts from "./Posts";
import Content from "./Content";

function Hero() {
  return (
    <div>
      <div class="landing">
        <div class="overlay"></div>
        <div class="text">
          <div class="content">
            <h2>
              Hello World!
              <br />
              We Are Kasper We Make Art.
            </h2>
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at
              sem. Mauris blandit aliquet elit, eget tincidunt.
            </p>
          </div>
          <ul class="bullets pt-12">
            <li class="one"></li>
            <li class="two active"></li>
            <li class="three"></li>
          </ul>
        </div>
        {/* <i class="fas fa-angle-left change-background fa-2x"></i>
      <i class="fas fa-angle-right change-background fa-2x"></i> */}
      </div>
      {/* <MainContent /> */}
      <Content />
      <div class="container my-5 flex-1 flex-wrap lg:items-center sm:justify-center flex-row gap-4 flex justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Posts />
    </div>
  );
}

export default Hero;
