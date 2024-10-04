import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
//link
import { Link } from "react-router-dom";
import { categoryNavMobileStyles } from "./style";
import { LanguageContext } from "../../context/Language";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { localization } = useContext(LanguageContext);
  console.log("====================================");
  console.log(localization.routes);
  console.log("====================================");

  return (
    <div className={categoryNavMobileStyles.container}>
      <div
        onClick={() => setCatNavMobile(false)}
        className={categoryNavMobileStyles.closeButtonWrapper}
      >
        <FiX className={categoryNavMobileStyles.closeButtonIcon} />
      </div>
      <div className={categoryNavMobileStyles.linkWrapper}>
        {localization.routes?.map((item) => (
          <Link
            key={item.id} // Add a unique key
            to={item.route}
            title={item.title}
            className={categoryNavMobileStyles.link}
            onClick={() => setCatNavMobile(false)}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
