import React from "react";
import { Link } from "react-router-dom";
import { localization } from "./Localization";
import { notFoundStyles } from "./styles"; // Import the styles

function NotFound404() {
  return (
    <section className={notFoundStyles.section}>
      <div className={notFoundStyles.container}>
        <div className={notFoundStyles.content}>
          <h2 className={notFoundStyles.title}>
            <span className="sr-only">{localization.notFound.error}</span>
            {localization.notFound.codeError}
          </h2>
          <p className={notFoundStyles.message}>
            {localization.notFound.message}
          </p>
          <Link to="/" className={notFoundStyles.button}>
            {localization.notFound.backToHome}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound404;
