import React from "react";
import { localization } from "./Localization";
import { comingSoonStyles } from "./styles"; // Import the styles

function ComingSoon() {
  return (
    <div className={comingSoonStyles.container}>
      <h1 className={comingSoonStyles.title}>
        {localization.comingSoon.title}
      </h1>
      <p className={comingSoonStyles.message}>
        {localization.comingSoon.message}
      </p>
    </div>
  );
}

export default ComingSoon;
