import React from "react";
import MainContent from "./MainContent";
import { contentStyles } from "./styles"; // Import the styles

function Content({ postTitle }) {
  return (
    <div className={contentStyles.container}>
      <section className={contentStyles.section}>
        <h2 className={contentStyles.title}>Latest articles {postTitle}</h2>
        {/* " lg:flex-row-reverse" that make direction change  */}
        <div className={contentStyles.flexWrap}>
          <div className={contentStyles.firstColumn}>
            <div
              className={contentStyles.rippleEffect}
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/079.jpg"
                className={contentStyles.image}
                alt="Louvre"
              />
              <a href="#!">
                <div className={contentStyles.hoverOverlay}></div>
              </a>
            </div>
          </div>

          <div className={contentStyles.secondColumn}>
            <h3 className={contentStyles.articleTitle}>Stock market boom</h3>
            <div className={contentStyles.articleMeta}>
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
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>
              Business
            </div>
            <p className={contentStyles.articleDescription}>
              Published <u>10.01.2022</u> by
              <a href="#!">Joe Svan</a>
            </p>
            <p className={contentStyles.articleText}>
              Sed sollicitudin purus sed nulla dignissim ullamcorper...
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
