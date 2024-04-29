import React, { useContext } from "react";
import { FiX } from "react-icons/fi";
//link
import { Link } from "react-router-dom";
import { Data } from "./Data";
import { CartContext } from "../context/CartContext";

const CategoryNavMobile = ({ setcatNavMobile }) => {
  const { lan, setLan } = useContext(CartContext);

  return (
    <div className="w-full h-full bg-[#071C35] p-8 ">
      <div
        onClick={() => setcatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl text-white" />
      </div>
      <div className="flex flex-col gap-y-8">
        {Data.map((item) => {
          return (
            <Link
              to={`/matore/${item.id}`}
              title={item.titleEN}
              className=" uppercase font-medium text-white"
              onClick={() => setcatNavMobile(false)}
            >
              {lan === "AR" ? item.titleAR : item.titleEN}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
