import React from "react";
import { Link } from "react-router-dom";
import BrandServiceCategory from "./BrandServiceCategory";
import PageHeading from "./PageHeading";
import BrandService from "./BrandService";
import useFetch from "../hooks/APIsFunctions/useFetch";
import { localization } from "./Localization";
import { serviceStyles } from "./styles";

function Service({ services }) {
  console.log("====================================");
  console.log(services);
  console.log("====================================");

  return (
    <section>
      <div className={serviceStyles.container}>
        <div className={serviceStyles.heading}>
          <PageHeading
            subTitle={localization.services.PageHeading.subTitle}
            title={localization.services.PageHeading.title}
            desc={localization.services.PageHeading.desc}
          />
        </div>
        <div className={serviceStyles.categoryWrapper}>
          <BrandServiceCategory />
        </div>
        <div className={serviceStyles.serviceWrapper}>
          {services?.dataSource.map((service) => (
            <BrandService
              key={service.brandServiceID}
              name={service.brandServiceName}
              desc={service.brandServiceDescription}
              img={service.ServiceImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;
