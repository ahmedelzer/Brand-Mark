import React, { useState } from "react";
import Posts from "../component/Posts";
import PageHeading from "../component/PageHeading";
import useFetch from "../hooks/APIsFunctions/useFetch";
import Loading from "../component/Loading";
import MainContent from "../component/MainContent";
import PlayList from "../component/PlayList";
// {
//   "dataSource": [
//       {
//           "postWithDisplayFiles": {
//               "post": {
//                   "postID": "5f78a506-f0f9-43f8-a705-9742c66afd47",
//                   "creationDate": "2024-04-27T15:57:51.33",
//                   "postTitle": "testing",
//                   "postDescription": "done test"
//               },
//               "displayFiles": [
//                   {
//                       "displayFileForPostID": "00683a17-4c06-4779-bc8e-a0790d16c123",
//                       "postID": "5f78a506-f0f9-43f8-a705-9742c66afd47",
//                       "displayFile": "PostFiles\\193d0c55-a837-436d-b2ee-a4cb7bdd8cf6.mp4",
//                       "fileTypeID": "a72beb11-2e0a-4752-a847-bc2ed5da5077",
//                       "indexOfDisplay": 0
//                   }
//               ]
//           },
//           "portfolioWorkID": "1fec8024-c05c-478e-8a97-8d23266a3288",
//           "post": {
//               "postID": "5f78a506-f0f9-43f8-a705-9742c66afd47",
//               "creationDate": "2024-04-27T15:57:51.33",
//               "postTitle": "testing",
//               "postDescription": "done test"
//           },
//           "customerRequestID": "74acbbf2-5295-455d-a5ec-c6a09da24dcb",
//           "postID": "5f78a506-f0f9-43f8-a705-9742c66afd47"
//       }
//   ],
//   "count": 1
// }
function Portfolio() {
  const { data: portfolioWork, isLoading } = useFetch(
    "PortfolioWork/GetFullPortfolioWorks?PageSize=11&PageNumber=1"
  );
  if (isLoading) {
    return <Loading />;
  }
  console.log(
    "portfolioWork",
    portfolioWork?.dataSource[0].postWithDisplayFiles
  );
  let data = [
    { file: "https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg", id: 1 },
    { file: "https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg", id: 2 },
    { file: "https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg", id: 3 },
  ];
  return (
    <section className="">
      <div className="container">
        <div class="heading">
          <PageHeading
            subTitle={"What We Offer"}
            title={"Our Services"}
            desc={"In hac habitasse platea dictumst"}
          />
        </div>
        {/* <div className="flex flex-wrap -mx-4">
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
        </div> */}
        <h2 className="h2 mb-6 text-center xl:text-left">Latest Products</h2>
        {/* <Posts data={data} /> */}
        {portfolioWork?.dataSource.map((item) => (
          <MainContent
            files={item.postWithDisplayFiles}
            playList={true}
            portfolio={true}
          />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
