import React from "react";
import CheckBox from "../component/CheckBox";
import Service from "../component/Service";
import useFetch from "../hooks/APIsFunctions/useFetch";
import Loading from "../component/Loading";

function Services() {
  const {
    data: services,
    isLoading,
    error,
  } = useFetch("BrandService/GetBrandServices?PageSize=1&PageNumber=1");
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    // Handle error, e.g., display an error message
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <Service services={services} />
    </div>
  );
}

export default Services;
