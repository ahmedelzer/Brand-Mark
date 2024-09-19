import React, { useState } from "react";
import useFetch from "../hooks/APIsFunctions/useFetch";
import { brandServiceCategoryStyles } from "./styles";

function BrandServiceCategory() {
  const { data: categories } = useFetch(
    "BrandServiceCategory/GetBrandServiceCategories?PageSize=11&PageNumber=1"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(categories);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={brandServiceCategoryStyles.container}>
      <div className={brandServiceCategoryStyles.tabWrapper}>
        {categories?.dataSource.map((tab, index) => (
          <div
            key={tab.brandServiceCategoryID}
            className={`${brandServiceCategoryStyles.tab} ${
              activeIndex === index
                ? brandServiceCategoryStyles.activeTab
                : brandServiceCategoryStyles.inactiveTab
            }`}
            onClick={() => handleClick(index)}
          >
            {tab.brandServiceCategoryName}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandServiceCategory;
