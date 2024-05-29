import React, { useEffect, useState } from "react";
import image from "../assets/Logo.jpg";
import PlayList from "./PlayList";
import { BiSolidLike } from "react-icons/bi";
import { IoMdEye } from "react-icons/io";
import { defaultProjectProxyRouteWithoutAPI } from "../request";
//hum.ddnsking.com:8002/BrandingMart/PostFiles//193d0c55-a837-436d-b2ee-a4cb7bdd8cf6.mp4
// "postWithDisplayFiles": {
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
//           }
function MainContent({ files, playList, portfolio }) {
  const [file, setFile] = useState(
    files
      ? `${defaultProjectProxyRouteWithoutAPI}${files.displayFiles[0].displayFile}`
      : ""
  );
  const [liks, setLiks] = useState(0);
  const [views, setViews] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isView, setIsView] = useState(false);
  const toggleLike = () => {
    setIsLiked(!isLiked);
    if (isLiked) {
      setLiks(liks - 1);
    } else {
      setLiks(liks + 1);
    }
  };
  const toggleView = () => {
    setIsView(!isView);
    if (isView) {
      setViews(views - 1);
    } else {
      setViews(views + 1);
    }
  };

  return (
    <div className="">
      <div class="mb-16 flex flex-wrap">
        <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:px-6">
          <div
            class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img src={file ? file : ""} class="w-full" alt="Louvre" />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
          {playList ? (
            <PlayList
              files={files.displayFiles}
              setFile={setFile}
              isFile={file}
            />
          ) : null}
        </div>

        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pl-6 relative">
          <h3 class="mb-4 text-2xl font-bold">{files?.postTitle}</h3>
          <div class="mb-4 flex items-center text-sm font-medium text-danger dark:text-danger-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="mr-2 h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
            Travels
          </div>
          <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
            Published <u>14.01.2022</u> by
            <a href="#!">Lisa McCartney</a>
          </p>
          <p class="mb-6 text-neutral-500 dark:text-neutral-300">
            {files?.postDescription}
          </p>
          <p class="text-neutral-500 dark:text-neutral-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
            nulla saepe rerum aspernatur odio amet perferendis tempora mollitia?
            Ratione unde magni omnis quaerat blanditiis cumque dolore placeat
            rem dignissimos?
          </p>
          {portfolio ? (
            <div className=" text-right flex absolute right-0 lg:mt-[20px]">
              <div className="mx-2 flex">
                <p className=" font-bold text-[24px]">{views}</p>

                <div className="p-2 transition-all duration-300 hover:!bg-primary hover:rounded-full">
                  <IoMdEye
                    size={24}
                    onClick={toggleView}
                    // onClick={() => setIsLiked(!isLiked)}
                    className={`${
                      isView ? "!text-accent" : ""
                    } text-current hover:text-accent cursor-pointer`}
                  />
                </div>
              </div>
              <div className="mx-2 flex">
                <p className=" font-bold text-[24px]">{liks}</p>
                <div className="p-2 transition-all duration-300 hover:!bg-primary hover:rounded-full">
                  <BiSolidLike
                    size={24}
                    onClick={toggleLike}
                    // onClick={() => setIsLiked(!isLiked)}
                    className={`${
                      isLiked ? "!text-accent" : ""
                    } text-current hover:text-accent cursor-pointer`}
                  />
                </div>
              </div>

              {/* <BiSolidLike
                size={24}
                className="mx-4 hover:text-accent transition-all cursor-pointer"
              /> */}
            </div>
          ) : null}
        </div>
      </div>
      {/* 
      <div class="mb-16 flex flex-wrap lg:flex-row-reverse">
        <div class="mb-6 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-6/12 lg:pl-6">
          <div
            class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.jpg"
              class="w-full"
              alt="Louvre"
            />
            <a href="#!">
              <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
            </a>
          </div>
        </div>

        <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:pr-6">
          <h3 class="mb-4 text-2xl font-bold">postTitle</h3>
          <div class="mb-4 flex items-center text-sm font-medium text-primary dark:text-primary-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="mr-2 h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
              />
            </svg>
            Art
          </div>
          <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
            Published <u>12.01.2022</u> by
            <a href="#!">Anna Doe</a>
          </p>
          <p class="text-neutral-500 dark:text-neutral-300">
            Duis sagittis, turpis in ullamcorper venenatis, ligula nibh porta
            dui, sit amet rutrum enim massa in ante. Curabitur in justo at lorem
            laoreet ultricies. Nunc ligula felis, sagittis eget nisi vitae,
            sodales vestibulum purus. Vestibulum nibh ipsum, rhoncus vel
            sagittis nec, placerat vel justo. Duis faucibus sapien eget tortor
            finibus, a eleifend lectus dictum. Cras tempor convallis magna id
            rhoncus. Suspendisse potenti. Nam mattis faucibus imperdiet. Proin
            tempor lorem at neque tempus aliquet. Phasellus at ex volutpat,
            varius arcu id, aliquam lectus. Vestibulum mattis felis quis ex
            pharetra luctus. Etiam luctus sagittis massa, sed iaculis est
            vehicula ut.
          </p>
        </div>
      </div> */}
    </div>
  );
}

export default MainContent;
