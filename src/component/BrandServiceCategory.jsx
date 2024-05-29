import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/APIsFunctions/useFetch";

function BrandServiceCategory() {
  const { data: categories } = useFetch(
    "BrandServiceCategory/GetBrandServiceCategories?PageSize=11&PageNumber=1"
  );
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(categories);
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const tabs = ["Posts", "Comments", "Likes", "Shares"];

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="sm:w-fit xs:w-[90%] sm:px-4 py-2 rounded-sm flex md:flex-no-wrap xs:flex-wrap md:gap-4 xs:gap-1 justify-center !bg-primary text-body cursor-pointer md:text-lg md:font-semibold xs:text-sm">
        {categories?.dataSource.map((tab, index) => (
          <div
            key={tab.brandServiceCategoryID}
            className={`px-4 border-b-2 rounded-b-md ${
              activeIndex === index
                ? "!border-accent"
                : "!border-primary hover:!border-accent"
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
