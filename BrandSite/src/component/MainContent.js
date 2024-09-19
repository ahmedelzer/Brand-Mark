import React, { useEffect, useState } from "react";

import PlayList from "./PlayList";
import { defaultProjectProxyRouteWithoutAPI } from "../request";
import Actions from "./Actions";
import Review from "./Review";
import { mainContentStyles } from "./styles"; // Import the styles

function MainContent({ files, playList, portfolio }) {
  const [file, setFile] = useState(
    files
      ? `${defaultProjectProxyRouteWithoutAPI}${files.displayFiles[0].displayFile}`
      : ""
  );
  const [review, setReview] = useState(false);

  return (
    <div className={mainContentStyles.container}>
      <div className={mainContentStyles.flexWrap}>
        <div className={mainContentStyles.firstColumn}>
          <div
            className={mainContentStyles.rippleEffect}
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <img
              src={file ? file : ""}
              className={mainContentStyles.image}
              alt=""
            />
            <a href="#!">
              <div className={mainContentStyles.hoverOverlay}></div>
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

        <div className={mainContentStyles.secondColumn}>
          <h3 className={mainContentStyles.articleTitle}>{files?.postTitle}</h3>
          <div className={mainContentStyles.articleMeta}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="mr-2 h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>
            Travels
          </div>
          <p className="mb-6 text-sm">
            Published <u>14.01.2022</u> by
            <a href="#!">Lisa McCartney</a>
          </p>
          <p className={mainContentStyles.articleDescription}>
            {files?.postDescription}
          </p>
          <p className={mainContentStyles.articleText}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
            nulla saepe rerum aspernatur odio amet perferendis tempora mollitia?
            Ratione unde magni omnis quaerat blanditiis cumque dolore placeat
            rem dignissimos?
          </p>
          {review && (
            <div className={mainContentStyles.reviewSection}>
              <Review />
            </div>
          )}
          {portfolio && <Actions review={review} setReview={setReview} />}
        </div>
      </div>
    </div>
  );
}

export default MainContent;
