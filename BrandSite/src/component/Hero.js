import React from "react";
import Card from "./Card";
import MainContent from "./MainContent";
import Posts from "./Posts";
import Content from "./Content";
import useFetch from "../hooks/APIsFunctions/useFetch";
import { localization } from "./Localization";
import { heroStyles } from "./styles";

function Hero() {
  const { data: fullHomeMainContents } = useFetch(
    "Home/GetFullHomeMainContents?PageSize=11&PageNumber=1"
  );
  const { data: postData } = useFetch(
    "Home/GetFullHomeMainContents?PageSize=11&PageNumber=1"
  );
  return (
    <div>
      <div className={heroStyles.landing}>
        <div className={heroStyles.overlay}></div>
        <div className={heroStyles.text}>
          <div className={heroStyles.content}>
            <h2>
              {localization.landing.content.title}
              <br />
              {localization.landing.content.shortDescription}
            </h2>
            <p>{localization.landing.content.longDescription}</p>
          </div>
          <ul className={heroStyles.bullets}>
            <li className={heroStyles.bulletOne}></li>
            <li className={heroStyles.bulletTwoActive}></li>
            <li className={heroStyles.bulletThree}></li>
          </ul>
        </div>
        {/* <i class="fas fa-angle-left change-background fa-2x"></i>
      <i class="fas fa-angle-right change-background fa-2x"></i> */}
      </div>
      {/* <MainContent /> */}
      {/* {mainContent?.dataSource.map((content) => ( */}
      <Content />
      {/* // key={content.homeMainContentID}
      // postTitle={content.postTitle} */}
      {/* ))} */}
      <div className={heroStyles.container}>
        {postData?.dataSource.map((post) => (
          <Card key={post.homePostID} postTitle={post.postTitle} />
        ))}

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Posts data={fullHomeMainContents} />
    </div>
  );
}

export default Hero;
