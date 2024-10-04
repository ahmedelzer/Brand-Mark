import React, { useState } from "react";
import useFetch from "../hooks/APIsFunctions/useFetch";
import { brandServiceCategoryStyles } from "./styles";
import { GetProjectUrl, SetReoute } from "../request";
import serviceSchema from "../Schemas/ServiceSchema/ServiceSchema.json";
function BrandServiceCategory() {
  SetReoute(serviceSchema.projectProxyRoute);
  const { data: categories } = useFetch(
    "/Service/GetServiceCategories?PageSize=100&PageNumber=1",
    GetProjectUrl()
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [des, setDes] = useState(
    categories?.dataSource[0].serviceCategoryDescription
  );
  const handleClick = (index, des) => {
    setActiveIndex(index);
    setDes(des);
  };

  return (
    <div className={brandServiceCategoryStyles.container}>
      <div className={brandServiceCategoryStyles.tabWrapper}>
        {categories?.dataSource.map((tab, index) => (
          <div
            key={tab.serviceCategoryID}
            className={`${brandServiceCategoryStyles.tab} ${
              activeIndex === index
                ? brandServiceCategoryStyles.activeTab
                : brandServiceCategoryStyles.inactiveTab
            }`}
            onClick={() => handleClick(index, tab.serviceCategoryDescription)}
          >
            {tab.serviceCategoryName}
          </div>
        ))}
      </div>
      <h4 className={brandServiceCategoryStyles.description}>
        {des ? des : categories?.dataSource[0].serviceCategoryDescription}
      </h4>
    </div>
  );
}

export default BrandServiceCategory;
